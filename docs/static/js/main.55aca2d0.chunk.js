(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[2],{111:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a=function(t,n){return t.replace("rgb","rgba").replace(")",", ".concat(n,")"))};n.b={default:"rgb(248, 248, 248)",grayscale:"rgb(196, 196, 196)",accent:{purple:"rgb(195, 82, 249)",pink:"rgb(255, 0, 255)",default:"rgb(31, 31, 31)",grayscale:"rgb(133, 122, 122)",link:"rgb(82, 0, 198)",sky:"rgb(28, 200, 242)"}}},1417:function(t,n,e){"use strict";e.r(n);var a,c,r,o=e(3),i=e.n(o),s=e(364),l=e.n(s),u=function(t){t&&t instanceof Function&&e.e(11).then(e.bind(null,1717)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),a(t),c(t),r(t),o(t)}))},b=e(208),d=e(209),j=e(23),p=e(68),h=e(80),f=e(151),g=e(1445),x=e(1446),O=e(1447),v=e(111),m=e(365),y=e(676),k=e(362),C=e(254),w=e(12),S=function(t){var n=t.navi,e=Object(k.a)(),a=e.lang,c=e.selectEn,r=e.selectJa,o=Object(b.b)();return Object(w.jsx)(g.a,{sx:{flexGrow:1},children:Object(w.jsx)(T,{position:"static",color:"default",children:Object(w.jsxs)(x.a,{children:[Object(w.jsxs)(_,{onClick:function(){return n("/")},children:[Object(w.jsx)("div",{children:"Symbol"}),Object(w.jsx)("div",{children:"Draw"})]}),Object(w.jsx)(g.a,{sx:{flexGrow:1}}),Object(w.jsx)(f.a,{margin:"4px",children:function(){if(void 0===o)return"";try{var t=C.Account.createFromPrivateKey(o.prikey,C.NetworkType.TEST_NET);return"TDEC5VUUAUYHKI2Y45WBDMGODAS42P3PPCTMGUY"===t.address.plain()?"GEST":t.address.plain()}catch(n){return"404"}}()}),Object(w.jsx)(f.a,{margin:"0px 40px",children:"ja"===a?Object(w.jsx)(y.a,{onClick:c,children:a}):Object(w.jsx)(y.a,{onClick:r,children:a})}),Object(w.jsx)(f.a,{margin:"4px",children:Object(w.jsx)(m.a,{text:"CONNECT",onClick:function(){n("/connect")}})})]})})})},T=Object(h.a)(O.a)(a||(a=Object(p.a)(["\n  box-shadow: 0px 0px 0px 0px white;\n  box-sizing: border-box;\n  height: 64px;\n  background: white !important;\n  border-bottom: solid 1px ",";\n  box-shadow: none !important;\n"])),v.b.grayscale),_=Object(h.a)("div")(c||(c=Object(p.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),A=function(t){var n=t.page,e=Object(j.f)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{navi:function(t){e(t)}}),Object(w.jsx)(f.a,{margin:"0px 10vw",children:Object(w.jsx)(I,{children:n})})]})},I=Object(h.a)("div")(r||(r=Object(p.a)(["\n  height: calc(100vh - 72px - 80px - 64px);\n  margin-top: 72px;\n  margin-bottom: 80px;\n  & > div {\n    margin-top: 72px;\n    padding-bottom: 80px;\n  }\n"]))),E=i.a.lazy((function(){return Promise.all([e.e(1),e.e(9)]).then(e.bind(null,1731))})),D=i.a.lazy((function(){return Promise.all([e.e(0),e.e(5),e.e(8)]).then(e.bind(null,1729))})),P=i.a.lazy((function(){return Promise.all([e.e(0),e.e(6),e.e(10)]).then(e.bind(null,1730))})),N=i.a.lazy((function(){return Promise.all([e.e(1),e.e(7)]).then(e.bind(null,1732))})),H=function(){return Object(w.jsx)(i.a.Suspense,{fallback:Object(w.jsx)("div",{children:"LOADING..."}),children:Object(w.jsx)(d.a,{basename:"/SymbolDraw",children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/",element:Object(w.jsx)(A,{page:Object(w.jsx)(E,{})})}),Object(w.jsx)(j.a,{path:"/canvas/:hash",element:Object(w.jsx)(A,{page:Object(w.jsx)(D,{})})}),Object(w.jsx)(j.a,{path:"/canvas",element:Object(w.jsx)(A,{page:Object(w.jsx)(D,{})})}),Object(w.jsx)(j.a,{path:"/audit",element:Object(w.jsx)(A,{page:Object(w.jsx)(P,{})})}),Object(w.jsx)(j.a,{path:"/connect",element:Object(w.jsx)(A,{page:Object(w.jsx)(N,{})})})]})})})};l.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(b.a,{children:Object(w.jsx)(H,{})})}),document.getElementById("root")),u()},151:function(t,n,e){"use strict";var a,c=e(68),r=(e(3),e(80)),o=e(12);n.a=function(t){var n=t.margin,e=void 0===n?null:n,a=t.padding,c=void 0===a?null:a,r=t.MTop,s=void 0===r?"0":r,l=t.MRight,u=void 0===l?"0":l,b=t.MBottom,d=void 0===b?"0":b,j=t.MLeft,p=void 0===j?"0":j,h=t.PTop,f=void 0===h?"0":h,g=t.PRight,x=void 0===g?"0":g,O=t.PBottom,v=void 0===O?"0":O,m=t.PLeft,y=void 0===m?"0":m,k=t.children;return null===e&&(e="".concat(s," ").concat(u," ").concat(d," ").concat(p)),null===c&&(c="".concat(f," ").concat(x," ").concat(v," ").concat(y)),Object(o.jsx)(i,{margin:e,padding:c,children:k})};var i=Object(r.a)("div")(a||(a=Object(c.a)(["\n  margin: ",";\n  padding: ",";\n"])),(function(t){return t.margin}),(function(t){return t.padding}))},208:function(t,n,e){"use strict";e.d(n,"b",(function(){return i}));var a=e(43),c=e(3),r=e(12),o=Object(c.createContext)(void 0);n.a=function(t){var n=t.children,e=Object(c.useState)("891D9D7E9672925123CFB7766CE9AC740BAFED43AE78F64CE2D296F54E62E57A"),i=Object(a.a)(e,2),s={prikey:i[0],setPrikey:i[1]};return Object(r.jsx)(o.Provider,{value:s,children:n})};var i=function(){return Object(c.useContext)(o)}},362:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var a=e(43),c=e(3),r=e(671),o=e(672),i=e(23),s=function(){var t=Object(c.useState)(localStorage.getItem("lang")||""),n=Object(a.a)(t,2),e=n[0],s=n[1],l=Object(i.f)(),u=Object.entries(r).map((function(t){var n=Object(a.a)(t,2);return{k:n[0],v:n[1]}})),b=Object.entries(o).map((function(t){var n=Object(a.a)(t,2);return{k:n[0],v:n[1]}}));Object(c.useEffect)((function(){console.log("effect",e);var t=localStorage.getItem("lang");console.log("s",t),t?(console.log("b"),"ja"===e?localStorage.setItem("lang","ja"):localStorage.setItem("lang","en")):(console.log("a"),localStorage.setItem("lang","ja"===window.navigator.language?"ja":"en"))}),[e]);return{lang:e,selectJa:function(){s("ja"),l(0)},selectEn:function(){s("en"),l(0)},getI18nText:function(t){if("ja"===e){var n=u.filter((function(n){return n.k===t}))[0];return void 0===n?u.filter((function(t){return"404"===t.k}))[0].v:n.v}var a=b.filter((function(n){return n.k===t}))[0];return void 0===a?b.filter((function(t){return"404"===t.k}))[0].v:a.v}}}},365:function(t,n,e){"use strict";var a,c,r=e(68),o=(e(3),e(80)),i=e(676),s=e(111),l=e(12);n.a=function(t){var n=t.text,e=t.onClick,a=t.fill;return void 0!==a&&a?Object(l.jsx)(u,{variant:"outlined",onClick:e,children:n}):Object(l.jsx)(b,{variant:"outlined",onClick:e,children:n})};var u=Object(o.a)(i.a)(a||(a=Object(r.a)(["\n  color: white !important;\n  background: "," !important;\n  border-color: "," !important;\n  font-weight: 700;\n"])),s.b.accent.sky,s.b.accent.sky),b=Object(o.a)(i.a)(c||(c=Object(r.a)(["\n  color: "," !important;\n  border-color: "," !important;\n\n  :hover {\n    border-color: "," !important;\n    background-color: "," !important;\n  }\n"])),s.b.accent.sky,s.b.accent.sky,s.b.accent.sky,Object(s.a)(s.b.accent.sky,.04))},671:function(t){t.exports=JSON.parse('{"404":"\u30c6\u30ad\u30b9\u30c8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093","invite":"SymbolDraw\u306b\u62db\u5f85\u3059\u308b","share_twitter":"Twitter\u3067\u5171\u6709","share_facebook":"Facebook\u3067\u5171\u6709","share_clipboard":"\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc","share_download":"\u30ad\u30e3\u30f3\u30d0\u30b9\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9","component_dropzone":"\u30c9\u30e9\u30c3\u30b0\u30fb\u30a2\u30f3\u30c9\u30fb\u30c9\u30ed\u30c3\u30d7\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e","audit":"\u76e3\u67fb","description_artchaining":"ArtChaining\u306fArt\u3092\u9023\u9396\u3057Symbol\u306b\u523b\u307f\u307e\u3059\u3002\u65b0\u3057\u304f\u30b2\u30fc\u30e0\u3092\u59cb\u3081\u308b\u5834\u5408\u3001CREATE CHAIN\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u7d9a\u304d\u304b\u3089\u59cb\u3081\u308b\u5834\u5408\u3001TransactionHash\u3092\u5165\u529b\u3057RE CHAIN WITH TRANSACTION HASH \u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3057\u3066\u304f\u3060\u3055\u3044\u3002","description_private_key":"\u81ea\u5206\u306e\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30b2\u30fc\u30e0\u3092\u30d7\u30ec\u30a4\u3059\u308b\u5834\u5408\u3001\u3053\u3053\u304b\u3089\u79d8\u5bc6\u9375\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002","description_connect":"\u79d8\u5bc6\u9375\u3092\u8a2d\u5b9a\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u4fdd\u6709\u3057\u3066\u3044\u308b\u30e2\u30b6\u30a4\u30af\u3092\u30a2\u30fc\u30c8\u306b\u7d10\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002","tooltip_current_art":"\u73fe\u5728\u306e\u30ad\u30e3\u30f3\u30d1\u30b9\u306e\u72b6\u614b\u3092Symbol\u306b\u8a18\u9332\u3057\u5171\u6709\u3057\u307e\u3059\u3002","tooltip_previous_art":"\u30ad\u30e3\u30f3\u30d0\u30b9\u306e\u521d\u671f\u72b6\u614b\u3092\u5171\u6709\u3057\u307e\u3059\u3002"}')},672:function(t){t.exports=JSON.parse('{"404":"text not found","invite":"Invite to SymbolDraw","share_twitter":"Share on Twitter","share_facebook":"Share on Facebook","share_clipboard":"Copy to Clipboard","share_download":"Download Canvas","component_dropzone":"Drag and drop an image or Browse","audit":"AUDIT","description_artchaining":"ArtChaining records a chain of Art into a Symbol. If you want to start a new game, press the CREATE CHAIN button. If you want to continue the chain, enter TransactionHash in the text field and press the  RE CHAIN WITH TRANSACTION HASH button.","description_private_key":"If you want to play the game with your own Testnet account, you can set your private key from here.","description_connect":"The mosaic held by the account that set the private key can be tied to the art.","tooltip_current_art":"The current state of the campus is recorded and shared in the Symbol.","tooltip_previous_art":"Share the initial state of the canvas."}')},696:function(t,n){},698:function(t,n){},708:function(t,n){},710:function(t,n){},737:function(t,n){},738:function(t,n){},743:function(t,n){},745:function(t,n){},752:function(t,n){},771:function(t,n){},787:function(t,n){},814:function(t,n){}},[[1417,3,4]]]);
//# sourceMappingURL=main.55aca2d0.chunk.js.map