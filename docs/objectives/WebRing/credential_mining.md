---
sidebar_position: 2
---

# Credential mining

> The first attack is a brute force login. What's the first username tried?

****

## Helpfull hints

```
Wireshark String Searching
From: Alabaster Snowball
Objective: Credential Mining
The site's login function is at /login.html. Maybe start by searching for a string
```

## Solution

Wireshark query

```
ip.src == 18.222.86.32 && http && http.request.method == POST && http.request.uri == "/login.html"
```

![Finding Alice](/img/web-ring/finding-alice.png)

The answer is **"alice"**