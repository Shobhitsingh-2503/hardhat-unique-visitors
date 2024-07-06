const { ethers } = require("hardhat");
const {
  abi,
  bytecode,
} = require("../artifacts/contracts/Counter.sol/Counter.json");
const { ContractFactory } = require("ethers");
const { configDotenv } = require("dotenv");

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.JSON_PROVIDER);

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const counterFactory = new ethers.ContractFactory(abi, bytecode, wallet);
  const counter = await counterFactory.deploy();
  console.log(`Deployed at ${counter.target}`);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
  });
