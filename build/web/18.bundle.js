(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{239:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(e,t,n){if(!e||!e.cells)return"";var i=e.cells.find(function(e){return e.header.internalName===t});return n?i&&i.value&&i.value[n.key]||"":i&&i.value||""}},241:function(e,t,n){"use strict";var i=n(0),a=n(386),r=n(380),o=n(379);n(242);t.a=Object(o.a)(function(e){var t=e.children,n=e.properties,o=Object(i.useState)(!0),l=o[0],s=o[1];return i.createElement(i.Fragment,null,i.createElement(a.a,{toggleScrollWrapper:function(e){s(void 0===e?!l:e)},isSecondary:!0,className:"header_static",properties:n}),i.createElement("div",{className:"wrapper",style:{overflowY:l?"visible":"hidden"}},i.createElement("div",{className:"content"},i.createElement("div",{className:"secondary-content container"},t)),i.createElement(r.a,{properties:n})))})},242:function(e,t,n){},372:function(e,t){e.exports=function(e,t,n,i){var a=n?n.call(i,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<r.length;s++){var c=r[s];if(!l(c))return!1;var u=e[c],p=t[c];if(!1===(a=n?n.call(i,u,p,c):void 0)||void 0===a&&u!==p)return!1}return!0}},373:function(e,t,n){(function(t){for(var i=n(374),a="undefined"==typeof window?t:window,r=["moz","webkit"],o="AnimationFrame",l=a["request"+o],s=a["cancel"+o]||a["cancelRequest"+o],c=0;!l&&c<r.length;c++)l=a[r[c]+"Request"+o],s=a[r[c]+"Cancel"+o]||a[r[c]+"CancelRequest"+o];if(!l||!s){var u=0,p=0,d=[];l=function(e){if(0===d.length){var t=i(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},s=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(a,e)},e.exports.cancel=function(){s.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=l,e.cancelAnimationFrame=s}}).call(this,n(6))},374:function(e,t,n){(function(t){(function(){var n,i,a,r,o,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},i=t.hrtime,r=(n=function(){var e;return 1e9*(e=i())[0]+e[1]})(),l=1e9*t.uptime(),o=r-l):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(10))},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=t>=e?"down":"up",r=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:a,distanceScrolled:r}:t<=n.pinStart&&"unfixed"!==i.state?{action:"unfix",scrollDirection:a,distanceScrolled:r}:t<=i.height&&"down"===a&&"unfixed"===i.state?{action:"none",scrollDirection:a,distanceScrolled:r}:t>i.height+n.pinStart&&"down"===a&&"unfixed"===i.state?{action:"unpin-snap",scrollDirection:a,distanceScrolled:r}:"down"===a&&["pinned","unfixed"].indexOf(i.state)>=0&&t>i.height+n.pinStart&&r>n.downTolerance?{action:"unpin",scrollDirection:a,distanceScrolled:r}:"up"===a&&r>n.upTolerance&&["pinned","unfixed"].indexOf(i.state)<0?{action:"pin",scrollDirection:a,distanceScrolled:r}:"up"===a&&t<=i.height&&["pinned","unfixed"].indexOf(i.state)<0?{action:"pin",scrollDirection:a,distanceScrolled:r}:{action:"none",scrollDirection:a,distanceScrolled:r}}},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),o=p(r),l=p(n(8)),s=p(n(372)),c=p(n(373)),u=p(n(375));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var f=function(){},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner?n.inner.offsetHeight:""}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,i=n.getScrollerPhysicalHeight(),a=n.getScrollerHeight();return t||e+i>a},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,c.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,c.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},n.unpinSnap=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned headroom-disable-animation",animation:!1,state:"unpinned"})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1,state:"unfixed"})},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,u.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state).action;"pin"===e?n.pin():"unpin"===e?n.unpin():"unpin-snap"===e?n.unpinSnap():"unfix"===e&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"componentWillReceiveProps",value:function(e){e.disable&&!this.props.disable?(this.unfix(),this.props.parent().removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)):!e.disable&&this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,s.default)(this.props,e)||!(0,s.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setHeightOffset()}},{key:"componentWillUnmount",value:function(){this.props.parent().removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=d(e,["className"]);delete n.onUnpin,delete n.onPin,delete n.onUnfix,delete n.disableInlineStyles,delete n.disable,delete n.parent,delete n.children,delete n.upTolerance,delete n.downTolerance,delete n.pinStart,delete n.calcHeightOnResize;var a=n.style,r=n.wrapperStyle,l=d(n,["style","wrapperStyle"]),s={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},c=this.state.className;this.state.animation&&(s=i({},s,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),c+=" headroom--scrolled"),s=this.props.disableInlineStyles?a:i({},s,a);var u=i({},r,{height:this.state.height?this.state.height:null}),p=t?t+" headroom-wrapper":"headroom-wrapper";return o.default.createElement("div",{style:u,className:p},o.default.createElement("div",i({ref:this.setRef},l,{style:s,className:c}),this.props.children))}}]),t}();h.propTypes={className:l.default.string,parent:l.default.func,children:l.default.any.isRequired,disableInlineStyles:l.default.bool,disable:l.default.bool,upTolerance:l.default.number,downTolerance:l.default.number,onPin:l.default.func,onUnpin:l.default.func,onUnfix:l.default.func,wrapperStyle:l.default.object,pinStart:l.default.number,style:l.default.object,calcHeightOnResize:l.default.bool},h.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,upTolerance:5,downTolerance:0,onPin:f,onUnpin:f,onUnfix:f,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0},t.default=h},555:function(e,t,n){e.exports={Equipments:"Equipments___8iPeI",Equipments__nav:"Equipments__nav___3NLVr",Navigation:"Navigation___3NKpA",Navigation__item:"Navigation__item___AsJ40",Navigation__link:"Navigation__link___GY0wO",Navigation__link_active:"Navigation__link_active___1qcNG",Equipment:"Equipment___2X3qJ",Equipment__img:"Equipment__img___FZvvQ",Equipment__link:"Equipment__link___tnuKh"}},743:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(67),r=n.n(a),o=n(241),l=n(239),s=n(235),c=n(68),u=n(555),p=[{url:"/equipments/buildingStands",title:"buildingStands"},{url:"/equipments/fullingStands",title:"fullingStands"},{url:"/equipments/design",title:"designStands"},{url:"/equipments/electricity",title:"electricityStands"},{url:"/equipments/presentations",title:"presentationAndSeminars"}];t.default=function(e){var t=e.rows,n=e.tableName,a=Object(i.useContext)(s.a),d=a.dictionary;return i.createElement(o.a,null,i.createElement("div",{className:u.Equipments},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-3"},i.createElement("div",{className:u.Equipments__nav},i.createElement("ul",{className:r()(u.Navigation)},p.map(function(e){return i.createElement("li",{className:u.Navigation__item},i.createElement(c.c,{to:e.url,className:u.Navigation__link,activeClassName:u.Navigation__link_active},d[e.title]))})))),i.createElement("div",{className:"col-md-9"},i.createElement("div",{className:"row"},t.map(function(e){var t=Object(l.a)(e,"title",a.locale),r=Object(l.a)(e,"image");return i.createElement("div",{className:"col-lg-4 col-md-6"},i.createElement("div",{className:u.Equipment},i.createElement("img",{src:r,className:u.Equipment__img}),i.createElement(c.b,{to:"/equipments/"+n+"/"+e._id,className:u.Equipment__link},t)))}))))))}}}]);
//# sourceMappingURL=18.bundle.js.map