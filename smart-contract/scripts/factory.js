// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Factory = await hre.ethers.getContractFactory("SavingsFactory");
  const swapProxyAddress = "0x1465Fa7F9D1C26FE42D9ace8D3b3001bC060a201";
  const factory = await Factory.deploy(swapProxyAddress);

  await factory.deployed();

  console.log("factory deployed to ", factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// npx hardhat run scripts/swap.js