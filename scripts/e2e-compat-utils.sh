#!/usr/bin/env bash

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Utilities for backwards compatibility tests. (See e2e-compat-tests for more)
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# Exit immediately on error
set -o errexit

# Directory to stage backwards-compatibility dependencies and tests in
E2E_TEST_DIRECTORY="e2e_test"


# Installs a testbed for checking the backwards compatibility of current monorepo state
# with previously published sub-dependencies. The "old dependency" is installed from npm,
# the current monorepo state is installed from an ephemeral npm registry spun up in CI.
#
# USAGE:   setup_compatibility_test <old-sub-dependency> <virtually-published-package>
# EXAMPLE: setup_compatibility_test @ethereumjs/tx@3.0.2 @ethereumjs/vm@e2e
setup_compatibility_test(){
  only_in_ci

  mkdir $E2E_TEST_DIRECTORY
  cd $E2E_TEST_DIRECTORY
  npm init --yes
  yarn add $1
  yarn add $2 --registry http://localhost:4873 --network-timeout 500000
  cd ..
}

# Clean up
teardown_compatibility_test(){
  only_in_ci
  rm -rf $E2E_TEST_DIRECTORY
  rm tsconfig.json
}

# Warn people against running this locally
only_in_ci(){

  if [ -z "$CI" ]; then

    echo "===================================================================================="
    echo "This script installs dependencies as part of an test. Only run in CI or with CI=true."
    echo "===================================================================================="

    exit 1

  fi
}
