(this["webpackJsonpbatch-translation"]=this["webpackJsonpbatch-translation"]||[]).push([[0],{10:function(e,t,n){},31:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(23),i=n.n(s),o=(n(31),n(2)),r=(n(10),n(4)),l=n(6),u=n.n(l),b=n(13),j=n(24),d=n.n(j).a.create({baseURL:"https://api.mymemory.translated.net/",timeout:1e4,headers:{"Content-Type":"application/json"}}),x=n(25),h=n.n(x),m=function(){var e=Object(b.a)(u.a.mark((function e(t,n,a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("get?q=".concat(encodeURIComponent(t),"&langpair=").concat(n,"|").concat(a));case 2:return c=e.sent,e.abrupt("return",{from:n,to:a,original:t,translation:c.data.responseData.translatedText});case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),p=function(e){return new Promise((function(t){return setTimeout(t,e)}))},f=function(){var e=Object(b.a)(u.a.mark((function e(t,n,a,c){var s,i,o,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],i=0;case 2:if(!(i<t.length)){e.next=14;break}return o=Math.floor(1e6*Math.random()),r=h()("20210813000915570".concat(t[i].text).concat(o,"mbvfV5YloIuJu0Mh0WcD")),e.next=7,d.get("https://api.fanyi.baidu.com/api/trans/vip/translate?q=".concat(t[i].text,"&from=").concat(t[i].from,"&to=").concat(t[i].to,"&appid=20210813000915570&salt=").concat(o,"&sign=").concat(r),{headers:{"Content-type":"application/x-www-form-urlencoded"}});case 7:return l=e.sent,s.push({from:t[i].from,to:t[i].to,original:t[i].text,translation:l.data.trans_result[0].dst}),e.next=11,p(1e3);case 11:i++,e.next=2;break;case 14:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),O=(n(52),n(26)),g=n(0),v=function(e){var t=e.fromLanguage,n=e.toLanguage,a=e.originalText,s=e.translatedText,i=c.a.useState(!1),r=Object(o.a)(i,2),l=r[0],u=r[1];return Object(g.jsx)("div",{className:"box",children:Object(g.jsxs)("div",{style:{width:"100%"},children:[Object(g.jsxs)("p",{className:"text",children:[t," \u2192 ",n]}),Object(g.jsx)("p",{className:"text",children:a}),Object(g.jsxs)("div",{className:"translated-text-row",children:[Object(g.jsx)("p",{className:"text translated-text",children:s}),Object(g.jsx)(O.CopyToClipboard,{text:s,onCopy:function(){return u(!0)},children:Object(g.jsx)("button",{className:"copy-button",children:Object(g.jsx)("img",{src:"https://kylekaikai24.github.io/batch-translation-web/images/copy.svg",className:"copy-icon",alt:"copy"})})})]}),l&&Object(g.jsx)("span",{className:"copied-text",children:"Copied !"})]})})},N=[{label:"\u7e41",value:"zh-HK"},{label:"\u7b80",value:"zh-CN"},{label:"Eng",value:"en-US"}],k=[{label:"\u7b80",value:"zh"},{label:"Eng",value:"en"}],w=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572").then((function(e){return e.json()})).then((function(e){return c(e.country_code)}))};return n},C=function(){return"CN"===w()?k:N},y=(n(57),function(e){var t=e.index,n=e.item,a=e.onRemoveClick,s=e.onEditConfirmClick,i=c.a.useState(!1),r=Object(o.a)(i,2),l=r[0],u=r[1],b=c.a.useState(n.from),j=Object(o.a)(b,2),d=j[0],x=j[1],h=c.a.useState(n.to),m=Object(o.a)(h,2),p=m[0],f=m[1],O=c.a.useState(n.text),v=Object(o.a)(O,2),N=v[0],k=v[1],w=C();return Object(g.jsx)("div",{className:"box",style:{flexWrap:"wrap"},children:l?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"translation-box-row",children:Object(g.jsxs)("p",{className:"text",style:{width:"100%",flex:"auto",margin:"1rem 0 0 0"},children:[Object(g.jsx)("select",{value:d,onChange:function(e){return x(e.target.value)},children:w.map((function(e,t){return Object(g.jsx)("option",{value:e.value,children:e.label},t)}))})," "," ","\u2192"," ",Object(g.jsx)("select",{value:p,onChange:function(e){return f(e.target.value)},children:w.map((function(e,t){return Object(g.jsx)("option",{value:e.value,children:e.label},t)}))})]})}),Object(g.jsx)("input",{type:"text",className:"text-input",style:{marginTop:"0.5rem"},value:N,onChange:function(e){return k(e.target.value)}}),Object(g.jsx)("button",{className:"tick-button",onClick:function(){s(t,{from:d,to:p,text:N}),u(!1)},children:Object(g.jsx)("img",{src:"https://kylekaikai24.github.io/batch-translation-web/images/check.svg",className:"tick-icon",alt:"tick-icon"})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"translation-box-row",children:[Object(g.jsxs)("p",{className:"text",style:{width:"100%",flex:"auto",margin:"1rem 0 0 0"},children:[w.find((function(e){return e.value===n.from})).label," \u2192 ",w.find((function(e){return e.value===n.to})).label]}),Object(g.jsx)("button",{className:"edit-button",onClick:function(){return u(!0)},children:Object(g.jsx)("img",{src:"https://kylekaikai24.github.io/batch-translation-web/images/edit.svg",className:"edit-icon",alt:"edit-icon"})})]}),Object(g.jsx)("p",{className:"text",children:n.text}),Object(g.jsx)("button",{className:"remove-button",onClick:function(){return a(t)},children:Object(g.jsx)("img",{src:"https://kylekaikai24.github.io/batch-translation-web/images/remove.svg",className:"remove-icon",alt:"remove-icon"})})]})},t)}),S=(n(58),function(e){var t=e.label,n=e.options,a=e.initIndex,s=e.setValue,i=c.a.useState(a),r=Object(o.a)(i,2),l=r[0],u=r[1];return Object(g.jsxs)("div",{className:"select-block-wrapper",children:[t&&Object(g.jsx)("span",{className:"select-block-label",children:t}),Object(g.jsxs)("div",{className:"select-block-options-wrapper",children:[n.map((function(e,t){return Object(g.jsx)("div",{className:"select-block-option",style:{width:"calc(100% / ".concat(n.length,")")},onClick:function(){u(t),s(e.value)},children:Object(g.jsx)("span",{className:t===l?"select-block-option-label option-active":"select-block-option-label",children:e.label})},t)})),Object(g.jsx)("div",{className:"select-block-background-block",style:{width:"calc(100% / ".concat(n.length,")"),left:"calc(100% / ".concat(n.length," * ").concat(l,")"),borderTopLeftRadius:0===l?"8px":0,borderBottomLeftRadius:0===l?"8px":0,borderTopRightRadius:l===n.length-1?"8px":0,borderBottomRightRadius:l===n.length-1?"8px":0}})]})]})}),T=n(8),L=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1],b=Object(a.useState)([]),j=Object(o.a)(b,2),d=j[0],x=j[1],h=Object(a.useState)("zh"),m=Object(o.a)(h,2),p=m[0],O=m[1],N=Object(a.useState)("en"),w=Object(o.a)(N,2),C=w[0],L=w[1],R=Object(a.useState)(!1),F=Object(o.a)(R,2),E=F[0],I=F[1],V=function(e){var t=Object(r.a)(l);t.splice(e,1),u(t)},z=function(e,t){var n=Object(r.a)(l);n[e]=t,u(n)};return console.log(C),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"left-container",children:[Object(g.jsxs)("div",{className:"input-section-wrapper",children:[Object(g.jsx)("input",{type:"text",className:"text-input",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Type here..."}),Object(g.jsx)("button",{className:"add-button",onClick:function(){u([].concat(Object(r.a)(l),[{from:p,to:C,text:n}])),c("")},children:Object(g.jsx)("img",{src:"https://kylekaikai24.github.io/batch-translation-web/images/plus.svg",className:"add-icon",alt:"plus-icon"})})]}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)(S,{label:"From:",options:k,initIndex:0,setValue:O})}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)(S,{label:"To:",options:k,initIndex:1,setValue:L})}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("button",{onClick:function(){I(!0),T.Promise.all(f(l)).then((function(e){return console.log(l),console.log(e),x(e),e})).finally((function(){return I(!1)}))},className:"translate-button",children:"Translate"}),Object(g.jsx)("button",{onClick:function(){u([]),x([]),c("")},className:"reset-button",children:"Reset"})]}),Object(g.jsx)("div",{className:"boxes-wrapper",children:l.map((function(e,t){return Object(g.jsx)(y,{index:t,item:e,onRemoveClick:V,onEditConfirmClick:z})}))})]}),Object(g.jsx)("div",{className:"right-container",children:Object(g.jsx)("div",{className:"boxes-wrapper",children:E?Object(g.jsx)("p",{children:"Loading..."}):Object(g.jsx)(g.Fragment,{children:d.map((function(e,t){return Object(g.jsx)(v,{fromLanguage:k.find((function(t){return t.value===e.from})).label,toLanguage:k.find((function(t){return t.value===e.to})).label,originalText:e.original,translatedText:e.translation},t)}))})})})]})},R=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1],b=Object(a.useState)([]),j=Object(o.a)(b,2),d=j[0],x=j[1],h=Object(a.useState)("zh-HK"),p=Object(o.a)(h,2),f=p[0],O=p[1],k=Object(a.useState)("en-US"),w=Object(o.a)(k,2),C=w[0],L=w[1],R=Object(a.useState)(!1),F=Object(o.a)(R,2),E=F[0],I=F[1],V=function(e){var t=Object(r.a)(l);t.splice(e,1),u(t)},z=function(e,t){var n=Object(r.a)(l);n[e]=t,u(n)};return console.log(C),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"left-container",children:[Object(g.jsxs)("div",{className:"input-section-wrapper",children:[Object(g.jsx)("input",{type:"text",className:"text-input",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Type here..."}),Object(g.jsx)("button",{className:"add-button",onClick:function(){u([].concat(Object(r.a)(l),[{from:f,to:C,text:n}])),c("")},children:Object(g.jsx)("img",{src:"https://kylekaikai24.github.io/batch-translation-web/images/plus.svg",className:"add-icon",alt:"plus-icon"})})]}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)(S,{label:"From:",options:N,initIndex:0,setValue:O})}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)(S,{label:"To:",options:N,initIndex:2,setValue:L})}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("button",{onClick:function(){I(!0);var e=[];l.forEach((function(t){return e.push(m(t.text,t.from,t.to))})),T.Promise.all(e).then((function(e){return console.log(l),console.log(e),x(e),e})).finally((function(){return I(!1)}))},className:"translate-button",children:"Translate"}),Object(g.jsx)("button",{onClick:function(){u([]),x([]),c("")},className:"reset-button",children:"Reset"})]}),Object(g.jsx)("div",{className:"boxes-wrapper",children:l.map((function(e,t){return Object(g.jsx)(y,{index:t,item:e,onRemoveClick:V,onEditConfirmClick:z})}))})]}),Object(g.jsx)("div",{className:"right-container",children:Object(g.jsx)("div",{className:"boxes-wrapper",children:E?Object(g.jsx)("p",{children:"Loading..."}):Object(g.jsx)(g.Fragment,{children:d.map((function(e,t){return Object(g.jsx)(v,{fromLanguage:N.find((function(t){return t.value===e.from})).label,toLanguage:N.find((function(t){return t.value===e.to})).label,originalText:e.original,translatedText:e.translation},t)}))})})})]})};var F=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572").then((function(e){return e.json()})).then((function(e){return c(e.country_code)}))};return Object(g.jsx)("div",{className:"App",children:"CN"===n?Object(g.jsx)(L,{}):Object(g.jsx)(R,{})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),E()}},[[61,1,2]]]);
//# sourceMappingURL=main.29e2fa4a.chunk.js.map