(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{241:function(e,t,n){"use strict";var o=n(0),r=n(386),a=n(380),s=n(379);n(242);t.a=Object(s.a)(function(e){var t=e.children,n=e.properties,s=Object(o.useState)(!0),i=s[0],c=s[1];return o.createElement(o.Fragment,null,o.createElement(r.a,{toggleScrollWrapper:function(e){c(void 0===e?!i:e)},isSecondary:!0,className:"header_static",properties:n}),o.createElement("div",{className:"wrapper",style:{overflowY:i?"visible":"hidden"}},o.createElement("div",{className:"content"},o.createElement("div",{className:"secondary-content container"},t)),o.createElement(a.a,{properties:n})))})},242:function(e,t,n){},414:function(e,t,n){"use strict";var o=n(0),r=n(67),a=n.n(r),s=n(236),i=n.n(s),c=n(751),u=n(503),l=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,p=n(234),f={ru:{email:"Неверный адрес электронной почты",required:"Обязательное поле"},en:{email:"Invalid email",required:"Required field"}},m=function(e){var t=e?e.key:p.a.key;return{composeValidators:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){var n;return e.some(function(e){return void 0!==(n=e(t))})?n:void 0}},requiredFieldValidator:function(e){return e&&e.trim()?void 0:f[t].required},emailFieldValidator:function(e){return function(e){return l.test(String(e).toLowerCase())}(e)?void 0:f[t].email}}},d=n(235),h=n(416),_=n(417),y=function(){return(y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e){var t,n=e.className,r=e.field,s=e.placeholder;return o.createElement("div",{className:a()(h.FormGroup,n||"",(t={},t[h.FormGroup_error]=r.meta.invalid&&r.meta.touched,t))},o.createElement("input",y({},r.input,{className:h.FormControl,placeholder:s})),r.meta.touched&&r.meta.error&&o.createElement("span",{className:h.FormErrorMessage},r.meta.error))};t.a=function(e){var t,n=e.callback,r=e.hideMessageField,a=Object(o.useContext)(d.a),s=a.dictionary,l=Object(o.useState)(!1),p=l[0],f=l[1],b=function(){f(!p),p&&n&&n()},O=Object(u.b)({onSubmit:function(e){return i.a.post("/api/clientMessages",e).then(function(){b()})},initialValues:r?{message:"Message without description"}:{}}),j=O.form,g=O.handleSubmit,E=O.pristine,C=O.submitting,w=m(a.locale),N=w.emailFieldValidator,M=w.requiredFieldValidator,S=w.composeValidators,P=Object(u.a)("firstName",j,M),R=Object(u.a)("lastName",j,M),A=Object(u.a)("company",j,M),k=Object(u.a)("phone",j),x=Object(u.a)("email",j,S(M,N)),F=Object(u.a)("message",j,M);return o.createElement("div",null,o.createElement("form",{onSubmit:function(e){return g(e).then(j.reset)}},o.createElement("div",{className:"row"},o.createElement(v,{field:P,className:"col-md-6",placeholder:s.firstName}),o.createElement(v,{field:R,className:"col-md-6",placeholder:s.lastName})),o.createElement(v,{field:A,placeholder:s.company}),o.createElement("div",{className:"row"},o.createElement(v,{field:k,className:"col-md-6",placeholder:s.phone,key:0}),o.createElement(v,{field:x,className:"col-md-6",placeholder:s.email,key:1})),!r&&o.createElement("div",{className:"form-group"},o.createElement("textarea",y({},F.input,{className:"form-control",placeholder:s.message,rows:4})),(t=F).meta.touched&&t.meta.error&&o.createElement("span",{className:h.FormErrorMessage},t.meta.error)),o.createElement("button",{type:"submit",disabled:E||C,className:h.FormBtn},s.send)),o.createElement(c.a,{isOpen:p,toggle:b},o.createElement("div",{className:_.Modal},o.createElement("button",{className:_.Modal__closeBtn,onClick:b},o.createElement("i",{className:"fas fa-times"})),s.makeOrderMessageSuccess)))}},416:function(e,t,n){e.exports={Form:"Form___3qX40",FormGroup:"FormGroup___1e4SS",FormGroup_error:"FormGroup_error___3wF0u",FormControl:"FormControl___fF0l8",FormErrorMessage:"FormErrorMessage___R6lFC",FormBtn:"FormBtn___S7Nkv"}},417:function(e,t,n){e.exports={Modal:"Modal___1a9e_",Modal__closeBtn:"Modal__closeBtn___1Tth9"}},551:function(e,t,n){e.exports={Contact:"Contact___1gT-R",Contact__title:"Contact__title___1kGeT",Contact__description:"Contact__description___1ySi6",Contact__content:"Contact__content___E9Uyr",AddressContainer:"AddressContainer___MZ9qv",Address:"Address___3NhBw",Address__title:"Address__title___1co0A",Address__companyName:"Address__companyName___23Qfh",Address__item:"Address__item___1myaL",ContactItems:"ContactItems___3CGHJ",ContactItems__item:"ContactItems__item___MSLWn",ContactItems__title:"ContactItems__title___27dsa",ContactItems__content:"ContactItems__content___1GPxM",AskQuestion:"AskQuestion___2zWHY",AskQuestion__title:"AskQuestion__title___1ui2Z",AskQuestion__form:"AskQuestion__form___2pxG8",Map:"Map___NL74o",Map__title:"Map__title___3ijtv"}},552:function(e,t,n){"use strict";(function(e){n.d(t,"c",function(){return R}),n.d(t,"a",function(){return q}),n.d(t,"b",function(){return V});var o=n(0),r=n.n(o),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t){return e(t={exports:{}},t.exports),t.exports}var c=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case a:case i:case s:case m:return e;default:switch(e=e&&e.$$typeof){case u:case f:case c:return e;default:return t}}case h:case d:case r:return t}}}function y(e){return _(e)===p}t.typeOf=_,t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=f,t.Fragment=a,t.Lazy=h,t.Memo=d,t.Portal=r,t.Profiler=i,t.StrictMode=s,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===i||e===s||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===d||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(e){return y(e)||_(e)===l},t.isConcurrentMode=y,t.isContextConsumer=function(e){return _(e)===u},t.isContextProvider=function(e){return _(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return _(e)===f},t.isFragment=function(e){return _(e)===a},t.isLazy=function(e){return _(e)===h},t.isMemo=function(e){return _(e)===d},t.isPortal=function(e){return _(e)===r},t.isProfiler=function(e){return _(e)===i},t.isStrictMode=function(e){return _(e)===s},t.isSuspense=function(e){return _(e)===m}});s(c),s(i(function(e,t){})),i(function(e){e.exports=c}),Object,Object,Object,function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()&&Object;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function l(){}function p(){}Function.call.bind(Object.prototype.hasOwnProperty),p.resetWarningCache=l;var f=i(function(e){e.exports=function(){function e(e,t,n,o,r,a){if(a!==u){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:p,resetWarningCache:l};return n.PropTypes=n,n}()}),m=s(i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}})),d=function(e,t){var n={};for(var o in e)-1===t.indexOf(o)&&(n[o]=e[o]);return n},h="__global_unique_id__",_=function(){return a[h]=(a[h]||0)+1};function y(e){return function(){return e}}var v=function(){};v.thatReturns=y,v.thatReturnsFalse=y(!1),v.thatReturnsTrue=y(!0),v.thatReturnsNull=y(null),v.thatReturnsThis=function(){return this},v.thatReturnsArgument=function(e){return e};var b=v,O=i(function(e,t){t.__esModule=!0;var n=a(f),o=a(_);function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a(b),t.default=function(e,t){var a,u,l="__create-react-context-"+(0,o.default)()+"__",p=function(e){function n(){var t,o,r,a;s(this,n);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return t=o=i(this,e.call.apply(e,[this].concat(u))),o.emitter=(r=o.props.value,a=[],{on:function(e){a.push(e)},off:function(e){a=a.filter(function(t){return t!==e})},get:function(){return r},set:function(e,t){r=e,a.forEach(function(e){return e(r,t)})}}),i(o,t)}return c(n,e),n.prototype.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,o=e.value,r=void 0;((a=n)===(s=o)?0!==a||1/a==1/s:a!=a&&s!=s)?r=0:(r="function"==typeof t?t(n,o):1073741823,0!=(r|=0)&&this.emitter.set(e.value,r))}var a,s},n.prototype.render=function(){return this.props.children},n}(r.a.Component);p.childContextTypes=((a={})[l]=n.default.object.isRequired,a);var f=function(t){function n(){var e,o;s(this,n);for(var r=arguments.length,a=Array(r),c=0;c<r;c++)a[c]=arguments[c];return e=o=i(this,t.call.apply(t,[this].concat(a))),o.state={value:o.getValue()},o.onUpdate=function(e,t){0!=((0|o.observedBits)&t)&&o.setState({value:o.getValue()})},i(o,e)}return c(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[l]?this.context[l].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.a.Component);return f.contextTypes=((u={})[l]=n.default.object,u),{Provider:p,Consumer:f}},e.exports=t.default});s(O);var j=s(i(function(e,t){t.__esModule=!0;var n=a(r.a),o=a(O);function a(e){return e&&e.__esModule?e:{default:e}}t.default=n.default.createContext||o.default,e.exports=t.default})),g=j(null),E=function(e){var t=m(e);return function(n){return r.a.createElement(g.Consumer,null,function(o){if(null===o)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+t+" /> is inside <YMaps /> provider");return r.a.createElement(e,Object.assign({},{ymaps:o},n))})}},C=j(null),w=function(e){return function(t){return r.a.createElement(C.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},{parent:n},t))})}};function N(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=[]);var o=function(o){function a(){o.call(this),this.state={loading:!0},this._isMounted=!1}return o&&(a.__proto__=o),(a.prototype=Object.create(o&&o.prototype)).constructor=a,a.prototype.componentDidMount=function(){var e=this;this._isMounted=!0,this.props.ymaps.load().then(function(t){return Promise.all(n.concat(e.props.modules).map(t.loadModule)).then(function(){!0===e._isMounted&&e.setState({loading:!1},function(){e.props.onLoad(t)})})}).catch(function(t){!0===e._isMounted&&e.props.onError(t)})},a.prototype.componentWillUnmount=function(){this._isMounted=!1},a.prototype.render=function(){var n=this.props.ymaps,o=!1===t||!1===this.state.loading,a=d(this.props,["onLoad","onError","modules","ymaps"]);return o&&r.a.createElement(e,Object.assign({},{ymaps:n.getApi()},a))},a}(r.a.Component);return o.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},E(o)}var M={lang:"ru_RU",load:"",ns:"",mode:"release"},S={},P=function(e){var t=Date.now().toString(32);this.options=e,this.namespace=e.query.ns||M.ns,this.onload="__yandex-maps-api-onload__$$"+t,this.onerror="__yandex-maps-api-onerror__$$"+t};P.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},P.prototype.setApi=function(e){return this.api=e},P.prototype.getPromise=function(){return this.namespace?S[this.namespace]:this.promise},P.prototype.setPromise=function(e){return this.namespace?S[this.namespace]=this.promise=e:this.promise=e},P.prototype.load=function(){var e=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var t=Object.assign({onload:this.onload,onerror:this.onerror},M,this.options.query),n=Object.keys(t).map(function(e){return e+"="+t[e]}).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise(function(t,n){window[e.onload]=function(n){delete window[e.onload],n.loadModule=e.loadModule.bind(e),n.ready(function(){return t(e.setApi(n))})},window[e.onerror]=function(t){delete window[e.onerror],n(t)},e.fetchScript(o).catch(window[e.onerror])});return this.setPromise(r)},P.prototype.fetchScript=function(e){var t=this;return new Promise(function(n,o){t.script=document.createElement("script"),t.script.type="text/javascript",t.script.onload=n,t.script.onerror=o,t.script.src=e,t.script.async="async",document.head.appendChild(t.script)})},P.prototype.loadModule=function(e){var t=this;return new Promise(function(n,o){t.getApi().modules.require(e,function(o){!function(e,t,n,o){void 0===o&&(o=!1),t="string"==typeof t?t.split("."):t.slice();for(var r,a=e;t.length>1;)a[r=t.shift()]||(a[r]={}),a=a[r];a[t[0]]=!0===o&&a[t[0]]||n}(t.api,e,o,!0),n(o)},o,t.getApi())})},P._name="__react-yandex-maps__";var R=function(e){function t(t){e.call(this,t),this.ymaps=new P(t)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},t.prototype.render=function(){return r.a.createElement(g.Provider,{value:this.ymaps},this.props.children)},t}(r.a.Component);R.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var A=/^on(?=[A-Z])/;function k(e){return Object.keys(e).reduce(function(t,n){if(A.test(n)){var o=n.replace(A,"").toLowerCase();t._events[o]=e[n]}else t[n]=e[n];return t},{_events:{}})}function x(e,t,n){"function"==typeof n&&e.events.add(t,n)}function F(e,t,n){"function"==typeof n&&e.events.remove(t,n)}function T(e,t,n){Object.keys(Object.assign({},t,n)).forEach(function(o){t[o]!==n[o]&&(F(e,o,t[o]),x(e,o,n[o]))})}var I=function(e){return"default"+e.charAt(0).toUpperCase()+e.slice(1)};function B(e,t){return void 0!==e[t]||void 0===e[I(t)]}function U(e,t,n){return(B(e,t)?e[t]:e[I(t)])||n}function $(e,t,n){void 0===n&&(n=null),e&&e!==t&&(e.hasOwnProperty("current")?e.current=null:"function"==typeof e&&e(null)),t&&(t.hasOwnProperty("current")?t.current=n:"function"==typeof t&&t(n))}var D=function(e){function t(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){var e=t.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:e})},t.prototype.componentDidUpdate=function(e){null!==this.state.instance&&t.updateObject(this.state.instance,e,this.props)},t.prototype.componentWillUnmount=function(){t.unmountObject(this.state.instance,this.props)},t.prototype.render=function(){var e=t.getParentElementSize(this.props),n=k(this.props),o=d(n,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return r.a.createElement(C.Provider,{value:this.state.instance},r.a.createElement("div",Object.assign({},{ref:this._getRef},e,o),this.props.children))},t.getParentElementSize=function(e){var t=e.width,n=e.height,o=e.style,r=e.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:t,height:n}}},t.mountObject=function(e,t,n){var o=k(n),r=o.instanceRef,a=o._events,s=new t(e,U(n,"state"),U(n,"options"));return Object.keys(a).forEach(function(e){return x(s,e,a[e])}),$(null,r,s),s},t.updateObject=function(e,t,n){var o=k(n),r=o._events,a=o.instanceRef,s=k(t),i=s._events,c=s.instanceRef;if(B(n,"state")){var u=U(t,"state",{}),l=U(n,"state",{});u.type!==l.type&&e.setType(l.type),u.behaviors!==l.behaviors&&(u.behaviors&&e.behaviors.disable(u.behaviors),l.behaviors&&e.behaviors.enable(l.behaviors)),u.zoom!==l.zoom&&e.setZoom(l.zoom),u.center!==l.center&&e.setCenter(l.center),l.bounds&&u.bounds!==l.bounds&&e.setBounds(l.bounds)}if(B(n,"options")){var p=U(t,"options"),f=U(n,"options",{});p!==f&&e.options.set(f)}U(t,"width")===U(n,"width")&&U(t,"height")===U(n,"height")||e.container.fitToViewport(),T(e,i,r),$(c,a,e)},t.unmountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n._events;null!==e&&(Object.keys(r).forEach(function(t){return F(e,t,r[t])}),e.destroy(),$(o))},t}(r.a.Component);D.defaultProps={width:320,height:240};var q=N(D,!0,["Map"]),z=function(e){function t(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){var e=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&t.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(function(t){return e._mounted&&e.setState({instance:t})})},t.prototype.componentDidUpdate=function(e){null!==this.state.instance&&t.updateObject(this.state.instance,e,this.props)},t.prototype.componentWillUnmount=function(){this._mounted=!1,t.unmountObject(this.state.instance,this.props)},t.prototype.render=function(){var e=t.getParentElementSize(this.props);return r.a.createElement("div",Object.assign({},{ref:this._getRef},e))},t.getParentElementSize=function(e){var t=e.width,n=e.height,o=e.style,r=e.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:t,height:n}}},t.mountObject=function(e,t,n){var o=k(n),r=o.instanceRef,a=o._events,s=U(n,"point"),i=U(n,"locateOptions"),c=U(n,"options");return new Promise(function(n,o){t.locate(s,i).done(function(o){if(o.length>0){var s=new t.Player(e,o[0],c);$(null,r,s),Object.keys(a).forEach(function(e){return x(s,e,a[e])}),n(s)}},o)})},t.updateObject=function(e,t,n){var o=k(n),r=o._events,a=o.instanceRef,s=k(t),i=s._events,c=s.instanceRef;if(B(n,"options")){var u=U(t,"options"),l=U(n,"options");u!==l&&e.options.set(l)}if(B(n,"point")){var p=U(n,"point"),f=U(t,"point"),m=U(n,"locateOptions");p!==f&&e.moveTo(p,m)}T(e,i,r),$(c,a,e)},t.unmountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n._events;null!==e&&(Object.keys(r).forEach(function(t){return F(e,t,r[t])}),$(o))},t}(r.a.Component);z.defaultProps={width:320,height:240};N(z,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]);var L=function(e){function t(){e.call(this),this.state={instance:null}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){var e=t.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:e})},t.prototype.componentDidUpdate=function(e){null!==this.state.instance&&t.updateControl(this.state.instance,e,this.props)},t.prototype.componentWillUnmount=function(){t.unmountControl(this.state.instance,this.props)},t.prototype.render=function(){return r.a.createElement(C.Provider,{value:this.state.instance},this.props.children)},t.mountControl=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n.lazy,s=n._events,i=new e({data:U(t,"data"),options:U(t,"options"),state:U(t,"state"),mapTypes:U(t,"mapTypes"),lazy:a});if(Object.keys(s).forEach(function(e){return x(i,e,s[e])}),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(i);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+t.name);r.add(i)}return $(null,o,i),i},t.updateControl=function(e,t,n){var o=k(n),r=o._events,a=o.instanceRef,s=k(t),i=s._events,c=s.instanceRef;if(B(n,"options")){var u=U(t,"options"),l=U(n,"options");u!==l&&e.options.set(l)}if(B(n,"data")){var p=U(t,"data"),f=U(n,"data");p!==f&&e.data.set(f)}if(B(n,"state")){var m=U(t,"state"),d=U(n,"state");m!==d&&e.state.set(d)}if(B(n,"mapTypes")){var h=U(t,"mapTypes"),_=U(n,"mapTypes");h!==_&&(e.removeAllMapTypes(),_.forEach(function(t){return e.addMapType(t)}))}T(e,i,r),$(c,a,e)},t.unmountControl=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n._events;null!==e&&(Object.keys(a).forEach(function(t){return F(e,t,a[t])}),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(e):r.remove&&"function"==typeof r.remove&&r.remove(e),$(o))},t}(r.a.Component),W=(w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"Button"}))},!0,["control.Button"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"FullscreenControl"}))},!0,["control.FullscreenControl"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"GeolocationControl"}))},!0,["control.GeolocationControl"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"ListBox"}))},!0,["control.ListBox"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"ListBoxItem"}))},!0,["control.ListBoxItem"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"RouteButton"}))},!0,["control.RouteButton"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"RouteEditor"}))},!0,["control.RouteEditor"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"RoutePanel"}))},!0,["control.RoutePanel"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"RulerControl"}))},!0,["control.RulerControl"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"SearchControl"}))},!0,["control.SearchControl"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"TrafficControl"}))},!0,["control.TrafficControl"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"TypeSelector"}))},!0,["control.TypeSelector"])),w(N(function(e){return r.a.createElement(L,Object.assign({},e,{name:"ZoomControl"}))},!0,["control.ZoomControl"])),w(N(function(e){function t(){e.call(this),this.state={instance:null}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){var e=t.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:e})},t.prototype.componentDidUpdate=function(e){null!==this.state.instance&&t.updateObject(this.state.instance,e,this.props)},t.prototype.componentWillUnmount=function(){t.unmountObject(this.state.instance,this.props)},t.prototype.render=function(){return r.a.createElement(C.Provider,{value:this.state.instance},this.props.children)},t.mountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n._events,s=new e(U(t,"options"));if(Object.keys(a).forEach(function(e){return x(s,e,a[e])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(s)}return $(null,o,s),s},t.updateObject=function(e,t,n){var o=k(n),r=o._events,a=o.instanceRef,s=k(t),i=s._events,c=s.instanceRef;if(B(n,"options")){var u=U(t,"options"),l=U(n,"options");u!==l&&e.options.set(l)}T(e,i,r),$(c,a,e)},t.unmountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n._events;null!==e&&(Object.keys(a).forEach(function(t){return F(e,t,a[t])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(e):r.remove&&"function"==typeof r.remove&&r.remove(e),$(o))},t}(r.a.Component),!0,["Clusterer"])),w(N(function(e){function t(){e.call(this),this.state={instance:null}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){var e=t.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:e})},t.prototype.componentDidUpdate=function(e){null!==this.state.instance&&t.updateObject(this.state.instance,e,this.props)},t.prototype.componentWillUnmount=function(){t.unmountObject(this.state.instance,this.props)},t.prototype.render=function(){return null},t.mountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n._events,s=U(t,"options"),i=U(t,"features"),c=U(t,"filter"),u=U(t,"objects"),l=U(t,"clusters"),p=new e(s);if(p.add(i||[]),p.setFilter(c),p.objects.options.set(u),p.clusters.options.set(l),Object.keys(a).forEach(function(e){return x(p,e,a[e])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(p);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(p)}return $(null,o,p),p},t.updateObject=function(e,t,n){var o=k(n),r=o._events,a=o.instanceRef,s=k(t),i=s._events,c=s.instanceRef;if(B(n,"options")){var u=U(t,"options"),l=U(n,"options");u!==l&&e.options.set(l)}if(B(n,"objects")){var p=U(t,"objects"),f=U(n,"objects");p!==f&&e.objects.options.set(f)}if(B(n,"clusters")){var m=U(t,"clusters"),d=U(n,"clusters");m!==d&&e.clusters.options.set(d)}if(B(n,"filter")){var h=U(t,"filter"),_=U(n,"filter");h!==_&&e.options.set(_)}if(B(n,"features")){var y=U(t,"features"),v=U(n,"features");y!==v&&(e.remove(y),e.add(v))}T(e,i,r),$(c,a,e)},t.unmountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n._events;null!==e&&(Object.keys(a).forEach(function(t){return F(e,t,a[t])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(e):r.remove&&"function"==typeof r.remove&&r.remove(e),$(o))},t}(r.a.Component),!0,["ObjectManager"])),function(e){function t(){e.call(this),this.state={instance:null}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){var e=this.props,n=e.name,o=e.ymaps,r=e.dangerZone,a=t.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:a})},t.prototype.componentDidUpdate=function(e){null!==this.state.instance&&t.updateObject(this.state.instance,e,this.props)},t.prototype.componentWillUnmount=function(){t.unmountObject(this.state.instance,this.props)},t.prototype.render=function(){return null},t.mountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n._events,s=new e(U(t,"geometry"),U(t,"properties"),U(t,"options"));if(Object.keys(a).forEach(function(e){return x(s,e,a[e])}),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(s);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+t.name);r.add(s)}return $(null,o,s),s},t.updateObject=function(e,t,n){var o=k(n),r=o._events,a=o.instanceRef,s=k(t),i=s._events,c=s.instanceRef;if(B(n,"geometry")){var u=U(t,"geometry",{}),l=U(n,"geometry",{});Array.isArray(l)&&l!==u?Array.isArray(l[0])&&"number"==typeof l[1]?(e.geometry.setCoordinates(l[0]),e.geometry.setRadius(l[1])):e.geometry.setCoordinates(l):"object"==typeof l&&(l.coordinates!==u.coordinates&&e.geometry.setCoordinates(l.coordinates),l.radius!==u.radius&&e.geometry.setRadius(l.radius))}if(B(n,"properties")){var p=U(t,"properties"),f=U(n,"properties");p!==f&&e.properties.set(f)}if(B(n,"options")){var m=U(t,"options"),d=U(n,"options");m!==d&&e.options.set(d)}T(e,i,r),$(c,a,e)},t.unmountObject=function(e,t){var n=k(t),o=n.instanceRef,r=n.parent,a=n._events;null!==e&&(Object.keys(a).forEach(function(t){return F(e,t,a[t])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(e):r.remove&&"function"==typeof r.remove&&r.remove(e),$(o))},t}(r.a.Component)),G={modifyConstructor:function(e){function t(t,n,o){e.call(this,{geometry:t,properties:n},o)}return t.prototype=e.prototype,t}},V=(w(N(function(e){return r.a.createElement(W,Object.assign({},e,{name:"GeoObject",dangerZone:G}))},!0,["GeoObject"])),w(N(function(e){return r.a.createElement(W,Object.assign({},e,{name:"Circle"}))},!0,["Circle"])),w(N(function(e){return r.a.createElement(W,Object.assign({},e,{name:"Placemark"}))},!0,["Placemark"])));w(N(function(e){return r.a.createElement(W,Object.assign({},e,{name:"Polygon"}))},!0,["Polygon"])),w(N(function(e){return r.a.createElement(W,Object.assign({},e,{name:"Polyline"}))},!0,["Polyline"])),w(N(function(e){return r.a.createElement(W,Object.assign({},e,{name:"Rectangle"}))},!0,["Rectangle"]))}).call(this,n(6))},740:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(552),a=n(241),s=n(414),i=n(551),c=n(235),u=n(400),l=n(379);t.default=Object(l.a)(function(e){var t=e.properties,n=Object(o.useContext)(c.a),l=n.dictionary,p=Object(u.a)(t,"company",n.locale),f=Object(u.a)(t,"country",n.locale),m=Object(u.a)(t,"street",n.locale),d=Object(u.a)(t,"phone1"),h=Object(u.a)(t,"mail"),_=Number(Object(u.a)(t,"latitude")),y=Number(Object(u.a)(t,"longitude"));return o.createElement(a.a,null,o.createElement("div",{className:i.Contact},o.createElement("div",{className:i.Contact__title},l.contacts),o.createElement("div",{className:i.Contact__description},l.makeCallDescription),o.createElement("div",{className:i.Contact__content},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-6"},o.createElement("div",{className:i.AddressContainer},o.createElement("div",{className:i.Address},o.createElement("p",{className:i.Address__title},l.address),o.createElement("p",{className:i.Address__companyName},p),o.createElement("p",{className:i.Address__item},f),o.createElement("p",{className:i.Address__item},m)),o.createElement("div",{className:i.ContactItems},o.createElement("div",{className:i.ContactItems__item},o.createElement("div",{className:i.ContactItems__title},l.phone,":"),o.createElement("div",{className:i.ContactItems__content},d)),o.createElement("div",{className:i.ContactItems__item},o.createElement("div",{className:i.ContactItems__title},l.email,":"),o.createElement("div",{className:i.ContactItems__content},h))))),o.createElement("div",{className:"col-md-6"},o.createElement("div",{className:i.AskQuestion},o.createElement("p",{className:i.AskQuestion__title},l.askQuestion),o.createElement("div",{className:i.AskQuestion__form},o.createElement(s.a,null)))))),o.createElement("div",{className:i.Map},o.createElement("p",{className:i.Map__title},l.routeSchema),o.createElement(r.c,{query:{lang:n.locale.lang}},o.createElement(r.a,{defaultState:{center:[_,y],zoom:17},style:{width:"100%",height:"350px"}},o.createElement(r.b,{geometry:[_,y],properties:{iconContent:p},options:{preset:"islands#greenStretchyIcon",balloonCloseButton:!1,hideIconOnBalloonOpen:!1}}))))))})}}]);
//# sourceMappingURL=17.bundle.js.map