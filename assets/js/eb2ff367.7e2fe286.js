"use strict";(self.webpackChunkkringlecon_2022=self.webpackChunkkringlecon_2022||[]).push([[3528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3},i="Suricata Regatta",s={unversionedId:"writeup/TolkienRing/suricata_regatta",id:"writeup/TolkienRing/suricata_regatta",title:"Suricata Regatta",description:"Help detect this kind of malicious activity in the future by writing some Suricata rules. Work with Dusty Giftwrap in the Tolkien Ring to get some hints.",source:"@site/docs/writeup/TolkienRing/suricata_regatta.md",sourceDirName:"writeup/TolkienRing",slug:"/writeup/TolkienRing/suricata_regatta",permalink:"/kringlecon-2022/writeup/TolkienRing/suricata_regatta",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Windows Event Logs",permalink:"/kringlecon-2022/writeup/TolkienRing/windows_event_logs"},next:{title:"Recover Elfen Ring",permalink:"/kringlecon-2022/category/recover-elfen-ring"}},l={},c=[{value:"First Rule",id:"first-rule",level:2},{value:"Second rule",id:"second-rule",level:2},{value:"Third rule",id:"third-rule",level:2},{value:"Fourth rule",id:"fourth-rule",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"suricata-regatta"},"Suricata Regatta"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Help detect this kind of malicious activity in the future by writing some Suricata rules. Work with Dusty Giftwrap in the Tolkien Ring to get some hints.")),(0,n.kt)("h2",{id:"first-rule"},"First Rule"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Use your investigative analysis skills and the suspicious.pcap file to help develop Suricata rules for the elves!"),(0,n.kt)("p",{parentName:"blockquote"},"There's a short list of rules started in suricata.rules in your home directory."),(0,n.kt)("p",{parentName:"blockquote"},"First off, the STINC (Santa's Team of Intelligent Naughty Catchers) has a lead for us.\nThey have some Dridex indicators of compromise to check out.\nFirst, please create a Suricata rule to catch DNS lookups for adv.epostoday.uk.\nWhenever there's a match, the alert message (msg) should read Known bad DNS lookup, possible Dridex infection.\nAdd your rule to suricata.rules"),(0,n.kt)("p",{parentName:"blockquote"},"Once you think you have it right, run ./rule_checker to see how you've done!\nAs you get rules correct, rule_checker will ask for more to be added."),(0,n.kt)("p",{parentName:"blockquote"},"If you want to start fresh, you can exit the terminal and start again or cp suricata.rules.backup suricata.rules"),(0,n.kt)("p",{parentName:"blockquote"},"Good luck, and thanks for helping save the North Pole!")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Suricata rule")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-suricata"},"alert dns any any -> any any (msg:\u201dKnown bad DNS lookup, possible Dridex infection\u201d; dns.query; content:\u201dadv.epostoday.uk\u201d; nocase;sid:1337;)\n")),(0,n.kt)("h2",{id:"second-rule"},"Second rule"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"STINC thanks you for your work with that DNS record! In this PCAP, it points to 192.185.57.242.\nDevelop a Suricata rule that alerts whenever the infected IP address 192.185.57.242 communicates with internal systems over HTTP.\nWhen there's a match, the message (msg) should read Investigate suspicious connections, possible Dridex infection"),(0,n.kt)("p",{parentName:"blockquote"},"For the second indicator, we flagged 0 packet(s), but we expected 681. Please try again!")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Suricata rule")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-suricata"},'alert http 192.185.57.242 any <> any any (msg:"Investigate suspicious connections, possible Dridex infection";sid:1338;)\n')),(0,n.kt)("h2",{id:"third-rule"},"Third rule"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We heard that some naughty actors are using TLS certificates with a specific CN.\nDevelop a Suricata rule to match and alert on an SSL certificate for heardbellith.Icanwepeh.nagoya.\nWhen your rule matches, the message (msg) should read Investigate bad certificates, possible Dridex infection")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Suricata rule")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-suricata"},'alert tcp any any -> any any (msg:"Investigate bad certificates, possible Dridex infection";tls.cert_subject; content:"CN=heardbellith.Icanwepeh.nagoya";sid:1339;)\n')),(0,n.kt)("h2",{id:"fourth-rule"},"Fourth rule"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"OK, one more to rule them all and in the darkness find them.\nLet's watch for one line from the JavaScript: let byteCharacters = atob\nOh, and that string might be GZip compressed - I hope that's OK!\nJust in case they try this again, please alert on that HTTP data with message Suspicious JavaScript function, possible Dridex infection")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Suricata rule")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-suricata"},'alert tcp any any -> any any (msg:"Suspicious JavaScript function, possible Dridex infection";content:"let byteCharacters = atob"; http_server_body;))\n')))}p.isMDXComponent=!0}}]);