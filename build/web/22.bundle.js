(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{234:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r});var a=[{key:"ru",lang:"ru_RU",name:"RU",title:"Русский"},{key:"en",lang:"en_US",name:"EN",title:"Английский"}],r=a[0]},235:function(e,n,t){"use strict";var a=t(0),r=t(234),i=t(505),o=t.n(i),s={ru:{stands:"Стенды",equipments:"Оборудование",news:"Новости",contacts:"Контакты",address:"Адрес",mainTitle:"Путь к успешному будущему",mainDescription:"Проектирование, дизайн и строительство стендов",makeCall:"Заказать звонок",makeCallDescription:"Мы рады будем помочь Вам по любому любому возникающему Вам вопросу.",askQuestion:"Задайте вопрос",routeSchema:"Схема проезда",engineering:"Проектирование",design:"Дизайн",building:"Строительство",engineeringDescription:"\n        Мы можем предложить как стандартную комплектацию стендов,\n        которые позволяют подготовиться к участию за несколько дней,\n        а также разаработать индивидуальный проект исходя из бюджета\n        и пожеланий",designDescription:"\n        Стенды украшаются различной полиграфической продукцией:\n        печтатью полотен, наклейками различного вида исполнения,\n        баннерами, растяжками, разрабатывается система освещения ",buildingDescription:"\n        Профессиональная команда устанавливает стенд,\n        обеспечивая его электроснабжением и водоснабжением.\n        Стенд собирается в помещении выставки незадолго до ее начала.",partners:"Партнеры",aboutCompany:"О компании",latestWork:"Последний работы",seeAllCollection:"Смотреть всю коллекцию...",readMore:"Читать...",readAlso:"Читайте также",buildingStands:"Строительтство стендов",fullingStands:"Наполнение стендов",designStands:"Оформление стендов",electricityStands:"Энергосбережение и освещение",presentationAndSeminars:"Презентации, семинары",firstName:"Имя",lastName:"Фамилия",phone:"Телефон",company:"Компания",email:"Email",message:"Текст сообщения",send:"Отправить",makeOrderMessageSuccess:"Спасибо за проявленный интерес к нам. Мы обязательно ответим на все возникающие вопросы. Наш представитель свяжется с Вами в ближайшее время.",year:"лет",phoneContraction:"тел.",emailContraction:"email"},en:{stands:"Stands",equipments:"Equipment",news:"News",contacts:"Contacts",address:"Address",mainTitle:"The way to success future",mainDescription:"Project, design and building exhibition stands",makeCall:"Order call",makeCallDescription:"We will be happy to help you with any question you may have.",askQuestion:"Ask question",routeSchema:"Driving direction",engineering:"Engineering",design:"Design",building:"Building",engineeringDescription:"\n         We can offer as a standard set of stands, \n         which allow you to prepare for participation in a few days,\n         and also develop an individual project based on the budget\n         and wishes",designDescription:"\n         Stands are decorated with various printing products:\n         by printing canvases, stickers of various types of designs,\n         banners, banners, lighting system is being developed",buildingDescription:"\n         A professional team sets up a stand,\n         providing it with electricity and water supply.\n         The stand is assembled at the exhibition premises shortly before its start.",partners:"Partners",aboutCompany:"About company",latestWork:"The latest work",seeAllCollection:"See all collection...",readMore:"Read...",readAlso:"Read also",buildingStands:"Construction elements",fullingStands:"Furniture for rent",designStands:"Stand decoration",electricityStands:"Electrical equipment",presentationAndSeminars:"Presentations, workshops",firstName:"First name",lastName:"Last name",phone:"Phone",company:"Company",email:"Email",message:"Message",send:"Send",makeOrderMessageSuccess:"Thank you for interest. Our manager will call you back as soon as possible.",year:"year",phoneContraction:"phone",emailContraction:"email"}};t.d(n,"a",function(){return l});var u={locale:r.a,changeLocale:function(e){},dictionary:new o.a(s)};console.log("JMKSHJKDHASKJHDJKSAHDJKSHJKD",s,u.dictionary.stands);var l=Object(a.createContext)(u);n.b=function(e){var n=e.children,t=Object(a.useState)(r.a),i=t[0],o=t[1];return a.createElement(l.Provider,{value:{locale:i,changeLocale:function(e){u.dictionary.setLanguage(e.key),o(e)},dictionary:u.dictionary}},n)}},415:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return s});var a=t(236),r=t.n(a).a.create({baseURL:window.location.origin}),i="properties";function o(){return r.get("/api/"+i)}function s(e){return r.put("/api/"+i,e)}},505:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=o(t(0)),i=o(t(506));function o(e){return e&&e.__esModule?e:{default:e}}var s=/(\{[\d|\w]+\})/;i.default.prototype.formatString=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];var o=!1,u=(e||"").split(s).filter(function(e){return!!e}).map(function(e,n){if(e.match(s)){var i=e.slice(1,-1),u=t[i];if(null==u){var l=t[0][i];if(void 0===l)return u;u=l}return r.default.isValidElement(u)?(o=!0,r.default.Children.toArray(u).map(function(e){return a({},e,{key:n.toString()})})):u}return e});return o?u:u.join("")},n.default=i.default},506:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(507));var u=/(\{[\d|\w]+\})/,l=/(\$ref\{[\w|.]+\})/,c=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),"function"==typeof t&&(t={customLanguageInterface:t}),this._opts=i({},{customLanguageInterface:s.getInterfaceLanguage,pseudo:!1,pseudoMultipleLanguages:!1,logsEnabled:!0},t),this._interfaceLanguage=this._opts.customLanguageInterface(),this._language=this._interfaceLanguage,this.setContent(n)}return o(e,[{key:"setContent",value:function(e){var n=this,t=Object.keys(e),a=r(t,1)[0];this._defaultLanguage=a,this._defaultLanguageFirstLevelKeys=[],this._props=e,s.validateTranslationKeys(Object.keys(e[this._defaultLanguage])),Object.keys(this._props[this._defaultLanguage]).forEach(function(e){"string"==typeof n._props[n._defaultLanguage][e]&&n._defaultLanguageFirstLevelKeys.push(e)}),this.setLanguage(this._interfaceLanguage),this._opts.pseudo&&this._pseudoAllValues(this._props)}},{key:"_pseudoAllValues",value:function(e){var n=this;Object.keys(e).forEach(function(t){if("object"===a(e[t]))n._pseudoAllValues(e[t]);else if("string"==typeof e[t]){if(0===e[t].indexOf("[")&&e[t].lastIndexOf("]")===e[t].length-1)return;for(var r=e[t].split(" "),i=0;i<r.length;i+=1)if(r[i].match(u));else if(r[i].match(l));else{var o=r[i].length;n._opts.pseudoMultipleLanguages&&(o=parseInt(1.4*o,10)),r[i]=s.randomPseudo(o)}e[t]="["+r.join(" ")+"]"}})}},{key:"setLanguage",value:function(e){var n=this,t=s.getBestMatchingLanguage(e,this._props),a=Object.keys(this._props)[0];if(this._language=t,this._props[t]){for(var r=0;r<this._defaultLanguageFirstLevelKeys.length;r+=1)delete this[this._defaultLanguageFirstLevelKeys[r]];var o=i({},this._props[this._language]);Object.keys(o).forEach(function(e){n[e]=o[e]}),a!==this._language&&(o=this._props[a],this._fallbackValues(o,this))}}},{key:"_fallbackValues",value:function(e,n){var t=this;Object.keys(e).forEach(function(a){Object.prototype.hasOwnProperty.call(e,a)&&!n[a]&&""!==n[a]?(n[a]=e[a],t._opts.logsEnabled&&console.log("🚧 👷 key '"+a+"' not found in localizedStrings for language "+t._language+" 🚧")):"string"!=typeof n[a]&&t._fallbackValues(e[a],n[a])})}},{key:"getLanguage",value:function(){return this._language}},{key:"getInterfaceLanguage",value:function(){return this._interfaceLanguage}},{key:"getAvailableLanguages",value:function(){var e=this;return this._availableLanguages||(this._availableLanguages=[],Object.keys(this._props).forEach(function(n){e._availableLanguages.push(n)})),this._availableLanguages}},{key:"formatString",value:function(e){for(var n=this,t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var i=e||"";"string"==typeof i&&(i=this.getString(e,null,!0)||i);var o=i.split(l).filter(function(e){return!!e}).map(function(t){if(t.match(l)){var a=t.slice(5,-1),r=n.getString(a);return r||(n._opts.logsEnabled&&console.log("No Localization ref found for '"+t+"' in string '"+e+"'"),"$ref(id:"+a+")")}return t}).join("");return o.split(u).filter(function(e){return!!e}).map(function(e){if(e.match(u)){var n=e.slice(1,-1),t=a[n];if(void 0===t){var r=a[0][n];if(void 0===r)return t;t=r}return t}return e}).join("")}},{key:"getString",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{for(var a=this._props[n||this._language],r=e.split("."),i=0;i<r.length;i+=1){if(void 0===a[r[i]])throw Error(r[i]);a=a[r[i]]}return a}catch(a){!t&&this._opts.logsEnabled&&console.log("No localization found for key '"+e+"' and language '"+n+"', failed on "+a.message)}return null}},{key:"getContent",value:function(){return this._props}}]),e}();n.default=c},507:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getInterfaceLanguage=function(){if("undefined"==typeof navigator)return"en-US";var e=navigator;if(e){if(e.language)return e.language;if(e.languages&&e.languages[0])return e.languages[0];if(e.userLanguage)return e.userLanguage;if(e.browserLanguage)return e.browserLanguage}return"en-US"},n.getBestMatchingLanguage=function(e,n){if(n[e])return e;var t=e.indexOf("-"),a=t>=0?e.substring(0,t):e;return n[a]?a:Object.keys(n)[0]},n.validateTranslationKeys=function(e){var n=["_interfaceLanguage","_language","_defaultLanguage","_defaultLanguageFirstLevelKeys","_props"];e.forEach(function(e){if(-1!==n.indexOf(e))throw new Error(e+" cannot be used as a key. It is a reserved word.")})},n.randomPseudo=function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a+=1)n+=t.charAt(Math.floor(Math.random()*t.length));return n}},753:function(e,n,t){"use strict";t.r(n);var a=t(9),r=t(0),i=t(33),o=t(235),s=Object(r.lazy)(function(){return t.e(34).then(t.bind(null,746))}),u=function(e,n,t,i){return r.createElement(a.b,{path:e,render:function(){return r.createElement(s,{domainPath:e,tableName:n,RowsRenderer:t,RowRenderer:i})}})},l=t(415),c=t(18),f=t(116);var g=Object(r.lazy)(function(){return Promise.all([t.e(1),t.e(2),t.e(7),t.e(0),t.e(11)]).then(t.bind(null,748))}),d=Object(r.lazy)(function(){return Promise.all([t.e(2),t.e(7),t.e(0),t.e(17)]).then(t.bind(null,740))}),p=Object(r.lazy)(function(){return Promise.all([t.e(1),t.e(0),t.e(16)]).then(t.bind(null,741))}),h=Object(r.lazy)(function(){return Promise.all([t.e(1),t.e(0),t.e(15)]).then(t.bind(null,742))}),y=Object(r.lazy)(function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,743))}),b=Object(r.lazy)(function(){return Promise.all([t.e(5),t.e(12),t.e(0),t.e(23)]).then(t.bind(null,744))}),m=Object(r.lazy)(function(){return Promise.all([t.e(1),t.e(5),t.e(0),t.e(19)]).then(t.bind(null,745))});n.default=Object(i.b)()(function(e){return Object(r.useEffect)(function(){e.dispatch(Object(c.b)(f.a,l.a().then(function(e){return e.data})))},[]),r.createElement(o.b,null,r.createElement(a.d,null,r.createElement(a.b,{path:"/",exact:!0,component:g}),r.createElement(a.b,{path:"/contact",component:d}),r.createElement(a.b,{path:"/portfolio",component:m}),u("/news","news",p,h),u("/equipments/buildingStands","buildingStands",y,b),u("/equipments/fullingStands","fullingStands",y,b),u("/equipments/design","design",y,b),u("/equipments/electricity","electricity",y,b),u("/equipments/presentations","presentations",y,b)))})}}]);
//# sourceMappingURL=22.bundle.js.map