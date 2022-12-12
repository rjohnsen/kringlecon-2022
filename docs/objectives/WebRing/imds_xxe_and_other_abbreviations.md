---
sidebar_position: 4
---

# IMDS, XXE, and Other Abbreviations

> The last step in this attack was to use XXE to get secret keys from the IMDS service. What URL did the attacker force the server to fetch?

****

## Helpfull hints

```
Instance Metadata Service
From: Alabaster Snowball
Objective: IMDS, XXE, and Other Abbreviations
AWS uses a specific IP address to access IMDS, and that IP only appears twice in this PCAP.
```

## Solution

XXE means XML External Entity, which tells us we are looking for ... XML. Wireshark query

```
http.request.method == POST && xml
```

![Finding XXE](/img/web-ring/finding-xxe.png)

The answer is "http://169.254.169.254/latest/meta-data/identity-credentials/ec2/security-credentials/ec2-instance"