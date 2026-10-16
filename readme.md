<a href="https://jorgecalleja.dev">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg" />
    <img src="assets/header-dark.svg" alt="Jorge Calleja · Web3 & Blockchain Developer · Málaga, Spain" width="100%" />
  </picture>
</a>

<p align="center">
  <a href="https://jorgecalleja.dev"><img src="https://img.shields.io/badge/jorgecalleja.dev-000000?style=flat-square&logo=vercel&logoColor=white" alt="Portfolio" /></a>
  <a href="https://x.com/memento_academy"><img src="https://img.shields.io/badge/@memento__academy-000000?style=flat-square&logo=x&logoColor=white" alt="X" /></a>
</p>

<p align="center">
  <sub>This profile is a tiny chain. Every section below is a block: scroll to sync. ⛓️</sub>
</p>

---

## `block #0` · Genesis

I build full-stack decentralized applications with **React**, **TypeScript** and **Solidity**, focused on **DeFi**, **asset tokenization** and **Account Abstraction**.

Instead of a JSON object, here is me as a contract (it compiles with `solc 0.8.24`, try it):

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title  Jorge Calleja
/// @notice Web3 & Blockchain Developer based in Málaga, Spain
contract JorgeCalleja {
    string public constant location = unicode"Málaga, Spain 🇪🇸";

    string[3] public focus = ["DeFi Protocols", "Asset Tokenization", "Account Abstraction"];
    string[3] public currentlyLearning = ["ZK-Proofs", "Layer 2 Solutions", "Cross-chain Bridges"];
    string[2] public openTo = ["Startup Collaborations", "Open Source Projects"];

    event Collaboration(address indexed you, string idea);

    /// @notice Got an idea? Emit it and let's build together.
    function collaborate(string calldata idea) external {
        emit Collaboration(msg.sender, idea);
    }
}
```

---

## `block #1` · Toolchain

| Layer | Tools |
|---|---|
| **Blockchain** | ![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white) ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white) ![Hardhat](https://img.shields.io/badge/Hardhat-FFF100?style=for-the-badge&logo=hardhat&logoColor=black) ![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-4E5EE4?style=for-the-badge&logo=OpenZeppelin&logoColor=white) ![Chainlink](https://img.shields.io/badge/Chainlink-375BD2?style=for-the-badge&logo=Chainlink&logoColor=white) |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Backend & Infra** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white) ![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |

---

## `block #2` · Deployments

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Banco del Tiempo</h3>
      <p><code>status: live</code> · <code>tx: full-stack</code></p>
      <p>Time banking platform where users exchange services using time as currency (<b>1h = 1 credit</b>). Server Actions and JWT auth; the full-stack evolution of a React/Vite + Express + MySQL project.</p>
      <p><sub>Next.js 16 · React 19 · Prisma 6 · PostgreSQL · Tailwind 4 · shadcn/ui · Zod · JWT</sub></p>
      <p>
        <a href="https://github.com/CallejaJ/timebankonchain"><img src="https://img.shields.io/badge/CODE-00D9FF?style=for-the-badge&logo=github&logoColor=white" alt="Code" /></a>
        <a href="https://www.bancodeltiempomalaga.com/"><img src="https://img.shields.io/badge/LIVE%20DEMO-4FC08D?style=for-the-badge&logo=vercel&logoColor=white" alt="Live demo" /></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>Memento Academy</h3>
      <p><code>status: live</code> · <code>tx: web3 + IaC</code></p>
      <p>Free Web3 educational platform with a gamified crypto quiz (earn <b>MEMO</b> tokens), premium courses, and full AWS infrastructure as code.</p>
      <p><sub>Next.js 15 · TypeScript · AWS · Terraform · GitHub Actions · Prisma · Supabase</sub></p>
      <p>
        <a href="https://github.com/CallejaJ/memento-academy"><img src="https://img.shields.io/badge/CODE-00D9FF?style=for-the-badge&logo=github&logoColor=white" alt="Code" /></a>
        <a href="https://memento-academy.com/"><img src="https://img.shields.io/badge/LIVE%20DEMO-4FC08D?style=for-the-badge&logo=vercel&logoColor=white" alt="Live demo" /></a>
      </p>
    </td>
  </tr>
  <tr>
    <td colspan="2" valign="top">
      <h3>jorgecalleja.dev</h3>
      <p><code>status: live</code> · <code>tx: performance + SEO</code></p>
      <p>My own site: a web studio for small businesses in Málaga, with a built-in <b>PageSpeed Insights</b> website analyzer and content structured for both search engines and AI assistants (<code>llms.txt</code>, structured data).</p>
      <p><sub>Next.js 15 · React 19 · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Resend · Vercel</sub></p>
      <p>
        <a href="https://jorgecalleja.dev"><img src="https://img.shields.io/badge/LIVE%20SITE-4FC08D?style=for-the-badge&logo=vercel&logoColor=white" alt="Live site" /></a>
      </p>
    </td>
  </tr>
</table>

<p align="center"><sub>More contracts deployed in my <a href="https://github.com/CallejaJ?tab=repositories">repositories</a>.</sub></p>

---

## `block #3` · On-chain activity

<p align="center">
  <img src="https://raw.githubusercontent.com/CallejaJ/stack-stats/main/stats.svg" alt="Language stats" width="600" />
</p>

---

## `block #4` · Call `collaborate()`

<p align="center">
  Building something in DeFi, tokenization or Account Abstraction? Let's talk.
</p>

<p align="center">
  <a href="https://x.com/memento_academy"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" /></a>
  <a href="https://jorgecalleja.dev"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white" alt="Portfolio" /></a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/CallejaJ/CallejaJ/main/dist/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/CallejaJ/CallejaJ/main/dist/github-contribution-grid-snake.svg" />
    <img src="https://raw.githubusercontent.com/CallejaJ/CallejaJ/main/dist/github-contribution-grid-snake-dark.svg" alt="Snake eating my contribution graph" width="700" />
  </picture>
</p>

<p align="center"><sub><code>// a snake mining my contribution graph, re-generated every 12 hours</code></sub></p>
