---
sidebar_position: 1
---

# Wireshark Practice

> Use the Wireshark Phishing terminal in the Tolkien Ring to solve the mysteries around the [suspicious PCAP](https://storage.googleapis.com/hhc22_player_assets/suspicious.pcap). Get hints for this challenge by typing `hint` in the upper panel of the terminal.

****

## Questions

### This all started when I clicked on a link in my email. Can you help me?

The questions for this game is presented through a Cranberry terminal - but the associated PCAP can be downloaded and analyzed separately by the player. For the first question the player has to type **"yes"** in the upper terminal split. It doesn't actually matter what the player enters, though, as I typed **"Old McDonald had a Pharm"**:

![Use the terminal](/img/tolkien-ring/wireshark-terminal.png)

### There are objects in the PCAP file that can be exported by Wireshark and/or Tshark. What type of objects can be exported from this PCAP?

Wireshark has built in functionality to dump objects found in a PCAP. For this objective I opened the "File -> Export Objects" window:

![Wireshark 1](/img/tolkien-ring/wireshark-1.png)

Which displayed a short object list: 

![Wireshark 2](/img/tolkien-ring/wireshark-2.png)

The objects that can be exported from this PCAP is of the **HTTP** kind.

### What is the name of the largest file we can export?

Still in the object list, the player can simply sort the list by "Size" column to find the largest file (or just find it manually since the list is so small - which I did). In this case it would be **"app.php"** (808 kB):

![Wireshark 2](/img/tolkien-ring/wireshark-2.png)

### What packet number starts that app.php file?

Still in the object list, the player can simply look at the "Packet" column to determine the packet number. In this case it would be **"687"**:

![Wireshark 2](/img/tolkien-ring/wireshark-2.png)

### What is the IP of the Apache server?

The player can go directly to the packet from last question by "Wireshark -> Go -> Go To Packet" and enter the packet number:

![Wireshark finding Apache IP](/img/tolkien-ring/wireshark-finding-apache-ip.png)

Which will yield the answer, **"192.185.57.242"**.

### What file is saved to the infected host

The player can solve this problem by saving the **"app.php"** file locally from this dialog (same as in "What is the name of the largest file we can export?"): 

![Wireshark 2](/img/tolkien-ring/wireshark-2.png)

Then opening the **"app.php"** file in a text editor, say Sublime which I dids. In this file there is a reference to a file:

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

Filename **"Ref_Sept24-2020.zip"** is the answer to the question.

### Attackers used bad TLS certificates in this traffic. Which countries were they registered to? Submit the names of the countries in alphabetical order separated by a commas (Ex: Norway, Sout Korea).

To find bad TLS certificates the player can base the investigation around the following filter:

```bash
tls.handshake.type == 11
```

This returns a few entries:

![Wireshark TLS](/img/tolkien-ring/wireshark-tls.png)

For each certificate entry the player should locate the "RDNSequence" section. Inside this section the player will find a CountryName field. Player should make note of each CountryName, like this: 

| Country Code | Country |
| ------------ | ------- |
| IE | Ireland |
| IL | Israel |
| SS | South Sudan |
| US | United States |

From this table it is trivial to find the answer once each country code has been translated, Answer is **Ireland, Israel, South Sudan**

### Is the host infected (Yes|No)

Everything points to the host being infected, so the player should answer **yes**.