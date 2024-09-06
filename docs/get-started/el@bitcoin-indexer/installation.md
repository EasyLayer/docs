---
title: Installation
language_tabs:
  - javascript--node: Node.JS
language_clients:
  - http: ""
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 1
sidebar_position: 1

---

Please make sure that [Node.js](https://nodejs.org/) (version >= 16) is installed on your operating system.

### Setup

With [npm](https://www.npmjs.com) installed, you can create a new Bitcoin Indexer with the following command in your OS terminal:
```bash
npm install @el/bitcoin-indexer
```

The [@el/bitcoin-indexer](https://www.npmjs.com/easylayer.io) exports an async function, which will **bootstrap** the indexer:

```tsx title="main.ts"
import { bootstrap } from '@el/bitcoin-indexer';
import { IndexerSchema } from './models';
import { IndexerMapper } from './mapper';

bootstrap({
  appName: 'indexer',
  schemas: [IndexerSchema],
  mapper: IndexerMapper,
  isServer: true
}).catch((error: Error) => console.error(error));
```

Here's a brief overview of necessary params:

|   |   |
|---|---|
| appName | The name of the application. A system folder will also be created with this name |
| schemas | Protocol schemas that describe the entities and their relationships |
| mapper  | The protocol mapper that defines the logic for processing blocks |

For more information, refer to the main concepts where the [protocol](/docs/intro/main-concepts/indexer.md) is explained in detail.
