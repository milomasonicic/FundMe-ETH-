const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SupModule = buildModule("SupModule", (m) => {
  const support = m.contract("support");

  return { support };
});

module.exports = SupModule;