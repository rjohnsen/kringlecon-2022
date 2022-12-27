"use strict";(self.webpackChunkkringlecon_2022=self.webpackChunkkringlecon_2022||[]).push([[8832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Trufflehog Search",l={unversionedId:"objectives/CloudRing/trufflehog_search",id:"objectives/CloudRing/trufflehog_search",title:"Trufflehog Search",description:"Setup",source:"@site/docs/objectives/CloudRing/trufflehog_search.md",sourceDirName:"objectives/CloudRing",slug:"/objectives/CloudRing/trufflehog_search",permalink:"/kringlecon-2022/docs/objectives/CloudRing/trufflehog_search",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Exploitation via AWS CLI",permalink:"/kringlecon-2022/docs/objectives/CloudRing/exploitation_via_aws_cli"},next:{title:"Recover the Burning Ring of Fire",permalink:"/kringlecon-2022/docs/category/recover-the-burning-ring-of-fire"}},c={},s=[{value:"Setup",id:"setup",level:2},{value:"Running Trufflehog",id:"running-trufflehog",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trufflehog-search"},"Trufflehog Search"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Use Trufflehog to find secrets in a Git repo. Work with Jill Underpole in the Cloud Ring for hints. What's the name of the file that has AWS credentials?\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/trufflesecurity/trufflehog.git\ncd truffehog\ngo install\n")),(0,o.kt)("h2",{id:"running-trufflehog"},"Running Trufflehog"),(0,o.kt)("p",null,"Installed Trufflehog locally by downloading binary builds and went on. Until I realized this was the same assigment as in the AWS CLI thingy ..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./trufflehog git http://haugfactory.com/orcadmin/aws_scripts.git\n\ud83d\udc37\ud83d\udd11\ud83d\udc37  TruffleHog. Unearth your secrets. \ud83d\udc37\ud83d\udd11\ud83d\udc37\n\nFound unverified result \ud83d\udc37\ud83d\udd11\u2753\nDetector Type: AWS\nDecoder Type: PLAIN\nRaw result: AKIAAIDAYRANYAHGQOHD\nFile: put_policy.py\nEmail: asnowball <alabaster@northpolechristmastown.local>\nRepository: http://haugfactory.com/orcadmin/aws_scripts.git\nTimestamp: 2022-09-07 07:53:12 -0700 -0700\nLine: 6\nCommit: 106d33e1ffd53eea753c1365eafc6588398279b5\n\nFound unverified result \ud83d\udc37\ud83d\udd11\u2753\nDetector Type: Gitlab\nDecoder Type: PLAIN\nRaw result: add-a-file-using-the-\nCommit: 2c77c1e0a98715e32a277859864e8f5918aacc85\nFile: README.md\nEmail: alabaster snowball <alabaster@northpolechristmastown.local>\nRepository: http://haugfactory.com/orcadmin/aws_scripts.git\nTimestamp: 2022-09-06 19:54:48 +0000 +0000\nLine: 14\n\nFound unverified result \ud83d\udc37\ud83d\udd11\u2753\nDetector Type: Gitlab\nDecoder Type: BASE64\nRaw result: add-a-file-using-the-\nCommit: 2c77c1e0a98715e32a277859864e8f5918aacc85\nFile: README.md\nEmail: alabaster snowball <alabaster@northpolechristmastown.local>\nRepository: http://haugfactory.com/orcadmin/aws_scripts.git\nTimestamp: 2022-09-06 19:54:48 +0000 +0000\nLine: 14\n\n")),(0,o.kt)("p",null,"Anywho, the answer is ",(0,o.kt)("strong",{parentName:"p"},"put_policy.py"),", because there's where we find the credentials."))}p.isMDXComponent=!0}}]);