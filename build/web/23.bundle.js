(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{239:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e,t,a){if(!e||!e.cells)return"";var n=e.cells.find(function(e){return e.header.internalName===t});return a?n&&n.value&&n.value[a.key]||"":n&&n.value||""}},241:function(e,t,a){"use strict";var n=a(0),r=a(386),l=a(380),c=a(379);a(242);t.a=Object(c.a)(function(e){var t=e.children,a=e.properties,c=Object(n.useState)(!0),i=c[0],o=c[1];return n.createElement(n.Fragment,null,n.createElement(r.a,{toggleScrollWrapper:function(e){o(void 0===e?!i:e)},isSecondary:!0,className:"header_static",properties:a}),n.createElement("div",{className:"wrapper",style:{overflowY:i?"visible":"hidden"}},n.createElement("div",{className:"content"},n.createElement("div",{className:"secondary-content container"},t)),n.createElement(l.a,{properties:a})))})},242:function(e,t,a){},669:function(e,t,a){e.exports={Equipment:"Equipment___3NGBj",Equipment__title:"Equipment__title___2GJpx",Equipment__descriptionContainer:"Equipment__descriptionContainer___3sqY3",Equipment__image:"Equipment__image___4CXow",GalleryWrapper:"GalleryWrapper___dVQev",Wrapper:"Wrapper___CVRNc",Gallery:"Gallery___2FZRL",Gallery__imgContainer:"Gallery__imgContainer___3atEx",Gallery__zoomBtn:"Gallery__zoomBtn___2WiUq"}},744:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(67),l=a.n(r),c=a(500),i=a(241),o=a(235),m=a(239),s=a(653),_=a.n(s),u=a(669);t.default=function(e){var t=Object(n.useContext)(o.a),a=Object(n.useState)(!1),r=a[0],s=a[1],p=Object(n.useState)(0),d=p[0],E=p[1],v=function(){return s(!r)},f=Object(m.a)(e.row,"title",t.locale),y=Object(m.a)(e.row,"image"),g=Object(m.a)(e.row,"image-gallery"),N=Object(m.a)(e.row,"text",t.locale),w=[y].concat(g||[]).map(function(e){return{photo:e,caption:""}});return console.log(w),n.createElement(i.a,null,n.createElement("div",{className:u.Equipment},n.createElement("span",{className:u.Equipment__title},f),n.createElement("div",{className:l()("row",u.Equipment__descriptionContainer)},n.createElement("div",{className:l()("col-md-8",u.Equipment__image)},n.createElement("div",{className:u.Wrapper},n.createElement("div",{className:u.GalleryWrapper},n.createElement(_.a,{className:u.Gallery,afterChange:E},w.map(function(e){return n.createElement("div",null,n.createElement("div",{className:u.Gallery__imgContainer,style:{backgroundImage:'url("'+e.photo+'")'}},n.createElement("button",{onClick:v,className:u.Gallery__zoomBtn})))}))))),n.createElement("div",{className:"col-md-4"},n.createElement("div",{dangerouslySetInnerHTML:{__html:N}}))),n.createElement(c.a,{show:r,onClose:v,activePhotoIndex:d,photos:w})))}}}]);
//# sourceMappingURL=23.bundle.js.map