(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{107:function(e,t,a){var r={"./Binary_Property/ASCII.js":108,"./Binary_Property/ASCII_Hex_Digit.js":109,"./Binary_Property/Alphabetic.js":110,"./Binary_Property/Any.js":111,"./Binary_Property/Assigned.js":112,"./Binary_Property/Bidi_Control.js":113,"./Binary_Property/Bidi_Mirrored.js":114,"./Binary_Property/Case_Ignorable.js":115,"./Binary_Property/Cased.js":116,"./Binary_Property/Changes_When_Casefolded.js":117,"./Binary_Property/Changes_When_Casemapped.js":118,"./Binary_Property/Changes_When_Lowercased.js":119,"./Binary_Property/Changes_When_NFKC_Casefolded.js":120,"./Binary_Property/Changes_When_Titlecased.js":121,"./Binary_Property/Changes_When_Uppercased.js":122,"./Binary_Property/Dash.js":123,"./Binary_Property/Default_Ignorable_Code_Point.js":124,"./Binary_Property/Deprecated.js":125,"./Binary_Property/Diacritic.js":126,"./Binary_Property/Emoji.js":127,"./Binary_Property/Emoji_Component.js":128,"./Binary_Property/Emoji_Modifier.js":129,"./Binary_Property/Emoji_Modifier_Base.js":130,"./Binary_Property/Emoji_Presentation.js":131,"./Binary_Property/Extended_Pictographic.js":132,"./Binary_Property/Extender.js":133,"./Binary_Property/Grapheme_Base.js":134,"./Binary_Property/Grapheme_Extend.js":135,"./Binary_Property/Hex_Digit.js":136,"./Binary_Property/IDS_Binary_Operator.js":137,"./Binary_Property/IDS_Trinary_Operator.js":138,"./Binary_Property/ID_Continue.js":139,"./Binary_Property/ID_Start.js":140,"./Binary_Property/Ideographic.js":141,"./Binary_Property/Join_Control.js":142,"./Binary_Property/Logical_Order_Exception.js":143,"./Binary_Property/Lowercase.js":144,"./Binary_Property/Math.js":145,"./Binary_Property/Noncharacter_Code_Point.js":146,"./Binary_Property/Pattern_Syntax.js":147,"./Binary_Property/Pattern_White_Space.js":148,"./Binary_Property/Quotation_Mark.js":149,"./Binary_Property/Radical.js":150,"./Binary_Property/Regional_Indicator.js":151,"./Binary_Property/Sentence_Terminal.js":152,"./Binary_Property/Soft_Dotted.js":153,"./Binary_Property/Terminal_Punctuation.js":154,"./Binary_Property/Unified_Ideograph.js":155,"./Binary_Property/Uppercase.js":156,"./Binary_Property/Variation_Selector.js":157,"./Binary_Property/White_Space.js":158,"./Binary_Property/XID_Continue.js":159,"./Binary_Property/XID_Start.js":160,"./General_Category/Cased_Letter.js":161,"./General_Category/Close_Punctuation.js":162,"./General_Category/Connector_Punctuation.js":163,"./General_Category/Control.js":164,"./General_Category/Currency_Symbol.js":165,"./General_Category/Dash_Punctuation.js":166,"./General_Category/Decimal_Number.js":167,"./General_Category/Enclosing_Mark.js":168,"./General_Category/Final_Punctuation.js":169,"./General_Category/Format.js":170,"./General_Category/Initial_Punctuation.js":171,"./General_Category/Letter.js":172,"./General_Category/Letter_Number.js":173,"./General_Category/Line_Separator.js":174,"./General_Category/Lowercase_Letter.js":175,"./General_Category/Mark.js":176,"./General_Category/Math_Symbol.js":177,"./General_Category/Modifier_Letter.js":178,"./General_Category/Modifier_Symbol.js":179,"./General_Category/Nonspacing_Mark.js":180,"./General_Category/Number.js":181,"./General_Category/Open_Punctuation.js":182,"./General_Category/Other.js":183,"./General_Category/Other_Letter.js":184,"./General_Category/Other_Number.js":185,"./General_Category/Other_Punctuation.js":186,"./General_Category/Other_Symbol.js":187,"./General_Category/Paragraph_Separator.js":188,"./General_Category/Private_Use.js":189,"./General_Category/Punctuation.js":190,"./General_Category/Separator.js":191,"./General_Category/Space_Separator.js":192,"./General_Category/Spacing_Mark.js":193,"./General_Category/Surrogate.js":194,"./General_Category/Symbol.js":195,"./General_Category/Titlecase_Letter.js":196,"./General_Category/Unassigned.js":197,"./General_Category/Uppercase_Letter.js":198,"./Script/Adlam.js":199,"./Script/Ahom.js":200,"./Script/Anatolian_Hieroglyphs.js":201,"./Script/Arabic.js":202,"./Script/Armenian.js":203,"./Script/Avestan.js":204,"./Script/Balinese.js":205,"./Script/Bamum.js":206,"./Script/Bassa_Vah.js":207,"./Script/Batak.js":208,"./Script/Bengali.js":209,"./Script/Bhaiksuki.js":210,"./Script/Bopomofo.js":211,"./Script/Brahmi.js":212,"./Script/Braille.js":213,"./Script/Buginese.js":214,"./Script/Buhid.js":215,"./Script/Canadian_Aboriginal.js":216,"./Script/Carian.js":217,"./Script/Caucasian_Albanian.js":218,"./Script/Chakma.js":219,"./Script/Cham.js":220,"./Script/Cherokee.js":221,"./Script/Chorasmian.js":222,"./Script/Common.js":223,"./Script/Coptic.js":224,"./Script/Cuneiform.js":225,"./Script/Cypriot.js":226,"./Script/Cyrillic.js":227,"./Script/Deseret.js":228,"./Script/Devanagari.js":229,"./Script/Dives_Akuru.js":230,"./Script/Dogra.js":231,"./Script/Duployan.js":232,"./Script/Egyptian_Hieroglyphs.js":233,"./Script/Elbasan.js":234,"./Script/Elymaic.js":235,"./Script/Ethiopic.js":236,"./Script/Georgian.js":237,"./Script/Glagolitic.js":238,"./Script/Gothic.js":239,"./Script/Grantha.js":240,"./Script/Greek.js":241,"./Script/Gujarati.js":242,"./Script/Gunjala_Gondi.js":243,"./Script/Gurmukhi.js":244,"./Script/Han.js":245,"./Script/Hangul.js":246,"./Script/Hanifi_Rohingya.js":247,"./Script/Hanunoo.js":248,"./Script/Hatran.js":249,"./Script/Hebrew.js":250,"./Script/Hiragana.js":251,"./Script/Imperial_Aramaic.js":252,"./Script/Inherited.js":253,"./Script/Inscriptional_Pahlavi.js":254,"./Script/Inscriptional_Parthian.js":255,"./Script/Javanese.js":256,"./Script/Kaithi.js":257,"./Script/Kannada.js":258,"./Script/Katakana.js":259,"./Script/Kayah_Li.js":260,"./Script/Kharoshthi.js":261,"./Script/Khitan_Small_Script.js":262,"./Script/Khmer.js":263,"./Script/Khojki.js":264,"./Script/Khudawadi.js":265,"./Script/Lao.js":266,"./Script/Latin.js":267,"./Script/Lepcha.js":268,"./Script/Limbu.js":269,"./Script/Linear_A.js":270,"./Script/Linear_B.js":271,"./Script/Lisu.js":272,"./Script/Lycian.js":273,"./Script/Lydian.js":274,"./Script/Mahajani.js":275,"./Script/Makasar.js":276,"./Script/Malayalam.js":277,"./Script/Mandaic.js":278,"./Script/Manichaean.js":279,"./Script/Marchen.js":280,"./Script/Masaram_Gondi.js":281,"./Script/Medefaidrin.js":282,"./Script/Meetei_Mayek.js":283,"./Script/Mende_Kikakui.js":284,"./Script/Meroitic_Cursive.js":285,"./Script/Meroitic_Hieroglyphs.js":286,"./Script/Miao.js":287,"./Script/Modi.js":288,"./Script/Mongolian.js":289,"./Script/Mro.js":290,"./Script/Multani.js":291,"./Script/Myanmar.js":292,"./Script/Nabataean.js":293,"./Script/Nandinagari.js":294,"./Script/New_Tai_Lue.js":295,"./Script/Newa.js":296,"./Script/Nko.js":297,"./Script/Nushu.js":298,"./Script/Nyiakeng_Puachue_Hmong.js":299,"./Script/Ogham.js":300,"./Script/Ol_Chiki.js":301,"./Script/Old_Hungarian.js":302,"./Script/Old_Italic.js":303,"./Script/Old_North_Arabian.js":304,"./Script/Old_Permic.js":305,"./Script/Old_Persian.js":306,"./Script/Old_Sogdian.js":307,"./Script/Old_South_Arabian.js":308,"./Script/Old_Turkic.js":309,"./Script/Oriya.js":310,"./Script/Osage.js":311,"./Script/Osmanya.js":312,"./Script/Pahawh_Hmong.js":313,"./Script/Palmyrene.js":314,"./Script/Pau_Cin_Hau.js":315,"./Script/Phags_Pa.js":316,"./Script/Phoenician.js":317,"./Script/Psalter_Pahlavi.js":318,"./Script/Rejang.js":319,"./Script/Runic.js":320,"./Script/Samaritan.js":321,"./Script/Saurashtra.js":322,"./Script/Sharada.js":323,"./Script/Shavian.js":324,"./Script/Siddham.js":325,"./Script/SignWriting.js":326,"./Script/Sinhala.js":327,"./Script/Sogdian.js":328,"./Script/Sora_Sompeng.js":329,"./Script/Soyombo.js":330,"./Script/Sundanese.js":331,"./Script/Syloti_Nagri.js":332,"./Script/Syriac.js":333,"./Script/Tagalog.js":334,"./Script/Tagbanwa.js":335,"./Script/Tai_Le.js":336,"./Script/Tai_Tham.js":337,"./Script/Tai_Viet.js":338,"./Script/Takri.js":339,"./Script/Tamil.js":340,"./Script/Tangut.js":341,"./Script/Telugu.js":342,"./Script/Thaana.js":343,"./Script/Thai.js":344,"./Script/Tibetan.js":345,"./Script/Tifinagh.js":346,"./Script/Tirhuta.js":347,"./Script/Ugaritic.js":348,"./Script/Vai.js":349,"./Script/Wancho.js":350,"./Script/Warang_Citi.js":351,"./Script/Yezidi.js":352,"./Script/Yi.js":353,"./Script/Zanabazar_Square.js":354,"./Script_Extensions/Adlam.js":355,"./Script_Extensions/Ahom.js":356,"./Script_Extensions/Anatolian_Hieroglyphs.js":357,"./Script_Extensions/Arabic.js":358,"./Script_Extensions/Armenian.js":359,"./Script_Extensions/Avestan.js":360,"./Script_Extensions/Balinese.js":361,"./Script_Extensions/Bamum.js":362,"./Script_Extensions/Bassa_Vah.js":363,"./Script_Extensions/Batak.js":364,"./Script_Extensions/Bengali.js":365,"./Script_Extensions/Bhaiksuki.js":366,"./Script_Extensions/Bopomofo.js":367,"./Script_Extensions/Brahmi.js":368,"./Script_Extensions/Braille.js":369,"./Script_Extensions/Buginese.js":370,"./Script_Extensions/Buhid.js":371,"./Script_Extensions/Canadian_Aboriginal.js":372,"./Script_Extensions/Carian.js":373,"./Script_Extensions/Caucasian_Albanian.js":374,"./Script_Extensions/Chakma.js":375,"./Script_Extensions/Cham.js":376,"./Script_Extensions/Cherokee.js":377,"./Script_Extensions/Chorasmian.js":378,"./Script_Extensions/Common.js":379,"./Script_Extensions/Coptic.js":380,"./Script_Extensions/Cuneiform.js":381,"./Script_Extensions/Cypriot.js":382,"./Script_Extensions/Cyrillic.js":383,"./Script_Extensions/Deseret.js":384,"./Script_Extensions/Devanagari.js":385,"./Script_Extensions/Dives_Akuru.js":386,"./Script_Extensions/Dogra.js":387,"./Script_Extensions/Duployan.js":388,"./Script_Extensions/Egyptian_Hieroglyphs.js":389,"./Script_Extensions/Elbasan.js":390,"./Script_Extensions/Elymaic.js":391,"./Script_Extensions/Ethiopic.js":392,"./Script_Extensions/Georgian.js":393,"./Script_Extensions/Glagolitic.js":394,"./Script_Extensions/Gothic.js":395,"./Script_Extensions/Grantha.js":396,"./Script_Extensions/Greek.js":397,"./Script_Extensions/Gujarati.js":398,"./Script_Extensions/Gunjala_Gondi.js":399,"./Script_Extensions/Gurmukhi.js":400,"./Script_Extensions/Han.js":401,"./Script_Extensions/Hangul.js":402,"./Script_Extensions/Hanifi_Rohingya.js":403,"./Script_Extensions/Hanunoo.js":404,"./Script_Extensions/Hatran.js":405,"./Script_Extensions/Hebrew.js":406,"./Script_Extensions/Hiragana.js":407,"./Script_Extensions/Imperial_Aramaic.js":408,"./Script_Extensions/Inherited.js":409,"./Script_Extensions/Inscriptional_Pahlavi.js":410,"./Script_Extensions/Inscriptional_Parthian.js":411,"./Script_Extensions/Javanese.js":412,"./Script_Extensions/Kaithi.js":413,"./Script_Extensions/Kannada.js":414,"./Script_Extensions/Katakana.js":415,"./Script_Extensions/Kayah_Li.js":416,"./Script_Extensions/Kharoshthi.js":417,"./Script_Extensions/Khitan_Small_Script.js":418,"./Script_Extensions/Khmer.js":419,"./Script_Extensions/Khojki.js":420,"./Script_Extensions/Khudawadi.js":421,"./Script_Extensions/Lao.js":422,"./Script_Extensions/Latin.js":423,"./Script_Extensions/Lepcha.js":424,"./Script_Extensions/Limbu.js":425,"./Script_Extensions/Linear_A.js":426,"./Script_Extensions/Linear_B.js":427,"./Script_Extensions/Lisu.js":428,"./Script_Extensions/Lycian.js":429,"./Script_Extensions/Lydian.js":430,"./Script_Extensions/Mahajani.js":431,"./Script_Extensions/Makasar.js":432,"./Script_Extensions/Malayalam.js":433,"./Script_Extensions/Mandaic.js":434,"./Script_Extensions/Manichaean.js":435,"./Script_Extensions/Marchen.js":436,"./Script_Extensions/Masaram_Gondi.js":437,"./Script_Extensions/Medefaidrin.js":438,"./Script_Extensions/Meetei_Mayek.js":439,"./Script_Extensions/Mende_Kikakui.js":440,"./Script_Extensions/Meroitic_Cursive.js":441,"./Script_Extensions/Meroitic_Hieroglyphs.js":442,"./Script_Extensions/Miao.js":443,"./Script_Extensions/Modi.js":444,"./Script_Extensions/Mongolian.js":445,"./Script_Extensions/Mro.js":446,"./Script_Extensions/Multani.js":447,"./Script_Extensions/Myanmar.js":448,"./Script_Extensions/Nabataean.js":449,"./Script_Extensions/Nandinagari.js":450,"./Script_Extensions/New_Tai_Lue.js":451,"./Script_Extensions/Newa.js":452,"./Script_Extensions/Nko.js":453,"./Script_Extensions/Nushu.js":454,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":455,"./Script_Extensions/Ogham.js":456,"./Script_Extensions/Ol_Chiki.js":457,"./Script_Extensions/Old_Hungarian.js":458,"./Script_Extensions/Old_Italic.js":459,"./Script_Extensions/Old_North_Arabian.js":460,"./Script_Extensions/Old_Permic.js":461,"./Script_Extensions/Old_Persian.js":462,"./Script_Extensions/Old_Sogdian.js":463,"./Script_Extensions/Old_South_Arabian.js":464,"./Script_Extensions/Old_Turkic.js":465,"./Script_Extensions/Oriya.js":466,"./Script_Extensions/Osage.js":467,"./Script_Extensions/Osmanya.js":468,"./Script_Extensions/Pahawh_Hmong.js":469,"./Script_Extensions/Palmyrene.js":470,"./Script_Extensions/Pau_Cin_Hau.js":471,"./Script_Extensions/Phags_Pa.js":472,"./Script_Extensions/Phoenician.js":473,"./Script_Extensions/Psalter_Pahlavi.js":474,"./Script_Extensions/Rejang.js":475,"./Script_Extensions/Runic.js":476,"./Script_Extensions/Samaritan.js":477,"./Script_Extensions/Saurashtra.js":478,"./Script_Extensions/Sharada.js":479,"./Script_Extensions/Shavian.js":480,"./Script_Extensions/Siddham.js":481,"./Script_Extensions/SignWriting.js":482,"./Script_Extensions/Sinhala.js":483,"./Script_Extensions/Sogdian.js":484,"./Script_Extensions/Sora_Sompeng.js":485,"./Script_Extensions/Soyombo.js":486,"./Script_Extensions/Sundanese.js":487,"./Script_Extensions/Syloti_Nagri.js":488,"./Script_Extensions/Syriac.js":489,"./Script_Extensions/Tagalog.js":490,"./Script_Extensions/Tagbanwa.js":491,"./Script_Extensions/Tai_Le.js":492,"./Script_Extensions/Tai_Tham.js":493,"./Script_Extensions/Tai_Viet.js":494,"./Script_Extensions/Takri.js":495,"./Script_Extensions/Tamil.js":496,"./Script_Extensions/Tangut.js":497,"./Script_Extensions/Telugu.js":498,"./Script_Extensions/Thaana.js":499,"./Script_Extensions/Thai.js":500,"./Script_Extensions/Tibetan.js":501,"./Script_Extensions/Tifinagh.js":502,"./Script_Extensions/Tirhuta.js":503,"./Script_Extensions/Ugaritic.js":504,"./Script_Extensions/Vai.js":505,"./Script_Extensions/Wancho.js":506,"./Script_Extensions/Warang_Citi.js":507,"./Script_Extensions/Yezidi.js":508,"./Script_Extensions/Yi.js":509,"./Script_Extensions/Zanabazar_Square.js":510,"./index.js":511,"./unicode-version.js":512};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id=107},549:function(e,t,a){},550:function(e,t,a){},551:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return g})),a.d(t,"default",(function(){return h}));var r=a(2),s=a(6),n=a(0),i=a.n(n),o=a(80),c=a(76);a(549),a(550);var l=()=>{const e="idle",t="primary",a="Click Me",r="Loading",s="Success",o="Error",l="",p=!1,m=!1,j=!1,_="normal",S=2e3,d=!1,u=!1,g="",E="",h=!0,[y,x]=Object(n.useState)(e),[b,v]=Object(n.useState)(t),[N,f]=Object(n.useState)(a),[C,P]=Object(n.useState)(r),[B,k]=Object(n.useState)(s),[O,T]=Object(n.useState)(o),[w,G]=Object(n.useState)(l),[M,L]=Object(n.useState)(p),[A,I]=Object(n.useState)(m),[D,H]=Object(n.useState)(j),[F,R]=Object(n.useState)(_),[K,z]=Object(n.useState)(S),[W,U]=Object(n.useState)(d),[V,J]=Object(n.useState)(u),[X,Y]=Object(n.useState)(g),[q,Z]=Object(n.useState)(E),[Q,$]=Object(n.useState)(h),[ee,te]=Object(n.useState)(!1);Object(n.useEffect)(()=>{"success"!==y&&"error"!==y||(te(!0),setTimeout(()=>{te(!1),x("idle")},2e3))},[y]);return i.a.createElement("div",{className:"interactive-playground-component-wrapper"},i.a.createElement("div",{className:"mb-3"},i.a.createElement("div",{className:"card playground__card"},i.a.createElement("div",{className:"card__body my-auto text-center"},i.a.createElement(c.a,{buttonState:y,onClick:()=>{te(!0),x("loading"),setTimeout(()=>{x("success"),te(!1)},2e3)},color:b,idleText:""===N?a:N,loadingText:""===N?r:C,successText:""===B?s:B,errorText:""===O?o:O,type:"button",className:w,style:{},outline:M,shadow:A,rounded:D,size:F,block:W,messageDuration:K,disabled:V,buttonRef:null,width:X&&""!==X?X+"px":null,height:q&&""!==q?q+"px":null,animation:Q})))),i.a.createElement("div",{className:"card shadow-dim"},i.a.createElement("div",{className:"card__body"},i.a.createElement("div",{className:"container props__container"},i.a.createElement("div",{className:"row",style:{fontSize:"13px"}},i.a.createElement("div",{className:"col col--6 bootstrap"},i.a.createElement("div",{className:"pt-lg-4"},i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"buttonState"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("select",{className:"form-control form-control-sm",id:"buttonState",value:y,onChange:e=>{x(e.target.value)},disabled:ee},i.a.createElement("option",{value:"idle"},"idle"),i.a.createElement("option",{value:"loading"},"loading"),i.a.createElement("option",{value:"success"},"success"),i.a.createElement("option",{value:"error"},"error")))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"idleText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"idleText",placeholder:"Click Me",value:N,onChange:e=>{f(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"successText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"successText",placeholder:"Success",value:B,onChange:e=>{k(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"shadow"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"shadow",checked:A,onChange:e=>{I(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"outline"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"outline",checked:M,onChange:e=>{L(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"animation"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"animation",checked:Q,onChange:e=>{$(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"className"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"className",placeholder:"",value:w,onChange:e=>{G(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"size"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("select",{className:"form-control form-control-sm",id:"size",value:F,onChange:e=>{R(e.target.value)}},i.a.createElement("option",{value:"small"},"small"),i.a.createElement("option",{value:"normal"},"normal"),i.a.createElement("option",{value:"large"},"large")))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"messageDuration"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"number",className:"form-control form-control-sm",id:"messageDuration",value:K,onChange:e=>{parseInt(e.target.value)>=0&&z(e.target.value)},placeholder:"2000"}))))),i.a.createElement("div",{className:"col col--6 bootstrap"},i.a.createElement("div",{className:"pt-lg-4"},i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"color"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("select",{className:"form-control form-control-sm",id:"color",value:b,onChange:e=>{v(e.target.value)}},i.a.createElement("option",{value:"primary"},"primary"),i.a.createElement("option",{value:"dark"},"dark"),i.a.createElement("option",{value:"light"},"light"),i.a.createElement("option",{value:"green"},"green"),i.a.createElement("option",{value:"red"},"red")))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"loadingText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"loadingText",placeholder:"Loading",value:C,onChange:e=>{P(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"errorText"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("input",{type:"text",className:"form-control form-control-sm",id:"errorText",placeholder:"Error",value:O,onChange:e=>{T(e.target.value)}}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"rounded"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"rounded",checked:D,onChange:e=>{H(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"block"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"block",checked:W,onChange:e=>{U(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"disabled"),i.a.createElement("div",{className:"col-sm-6 align-self-end"},i.a.createElement("input",{type:"checkbox",id:"disabled",checked:V,onChange:e=>{J(!0===e.target.checked)},className:"z-switch"}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"width"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"number",className:"form-control",id:"width",value:X,onChange:e=>{Y(e.target.value)},placeholder:"null"}),i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},"px"))))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{htmlFor:"buttonState",className:"col-sm-5 col-form-label text-lg-right"},"height"),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"input-group"},i.a.createElement("input",{type:"number",className:"form-control",id:"height",value:q,onChange:e=>{Z(e.target.value)},placeholder:"null"}),i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},"px")))))))))),i.a.createElement("div",{className:"card__footer text-center my-2"},i.a.createElement(c.a,{size:"large",idleText:"Reset All",color:"dark",height:"40px",disabled:ee,onClick:()=>{x(e),v(e),f(a),P(r),k(s),T(o),G(l),R(_),I(m),H(j),L(p),U(d),z(S),J(u),Y(g),Z(E),$(h)},style:{borderRadius:"10px"}}))))},p=(a(551),a(92)),m=a(522),j=a(82),_=a(81);var S=()=>i.a.createElement("div",{className:"editor-playground-component-wrapper"},i.a.createElement(m.d,{code:"\n    function App() {\n        const [state, setState] = useState('idle');\n\n        const onClickHandler = () => {\n            setState('loading');\n            setTimeout(() => {\n            setState('success');\n            }, 2000);\n        }\n\n        return (\n            <ReactiveButton\n                buttonState={state}\n                onClick={onClickHandler}\n                color={'primary'}\n                idleText={'Click Me'}\n                loadingText={<React.Fragment><span><FontAwesomeIcon icon={faCircleNotch} spin/></span> Loading</React.Fragment>}\n                successText={<React.Fragment><span><FontAwesomeIcon icon={faThumbsUp}/></span> Success</React.Fragment>}\n                errorText={<React.Fragment><span><FontAwesomeIcon icon={faBomb}/></span> Error</React.Fragment>}\n                type={'button'}\n                className={'class1 class2'}\n                style={{ borderRadius: '5px' }}\n                outline={false}\n                shadow={false}\n                rounded={false}\n                size={'normal'}\n                block={false}\n                messageDuration={2000}\n                disabled={false}\n                buttonRef={null}\n                width={null}\n                height={null}\n                animation={true}\n            />\n        );\n    }\n    ",theme:p.a,scope:{useState:n.useState,ReactiveButton:c.a,FontAwesomeIcon:_.a,faCheck:j.d,faSpinner:j.i,faTimes:j.l,faCircleNotch:j.f,faThumbsUp:j.k,faBomb:j.b}},i.a.createElement("div",{className:"mb-3"},i.a.createElement("div",{className:"card playground__card"},i.a.createElement("div",{className:"card__body my-auto text-center"},i.a.createElement(m.b,null),i.a.createElement(m.c,null)))),i.a.createElement("div",{className:"card shadow-dim"},i.a.createElement("div",{className:"card__body editor__card__body"},i.a.createElement(m.a,null))))),d={id:"playground",title:"Playground"},u={unversionedId:"playground",id:"playground",isDocsHomePage:!1,title:"Playground",description:"Let's explore the different options that Reactive Button offers.",source:"@site/docs\\playground.md",slug:"/playground",permalink:"/reactive-button/docs/playground",version:"current",sidebar:"docs",previous:{title:"Usage",permalink:"/reactive-button/docs/usage"},next:{title:"Styling",permalink:"/reactive-button/docs/styling"}},g=[{value:"Interactive Playground",id:"interactive-playground",children:[]},{value:"Editor Playground",id:"editor-playground",children:[]}],E={rightToc:g};function h(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},E,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's explore the different options that ",Object(o.b)("span",{className:"keyword"},"Reactive Button")," offers."),Object(o.b)("h2",{id:"interactive-playground"},"Interactive Playground"),Object(o.b)("p",null,"Toggle or change the props to see changes."),Object(o.b)(l,{mdxType:"InteractivePlayground"}),Object(o.b)("h2",{id:"editor-playground"},"Editor Playground"),Object(o.b)("p",null,"Edit code to see changes."),Object(o.b)(S,{mdxType:"EditorPlayground"}))}h.isMDXComponent=!0}}]);