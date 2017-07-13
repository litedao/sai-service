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

`http://[DOMAIN/IP]:[LISTEN_PORT]/[METHOD]/[CONDITIONS]/[SORT]`

#### CONDITIONS
[field]:[value] || [field].gt:[value] || [field].gte:[value] || [field].lt:[value] || [field].lte:[value]

#### SORT
[field]:asc || [field]:desc

#### METHOD
cups || ways || pers || pips

#### FIELDS
cups: cupi || lad || art || ink || closed || safe

ways/pers/pips: value || timestamp
