# SAI Service

## Sync Blockchain data to MongoDB

### Prerequisites

Have a local node running with pruning archive

### Sync DB:

`node ./sync --port [CHAIN_PORT]` (default: 8545)

## Webservice

### Prerequisites

Have MongoDB previously synced. `sync` service should be running in parallel to keep DB up to date.

### Enable Service:

`node ./service --network [NETWORK] --port [LISTEN_PORT]` (default: main) (default: 4000)

### Consume Service:

`http://[DOMAIN/IP]:[LISTEN_PORT]/cups/[CONDITIONS]/[SORT]` (lad:[ADDRESS]&closed:[true/false]])

`http://[DOMAIN/IP]:[LISTEN_PORT]/pars/[CONDITIONS]/[SORT]` (timestamp:[VAL]/timestamp.gte:[VAL]/timestamp.lt:[VAL]) (timestamp:[asc/desc]])

`http://[DOMAIN/IP]:[LISTEN_PORT]/pers/[CONDITIONS]/[SORT]`

`http://[DOMAIN/IP]:[LISTEN_PORT]/pips/[CONDITIONS]/[SORT]`
