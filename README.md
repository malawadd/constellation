
# Hasala

  
<h1 align="center">
  <br>
  <a href=""><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZjbSOYsv0NYEuY2tu4W-qPL3AdClTIyEYZUptB9oXgr88xGoTh9EFYWGwwkwL5UqAyesp1h9NoM6-FXoTOwgaZl4xKCNfWuv7L8KGrh-1NKOWbupNmCkFQtNWGTq1cCJf_1cI5zC2B4BZtrEEM3s-b2hRg9W8Oxl2WqD3Hjo4gOWAl6DL5g80U_lHh8g/s945/paper2.png" width="300"></a>
  <br>
  Hasala
  <br>
</h1>

<h4 align="center">A Next-Gen Crypto Moneybox</h4>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#usage">Usage</a> •
  <a href="#local-deployment">Local deployment</a> •
  <a href="#smart-contracts-deployments ">smart contracts deployments </a> •
  <a href="#credits">Credits </a> •
  <a href="#license">License</a>
</p>

![screenshot](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPgYC8zsPzgfxyTc6dJ_j3aiWgd3XCxBkjgBKsB1rVFnVN9MnGxCm6eYW7iA33j7DitTlCo1cdx5i9_4J6wGIXiNhWE-wwFjvZbSb_hBiZh3z_mq1OzmVToorGUo-Pr2K2AR0yAfgk5g0K8ytSsIXyMtTL7qk5jO9qrezMVW6bv68p7gYGovn3MugZmhs/s1000/Untitled-1.png)

## Introduction 

Welcome to Hasalah, an innovative and seamless approach to managing your cryptocurrency investments. Hasalah, which means "moneybox" in Arabic, is a groundbreaking project designed to simplify and enhance your crypto experience. Our platform is built on the foundation of reliable, cutting-edge technologies, offering a unique blend of automation and user-friendly interaction.

## Key Features

Key Features of Beam :
#### 1. Smart Contract Creation:

- **Customizable Contracts:** Users can create their own Hasalah Contracts, selecting from a range of whitelisted tokens like LINK and USDC.
- **Flexibility in Token Distribution:** Decide your preferred token distribution, for instance, allocating 50% to ETH and 50% to LINK.

#### 2. Chainlink Automation Service:

- **Automated Exchanges:** Utilize Chainlink's renowned automation service to automatically convert a portion of your tokens (e.g., 50% of ETH) into another (e.g., LINK), using Uniswap for the transaction.
- **Efficient Transaction Processing:** Benefit from the reliability and speed of Chainlink's infrastructure for all your exchanges.

#### 3. User Interface Powered by The Graph:

- **Blockchain Querying:** The Graph is employed to query blockchain data efficiently, ensuring you have the latest information at your fingertips.
- **Enhanced User Experience**: Experience a seamless and intuitive UI, tailored to provide a comprehensive overview of your investments.

#### 4. ENS Integration:
- **Personalized User Profiles:** ENS (Ethereum Name Service) is integrated to display user usernames and avatars, adding a personal touch to your investment journey.

## Usage

#### **Step 1: Create Your Hasalah Contract**
- Navigate to the contract creation page.
- Select your preferred tokens and define your distribution ratio.

#### **Step 2: Deploy and Fund Your Contract**
- Deploy your custom Hasalah Contract.
- Send your chosen token (e.g., ETH) to the deployed contract.

####  **Step 3: Enjoy Automated Exchanges**
- The contract, powered by Chainlink Automation, will automatically exchange a portion of your token into your selected secondary token.
- The new token distribution will be executed as per your predefined settings.

#### **Step 4: Track and Manage**
- Use the intuitive UI to monitor your investments.
- The Graph and ENS integration ensures you have a comprehensive and personalized overview of your portfolio.

## Local deployment



a. in the [webapp](./webapp/README.md)  directory, run:


```bash
yarn 
```

then run the local dev app

```bash
yarn dev
```


## Smart contracts deployments 

Factory : [0xa95e39fa3d5aEE7C91244F7F3DeEE22C7E647132](https://goerli.etherscan.io/address/0xa95e39fa3d5aee7c91244f7f3deee22c7e647132) 

## Credits

Hasalah uses the following Technologies:

- [chainlink Automation](https://chain.link/automation) Chainlink Automation is an ultra-reliable and performant smart contract automation solution enabling developers to quickly scale their operations in a verifiable, decentralized, and cost-efficient manner.

- [theGraph](https://thegraph.com/)  Create groundbreaking applications without needing to run your own data server, build indexing infrastructure, or parse through raw data.

- [ENS](https://ens.domains/) Decentralised naming for wallets, websites, & more.


- [hardhat](https://hardhat.org/) Ethereum development environment for professionals

- [Next.js](https://nextjs.org/) The React Framework for the Web.

- [tailwindcss](https://tailwindcss.com/) Rapidly build modern websites without ever leaving your HTML.

- [wagmi](https://wagmi.sh/)  is a collection of React Hooks containing everything you need to start working with Ethereum. wagmi makes it easy to "Connect Wallet," display ENS and balance information, sign messages, interact with contracts, and much more — all with caching, request deduplication, and persistence

## License

MIT
