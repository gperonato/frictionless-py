(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),f=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=f(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=f(t),b=n,d=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return t?a.a.createElement(d,u(u({ref:r},l),{},{components:t})):a.a.createElement(d,u({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},67:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return f}));var n=t(3),a=t(7),o=(t(0),t(131)),i={title:"Buffer Tutorial",sidebar_label:"Buffer"},u={unversionedId:"tutorials/buffer-tutorial",id:"tutorials/buffer-tutorial",isDocsHomePage:!1,title:"Buffer Tutorial",description:"Frictionless supports loading bytes from memory",source:"@site/../docs/tutorials/buffer-tutorial.md",slug:"/tutorials/buffer-tutorial",permalink:"/docs/tutorials/buffer-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/buffer-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1612775205,sidebar_label:"Buffer",sidebar:"tutorials",previous:{title:"Tutorials Overview",permalink:"/docs/tutorials/tutorials-overview"},next:{title:"Local Tutorial",permalink:"/docs/tutorials/local-tutorial"}},c=[{value:"Reading Buffer Data",id:"reading-buffer-data",children:[]},{value:"Writing Buffer Data",id:"writing-buffer-data",children:[]},{value:"Configuring Buffer Data",id:"configuring-buffer-data",children:[]}],l={toc:c};function f(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless supports loading bytes from memory"),Object(o.b)("h2",{id:"reading-buffer-data"},"Reading Buffer Data"),Object(o.b)("p",null,"You can read Buffer Data using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(b'id,name\\n1,english\\n2,german', format='csv')\nprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', 'german')])]\n")),Object(o.b)("h2",{id:"writing-buffer-data"},"Writing Buffer Data"),Object(o.b)("p",null,"The same is actual for writing Buffer Data:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write(scheme='buffer', format='csv')\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"b'id,name\\r\\n1,english\\r\\n2,german\\r\\n'\n")),Object(o.b)("h2",{id:"configuring-buffer-data"},"Configuring Buffer Data"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"BufferControl"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://frictionlessdata.io/tooling/python/controls-reference/#buffer"},"Buffer Control"))))}f.isMDXComponent=!0}}]);