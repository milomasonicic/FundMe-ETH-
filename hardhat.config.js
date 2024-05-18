require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    localganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["0x43ac855828adea8bf200d07202835ba68cb14df755e9e9c33b6b6cdfa15ca6f0"]
    }
  }
};
