import { Block, BlockBodyBuffer, BlockBuffer } from '@ethereumjs/block'
import { Peer } from '../../net/peer'
import { EthProtocolMethods } from '../../net/protocol'
import { Job } from './types'
import { BlockFetcherBase, JobTask, BlockFetcherOptions } from './blockfetcherbase'

/**
 * Implements an eth/66 based block fetcher
 * @memberof module:sync/fetcher
 */
export class BlockFetcher extends BlockFetcherBase<Block[], Block> {
  /**
   * Create new block fetcher
   * @param {BlockFetcherOptions}
   */
  constructor(options: BlockFetcherOptions) {
    super(options)
  }

  /**
   * Requests blocks associated with this job
   * @param job
   */
  async request(job: Job<JobTask, Block[], Block>): Promise<Block[]> {
    const { task, peer } = job
    const { first, count } = task
    const headersResult = await (peer!.eth as EthProtocolMethods).getBlockHeaders({
      block: first,
      max: count,
    })
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!headersResult) {
      // Catch occasional null responses from peers who do not return block headers from peer.eth request
      this.config.logger.warn(
        `peer ${peer?.id} returned no headers for blocks ${first}-${first.addn(count)} from ${
          peer?.address
        }`
      )
      return []
    }
    const headers = headersResult[1]
    const bodiesResult = await peer!.eth!.getBlockBodies({ hashes: headers.map((h) => h.hash()) })
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!bodiesResult) {
      // Catch occasional null responses from peers who do not return block bodies from peer.eth request
      this.config.logger.warn(
        `peer ${peer?.id} returned no bodies for blocks ${first}-${first.addn(count)} from ${
          peer?.address
        }`
      )
      return []
    }
    const bodies = bodiesResult[1]
    const blocks: Block[] = bodies.map(([txsData, unclesData]: BlockBodyBuffer, i: number) => {
      const opts = {
        common: this.config.chainCommon,
        hardforkByBlockNumber: true,
      }
      const values: BlockBuffer = [headers[i].raw(), txsData, unclesData]
      return Block.fromValuesArray(values, opts)
    })
    return blocks
  }

  /**
   * Process fetch result
   * @param  job fetch job
   * @param  result fetch result
   * @return {*} results of processing job or undefined if job not finished
   */
  process(job: Job<JobTask, Block[], Block>, result: Block[]) {
    if (result.length === job.task.count) {
      return result
    } else if (result.length > 0 && result.length < job.task.count) {
      // Adopt the start block/header number from the remaining jobs
      // if the number of the results provided is lower than the expected count
      const lengthDiff = job.task.count - result.length
      const adoptedJobs = []
      while (this.in.length > 0) {
        const job = this.in.remove()
        if (job) {
          job.task.first = job.task.first.subn(lengthDiff)
          adoptedJobs.push(job)
        }
      }
      for (const job of adoptedJobs) {
        this.in.insert(job)
      }
      return result
    }
    return
  }

  /**
   * Store fetch result. Resolves once store operation is complete.
   * @param {Block[]} blocks fetch result
   * @return {Promise}
   */
  async store(blocks: Block[]) {
    await this.chain.putBlocks(blocks)
  }

  /**
   * Returns a peer that can process the given job
   * @param  job job
   * @return {Peer}
   */
  // TODO: find out what _job is supposed to be doing here...
  peer(): Peer {
    return this.pool.idle((p: any) => p.eth)
  }
}
