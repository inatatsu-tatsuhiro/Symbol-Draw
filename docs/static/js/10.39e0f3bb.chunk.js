(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[10],{1673:function(e,n,t){"use strict";(function(e){var a,c,r=t(14),o=t(1729),i=t(1700),s=t(1740),u=t(1732),l=t(115),f=t(519),j=t(1675),p=t(1676),b=t(1724),h=t(1725),d=t(18),O=t(0),x=t.n(O),v=t(27),g=t(251),m=t(54),T=t(298),y=t(2),w="http://localhost";n.a=function(n){var t=n.open,a=n.setOpen,c=n.txHash,r=Object(m.a)().getI18nText,l=x.a.useCallback((function(){navigator.clipboard.writeText(c)}),[c]);return Object(y.jsx)(o.a,{open:t,onClose:function(){return a(!1)},children:Object(y.jsxs)(k,{children:[Object(y.jsx)(i.a,{variant:"h6",component:"div",children:r("invite")}),Object(y.jsxs)(s.a,{children:[Object(y.jsx)(u.a,{button:!0,children:Object(y.jsx)(b.a,{url:"".concat(w,"/canvas/").concat(c),children:Object(y.jsxs)(C,{children:[Object(y.jsx)(g.b.Provider,{value:{size:"32px"},children:Object(y.jsx)(f.f,{})}),Object(y.jsx)(v.a,{MLeft:"16px",children:Object(y.jsx)(i.a,{variant:"h4",component:"div",children:r("share_twitter")})})]})})}),Object(y.jsx)(u.a,{button:!0,children:Object(y.jsx)(h.a,{url:"".concat(w,"/canvas/").concat(c),children:Object(y.jsxs)(C,{children:[Object(y.jsx)(g.b.Provider,{value:{size:"32px"},children:Object(y.jsx)(f.c,{})}),Object(y.jsx)(v.a,{MLeft:"16px",children:Object(y.jsx)(i.a,{variant:"h4",component:"div",children:r("share_facebook")})})]})})}),Object(y.jsx)(u.a,{button:!0,children:Object(y.jsxs)(C,{onClick:l,children:[Object(y.jsx)(g.b.Provider,{value:{size:"32px"},children:Object(y.jsx)(j.a,{})}),Object(y.jsx)(v.a,{MLeft:"16px",children:Object(y.jsx)(i.a,{variant:"h4",component:"div",children:r("share_clipboard")})})]})}),Object(y.jsx)(u.a,{button:!0,children:Object(y.jsxs)(C,{onClick:function(){console.log("apostille"),Object(T.a)(c).then((function(n){var t=n.split(",").map((function(n){return e.from(n,"base64")}));console.log("bufs",t)}))},children:[Object(y.jsx)(g.b.Provider,{value:{size:"32px"},children:Object(y.jsx)(p.a,{})}),Object(y.jsx)(v.a,{MLeft:"16px",children:Object(y.jsx)(i.a,{variant:"h4",component:"div",children:r("share_download")})})]})})]})]})})};var k=Object(d.a)(l.a)(a||(a=Object(r.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50vw;\n  transform: translate(-50%, -50%);\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),C=Object(d.a)("div")(c||(c=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  align-items: center;\n  margin: 4px 8px;\n"])))}).call(this,t(139).Buffer)},1735:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,s,u=t(0),l=t.n(u),f=t(9),j=t(14),p=t(19),b=t(835),h=t(834),d=t(18),O=t(519),x=t(1739),v=t(1731),g=t(71),m=t(958),T=t(2),y=function(e){var n=e.stageRef,t=e.saveFile,a=e.image,c=l.a.useState("pen"),r=Object(f.a)(c,2),o=r[0],i=r[1],s=l.a.useState(5),u=Object(f.a)(s,2),j=u[0],h=u[1],d=l.a.useState("#000000"),y=Object(f.a)(d,2),F=y[0],N=y[1],D=l.a.useState([]),R=Object(f.a)(D,2),A=R[0],M=R[1],B=l.a.useRef(!1);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(w,{children:[Object(T.jsxs)(k,{children:[Object(T.jsx)(x.a,{component:"span",onClick:function(){return i("pen")},children:"pen"===o?Object(T.jsx)(O.e,{}):Object(T.jsx)(O.d,{})}),"pen"===o?Object(T.jsx)(E,{color:F}):Object(T.jsx)(E,{color:"white"})]}),Object(T.jsxs)(k,{children:[Object(T.jsx)(x.a,{component:"span",onClick:function(){return i("eraser")},children:"eraser"===o?Object(T.jsx)(O.b,{}):Object(T.jsx)(O.a,{})}),Object(T.jsx)(E,{color:"white"})]}),Object(T.jsx)(P,{children:Object(T.jsx)(v.a,{"aria-label":"Custom marks",defaultValue:3,valueLabelDisplay:"auto",max:20,min:1,marks:[{value:1,label:"1pt"},{value:3,label:"3pt"},{value:5,label:"5pt"},{value:10,label:"10pt"},{value:15,label:"15pt"},{value:20,label:"20pt"}],onChange:function(e){return h(e.target.value)}})}),Object(T.jsx)(g.a,{variant:"outlined",endIcon:Object(T.jsx)(m.a,{}),onClick:t,children:"Send"})]}),Object(T.jsxs)(w,{children:[Object(T.jsx)(C,{children:Object(T.jsx)(b.d,{width:500,height:500,onMouseDown:function(e){B.current=!0;var n=e.target.getStage().getPointerPosition();M([].concat(Object(p.a)(A),[{tool:o,points:[n.x,n.y],color:F,size:j}]))},onMousemove:function(e){if(B.current){var n=e.target.getStage().getPointerPosition(),t=A[A.length-1];t.points=t.points.concat([n.x,n.y]),A.splice(A.length-1,1,t),M(A.concat())}},onMouseup:function(){B.current=!1},style:{border:"solid",marginTop:"10px"},ref:n,children:Object(T.jsxs)(b.b,{children:[null!==a&&Object(T.jsx)(b.a,{image:a}),A.map((function(e,n){return Object(T.jsx)(b.c,{points:e.points,stroke:e.color,strokeWidth:e.size,tension:.5,lineCap:"round",globalCompositeOperation:"eraser"===e.tool?"destination-out":"source-over"},n)}))]})})}),Object(T.jsx)(S,{color:F,onChangeComplete:function(e){N(e.hex)}})]})]})},w=d.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n"]))),k=(d.a.div(c||(c=Object(j.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),d.a.div(r||(r=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"])))),C=d.a.div(o||(o=Object(j.a)(["\n  background-color: #ffffff;\n"]))),P=d.a.div(i||(i=Object(j.a)(["\n  width: 500px;\n  margin: 0px 32px;\n"]))),S=Object(d.a)(h.a)({marginTop:"10px",marginLeft:"20px"}),E=Object(d.a)("div")(s||(s=Object(j.a)(["\n  background: ",";\n  height: 4px;\n"])),(function(e){return e.color})),F=t(298),N=t(1673),D=function(e){var n=e.hash,t=l.a.useState(new Image),a=Object(f.a)(t,2),c=a[0],r=a[1],o=l.a.useRef(null),i=l.a.useState(!1),s=Object(f.a)(i,2),u=s[0],j=s[1],p=l.a.useState(""),b=Object(f.a)(p,2),h=b[0],d=b[1],O=l.a.useState(!0),x=Object(f.a)(O,2),v=x[0],g=x[1],m=l.a.useState(!1),w=Object(f.a)(m,2),k=w[0],C=w[1];return l.a.useEffect((function(){if(""===n)return console.log("new game"),void g(!1);console.log("import:",n),Object(F.b)(n).then((function(e){g(!1);var n=new Image;n.src=e,r(n)})).catch((function(){console.log("dame"),C(!0)}))}),[n]),k?Object(T.jsx)("div",{children:"NotFound This Transaction"}):v?Object(T.jsx)("div",{children:"GetTransaction...."}):Object(T.jsxs)("div",{children:[Object(T.jsx)(y,{saveFile:function(){if(null!==o.current){var e=o.current.toDataURL();console.log(e),Object(F.c)(e,"draw-chain",n).then((function(e){return d(e)})),j(!0)}},stageRef:o,image:c}),Object(T.jsx)(N.a,{open:u,setOpen:j,txHash:h})]})},R=t(4);n.default=function(){var e=Object(R.g)().hash;return Object(T.jsx)(D,{hash:e||""})}},298:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return j})),t.d(n,"c",(function(){return d}));var a=t(53),c=t(299),r=t(140),o=t.n(r),i=t(194),s="7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836",u="https://sym-test-01.opening-line.jp:3001",l=1637848847,f=function(){var e=Object(c.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){b(n).then((function(n){if(n instanceof i.TransferTransaction){var t=JSON.parse(n.message.payload).data;e(h(t))}})).catch((function(){var a=setInterval((function(){p(n).then((function(){setTimeout((function(){b(n).then((function(n){if(clearInterval(a),n instanceof i.TransferTransaction){var t=JSON.parse(n.message.payload).data;e(h(t))}})).catch((function(){t("404")}))}),1e3)})).catch((function(){console.log("loading")}))}),1e3)}))})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],new Promise((function(e,t){b(n).then((function(e){e instanceof i.TransferTransaction&&console.log("data",JSON.parse(e.message.payload))}))})),e.abrupt("return",new Promise((function(e,t){b(n).then((function(n){if(n instanceof i.TransferTransaction){var t=JSON.parse(n.message.payload).data;console.log("previous hash",JSON.parse(n.message.payload).previousHash),e([h(t),h(t)].join(","))}})).catch((function(){var a=setInterval((function(){p(n).then((function(){setTimeout((function(){b(n).then((function(n){if(clearInterval(a),n instanceof i.TransferTransaction){var t=JSON.parse(n.message.payload).data;e([h(t),h(t)].join(","))}})).catch((function(){t("404")}))}),1e3)})).catch((function(){console.log("loading")}))}),1e3)}))})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(e){var n=new i.RepositoryFactoryHttp(u).createTransactionRepository();return new Promise((function(t,a){n.getTransaction(e,i.TransactionGroup.Unconfirmed).toPromise().then((function(){a()})).catch((function(){t()}))}))},b=function(e){var n=new i.RepositoryFactoryHttp(u).createTransactionRepository();return new Promise((function(t,a){n.getTransaction(e,i.TransactionGroup.Confirmed).toPromise().then((function(e){t(e)})).catch((function(){a()}))}))},h=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new i.RepositoryFactoryHttp(u),c=t.createTransactionRepository(),r="",e.abrupt("return",new Promise((function(e){c.getTransaction(n,i.TransactionGroup.Confirmed).toPromise().then((function(n){var t,c=n.innerTransactions,o=Object(a.a)(c);try{for(o.s();!(t=o.n()).done;){var i=t.value;r+=i.message.payload}}catch(s){o.e(s)}finally{o.f()}e(r)}))})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(o.a.mark((function e(n,t,a){var c,r,f,j,p,b,h,d,O,x,v,g,m,T,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c=i.Account.createFromPrivateKey("891D9D7E9672925123CFB7766CE9AC740BAFED43AE78F64CE2D296F54E62E57A",i.NetworkType.TEST_NET),r=i.Address.createFromRawAddress("TDEC5VUUAUYHKI2Y45WBDMGODAS42P3PPCTMGUY"),f=[],j=1023,p=0;p<=Math.floor(n.length/j);p++)b=n.slice(p*j,(p+1)*j),f.push(b);h=[],d=[],O=[],x=new i.RepositoryFactoryHttp(u),v=x.createTransactionRepository(),g=0;case 11:if(!(g<f.length)){e.next=25;break}if(m=i.TransferTransaction.create(i.Deadline.create(l),r,[],i.PlainMessage.create(f[g]),i.NetworkType.TEST_NET).toAggregate(c.publicAccount),h.push(m),g%100===99||g===f.length-1){e.next=16;break}return e.abrupt("continue",22);case 16:T=i.AggregateTransaction.createComplete(i.Deadline.create(l),h,i.NetworkType.TEST_NET,[],i.UInt64.fromUint(1e7)),y=c.sign(T,s),v.announce(y).subscribe((function(e){return console.log(e)}),(function(e){return console.error(e)})),d.push(y),O.push(y.hash),console.log("a",y);case 22:g++,e.next=11;break;case 25:return e.abrupt("return",new Promise((function(e){setTimeout((function(){for(var n=JSON.stringify({version:1,name:"symbol-draw",mode:t,previousHash:a,data:O.join(",")}),o=[],u=0;u<=Math.floor(n.length/j);u++)o.push(n.substr(u*j,j));var f=i.TransferTransaction.create(i.Deadline.create(l),r,[],i.PlainMessage.create(n),i.NetworkType.TEST_NET,i.UInt64.fromUint(2e6)),p=c.sign(f,s);v.announce(p).subscribe((function(e){return console.log(e)}),(function(e){return console.error(e)})),e(p.hash)}),1e3)})));case 26:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}()},300:function(e,n){},301:function(e,n){},303:function(e,n){},304:function(e,n){},307:function(e,n){},308:function(e,n){},309:function(e,n){},310:function(e,n){},311:function(e,n){},313:function(e,n){},315:function(e,n){},317:function(e,n){}}]);
//# sourceMappingURL=10.39e0f3bb.chunk.js.map