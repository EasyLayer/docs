---
title: 'Main Concepts: Loader'
sidebar: intro
sidebar_label: 'Loader'
sidebar_position: 1
---

### Overview

**Loader** is designed to load blockchain data into a relational database for subsequent reading and analysis. It is optimized to handle large volumes of data, enabling developers to load entire blockchains if necessary. The developer retains full control over what data to store and how it is related. Currently, Loader supports databases such as [SQLite](https://sqlite.org), [PostgreSQL](https://www.postgresql.org), and [MySQL](https://www.mysql.com), with the ability for developers to specify their preferred database for loading the data.

Developers can configure Loader to pull data by blocks and load the relevant information into their database.

Loader integrates with both self-hosted nodes and third-party providers such as [QuickNode](https://www.quicknode.com), giving flexibility in how data is sourced.

![Loader Concept Diagram](/img/loader_concept_diagram.svg)
### How It Works

The Loader system allows developers to define the specific blockchain data they want to store and the relationships between that data. It works by connecting to a blockchain node, retrieving blocks or transactions, and saving that information to a relational database according to the developer’s configuration. 

The system is entirely **self-hosted**, meaning developers run the application on their own servers, which gives them control over their database and infrastructure. Loader supports the ability to connect to both a developer's own blockchain node or to third-party node providers. 

In essence, developers specify:
- The **data schema** (the structure of the data)
- The **database** where data will be stored

### Performance

Loader is designed to operate at high speeds, but actual performance depends on the network latency of fetching blocks from the blockchain and how efficiently data is inserted into the database. Most of the time, performance bottlenecks are related to network delays and database insertions. Running Loader alongside a self-hosted node can significantly reduce network latency, making data loading faster.

Loader is optimized for **high-volume data insertion**, so developers need to ensure that their database infrastructure is properly tuned for high-speed writes. Because the developer has full control over the database, the responsibility of optimizing database performance lies with them. Proper indexing and database tuning can greatly enhance the performance of data loading.

### Protocol

Loader leverages a **custom protocol** that allows developers to fully customize the data they want to manage. The protocol provides flexibility in defining the data schemas and models. These schemas describe the entities and their relationships, and models are generated from these schemas.

- [TypeORM](https://typeorm.io) is used under the hood for schema generation, which means developers can take full advantage of TypeORM’s features. Developers can refer to TypeORM’s documentation for advanced schema and model configurations.
- The Loader package automatically generates models based on the schema defined by the developer, which are then used in functions that load and process blockchain data.

Here’s a sample example for generating a model from a schema:

```typescript
import { EntitySchema, generateModelFromSchema } from '@easylayer/bitcoin-loader';

export const BlockSchema = new EntitySchema({
  name: 'blocks',
  tableName: 'blocks',
  columns: {
    hash: {
      type: 'varchar',
      primary: true,
    },
    height: {
      type: 'integer',
    },
    previousblockhash: {
      type: 'varchar',
      nullable: true,
    },
    tx: {
      type: 'json',
      nullable: false,
    },
  },
  uniques: [
    {
      name: 'UQ__blocks__hash',
      columns: ['hash'],
    },
  ],
});

export const BlockModel = generateModelFromSchema(BlockSchema);
```

Developers also need to define a Mapper, which determines how to handle block data and any necessary reorganization (reorg) of blockchain data. Here’s a sample Mapper:

```typescript
export class BlocksMapper implements ILoaderMapper {
  public async onLoad(block: Block) {
    // Handle block data, save to the database using the generated models

    const { height, hash, previousblockhash, tx } = block;

    const model = new BlockModel();

    await model.insert({
      hash, 
      height,
      previousblockhash,
      tx: tx.map((t: Transaction) => t.txid)
    });

    return model;
  }

  public async onReorganisation(lightBlock: LightBlock) {
    // Manage blockchain reorg, update database records
  }
}
```

For more detailed, refer to the [protocol section](/docs/intro/protocol.md).

### Environment Variables and API

Loader includes support for environment variables (envs) and a built-in API. These features allow developers to configure and interact with Loader easily. Each version of Loader comes with its own set of environment variables and API endpoints, which can be found in the specific version [documentation](/docs/get-started/el@bitcoin-loader/installation.md).