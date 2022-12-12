---
sidebar_position: 1
---

# Naughty IP
 
> Use the artifacts from Alabaster Snowball to analyze this attack on the Boria 
> mines. Most of the traffic to this site is nice, but one IP address is being 
> naughty! Which is it? Visit Sparkle Redberry in the Web Ring for hints.

****

## Helpful hints

```
Wireshark Top Talkers
From: Alabaster Snowball
Objective: Naughty IP
The victim web server is 10.12.42.16. Which host is the next top talker?
```

## Solution

First we select us som IPv4 statistics

![Select Wireshark statistics](/img/web-ring/toptalkers-select.png)

Then we find the neighbor of the next top talker after IP 10.12.42.16 (I had to sort this list)

![Toptalkers](/img/web-ring/toptalkers.png)

The answer is **18.222.86.32**