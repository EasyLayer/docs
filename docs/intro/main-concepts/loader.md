---
title: 'Main Concepts: Loader'
sidebar: intro
sidebar_label: 'Loader'
sidebar_position: 1
---

### Overview

**Loader** is designed to load blockchain data into a relational database for subsequent reading and analysis. It is optimized to handle large volumes of data, enabling developers to load entire blockchains if necessary. The developer retains full control over what data to store and how it is related. Currently, Loader supports databases such as [SQLite](https://sqlite.org) and [PostgreSQL](https://www.postgresql.org), with the ability for developers to specify their preferred database for loading the data.

Developers can configure the Loader to extract data by blocks and load the relevant information into their chosen database schema.

Loader integrates with both self-hosted nodes and third-party providers such as [QuickNode](https://www.quicknode.com), giving flexibility in how data is sourced.

![Loader Concept Diagram](/img/loader_concept_diagram.svg)
### How It Works

The Loader system allows developers to define the specific blockchain data they want to store and the relationships between that data. It works by connecting to a blockchain node, retrieving blocks or transactions, and saving that information to a relational database according to the developer’s configuration. 

The system is entirely **self-hosted**, meaning developers run the application on their own servers, which gives them control over their database and infrastructure. Loader supports the ability to connect to both a developer's own blockchain node or to third-party node providers. 

In essence, developers specify:
- The **data schema** (the structure of the data)
- The **database** where data will be stored

### Key Features

- **Self-Hosted Application**: Developers deploy and manage it themselves.
- **Flexible Connectivity**: Works with both your own blockchain node and custom providers like Quicknode.
- **Block Range Flexibility**: Can be started at any blockchain height range and supports real-time mode with automatic blockchain reorganization.
- **Schema Flexibility**: Developers can configure the Loader to extract data by blocks and load the relevant information into their chosen database schema.
- **Database Compatibility**: Supports SQLite and PostgreSQL.
- **Configuration Management**: Managed and configured using environment variables.
- **REST API Server**: Includes a ready-to-use REST API server for accessing loaded data.
------------
- **Example applications** based on the loader are available in the `examples` folder at the root of the `el` repository.
- Uses **Node.js** as the engine (version 18 or higher is important).

### Performance

Loader is engineered for high-speed operation, but actual performance is primarily influenced by two factors: network latency when fetching blocks from the blockchain and the efficiency of inserting large datasets into your SQL database, depending on your chosen schema structure.

In 99% of cases, performance bottlenecks arise from either network delays or database insertion speeds. To mitigate network latency, developers can increase the number of parallel requests to the node or provider and adjust the size of data transmitted per request through configuration parameters. Additionally, optimizing node settings can further reduce network delays.

When it comes to the database, performance tuning becomes more intricate. Database performance is multifaceted, depending on the complexity of your database schema, the presence of indexes, and the defined relationships. Loader is optimized for high-volume data insertion through several software-level optimizations:

- **UNLOGGED Databases**: Enabled by default to accelerate insertion speeds, with the option to disable if necessary.
- **COPY for Streaming Inserts**: Utilizes the COPY command for efficient, high-throughput data streaming.
- **Batch Transactions**: Executes a large number of inserts within a single transaction to minimize overhead and enhance performance.

Developers should ensure their database infrastructure is properly configured for high-speed writes. For complex data schemas or when loading the entire blockchain, it is recommended to initially load data without indexes and relationships to achieve faster loading times. Once the blockchain height is reached, developers can then create the necessary indexes and relationships separately and restart Loader to apply these schema optimizations.

### Protocol

Loader leverages a **custom protocol** that allows developers to fully customize the data they want to manage. The protocol provides flexibility in defining the data schemas and models. These schemas describe the entities and their relationships, and repositories are generated from these schemas.

- [TypeORM](https://typeorm.io) is used under the hood for schema generation, which means developers can take full advantage of TypeORM’s features. Developers can refer to TypeORM’s documentation for advanced schema and model configurations.
- The Loader package automatically generates repositories based on the schema defined by the developer, which are then used in functions that load and process blockchain data.

Here’s a sample example for generating a repository from a schema:

```typescript
import { EntitySchema, generateRepositoryFromSchema } from '@easylayer/bitcoin-loader';

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
    is_suspended: {
      type: 'boolean',
      default: false,
    },
    tx: {
      type: 'json',
      nullable: false,
    },
  },
});

export const BlocksRepository = generateRepositoryFromSchema(BlockSchema);
```

Developers also need to define a Mapper, which determines how to handle block data and any necessary reorganization of blockchain data. Here’s a sample Mapper:

```typescript
import { ILoaderMapper } from '@easylayer/bitcoin-loader';
import { BlocksRepository } from './blocks';

export class BlocksMapper implements ILoaderMapper {
  public async onLoad(block: any) {
    const { height, hash, previousblockhash, tx } = block;

    const repo = new BlocksRepository();

    repo.insert({
      hash, 
      height: Number(height),
      tx: tx.map((t: any) => t.txid),
    });

    return repo;
  }

  public async onReorganisation(lightBlock: any) {
    const { hash } = lightBlock;

    const repo = new BlocksRepository();

    repo.update({ hash }, { is_suspended: true });

    return repo;
  }
}
```

For more detailed, refer to the [protocol section](/docs/intro/protocol.md).

### Environment Variables and API

Loader includes support for environment variables (envs) and a built-in API. These features allow developers to configure and interact with Loader easily. Each version of Loader comes with its own set of environment variables and API endpoints, which can be found in the specific version [documentation](/docs/get-started/el@bitcoin-loader/installation.md).