(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return O}));var a=n(2),l=n(6),i=(n(0),n(85)),c=n(88);var o=n(79),b=n(82),s=n(81),r=n(78),d={id:"usage",title:"Usage"},u={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed.",source:"@site/docs\\usage.md",slug:"/usage",permalink:"/reactive-button/docs/usage",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/reactive-button/docs/installation"},next:{title:"Playground",permalink:"/reactive-button/docs/playground"}},g=[{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Full Usage",id:"full-usage",children:[]},{value:"Other Usage",id:"other-usage",children:[{value:"Color",id:"color",children:[]},{value:"Size",id:"size",children:[]},{value:"Style",id:"style",children:[]},{value:"Existing State",id:"existing-state",children:[]},{value:"Without State",id:"without-state",children:[]},{value:"Using Icons",id:"using-icons",children:[]},{value:"Form Submit",id:"form-submit",children:[]},{value:"Anchor Tag",id:"anchor-tag",children:[]}]},{value:"Available Props",id:"available-props",children:[]}],j={rightToc:g};function O(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Below example demonstrates an asynchronous task. When clicking the button, an asynchronous task (e.g. Data fetch, form submit) will be processed and after processing, a success or error message will be displayed."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Initialize a state with string value ",Object(i.b)("code",null,"'idle'")," and assign it as ",Object(i.b)("strong",null,"'buttonState'")," prop. Now it will render an idle text."),Object(i.b)("li",{parentName:"ul"},"When the button is clicked, set state's value to ",Object(i.b)("code",null,"'loading'"),". "),Object(i.b)("li",{parentName:"ul"},"When the task is completed, set state to ",Object(i.b)("code",null,"'success'"),", ",Object(i.b)("code",null,"'error'")," or ",Object(i.b)("code",null,"'idle'")," according to your need.")),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport ReactiveButton from 'reactive-button';\n\nfunction App() {\n   const [state, setState] = useState('idle');\n\n   const onClickHandler = () => {\n      setState('loading');\n      setTimeout(() => {\n         setState('success');\n      }, 2000);\n   }\n\n   return (\n      <ReactiveButton\n         buttonState={state}\n         onClick={onClickHandler}\n      />\n   );\n}\n\nexport default App;\n")),Object(i.b)("h2",{id:"full-usage"},"Full Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport ReactiveButton from 'reactive-button';\n\nfunction App() {\n   const [state, setState] = useState('idle');\n\n   const onClickHandler = () => {\n      setState('loading');\n      setTimeout(() => {\n         setState('success');\n      }, 2000);\n   }\n\n   return (\n      <ReactiveButton\n         buttonState={state}\n         onClick={onClickHandler}\n         color={'primary'}\n         idleText={'Button'}\n         loadingText={'Loading'}\n         successText={'Success'}\n         errorText={'Error'}\n         type={'button'}\n         className={'class1 class2'}\n         style={{ borderRadius: '5px' }}\n         outline={false}\n         shadow={false}\n         rounded={false}\n         size={'normal'}\n         block={false}\n         messageDuration={2000}\n         disabled={false}\n         buttonRef={null}\n         width={null}\n         height={null}\n         animation={true}\n    />\n  );\n}\n\nexport default App;\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For non asynchronous task, state management is not needed. Use as like normal button."))),Object(i.b)("h2",{id:"other-usage"},"Other Usage"),Object(i.b)("p",null,"Reactive Button has all the functionalities of a normal button."),Object(i.b)("h3",{id:"color"},"Color"),Object(i.b)("p",null,"Reactive Button comes with 10 default color options."),Object(i.b)("div",null,Object(i.b)(c.a,{code:'\n<div>\n    <section className="flex-section">\n        <div className="item p-1"><ReactiveButton idleText="Primary" color="primary"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Secondary" color="secondary"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Teal" color="teal"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Green" color="green"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Red" color="red"/></div>\n    </section>\n    <section className="flex-section">\n        \n        <div className="item p-1"><ReactiveButton idleText="Violet" color="violet"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Blue" color="blue"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Yellow" color="yellow"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Dark" color="dark"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Light" color="light"/></div>\n    </section>\n</div>\n',scope:{ReactiveButton:o.a,FontAwesomeIcon:s.a,faReply:b.i},previewOnly:!0,mdxType:"Playground"})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<ReactiveButton color="primary"/>\n<ReactiveButton color="secondary"/>\n<ReactiveButton color="teal"/>\n<ReactiveButton color="green"/>\n<ReactiveButton color="red"/>\n<ReactiveButton color="violet"/>\n<ReactiveButton color="blue"/>\n<ReactiveButton color="yellow"/>\n<ReactiveButton color="dark"/>\n<ReactiveButton color="light"/>\n')),Object(i.b)("h3",{id:"size"},"Size"),Object(i.b)("p",null,"There are 4 sizes available."),Object(i.b)("div",null,Object(i.b)(c.a,{code:'\n<div>\n    <section className="flex-section">\n        <div className="item p-1"><ReactiveButton idleText="Tiny" size="tiny"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Small" size="small"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Medium" size="medium"/></div>\n        <div className="item p-1"><ReactiveButton idleText="Large" size="large"/></div>\n    </section>\n</div>\n',scope:{ReactiveButton:o.a,FontAwesomeIcon:s.a,faReply:b.i},previewOnly:!0,mdxType:"Playground"})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<ReactiveButton size="tiny"/>\n<ReactiveButton size="small"/>\n<ReactiveButton size="medium"/>\n<ReactiveButton size="large"/>\n')),Object(i.b)("h3",{id:"style"},"Style"),Object(i.b)("p",null,"Make the buttons more beautiful with these customization options."),Object(i.b)("div",null,Object(i.b)(c.a,{code:'\n<div>\n    <section className="flex-section">\n        <div className="item p-1"><ReactiveButton idleText="Outline" outline/></div>\n        <div className="item p-1"><ReactiveButton idleText="Rounded" rounded/></div>\n        <div className="item p-1"><ReactiveButton idleText="Shadow" shadow/></div>\n    </section>\n</div>\n',scope:{ReactiveButton:o.a,FontAwesomeIcon:s.a,faReply:b.i},previewOnly:!0,mdxType:"Playground"})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ReactiveButton outline/>\n<ReactiveButton rounded/>\n<ReactiveButton shadow/>\n")),Object(i.b)("h3",{id:"existing-state"},"Existing State"),Object(i.b)("p",null,"In your project, There might be existing state for loading indicator which accepts boolean value only. If you don't want to define new state for Reactive Button, then utilize the existing state."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const [loading, setLoading] = useState(false);\n\nreturn (\n   <ReactiveButton\n      buttonState={loading ? 'loading' : 'idle'}\n      idleText={'Button'}\n      loadingText={'Loading'}\n   />\n);\n")),Object(i.b)("h3",{id:"without-state"},"Without State"),Object(i.b)("p",null,"You are not limited to use state always."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<ReactiveButton\n   onClick={doSomething}\n   idleText={"Some Text"}\n/>\n')),Object(i.b)("h3",{id:"using-icons"},"Using Icons"),Object(i.b)("p",null,"You can use your own icons. Don't forget to wrap them with a parent element."),Object(i.b)("div",null,Object(i.b)(c.a,{code:"<ReactiveButton\n   idleText={<span><FontAwesomeIcon icon={faReply}/> Send</span>}\n/>",scope:{ReactiveButton:o.a,FontAwesomeIcon:s.a,faReply:b.i},previewOnly:!0,mdxType:"Playground"})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ReactiveButton\n   idleText={<span><FontAwesomeIcon icon={faReply}/> Send</span>}\n/>\n")),Object(i.b)("h3",{id:"form-submit"},"Form Submit"),Object(i.b)("p",null,"If you need to submit form by button clicking, set the ",Object(i.b)("code",null,"type")," prop as '",Object(i.b)("strong",null,"submit"),"'. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<form>\n   <input type="text" name="username"/>\n   <input type="password" name="password"/>\n   <ReactiveButton\n      type={\'submit\'}\n      idleText="Submit"\n   />\n</form>\n')),Object(i.b)("h3",{id:"anchor-tag"},"Anchor Tag"),Object(i.b)("p",null,"To use Reactive button as anchor tag, simply wrap it with an anchor tag."),Object(i.b)("div",null,Object(i.b)(c.a,{code:'<a href="https://github.com/" target="_blank">\n   <ReactiveButton\n      idleText="Visit Github"\n   />\n</a>',scope:{ReactiveButton:o.a},previewOnly:!0,mdxType:"Playground"})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<a href="https://github.com/" target="_blank">\n   <ReactiveButton idleText="Visit Github" />\n</a>\n')),Object(i.b)("strong",null,"Note:")," For more usage, visit ",Object(i.b)(r.a,{to:"/docs/Playground",mdxType:"Link"},"Playground"),".",Object(i.b)("h2",{id:"available-props"},"Available Props"),Object(i.b)("div",{className:"z-table-wrapper"},Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",{align:"left"},"Props"),Object(i.b)("th",{align:"center"},"Type"),Object(i.b)("th",{align:"left"},"Description"),Object(i.b)("th",{align:"center"},"Default"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"buttonState"),Object(i.b)("td",{align:"center"},"string"),Object(i.b)("td",{align:"left"},"Current button state"),Object(i.b)("td",{align:"center"},"'idle'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"onClick"),Object(i.b)("td",{align:"center"},"function"),Object(i.b)("td",{align:"left"},"Callback function when clicking button"),Object(i.b)("td",{align:"center"}," ","() => {}"," ")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"color"),Object(i.b)("td",{align:"center"},"string"),Object(i.b)("td",{align:"left"},"Button color"),Object(i.b)("td",{align:"center"},"'primary'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"idleText"),Object(i.b)("td",{align:"center"},"string | ReactNode"),Object(i.b)("td",{align:"left"},"Button text when idle"),Object(i.b)("td",{align:"center"},"'Click Me'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"loadingText"),Object(i.b)("td",{align:"center"},"string | ReactNode"),Object(i.b)("td",{align:"left"},"Button text when loading"),Object(i.b)("td",{align:"center"},"'Loading'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"successText"),Object(i.b)("td",{align:"center"},"string | ReactNode"),Object(i.b)("td",{align:"left"},"Button text when loading successful"),Object(i.b)("td",{align:"center"},"'Success'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"errorText"),Object(i.b)("td",{align:"center"},"string | ReactNode"),Object(i.b)("td",{align:"left"},"Button text when loading failed"),Object(i.b)("td",{align:"center"},"'Error'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"type"),Object(i.b)("td",{align:"center"},"string"),Object(i.b)("td",{align:"left"},"Button type attribute"),Object(i.b)("td",{align:"center"},"'button'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"className"),Object(i.b)("td",{align:"center"},"string"),Object(i.b)("td",{align:"left"},"Button classnames"),Object(i.b)("td",{align:"center"},"''")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"style"),Object(i.b)("td",{align:"center"},"React.CSSProperties"),Object(i.b)("td",{align:"left"},"Custom style"),Object(i.b)("td",{align:"center"},"{}")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"outline"),Object(i.b)("td",{align:"center"},"boolean"),Object(i.b)("td",{align:"left"},"Enable outline effect"),Object(i.b)("td",{align:"center"},"false")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"shadow"),Object(i.b)("td",{align:"center"},"boolean"),Object(i.b)("td",{align:"left"},"Enable shadow effect"),Object(i.b)("td",{align:"center"},"false")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"rounded"),Object(i.b)("td",{align:"center"},"boolean"),Object(i.b)("td",{align:"left"},"Enable rounded button"),Object(i.b)("td",{align:"center"},"false")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"size"),Object(i.b)("td",{align:"center"},"string"),Object(i.b)("td",{align:"left"},"Button size"),Object(i.b)("td",{align:"center"},"'normal'")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"block"),Object(i.b)("td",{align:"center"},"boolean"),Object(i.b)("td",{align:"left"},"Block Button"),Object(i.b)("td",{align:"center"},"false")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"messageDuration"),Object(i.b)("td",{align:"center"},"number"),Object(i.b)("td",{align:"left"},"Success/Error message duration in millisecond"),Object(i.b)("td",{align:"center"},"2000")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"disabled"),Object(i.b)("td",{align:"center"},"boolean"),Object(i.b)("td",{align:"left"},"Disable button"),Object(i.b)("td",{align:"center"},"false")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"buttonRef"),Object(i.b)("td",{align:"center"},"React.Ref | null"),Object(i.b)("td",{align:"left"},"Button reference"),Object(i.b)("td",{align:"center"},"null")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"width"),Object(i.b)("td",{align:"center"},"string | null"),Object(i.b)("td",{align:"left"},"Override button width"),Object(i.b)("td",{align:"center"},"null")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"height"),Object(i.b)("td",{align:"center"},"string | null"),Object(i.b)("td",{align:"left"},"Override button height"),Object(i.b)("td",{align:"center"},"null")),Object(i.b)("tr",null,Object(i.b)("td",{align:"left"},"animation"),Object(i.b)("td",{align:"center"},"boolean"),Object(i.b)("td",{align:"left"},"Button hover and click animation"),Object(i.b)("td",{align:"center"},"true"))))))}O.isMDXComponent=!0},88:function(e,t,n){"use strict";var a=n(0),l=n.n(a),i=n(102),c=n(96),o=n(84),b=n(87);t.a=({noInline:e,code:t,scope:n,height:a,previewOnly:s=!1})=>{const{isDarkTheme:r}=Object(o.a)(),d=Object(i.b)(c.d)`
    border-radius: 3px;
    box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
    overflow: hidden;
    margin-bottom: 100px;
    `,u=i.b.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    @media (max-width: 600px) {
        flex-direction: column;
    }
    `,g=i.a`
    flex-basis: ${s?"100%":"50%"};
    width: ${s?"100%":"50%"};
    max-width: ${s?"100%":"50%"};
    @media (max-width: 600px) {
        flex-basis: auto;
        width: 100%;
        max-width: 100%;
        height: ${a};
        max-height: ${a};
    }
    `,j=i.b.div`
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    height: ${a};
    max-height: ${a};
    overflow: auto;
    ${g};
    * > textarea:focus {
        outline: none;
    }
    `,O=Object(i.b)(c.c)`
    position: relative;
    padding: 1.5rem;
    background: ${r?"#232525":"#e3eaea"};
    color: black;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    ${g};
    `,m=Object(i.b)(c.b)`
    display: block;
    padding: 0.5rem;
    background: ${"#ff5555"};
    color: ${"#f8f8f2"};
    white-space: pre-wrap;
    text-align: left;
    font-size: 0.9em;
    font-family: 'Source Code Pro', monospace;
    `;return l.a.createElement(d,{code:t,noInline:e,theme:b.a,scope:n},l.a.createElement(u,null,!s&&l.a.createElement(j,null,l.a.createElement(c.a,null)),l.a.createElement(O,null)),l.a.createElement(m,null))}}}]);