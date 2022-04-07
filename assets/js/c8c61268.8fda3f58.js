"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9909],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"bootstrapping",title:"Bootstrapping"},p=void 0,c={unversionedId:"learn/p2p/bootstrapping",id:"learn/p2p/bootstrapping",title:"Bootstrapping",description:"ARCHEthic Blockchain by using Network Transaction and Supervised Multicast, requires some actions to be performed",source:"@site/docs/learn/p2p/bootstrapping.md",sourceDirName:"learn/p2p",slug:"/learn/p2p/bootstrapping",permalink:"/archethic-docs/learn/p2p/bootstrapping",tags:[],version:"current",lastUpdatedAt:1649357570,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"bootstrapping",title:"Bootstrapping"},sidebar:"docs",previous:{title:"P2P",permalink:"/archethic-docs/learn/p2p"},next:{title:"Self Repair",permalink:"/archethic-docs/learn/p2p/self-repair"}},l=[{value:"Joining",id:"joining",children:[],level:2},{value:"Updates",id:"updates",children:[],level:2},{value:"Synchronization",id:"synchronization",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ARCHEthic Blockchain by using Network Transaction and Supervised Multicast, requires some actions to be performed\nwhen a node is bootstrapping. These operations will ensure synchronization and P2P awareness."),(0,i.kt)("h2",{id:"joining"},"Joining"),(0,i.kt)("p",null,'When a node wants the network the first time, it will request from a list of preconfigured nodes to reach (called "bootstrapping seeds"), the closest nodes from its position.'),(0,i.kt)("p",null,"Then, it will generate a first node transaction including as data: ip, port, protocol, reward address, key certificate (to ensure the key is coming from an secure element)\nOnce the network will attest and verify its transaction, the node will be able to start a SelfRepair process"),(0,i.kt)("h2",{id:"updates"},"Updates"),(0,i.kt)("p",null,"When a nodes rejoin the network after some time, depending on if its previous data expired, it will generate a new transaction with the new information"),(0,i.kt)("h2",{id:"synchronization"},"Synchronization"),(0,i.kt)("p",null,"Once the transaction is validated, the node will start by requesting the list of nodes."),(0,i.kt)("p",null,"Then, it will start the ",(0,i.kt)("a",{parentName:"p",href:"/learn/p2p/self-repair"},"Self-Repair")," sequence to get and synchronize the missing transactions and publish its end of sync to the network."),(0,i.kt)("p",null,"By this way, the entire will know the existence the readiness of this node."))}d.isMDXComponent=!0}}]);