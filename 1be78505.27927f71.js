(window.webpackJsonp=window.webpackJsonp||[]).push([[5,18],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(89);t.default=function(){return c.a.createElement(l.a,{title:"Page Not Found"},c.a.createElement("div",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},"Page Not Found"),c.a.createElement("p",null,"We could not find what you were looking for."),c.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},155:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const c=document.getSelection();let l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(s){}return a.remove(),l&&(c.removeAllRanges(),c.addRange(l)),n&&n.focus(),r};e.exports=n,e.exports.default=n},156:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],c=t[3];if(a&&c){var l=[],r=(a=parseInt(a))<(c=parseInt(c))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(c+=r);for(var s=a;s!=c;s+=r)l.push(s);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(85),r=a(76),s=a(24),o=a(89),i=a(2),m=a(77),u=a(110),d=a(114),h=a(115),b=a(116),p=a(113),g=a(78),f=a(90),k=a(56),E=a.n(k);const j=(e,t)=>"link"===e.type?((e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)})(e.href,t):"category"===e.type&&e.items.some((e=>j(e,t)));function v({item:e,onItemClick:t,collapsible:a,activePath:l,...r}){const{items:s,label:o}=e,u=j(e,l),d=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(u),[h,b]=Object(n.useState)((()=>!!a&&(!u&&e.collapsed)));Object(n.useEffect)((()=>{u&&!d&&h&&b(!1)}),[u,d,h]);const p=Object(n.useCallback)((e=>{e.preventDefault(),b((e=>!e))}),[b]);return 0===s.length?null:c.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":h}),key:o},c.a.createElement("a",Object(i.a)({className:Object(m.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&u,[E.a.menuLinkText]:!a}),onClick:a?p:void 0,href:a?"#!":void 0},r),o),c.a.createElement("ul",{className:"menu__list"},s.map((e=>c.a.createElement(O,{tabIndex:h?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l})))))}function y({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:r,label:s}=e,o=j(e,a);return c.a.createElement("li",{className:"menu__list-item",key:s},c.a.createElement(g.a,Object(i.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:r},Object(f.a)(r)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),s))}function O(e){switch(e.item.type){case"category":return c.a.createElement(v,e);case"link":default:return c.a.createElement(y,e)}}var C=function({path:e,sidebar:t,sidebarCollapsible:a=!0}){const[l,s]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:o="",hideOnScroll:f=!1}={}}={}}={},isClient:k}=Object(r.a)(),{logoLink:j,logoLinkProps:v,logoImageUrl:y,logoAlt:C}=Object(b.a)(),{isAnnouncementBarClosed:N}=Object(u.a)(),{scrollY:x}=Object(p.a)();Object(d.a)(l);const _=Object(h.a)();return Object(n.useEffect)((()=>{_===h.b.desktop&&s(!1)}),[_]),c.a.createElement("div",{className:Object(m.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:f})},f&&c.a.createElement(g.a,Object(i.a)({tabIndex:-1,className:E.a.sidebarLogo,to:j},v),null!=y&&c.a.createElement("img",{key:k,src:y,alt:C}),null!=o&&c.a.createElement("strong",null,o)),c.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",E.a.menu,{"menu--show":l,[E.a.menuWithAnnouncementBar]:!N&&0===x})},c.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!l)}},l?c.a.createElement("span",{className:Object(m.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement("svg",{"aria-label":"Menu",className:E.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement("ul",{className:"menu__list"},t.map((t=>c.a.createElement(O,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))))},N=a(135),x=a(155),_=a.n(x),w=a(156),B=a.n(w),I=a(87),M=a(84);var L=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(r.a)(),{isDarkTheme:t}=Object(M.a)(),a=e.theme||I.a,n=e.darkTheme||a;return t?n:a},A=a(57),S=a.n(A);const P=/{([\d,-]+)}/,$=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},R=/title=".*"/;var T=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:l={}}}}=Object(r.a)(),[s,o]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1);Object(n.useEffect)((()=>{d(!0)}),[]);const h=Object(n.useRef)(null);let b=[],p="";const g=L();if(a&&P.test(a)){const e=a.match(P)[1];b=B.a.parse(e).filter((e=>e>0))}a&&R.test(a)&&(p=a.match(R)[0].split("title=")[1].replace(/"+/g,""));let f=t&&t.replace(/language-/,"");!f&&l.defaultLanguage&&(f=l.defaultLanguage);let k=e.replace(/\n$/,"");if(0===b.length&&void 0!==f){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return $(["js","jsBlock"]);case"jsx":case"tsx":return $(["js","jsBlock","jsx"]);case"html":return $(["js","jsBlock","html"]);case"python":case"py":return $(["python"]);default:return $()}})(f),n=e.replace(/\n$/,"").split("\n");let c;for(let e=0;e<n.length;){const l=e+1,r=n[e].match(a);if(null!==r){switch(r.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=l+",";break;case"highlight-start":c=l;break;case"highlight-end":t+=`${c}-${l-1},`}n.splice(e,1)}else e+=1}b=B.a.parse(t),k=n.join("\n")}const E=()=>{_()(k),o(!0),setTimeout((()=>o(!1)),2e3)};return c.a.createElement(N.a,Object(i.a)({},N.b,{key:String(u),theme:g,code:k,language:f}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:l})=>c.a.createElement(c.a.Fragment,null,p&&c.a.createElement("div",{style:t,className:S.a.codeBlockTitle},p),c.a.createElement("div",{className:S.a.codeBlockContent},c.a.createElement("button",{ref:h,type:"button","aria-label":"Copy code to clipboard",className:Object(m.a)(S.a.copyButton,{[S.a.copyButtonWithTitle]:p}),onClick:E},s?"Copied":"Copy"),c.a.createElement("div",{tabIndex:0,className:Object(m.a)(e,S.a.codeBlock,{[S.a.codeBlockWithTitle]:p})},c.a.createElement("div",{className:S.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return b.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>c.a.createElement("span",Object(i.a)({key:t},l({token:e,key:t}))))))}))))))))},W=(a(58),a(59)),D=a.n(W);var F=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(r.a)();return t?c.a.createElement(e,a,c.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(m.a)("anchor",{[D.a.enhancedAnchor]:!n}),id:t}),a.children,c.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):c.a.createElement(e,a)},J=a(60),U=a.n(J);var z={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?c.a.createElement(T,e):c.a.createElement("code",e):t},a:e=>c.a.createElement(g.a,e),pre:e=>c.a.createElement("div",Object(i.a)({className:U.a.mdxCodeBlock},e)),h1:F("h1"),h2:F("h2"),h3:F("h3"),h4:F("h4"),h5:F("h5"),h6:F("h6")},H=a(107),Y=a(83),q=a(86),G=a(61),K=a.n(G);function Q({version:e,isLast:t}){const a=t?[e,"latest"]:[e];return c.a.createElement(q.a,null,c.a.createElement("meta",{name:"docsearch:version",content:a.join(",")}))}function V({currentDocRoute:e,versionMetadata:t,children:a}){var n,s;const{siteConfig:i,isClient:m}=Object(r.a)(),{permalinkToSidebar:u,docsSidebars:d,version:h,isLast:b}=t,p=u[e.path],g=d[p];return c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,{version:h,isLast:b}),c.a.createElement(o.a,{key:m},c.a.createElement("div",{className:K.a.docPage},g&&c.a.createElement("div",{className:K.a.docSidebarContainer,role:"complementary"},c.a.createElement(C,{key:p,sidebar:g,path:e.path,sidebarCollapsible:null===(n=null===(s=i.themeConfig)||void 0===s?void 0:s.sidebarCollapsible)||void 0===n||n})),c.a.createElement("main",{className:K.a.docMainContainer},c.a.createElement(l.a,{components:z},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>Object(Y.matchPath)(n.pathname,e)));return l?c.a.createElement(V,{currentDocRoute:l,versionMetadata:a},Object(s.a)(t)):c.a.createElement(H.default,e)}}}]);