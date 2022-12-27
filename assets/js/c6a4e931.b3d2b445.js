"use strict";(self.webpackChunkkringlecon_2022=self.webpackChunkkringlecon_2022||[]).push([[1444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="AWS CLI Intro",c={unversionedId:"objectives/CloudRing/aws_cli_intro",id:"objectives/CloudRing/aws_cli_intro",title:"AWS CLI Intro",description:"Commands",source:"@site/docs/objectives/CloudRing/aws_cli_intro.md",sourceDirName:"objectives/CloudRing",slug:"/objectives/CloudRing/aws_cli_intro",permalink:"/kringlecon-2022/docs/objectives/CloudRing/aws_cli_intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Recover Cloud Ring",permalink:"/kringlecon-2022/docs/category/recover-cloud-ring"},next:{title:"Exploitation via AWS CLI",permalink:"/kringlecon-2022/docs/objectives/CloudRing/exploitation_via_aws_cli"}},l={},s=[{value:"Commands",id:"commands",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-cli-intro"},"AWS CLI Intro"),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You may not know this, but AWS CLI help messages are very easy to access. First, try typing: ",(0,o.kt)("inlineCode",{parentName:"p"},"$ aws help"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"elf@05acbde6fe23:~$ aws help\n\n... Prints out help text\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Great! When you're done, you can quit with q.\nNext, please configure the default aws cli credentials with the access key AKQAAYRKO7A5Q5XUY2IY, the secret key qzTscgNdcdwIo/soPKPoJn9sBrl5eMQQL19iO5uf and the region us-east-1 .\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config"},"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"elf@05acbde6fe23:~$ aws help\nelf@05acbde6fe23:~$ aws configure\nAWS Access Key ID [None]: AKQAAYRKO7A5Q5XUY2IY \nAWS Secret Access Key [None]: qzTscgNdcdwIo/soPKPoJn9sBrl5eMQQL19iO5uf\nDefault region name [None]: us-east-1\nDefault output format [None]: \nelf@05acbde6fe23:~$ \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Question")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Excellent! To finish, please get your caller identity using the AWS command line. For more details please reference:\n$ aws sts help\nor reference:\n",(0,o.kt)("a",{parentName:"p",href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/index.html"},"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/index.html"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Answer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'elf@05acbde6fe23:~$ aws sts get-caller-identity\n{\n    "UserId": "AKQAAYRKO7A5Q5XUY2IY",\n    "Account": "602143214321",\n    "Arn": "arn:aws:iam::602143214321:user/elf_helpdesk"\n}\n')))}p.isMDXComponent=!0}}]);