!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=51)}([function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(25)("wks"),o=n(16),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0),i=n(32),u=n(10),a=function(t,e,n){var c,f,s,l=t&a.F,d=t&a.G,h=t&a.S,p=t&a.P,v=t&a.B,y=t&a.W,g=d?o:o[e]||(o[e]={}),b=g.prototype,m=d?r:h?r[e]:(r[e]||{}).prototype;d&&(n=e);for(c in n)(f=!l&&m&&void 0!==m[c])&&c in g||(s=f?m[c]:n[c],g[c]=d&&"function"!=typeof m[c]?n[c]:v&&f?i(s,r):y&&m[c]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):p&&"function"==typeof s?i(Function.call,s):s,p&&((g.virtual||(g.virtual={}))[c]=s,t&a.R&&b&&!b[c]&&u(b,c,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(8),o=n(34),i=n(28),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(35),o=n(18);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(6),o=n(15);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(40),o=n(19);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports={}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=!0},function(t,e,n){var r=n(8),o=n(77),i=n(19),u=n(24)("IE_PROTO"),a=function(){},c=function(){var t,e=n(33)("iframe"),r=i.length;for(e.style.display="none",n(70).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(6).f,o=n(5),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(25)("keys"),o=n(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(18);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(0),i=n(20),u=n(30),a=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(2)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(56),i=r(o),u=n(55),a=r(u),c="function"==typeof a.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,e,n){var r=n(65);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(3)&&!n(9)(function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(20),o=n(4),i=n(41),u=n(10),a=n(5),c=n(13),f=n(72),s=n(23),l=n(39),d=n(2)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,y,g,b){f(n,e,v);var m,w,x,_=function(t){if(!h&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",S="values"==y,P=!1,E=t.prototype,j=E[d]||E["@@iterator"]||y&&E[y],k=j||_(y),M=y?S?_("entries"):k:void 0,D="Array"==e?E.entries||j:j;if(D&&(x=l(D.call(new t)))!==Object.prototype&&(s(x,O,!0),r||a(x,d)||u(x,d,p)),S&&j&&"values"!==j.name&&(P=!0,k=function(){return j.call(this)}),r&&!b||!h&&!P&&E[d]||u(E,d,k),c[e]=k,c[O]=p,y)if(m={values:S?k:_("values"),keys:g?k:_("keys"),entries:M},b)for(w in m)w in E||i(E,w,m[w]);else o(o.P+o.F*(h||P),e,m);return m}},function(t,e,n){var r=n(14),o=n(15),i=n(7),u=n(28),a=n(5),c=n(34),f=Object.getOwnPropertyDescriptor;e.f=n(3)?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(40),o=n(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(5),o=n(27),i=n(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(5),o=n(7),i=n(67)(!1),u=n(24)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";var r=n(81)(!0);n(36)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(86);for(var r=n(1),o=n(10),i=n(13),u=n(2)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e,n){t.exports={default:n(57),__esModule:!0}},function(t,e,n){t.exports={default:n(58),__esModule:!0}},function(t,e,n){t.exports={default:n(61),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(53),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(54),i=r(o),u=n(52),a=r(u),c=n(31),f=r(c);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));t.prototype=(0,a.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(31),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=e||document,r=void 0;return-1!==t.indexOf("#")?(r=t.slice(1),n.getElementById(r)):-1!==t.indexOf(".")?(r=t.slice(1),n.querySelectorAll(r)):n.getElementsByTagName(t)}function i(t,e){return{x:(t-E.left)*(j/E.width),y:(e-E.top)*(k/E.height)}}function u(t){var e=t.changedTouches[0];return i(e.clientX,e.clientY)}var a=n(44),c=r(a),f=n(45),s=r(f),l=n(46),d=r(l),h=n(48),p=r(h),v=n(50),y=r(v),g=n(49),b=r(g),m=n(47),w=r(m),x=o("#canvas"),_=x.getContext("2d");_.globalCompositeOperation="source-atop";var O=3,S=o("#tool"),P=S.offsetHeight,E=x.getBoundingClientRect(),j=x.width=E.width*O,k=x.height=(E.height-P)*O;x.style.height=k/O+"px",E=x.getBoundingClientRect();var M=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000";(0,w.default)(this,t),this.width=e,this.color=n,this.drawing=!1,this.isSelect=!1},D=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000";(0,w.default)(this,e);var r=(0,y.default)(this,(e.__proto__||(0,d.default)(e)).call(this,t,n));return r.name="pencil",r.dom=o("#"+r.name),r}return(0,b.default)(e,t),(0,p.default)(e,[{key:"begin",value:function(t){_.save(),_.lineWidth=this.width,_.strokeStyle=this.color,_.beginPath(),_.moveTo(t.x,t.y)}},{key:"draw",value:function(t){_.lineTo(t.x,t.y),_.stroke()}},{key:"end",value:function(t){_.lineTo(t.x,t.y),_.stroke(),_.restore()}},{key:"bindEvent",value:function(){var t=this;x.addEventListener("touchstart",function(e){if(e.preventDefault(),!t.isSelect)return!1;t.drawing=!0;var n=u(e);t.begin(n)}),x.addEventListener("touchmove",function(e){if(e.preventDefault(),!t.isSelect)return!1;if(t.drawing){var n=u(e);t.draw(n)}}),x.addEventListener("touchend",function(e){if(e.preventDefault(),!t.isSelect)return!1;var n=u(e);t.end(n),t.drawing=!1})}}]),e}(M),I=function(t){function e(t){(0,w.default)(this,e);var n=(0,y.default)(this,(e.__proto__||(0,d.default)(e)).call(this,t,"#fff"));return n.name="eraser",n.dom=o("#"+n.name),n}return(0,b.default)(e,t),e}(D),T=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000";(0,w.default)(this,e);var r=(0,y.default)(this,(e.__proto__||(0,d.default)(e)).call(this,t,n));return r.startPosition={x:0,y:0},r.firstDot=_.getImageData(0,0,j,k),r.name="line",r.dom=o("#"+r.name),r}return(0,b.default)(e,t),(0,p.default)(e,[{key:"begin",value:function(t){this.firstDot=_.getImageData(0,0,j,k),(0,s.default)(this.startPosition,t),_.save(),_.lineWidth=this.width,_.strokeStyle=this.color}},{key:"draw",value:function(t){_.putImageData(this.firstDot,0,0),_.beginPath(),_.moveTo(this.startPosition.x,this.startPosition.y),_.lineTo(t.x,t.y),_.stroke()}},{key:"end",value:function(t){_.putImageData(this.firstDot,0,0),_.beginPath(),_.moveTo(this.startPosition.x,this.startPosition.y),_.lineTo(t.x,t.y),_.stroke(),_.restore()}},{key:"bindEvent",value:function(){var t=this;x.addEventListener("touchstart",function(e){if(e.preventDefault(),!t.isSelect)return!1;t.drawing=!0;var n=u(e);t.begin(n)}),x.addEventListener("touchmove",function(e){if(e.preventDefault(),!t.isSelect)return!1;if(t.drawing){var n=u(e);t.draw(n)}}),x.addEventListener("touchend",function(e){if(e.preventDefault(),!t.isSelect)return!1;var n=u(e);t.end(n),t.drawing=!1})}}]),e}(M),L=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000";(0,w.default)(this,e);var r=(0,y.default)(this,(e.__proto__||(0,d.default)(e)).call(this,t,n));return r.startPosition={x:0,y:0},r.firstDot=_.getImageData(0,0,j,k),r.name="rect",r.dom=o("#"+r.name),r}return(0,b.default)(e,t),(0,p.default)(e,[{key:"begin",value:function(t){this.firstDot=_.getImageData(0,0,j,k),(0,s.default)(this.startPosition,t),_.save(),_.lineWidth=this.width,_.strokeStyle=this.color}},{key:"draw",value:function(t){_.putImageData(this.firstDot,0,0);var e={x:this.startPosition.x<=t.x?this.startPosition.x:t.x,y:this.startPosition.y<=t.y?this.startPosition.y:t.y,width:Math.abs(this.startPosition.x-t.x),height:Math.abs(this.startPosition.y-t.y)};_.beginPath(),_.rect(e.x,e.y,e.width,e.height),_.stroke()}},{key:"end",value:function(t){_.putImageData(this.firstDot,0,0);var e={x:this.startPosition.x<=t.x?this.startPosition.x:t.x,y:this.startPosition.y<=t.y?this.startPosition.y:t.y,width:Math.abs(this.startPosition.x-t.x),height:Math.abs(this.startPosition.y-t.y)};_.beginPath(),_.rect(e.x,e.y,e.width,e.height),_.stroke(),_.restore()}},{key:"bindEvent",value:function(){var t=this;x.addEventListener("touchstart",function(e){if(e.preventDefault(),!t.isSelect)return!1;t.drawing=!0;var n=u(e);t.begin(n)}),x.addEventListener("touchmove",function(e){if(e.preventDefault(),!t.isSelect)return!1;if(t.drawing){var n=u(e);t.draw(n)}}),x.addEventListener("touchend",function(e){if(e.preventDefault(),!t.isSelect)return!1;var n=u(e);t.end(n),t.drawing=!1})}}]),e}(M),N=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000";(0,w.default)(this,e);var r=(0,y.default)(this,(e.__proto__||(0,d.default)(e)).call(this,t,n));return r.startPosition={x:0,y:0},r.firstDot=_.getImageData(0,0,j,k),r.name="round",r.dom=o("#"+r.name),r}return(0,b.default)(e,t),(0,p.default)(e,[{key:"drawCalculate",value:function(t){_.save(),_.lineWidth=this.width,_.strokeStyle=this.color,_.putImageData(this.firstDot,0,0);var e={width:t.x-this.startPosition.x,height:t.y-this.startPosition.y},n=Math.max(Math.abs(e.width),Math.abs(e.height));e.x=this.startPosition.x+e.width/2,e.y=this.startPosition.y+e.height/2,e.scale={x:Math.abs(e.width)/n,y:Math.abs(e.height)/n},_.scale(e.scale.x,e.scale.y),_.beginPath(),_.arc(e.x/e.scale.x,e.y/e.scale.y,n/2,0,2*Math.PI),_.stroke(),_.restore()}},{key:"begin",value:function(t){this.firstDot=_.getImageData(0,0,j,k),(0,s.default)(this.startPosition,t)}},{key:"draw",value:function(t){this.drawCalculate(t)}},{key:"end",value:function(t){this.drawCalculate(t)}},{key:"bindEvent",value:function(){var t=this;x.addEventListener("touchstart",function(e){if(e.preventDefault(),!t.isSelect)return!1;t.drawing=!0;var n=u(e);t.begin(n)}),x.addEventListener("touchmove",function(e){if(e.preventDefault(),!t.isSelect)return!1;if(t.drawing){var n=u(e);t.draw(n)}}),x.addEventListener("touchend",function(e){if(e.preventDefault(),!t.isSelect)return!1;var n=u(e);t.end(n),t.drawing=!1})}}]),e}(M),A=function(){function t(){(0,w.default)(this,t),this.pencil=new D(O,"#000"),this.eraser=new I(10*O),this.line=new T,this.rect=new L,this.round=new N;var e=[this.pencil,this.line,this.rect,this.eraser,this.round];Object.defineProperty(this,"selected",{set:function(t){var n=!0,r=!1,o=void 0;try{for(var i,u=(0,c.default)(e);!(n=(i=u.next()).done);n=!0){var a=i.value;a.name===t?(a.isSelect=!0,a.dom.style.color="#f00"):(a.isSelect=!1,a.dom.style.color="#000")}}catch(t){r=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw o}}},get:function(){var t=!0,n=!1,r=void 0;try{for(var o,i=(0,c.default)(e);!(t=(o=i.next()).done);t=!0){var u=o.value;if(u.isSelect)return u.name}}catch(t){n=!0,r=t}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}})}return(0,p.default)(t,[{key:"bindEvent",value:function(){var t=this;this.selected="pencil",S.addEventListener("click",function(e){var n=e.target,r=n.getAttribute("id");if(t.selected=r,B.range.value=t[r].width/O,"eraser"===r)return!1;R.entrance.style.color=t[r].color}),this.pencil.bindEvent(),this.line.bindEvent(),this.rect.bindEvent(),this.eraser.bindEvent(),this.round.bindEvent()}}]),t}(),C=function(){function t(){(0,w.default)(this,t),this.dom=o("#Palette"),this.entrance=o("#toPalette"),this.show=!1}return(0,p.default)(t,[{key:"bindEvent",value:function(){var t=this;this.dom.addEventListener("click",function(e){var n=e.target;if(n===t.entrance)t.show=!t.show,t.show?t.dom.className="palette palette-show":t.dom.className="palette";else if(-1!==n.className.indexOf("item")){if("eraser"===W[W.selected].name)return!1;var r=window.getComputedStyle(n,null).backgroundColor;t.entrance.style.color=r,W[W.selected].color=r}})}}]),t}(),F=function(){function t(){(0,w.default)(this,t),this.dom=o("#width"),this.entrance=o("#toWidth"),this.range=o("#lineWidth"),this.show=!1}return(0,p.default)(t,[{key:"bindEvent",value:function(){var t=this;this.entrance.addEventListener("click",function(e){t.show=!t.show,t.show?t.dom.className="width width-show":t.dom.className="width"}),this.range.addEventListener("change",function(e){var n=t.range.value;W[W.selected].width=n*O})}}]),t}(),W=new A,R=new C,B=new F;B.bindEvent(),R.bindEvent(),W.bindEvent(),o("#symmetry").addEventListener("click",function(){_.save(),_.translate(j,0),_.scale(-1,1);var t=x.toDataURL(),e=new Image;e.onload=function(){_.drawImage(e,0,0),_.restore(),_.save(),_.translate(0,k),_.scale(1,-1);var t=x.toDataURL(),n=new Image;n.onload=function(){_.drawImage(n,0,0),_.restore()},n.src=t},e.src=t})},function(t,e,n){t.exports={default:n(59),__esModule:!0}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){t.exports={default:n(62),__esModule:!0}},function(t,e,n){t.exports={default:n(63),__esModule:!0}},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){n(43),n(42),t.exports=n(85)},function(t,e,n){n(87),t.exports=n(0).Object.assign},function(t,e,n){n(88);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(89);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(90),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){n(91),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){n(93),n(92),n(94),n(95),t.exports=n(0).Symbol},function(t,e,n){n(42),n(43),t.exports=n(30).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(7),o=n(83),i=n(82);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(17),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(12),o=n(22),i=n(14);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(17);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(21),o=n(15),i=n(23),u={};n(10)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(12),o=n(7);t.exports=function(t,e){for(var n,i=o(t),u=r(i),a=u.length,c=0;a>c;)if(i[n=u[c++]]===e)return n}},function(t,e,n){var r=n(16)("meta"),o=n(11),i=n(5),u=n(6).f,a=0,c=Object.isExtensible||function(){return!0},f=!n(9)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},h=function(t){return f&&p.NEED&&c(t)&&!i(t,r)&&s(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:h}},function(t,e,n){"use strict";var r=n(12),o=n(22),i=n(14),u=n(27),a=n(35),c=Object.assign;t.exports=!c||n(9)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,f=1,s=o.f,l=i.f;c>f;)for(var d,h=a(arguments[f++]),p=s?r(h).concat(s(h)):r(h),v=p.length,y=0;v>y;)l.call(h,d=p[y++])&&(n[d]=h[d]);return n}:c},function(t,e,n){var r=n(6),o=n(8),i=n(12);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(7),o=n(38).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(4),o=n(0),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(11),o=n(8),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(32)(Function.call,n(37).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(26),o=n(18);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(26),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(68),o=n(2)("iterator"),i=n(13);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(8),o=n(84);t.exports=n(0).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";var r=n(66),o=n(73),i=n(13),u=n(7);t.exports=n(36)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(76)})},function(t,e,n){var r=n(4);r(r.S,"Object",{create:n(21)})},function(t,e,n){var r=n(4);r(r.S+r.F*!n(3),"Object",{defineProperty:n(6).f})},function(t,e,n){var r=n(27),o=n(39);n(79)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(4);r(r.S,"Object",{setPrototypeOf:n(80).set})},function(t,e){},function(t,e,n){"use strict";var r=n(1),o=n(5),i=n(3),u=n(4),a=n(41),c=n(75).KEY,f=n(9),s=n(25),l=n(23),d=n(16),h=n(2),p=n(30),v=n(29),y=n(74),g=n(69),b=n(71),m=n(8),w=n(7),x=n(28),_=n(15),O=n(21),S=n(78),P=n(37),E=n(6),j=n(12),k=P.f,M=E.f,D=S.f,I=r.Symbol,T=r.JSON,L=T&&T.stringify,N=h("_hidden"),A=h("toPrimitive"),C={}.propertyIsEnumerable,F=s("symbol-registry"),W=s("symbols"),R=s("op-symbols"),B=Object.prototype,J="function"==typeof I,U=r.QObject,G=!U||!U.prototype||!U.prototype.findChild,K=i&&f(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(B,e);r&&delete B[e],M(t,e,n),r&&t!==B&&M(B,e,r)}:M,Y=function(t){var e=W[t]=O(I.prototype);return e._k=t,e},q=J&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},z=function(t,e,n){return t===B&&z(R,e,n),m(t),e=x(e,!0),m(n),o(W,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=O(n,{enumerable:_(0,!1)})):(o(t,N)||M(t,N,_(1,{})),t[N][e]=!0),K(t,e,n)):M(t,e,n)},H=function(t,e){m(t);for(var n,r=g(e=w(e)),o=0,i=r.length;i>o;)z(t,n=r[o++],e[n]);return t},Q=function(t,e){return void 0===e?O(t):H(O(t),e)},X=function(t){var e=C.call(this,t=x(t,!0));return!(this===B&&o(W,t)&&!o(R,t))&&(!(e||!o(this,t)||!o(W,t)||o(this,N)&&this[N][t])||e)},V=function(t,e){if(t=w(t),e=x(e,!0),t!==B||!o(W,e)||o(R,e)){var n=k(t,e);return!n||!o(W,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=D(w(t)),r=[],i=0;n.length>i;)o(W,e=n[i++])||e==N||e==c||r.push(e);return r},$=function(t){for(var e,n=t===B,r=D(n?R:w(t)),i=[],u=0;r.length>u;)!o(W,e=r[u++])||n&&!o(B,e)||i.push(W[e]);return i};J||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(R,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),K(this,t,_(1,n))};return i&&G&&K(B,t,{configurable:!0,set:e}),Y(t)},a(I.prototype,"toString",function(){return this._k}),P.f=V,E.f=z,n(38).f=S.f=Z,n(14).f=X,n(22).f=$,i&&!n(20)&&a(B,"propertyIsEnumerable",X,!0),p.f=function(t){return Y(h(t))}),u(u.G+u.W+u.F*!J,{Symbol:I});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var tt=j(h.store),et=0;tt.length>et;)v(tt[et++]);u(u.S+u.F*!J,"Symbol",{for:function(t){return o(F,t+="")?F[t]:F[t]=I(t)},keyFor:function(t){if(q(t))return y(F,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!J,"Object",{create:Q,defineProperty:z,defineProperties:H,getOwnPropertyDescriptor:V,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),T&&u(u.S+u.F*(!J||f(function(){var t=I();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,L.apply(T,r)}}}),I.prototype[A]||n(10)(I.prototype,A,I.prototype.valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(29)("asyncIterator")},function(t,e,n){n(29)("observable")}]);