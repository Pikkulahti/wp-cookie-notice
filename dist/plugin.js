!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){var Cookies=__webpack_require__(1);__webpack_require__(2),__webpack_require__(3)},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(factory){var registeredInModuleLoader=!1;if(__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__,!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),registeredInModuleLoader=!0,module.exports=factory(),registeredInModuleLoader=!0,!registeredInModuleLoader){var OldCookies=window.Cookies,api=window.Cookies=factory();api.noConflict=function(){return window.Cookies=OldCookies,api}}}(function(){function extend(){for(var i=0,result={};i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes)result[key]=attributes[key]}return result}function init(converter){function api(key,value,attributes){var result;if("undefined"!=typeof document){if(arguments.length>1){if(attributes=extend({path:"/"},api.defaults,attributes),"number"==typeof attributes.expires){var expires=new Date;expires.setMilliseconds(expires.getMilliseconds()+864e5*attributes.expires),attributes.expires=expires}attributes.expires=attributes.expires?attributes.expires.toUTCString():"";try{result=JSON.stringify(value),/^[\{\[]/.test(result)&&(value=result)}catch(e){}value=converter.write?converter.write(value,key):encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),key=encodeURIComponent(String(key)),key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes="";for(var attributeName in attributes)attributes[attributeName]&&(stringifiedAttributes+="; "+attributeName,attributes[attributeName]!==!0&&(stringifiedAttributes+="="+attributes[attributeName]));return document.cookie=key+"="+value+stringifiedAttributes}key||(result={});for(var cookies=document.cookie?document.cookie.split("; "):[],rdecode=/(%[0-9A-Z]{2})+/g,i=0;i<cookies.length;i++){var parts=cookies[i].split("="),cookie=parts.slice(1).join("=");'"'===cookie.charAt(0)&&(cookie=cookie.slice(1,-1));try{var name=parts[0].replace(rdecode,decodeURIComponent);if(cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent),this.json)try{cookie=JSON.parse(cookie)}catch(e){}if(key===name){result=cookie;break}key||(result[name]=cookie)}catch(e){}}return result}}return api.set=api,api.get=function(key){return api.call(api,key)},api.getJSON=function(){return api.apply({json:!0},[].slice.call(arguments))},api.defaults={},api.remove=function(key,attributes){api(key,"",extend(attributes,{expires:-1}))},api.withConverter=init,api}return init(function(){})})},function(module,exports,__webpack_require__){window.CookieNotice=function(window,document){var app={};return app.init=function(){var Cookies=__webpack_require__(1);if("undefined"==typeof Cookies.get("cookie_notice")){var el=document.createElement("div");el.setAttribute("id","geniem-cookie-notice");var p=document.createElement("p");p.textContent=cookie_notice.cookie_notice_text;var button=document.createElement("button");if(button.textContent=cookie_notice.ok_text,p.appendChild(button),el.appendChild(p),cookie_notice.link_url){var paragraph=document.createElement("p"),link=document.createElement("a");link.setAttribute("href",cookie_notice.link_url),link.textContent=cookie_notice.link_text,paragraph.appendChild(link),el.appendChild(paragraph)}document.body.appendChild(el),app.bodyMargin=el.offsetHeight+"px",document.body.style.marginBottom=app.bodyMargin,button.addEventListener("click",function(e){Cookies.set("cookie_notice",!0,{expires:365}),el.parentNode.removeChild(el)})}},"loading"!=document.readyState?app.init():document.addEventListener("DOMContentLoaded",app.init),app}(window,document)},function(module,exports){}]);