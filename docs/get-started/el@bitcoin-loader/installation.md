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

**Disclaimer**. Please note that the current version of the **Bitcoin Loader** is experimental. We do not recommend using it in production environments at this time. Our team is actively developing, testing, and improving the product daily to enhance its reliability and performance. We appreciate your understanding and encourage you to provide feedback as we continue to refine the Bitcoin Loader.

### Setup

Please make sure that [Node.js](https://nodejs.org/) (version >= 18) is installed on your operating system.

With [npm](https://www.npmjs.com) installed, you can create a new **Bitcoin Loader** with the following command in your OS terminal:
```bash
npm install @easylayer/bitcoin-loader
```

The [@easylayer/bitcoin-loader](https://www.npmjs.com/easylayer.io) exports an async function, which will **bootstrap** the loader:

```tsx title="main.ts"
import { bootstrap } from '@easylayer/bitcoin-loader';
import { BlockSchema } from './blocks';
import { BlocksMapper } from './mapper';

bootstrap({
  appName: 'loader',
  schemas: [BlockSchema],
  mapper: BlocksMapper,
  isServer: true
}).catch((error: Error) => console.error(error));
```

Here's a brief overview of necessary params:

|   |   |
|---|---|
| appName | The name of the application. A system folder will also be created with this name |
| schemas | Protocol schemas that describe the entities and their relationships |
| mapper  | The protocol mapper that defines the logic for processing blocks |

For more information, refer to the main concepts where the [protocol](/docs/intro/main-concepts/loader.md) is explained in detail.
