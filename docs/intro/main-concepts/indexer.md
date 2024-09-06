---
title: 'Main Concepts: Indexer'
sidebar: intro
sidebar_label: 'Indexer'
sidebar_position: 2
---

TODO: add indexer schema

### Overview

**Indexer** is designed to index blockchain data into a key-value store, allowing for fast data retrieval and manipulation. It uses a different protocol from the Loader but is also based on the principles of schemas, models, and a mapper. The key-value store, such as [RocksDB](https://rocksdb.org), makes the Indexer highly efficient in both writing and reading data. 

Developers retain full control over the data they want to index and the structure of the key-value relationships. The Indexer package provides flexibility in defining schemas and models, tailored specifically for key-value storage.

### How It Works

The **Indexer** allows developers to define schemas that describe the structure and relationships of the data to be stored. However, instead of storing the data in a relational database, it is stored in a key-value store, optimizing the process for fast access and retrieval.

The key-value store is embedded, but developers still have full access to it for manual management or integration into other systems.

Developers specify:
- The **data schema** (structure of keys and values)
- The **key-value store** where the data will be indexed

### Performance

The performance of Indexer is optimized for speed, particularly in environments where large amounts of data need to be indexed and quickly retrieved. The choice of RocksDB ensures minimal overhead and high performance for both write and read operations. 

Network latency is a factor to consider when fetching blocks, but since the database is embedded, database interactions are fast. Most performance bottlenecks would occur during network transfers and large-scale insertions.

Developers are responsible for optimizing the performance of the key-value store through appropriate configuration and indexing strategies. Since developers have full access to the database, they can adjust settings for maximum throughput.

### Protocol

The Indexer follows a custom protocol tailored for key-value stores. Developers define their schemas, which describe the structure of keys and their relationships, and generate models from these schemas. The Indexer uses these models to process and store data.

We provide a **custom schema generator** specifically for key-value stores, which allows developers to describe their data structures and relationships between keys. More details on the schema generator will be available in future releases.

Here's an example of how to generate a model from a schema:

```typescript
import { Schema, generateModelFromSchema } from '@el/bitcoin-indexer';

export const OutputSchema = new Schema({
  prefix: 'output',
  separator: ':',
  paths: {
    txid_vout: {
      type: 'dynamic',
      required: true,
    },
  },
  values: {
    type: 'object',
  },
  relations: {
    balance: {
      target: 'balance',
      join_paths: [
        { name: 'txid_vout', referencedPathName: 'txid_vout' }
      ]
    }
  }
});

export const OutputModel = generateModelFromSchema(OutputSchema);
```

The Mapper is optimized for key-value data management. Here’s an example of a basic Mapper for Indexer:

```typescript
import { IIndexerMapper } from '@el/bitcoin-indexer';
import { Currency, Money } from '@el/common/arithmetic';
import { OutputModel } from './models';

export class Mapper implements IIndexerMapper {
    public async index(block: Block) {
        // Process block data and save to the key-value store

        const currency: Currency = {
          code: 'BTC',
          minorUnit: 8,
        };

        const { height, tx } = block;

        const outputModels: InstanceType<typeof OutputModel>[] = [];

        for (const t of tx) {
          const { txid, vout, vin } = t;

          for (const output of vout) {
            const value = Money.fromDecimal(output.value, currency).toCents();

            const outputModel = new OutputModel();

            await outputModel.put(
              { txid_vout: `${txid}_${output.n}` },
              { value }
            );

            outputModels.push(outputModel);
          }

          for (const input of vin) {
            if (input.txid && input.vout) {
              const outputModel = new OutputModel();

              await outputModel.del({
                txid_vout: `${input.txid}_${input.vout}`
              });

              outputModels.push(outputModel);
            }
          }
        }

        return [...outputModels];
    }

    public async reorganisation(blocks: Block[]) {
        // Handle blockchain reorgs and update key-value store records
    }
}
```

For more detailed, refer to the [protocol section](/docs/intro/protocol.md).

### Environment Variables and API

Indexer includes support for environment variables (envs) and a built-in API. These features allow developers to configure and interact with Indexer easily. Each version of Indexer comes with its own set of environment variables and API endpoints, which can be found in the specific version [documentation](/docs/get-started/el@bitcoin-indexer/installation.md).
