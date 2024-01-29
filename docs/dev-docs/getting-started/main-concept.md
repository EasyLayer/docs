---
title: 'Main Concept'
sidebar: devDocs
sidebar_label: 'Main Concept'
sidebar_position: 2
---

EasyLayer offers solutions for rapid development and deployment of applications that enable the creation and management of wallets, transactions, blockchain monitoring, and block parsing. The repository details can be found at [repository](https://github.com/EasyLayer/base).

![how does easylayer works](/img/main-concept-diagram.png)

## Initial Setup

The platform uses an installer similar to `yarn create` for creating fully functional applications. To launch these applications, [Nodejs](https://nodejs.org) and [yarn](https://yarnpkg.com) are required. Future updates will include support for Docker deployment.

## Core Technologies

Under the hood, EasyLayer utilizes [Nestjs](https://nestjs.com) and [TypeScript](https://www.typescriptlang.org). It employs Nestjs's modular system for handling both external and internal plugins.

## Main Modules

**Wallet Module:** Manages wallets and transactions, supporting multi-networks and multiple wallets. It allows the creation of new wallets or addition of existing ones. This module facilitates transaction creation, signing, and broadcasting either directly through a user's node or via any provider's node.  
**Parser Module:** Designed for blockchain monitoring and block parsing. It can be configured to listen for events related to wallets in the Wallet Module. Utilizing **Event Driven** architecture and **Event Sourcing** approach, inter-module communication is event-based.

Plans include adding an **Exchanger** module for interacting with centralized exchanges.

## Application Interaction

Interaction with the application is made possible through an **API** that encompasses both `REST` and `WebSocket` interfaces, adhering to the **CQRS** pattern by segregating commands and queries.

## Data Management

Currently, **EasyLayer** supports `SQLite` for data storage. Each module is equipped with its own `Event Store` database and a separate encrypted database for sensitive and confidential information. In line with the platform's ethos, all databases are **self-hosted**, granting users complete control over their data.