(window.webpackJsonp=window.webpackJsonp||[]).push([[13,82],{230:function(e,t,a){"use strict";a.r(t);a(31),a(23),a(24),a(65),a(285);var n=a(0),l=a.n(n),r=a(233),i=a(234),o=a(73),c=a(245),s=(a(25),a(83),a(1)),u=(a(81),a(239)),m=a.n(u),d=a(261),b=a(262),f=a(240),p=a(246),h=a(161),v=a.n(h);function k(e){var t=e.item,a=e.onItemClick,r=e.collapsible,i=t.items,o=t.href,c=t.label,u=t.type,d=Object(n.useState)(t.collapsed),b=d[0],h=d[1],v=Object(n.useState)(null),E=v[0],g=v[1];t.collapsed!==E&&(g(t.collapsed),h(t.collapsed));var _=Object(n.useCallback)((function(e){e.preventDefault(),h((function(e){return!e}))}));switch(u){case"category":return i.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":b}),key:c},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&!t.collapsed}),href:"#!",onClick:r?_:void 0},c),l.a.createElement("ul",{className:"menu__list"},i.map((function(e){return l.a.createElement(k,{key:e.label,item:e,onItemClick:a,collapsible:r})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:c},l.a.createElement(f.a,Object(s.a)({className:"menu__link",to:o},Object(p.a)(o)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),c))}}var E=function(e){var t=Object(n.useState)(!1),a=t[0],r=t[1],o=Object(i.a)(),c=o.siteConfig,u=(c=void 0===c?{}:c).themeConfig.navbar,p=(u=void 0===u?{}:u).title,h=u.hideOnScroll,E=void 0!==h&&h,g=o.isClient,_=Object(b.a)(),C=_.logoLink,w=_.logoLinkProps,N=_.logoImageUrl,y=_.logoAlt,O=e.docsSidebars,j=e.path,M=e.sidebar,S=e.sidebarCollapsible;if(Object(d.a)(a),!M)return null;var I=O[M];if(!I)throw new Error('Cannot find the sidebar "'+M+'" in the sidebar config!');return S&&I.forEach((function(e){return function e(t,a){var n=t.items,l=t.href;switch(t.type){case"category":var r=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!r,r;case"link":default:return l===a}}(e,j)})),l.a.createElement("div",{className:v.a.sidebar},E&&l.a.createElement(f.a,Object(s.a)({className:v.a.sidebarLogo,to:C},w),null!=N&&l.a.createElement("img",{key:g,src:N,alt:y}),null!=p&&l.a.createElement("strong",null,p)),l.a.createElement("div",{className:m()("menu","menu--responsive",v.a.menu,{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){r(!a)}},a?l.a.createElement("span",{className:m()(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},I.map((function(e){return l.a.createElement(k,{key:e.label,item:e,onItemClick:function(){r(!1)},collapsible:S})})))))},g=a(257),_=a(258),C=a(252),w=a(166),N=a.n(w);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(C.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,d=a.version,b=u[s.path],f=Object(i.a)(),p=f.siteConfig,h=(p=void 0===p?{}:p).themeConfig,v=void 0===h?{}:h,k=f.isClient,w=v.sidebarCollapsible,y=void 0===w||w;return 0===Object.keys(s).length?l.a.createElement(_.default,e):l.a.createElement(c.a,{version:d,key:k},l.a.createElement("div",{className:N.a.docPage},b&&l.a.createElement("div",{className:N.a.docSidebarContainer},l.a.createElement(E,{docsSidebars:m,path:s.path,sidebar:b,sidebarCollapsible:y})),l.a.createElement("main",{className:N.a.docMainContainer},l.a.createElement(r.a,{components:g.a},Object(o.a)(t.routes)))))}},258:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(245);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},285:function(e,t,a){"use strict";var n=a(5),l=a(43)(5),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n(n.P+n.F*r,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),a(85)("find")}}]);