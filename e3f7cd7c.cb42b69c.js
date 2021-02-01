(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(131)),c={title:"CSV Tutorial",sidebar_label:"CSV"},o={unversionedId:"tutorials/csv-tutorial",id:"tutorials/csv-tutorial",isDocsHomePage:!1,title:"CSV Tutorial",description:"CSV is a file format which you can you in Frictionless for reading and writing. Arguable it's the main Open Data format so it's supported very well in Frictionless.",source:"@site/../docs/tutorials/csv-tutorial.md",slug:"/tutorials/csv-tutorial",permalink:"/docs/tutorials/csv-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/csv-tutorial.md",version:"current",lastUpdatedBy:"thill-odi",lastUpdatedAt:1612161407,sidebar_label:"CSV",sidebar:"tutorials",previous:{title:"CKAN Tutorial",permalink:"/docs/tutorials/ckan-tutorial"},next:{title:"Excel Tutorial",permalink:"/docs/tutorials/excel-tutorial"}},l=[{value:"Reading CSV",id:"reading-csv",children:[]},{value:"Writing CSV",id:"writing-csv",children:[]},{value:"Configuring CSV",id:"configuring-csv",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"CSV is a file format which you can you in Frictionless for reading and writing. Arguable it's the main Open Data format so it's supported very well in Frictionless."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"! cat data/table.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"id,name\n1,english\n2,\u4e2d\u56fd\u4eba\n")),Object(i.b)("h2",{id:"reading-csv"},"Reading CSV"),Object(i.b)("p",null,"You can read this format using ",Object(i.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(path='data/table.csv')\nprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(i.b)("h2",{id:"writing-csv"},"Writing CSV"),Object(i.b)("p",null,"The same is actual for writing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.csv')\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"'tmp/table.csv'\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"!cat tmp/table.csv\n")),Object(i.b)("h2",{id:"configuring-csv"},"Configuring CSV"),Object(i.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\nfrom frictionless.plugins.csv import CsvDialect\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.csv', dialect=CsvDialect(delimiter=';'))\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"'tmp/table.csv'\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"!cat tmp/table.csv\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/formats-reference/#csv"}),"CSV Dialect"))))}u.isMDXComponent=!0},131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);