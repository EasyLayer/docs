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

TODO