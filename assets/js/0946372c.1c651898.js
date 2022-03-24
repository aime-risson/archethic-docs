"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7790],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),h=a,m=s["".concat(u,".").concat(h)]||s[h]||p[h]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"account",title:"Account"},u=void 0,c={unversionedId:"build/core/account",id:"build/core/account",title:"Account",description:"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS.",source:"@site/docs/build/core/account.md",sourceDirName:"build/core",slug:"/build/core/account",permalink:"/archethic-docs/build/core/account",tags:[],version:"current",lastUpdatedAt:1648112216,formattedLastUpdatedAt:"3/24/2022",frontMatter:{id:"account",title:"Account"}},d=[{value:"UCO",id:"uco",children:[{value:"Ledger",id:"ledger",children:[],level:3},{value:"Index",id:"index",children:[],level:3}],level:2},{value:"NFT",id:"nft",children:[{value:"Ledger",id:"ledger-1",children:[],level:3},{value:"Index",id:"index-1",children:[],level:3}],level:2},{value:"Loading",id:"loading",children:[],level:2}],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Archethic node provides a high level and fast access to an account assets using primarily memory tables with ETS."),(0,l.kt)("p",null,"This gives us faster computation and data retrieval to asserts balances and UTXO loading."),(0,l.kt)("h2",{id:"uco"},"UCO"),(0,l.kt)("p",null,"A memory table is defined to list of the UCO available for a given address"),(0,l.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"get the UCO balance "),(0,l.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,l.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"add new UCO UTXO")),(0,l.kt)("h3",{id:"ledger"},"Ledger"),(0,l.kt)("p",null,"Each entry is indexed by a tuple recipient/sender  to identify uniquely an UTXO"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient, Sender"),(0,l.kt)("th",{parentName:"tr",align:null},"Amount"),(0,l.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,l.kt)("th",{parentName:"tr",align:null},"Date")))),(0,l.kt)("h3",{id:"index"},"Index"),(0,l.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,l.kt)("th",{parentName:"tr",align:null},"Sender")))),(0,l.kt)("h2",{id:"nft"},"NFT"),(0,l.kt)("p",null,"A memory table is defined to list al the NFT available for a given address"),(0,l.kt)("p",null,"Few functions are provided to be able to query this table in order to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"get the NFT balance s"),(0,l.kt)("li",{parentName:"ul"},"get the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"get the total inputs (spent and unspent)"),(0,l.kt)("li",{parentName:"ul"},"spend all the UTXOs"),(0,l.kt)("li",{parentName:"ul"},"add new NFT UTXO")),(0,l.kt)("h3",{id:"ledger-1"},"Ledger"),(0,l.kt)("p",null,"Each entry is indexed by a tuple recipient/sender/nft address  to identify uniquely an UTXO"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient, Sender, NFT"),(0,l.kt)("th",{parentName:"tr",align:null},"Amount"),(0,l.kt)("th",{parentName:"tr",align:null},"Spent ?"),(0,l.kt)("th",{parentName:"tr",align:null},"Date")))),(0,l.kt)("h3",{id:"index-1"},"Index"),(0,l.kt)("p",null,"An index table is provided to be able to retrieve all the sender UTXOs for a given recipient"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Recipient"),(0,l.kt)("th",{parentName:"tr",align:null},"Sender"),(0,l.kt)("th",{parentName:"tr",align:null},"NFT address")))),(0,l.kt)("h2",{id:"loading"},"Loading"),(0,l.kt)("p",null,"When a transaction replicated, the storage nodes in charge of storing the new transaction (chain replicas or recipient replicas) will load the transaction in those tables to index the UTXO and build in memory view."),(0,l.kt)("p",null,"The same goes when a node is bootstraping, a process will load all the transactions from the database to load them  into those tables."))}s.isMDXComponent=!0}}]);