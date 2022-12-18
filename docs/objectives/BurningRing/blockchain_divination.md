---
sidebar_position: 2
---

# Exploit a Smart Contract

```
Use the Blockchain Explorer in the Burning Ring of Fire to investigate the contracts and transactions on the chain. At what address is the KringleCoin smart contract deployed? Find hints for this objective hidden throughout the tunnels.
```

****

Upon opening the explorer displays information for block number 68869. Thinking the KringleCoin smart contract exists somewhere near the start of the block chain, I start investating block number 0 first.  

![Block chain index 0](/img/burning-ring/blockchain-0.png)

Nope. Not here. Thinking the contract is still nearby I advance investigating block number 1

![Block chain index 1](/img/burning-ring/blockchain-1.png)

And there it is! Scrolling down I found the address

![Block chain index 1 - the address](/img/burning-ring/blockchain-2.png)

Address is **0xc27A2D3DE339Ce353c0eFBa32e948a88F1C86554**