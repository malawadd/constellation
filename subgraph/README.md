# Hasalah Subgraph

 the code of the Subgraph used by Hasalah to fetch the transaction data. The overall data structure would look like the following

```gql
saving {
  id
  tokenDistribution {
    token
    distribution
  }
  transactions {
    id
    tokenIn
    amountIn
    outgoingTokens {
      token
      amount
    }
  }
}
```

# subgraph 

https://api.studio.thegraph.com/query/50446/hasalah/v0.0.1
