(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(131)),l={title:"Local Tutorial",sidebar_label:"Local"},i={unversionedId:"tutorials/local-tutorial",id:"tutorials/local-tutorial",isDocsHomePage:!1,title:"Local Tutorial",description:"You can read and write files locally with Frictionless. It's basic functionality.",source:"@site/../docs/tutorials/local-tutorial.md",slug:"/tutorials/local-tutorial",permalink:"/docs/tutorials/local-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/local-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1612265441,sidebar_label:"Local",sidebar:"tutorials",previous:{title:"Filelike Tutorial",permalink:"/docs/tutorials/filelike-tutorial"},next:{title:"Multipart Tutorial",permalink:"/docs/tutorials/multipart-tutorial"}},c=[{value:"Reading Local Data",id:"reading-local-data",children:[]},{value:"Writing Local Data",id:"writing-local-data",children:[]},{value:"Configuring Local Data",id:"configuring-local-data",children:[]}],u={toc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can read and write files locally with Frictionless. It's basic functionality."),Object(o.b)("h2",{id:"reading-local-data"},"Reading Local Data"),Object(o.b)("p",null,"You can read using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(path='data/table.csv')\nprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(o.b)("h2",{id:"writing-local-data"},"Writing Local Data"),Object(o.b)("p",null,"The same is actual for writing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.csv')\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"!cat tmp/table.csv\n")),Object(o.b)("h2",{id:"configuring-local-data"},"Configuring Local Data"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"LocalControl"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/controls-reference/#local"}),"Local Control"))))}s.isMDXComponent=!0},131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return r?n.a.createElement(f,i(i({ref:t},u),{},{components:r})):n.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);