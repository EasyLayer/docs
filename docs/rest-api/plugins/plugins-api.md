---
title: Plugins API v
language_tabs:
  - http: HTTP
language_clients:
  - http: ""
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="">Plugins API v</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for interacting with Bitcoin Parser and Wallet services.

Base URLs:

<h1 id="-bitcoinparser">BitcoinParser</h1>

Operations related to Bitcoin Parser

## BitcoinParserController_healthCheck

<a id="opIdBitcoinParserController_healthCheck"></a>

> Code samples

```http
GET /bitcoin-parser/healthcheck HTTP/1.1
Host: example.com

```

`GET /bitcoin-parser/healthcheck`

<h3 id="bitcoinparsercontroller_healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Health check response for Bitcoin Parser|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="-bitcoinwallet">BitcoinWallet</h1>

Operations related to Bitcoin Wallet

## BitcoinWalletController_healthCheck

<a id="opIdBitcoinWalletController_healthCheck"></a>

> Code samples

```http
GET /bitcoin-wallet/healthcheck HTTP/1.1
Host: example.com

```

`GET /bitcoin-wallet/healthcheck`

<h3 id="bitcoinwalletcontroller_healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Health check response for Bitcoin Wallet|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

