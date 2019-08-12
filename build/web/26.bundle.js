(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{237:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function c(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function s(t,e,n){return Object.keys(t).reduce(function(e,r){var i=""+r;return e.has(i)?e.set(i,n(e.get(i),t[i])):e},e)}n.d(e,"a",function(){return j}),n.d(e,"b",function(){return A});var f=function(t){return function(e){return c(e)?e.get(t):e[t]}},h=function(){function t(t,e,n){if(void 0===e&&(e={}),void 0===n&&(n={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var r=n,i=r.idAttribute,o=void 0===i?"id":i,a=r.mergeStrategy,c=void 0===a?function(t,e){return u({},t,e)}:a,s=r.processStrategy,h=void 0===s?function(t){return u({},t)}:s;this._key=t,this._getId="function"==typeof o?o:f(o),this._idAttribute=o,this._mergeStrategy=c,this._processStrategy=h,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,n){var r,i=t[n];return u({},e,((r={})[n]=i,r))},this.schema||{})},e.getId=function(t,e,n){return this._getId(t,e,n)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.normalize=function(t,e,n,r,i,o){var u=this;if(o.some(function(e){return e===t}))return this.getId(t,e,n);o.push(t);var a=this._processStrategy(t,e,n);return Object.keys(this.schema).forEach(function(t){if(a.hasOwnProperty(t)&&"object"==typeof a[t]){var e=u.schema[t];a[t]=r(a[t],a,t,e,i,o)}}),i(this,a,t,e,n),this.getId(t,e,n)},e.denormalize=function(t,e){var n=this;return c(t)?s(this.schema,t,e):(Object.keys(this.schema).forEach(function(r){if(t.hasOwnProperty(r)){var i=n.schema[r];t[r]=e(t[r],i)}}),t)},i(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),l=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,n){return!this.isSingleSchema&&this._schemaAttribute(t,e,n)},e.inferSchema=function(t,e,n){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(t,e,n);return this.schema[r]},e.normalizeValue=function(t,e,n,r,i,o){var u=this.inferSchema(t,e,n);if(!u)return t;var a=r(t,e,n,u,i,o);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(t,e,n)}},e.denormalizeValue=function(t,e){var n=c(t)?t.get("schema"):t.schema;return this.isSingleSchema||n?e((c(t)?t.get("id"):t.id)||t,this.isSingleSchema?this.schema:this.schema[n]):t},i(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),b=function(t){function e(e,n){if(!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,n)||this}a(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,i,o){return this.normalizeValue(t,e,n,r,i,o)},n.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(l),m=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,i,o){var a=this;return Object.keys(t).reduce(function(e,n,c){var s,f=t[n];return null!=f?u({},e,((s={})[n]=a.normalizeValue(f,t,n,r,i,o),s)):e},{})},n.denormalize=function(t,e){var n=this;return Object.keys(t).reduce(function(r,i){var o,a=t[i];return u({},r,((o={})[i]=n.denormalizeValue(a,e),o))},{})},e}(l),y=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},d=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},p=function(t,e,n,r,i,o,u){return t=y(t),d(e).map(function(e,a){return i(e,n,r,t,o,u)})},g=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,i,o){var u=this;return d(t).map(function(t,a){return u.normalizeValue(t,e,n,r,i,o)}).filter(function(t){return null!=t})},n.denormalize=function(t,e){var n=this;return t&&t.map?t.map(function(t){return n.denormalizeValue(t,e)}):t},e}(l),v=function(t,e,n,r,i,o,a){var c=u({},e);return Object.keys(t).forEach(function(n){var r=t[n],u=i(e[n],e,n,r,o,a);null==u?delete c[n]:c[n]=u}),c},w=function(t,e,n){if(c(e))return s(t,e,n);var r=u({},e);return Object.keys(t).forEach(function(e){null!=r[e]&&(r[e]=n(r[e],t[e]))}),r},O=function t(e,n,r,i,o,u){return"object"==typeof e&&e?"object"!=typeof i||i.normalize&&"function"==typeof i.normalize?i.normalize(e,n,r,t,o,u):(Array.isArray(i)?p:v)(i,e,n,r,t,o,u):e},A={Array:g,Entity:h,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce(function(e,n){var r,i=t[n];return u({},e,((r={})[n]=i,r))},this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return v.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return w.apply(void 0,[this.schema].concat(e))},t}(),Union:b,Values:m},j=function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+typeof t+'".');var n={},r=function(t){return function(e,n,r,i,o){var u=e.key,a=e.getId(r,i,o);u in t||(t[u]={});var c=t[u][a];t[u][a]=c?e.merge(c,n):n}}(n);return{entities:n,result:O(t,t,null,e,r,[])}}},376:function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"a",function(){return h});var r=n(237),i=new r.b.Entity("headers",{},{idAttribute:"_id"}),o=new r.b.Array(i),u=new r.b.Entity("table",{headers:o},{idAttribute:"name"}),a=new r.b.Entity("cells",{type:i},{idAttribute:"_id"}),c=new r.b.Array(a),s=new r.b.Entity("rows",{cells:c},{idAttribute:"_id"}),f=new r.b.Array(s),h=(new r.b.Entity("table",{rows:f},{idAttribute:"name"}),new r.b.Entity("table",{rows:f,cells:c,headers:o},{idAttribute:"name"}))},385:function(t,e,n){"use strict";var r=n(236),i=n.n(r).a.create({baseURL:window.location.origin}),o="tables";var u=n(18),a=n(44),c=n(376),s=n(237);function f(t){return Object(u.b)(a.a,function(t){return i.get("/api/"+o+"/"+t)}(t).then(function(t){return Object(s.a)(t.data,c.a)}),{tableName:t})}function h(t,e){return Object(u.b)(a.b,function(t,e){return i.get("/api/"+o+"/"+t+"/rows/"+e)}(t,e).then(function(t){var e=Object(s.a)(t.data,c.a);return console.log("TEST",e),e}),{tableName:t})}n.d(e,"a",function(){return f}),n.d(e,"b",function(){return h})},688:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(25),o=n(385),u=n(33);e.default=Object(u.b)(function(t,e){return{rows:i.c(t,e.tableName),tableName:e.tableName}})(function(t){var e=t.RowsRenderer,n=t.dispatch,i=t.tableName,u=t.rows;return Object(r.useEffect)(function(){n(Object(o.a)(i))},[i]),console.log("TABLE NAME",i),r.createElement(e,{rows:u,tableName:i})})}}]);
//# sourceMappingURL=26.bundle.js.map