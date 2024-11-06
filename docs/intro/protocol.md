---
title: 'Protocol Overview'
sidebar: intro
sidebar_label: 'Protocol'
sidebar_position: 3
---

TODO: add blocks schema

Our protocol provides a structured way for developers to indexing **blockchain data** by defining **schemas**, and using a **mapper** to describe how to handle data. Each package (e.g., **Loader**, **Indexer**, **Listener**) follows a similar protocol structure, but the schemas may vary depending on the use case.

Here’s a detailed breakdown of how the protocol works for each component:

### Schemas and Repositories

The core of our protocol is the **schema**, which is an abstract description of the entities and their relationships that the developer wants to retrieve from the blockchain. The schema defines what data is required and how it is interconnected.

- **Schemas**: Developers need to define the structure of the data they want to fetch from the blockchain. These schemas describe the entities, their properties, and how they interact with each other (e.g., transactions, blocks, addresses).
- **Repositories**: Once the schemas are defined, we provide a function that automatically generates repository from these schemas. These repositories serve as the basis for data handling, enabling developers to work with structured blockchain data more effectively.

**Schema Definition** → **Repository Generation** → **Use in Mapper**

Each package (e.g., **Loader**, **Indexer**, **Listener**) will have its own specific schemas and repositories. The process for defining and generating these repositories is consistent, but the data they represent differs according to the package's functionality (e.g., loading data, indexing data, listening to events).

### Mapper

The **Mapper** is a key concept in the protocol, allowing developers to define how blockchain data should be processed. Each Mapper contains two essential functions:

- **Block Processing**: The function in the Mapper is responsible for handling blockchain blocks. Developers define how to interpret the block data and map it into the defined repositories. This includes fetching data related to transactions, contracts, or other entities, based on the schema.
- **Reorganization**: This function allows developers to define how to handle blockchain reorgs (when blocks are reorganized). It ensures that the data remains consistent and up to date with the current state of the blockchain.

The **Mapper** allows developers to focus on extracting the data they need from the blockchain, while our packages handle the rest of the complexities—such as connecting to the node, managing network connections, and ensuring that data is processed efficiently.

### Protocol Workflow

Here’s how the workflow operates from the developer’s perspective:

1. **Define the Schema**: The developer defines the schema, which represents the data they wish to extract from the blockchain. This schema is passed to the package via the bootstrap function.

2. **Generate Repositories**: Using our provided function, the developer generates repositories from the schema. These repositories allow the developer to interact with blockchain data in a structured way.

3. **Use the Mapper**: The developer implements the Mapper by defining how to process blockchain blocks and how to handle reorganization. The Mapper uses the repositories generated from the schema to work with the data.

4. **Bootstrap the Package**: Finally, the developer passes the schema and Mapper to the package’s bootstrap function, which starts the process. The package will handle the rest, including connecting to the blockchain, retrieving data, and managing reorganization events.

### Conclusion

Our protocol abstracts the complexity of working with blockchain data, allowing developers to define exactly what they want to extract through schemas and repositories, and providing a structured way to process data using Mappers. Whether you are using **Loader**, **Indexer**, or **Listener**, the protocol ensures that you have full control over the data you need, while our packages handle the underlying blockchain interactions.



