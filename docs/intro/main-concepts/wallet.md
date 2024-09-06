---
title: 'Main Concepts: Wallet'
sidebar: intro
sidebar_label: 'Wallet'
sidebar_position: 4
---

TODO: add wallet schema

### Overview

**Wallet** is a self-hosted application that provides an out-of-the-box solution for managing multiple cryptocurrency keys and transactions. It supports key generation, signing and broadcasting transactions, fee calculation, and more. 

Wallet offers a **ready-made RPC API**, making it easy for developers to integrate it into their systems. It also supports environment variables (envs) for flexible configuration, ensuring that each instance can be tailored to the developer's infrastructure.

### Key Features

- **Key Management**: Securely generate, manage, and store multiple keys.
- **Transaction Management**: Build, sign, and broadcast transactions to the blockchain.
- **Fee Calculation**: Automatically calculate transaction fees based on network conditions.
- **Encrypted Key Storage**: All private keys are encrypted, ensuring security. As the application is self-hosted, developers have complete control over key management, and keys are never transmitted externally.

### Encrypted Storage

Wallet's built-in encrypted storage ensures that all private keys are **fully secured**. Keys are encrypted both in use and at rest, providing peace of mind that sensitive data remains safe. Since Wallet is self-hosted, the keys never leave the developer's infrastructure, ensuring complete privacy and control.

### RPC API

Wallet provides a ready-to-use RPC API, simplifying integration. The API allows for:

Key management (e.g., generating, storing, retrieving keys)
Transaction handling (e.g., building, signing, and broadcasting transactions)

### Environment Variables

Wallet includes support for environment variables (envs) and a built-in API. These features allow developers to configure and interact with Wallet easily. Each version of Wallet comes with its own set of environment variables and API endpoints, which can be found in the specific version [documentation](/docs/get-started/el@bitcoin-wallet/installation.md).