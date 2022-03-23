"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6518],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"memory-table",title:"OracleChain Memory Tables"},c=void 0,p={unversionedId:"build/core/oracle-chain/memory-table",id:"build/core/oracle-chain/memory-table",title:"OracleChain Memory Tables",description:"OracleChain component provides scheduler and services to maintain transaction chain and real world data integration.",source:"@site/docs/build/core/oracle-chain/mem_table.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/memory-table",permalink:"/archethic-docs/build/core/oracle-chain/memory-table",tags:[],version:"current",lastUpdatedAt:1648066299,formattedLastUpdatedAt:"3/23/2022",frontMatter:{id:"memory-table",title:"OracleChain Memory Tables"},sidebar:"docs",previous:{title:"OracleChain Scheduler",permalink:"/archethic-docs/build/core/oracle-chain/scheduler"},next:{title:"ARCHEthic Wallet Specification",permalink:"/archethic-docs/build/clients/wallet-spec"}},u=[],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OracleChain component provides ",(0,o.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/scheduler"},"scheduler")," and ",(0,o.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/service"},"services")," to maintain transaction chain and real world data integration."),(0,o.kt)("p",null,"But we need a way to access quickly this information for better computation latency."),(0,o.kt)("p",null,"For this purpose, the OracleChain service maintains a memory table using ETS to hold the information according to their date."),(0,o.kt)("p",null,"It represented in that way:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("th",{parentName:"tr",align:null},"Service"),(0,o.kt)("th",{parentName:"tr",align:null},"Data")))),(0,o.kt)("p",null,"For example for the UCO service we may have:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("th",{parentName:"tr",align:null},"Service"),(0,o.kt)("th",{parentName:"tr",align:null},"Data"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1622801400"),(0,o.kt)("td",{parentName:"tr",align:null},"UCO"),(0,o.kt)("td",{parentName:"tr",align:null},'%{ "eur" => 0.02 }')))),(0,o.kt)("p",null,"The table is loading after each oracle or oracle summary transaction and during the bootstrap for faster computation."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The transaction's fee algorithm is using this cached information to provide this computation quickly"))))}s.isMDXComponent=!0}}]);