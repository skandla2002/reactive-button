(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{106:function(e,t,a){var r={"./Binary_Property/ASCII.js":107,"./Binary_Property/ASCII_Hex_Digit.js":108,"./Binary_Property/Alphabetic.js":109,"./Binary_Property/Any.js":110,"./Binary_Property/Assigned.js":111,"./Binary_Property/Bidi_Control.js":112,"./Binary_Property/Bidi_Mirrored.js":113,"./Binary_Property/Case_Ignorable.js":114,"./Binary_Property/Cased.js":115,"./Binary_Property/Changes_When_Casefolded.js":116,"./Binary_Property/Changes_When_Casemapped.js":117,"./Binary_Property/Changes_When_Lowercased.js":118,"./Binary_Property/Changes_When_NFKC_Casefolded.js":119,"./Binary_Property/Changes_When_Titlecased.js":120,"./Binary_Property/Changes_When_Uppercased.js":121,"./Binary_Property/Dash.js":122,"./Binary_Property/Default_Ignorable_Code_Point.js":123,"./Binary_Property/Deprecated.js":124,"./Binary_Property/Diacritic.js":125,"./Binary_Property/Emoji.js":126,"./Binary_Property/Emoji_Component.js":127,"./Binary_Property/Emoji_Modifier.js":128,"./Binary_Property/Emoji_Modifier_Base.js":129,"./Binary_Property/Emoji_Presentation.js":130,"./Binary_Property/Extended_Pictographic.js":131,"./Binary_Property/Extender.js":132,"./Binary_Property/Grapheme_Base.js":133,"./Binary_Property/Grapheme_Extend.js":134,"./Binary_Property/Hex_Digit.js":135,"./Binary_Property/IDS_Binary_Operator.js":136,"./Binary_Property/IDS_Trinary_Operator.js":137,"./Binary_Property/ID_Continue.js":138,"./Binary_Property/ID_Start.js":139,"./Binary_Property/Ideographic.js":140,"./Binary_Property/Join_Control.js":141,"./Binary_Property/Logical_Order_Exception.js":142,"./Binary_Property/Lowercase.js":143,"./Binary_Property/Math.js":144,"./Binary_Property/Noncharacter_Code_Point.js":145,"./Binary_Property/Pattern_Syntax.js":146,"./Binary_Property/Pattern_White_Space.js":147,"./Binary_Property/Quotation_Mark.js":148,"./Binary_Property/Radical.js":149,"./Binary_Property/Regional_Indicator.js":150,"./Binary_Property/Sentence_Terminal.js":151,"./Binary_Property/Soft_Dotted.js":152,"./Binary_Property/Terminal_Punctuation.js":153,"./Binary_Property/Unified_Ideograph.js":154,"./Binary_Property/Uppercase.js":155,"./Binary_Property/Variation_Selector.js":156,"./Binary_Property/White_Space.js":157,"./Binary_Property/XID_Continue.js":158,"./Binary_Property/XID_Start.js":159,"./General_Category/Cased_Letter.js":160,"./General_Category/Close_Punctuation.js":161,"./General_Category/Connector_Punctuation.js":162,"./General_Category/Control.js":163,"./General_Category/Currency_Symbol.js":164,"./General_Category/Dash_Punctuation.js":165,"./General_Category/Decimal_Number.js":166,"./General_Category/Enclosing_Mark.js":167,"./General_Category/Final_Punctuation.js":168,"./General_Category/Format.js":169,"./General_Category/Initial_Punctuation.js":170,"./General_Category/Letter.js":171,"./General_Category/Letter_Number.js":172,"./General_Category/Line_Separator.js":173,"./General_Category/Lowercase_Letter.js":174,"./General_Category/Mark.js":175,"./General_Category/Math_Symbol.js":176,"./General_Category/Modifier_Letter.js":177,"./General_Category/Modifier_Symbol.js":178,"./General_Category/Nonspacing_Mark.js":179,"./General_Category/Number.js":180,"./General_Category/Open_Punctuation.js":181,"./General_Category/Other.js":182,"./General_Category/Other_Letter.js":183,"./General_Category/Other_Number.js":184,"./General_Category/Other_Punctuation.js":185,"./General_Category/Other_Symbol.js":186,"./General_Category/Paragraph_Separator.js":187,"./General_Category/Private_Use.js":188,"./General_Category/Punctuation.js":189,"./General_Category/Separator.js":190,"./General_Category/Space_Separator.js":191,"./General_Category/Spacing_Mark.js":192,"./General_Category/Surrogate.js":193,"./General_Category/Symbol.js":194,"./General_Category/Titlecase_Letter.js":195,"./General_Category/Unassigned.js":196,"./General_Category/Uppercase_Letter.js":197,"./Script/Adlam.js":198,"./Script/Ahom.js":199,"./Script/Anatolian_Hieroglyphs.js":200,"./Script/Arabic.js":201,"./Script/Armenian.js":202,"./Script/Avestan.js":203,"./Script/Balinese.js":204,"./Script/Bamum.js":205,"./Script/Bassa_Vah.js":206,"./Script/Batak.js":207,"./Script/Bengali.js":208,"./Script/Bhaiksuki.js":209,"./Script/Bopomofo.js":210,"./Script/Brahmi.js":211,"./Script/Braille.js":212,"./Script/Buginese.js":213,"./Script/Buhid.js":214,"./Script/Canadian_Aboriginal.js":215,"./Script/Carian.js":216,"./Script/Caucasian_Albanian.js":217,"./Script/Chakma.js":218,"./Script/Cham.js":219,"./Script/Cherokee.js":220,"./Script/Chorasmian.js":221,"./Script/Common.js":222,"./Script/Coptic.js":223,"./Script/Cuneiform.js":224,"./Script/Cypriot.js":225,"./Script/Cyrillic.js":226,"./Script/Deseret.js":227,"./Script/Devanagari.js":228,"./Script/Dives_Akuru.js":229,"./Script/Dogra.js":230,"./Script/Duployan.js":231,"./Script/Egyptian_Hieroglyphs.js":232,"./Script/Elbasan.js":233,"./Script/Elymaic.js":234,"./Script/Ethiopic.js":235,"./Script/Georgian.js":236,"./Script/Glagolitic.js":237,"./Script/Gothic.js":238,"./Script/Grantha.js":239,"./Script/Greek.js":240,"./Script/Gujarati.js":241,"./Script/Gunjala_Gondi.js":242,"./Script/Gurmukhi.js":243,"./Script/Han.js":244,"./Script/Hangul.js":245,"./Script/Hanifi_Rohingya.js":246,"./Script/Hanunoo.js":247,"./Script/Hatran.js":248,"./Script/Hebrew.js":249,"./Script/Hiragana.js":250,"./Script/Imperial_Aramaic.js":251,"./Script/Inherited.js":252,"./Script/Inscriptional_Pahlavi.js":253,"./Script/Inscriptional_Parthian.js":254,"./Script/Javanese.js":255,"./Script/Kaithi.js":256,"./Script/Kannada.js":257,"./Script/Katakana.js":258,"./Script/Kayah_Li.js":259,"./Script/Kharoshthi.js":260,"./Script/Khitan_Small_Script.js":261,"./Script/Khmer.js":262,"./Script/Khojki.js":263,"./Script/Khudawadi.js":264,"./Script/Lao.js":265,"./Script/Latin.js":266,"./Script/Lepcha.js":267,"./Script/Limbu.js":268,"./Script/Linear_A.js":269,"./Script/Linear_B.js":270,"./Script/Lisu.js":271,"./Script/Lycian.js":272,"./Script/Lydian.js":273,"./Script/Mahajani.js":274,"./Script/Makasar.js":275,"./Script/Malayalam.js":276,"./Script/Mandaic.js":277,"./Script/Manichaean.js":278,"./Script/Marchen.js":279,"./Script/Masaram_Gondi.js":280,"./Script/Medefaidrin.js":281,"./Script/Meetei_Mayek.js":282,"./Script/Mende_Kikakui.js":283,"./Script/Meroitic_Cursive.js":284,"./Script/Meroitic_Hieroglyphs.js":285,"./Script/Miao.js":286,"./Script/Modi.js":287,"./Script/Mongolian.js":288,"./Script/Mro.js":289,"./Script/Multani.js":290,"./Script/Myanmar.js":291,"./Script/Nabataean.js":292,"./Script/Nandinagari.js":293,"./Script/New_Tai_Lue.js":294,"./Script/Newa.js":295,"./Script/Nko.js":296,"./Script/Nushu.js":297,"./Script/Nyiakeng_Puachue_Hmong.js":298,"./Script/Ogham.js":299,"./Script/Ol_Chiki.js":300,"./Script/Old_Hungarian.js":301,"./Script/Old_Italic.js":302,"./Script/Old_North_Arabian.js":303,"./Script/Old_Permic.js":304,"./Script/Old_Persian.js":305,"./Script/Old_Sogdian.js":306,"./Script/Old_South_Arabian.js":307,"./Script/Old_Turkic.js":308,"./Script/Oriya.js":309,"./Script/Osage.js":310,"./Script/Osmanya.js":311,"./Script/Pahawh_Hmong.js":312,"./Script/Palmyrene.js":313,"./Script/Pau_Cin_Hau.js":314,"./Script/Phags_Pa.js":315,"./Script/Phoenician.js":316,"./Script/Psalter_Pahlavi.js":317,"./Script/Rejang.js":318,"./Script/Runic.js":319,"./Script/Samaritan.js":320,"./Script/Saurashtra.js":321,"./Script/Sharada.js":322,"./Script/Shavian.js":323,"./Script/Siddham.js":324,"./Script/SignWriting.js":325,"./Script/Sinhala.js":326,"./Script/Sogdian.js":327,"./Script/Sora_Sompeng.js":328,"./Script/Soyombo.js":329,"./Script/Sundanese.js":330,"./Script/Syloti_Nagri.js":331,"./Script/Syriac.js":332,"./Script/Tagalog.js":333,"./Script/Tagbanwa.js":334,"./Script/Tai_Le.js":335,"./Script/Tai_Tham.js":336,"./Script/Tai_Viet.js":337,"./Script/Takri.js":338,"./Script/Tamil.js":339,"./Script/Tangut.js":340,"./Script/Telugu.js":341,"./Script/Thaana.js":342,"./Script/Thai.js":343,"./Script/Tibetan.js":344,"./Script/Tifinagh.js":345,"./Script/Tirhuta.js":346,"./Script/Ugaritic.js":347,"./Script/Vai.js":348,"./Script/Wancho.js":349,"./Script/Warang_Citi.js":350,"./Script/Yezidi.js":351,"./Script/Yi.js":352,"./Script/Zanabazar_Square.js":353,"./Script_Extensions/Adlam.js":354,"./Script_Extensions/Ahom.js":355,"./Script_Extensions/Anatolian_Hieroglyphs.js":356,"./Script_Extensions/Arabic.js":357,"./Script_Extensions/Armenian.js":358,"./Script_Extensions/Avestan.js":359,"./Script_Extensions/Balinese.js":360,"./Script_Extensions/Bamum.js":361,"./Script_Extensions/Bassa_Vah.js":362,"./Script_Extensions/Batak.js":363,"./Script_Extensions/Bengali.js":364,"./Script_Extensions/Bhaiksuki.js":365,"./Script_Extensions/Bopomofo.js":366,"./Script_Extensions/Brahmi.js":367,"./Script_Extensions/Braille.js":368,"./Script_Extensions/Buginese.js":369,"./Script_Extensions/Buhid.js":370,"./Script_Extensions/Canadian_Aboriginal.js":371,"./Script_Extensions/Carian.js":372,"./Script_Extensions/Caucasian_Albanian.js":373,"./Script_Extensions/Chakma.js":374,"./Script_Extensions/Cham.js":375,"./Script_Extensions/Cherokee.js":376,"./Script_Extensions/Chorasmian.js":377,"./Script_Extensions/Common.js":378,"./Script_Extensions/Coptic.js":379,"./Script_Extensions/Cuneiform.js":380,"./Script_Extensions/Cypriot.js":381,"./Script_Extensions/Cyrillic.js":382,"./Script_Extensions/Deseret.js":383,"./Script_Extensions/Devanagari.js":384,"./Script_Extensions/Dives_Akuru.js":385,"./Script_Extensions/Dogra.js":386,"./Script_Extensions/Duployan.js":387,"./Script_Extensions/Egyptian_Hieroglyphs.js":388,"./Script_Extensions/Elbasan.js":389,"./Script_Extensions/Elymaic.js":390,"./Script_Extensions/Ethiopic.js":391,"./Script_Extensions/Georgian.js":392,"./Script_Extensions/Glagolitic.js":393,"./Script_Extensions/Gothic.js":394,"./Script_Extensions/Grantha.js":395,"./Script_Extensions/Greek.js":396,"./Script_Extensions/Gujarati.js":397,"./Script_Extensions/Gunjala_Gondi.js":398,"./Script_Extensions/Gurmukhi.js":399,"./Script_Extensions/Han.js":400,"./Script_Extensions/Hangul.js":401,"./Script_Extensions/Hanifi_Rohingya.js":402,"./Script_Extensions/Hanunoo.js":403,"./Script_Extensions/Hatran.js":404,"./Script_Extensions/Hebrew.js":405,"./Script_Extensions/Hiragana.js":406,"./Script_Extensions/Imperial_Aramaic.js":407,"./Script_Extensions/Inherited.js":408,"./Script_Extensions/Inscriptional_Pahlavi.js":409,"./Script_Extensions/Inscriptional_Parthian.js":410,"./Script_Extensions/Javanese.js":411,"./Script_Extensions/Kaithi.js":412,"./Script_Extensions/Kannada.js":413,"./Script_Extensions/Katakana.js":414,"./Script_Extensions/Kayah_Li.js":415,"./Script_Extensions/Kharoshthi.js":416,"./Script_Extensions/Khitan_Small_Script.js":417,"./Script_Extensions/Khmer.js":418,"./Script_Extensions/Khojki.js":419,"./Script_Extensions/Khudawadi.js":420,"./Script_Extensions/Lao.js":421,"./Script_Extensions/Latin.js":422,"./Script_Extensions/Lepcha.js":423,"./Script_Extensions/Limbu.js":424,"./Script_Extensions/Linear_A.js":425,"./Script_Extensions/Linear_B.js":426,"./Script_Extensions/Lisu.js":427,"./Script_Extensions/Lycian.js":428,"./Script_Extensions/Lydian.js":429,"./Script_Extensions/Mahajani.js":430,"./Script_Extensions/Makasar.js":431,"./Script_Extensions/Malayalam.js":432,"./Script_Extensions/Mandaic.js":433,"./Script_Extensions/Manichaean.js":434,"./Script_Extensions/Marchen.js":435,"./Script_Extensions/Masaram_Gondi.js":436,"./Script_Extensions/Medefaidrin.js":437,"./Script_Extensions/Meetei_Mayek.js":438,"./Script_Extensions/Mende_Kikakui.js":439,"./Script_Extensions/Meroitic_Cursive.js":440,"./Script_Extensions/Meroitic_Hieroglyphs.js":441,"./Script_Extensions/Miao.js":442,"./Script_Extensions/Modi.js":443,"./Script_Extensions/Mongolian.js":444,"./Script_Extensions/Mro.js":445,"./Script_Extensions/Multani.js":446,"./Script_Extensions/Myanmar.js":447,"./Script_Extensions/Nabataean.js":448,"./Script_Extensions/Nandinagari.js":449,"./Script_Extensions/New_Tai_Lue.js":450,"./Script_Extensions/Newa.js":451,"./Script_Extensions/Nko.js":452,"./Script_Extensions/Nushu.js":453,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":454,"./Script_Extensions/Ogham.js":455,"./Script_Extensions/Ol_Chiki.js":456,"./Script_Extensions/Old_Hungarian.js":457,"./Script_Extensions/Old_Italic.js":458,"./Script_Extensions/Old_North_Arabian.js":459,"./Script_Extensions/Old_Permic.js":460,"./Script_Extensions/Old_Persian.js":461,"./Script_Extensions/Old_Sogdian.js":462,"./Script_Extensions/Old_South_Arabian.js":463,"./Script_Extensions/Old_Turkic.js":464,"./Script_Extensions/Oriya.js":465,"./Script_Extensions/Osage.js":466,"./Script_Extensions/Osmanya.js":467,"./Script_Extensions/Pahawh_Hmong.js":468,"./Script_Extensions/Palmyrene.js":469,"./Script_Extensions/Pau_Cin_Hau.js":470,"./Script_Extensions/Phags_Pa.js":471,"./Script_Extensions/Phoenician.js":472,"./Script_Extensions/Psalter_Pahlavi.js":473,"./Script_Extensions/Rejang.js":474,"./Script_Extensions/Runic.js":475,"./Script_Extensions/Samaritan.js":476,"./Script_Extensions/Saurashtra.js":477,"./Script_Extensions/Sharada.js":478,"./Script_Extensions/Shavian.js":479,"./Script_Extensions/Siddham.js":480,"./Script_Extensions/SignWriting.js":481,"./Script_Extensions/Sinhala.js":482,"./Script_Extensions/Sogdian.js":483,"./Script_Extensions/Sora_Sompeng.js":484,"./Script_Extensions/Soyombo.js":485,"./Script_Extensions/Sundanese.js":486,"./Script_Extensions/Syloti_Nagri.js":487,"./Script_Extensions/Syriac.js":488,"./Script_Extensions/Tagalog.js":489,"./Script_Extensions/Tagbanwa.js":490,"./Script_Extensions/Tai_Le.js":491,"./Script_Extensions/Tai_Tham.js":492,"./Script_Extensions/Tai_Viet.js":493,"./Script_Extensions/Takri.js":494,"./Script_Extensions/Tamil.js":495,"./Script_Extensions/Tangut.js":496,"./Script_Extensions/Telugu.js":497,"./Script_Extensions/Thaana.js":498,"./Script_Extensions/Thai.js":499,"./Script_Extensions/Tibetan.js":500,"./Script_Extensions/Tifinagh.js":501,"./Script_Extensions/Tirhuta.js":502,"./Script_Extensions/Ugaritic.js":503,"./Script_Extensions/Vai.js":504,"./Script_Extensions/Wancho.js":505,"./Script_Extensions/Warang_Citi.js":506,"./Script_Extensions/Yezidi.js":507,"./Script_Extensions/Yi.js":508,"./Script_Extensions/Zanabazar_Square.js":509,"./index.js":510,"./unicode-version.js":511};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id=106},546:function(e,t,a){},547:function(e,t,a){},548:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return E})),a.d(t,"metadata",(function(){return g})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return x}));var r=a(2),s=a(6),n=a(0),i=a.n(n),o=a(82),c=a(76),l=a(545),p=a.n(l),m=(a(546),a(547),a(78));var j=()=>{const e="idle",t="primary",a="Click Me",r='<span><i className="reactive-btn-spinner"></i>Loading</span>',s="Success!",o="Error!",l="",m=!1,j=!1,_=!1,S="normal",d=2e3,u=!1,E=!1,g=0,h=0,y=!0,[x,b]=Object(n.useState)(e),[v,N]=Object(n.useState)(t),[C,f]=Object(n.useState)(a),[P,k]=Object(n.useState)(r),[B,O]=Object(n.useState)(s),[T,w]=Object(n.useState)(o),[G,M]=Object(n.useState)(l),[L,A]=Object(n.useState)(m),[I,D]=Object(n.useState)(j),[H,F]=Object(n.useState)(_),[K,z]=Object(n.useState)(S),[R,W]=Object(n.useState)(d),[U,V]=Object(n.useState)(u),[J,X]=Object(n.useState)(E),[Y,q]=Object(n.useState)(g),[Z,Q]=Object(n.useState)(h),[$,ee]=Object(n.useState)(y),[te,ae]=Object(n.useState)(!1);Object(n.useEffect)(()=>{"success"!==x&&"error"!==x||setTimeout(()=>{b("idle")},2e3)},[x]);return i.a.createElement("div",{className:"interactive-playground-component-wrapper"},i.a.createElement("div",{className:"mb-3"},i.a.createElement("div",{className:"card playground__card"},i.a.createElement("div",{className:"card__body my-auto text-center"},i.a.createElement(c.a,{buttonState:x,onClick:()=>{ae(!0),b("loading"),setTimeout(()=>{b("success"),ae(!1)},2e3)},color:v,idleText:i.a.createElement(p.a,{jsx:""===C?a:C}),loadingText:i.a.createElement(p.a,{jsx:""===C?r:P}),successText:i.a.createElement(p.a,{jsx:""===B?s:B}),errorText:i.a.createElement(p.a,{jsx:""===T?o:T}),type:"button",className:G,style:{},outline:L,shadow:I,rounded:H,size:K,block:U,messageDuration:R,disabled:J,buttonRef:null,width:Y?Y+"px":null,height:Z?Z+"px":null,animation:$})))),i.a.createElement("div",{className:"card shadow-dim"},i.a.createElement("div",{className:"card__body"},i.a.createElement("div",{className:"container props__container"},i.a.createElement("div",{className:"row",style:{fontSize:"13px"}},i.a.createElement("div",{className:"col col--6 bootstrap"},i.a.createElement("div",{className:"pt-lg-4"},i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"buttonState"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("select",{className:"form-control form-control-sm",id:"buttonState",value:x,onChange:e=>{b(e.target.value)},disabled:te},i.a.createElement("option",{value:"idle"},"idle"),i.a.createElement("option",{value:"loading"},"loading"),i.a.createElement("option",{value:"success"},"success"),i.a.createElement("option",{value:"error"},"error")))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"idleText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"idleText",placeholder:"Click Me",value:C,onChange:e=>{f(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"successText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"successText",placeholder:"Success!",value:B,onChange:e=>{O(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"shadow"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"shadow",checked:I,onChange:e=>{D(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"outline"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"outline",checked:L,onChange:e=>{A(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"animation"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"animation",checked:$,onChange:e=>{ee(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"className"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"className",placeholder:"",value:G,onChange:e=>{M(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"size"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("select",{className:"form-control form-control-sm",id:"size",value:K,onChange:e=>{z(e.target.value)}},i.a.createElement("option",{value:"small"},"small"),i.a.createElement("option",{value:"normal"},"normal"),i.a.createElement("option",{value:"large"},"large")))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"messageDuration"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"number",className:"form-control form-control-sm",id:"messageDuration",value:R,onChange:e=>{parseInt(e.target.value)>=0&&W(e.target.value)},placeholder:"2000"}))))),i.a.createElement("div",{className:"col col--6 bootstrap"},i.a.createElement("div",{className:"pt-lg-4"},i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"color"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("select",{className:"form-control form-control-sm",id:"color",value:v,onChange:e=>{N(e.target.value)}},i.a.createElement("option",{value:"primary"},"primary"),i.a.createElement("option",{value:"dark"},"dark"),i.a.createElement("option",{value:"light"},"light"),i.a.createElement("option",{value:"green"},"green"),i.a.createElement("option",{value:"red"},"red")))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"loadingText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"loadingText",placeholder:"Loading",value:P,onChange:e=>{k(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"errorText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"errorText",placeholder:"Error!",value:T,onChange:e=>{setErrorText(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"rounded"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"rounded",checked:H,onChange:e=>{F(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"block"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"block",checked:U,onChange:e=>{V(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"disabled"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"disabled",checked:J,onChange:e=>{X(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"width"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"number",className:"form-control",id:"width",value:Y,onChange:e=>{q(e.target.value)},placeholder:"null"}),i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},"px"))))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"height"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"number",className:"form-control",id:"height",value:Z,onChange:e=>{Q(e.target.value)},placeholder:"null"}),i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},"px")))))))))),i.a.createElement("div",{className:"card__footer text-center my-2"},i.a.createElement(c.a,{size:"large",idleText:"Reset All",color:"dark",height:"40px",disabled:te,onClick:()=>{b(e),N(e),f(a),k(r),O(s),w(o),M(l),z(S),D(j),F(_),A(m),V(u),W(d),X(E),q(g),Q(h),ee(y)},style:{borderRadius:"10px"}}))))},_=(a(548),a(92)),S=a(520),d=a(79),u=function(){return i.a.createElement("div",{className:"editor-playground-component-wrapper"},i.a.createElement(S.d,{code:"\n    function App() {\n        const [state, setState] = useState('idle');\n\n        const onClickHandler = () => {\n            setState('loading');\n            setTimeout(() => {\n            setState('success');\n            }, 2000);\n        }\n\n        return (\n            <ReactiveButton\n                buttonState={state}\n                onClick={onClickHandler}\n                color={'primary'}\n                idleText={'Click Me'}\n                loadingText={<span><span><FontAwesomeIcon icon={faSpinner} spin/></span> Loading</span>}\n                successText={<span><span><FontAwesomeIcon icon={faCheck}/></span> Success</span>}\n                errorText={<span><span><FontAwesomeIcon icon={faTimes}/></span> Error</span>}\n                type={'button'}\n                className={'class1 class2'}\n                style={{ textAlign: 'center' }}\n                outline={false}\n                shadow={false}\n                rounded={false}\n                size={'normal'}\n                block={false}\n                messageDuration={2000}\n                disabled={false}\n                buttonRef={null}\n                width={null}\n                height={null}\n                animation={true}\n            />\n        );\n    }\n    ",theme:_.a,scope:{useState:n.useState,ReactiveButton:c.a,FontAwesomeIcon:m.a,faCheck:d.b,faSpinner:d.c,faTimes:d.d}},i.a.createElement("div",{className:"mb-3"},i.a.createElement("div",{className:"card playground__card"},i.a.createElement("div",{className:"card__body my-auto text-center"},i.a.createElement(S.b,null),i.a.createElement(S.c,null)))),i.a.createElement("div",{className:"card shadow-dim"},i.a.createElement("div",{className:"card__body editor__card__body"},i.a.createElement(S.a,null)))))},E={id:"playground",title:"Playground"},g={unversionedId:"playground",id:"playground",isDocsHomePage:!1,title:"Playground",description:"Let's explore the different options that Reactive Button offers.",source:"@site/docs\\playground.md",slug:"/playground",permalink:"/reactive-button/docs/playground",version:"current",sidebar:"someSidebar",previous:{title:"Usage",permalink:"/reactive-button/docs/usage"},next:{title:"Styling",permalink:"/reactive-button/docs/styling"}},h=[{value:"Interactive Playground",id:"interactive-playground",children:[]},{value:"Editor Playground",id:"editor-playground",children:[]}],y={rightToc:h};function x(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's explore the different options that ",Object(o.b)("span",{className:"keyword"},"Reactive Button")," offers."),Object(o.b)("h2",{id:"interactive-playground"},"Interactive Playground"),Object(o.b)("p",null,"Toggle or change the props to see changes."),Object(o.b)(j,{mdxType:"InteractivePlayground"}),Object(o.b)("h2",{id:"editor-playground"},"Editor Playground"),Object(o.b)("p",null,"Edit code to see changes."),Object(o.b)(u,{mdxType:"EditorPlayground"}))}x.isMDXComponent=!0}}]);