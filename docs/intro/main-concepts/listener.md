---
title: 'Main Concepts: Listener'
sidebar: intro
sidebar_label: 'Listener'
sidebar_position: 3
---

TODO: add listener schema

### Overview

**Listener** is designed to allow developers to define event models they wish to receive from the blockchain. Unlike other components, Listener is optimized to store only system-level data, enabling it to run efficiently without consuming significant disk space. It listens to blockchain events and triggers actions based on the developer's configuration, making it ideal for use cases that do not require a full data infrastructure.

Listener works without the need for large-scale infrastructure or worrying about data storage size, as only essential event-related data is maintained.

### How It Works

The **Listener** allows developers to define specific event models they want to listen to from the blockchain. These events are monitored in real-time, and the system triggers actions based on the defined models. Since Listener focuses only on events, it does not require heavy infrastructure for data storage.

Developers provide:
- The **Mapper** (which processes the events and defines actions)

The Listener package is entirely self-hosted, and developers can run it on their infrastructure without worrying about significant storage requirements.

### Performance

As Listener does not need to store large amounts of data, it runs smoothly and requires very little disk space. Developers can deploy it alongside other components to handle blockchain events without adding significant overhead to their systems.

### Protocol

Listener uses a custom protocol similar to other components but focuses solely on event-based interactions. Developers define the event models they wish to monitor and use a Mapper to determine how the system should respond to these events.

The Mapper processes each event and ensures that appropriate actions are taken based on the developer's requirements.

Here’s an example of defining an event model:

```typescript
import { BaseViewModel } from '@el/bitcoin-listener';

export class BlockEvent implements BaseViewModel {
  type: string = 'newblock';
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}

export class TransactionEvent implements BaseViewModel {
    type: string = 'newtx';
    data: any;
  
    constructor(data: any) {
      this.data = data;
    }
}
```

The Mapper defines how to process events and manage blockchain reorganization (reorg). Here’s an example of an event Mapper:

```typescript
import { IListenerMapper, BaseViewModel } from '@el/bitcoin-listener';
import { BlockEvent, TransactionEvent } from './events';

export class EventsMapper implements IListenerMapper {
    public async handle(block: Block) {
        // Process blockchain block event

        const { tx } = block;

        const events: BaseViewModel[] = [];
        
        events.push(new BlockEvent({ ...block }));

        tx.forEach((t: Transaction) => {
            const { txid, vin, vout } = t;

            events.push(new TransactionEvent({
                txid,
                vin,
                vout,
                block_hash: hash
            }));
        });

        return events;
    }

    public async reorganisation(blocks: Block[]) {
        // Handle blockchain reorg and send event models
    }
}
```

For more detailed, refer to the [protocol section](/docs/intro/protocol.md).

### WebSocket API

**Listener** utilizes a WebSocket API to receive events in real-time from the blockchain. This allows for low-latency event processing and immediate reaction to blockchain changes. More details on the WebSocket API will be provided in future documentation.

### Environment Variables and API

Listener includes support for environment variables (envs) and a built-in API. These features allow developers to configure and interact with Listener easily. Each version of Listener comes with its own set of environment variables and API endpoints, which can be found in the specific version [documentation](/docs/get-started/el@bitcoin-listener/installation.md).

