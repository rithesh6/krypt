
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/pkkLGOkO9oe79DN_bRAdYYuTBAh-mZFS',
      accounts: [ '6629bb50000a215ec20b0ae7ba257828c48f878bd65c3e66827572f015972f9c' ]
    }
  }
}