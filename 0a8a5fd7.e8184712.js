(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(131)),l={title:"Migration Guide"},o={unversionedId:"guides/migration-guide",id:"guides/migration-guide",isDocsHomePage:!1,title:"Migration Guide",description:"Frictionless Framework requires Python3.6+",source:"@site/../docs/guides/migration-guide.md",slug:"/guides/migration-guide",permalink:"/docs/guides/migration-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/migration-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1612265492,sidebar:"guides",previous:{title:"Extension Guide",permalink:"/docs/guides/extension-guide"}},c=[{value:"From goodtables",id:"from-goodtables",children:[{value:"Validate",id:"validate",children:[]},{value:"Report",id:"report",children:[]}]},{value:"From datapackage",id:"from-datapackage",children:[{value:"Package",id:"package",children:[]},{value:"Resource",id:"resource",children:[]}]},{value:"From tableschema",id:"from-tableschema",children:[{value:"Schema",id:"schema",children:[]},{value:"Field",id:"field",children:[]}]},{value:"From tabulator",id:"from-tabulator",children:[{value:"Table",id:"table",children:[]}]}],b={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Frictionless Framework requires Python3.6+")),Object(i.b)("p",null,"Frictionless is a logical continuation of many currently existing packages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"goodtables"),Object(i.b)("li",{parentName:"ul"},"datapackage"),Object(i.b)("li",{parentName:"ul"},"tableschema"),Object(i.b)("li",{parentName:"ul"},"tableschema-drivers"),Object(i.b)("li",{parentName:"ul"},"tabulator")),Object(i.b)("p",null,"Although, most of these packages will be supported going forward, you can migrate to Frictionless as it improves many aspects of working with data and metadata."),Object(i.b)("h2",{id:"from-goodtables"},"From goodtables"),Object(i.b)("p",null,"Frictionless provides the ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless validate")," function which is in high-level exactly the same as ",Object(i.b)("inlineCode",{parentName:"p"},"goodtables validate"),". Also ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless describe")," is an improved version of ",Object(i.b)("inlineCode",{parentName:"p"},"goodtables init"),". You instead need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless")," command instead of the ",Object(i.b)("inlineCode",{parentName:"p"},"goodtables")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Before\n$ goodtables validate table.csv\n# After\n$ frictionless validate table.csv\n")),Object(i.b)("p",null,"The Python interface is also mostly identical:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Before\nreport = goodtables.validate('table.csv')\n# After\nreport = frictionless.validate('table.csv')\n")),Object(i.b)("p",null,"Please read the following sections and use ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless validate --help")," to learn what is the difference in the options and in report's properties."),Object(i.b)("h3",{id:"validate"},"Validate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'a schema is inferred by default (use "Infer Options" and "Schema Options" to manage)'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"order_fields")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"sync_schema"),' (see "Schema Options")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"checks")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"pick/skip_errors")," and ",Object(i.b)("inlineCode",{parentName:"li"},"extra_checks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"error_limit")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"limit_errors"),' (see "Errors Options")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"row_limit")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"query"),' (see "Table Query)'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preset")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"source_type"))),Object(i.b)("h3",{id:"report"},"Report"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"all the properties now are camelCased instead of being lower-cased"),Object(i.b)("li",{parentName:"ul"},'various error code changes (see "Errors Reference")'),Object(i.b)("li",{parentName:"ul"},"errors now have both row position and row number"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"row-number")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"rowPosition")),Object(i.b)("li",{parentName:"ul"},"high-level ",Object(i.b)("inlineCode",{parentName:"li"},"warnings")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"errors"))),Object(i.b)("h2",{id:"from-datapackage"},"From datapackage"),Object(i.b)("p",null,"Frictionless has ",Object(i.b)("inlineCode",{parentName:"p"},"Resource")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Package")," classes which is almost the same as ",Object(i.b)("inlineCode",{parentName:"p"},"datapackage"),' has. There are a lot of improvements for working with metadata described in the "Describing Data" guide.'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Before\nresource = datapackage.Resource('resource.json')\npackage = datapackage.Package('package.json')\n# After\nresource = frictionless.Resource('resource.json')\npackage = frictionless.Package('package.json')\n")),Object(i.b)("h3",{id:"package"},"Package"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"added YAML support"),Object(i.b)("li",{parentName:"ul"},"the Package object is now a dict"),Object(i.b)("li",{parentName:"ul"},"there is no ",Object(i.b)("inlineCode",{parentName:"li"},"package.descriptor")," anymore"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use keyword arguments in the constructor"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use attribute setters to update a package"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"package.save")," is replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"package.to_json"))),Object(i.b)("h3",{id:"resource"},"Resource"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"added YAML support"),Object(i.b)("li",{parentName:"ul"},"the Resource object is now a dict"),Object(i.b)("li",{parentName:"ul"},"there is no ",Object(i.b)("inlineCode",{parentName:"li"},"resource.descriptor")," anymore"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use keyword arguments in the constructor"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use attribute setters to update a resource"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource.save")," is replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"**resource**.to_json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource.read")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"resource.read_data/rows")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource.iter")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"resource.stream_data/rows")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource.raw_read")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"resource.read_bytes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource.raw_iter")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"resource.stream_bytes"))),Object(i.b)("h2",{id:"from-tableschema"},"From tableschema"),Object(i.b)("p",null,"Frictionless has ",Object(i.b)("inlineCode",{parentName:"p"},"Schema")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Fields")," classes which is almost the same as ",Object(i.b)("inlineCode",{parentName:"p"},"tableschema"),' has. There are a lot of improvements for working with metadata described in the "Describing Data" guide.'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Before\nschema = tableschema.Schema('schema.json')\nfield = tableschema.Field('field.json')\n# After\nschema = frictionless.Schema('schema.json')\nfield = frictionless.Field('field.json')\n")),Object(i.b)("h3",{id:"schema"},"Schema"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"added YAML support"),Object(i.b)("li",{parentName:"ul"},"the Package object is now a dict"),Object(i.b)("li",{parentName:"ul"},"there is no ",Object(i.b)("inlineCode",{parentName:"li"},"schema.descriptor")," anymore"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use keyword arguments in the constructor"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use attribute setters to update a schema"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schema.save")," is replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"schema.to_json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schema.cast_row")," is replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"schema.read_data"))),Object(i.b)("h3",{id:"field"},"Field"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"added YAML support"),Object(i.b)("li",{parentName:"ul"},"the Resource object is now a dict"),Object(i.b)("li",{parentName:"ul"},"there is no ",Object(i.b)("inlineCode",{parentName:"li"},"resource.descriptor")," anymore"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use keyword arguments in the constructor"),Object(i.b)("li",{parentName:"ul"},"it's now possible to use attribute setters to update a resource"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"field.save")," is replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"field.to_json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"field.cast_value")," is replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"field.read_cell"))),Object(i.b)("h2",{id:"from-tabulator"},"From tabulator"),Object(i.b)("p",null,"Frictionless has ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," class which is an equivalent of the tabulator's ",Object(i.b)("inlineCode",{parentName:"p"},"Stream")," class."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Before\nwith tabulator.Stream('table.csv') as stream:\n  print(stream.read())\n# After\nwith frictionless.Table('table.csv') as table:\n  print(table.read_rows())\n")),Object(i.b)("h3",{id:"table"},"Table"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the Table class now always infers ",Object(i.b)("inlineCode",{parentName:"li"},"table.schema")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.read")," was replace by ",Object(i.b)("inlineCode",{parentName:"li"},"table.read_data/rows")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.iter")," was replaced by ",Object(i.b)("inlineCode",{parentName:"li"},"table.data/row_stream")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.hash/size")," was replaced by the ",Object(i.b)("inlineCode",{parentName:"li"},"table.stats")," property"),Object(i.b)("li",{parentName:"ul"},'various changes in the constructor options (see "Extracting Data")')))}s.isMDXComponent=!0}}]);