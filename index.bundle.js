!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/clioandcalliope/",t(t.s=2)}([,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(4),n(5),n(6),n(7),n(8);const o=n(9),i=n(10);window.onload=function(){function e(){window.pageYOffset>=r?(a.classList.add("is-open"),a.classList.remove("is-closed")):(a.classList.remove("is-open"),a.classList.add("is-closed"))}function t(){for(var e=0;e<c.length;e++){var t=c[e];t.classList.add("show-links"),t.classList.remove("hide-links")}for(var e=0;e<l.length;e++){l[e].classList.add("hide")}}function n(){for(var e=0;e<c.length;e++){var t=c[e];t.classList.add("hide-links"),t.classList.remove("show-links")}for(var e=0;e<l.length;e++){l[e].classList.remove("hide")}}o.init();new i("[data-scroll]",{offset:100});var a=document.getElementById("nav"),r=430;window.addEventListener("scroll",e);for(var c=document.getElementsByClassName("nav-links"),s=document.getElementsByClassName("close-icon"),l=document.getElementsByClassName("open-icon"),u=document.getElementsByClassName("same-page-link"),d=0;d<s.length;d++){var f=s[d];f.addEventListener("click",n)}for(var d=0;d<l.length;d++){var f=l[d];f.addEventListener("click",t)}for(var d=0;d<u.length;d++){u[d].addEventListener("click",n)}}},,function(e,t){},function(e,t,n){e.exports=n.p+"index.html"},function(e,t,n){e.exports=n.p+"about.html"},function(e,t,n){e.exports=n.p+"contact.html"},function(e,t,n){e.exports=n.p+"favicon.ico"},function(e,t,n){(function(n){var o,i,a;/*! gumshoe v3.5.0 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
!function(n,r){i=[],o=r(n),void 0!==(a="function"==typeof o?o.apply(t,i):o)&&(e.exports=a)}(void 0!==n?n:this.window||this.global,function(e){"use strict";var t,n,o,i,a,r,c,s={},l="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),u=[],d={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",container:e,offset:0,activeClass:"active",scrollDelay:!1,callback:function(){}},f=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var i=0,a=e.length;i<a;i++)t.call(n,e[i],i,e)},m=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(;n<o;n++){var i=arguments[n];!function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=m(!0,e[o],n[o]):e[o]=n[o])}(i)}return e},h=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},g=function(e){var n=0;if(e.offsetParent)do{n+=e.offsetTop,e=e.offsetParent}while(e);else n=e.offsetTop;return n=n-a-t.offset,n>=0?n:0},p=function(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(e.innerHeight||document.documentElement.clientHeight)&&n.right<=(e.innerWidth||document.documentElement.clientWidth)},w=function(){u.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};s.setDistances=function(){o=v(),a=i?h(i)+g(i):0,f(u,function(e){e.distance=g(e.target)}),w()};var y=function(){var e=document.querySelectorAll(t.selector);f(e,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&u.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}})},b=function(){r&&(r.nav.classList.remove(t.activeClass),r.parent&&r.parent.classList.remove(t.activeClass))},E=function(e){b(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),r={nav:e.nav,parent:e.parent}};s.getCurrentNav=function(){var n=e.pageYOffset;if(e.innerHeight+n>=o&&p(u[0].target))return E(u[0]),u[0];for(var i=0,a=u.length;i<a;i++){var r=u[i];if(r.distance<=n)return E(r),r}b(),t.callback()};var L=function(){f(u,function(e){e.nav.classList.contains(t.activeClass)&&(r={nav:e.nav,parent:e.parent})})};s.destroy=function(){t&&(t.container.removeEventListener("resize",O,!1),t.container.removeEventListener("scroll",O,!1),u=[],t=null,n=null,o=null,i=null,a=null,r=null,c=null)};var C=function(e){window.clearTimeout(n),n=setTimeout(function(){s.setDistances(),s.getCurrentNav()},66)},O=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&s.getCurrentNav(),"resize"===e.type&&(s.setDistances(),s.getCurrentNav())},66))};return s.init=function(e){l&&(s.destroy(),t=m(d,e||{}),i=document.querySelector(t.selectorHeader),y(),0!==u.length&&(L(),s.setDistances(),s.getCurrentNav(),t.container.addEventListener("resize",O,!1),t.scrollDelay?t.container.addEventListener("scroll",C,!1):t.container.addEventListener("scroll",O,!1)))},s})}).call(t,n(1))},function(e,t,n){(function(n){var o,i;/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout(function(){t(o+i)},i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(n,a){o=[],void 0!==(i=function(){return a(n)}.apply(t,o))&&(e.exports=i)}(void 0!==n?n:"undefined"!=typeof window?window:this,function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(o)}return e},i=function(t){return parseInt(e.getComputedStyle(t).height,10)},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},c=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},s=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},l=function(e){return e?i(e)+e.offsetTop:0},u=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(i,f){var m,h,v,g,p,w,y,b={};b.cancelScroll=function(){cancelAnimationFrame(y)},b.animateScroll=function(t,i,a){var d=o(m||n,a||{}),f="[object Number]"===Object.prototype.toString.call(t),h=f||!t.tagName?null:t;if(f||h){var v=e.pageYOffset;d.header&&!g&&(g=document.querySelector(d.header)),p||(p=l(g));var w,y,E,L=f?t:s(h,p,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),C=L-v,O=c(),A=0,S=function(n,o){var a=e.pageYOffset;if(n==o||a==o||(v<o&&e.innerHeight+a)>=O)return b.cancelScroll(),u(t,o,f),d.after(t,i),w=null,!0},H=function(t){w||(w=t),A+=t-w,y=A/parseInt(d.speed,10),y=y>1?1:y,E=v+C*r(d,y),e.scrollTo(0,Math.floor(E)),S(E,L)||(e.requestAnimationFrame(H),w=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,i),b.cancelScroll(),e.requestAnimationFrame(H)}};var E=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),b.animateScroll(h,v),h=null,v=null)},L=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(v=t.target.closest(i))&&"a"===v.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&v.hostname===e.location.hostname&&v.pathname===e.location.pathname&&/#/.test(v.href)){var n;try{n=a(decodeURIComponent(v.hash))}catch(e){n=a(v.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?E():e.location.hash=o)}(h=document.querySelector(n))&&(h.setAttribute("data-scroll-id",h.id),h.id="",v.hash===e.location.hash&&(t.preventDefault(),E()))}},C=function(e){w||(w=setTimeout(function(){w=null,p=l(g)},66))};return b.destroy=function(){m&&(document.removeEventListener("click",L,!1),e.removeEventListener("resize",C,!1),b.cancelScroll(),m=null,h=null,v=null,g=null,p=null,w=null,y=null)},b.init=function(i){t&&(b.destroy(),m=o(n,i||{}),g=m.header?document.querySelector(m.header):null,p=l(g),document.addEventListener("click",L,!1),e.addEventListener("hashchange",E,!1),g&&e.addEventListener("resize",C,!1))},b.init(f),b}})}).call(t,n(1))}]);