(this["webpackJsonpbatch-translation"]=this["webpackJsonpbatch-translation"]||[]).push([[0],{10:function(e,t,n){},32:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/plus.cac33e70.svg"},58:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/check.f94f5e2a.svg"},59:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/copy.e7bfc76b.svg"},60:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/edit.806b74bf.svg"},61:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/remove.562b6f7b.svg"},63:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(23),r=n.n(s),i=(n(32),n(2)),o=(n(10),n(4)),l=n(6),u=n.n(l),b=n(13),j=n(24),d=n.n(j).a.create({baseURL:"https://api.mymemory.translated.net/",timeout:1e4,headers:{"Content-Type":"application/json"}}),f=n(25),p=n.n(f),x=function(){var e=Object(b.a)(u.a.mark((function e(t,n,c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("get?q=".concat(encodeURIComponent(t),"&langpair=").concat(n,"|").concat(c));case 3:return a=e.sent,e.abrupt("return",{from:n,to:c,original:t,translation:a.data.responseData.translatedText});case 7:return e.prev=7,e.t0=e.catch(0),window.alert(e.t0.message),e.abrupt("return",{from:n,to:c,original:t,translation:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),m=function(e){return new Promise((function(t){return setTimeout(t,e)}))},h=function(){var e=Object(b.a)(u.a.mark((function e(t,n,c,a){var s,r,i,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],r=0;case 2:if(!(r<t.length)){e.next=14;break}return i=Math.floor(1e6*Math.random()),o=p()("20210813000915570".concat(t[r].text).concat(i,"mbvfV5YloIuJu0Mh0WcD")),e.next=7,d.get("https://api.fanyi.baidu.com/api/trans/vip/translate?q=".concat(t[r].text,"&from=").concat(t[r].from,"&to=").concat(t[r].to,"&appid=20210813000915570&salt=").concat(i,"&sign=").concat(o),{headers:{"Content-type":"application/x-www-form-urlencoded"}});case 7:return l=e.sent,s.push({from:t[r].from,to:t[r].to,original:t[r].text,translation:l.data.trans_result[0].dst}),e.next=11,m(1e3);case 11:r++,e.next=2;break;case 14:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));return function(t,n,c,a){return e.apply(this,arguments)}}(),O=(n(53),n(26)),v=n(57).default,g=n(58).default,N=n(59).default,w=n(60).default,k=n(61).default,C=n(0),y=function(e){var t=e.fromLanguage,n=e.toLanguage,c=e.originalText,s=e.translatedText,r=a.a.useState(!1),o=Object(i.a)(r,2),l=o[0],u=o[1];return Object(C.jsx)("div",{className:"box",children:Object(C.jsxs)("div",{style:{width:"100%"},children:[Object(C.jsxs)("p",{className:"text",children:[t," \u2192 ",n]}),Object(C.jsx)("p",{className:"text",children:c}),Object(C.jsxs)("div",{className:"translated-text-row",children:[Object(C.jsx)("p",{className:"text translated-text",children:s}),Object(C.jsx)(O.CopyToClipboard,{text:s,onCopy:function(){return u(!0)},children:Object(C.jsx)("button",{className:"copy-button",children:Object(C.jsx)("img",{src:N,className:"copy-icon",alt:"copy"})})})]}),l&&Object(C.jsx)("span",{className:"copied-text",children:"Copied !"})]})})},R=[{label:"\u7e41",value:"zh-HK"},{label:"\u7b80",value:"zh-CN"},{label:"Eng",value:"en-US"}],S=[{label:"\u7b80",value:"zh"},{label:"Eng",value:"en"}],T=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572").then((function(e){return e.json()})).then((function(e){return a(e.country_code)}))};return n},L=function(){return"CN"===T()?S:R},F=(n(63),function(e){var t=e.index,n=e.item,c=e.onRemoveClick,s=e.onEditConfirmClick,r=a.a.useState(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],b=a.a.useState(n.from),j=Object(i.a)(b,2),d=j[0],f=j[1],p=a.a.useState(n.to),x=Object(i.a)(p,2),m=x[0],h=x[1],O=a.a.useState(n.text),v=Object(i.a)(O,2),N=v[0],y=v[1],R=L();return Object(C.jsx)("div",{className:"box",style:{flexWrap:"wrap"},children:l?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"translation-box-row",children:Object(C.jsxs)("p",{className:"text",style:{width:"100%",flex:"auto",margin:"1rem 0 0 0"},children:[Object(C.jsx)("select",{value:d,onChange:function(e){return f(e.target.value)},children:R.map((function(e,t){return Object(C.jsx)("option",{value:e.value,children:e.label},t)}))})," "," ","\u2192"," ",Object(C.jsx)("select",{value:m,onChange:function(e){return h(e.target.value)},children:R.map((function(e,t){return Object(C.jsx)("option",{value:e.value,children:e.label},t)}))})]})}),Object(C.jsx)("input",{type:"text",className:"text-input",style:{marginTop:"0.5rem"},value:N,onChange:function(e){return y(e.target.value)}}),Object(C.jsx)("button",{className:"tick-button",onClick:function(){s(t,{from:d,to:m,text:N}),u(!1)},children:Object(C.jsx)("img",{src:g,className:"tick-icon",alt:"tick-icon"})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"translation-box-row",children:[Object(C.jsxs)("p",{className:"text",style:{width:"100%",flex:"auto",margin:"1rem 0 0 0"},children:[R.find((function(e){return e.value===n.from})).label," \u2192 ",R.find((function(e){return e.value===n.to})).label]}),Object(C.jsx)("button",{className:"edit-button",onClick:function(){return u(!0)},children:Object(C.jsx)("img",{src:w,className:"edit-icon",alt:"edit-icon"})})]}),Object(C.jsx)("p",{className:"text",children:n.text}),Object(C.jsx)("button",{className:"remove-button",onClick:function(){return c(t)},children:Object(C.jsx)("img",{src:k,className:"remove-icon",alt:"remove-icon"})})]})},t)}),E=(n(64),function(e){var t=e.label,n=e.options,c=e.initIndex,s=e.setValue,r=a.a.useState(c),o=Object(i.a)(r,2),l=o[0],u=o[1];return Object(C.jsxs)("div",{className:"select-block-wrapper",children:[t&&Object(C.jsx)("span",{className:"select-block-label",children:t}),Object(C.jsxs)("div",{className:"select-block-options-wrapper",children:[n.map((function(e,t){return Object(C.jsx)("div",{className:"select-block-option",style:{width:"calc(100% / ".concat(n.length,")")},onClick:function(){u(t),s(e.value)},children:Object(C.jsx)("span",{className:t===l?"select-block-option-label option-active":"select-block-option-label",children:e.label})},t)})),Object(C.jsx)("div",{className:"select-block-background-block",style:{width:"calc(100% / ".concat(n.length,")"),left:"calc(100% / ".concat(n.length," * ").concat(l,")"),borderTopLeftRadius:0===l?"8px":0,borderBottomLeftRadius:0===l?"8px":0,borderTopRightRadius:l===n.length-1?"8px":0,borderBottomRightRadius:l===n.length-1?"8px":0}})]})]})}),I=n(8),V=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),u=l[0],b=l[1],j=Object(c.useState)([]),d=Object(i.a)(j,2),f=d[0],p=d[1],x=Object(c.useState)("zh"),m=Object(i.a)(x,2),O=m[0],g=m[1],N=Object(c.useState)("en"),w=Object(i.a)(N,2),k=w[0],R=w[1],T=Object(c.useState)(!1),L=Object(i.a)(T,2),V=L[0],z=L[1],P=Object(c.useRef)(null),B=function(e){var t=Object(o.a)(u);t.splice(e,1),b(t)},M=function(e,t){var n=Object(o.a)(u);n[e]=t,b(n)};return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsxs)("div",{className:"left-container",children:[Object(C.jsxs)("div",{className:"input-section-wrapper",children:[Object(C.jsx)("input",{type:"text",className:"text-input",value:a,onChange:function(e){return s(e.target.value)},placeholder:"Type here..."}),Object(C.jsx)("button",{className:"add-button",onClick:function(){b([].concat(Object(o.a)(u),[{from:O,to:k,text:a}])),s("")},children:Object(C.jsx)("img",{src:v,className:"add-icon",alt:"plus-icon"})})]}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)(E,{label:"From:",options:S,initIndex:0,setValue:g})}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)(E,{label:"To:",options:S,initIndex:1,setValue:R})}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("button",{onClick:function(){e.appRef.current&&e.appRef.current.scrollTo({left:window.innerWidth-32,top:0,behavior:"smooth"}),z(!0),I.Promise.all(h(u)).then((function(e){return p(e),e})).finally((function(){return z(!1)}))},className:"translate-button",children:"Translate"}),Object(C.jsx)("button",{onClick:function(){b([]),p([]),s("")},className:"reset-button",children:"Reset"})]}),Object(C.jsx)("div",{className:"boxes-wrapper",children:u.map((function(e,t){return Object(C.jsx)(F,{index:t,item:e,onRemoveClick:B,onEditConfirmClick:M})}))})]}),Object(C.jsxs)("div",{className:"right-container",ref:P,children:[Object(C.jsx)("p",{className:"back-arrow-text",onClick:function(){e.appRef.current&&e.appRef.current.scrollTo({left:0,top:0,behavior:"smooth"})},children:Object(C.jsx)("span",{children:"\u2190"})}),Object(C.jsx)("div",{className:"boxes-wrapper",children:V?Object(C.jsx)("p",{children:"Loading..."}):Object(C.jsx)(C.Fragment,{children:f.map((function(e,t){return Object(C.jsx)(y,{fromLanguage:S.find((function(t){return t.value===e.from})).label,toLanguage:S.find((function(t){return t.value===e.to})).label,originalText:e.original,translatedText:e.translation},t)}))})})]})]})},z=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),u=l[0],b=l[1],j=Object(c.useState)([]),d=Object(i.a)(j,2),f=d[0],p=d[1],m=Object(c.useState)("zh-HK"),h=Object(i.a)(m,2),O=h[0],g=h[1],N=Object(c.useState)("en-US"),w=Object(i.a)(N,2),k=w[0],S=w[1],T=Object(c.useState)(!1),L=Object(i.a)(T,2),V=L[0],z=L[1],P=Object(c.useRef)(null),B=function(e){var t=Object(o.a)(u);t.splice(e,1),b(t)},M=function(e,t){var n=Object(o.a)(u);n[e]=t,b(n)};return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsxs)("div",{className:"left-container",children:[Object(C.jsxs)("div",{className:"input-section-wrapper",children:[Object(C.jsx)("input",{type:"text",className:"text-input",value:a,onChange:function(e){return s(e.target.value)},placeholder:"Type here..."}),Object(C.jsx)("button",{className:"add-button",onClick:function(){b([].concat(Object(o.a)(u),[{from:O,to:k,text:a}])),s("")},children:Object(C.jsx)("img",{src:v,className:"add-icon",alt:"plus-icon"})})]}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)(E,{label:"From:",options:R,initIndex:0,setValue:g})}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)(E,{label:"To:",options:R,initIndex:2,setValue:S})}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("button",{onClick:function(){e.appRef.current&&e.appRef.current.scrollTo({left:window.innerWidth-32,top:0,behavior:"smooth"}),z(!0);var t=[];u.forEach((function(e){return t.push(x(e.text,e.from,e.to))})),I.Promise.all(t).then((function(e){return p(e),e})).finally((function(){return z(!1)}))},className:"translate-button",children:"Translate"}),Object(C.jsx)("button",{onClick:function(){b([]),p([]),s("")},className:"reset-button",children:"Reset"})]}),Object(C.jsx)("div",{className:"boxes-wrapper",children:u.map((function(e,t){return Object(C.jsx)(F,{index:t,item:e,onRemoveClick:B,onEditConfirmClick:M})}))})]}),Object(C.jsxs)("div",{className:"right-container",ref:P,children:[Object(C.jsx)("p",{className:"back-arrow-text",onClick:function(){e.appRef.current&&e.appRef.current.scrollTo({left:0,top:0,behavior:"smooth"})},children:Object(C.jsx)("span",{children:"\u2190"})}),Object(C.jsx)("div",{className:"boxes-wrapper",children:V?Object(C.jsx)("p",{children:"Loading..."}):Object(C.jsx)(C.Fragment,{children:f.map((function(e,t){return Object(C.jsx)(y,{fromLanguage:R.find((function(t){return t.value===e.from})).label,toLanguage:R.find((function(t){return t.value===e.to})).label,originalText:e.original,translatedText:e.translation},t)}))})})]})]})},P=n(27),B=n.n(P);var M=function(){B.a.polyfill();var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1];Object(c.useEffect)((function(){u()}),[]);var u=function(){l(!0),fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572").then((function(e){return e.json()})).then((function(e){a(e.country_code),l(!1)})).catch((function(e){l(!1),window.alert(e.message)}))},b=Object(c.useRef)(null);return Object(C.jsx)("div",{className:"App",ref:b,children:o?Object(C.jsx)("p",{children:"Loading..."}):Object(C.jsx)(C.Fragment,{children:"CN"===n?Object(C.jsx)(V,{appRef:b}):Object(C.jsx)(z,{appRef:b})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(M,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.38b14227.chunk.js.map