import tape from 'tape'
import Common from '../../../../common/dist'
import { BN } from '../../../../util/dist'
import { baseSetup, params, baseRequest, createClient, createManager, startRPC } from '../helpers'

const method = 'eth_chainId'

tape(`${method}: calls`, (t) => {
  const server = baseSetup()

  const req = params(method, [])
  const expectRes = (res: any) => {
    const msg = 'chainId should be a string'
    if (typeof res.body.result !== 'string') {
      throw new Error(msg)
    } else {
      t.pass(msg)
    }
  }
  baseRequest(t, server, req, 200, expectRes)
})

tape(`${method}: returns 1 for Mainnet`, (t) => {
  const server = baseSetup()

  const req = params(method, [])
  const expectRes = (res: any) => {
    const msg = 'should return chainId 1'
    t.equal(res.body.result, '0x1', msg)
  }
  baseRequest(t, server, req, 200, expectRes)
})

tape(`${method}: returns 3 for Ropsten`, (t) => {
  const manager = createManager(
    createClient({ opened: true, commonChain: new Common({ chain: 'ropsten' }) })
  )
  const server = startRPC(manager.getMethods())

  const req = params(method, [])
  const expectRes = (res: any) => {
    const msg = 'should return chainId 3'
    t.equal(res.body.result, '0x3', msg)
  }
  baseRequest(t, server, req, 200, expectRes)
})

tape(`${method}: returns 42 for Kovan`, (t) => {
  const manager = createManager(
    createClient({ opened: true, commonChain: new Common({ chain: 'kovan' }) })
  )
  const server = startRPC(manager.getMethods())

  const req = params(method, [])
  const expectRes = (res: any) => {
    const msg = 'should return chainId 42'
    const chainId = new BN(42).toString(16)
    t.equal(res.body.result, `0x${chainId}`, msg)
  }
  baseRequest(t, server, req, 200, expectRes)
})
