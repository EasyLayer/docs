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

TODO