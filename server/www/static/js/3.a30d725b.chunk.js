webpackJsonp([3],{1017:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n.n(i),c=n(1597),u=n(1054),l=n(1057),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sigin-page"},s.a.createElement(u.a,null),s.a.createElement(c.a,null),s.a.createElement(l.a,null))}}]),t}(i.Component);t.default=p},1020:function(e,t,n){"use strict";function r(e){return"[object Array]"===O.call(e)}function o(e){return"[object ArrayBuffer]"===O.call(e)}function a(e){return"undefined"!==typeof FormData&&e instanceof FormData}function i(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"===typeof e}function c(e){return"number"===typeof e}function u(e){return"undefined"===typeof e}function l(e){return null!==e&&"object"===typeof e}function f(e){return"[object Date]"===O.call(e)}function p(e){return"[object File]"===O.call(e)}function m(e){return"[object Blob]"===O.call(e)}function d(e){return"[object Function]"===O.call(e)}function h(e){return l(e)&&d(e.pipe)}function g(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function v(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function E(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=E(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function w(e,t,n){return v(t,function(t,r){e[r]=n&&"function"===typeof t?x(t,n):t}),e}var x=n(1032),j=n(1065),O=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:j,isFormData:a,isArrayBufferView:i,isString:s,isNumber:c,isObject:l,isUndefined:u,isDate:f,isFile:p,isBlob:m,isFunction:d,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:b,forEach:v,merge:E,extend:w,trim:y}},1029:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(1020),a=n(1067),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n(1033):"undefined"!==typeof t&&(e=n(1033)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,n(365))},1032:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},1033:function(e,t,n){"use strict";var r=n(1020),o=n(1068),a=n(1070),i=n(1071),s=n(1072),c=n(1034),u="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n(1073);e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var m=new XMLHttpRequest,d="onreadystatechange",h=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in m||s(e.url)||(m=new window.XDomainRequest,d="onload",h=!0,m.onprogress=function(){},m.ontimeout=function(){}),e.auth){var g=e.auth.username||"",y=e.auth.password||"";p.Authorization="Basic "+u(g+":"+y)}if(m.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m[d]=function(){if(m&&(4===m.readyState||h)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in m?i(m.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?m.response:m.responseText,a={data:r,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:n,config:e,request:m};o(t,l,a),m=null}},m.onerror=function(){l(c("Network Error",e,null,m)),m=null},m.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var b=n(1074),v=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in m&&r.forEach(p,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:m.setRequestHeader(t,e)}),e.withCredentials&&(m.withCredentials=!0),e.responseType)try{m.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){m&&(m.abort(),l(e),m=null)}),void 0===f&&(f=null),m.send(f)})}},1034:function(e,t,n){"use strict";var r=n(1069);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},1035:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},1036:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},1054:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return e?l.a.createElement(p.k,null,l.a.createElement(p.k.Item,null,l.a.createElement(f.b,{to:"/send"},"\u53d1\u6587\u7ae0")),l.a.createElement(p.k.Item,null,l.a.createElement(f.b,{to:"/home"},"\u6211\u7684\u4e3b\u9875")),l.a.createElement(p.k.Item,null,l.a.createElement(f.b,{to:"/home"},"\u9000\u51fa"))):l.a.createElement(p.k,null,l.a.createElement(p.k.Item,null,l.a.createElement(f.b,{to:"/login"},"\u767b\u5f55")),l.a.createElement(p.k.Item,null,l.a.createElement(f.b,{to:"/signin"},"\u6ce8\u518c")))}function s(e){return{info:e.userReducer.info}}function c(e){return{actions:Object(m.b)({loginout:h.d},e)}}var u=n(0),l=n.n(u),f=n(363),p=n(202),m=n(96),d=n(203),h=n(364),g=n(1055),y=(n.n(g),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),b=function(e){function t(e){o.loginout(),p.t.success("\u60a8\u5df2\u9000\u51fa")}function n(e){console.log(e),p.t.error("\u53d6\u6d88\u9000\u51fa\u64cd\u4f5c")}var r=e.info||"",o=e.actions;return r?l.a.createElement(p.n,{type:"flex",justify:"end"},l.a.createElement(p.e,{className:"header-item"},l.a.createElement(f.b,{to:"/send"},"\u53d1\u6587\u7ae0")),l.a.createElement(p.e,{className:"header-item"},l.a.createElement(p.l,{title:"\u786e\u5b9a\u8981\u9000\u51fa\u5417?",onConfirm:t,onCancel:n,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88"},l.a.createElement("a",{href:":javascript:0;"},"\u9000\u51fa")))):l.a.createElement(p.n,{type:"flex",justify:"end"},l.a.createElement(p.e,{className:"header-item"},l.a.createElement(f.b,{to:"/login"},"\u767b\u9646")),l.a.createElement(p.e,{className:"header-item"},l.a.createElement(f.b,{to:"/signin"},"\u6ce8\u518c")))},v=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),y(t,[{key:"render",value:function(){var e=this.props.info||"",t=this.props.actions,n=i(e);return l.a.createElement("header",{className:"header-compopents"},l.a.createElement(p.n,null,l.a.createElement(p.e,{xs:20,sm:11,offset:1},l.a.createElement(p.n,{type:"flex",justify:"start"},l.a.createElement(p.e,{className:"header-item"},l.a.createElement(f.b,{to:"/home"},l.a.createElement(p.i,{type:"github"}))),l.a.createElement(p.e,{className:"header-item"},l.a.createElement(f.b,{to:"/"},"\u4e3b\u9875")))),l.a.createElement(p.e,{xs:0,sm:11},l.a.createElement(b,{info:e,actions:t})),l.a.createElement(p.e,{xs:3,sm:0},l.a.createElement(p.g,{overlay:n,trigger:["click"]},l.a.createElement("a",{className:"ant-dropdown-link",href:":javascript:0;"},l.a.createElement(p.i,{type:"bars"}))))))}}]),t}(u.Component);t.a=Object(d.b)(s,c)(v)},1055:function(e,t,n){var r=n(1056);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(1012)(r,o);r.locals&&(e.exports=r.locals)},1056:function(e,t,n){t=e.exports=n(1011)(void 0),t.push([e.i,".header-compopents {\n  width: 100%;\n  height: 52px;\n  will-change: transform;\n  transition: transform 200ms linear;\n  z-index: 99;\n  font-size: 16px;\n  box-shadow: none;\n  background: #FBFBFB;\n  color: #7a7a7a;\n  line-height: 52px; }\n  .header-compopents .header-item {\n    padding: 0rem .75rem; }\n    .header-compopents .header-item:hover {\n      color: #1f2d3d; }\n    .header-compopents .header-item .ant-dropdown-link {\n      font-size: 18px; }\n",""])},1057:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=n(363),u=n(202),l=n(1058),f=(n.n(l),n(1060)),p=n.n(f),m=n(1061),d=n.n(m),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),h(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"bottom"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement(u.n,null,s.a.createElement(u.e,{xs:0,sm:2}),s.a.createElement(u.e,{xs:24,sm:8},s.a.createElement("div",{className:"column is-4 has-text-left"},s.a.createElement("div",{className:"top is-clearfix"},s.a.createElement("a",{className:"logo-link is-pulled-left",href:"/"},s.a.createElement("img",{src:p.a,style:{width:"100px",height:"100px"},alt:"nodelover"})),s.a.createElement("div",{className:"site-info"},s.a.createElement("h4",{className:"title is-4"},"Luvxy"),s.a.createElement("p",null,s.a.createElement("small",null,"\u7231\u5c0f\u96e8\u771f\u662f\u592a\u597d\u4e86")))),s.a.createElement("ul",{className:"inline-block",style:{marginTop:"20px"}},s.a.createElement("li",null,s.a.createElement(c.b,{className:"link",to:"/about"},"\u5173\u4e8e\u6211")),s.a.createElement("li",null,s.a.createElement("a",{className:"link",href:"https://doc.react-china.org/"},"React")),s.a.createElement("li",null,s.a.createElement("a",{className:"link",href:"https://ant.design/index-cn"},"Ant.design")),s.a.createElement("li",null,s.a.createElement("a",{className:"link",href:"http://www.expressjs.com.cn/"},"Express"))))),s.a.createElement(u.e,{xs:24,sm:12},s.a.createElement("img",{className:"svg",src:d.a,alt:"\u652f\u6301\u5168\u8bbe\u5907"})),s.a.createElement(u.e,{xs:0,sm:2})))),s.a.createElement("small",{className:"backup-no container",style:{lineHeight:"2"}},"\u9102ICP\u590718000473\u53f7 ",s.a.createElement("br",null)," "))}}]),t}(i.Component);t.a=g},1058:function(e,t,n){var r=n(1059);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(1012)(r,o);r.locals&&(e.exports=r.locals)},1059:function(e,t,n){t=e.exports=n(1011)(void 0),t.push([e.i,"footer.bottom {\n  text-align: center;\n  font-size: 14px;\n  padding: 30px 10px 30px;\n  background: #fff; }\n  footer.bottom img {\n    max-width: 100%; }\n  footer.bottom .svg {\n    width: 50%; }\n  footer.bottom .container .columns .column {\n    padding: .75rem; }\n  footer.bottom .container .columns .has-text-left {\n    text-align: left !important; }\n  footer.bottom .container .out-link li {\n    margin-top: 10px; }\n  footer.bottom .container ul {\n    list-style: none; }\n    footer.bottom .container ul li {\n      display: inline-block;\n      margin-right: 1em; }\n  footer.bottom .container .is-pulled-left {\n    float: left !important; }\n  footer.bottom .container h4.title.is-4 {\n    padding-top: 18px; }\n  footer.bottom .container h4.title.is-4, footer.bottom .container h4.title.is-4 ~ p {\n    margin-bottom: 10px;\n    padding-left: 75px;\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.125;\n    word-break: break-word; }\n    footer.bottom .container h4.title.is-4 small, footer.bottom .container h4.title.is-4 ~ p small {\n      font-size: 12px;\n      color: #324057;\n      line-height: 1;\n      margin-right: 10px; }\n  footer.bottom .container a.link {\n    color: #1f2d3d;\n    border-bottom: 1px dotted #a1aab9;\n    padding: 0 0.2em;\n    border-radius: 2px; }\n  footer.bottom .container a.link:hover {\n    background: #a1aab9;\n    color: #fff; }\n  footer.bottom .container .backup-no {\n    padding-top: 2em;\n    display: block;\n    text-align: left; }\n",""])},1060:function(e,t,n){e.exports=n.p+"static/media/logo.a1d4270a.jpg"},1061:function(e,t,n){e.exports=n.p+"static/media/svg2.a5f8d157.svg"},1062:function(e,t,n){"use strict";var r=n(1063),o=n.n(r),a=o.a.create({baseURL:"//luvxy.cn"});t.a=a},1063:function(e,t,n){e.exports=n(1064)},1064:function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(1020),a=n(1032),i=n(1066),s=n(1029),c=r(s);c.Axios=i,c.create=function(e){return r(o.merge(s,e))},c.Cancel=n(1036),c.CancelToken=n(1080),c.isCancel=n(1035),c.all=function(e){return Promise.all(e)},c.spread=n(1081),e.exports=c,e.exports.default=c},1065:function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},1066:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(1029),a=n(1020),i=n(1075),s=n(1076);r.prototype.request=function(e){"string"===typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},1067:function(e,t,n){"use strict";var r=n(1020);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},1068:function(e,t,n){"use strict";var r=n(1034);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},1069:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},1070:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(1020);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},1071:function(e,t,n){"use strict";var r=n(1020),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},1072:function(e,t,n){"use strict";var r=n(1020);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},1073:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",s=0,c=a;o.charAt(0|s)||(c="=",s%1);i+=c.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},1074:function(e,t,n){"use strict";var r=n(1020);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1075:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(1020);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},1076:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(1020),a=n(1077),i=n(1035),s=n(1029),c=n(1078),u=n(1079);e.exports=function(e){return r(e),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},1077:function(e,t,n){"use strict";var r=n(1020);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},1078:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},1079:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},1080:function(e,t,n){"use strict";function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(1036);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},1081:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},1597:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.type.indexOf("image"),n=e.size/1024/1024<2;return-1===t?p.t.error("\u53ea\u80fd\u4e0a\u4f20\u56fe\u7247!"):n||p.t.error("\u56fe\u7247\u5927\u5c0f\u9700\u5c0f\u96e8 2MB!"),t&&n}function s(e){return{info:e.userReducer.info}}function c(e){return{actions:Object(m.b)({login:h.c},e)}}var u=n(0),l=n.n(u),f=n(363),p=n(202),m=n(96),d=n(203),h=n(364),g=n(1062),y=n(1598),b=(n.n(y),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),v=p.h.Item,E=p.o.Option,w=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=function(e){e.preventDefault(),n.props.form.validateFieldsAndScroll(function(e,t){if(!e){n.setState({loading:!0});var r=n.state.imageUrl;r?g.a.post("/signin/",Object.assign(t,{avatar:r})).then(function(e){n.setState({loading:!1});var t=e.data.user;e.data.status&&(n.props.actions.login(t),n.props.history.push({pathname:"/"})),p.u.success({message:"\u63d0\u793a",description:e.data.msg,duration:2})}):(n.setState({loading:!1}),p.t.error("\u4e0a\u4f20\u4f60\u7684\u5934\u50cf!"))}})},n.handleChange=function(e){if("uploading"===e.file.status)return void n.setState({loading:!0});"done"===e.file.status&&n.setState({imageUrl:e.file.response.imgUrl,loading:!1})},n.handleConfirmBlur=function(e){var t=e.target.value;n.setState({confirmDirty:n.state.confirmDirty||!!t})},n.compareToFirstPassword=function(e,t,r){var o=n.props.form;t&&t!==o.getFieldValue("password")?r("\u4e24\u6b21\u8f93\u5165\u4e0d\u4e00\u81f4!"):r()},n.validateToNextPassword=function(e,t,r){var o=n.props.form;t&&n.state.confirmDirty&&o.validateFields(["confirm"],{force:!0}),r()},n.state={confirmDirty:!1,loading:!1,imageUrl:""},n}return a(t,e),b(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.imageUrl,n={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},r=e("prefix",{initialValue:"86"})(l.a.createElement(p.o,{style:{width:70}},l.a.createElement(E,{value:"86"},"+86"),l.a.createElement(E,{value:"87"},"+87"))),o=l.a.createElement("div",null,l.a.createElement(p.i,{type:this.state.loading?"loading":"plus"}),l.a.createElement("div",{className:"ant-upload-text"},"Upload"));return l.a.createElement(p.n,{type:"flex",justify:"center",className:"signin-content"},l.a.createElement(p.e,{xs:24,sm:8},l.a.createElement(p.f,null,"\u57fa\u672c\u4fe1\u606f"),l.a.createElement(p.h,{onSubmit:this.handleSubmit},l.a.createElement(v,Object.assign({},n,{label:"\u90ae\u7bb1"}),e("email",{rules:[{type:"email",message:"\u4e0d\u662f\u6b63\u786e\u7684\u90ae\u7bb1!"},{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u90ae\u7bb1!"}]})(l.a.createElement(p.j,null))),l.a.createElement(v,Object.assign({},n,{label:"\u5bc6\u7801"}),e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"},{validator:this.validateToNextPassword}]})(l.a.createElement(p.j,{type:"password"}))),l.a.createElement(v,Object.assign({},n,{label:"\u91cd\u590d\u5bc6\u7801"}),e("confirm",{rules:[{required:!0,message:"\u8bf7\u91cd\u590d\u8f93\u5165\u5bc6\u7801!"},{validator:this.compareToFirstPassword}]})(l.a.createElement(p.j,{type:"password",onBlur:this.handleConfirmBlur}))),l.a.createElement(v,Object.assign({},n,{label:l.a.createElement("span",null,"\u6635\u79f0\xa0",l.a.createElement(p.r,{title:"\u4f60\u5e0c\u671b\u522b\u4eba\u600e\u4e48\u79f0\u547c\u4f60?"},l.a.createElement(p.i,{type:"question-circle-o"})))}),e("nickname",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u5b57!",whitespace:!0}]})(l.a.createElement(p.j,null))),l.a.createElement(v,Object.assign({},n,{label:"\u7535\u8bdd"}),e("phone",{rules:[{required:!0,message:"\u8f93\u5165\u8054\u7cfb\u65b9\u5f0f!"}]})(l.a.createElement(p.j,{addonBefore:r,style:{width:"100%"}}))),l.a.createElement(v,null,l.a.createElement(p.f,null,"\u5934\u50cf"),l.a.createElement(p.s,{name:"avatar",listType:"picture-card",action:"https://luvxy.cn/signin/uploads/avatar",className:"avatar-uploader",showUploadList:!1,onChange:this.handleChange,beforeUpload:i},t?l.a.createElement("img",{src:t,alt:"avatar"}):o)),l.a.createElement(v,null,l.a.createElement("p",{className:"btn-submit"},l.a.createElement(p.c,{loading:this.state.loading,type:"primary",htmlType:"submit"},"\u6ce8\u518c"))))))}}]),t}(u.Component),x=p.h.create()(w);t.a=Object(d.b)(s,c)(Object(f.f)(x))},1598:function(e,t,n){var r=n(1599);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(1012)(r,o);r.locals&&(e.exports=r.locals)},1599:function(e,t,n){t=e.exports=n(1011)(void 0),t.push([e.i,".signin-content {\n  padding: 40px 20px 35px; }\n  .signin-content .ant-form-item-label {\n    text-align: left; }\n  .signin-content .btn-submit {\n    text-align: center; }\n  .signin-content .avatar-uploader > .ant-upload {\n    position: relative;\n    transform: translateX(-50%);\n    margin-left: 50%;\n    width: 128px;\n    height: 128px; }\n    .signin-content .avatar-uploader > .ant-upload img {\n      width: 128px;\n      height: 128px; }\n",""])}});
//# sourceMappingURL=3.a30d725b.chunk.js.map