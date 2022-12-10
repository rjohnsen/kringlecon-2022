---
sidebar_position: 3
---

# Suricata Regatta

> Help detect this kind of malicious activity in the future by writing some Suricata rules. Work with Dusty Giftwrap in the Tolkien Ring to get some hints.

## First Rule

> Use your investigative analysis skills and the suspicious.pcap file to help develop Suricata rules for the elves!
>
> There's a short list of rules started in suricata.rules in your home directory.
>
> First off, the STINC (Santa's Team of Intelligent Naughty Catchers) has a lead for us.
> They have some Dridex indicators of compromise to check out.
> First, please create a Suricata rule to catch DNS lookups for adv.epostoday.uk.
> Whenever there's a match, the alert message (msg) should read Known bad DNS lookup, possible Dridex infection.
> Add your rule to suricata.rules
>
> Once you think you have it right, run ./rule_checker to see how you've done!
> As you get rules correct, rule_checker will ask for more to be added.
>
> If you want to start fresh, you can exit the terminal and start again or cp suricata.rules.backup suricata.rules
>
> Good luck, and thanks for helping save the North Pole!

### Suricata rule

```suricata
alert dns any any -> any any (msg:”Known bad DNS lookup, possible Dridex infection”; dns.query; content:”adv.epostoday.uk”; nocase;sid:1337;)
```

## Second rule

> STINC thanks you for your work with that DNS record! In this PCAP, it points to 192.185.57.242.
> Develop a Suricata rule that alerts whenever the infected IP address 192.185.57.242 communicates with internal systems over HTTP.
> When there's a match, the message (msg) should read Investigate suspicious connections, possible Dridex infection
> 
> For the second indicator, we flagged 0 packet(s), but we expected 681. Please try again!

### Suricata rule

```suricata
alert http 192.185.57.242 any <> any any (msg:"Investigate suspicious connections, possible Dridex infection";sid:1338;)
```

## Third rule

> We heard that some naughty actors are using TLS certificates with a specific CN.
> Develop a Suricata rule to match and alert on an SSL certificate for heardbellith.Icanwepeh.nagoya.
> When your rule matches, the message (msg) should read Investigate bad certificates, possible Dridex infection

### Suricata rule

```suricata
alert tcp any any -> any any (msg:"Investigate bad certificates, possible Dridex infection";tls.cert_subject; content:"CN=heardbellith.Icanwepeh.nagoya";sid:1339;)
```

## Fourth rule

> OK, one more to rule them all and in the darkness find them.
> Let's watch for one line from the JavaScript: let byteCharacters = atob
> Oh, and that string might be GZip compressed - I hope that's OK!
> Just in case they try this again, please alert on that HTTP data with message Suspicious JavaScript function, possible Dridex infection

### Suricata rule

```suricata
alert tcp any any -> any any (msg:"Suspicious JavaScript function, possible Dridex infection";content:"let byteCharacters = atob"; http_server_body;))
```