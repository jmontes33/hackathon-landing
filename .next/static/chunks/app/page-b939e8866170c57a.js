(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1390:function(e,t,n){Promise.resolve().then(n.bind(n,9845))},8314:function(e,t,n){"use strict";var r=n(1811);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},4404:function(e,t,n){"use strict";e.exports=n(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9845:function(e,t,n){"use strict";let r,a;n.r(t),n.d(t,{default:function(){return eJ}});var i,o=n(7437),s=n(2265),l=function(){return(0,o.jsx)("main",{className:"flex flex-col items-center p-10 animate-in",children:(0,o.jsxs)("div",{className:"mt-6 flex flex-col max-w-xl gap-4 z-10 bg-white/5 p-6 rounded-md shadow-lg",children:[(0,o.jsx)("h1",{className:"m-0 text-center text-3xl text-white",children:"La Hackathon Del Dev"}),(0,o.jsx)("p",{className:"text-white",children:"Tu participaci\xf3n ha sido registrada. \xa1Buena suerte! \uD83C\uDF40\uD83C\uDF89"})]})})};function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}let u={data:""},d=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||u,p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,m=/\/\*[^]*?\*\/|  +/g,f=/\n+/g,h=(e,t)=>{let n="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+o+";":r+="f"==i[1]?h(o,i):i+"{"+h(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=h(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=h.p?h.p(i,o):i+":"+o+";")}return n+(t&&a?t+"{"+a+"}":a)+r},x={},g=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+g(e[n]);return t}return e},y=(e,t,n,r,a)=>{var i;let o=g(e),s=x[o]||(x[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!x[s]){let t=o!==e?e:(e=>{let t,n,r=[{}];for(;t=p.exec(e.replace(m,""));)t[4]?r.shift():t[3]?(n=t[3].replace(f," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(f," ").trim();return r[0]})(e);x[s]=h(a?{["@keyframes "+s]:t}:t,n?"":"."+s)}let l=n&&x.g?x.g:null;return n&&(x.g=x[s]),i=x[s],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),s},b=(e,t,n)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":h(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function v(e){let t=this||{},n=e.call?e(t.p):e;return y(n.unshift?n.raw?b(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,d(t.target),t.g,t.o,t.k)}v.bind({g:1});let E,w,j,T=v.bind({k:1});function S(e,t){let n=this||{};return function(){let r=arguments;function a(i,o){let s=Object.assign({},i),l=s.className||a.className;n.p=Object.assign({theme:w&&w()},s),n.o=/ *go\d+/.test(l),s.className=v.apply(n,r)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),j&&c[0]&&j(s),E(c,s)}return t?t(a):a}}function D(){let e=c(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return D=function(){return e},e}function N(){let e=c(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return N=function(){return e},e}function k(){let e=c(["\nfrom {\n  transform: scale(0) rotate(90deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n	opacity: 1;\n}"]);return k=function(){return e},e}function O(){let e=c(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return O=function(){return e},e}function P(){let e=c(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return P=function(){return e},e}function C(){let e=c(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return C=function(){return e},e}function F(){let e=c(["\nfrom {\n  transform: scale(0) rotate(45deg);\n	opacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n	opacity: 1;\n}"]);return F=function(){return e},e}function M(){let e=c(["\n0% {\n	height: 0;\n	width: 0;\n	opacity: 0;\n}\n40% {\n  height: 0;\n	width: 6px;\n	opacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return M=function(){return e},e}function A(){let e=c(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return A=function(){return e},e}function _(){let e=c(["\n  position: absolute;\n"]);return _=function(){return e},e}function I(){let e=c(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return I=function(){return e},e}function z(){let e=c(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return z=function(){return e},e}function R(){let e=c(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return R=function(){return e},e}function H(){let e=c(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return H=function(){return e},e}function L(){let e=c(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return L=function(){return e},e}function U(){let e=c(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return U=function(){return e},e}var W=e=>"function"==typeof e,q=(e,t)=>W(e)?e(t):e,B=(r=0,()=>(++r).toString()),Y=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},$=new Map,J=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),Q({type:4,toastId:e})},1e3);$.set(e,t)},V=e=>{let t=$.get(e);t&&clearTimeout(t)},Z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&V(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?Z(e,{type:1,toast:n}):Z(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?J(r):e.toasts.forEach(e=>{J(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},G=[],K={toasts:[],pausedAt:void 0},Q=e=>{K=Z(K,e),G.forEach(e=>{e(K)})},X={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ee=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,s.useState)(K);(0,s.useEffect)(()=>(G.push(n),()=>{let e=G.indexOf(n);e>-1&&G.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||X[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},et=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||B()}},en=e=>(t,n)=>{let r=et(t,e,n);return Q({type:2,toast:r}),r.id},er=(e,t)=>en("blank")(e,t);er.error=en("error"),er.success=en("success"),er.loading=en("loading"),er.custom=en("custom"),er.dismiss=e=>{Q({type:3,toastId:e})},er.remove=e=>Q({type:4,toastId:e}),er.promise=(e,t,n)=>{let r=er.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(er.success(q(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e)).catch(e=>{er.error(q(t.error,e),{id:r,...n,...null==n?void 0:n.error})}),e};var ea=(e,t)=>{Q({type:1,toast:{id:e,height:t}})},ei=()=>{Q({type:5,time:Date.now()})},eo=e=>{let{toasts:t,pausedAt:n}=ee(e);(0,s.useEffect)(()=>{if(n)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(n<0){t.visible&&er.dismiss(t.id);return}return setTimeout(()=>er.dismiss(t.id),n)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,n]);let r=(0,s.useCallback)(()=>{n&&Q({type:6,time:Date.now()})},[n]),a=(0,s.useCallback)((e,n)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=n||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:ea,startPause:ei,endPause:r,calculateOffset:a}}},es=T(D()),el=T(N()),ec=T(k()),eu=S("div")(O(),e=>e.primary||"#ff4b4b",es,el,e=>e.secondary||"#fff",ec),ed=T(P()),ep=S("div")(C(),e=>e.secondary||"#e0e0e0",e=>e.primary||"#616161",ed),em=T(F()),ef=T(M()),eh=S("div")(A(),e=>e.primary||"#61d345",em,ef,e=>e.secondary||"#fff"),ex=S("div")(_()),eg=S("div")(I()),ey=T(z()),eb=S("div")(R(),ey),ev=e=>{let{toast:t}=e,{icon:n,type:r,iconTheme:a}=t;return void 0!==n?"string"==typeof n?s.createElement(eb,null,n):n:"blank"===r?null:s.createElement(eg,null,s.createElement(ep,{...a}),"loading"!==r&&s.createElement(ex,null,"error"===r?s.createElement(eu,{...a}):s.createElement(eh,{...a})))},eE=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),ew=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),ej=S("div")(H()),eT=S("div")(L()),eS=(e,t)=>{let n=e.includes("top")?1:-1,[r,a]=Y()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[eE(n),ew(n)];return{animation:t?"".concat(T(r)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(T(a)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}},eD=s.memo(e=>{let{toast:t,position:n,style:r,children:a}=e,i=t.height?eS(t.position||n||"top-center",t.visible):{opacity:0},o=s.createElement(ev,{toast:t}),l=s.createElement(eT,{...t.ariaProps},q(t.message,t));return s.createElement(ej,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof a?a({icon:o,message:l}):s.createElement(s.Fragment,null,o,l))});i=s.createElement,h.p=void 0,E=i,w=void 0,j=void 0;var eN=e=>{let{id:t,className:n,style:r,onHeightUpdate:a,children:i}=e,o=s.useCallback(e=>{if(e){let n=()=>{a(t,e.getBoundingClientRect().height)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return s.createElement("div",{ref:o,className:n,style:r},i)},ek=(e,t)=>{let n=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Y()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...n?{top:0}:{bottom:0},...r}},eO=v(U()),eP=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:r,gutter:a,children:i,containerStyle:o,containerClassName:l}=e,{toasts:c,handlers:u}=eo(r);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(e=>{let r=e.position||n,o=ek(r,u.calculateOffset(e,{reverseOrder:t,gutter:a,defaultPosition:n}));return s.createElement(eN,{id:e.id,key:e.id,onHeightUpdate:u.updateHeight,className:e.visible?eO:"",style:o},"custom"===e.type?q(e.message,e):i?i(e):s.createElement(eD,{toast:e,position:r}))}))},eC=n(4404);function eF(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function eM(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function eA(e,t,n){return t&&eM(e.prototype,t),n&&eM(e,n),e}function e_(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ez(e,t)}function eI(e){return(eI=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ez(e,t){return(ez=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function eR(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r,a=eI(e);if(t){var i=eI(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return(n=r)&&("object"==typeof n||"function"==typeof n)?n:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)}}function eH(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function eL(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=String(e);if(0===n)return r;var a=r.match(/(.*?)([0-9]+)(.*)/),i=a?a[1]:"",o=a?a[3]:"",s=a?a[2]:r,l=s.length>=n?s:(((function(e){if(Array.isArray(e))return eH(e)})(t=Array(n))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return eH(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eH(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return"0"}).join("")+s).slice(-1*n);return"".concat(i).concat(l).concat(o)}var eU={daysInHours:!1,zeroPadTime:2},eW=function(e){e_(n,e);var t=eR(n);function n(){var e;return eF(this,n),e=t.apply(this,arguments),e.state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval(function(){0==e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState(function(e){return{count:e.count-1}})},1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState(function(e){return{count:e.count+t}},e.startCountdown)},e}return eA(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,s.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(s.Component);eW.propTypes={count:eC.number,children:eC.element,onComplete:eC.func};var eq=function(e){e_(n,e);var t=eR(n);function n(e){var r;if(eF(this,n),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,s.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},e.date){var a=r.calcTimeDelta();r.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return eA(n,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date===e.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,r=e.precision,a=e.controlled,i=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,a=void 0===r?Date.now:r,i=n.precision,o=n.controlled,s=n.offsetTime,l=n.overtime;t="string"==typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,o||(t+=void 0===s?0:s);var c=o?t:t-a(),u=Math.round(1e3*parseFloat(((l?c:Math.max(0,c))/1e3).toFixed(Math.min(20,Math.max(0,void 0===i?0:i))))),d=Math.abs(u)/1e3;return{total:u,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:u<=0}}(t,{now:n,precision:r,controlled:a,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var r=this;if(this.mounted){var a=e.completed&&!this.state.timeDelta.completed,i=e.completed&&"STARTED"===t;return a&&!this.props.overtime&&this.clearTimer(),this.setState(function(n){var a=t||n.status;return e.completed&&!r.props.overtime?a="COMPLETED":t||"COMPLETED"!==a||(a="STOPPED"),{timeDelta:e,status:a}},function(){n&&n(r.state.timeDelta),r.props.onComplete&&(a||i)&&r.props.onComplete(e,i)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e,t,n,r,a,i,o,s,l,c,u,d=this.props,p=d.daysInHours,m=d.zeroPadTime,f=d.zeroPadDays,h=this.state.timeDelta;return Object.assign(Object.assign({},h),{api:this.getApi(),props:this.props,formatted:(e=h.days,t=h.hours,n=h.minutes,r=h.seconds,i=(a=Object.assign(Object.assign({},eU),{daysInHours:p,zeroPadTime:m,zeroPadDays:f})).daysInHours,o=a.zeroPadTime,l=void 0===(s=a.zeroPadDays)?o:s,c=Math.min(2,o),u=i?eL(t+24*e,o):eL(t,c),{days:i?"":eL(e,l),hours:u,minutes:eL(n,c),seconds:eL(r,c)})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,r=e.onComplete;return(0,s.createElement)(eW,{ref:this.legacyCountdownRef,count:t,onComplete:r},n)}var a=this.props,i=a.className,o=a.overtime,l=a.children,c=a.renderer,u=this.getRenderProps();if(c)return c(u);if(l&&this.state.timeDelta.completed&&!o)return(0,s.cloneElement)(l,{countdown:u});var d=u.formatted,p=d.days,m=d.hours,f=d.minutes,h=d.seconds;return(0,s.createElement)("span",{className:i},u.total<0?"-":"",p,p?":":"",m,":",f,":",h)}}]),n}(s.Component);eq.defaultProps=Object.assign(Object.assign({},eU),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),eq.propTypes={date:(0,eC.oneOfType)([(0,eC.instanceOf)(Date),eC.string,eC.number]),daysInHours:eC.bool,zeroPadTime:eC.number,zeroPadDays:eC.number,controlled:eC.bool,intervalDelay:eC.number,precision:eC.number,autoStart:eC.bool,overtime:eC.bool,className:eC.string,children:eC.element,renderer:eC.func,now:eC.func,onMount:eC.func,onStart:eC.func,onPause:eC.func,onStop:eC.func,onTick:eC.func,onComplete:eC.func};var eB=function(){let e=new Date("2024-03-24T00:00:00").getTime();return(0,o.jsx)("div",{children:(0,o.jsx)(eq,{date:e,renderer:e=>{let{days:t,hours:n,minutes:r,seconds:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"md:flex hidden justify-center text-white gap-2 bg-white/5 p-6 rounded-md shadow-lg",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,o.jsx)("span",{className:"text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:t}),(0,o.jsx)("span",{className:"text-3xl",children:"D\xedas"})]}),(0,o.jsx)("span",{className:"text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:":"}),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,o.jsx)("span",{className:"text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:n}),(0,o.jsx)("span",{className:"text-3xl",children:"Horas"})]}),(0,o.jsx)("span",{className:"text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:":"}),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,o.jsx)("span",{className:"text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:r}),(0,o.jsx)("span",{className:"text-3xl",children:"Minutos"})]}),(0,o.jsx)("span",{className:"text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:":"}),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,o.jsx)("span",{className:"text-7xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:a}),(0,o.jsx)("span",{className:"text-3xl",children:"Segundos"})]})]}),(0,o.jsxs)("div",{className:"flex md:hidden text-white bg-white/5 p-6 rounded-md shadow-lg",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,o.jsx)("span",{className:"text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:t}),(0,o.jsx)("span",{className:"text-xl",children:"D\xedas"})]}),(0,o.jsx)("span",{className:"text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:":"}),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,o.jsx)("span",{className:"text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:n}),(0,o.jsx)("span",{className:"text-xl",children:"Horas"})]}),(0,o.jsx)("span",{className:"text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:":"}),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,o.jsx)("span",{className:"text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:r}),(0,o.jsx)("span",{className:"text-xl",children:"Minutos"})]}),(0,o.jsx)("span",{className:"text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:":"}),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,o.jsx)("span",{className:"text-5xl bg-gradient-to-r from-[#EEF1F0] to-[#71757E] inline-block text-transparent bg-clip-text",children:a}),(0,o.jsx)("span",{className:"text-xl",children:"Segundos"})]})]})]})}})})},eY=function(){let[e,t]=(0,s.useState)(""),[n,r]=(0,s.useState)(!1),a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let n=n=>{let a=e+n.key;t(a),a.includes("33")&&(t(""),r(!0))};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e]),(0,s.useEffect)(()=>{n&&null!==a.current&&a.current.play()},[n]),(0,o.jsx)("div",{children:n&&(0,o.jsx)("video",{className:"animate-in",ref:a,onEnded:()=>{r(!1)},src:"33.mp4"})})},e$=function(){return(0,o.jsx)("div",{className:"flex justify-center mt-auto w-[700px] text-white text-center mb-5 py-2",children:(0,o.jsxs)("p",{children:["Desarrollado por"," ",(0,o.jsx)("a",{className:"font-bold",href:"https://www.instagram.com/elrincondeldev/",children:"El Rinc\xf3n Del Dev"})]})})};function eJ(){let[e,t]=(0,s.useState)(""),[n,r]=(0,s.useState)(""),[a,i]=(0,s.useState)(!1),[c,u]=(0,s.useState)(!1),d=()=>er.error("Este email ya ha sido registrado."),p=async a=>(i(!0),a.preventDefault(),await fetch("/api/email",{method:"POST",body:JSON.stringify({name:e,email:n})}).then(e=>e.json()).then(e=>{i(!1),e&&e.name?(u(!0),t(""),r("")):d()}).catch(e=>{i(!1),console.error(e)}),!0);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen animate-in",children:[c?(0,o.jsx)(l,{}):(0,o.jsxs)("main",{className:"flex flex-col fixed items-center gap-10 p-10",children:[(0,o.jsxs)("div",{className:"md:flex hidden flex-col place-items-center gap-4",children:[(0,o.jsx)("h1",{className:"m-0 text-center text-7xl text-white",children:"La Hackathon Del Dev"}),(0,o.jsx)("div",{className:"fixed bottom-0 right-20 w-[200px]",children:(0,o.jsx)(eY,{})})]}),(0,o.jsx)("div",{className:"flex md:hidden flex-col place-items-center gap-4",children:(0,o.jsx)("h1",{className:"m-0 text-center text-3xl text-white",children:"La Hackathon Del Dev"})}),(0,o.jsxs)("div",{className:"relative flex flex-col gap-10 w-[100%] md:w-[80%]",children:[(0,o.jsx)(eB,{}),(0,o.jsxs)("form",{className:"flex flex-col gap-4 z-10 w-[100%] bg-white/5 p-6 rounded-md shadow-lg",onSubmit:p,children:[(0,o.jsx)("label",{htmlFor:"name",className:"sr-only",children:"Name"}),(0,o.jsx)("input",{id:"name",name:"name",type:"text",autoComplete:"name",required:!0,value:e,className:"rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 text-sm",placeholder:"Nombre",onChange:e=>t(e.target.value)}),(0,o.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),(0,o.jsx)("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,value:n,className:"rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 text-sm",placeholder:"Email",onChange:e=>r(e.target.value)}),(0,o.jsx)("button",{type:"submit",className:"flex justify-center rounded-md bg-[#2F8F62] border-[1px] border-[#33CA86] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#277952]",children:a?(0,o.jsx)("div",{style:{borderTopColor:"transparent"},className:"w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"}):"\xa1Participo!"})]})]})]}),(0,o.jsx)(eP,{}),(0,o.jsx)(e$,{})]})})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=1390)}),_N_E=e.O()}]);