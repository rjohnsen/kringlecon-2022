---
sidebar_position: 1
---

# Wireshark Practice

> Use the Wireshark Phishing terminal in the Tolkien Ring to solve the mysteries around the [suspicious PCAP](https://storage.googleapis.com/hhc22_player_assets/suspicious.pcap). Get hints for this challenge by typing `hint` in the upper panel of the terminal.

****

## Questions

**0. This all started when I clicked on a link in my email. Can you help me?**

Typing **"yes"** does the trick, but typing **"Old Mcdonald had a Pharm"** does it.

**1. There are objects in the PCAP file that can be exported by Wireshark and/or Tshark. What type of objects can be exported from this PCAP?**

The answer is **"HTTP"**

![Use the terminal](/img/tolkien-ring/wireshark-1.png)
![Use the terminal](/img/tolkien-ring/wireshark-2.png)

**2. What is the name of the largest file we can export?**

That would be *"app.php"*

![Use the terminal](/img/tolkien-ring/wireshark-2.png)

**3. What packet number starts that app.php file?**

That would be **"687"**

![Use the terminal](/img/tolkien-ring/wireshark-2.png)

**4. What is the IP of the Apache server?**

192.185.57.242

Found by going directly to the packet from last question: Wireshark -> Go -> Go To Packet

![Use the terminal](/img/tolkien-ring/wireshark-finding-apache-ip.png)

**5. What file is saved to the infected host**

Downloaded the "app.php" file locally and read through and found reference to file "Ref_Sept24-2020.zip"

```javascript
    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    
    // now that we have the byte array, construct the blob from it
    let blob1 = new Blob([byteArray], {type: 'application/octet-stream'});

    saveAs(blob1, 'Ref_Sept24-2020.zip');
	
})();

</script>
</body>
```

**6. Attackers used bad TLS certificates in this traffic. Which countries were they registered to? Submit the names of the countries in alphabetical order separated by a commas (Ex: Norway, Sout Korea).**

| Country Code | Country |
| ------------ | ------- |
| IE | Ireland |
| IL | Israel |
| SS | South Sudan |
| US | United States |

Answer is **Ireland, Israel, South Sudan**

**7. Is the host infected (Yes|No)**

Answer is *Yes*