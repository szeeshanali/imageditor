if (typeof jQuery !== "undefined") {
    window.noConflictNeeded = true;
}
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
    void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
if (window.noConflictNeeded) {
    $.noConflict(true);
}
/*! jQuery UI - v1.10.4 - 2014-05-28
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(t,e){function i(e,i){var s,o,a,u=e.nodeName.toLowerCase();return"area"===u?(s=e.parentNode,o=s.name,e.href&&o&&"map"===s.nodeName.toLowerCase()?(a=t("img[usemap=#"+o+"]")[0],!!a&&n(a)):!1):(/input|select|textarea|button|object/.test(u)?!e.disabled:"a"===u?e.href||i:i)&&n(e)}function n(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var s=0,o=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,n){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),n&&n.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var n,s,o=t(this[0]);o.length&&o[0]!==document;){if(n=o.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(o.css("zIndex"),10),!isNaN(s)&&0!==s))return s;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var n=t.attr(e,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(e,!s)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,n){function s(e,i,n,s){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),s&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===n?["Left","Right"]:["Top","Bottom"],a=n.toLowerCase(),u={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+n]=function(i){return i===e?u["inner"+n].call(this):this.each(function(){t(this).css(a,s(this,i)+"px")})},t.fn["outer"+n]=function(e,i){return"number"!=typeof e?u["outer"+n].call(this,e):this.each(function(){t(this).css(a,s(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,n){var s,o=t.ui[e].prototype;for(s in n)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([i,n[s]])},call:function(t,e,i){var n,s=t.plugins[e];if(s&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)t.options[s[n][0]]&&s[n][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return e[n]>0?!0:(e[n]=1,s=e[n]>0,e[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,l,h={},u=i.split(".")[0];i=i.split(".")[1],o=u+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[u]=t[u]||{},a=t[u][i],r=t[u][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),l=new s,l.options=t.widget.extend({},l.options),t.each(n,function(i,n){return t.isFunction(n)?(h[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(h[i]=n,e)}),r.prototype=t.widget.extend(l,{widgetEventPrefix:a?l.widgetEventPrefix||i:i},h,{constructor:r,namespace:u,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,l=a.length;l>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,l=s.call(arguments,1),h=this;return a=!r&&l.length?t.widget.extend.apply(null,[a].concat(l)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,l),s!==n&&s!==e?(h=s&&s.jquery?h.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function l(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||t.guid++);var h=n.match(/^(\w+)\s*(.*)$/),u=h[1]+a.eventNamespace,p=h[2];p?o.delegate(p,u,l):s.bind(u,l)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(d.test(t[0])?e/100:1),parseFloat(t[1])*(d.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function o(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var n,a=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,u=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,p=/^\w+/,d=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(n!==e)return n;var i,s,o=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=o.children()[0];return t("body").append(o),i=a.offsetWidth,o.css("overflow","scroll"),s=a.offsetWidth,i===s&&(s=o[0].clientWidth),o.remove(),n=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),o="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,n="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:n?t.position.scrollbarWidth():0,height:o?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),o=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:o,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var n,d,g,m,b,v,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),P=(e.collision||"flip").split(" "),x={};return v=o(_),_[0].preventDefault&&(e.at="left top"),d=v.width,g=v.height,m=v.offset,b=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):u.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=u.test(s[1])?s[1]:"center",t=c.exec(s[0]),i=c.exec(s[1]),x[this]=[t?t[0]:0,i?i[0]:0],e[this]=[p.exec(s[0])[0],p.exec(s[1])[0]]}),1===P.length&&(P[1]=P[0]),"right"===e.at[0]?b.left+=d:"center"===e.at[0]&&(b.left+=d/2),"bottom"===e.at[1]?b.top+=g:"center"===e.at[1]&&(b.top+=g/2),n=i(x.at,d,g),b.left+=n[0],b.top+=n[1],this.each(function(){var o,h,u=t(this),c=u.outerWidth(),p=u.outerHeight(),f=s(this,"marginLeft"),v=s(this,"marginTop"),T=c+f+s(this,"marginRight")+w.width,D=p+v+s(this,"marginBottom")+w.height,C=t.extend({},b),k=i(x.my,u.outerWidth(),u.outerHeight());"right"===e.my[0]?C.left-=c:"center"===e.my[0]&&(C.left-=c/2),"bottom"===e.my[1]?C.top-=p:"center"===e.my[1]&&(C.top-=p/2),C.left+=k[0],C.top+=k[1],t.support.offsetFractions||(C.left=l(C.left),C.top=l(C.top)),o={marginLeft:f,marginTop:v},t.each(["left","top"],function(i,s){t.ui.position[P[i]]&&t.ui.position[P[i]][s](C,{targetWidth:d,targetHeight:g,elemWidth:c,elemHeight:p,collisionPosition:o,collisionWidth:T,collisionHeight:D,offset:[n[0]+k[0],n[1]+k[1]],my:e.my,at:e.at,within:y,elem:u})}),e.using&&(h=function(t){var i=m.left-C.left,s=i+d-c,o=m.top-C.top,n=o+g-p,l={target:{element:_,left:m.left,top:m.top,width:d,height:g},element:{element:u,left:C.left,top:C.top,width:c,height:p},horizontal:0>s?"left":i>0?"right":"center",vertical:0>n?"top":o>0?"bottom":"middle"};c>d&&d>r(i+s)&&(l.horizontal="center"),p>g&&g>r(o+n)&&(l.vertical="middle"),l.important=a(r(i),r(s))>a(r(o),r(n))?"horizontal":"vertical",e.using.call(this,t,l)}),u.offset(t.extend(C,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,o=s.isWindow?s.scrollLeft:s.offset.left,n=s.width,r=t.left-e.collisionPosition.marginLeft,l=o-r,h=r+e.collisionWidth-n-o;e.collisionWidth>n?l>0&&0>=h?(i=t.left+l+e.collisionWidth-n-o,t.left+=l-i):t.left=h>0&&0>=l?o:l>h?o+n-e.collisionWidth:o:l>0?t.left+=l:h>0?t.left-=h:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,o=s.isWindow?s.scrollTop:s.offset.top,n=e.within.height,r=t.top-e.collisionPosition.marginTop,l=o-r,h=r+e.collisionHeight-n-o;e.collisionHeight>n?l>0&&0>=h?(i=t.top+l+e.collisionHeight-n-o,t.top+=l-i):t.top=h>0&&0>=l?o:l>h?o+n-e.collisionHeight:o:l>0?t.top+=l:h>0?t.top-=h:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,o=e.within,n=o.offset.left+o.scrollLeft,a=o.width,l=o.isWindow?o.scrollLeft:o.offset.left,h=t.left-e.collisionPosition.marginLeft,u=h-l,c=h+e.collisionWidth-a-l,p="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>u?(i=t.left+p+d+f+e.collisionWidth-a-n,(0>i||r(u)>i)&&(t.left+=p+d+f)):c>0&&(s=t.left-e.collisionPosition.marginLeft+p+d+f-l,(s>0||c>r(s))&&(t.left+=p+d+f))},top:function(t,e){var i,s,o=e.within,n=o.offset.top+o.scrollTop,a=o.height,l=o.isWindow?o.scrollTop:o.offset.top,h=t.top-e.collisionPosition.marginTop,u=h-l,c=h+e.collisionHeight-a-l,p="top"===e.my[1],d=p?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>u?(s=t.top+d+f+g+e.collisionHeight-a-n,t.top+d+f+g>u&&(0>s||r(u)>s)&&(t.top+=d+f+g)):c>0&&(i=t.top-e.collisionPosition.marginTop+d+f+g-l,t.top+d+f+g>c&&(i>0||c>r(i))&&(t.top+=d+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,o,n,a=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(n in s)e.style[n]=s[n];e.appendChild(r),i=a||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",o=t(r).offset().left,t.support.offsetFractions=o>10&&11>o,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,c))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);
(function(l,q){if("object"===typeof exports&&exports)q(exports);else{var u={};q(u);"function"===typeof define&&define.amd?define(u):l.Mustache=u}})(this,function(l){function q(a){return"function"===typeof a}function u(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function z(a){if(!x(a)||2!==a.length)throw Error("Invalid tags: "+a);return[new RegExp(u(a[0])+"\\s*"),new RegExp("\\s*"+u(a[1]))]}function w(a){this.tail=this.string=a;this.pos=0}function m(a,b){this.view=null==a?{}:a;this.cache=
{".":this.view};this.parent=b}function r(){this.cache={}}var C=RegExp.prototype.test,D=/\S/,E=Object.prototype.toString,x=Array.isArray||function(a){return"[object Array]"===E.call(a)},F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},G=/\s*/,A=/\s+/,B=/\s*=/,H=/\s*\}/,I=/#|\^|\/|>|\{|&|=|!/;w.prototype.eos=function(){return""===this.tail};w.prototype.scan=function(a){return(a=this.tail.match(a))&&0===a.index?(a=a[0],this.tail=this.tail.substring(a.length),this.pos+=a.length,
a):""};w.prototype.scanUntil=function(a){a=this.tail.search(a);var b;switch(a){case -1:b=this.tail;this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,a),this.tail=this.tail.substring(a)}this.pos+=b.length;return b};m.prototype.push=function(a){return new m(a,this)};m.prototype.lookup=function(a){var b;if(a in this.cache)b=this.cache[a];else{for(var g=this;g;){if(0<a.indexOf(".")){b=g.view;for(var e=a.split("."),l=0;null!=b&&l<e.length;)b=b[e[l++]]}else b=g.view[a];if(null!=b)break;
g=g.parent}this.cache[a]=b}q(b)&&(b=b.call(this.view));return b};r.prototype.clearCache=function(){this.cache={}};r.prototype.parse=function(a,b){var g=this.cache,e=g[a];if(null==e){var n;n=b||l.tags;e=a||"";"string"===typeof n&&(n=n.split(A));for(var c=z(n),f=new w(e),k=[],e=[],d=[],q=!1,m=!1,p,h,s,v;!f.eos();){p=f.pos;if(s=f.scanUntil(c[0])){v=0;for(var r=s.length;v<r;++v)if(h=s.charAt(v),C.call(D,h)?m=!0:d.push(e.length),e.push(["text",h,p,p+1]),p+=1,"\n"===h){if(q&&!m)for(;d.length;)delete e[d.pop()];
else d=[];m=q=!1}}if(!f.scan(c[0]))break;q=!0;h=f.scan(I)||"name";f.scan(G);"="===h?(s=f.scanUntil(B),f.scan(B),f.scanUntil(c[1])):"{"===h?(s=f.scanUntil(new RegExp("\\s*"+u("}"+n[1]))),f.scan(H),f.scanUntil(c[1]),h="&"):s=f.scanUntil(c[1]);if(!f.scan(c[1]))throw Error("Unclosed tag at "+f.pos);v=[h,s,p,f.pos];e.push(v);if("#"===h||"^"===h)k.push(v);else if("/"===h){h=k.pop();if(!h)throw Error('Unopened section "'+s+'" at '+p);if(h[1]!==s)throw Error('Unclosed section "'+h[1]+'" at '+p);}else"name"===
h||"{"===h||"&"===h?m=!0:"="===h&&(c=z(n=s.split(A)))}if(h=k.pop())throw Error('Unclosed section "'+h[1]+'" at '+f.pos);n=[];for(var t,f=0,k=e.length;f<k;++f)if(c=e[f])"text"===c[0]&&t&&"text"===t[0]?(t[1]+=c[1],t[3]=c[3]):(n.push(c),t=c);d=t=[];e=[];f=0;for(k=n.length;f<k;++f)switch(c=n[f],c[0]){case "#":case "^":d.push(c);e.push(c);d=c[4]=[];break;case "/":d=e.pop();d[5]=c[2];d=0<e.length?e[e.length-1][4]:t;break;default:d.push(c)}e=g[a]=t}return e};r.prototype.render=function(a,b,g){var e=this.parse(a);
b=b instanceof m?b:new m(b);return this.renderTokens(e,b,g,a)};r.prototype.renderTokens=function(a,b,g,e){function n(a){return f.render(a,b,g)}for(var c="",f=this,k,d,m=0,r=a.length;m<r;++m)switch(k=a[m],k[0]){case "#":d=b.lookup(k[1]);if(!d)continue;if(x(d))for(var p=0,h=d.length;p<h;++p)c+=this.renderTokens(k[4],b.push(d[p]),g,e);else if("object"===typeof d||"string"===typeof d)c+=this.renderTokens(k[4],b.push(d),g,e);else if(q(d)){if("string"!==typeof e)throw Error("Cannot use higher-order sections without the original template");
d=d.call(b.view,e.slice(k[3],k[5]),n);null!=d&&(c+=d)}else c+=this.renderTokens(k[4],b,g,e);break;case "^":d=b.lookup(k[1]);if(!d||x(d)&&0===d.length)c+=this.renderTokens(k[4],b,g,e);break;case ">":if(!g)continue;d=q(g)?g(k[1]):g[k[1]];null!=d&&(c+=this.renderTokens(this.parse(d),b,g,d));break;case "&":d=b.lookup(k[1]);null!=d&&(c+=d);break;case "name":d=b.lookup(k[1]);null!=d&&(c+=l.escape(d));break;case "text":c+=k[1]}return c};l.name="mustache.js";l.version="0.8.1";l.tags=["{{","}}"];var y=new r;
l.clearCache=function(){return y.clearCache()};l.parse=function(a,b){return y.parse(a,b)};l.render=function(a,b,g){return y.render(a,b,g)};l.to_html=function(a,b,g,e){a=l.render(a,b,g);if(q(e))e(a);else return a};l.escape=function(a){return String(a).replace(/[&<>"'\/]/g,function(a){return F[a]})};l.Scanner=w;l.Context=m;l.Writer=r});
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return k._events=j={n:{}},void 0;var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return 180*a/S%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b},c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=0|16*N.random(),c="x"==a?b:8|3&b;return c.toString(16)}),c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=60*((d+360)%6)/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=60*((d+360)%6)/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")},c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a},c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){var e=[];M.call(c),d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&1==n(a,[["M",b,d],["H",e.x2+10]],1)%2},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),l=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=O(d.length,e&&e.length||0))},k=0,l=O(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=_(m[o-4])||f.x,f.by=_(m[o-3])||f.y,g.bx=e&&(_(n[p-4])||g.x),g.by=e&&(_(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])
}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],e,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin((a-.075)*2*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Raphaël’s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Raphaël‘s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(console.log("runned"),c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){u=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"href":case"title":var u=q("title"),w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u);break;case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var u=q("a");x.insertBefore(u,i),u.appendChild(i),x=u}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var z=b(p).split(j);if(4==z.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var A=q("clipPath"),B=q("rect");A.id=c.createUUID(),q(B,{x:z[0],y:z[1],width:z[2],height:z[3]}),A.appendChild(B),d.paper.defs.appendChild(A),q(i,{"clip-path":"url(#"+A.id+")"}),d.clip=B}if(!p){var C=i.getAttribute("clip-path");if(C){var D=c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g,l));D&&D.parentNode.removeChild(D),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var E=b(p).match(c._ISURL);if(E){A=q("pattern");var F=q("image");A.id=c.createUUID(),q(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":E[1]}),A.appendChild(F),function(a){c._preload(E[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(F,{width:b,height:c}),d.paper.safari()})}(A),d.paper.defs.appendChild(A),q(i,{fill:"url(#"+A.id+")"}),d.pattern=A,d.pattern&&s(d);break}var G=c.getRGB(p);if(G.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});G[a]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=c.getRGB(p),i.setAttribute(o,G.hex),"stroke"==o&&G[a]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;
if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;return"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper),this.paper,this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),i["stroke-dasharray"]){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){var f=a.path();return f.attrs,f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){var e=a.path();return e.attrs,e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,c});
var B64={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",lookup:null,ie:/MSIE /.test(navigator.userAgent),ieo:/MSIE [67]/.test(navigator.userAgent),encode:function(b){b=B64.toUtf8(b);var a=-1,f=b.length,c,d,e=[void 0,void 0,void 0,void 0],g;if(B64.ie){for(g=[];++a<f;)c=b[a],d=b[++a],e[0]=c>>2,e[1]=(c&3)<<4|d>>4,isNaN(d)?e[2]=e[3]=64:(c=b[++a],e[2]=(d&15)<<2|c>>6,e[3]=isNaN(c)?64:c&63),g.push(B64.alphabet.charAt(e[0]),B64.alphabet.charAt(e[1]),B64.alphabet.charAt(e[2]),
B64.alphabet.charAt(e[3]));return g.join("")}for(g="";++a<f;)c=b[a],d=b[++a],e[0]=c>>2,e[1]=(c&3)<<4|d>>4,isNaN(d)?e[2]=e[3]=64:(c=b[++a],e[2]=(d&15)<<2|c>>6,e[3]=isNaN(c)?64:c&63),g+=B64.alphabet[e[0]]+B64.alphabet[e[1]]+B64.alphabet[e[2]]+B64.alphabet[e[3]];return g},decode:function(b){if(b.length%4)throw Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");b=B64.fromUtf8(b);var a=0,f=b.length;if(B64.ieo){for(var c=[];a<f;)128>b[a]?c.push(String.fromCharCode(b[a++])):
191<b[a]&&224>b[a]?c.push(String.fromCharCode((b[a++]&31)<<6|b[a++]&63)):c.push(String.fromCharCode((b[a++]&15)<<12|(b[a++]&63)<<6|b[a++]&63));return c.join("")}for(c="";a<f;)c=128>b[a]?c+String.fromCharCode(b[a++]):191<b[a]&&224>b[a]?c+String.fromCharCode((b[a++]&31)<<6|b[a++]&63):c+String.fromCharCode((b[a++]&15)<<12|(b[a++]&63)<<6|b[a++]&63);return c},toUtf8:function(b){var a=-1,f=b.length,c,d=[];if(/^[\x00-\x7f]*$/.test(b))for(;++a<f;)d.push(b.charCodeAt(a));else for(;++a<f;)c=b.charCodeAt(a),
128>c?d.push(c):2048>c?d.push(c>>6|192,c&63|128):d.push(c>>12|224,c>>6&63|128,c&63|128);return d},fromUtf8:function(b){var a=-1,f,c=[],d=[void 0,void 0,void 0,void 0];if(!B64.lookup){f=B64.alphabet.length;for(B64.lookup={};++a<f;)B64.lookup[B64.alphabet.charAt(a)]=a;a=-1}for(f=b.length;++a<f;){d[0]=B64.lookup[b.charAt(a)];d[1]=B64.lookup[b.charAt(++a)];c.push(d[0]<<2|d[1]>>4);d[2]=B64.lookup[b.charAt(++a)];if(64==d[2])break;c.push((d[1]&15)<<4|d[2]>>2);d[3]=B64.lookup[b.charAt(++a)];if(64==d[3])break;
c.push((d[2]&3)<<6|d[3])}return c}};
!function($){$.fn.asyncFileUpload=function(userSettings){var settings=$.extend({},{afterSubmit:function(){},success:function(data){},error:function(err){}},userSettings);return this.each(function(){var $form=$(this),formData=new FormData(this),files=$form.find(":file")[0].files,i=0;if(!(30<=files.length)){for(;i<files.length;i++){if(10<files[i].size/1024/1024)return void settings.error('The size of image "'+files[i].name+'" exceeds 10 MB.');if("image/jpeg"!==files[i].type&&"image/png"!==files[i].type&&"image/webp"!==files[i].type&&"image/heic"!==files[i].type&&"image/heif"!==files[i].type&&!files[i].name.includes(".heic")&&!files[i].name.includes(".HEIC"))return void settings.error(files[i].name+'" is not a valid image.')}return formData.append("host",window.location.hostname),formData.append("protocol",window.location.protocol),$.ajax({url:$form.attr("action"),type:"POST",success:settings.success,error:settings.error,data:formData,dataType:"json",crossDomain:!0,cache:!1,contentType:!1,processData:!1}),settings.afterSubmit(),this}settings.error("Cannot upload more than 30 images at a time.")})}}(jQuery),function($){function MagnificPopup(){}function _mfpOn(name,f){mfp.ev.on("mfp"+name+".mfp",f)}function _getEl(className,appendTo,html,raw){var el=document.createElement("div");return el.className="mfp-"+className,html&&(el.innerHTML=html),raw?appendTo&&appendTo.appendChild(el):(el=$(el),appendTo&&el.appendTo(appendTo)),el}function _mfpTrigger(e,data){mfp.ev.triggerHandler("mfp"+e,data),mfp.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),mfp.st.callbacks[e]&&mfp.st.callbacks[e].apply(mfp,$.isArray(data)?data:[data]))}function _getCloseBtn(type){return type===_currPopupType&&mfp.currTemplate.closeBtn||(mfp.currTemplate.closeBtn=$(mfp.st.closeMarkup.replace("%title%",mfp.st.tClose)),_currPopupType=type),mfp.currTemplate.closeBtn}function _checkInstance(){$.magnificPopup.instance||((mfp=new MagnificPopup).init(),$.magnificPopup.instance=mfp)}function _putInlineElementsBack(){_lastInlineElement&&(_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach(),_lastInlineElement=null)}function _removeAjaxCursor(){_ajaxCur&&_body.removeClass(_ajaxCur)}function _destroyAjaxRequest(){_removeAjaxCursor(),mfp.req&&mfp.req.abort()}var mfp,_prevStatus,_body,_document,_prevContentType,_wrapClasses,_currPopupType,_hiddenClass,_inlinePlaceholder,_lastInlineElement,_ajaxCur,_isJQ=!!window.jQuery,_window=$(window);$.magnificPopup={instance:null,proto:MagnificPopup.prototype={constructor:MagnificPopup,init:function(){var appVersion=navigator.appVersion;mfp.isIE7=-1!==appVersion.indexOf("MSIE 7."),mfp.isIE8=-1!==appVersion.indexOf("MSIE 8."),mfp.isLowIE=mfp.isIE7||mfp.isIE8,mfp.isAndroid=/android/gi.test(appVersion),mfp.isIOS=/iphone|ipad|ipod/gi.test(appVersion),mfp.supportsTransition=function(){var s=document.createElement("p").style,v=["ms","O","Moz","Webkit"];if(void 0!==s.transition)return!0;for(;v.length;)if(v.pop()+"Transition"in s)return!0;return!1}(),mfp.probablyMobile=mfp.isAndroid||mfp.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),_body=$(document.body),_document=$(document),mfp.popupsCache={}},open:function(data){if(!1===data.isObj){mfp.items=data.items.toArray(),mfp.index=0;for(var item,items=data.items,i=0;i<items.length;i++)if((item=(item=items[i]).parsed?item.el[0]:item)===data.el[0]){mfp.index=i;break}}else mfp.items=$.isArray(data.items)?data.items:[data.items],mfp.index=data.index||0;if(!mfp.isOpen){mfp.types=[],_wrapClasses="",data.mainEl&&data.mainEl.length?mfp.ev=data.mainEl.eq(0):mfp.ev=_document,data.key?(mfp.popupsCache[data.key]||(mfp.popupsCache[data.key]={}),mfp.currTemplate=mfp.popupsCache[data.key]):mfp.currTemplate={},mfp.st=$.extend(!0,{},$.magnificPopup.defaults,data),mfp.fixedContentPos="auto"===mfp.st.fixedContentPos?!mfp.probablyMobile:mfp.st.fixedContentPos,mfp.st.modal&&(mfp.st.closeOnContentClick=!1,mfp.st.closeOnBgClick=!1,mfp.st.showCloseBtn=!1,mfp.st.enableEscapeKey=!1),mfp.bgOverlay||(mfp.bgOverlay=_getEl("bg").on("click.mfp",function(){mfp.close()}),mfp.wrap=_getEl("wrap").attr("tabindex",-1).on("click.mfp",function(e){mfp._checkIfClose(e.target)&&mfp.close()}),mfp.container=_getEl("container",mfp.wrap)),mfp.contentContainer=_getEl("content"),mfp.st.preloader&&(mfp.preloader=_getEl("preloader",mfp.container,mfp.st.tLoading));var modules=$.magnificPopup.modules;for(i=0;i<modules.length;i++){var n=(n=modules[i]).charAt(0).toUpperCase()+n.slice(1);mfp["init"+n].call(mfp)}_mfpTrigger("BeforeOpen"),mfp.st.showCloseBtn&&(mfp.st.closeBtnInside?(_mfpOn("MarkupParse",function(e,template,values,item){values.close_replaceWith=_getCloseBtn(item.type)}),_wrapClasses+=" mfp-close-btn-in"):mfp.wrap.append(_getCloseBtn())),mfp.st.alignTop&&(_wrapClasses+=" mfp-align-top"),mfp.fixedContentPos?mfp.wrap.css({overflow:mfp.st.overflowY,overflowX:"hidden",overflowY:mfp.st.overflowY}):mfp.wrap.css({top:_window.scrollTop(),position:"absolute"}),!1!==mfp.st.fixedBgPos&&("auto"!==mfp.st.fixedBgPos||mfp.fixedContentPos)||mfp.bgOverlay.css({height:_document.height(),position:"absolute"}),mfp.st.enableEscapeKey&&_document.on("keyup.mfp",function(e){27===e.keyCode&&mfp.close()}),_window.on("resize.mfp",function(){mfp.updateSize()}),mfp.st.closeOnContentClick||(_wrapClasses+=" mfp-auto-cursor"),_wrapClasses&&mfp.wrap.addClass(_wrapClasses);var windowHeight=mfp.wH=_window.height(),windowStyles={},s=(mfp.fixedContentPos&&(!mfp._hasScrollBar(windowHeight)||(s=mfp._getScrollbarSize())&&(windowStyles.marginRight=s)),mfp.fixedContentPos&&(mfp.isIE7?$("body, html").css("overflow","hidden"):windowStyles.overflow="hidden"),mfp.st.mainClass);return mfp.isIE7&&(s+=" mfp-ie7"),s&&mfp._addClassToMFP(s),mfp.updateItemHTML(),_mfpTrigger("BuildControls"),$("html").css(windowStyles),mfp.bgOverlay.add(mfp.wrap).prependTo(document.body),mfp._lastFocusedEl=document.activeElement,setTimeout(function(){mfp.content?(mfp._addClassToMFP("mfp-ready"),mfp._setFocus()):mfp.bgOverlay.addClass("mfp-ready"),_document.on("focusin.mfp",mfp._onFocusIn)},16),mfp.isOpen=!0,mfp.updateSize(windowHeight),_mfpTrigger("Open"),data}mfp.updateItemHTML()},close:function(){mfp.isOpen&&(_mfpTrigger("BeforeClose"),mfp.isOpen=!1,mfp.st.removalDelay&&!mfp.isLowIE&&mfp.supportsTransition?(mfp._addClassToMFP("mfp-removing"),setTimeout(function(){mfp._close()},mfp.st.removalDelay)):mfp._close())},_close:function(){_mfpTrigger("Close");var classesToRemove="mfp-removing mfp-ready ";mfp.bgOverlay.detach(),mfp.wrap.detach(),mfp.container.empty(),mfp.st.mainClass&&(classesToRemove+=mfp.st.mainClass+" "),mfp._removeClassFromMFP(classesToRemove),mfp.fixedContentPos&&(classesToRemove={marginRight:""},mfp.isIE7?$("body, html").css("overflow",""):classesToRemove.overflow="",$("html").css(classesToRemove)),_document.off("keyup.mfp focusin.mfp"),mfp.ev.off(".mfp"),mfp.wrap.attr("class","mfp-wrap").removeAttr("style"),mfp.bgOverlay.attr("class","mfp-bg"),mfp.container.attr("class","mfp-container"),!mfp.st.showCloseBtn||mfp.st.closeBtnInside&&!0!==mfp.currTemplate[mfp.currItem.type]||mfp.currTemplate.closeBtn&&mfp.currTemplate.closeBtn.detach(),mfp._lastFocusedEl&&$(mfp._lastFocusedEl).focus(),mfp.currItem=null,mfp.content=null,mfp.currTemplate=null,mfp.prevHeight=0,_mfpTrigger("AfterClose")},updateSize:function(winHeight){var zoomLevel;mfp.isIOS?(zoomLevel=document.documentElement.clientWidth/window.innerWidth,zoomLevel=window.innerHeight*zoomLevel,mfp.wrap.css("height",zoomLevel),mfp.wH=zoomLevel):mfp.wH=winHeight||_window.height(),mfp.fixedContentPos||mfp.wrap.css("height",mfp.wH),_mfpTrigger("Resize")},updateItemHTML:function(){var item=mfp.items[mfp.index],type=(mfp.contentContainer.detach(),mfp.content&&mfp.content.detach(),(item=item.parsed?item:mfp.parseEl(mfp.index)).type),markup=(_mfpTrigger("BeforeChange",[mfp.currItem?mfp.currItem.type:"",type]),mfp.currItem=item,mfp.currTemplate[type]||(markup=!!mfp.st[type]&&mfp.st[type].markup,_mfpTrigger("FirstMarkupParse",markup),mfp.currTemplate[type]=!markup||$(markup)),_prevContentType&&_prevContentType!==item.type&&mfp.container.removeClass("mfp-"+_prevContentType+"-holder"),mfp["get"+type.charAt(0).toUpperCase()+type.slice(1)](item,mfp.currTemplate[type]));mfp.appendContent(markup,type),item.preloaded=!0,_mfpTrigger("Change",item),_prevContentType=item.type,mfp.container.prepend(mfp.contentContainer),_mfpTrigger("AfterChange")},appendContent:function(newContent,type){(mfp.content=newContent)?mfp.st.showCloseBtn&&mfp.st.closeBtnInside&&!0===mfp.currTemplate[type]?mfp.content.find(".mfp-close").length||mfp.content.append(_getCloseBtn()):mfp.content=newContent:mfp.content="",_mfpTrigger("BeforeAppend"),mfp.container.addClass("mfp-"+type+"-holder"),mfp.contentContainer.append(mfp.content)},parseEl:function(index){var item=mfp.items[index],type=item.type;if((item=item.tagName?{el:$(item)}:{data:item,src:item.src}).el){for(var types=mfp.types,i=0;i<types.length;i++)if(item.el.hasClass("mfp-"+types[i])){type=types[i];break}item.src=item.el.attr("data-mfp-src"),item.src||(item.src=item.el.attr("href"))}return item.type=type||mfp.st.type||"inline",item.index=index,item.parsed=!0,mfp.items[index]=item,_mfpTrigger("ElementParse",item),mfp.items[index]},addGroup:function(el,options){function eHandler(e){e.mfpEl=this,mfp._openClick(e,el,options)}var eName="click.magnificPopup";(options=options||{}).mainEl=el,options.items?(options.isObj=!0,el.off(eName).on(eName,eHandler)):(options.isObj=!1,options.delegate?el.off(eName).on(eName,options.delegate,eHandler):(options.items=el).off(eName).on(eName,eHandler))},_openClick:function(e,el,options){if((void 0!==options.midClick?options:$.magnificPopup.defaults).midClick||2!==e.which&&!e.ctrlKey&&!e.metaKey){var disableOn=(void 0!==options.disableOn?options:$.magnificPopup.defaults).disableOn;if(disableOn)if($.isFunction(disableOn)){if(!disableOn.call(mfp))return!0}else if(_window.width()<disableOn)return!0;e.type&&(e.preventDefault(),mfp.isOpen&&e.stopPropagation()),options.el=$(e.mfpEl),options.delegate&&(options.items=el.find(options.delegate)),mfp.open(options)}},updateStatus:function(status,text){var data;mfp.preloader&&(_prevStatus!==status&&mfp.container.removeClass("mfp-s-"+_prevStatus),data={status:status,text:text=text||"loading"!==status?text:mfp.st.tLoading},_mfpTrigger("UpdateStatus",data),status=data.status,mfp.preloader.html(text=data.text),mfp.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),mfp.container.addClass("mfp-s-"+status),_prevStatus=status)},_checkIfClose:function(target){if(!$(target).hasClass("mfp-prevent-close")){var closeOnContent=mfp.st.closeOnContentClick,closeOnBg=mfp.st.closeOnBgClick;if(closeOnContent&&closeOnBg)return!0;if(!mfp.content||$(target).hasClass("mfp-close")||mfp.preloader&&target===mfp.preloader[0])return!0;if(target===mfp.content[0]||$.contains(mfp.content[0],target)){if(closeOnContent)return!0}else if(closeOnBg&&$.contains(document,target))return!0;return!1}},_addClassToMFP:function(cName){mfp.bgOverlay.addClass(cName),mfp.wrap.addClass(cName)},_removeClassFromMFP:function(cName){this.bgOverlay.removeClass(cName),mfp.wrap.removeClass(cName)},_hasScrollBar:function(winHeight){return(mfp.isIE7?_document.height():document.body.scrollHeight)>(winHeight||_window.height())},_setFocus:function(){(mfp.st.focus?mfp.content.find(mfp.st.focus).eq(0):mfp.wrap).focus()},_onFocusIn:function(e){if(e.target!==mfp.wrap[0]&&!$.contains(mfp.wrap[0],e.target))return mfp._setFocus(),!1},_parseMarkup:function(template,values,item){var arr;item.data&&(values=$.extend(item.data,values)),_mfpTrigger("MarkupParse",[template,values,item]),$.each(values,function(key,value){if(void 0===value||!1===value)return!0;var el,attr;1<(arr=key.split("_")).length?0<(el=template.find(".mfp-"+arr[0])).length&&("replaceWith"===(attr=arr[1])?el[0]!==value[0]&&el.replaceWith(value):"img"===attr?el.is("img")?el.attr("src",value):el.replaceWith('<img src="'+value+'" class="'+el.attr("class")+'" />'):el.attr(arr[1],value)):template.find(".mfp-"+key).html(value)})},_getScrollbarSize:function(){var scrollDiv;return void 0===mfp.scrollbarSize&&((scrollDiv=document.createElement("div")).id="mfp-sbm",scrollDiv.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(scrollDiv),mfp.scrollbarSize=scrollDiv.offsetWidth-scrollDiv.clientWidth,document.body.removeChild(scrollDiv)),mfp.scrollbarSize}},modules:[],open:function(options,index){return _checkInstance(),(options=options?$.extend(!0,{},options):{}).isObj=!0,options.index=index||0,this.instance.open(options)},close:function(){return $.magnificPopup.instance&&$.magnificPopup.instance.close()},registerModule:function(name,module){module.options&&($.magnificPopup.defaults[name]=module.options),$.extend(this.proto,module.proto),this.modules.push(name)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},$.fn.magnificPopup=function(options){_checkInstance();var itemOpts,index,items,jqEl=$(this);return"string"==typeof options?"open"===options?(itemOpts=_isJQ?jqEl.data("magnificPopup"):jqEl[0].magnificPopup,index=parseInt(arguments[1],10)||0,items=itemOpts.items?itemOpts.items[index]:(items=jqEl,(items=itemOpts.delegate?items.find(itemOpts.delegate):items).eq(index)),mfp._openClick({mfpEl:items},jqEl,itemOpts)):mfp.isOpen&&mfp[options].apply(mfp,Array.prototype.slice.call(arguments,1)):(options=$.extend(!0,{},options),_isJQ?jqEl.data("magnificPopup",options):jqEl[0].magnificPopup=options,mfp.addGroup(jqEl,options)),jqEl},$.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){mfp.types.push("inline"),_mfpOn("Close.inline",function(){_putInlineElementsBack()})},getInline:function(item,template){var inlineSt,el,parent;return _putInlineElementsBack(),item.src?(inlineSt=mfp.st.inline,(el=$(item.src)).length?((parent=el[0].parentNode)&&parent.tagName&&(_inlinePlaceholder||(_hiddenClass=inlineSt.hiddenClass,_inlinePlaceholder=_getEl(_hiddenClass),_hiddenClass="mfp-"+_hiddenClass),_lastInlineElement=el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)),mfp.updateStatus("ready")):(mfp.updateStatus("error",inlineSt.tNotFound),el=$("<div>")),item.inlineElement=el):(mfp.updateStatus("ready"),mfp._parseMarkup(template,{},item),template)}}});$.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){mfp.types.push("ajax"),_ajaxCur=mfp.st.ajax.cursor,_mfpOn("Close.ajax",_destroyAjaxRequest),_mfpOn("BeforeChange.ajax",_destroyAjaxRequest)},getAjax:function(item){_ajaxCur&&_body.addClass(_ajaxCur),mfp.updateStatus("loading");var opts=$.extend({url:item.src,success:function(data,textStatus,jqXHR){data={data:data,xhr:jqXHR};_mfpTrigger("ParseAjax",data),mfp.appendContent($(data.data),"ajax"),item.finished=!0,_removeAjaxCursor(),mfp._setFocus(),setTimeout(function(){mfp.wrap.addClass("mfp-ready")},16),mfp.updateStatus("ready"),_mfpTrigger("AjaxContentAdded")},error:function(){_removeAjaxCursor(),item.finished=item.loadError=!0,mfp.updateStatus("error",mfp.st.ajax.tError.replace("%url%",item.src))}},mfp.st.ajax.settings);return mfp.req=$.ajax(opts),""}}});var _imgInterval;$.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var imgSt=mfp.st.image,ns=".image";mfp.types.push("image"),_mfpOn("Open"+ns,function(){"image"===mfp.currItem.type&&imgSt.cursor&&_body.addClass(imgSt.cursor)}),_mfpOn("Close"+ns,function(){imgSt.cursor&&_body.removeClass(imgSt.cursor),_window.off("resize.mfp")}),_mfpOn("Resize"+ns,mfp.resizeImage),mfp.isLowIE&&_mfpOn("AfterChange",mfp.resizeImage)},resizeImage:function(){var decr,item=mfp.currItem;item&&item.img&&mfp.st.image.verticalFit&&(decr=0,mfp.isLowIE&&(decr=parseInt(item.img.css("padding-top"),10)+parseInt(item.img.css("padding-bottom"),10)),item.img.css("max-height",mfp.wH-decr))},_onImageHasSize:function(item){item.img&&(item.hasSize=!0,_imgInterval&&clearInterval(_imgInterval),item.isCheckingImgSize=!1,_mfpTrigger("ImageHasSize",item),item.imgHidden&&(mfp.content&&mfp.content.removeClass("mfp-loading"),item.imgHidden=!1))},findImageSize:function(item){function mfpSetInterval(delay){_imgInterval&&clearInterval(_imgInterval),_imgInterval=setInterval(function(){0<img.naturalWidth?mfp._onImageHasSize(item):(200<counter&&clearInterval(_imgInterval),3===++counter?mfpSetInterval(10):40===counter?mfpSetInterval(50):100===counter&&mfpSetInterval(500))},delay)}var counter=0,img=item.img[0];mfpSetInterval(1)},getImage:function(item,template){function onLoadComplete(){item&&(item.img[0].complete?(item.img.off(".mfploader"),item===mfp.currItem&&(mfp._onImageHasSize(item),mfp.updateStatus("ready")),item.hasSize=!0,item.loaded=!0,_mfpTrigger("ImageLoadComplete")):++guard<200?setTimeout(onLoadComplete,100):onLoadError())}function onLoadError(){item&&(item.img.off(".mfploader"),item===mfp.currItem&&(mfp._onImageHasSize(item),mfp.updateStatus("error",imgSt.tError.replace("%url%",item.src))),item.hasSize=!0,item.loaded=!0,item.loadError=!0)}var img,guard=0,imgSt=mfp.st.image,el=template.find(".mfp-img");return el.length&&((img=document.createElement("img")).className="mfp-img",item.img=$(img).on("load.mfploader",onLoadComplete).on("error.mfploader",onLoadError),img.src=item.src,el.is("img")&&(item.img=item.img.clone()),0<item.img[0].naturalWidth&&(item.hasSize=!0)),mfp._parseMarkup(template,{title:function(item){if(item.data&&void 0!==item.data.title)return item.data.title;var src=mfp.st.image.titleSrc;if(src){if($.isFunction(src))return src.call(mfp,item);if(item.el)return item.el.attr(src)||""}return""}(item),img_replaceWith:item.img},item),mfp.resizeImage(),item.hasSize?(_imgInterval&&clearInterval(_imgInterval),item.loadError?(template.addClass("mfp-loading"),mfp.updateStatus("error",imgSt.tError.replace("%url%",item.src))):(template.removeClass("mfp-loading"),mfp.updateStatus("ready"))):(mfp.updateStatus("loading"),item.loading=!0,item.hasSize||(item.imgHidden=!0,template.addClass("mfp-loading"),mfp.findImageSize(item))),template}}});function _fixIframeBugs(isShowing){var el;!mfp.currTemplate.iframe||(el=mfp.currTemplate.iframe.find("iframe")).length&&(isShowing||(el[0].src="//about:blank"),mfp.isIE8&&el.css("display",isShowing?"block":"none"))}function _getLoopedId(index){var numSlides=mfp.items.length;return numSlides-1<index?index-numSlides:index<0?numSlides+index:index}function _replaceCurrTotal(text,curr,total){return text.replace(/%curr%/gi,curr+1).replace(/%total%/gi,total)}var hasMozTransform,supportsTouch,ns;$.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(element){return element.is("img")?element:element.find("img")}},proto:{initZoom:function(){var image,duration,getElToAnimate,showMainContent,openTimeout,animatedImg,zoomSt=mfp.st.zoom,ns=".zoom";zoomSt.enabled&&mfp.supportsTransition&&(duration=zoomSt.duration,getElToAnimate=function(image){var image=image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),transition="all "+zoomSt.duration/1e3+"s "+zoomSt.easing,cssObj={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},t="transition";return cssObj["-webkit-"+t]=cssObj["-moz-"+t]=cssObj["-o-"+t]=cssObj[t]=transition,image.css(cssObj),image},showMainContent=function(){mfp.content.css("visibility","visible")},_mfpOn("BuildControls"+ns,function(){mfp._allowZoom()&&(clearTimeout(openTimeout),mfp.content.css("visibility","hidden"),(image=mfp._getItemToZoom())?((animatedImg=getElToAnimate(image)).css(mfp._getOffset()),mfp.wrap.append(animatedImg),openTimeout=setTimeout(function(){animatedImg.css(mfp._getOffset(!0)),openTimeout=setTimeout(function(){showMainContent(),setTimeout(function(){animatedImg.remove(),image=animatedImg=null,_mfpTrigger("ZoomAnimationEnded")},16)},duration)},16)):showMainContent())}),_mfpOn("BeforeClose"+ns,function(){if(mfp._allowZoom()){if(clearTimeout(openTimeout),mfp.st.removalDelay=duration,!image){if(!(image=mfp._getItemToZoom()))return;animatedImg=getElToAnimate(image)}animatedImg.css(mfp._getOffset(!0)),mfp.wrap.append(animatedImg),mfp.content.css("visibility","hidden"),setTimeout(function(){animatedImg.css(mfp._getOffset())},16)}}),_mfpOn("Close"+ns,function(){mfp._allowZoom()&&(showMainContent(),animatedImg&&animatedImg.remove(),image=null)}))},_allowZoom:function(){return"image"===mfp.currItem.type},_getItemToZoom:function(){return!!mfp.currItem.hasSize&&mfp.currItem.img},_getOffset:function(isLarge){var isLarge=isLarge?mfp.currItem.img:mfp.st.zoom.opener(mfp.currItem.el||mfp.currItem),offset=isLarge.offset(),paddingTop=parseInt(isLarge.css("padding-top"),10),paddingBottom=parseInt(isLarge.css("padding-bottom"),10),isLarge=(offset.top-=$(window).scrollTop()-paddingTop,{width:isLarge.width(),height:(_isJQ?isLarge.innerHeight():isLarge[0].offsetHeight)-paddingBottom-paddingTop});return(hasMozTransform=void 0===hasMozTransform?void 0!==document.createElement("p").style.MozTransform:hasMozTransform)?isLarge["-moz-transform"]=isLarge.transform="translate("+offset.left+"px,"+offset.top+"px)":(isLarge.left=offset.left,isLarge.top=offset.top),isLarge}}}),$.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){mfp.types.push("iframe"),_mfpOn("BeforeChange",function(e,prevType,newType){prevType!==newType&&("iframe"===prevType?_fixIframeBugs():"iframe"===newType&&_fixIframeBugs(!0))}),_mfpOn("Close.iframe",function(){_fixIframeBugs()})},getIframe:function(item,template){var embedSrc=item.src,iframeSt=mfp.st.iframe,dataObj=($.each(iframeSt.patterns,function(){if(-1<embedSrc.indexOf(this.index))return this.id&&(embedSrc="string"==typeof this.id?embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length,embedSrc.length):this.id.call(this,embedSrc)),embedSrc=this.src.replace("%id%",embedSrc),!1}),{});return iframeSt.srcAction&&(dataObj[iframeSt.srcAction]=embedSrc),mfp._parseMarkup(template,dataObj,item),mfp.updateStatus("ready"),template}}}),$.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var gSt=mfp.st.gallery,ns=".mfp-gallery",supportsFastClick=Boolean($.fn.mfpFastClick);if(mfp.direction=!0,!gSt||!gSt.enabled)return!1;_wrapClasses+=" mfp-gallery",_mfpOn("Open"+ns,function(){gSt.navigateByImgClick&&mfp.wrap.on("click"+ns,".mfp-img",function(){if(1<mfp.items.length)return mfp.next(),!1}),_document.on("keydown"+ns,function(e){37===e.keyCode?mfp.prev():39===e.keyCode&&mfp.next()})}),_mfpOn("UpdateStatus"+ns,function(e,data){data.text&&(data.text=_replaceCurrTotal(data.text,mfp.currItem.index,mfp.items.length))}),_mfpOn("MarkupParse"+ns,function(e,element,values,item){var l=mfp.items.length;values.counter=1<l?_replaceCurrTotal(gSt.tCounter,item.index,l):""}),_mfpOn("BuildControls"+ns,function(){var arrowLeft,markup,eName;1<mfp.items.length&&gSt.arrows&&!mfp.arrowLeft&&(markup=gSt.arrowMarkup,arrowLeft=mfp.arrowLeft=$(markup.replace(/%title%/gi,gSt.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),markup=mfp.arrowRight=$(markup.replace(/%title%/gi,gSt.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close"),arrowLeft[eName=supportsFastClick?"mfpFastClick":"click"](function(){mfp.prev()}),markup[eName](function(){mfp.next()}),mfp.isIE7&&(_getEl("b",arrowLeft[0],!1,!0),_getEl("a",arrowLeft[0],!1,!0),_getEl("b",markup[0],!1,!0),_getEl("a",markup[0],!1,!0)),mfp.container.append(arrowLeft.add(markup)))}),_mfpOn("Change"+ns,function(){mfp._preloadTimeout&&clearTimeout(mfp._preloadTimeout),mfp._preloadTimeout=setTimeout(function(){mfp.preloadNearbyImages(),mfp._preloadTimeout=null},16)}),_mfpOn("Close"+ns,function(){_document.off(ns),mfp.wrap.off("click"+ns),mfp.arrowLeft&&supportsFastClick&&mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick(),mfp.arrowRight=mfp.arrowLeft=null})},next:function(){mfp.direction=!0,mfp.index=_getLoopedId(mfp.index+1),mfp.updateItemHTML()},prev:function(){mfp.direction=!1,mfp.index=_getLoopedId(mfp.index-1),mfp.updateItemHTML()},goTo:function(newIndex){mfp.direction=newIndex>=mfp.index,mfp.index=newIndex,mfp.updateItemHTML()},preloadNearbyImages:function(){for(var p=mfp.st.gallery.preload,preloadBefore=Math.min(p[0],mfp.items.length),preloadAfter=Math.min(p[1],mfp.items.length),i=1;i<=(mfp.direction?preloadAfter:preloadBefore);i++)mfp._preloadItem(mfp.index+i);for(i=1;i<=(mfp.direction?preloadBefore:preloadAfter);i++)mfp._preloadItem(mfp.index-i)},_preloadItem:function(index){var item;index=_getLoopedId(index),mfp.items[index].preloaded||((item=mfp.items[index]).parsed||(item=mfp.parseEl(index)),_mfpTrigger("LazyLoad",item),"image"===item.type&&(item.img=$('<img class="mfp-img" />').on("load.mfploader",function(){item.hasSize=!0}).on("error.mfploader",function(){item.hasSize=!0,item.loadError=!0,_mfpTrigger("LazyLoadError",item)}).attr("src",item.src)),item.preloaded=!0)}}});function unbindTouchMove(){_window.off("touchmove"+ns+" touchend"+ns)}$.magnificPopup.registerModule("retina",{options:{replaceSrc:function(item){return item.src.replace(/\.\w+$/,function(m){return"@2x"+m})},ratio:1},proto:{initRetina:function(){var st,ratio;1<window.devicePixelRatio&&(st=mfp.st.retina,ratio=st.ratio,1<(ratio=isNaN(ratio)?ratio():ratio)&&(_mfpOn("ImageHasSize.retina",function(e,item){item.img.css({"max-width":item.img[0].naturalWidth/ratio,width:"100%"})}),_mfpOn("ElementParse.retina",function(e,item){item.src=st.replaceSrc(item,ratio)})))}}}),supportsTouch="ontouchstart"in window,ns=".mfpFastClick",$.fn.mfpFastClick=function(callback){return $(this).each(function(){var lock,timeout,startX,startY,pointerMoved,point,numPointers,elem=$(this);supportsTouch&&elem.on("touchstart"+ns,function(e){pointerMoved=!1,numPointers=1,point=(e.originalEvent||e).touches[0],startX=point.clientX,startY=point.clientY,_window.on("touchmove"+ns,function(e){point=(e.originalEvent||e).touches,numPointers=point.length,point=point[0],(10<Math.abs(point.clientX-startX)||10<Math.abs(point.clientY-startY))&&(pointerMoved=!0,unbindTouchMove())}).on("touchend"+ns,function(e){unbindTouchMove(),pointerMoved||1<numPointers||(lock=!0,e.preventDefault(),clearTimeout(timeout),timeout=setTimeout(function(){lock=!1},1e3),callback())})}),elem.on("click"+ns,function(){lock||callback()})})},$.fn.destroyMfpFastClick=function(){$(this).off("touchstart"+ns+" click"+ns),supportsTouch&&_window.off("touchmove"+ns+" touchend"+ns)},_checkInstance()}(window.jQuery||window.Zepto),function($){$.Jcrop=function(obj,opt){var options=$.extend({},$.Jcrop.defaults),_ua=navigator.userAgent.toLowerCase(),is_msie=/msie/.test(_ua),_ua=/msie [1-6]\./.test(_ua);function px(n){return Math.round(n)+"px"}function cssClass(cl){return options.baseClass+"-"+cl}function getPos(obj){obj=$(obj).offset();return[obj.left,obj.top]}function mouseAbs(e){return[e.pageX-docOffset[0],e.pageY-docOffset[1]]}function setOptions(opt){options=$.extend(options,opt="object"!=typeof opt?{}:opt),$.each(["onChange","onSelect","onRelease","onDblClick"],function(i,e){"function"!=typeof options[e]&&(options[e]=function(){})})}function startDragMode(mode,pos,touch){if(docOffset=getPos($img),Tracker.setCursor("move"===mode?mode:mode+"-resize"),"move"===mode)return Tracker.activateHandlers(function(pos){var lloc=pos;return KeyManager.watchKeys(),function(pos){Coords.moveOffset([pos[0]-lloc[0],pos[1]-lloc[1]]),lloc=pos,Selection.update()}}(pos),doneSelect,touch);var pos=Coords.getFixed(),opp=oppLockCorner(mode),opc=Coords.getCorner(oppLockCorner(opp));Coords.setPressed(Coords.getCorner(opp)),Coords.setCurrent(opc),Tracker.activateHandlers(function(mode,f){return function(pos){if(options.aspectRatio)switch(mode){case"e":case"w":pos[1]=f.y+1;break;case"n":case"s":pos[0]=f.x+1}else switch(mode){case"e":case"w":pos[1]=f.y2;break;case"n":case"s":pos[0]=f.x2}Coords.setCurrent(pos),Selection.update()}}(mode,pos),doneSelect,touch)}function oppLockCorner(ord){switch(ord){case"n":return"sw";case"s":case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function createDragger(ord){return function(e){return options.disabled||"move"===ord&&!options.allowMove||(docOffset=getPos($img),btndown=!0,startDragMode(ord,mouseAbs(e)),e.stopPropagation(),e.preventDefault()),!1}}function presize($obj,w,h){var nw=$obj.width(),nh=$obj.height();h<(nh=w<nw&&0<w?(nw=w)/$obj.width()*$obj.height():nh)&&0<h&&(nw=(nh=h)/$obj.height()*$obj.width()),xscale=$obj.width()/nw,yscale=$obj.height()/nh,$obj.width(nw).height(nh)}function unscale(c){return{x:c.x*xscale,y:c.y*yscale,x2:c.x2*xscale,y2:c.y2*yscale,w:c.w*xscale,h:c.h*yscale}}function doneSelect(pos){var c=Coords.getFixed();c.w>options.minSelect[0]&&c.h>options.minSelect[1]?(Selection.enableHandles(),Selection.done()):Selection.release(),Tracker.setCursor(options.allowSelect?"crosshair":"default")}function newSelection(e){if(options.disabled)return!1;if(!options.allowSelect)return!1;btndown=!0,docOffset=getPos($img),Selection.disableHandles(),Tracker.setCursor("crosshair");var pos=mouseAbs(e);return Coords.setPressed(pos),Selection.update(),Tracker.activateHandlers(selectDrag,doneSelect,"touch"===e.type.substring(0,5)),KeyManager.watchKeys(),e.stopPropagation(),e.preventDefault(),!1}function selectDrag(pos){Coords.setCurrent(pos),Selection.update()}function newTracker(){var trk=$("<div></div>").addClass(cssClass("tracker"));return is_msie&&trk.css({opacity:0,backgroundColor:"white"}),trk}"object"!=typeof obj&&(obj=$(obj)[0]),setOptions(opt="object"!=typeof opt?{}:opt);var $img,xlimit,ylimit,xmin,ymin,xscale,yscale,btndown,animating,opt={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},$origimg=$(obj),img_mode=!0,boundx=("IMG"==obj.tagName?(0!=$origimg[0].width&&0!=$origimg[0].height?($origimg.width($origimg[0].width),$origimg.height($origimg[0].height)):((tempImage=new Image).src=$origimg[0].src,$origimg.width(tempImage.width),$origimg.height(tempImage.height)),($img=$origimg.clone().removeAttr("id").css(opt).show()).width($origimg.width()),$img.height($origimg.height()),$origimg.after($img).hide()):($img=$origimg.css(opt).show(),img_mode=!1,null===options.shade&&(options.shade=!0)),presize($img,options.boxWidth,options.boxHeight),$img.width()),boundy=$img.height(),$div=$("<div />").width(boundx).height(boundy).addClass(cssClass("holder")).css({position:"relative",backgroundColor:options.bgColor}).insertAfter($origimg).append($img),$img2=(options.addClass&&$div.addClass(options.addClass),$("<div />")),$img_holder=$("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),$hdl_holder=$("<div />").width("100%").height("100%").css("zIndex",320),$sel=$("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var c=Coords.getFixed();options.onDblClick.call(api,c)}).insertBefore($img).append($img_holder,$hdl_holder),bound=(img_mode&&($img2=$("<img />").attr("src",$img.attr("src")).css(opt).width(boundx).height(boundy),$img_holder.append($img2)),_ua&&$sel.css({overflowY:"hidden"}),options.boundary),$trk=newTracker().width(boundx+2*bound).height(boundy+2*bound).css({position:"absolute",top:px(-bound),left:px(-bound),zIndex:290}).mousedown(newSelection),bgcolor=options.bgColor,bgopacity=options.bgOpacity,docOffset=getPos($img),Touch={createDragger:function(ord){return function(e){return options.disabled||"move"===ord&&!options.allowMove||(docOffset=getPos($img),btndown=!0,startDragMode(ord,mouseAbs(Touch.cfilter(e)),!0),e.stopPropagation(),e.preventDefault()),!1}},newSelection:function(e){return newSelection(Touch.cfilter(e))},cfilter:function(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,e},isSupported:hasTouchSupport,support:!0===options.touchSupport||!1===options.touchSupport?options.touchSupport:hasTouchSupport()};function hasTouchSupport(){var i,support={},events=["touchstart","touchmove","touchend"],el=document.createElement("div");try{for(i=0;i<events.length;i++){var eventName,isSupported=(eventName="on"+events[i])in el;isSupported||(el.setAttribute(eventName,"return;"),isSupported="function"==typeof el[eventName]),support[events[i]]=isSupported}return support.touchstart&&support.touchend&&support.touchmove}catch(err){return!1}}y2=x2=y1=x1=0;var ox,oy,x1,y1,x2,y2,Coords={flipCoords:flipCoords,setPressed:function(pos){pos=rebound(pos),x2=x1=pos[0],y2=y1=pos[1]},setCurrent:function(pos){pos=rebound(pos),ox=pos[0]-x2,oy=pos[1]-y2,x2=pos[0],y2=pos[1]},getOffset:function(){return[ox,oy]},moveOffset:function(offset){var ox=offset[0],offset=offset[1];x1+ox<0&&(ox-=ox+x1),y1+offset<0&&(offset-=offset+y1),boundy<y2+offset&&(offset+=boundy-(y2+offset)),boundx<x2+ox&&(ox+=boundx-(x2+ox)),x1+=ox,x2+=ox,y1+=offset,y2+=offset},getCorner:function(ord){var c=getFixed();switch(ord){case"ne":return[c.x2,c.y];case"nw":return[c.x,c.y];case"se":return[c.x2,c.y2];case"sw":return[c.x,c.y2]}},getFixed:getFixed};function getFixed(){if(!options.aspectRatio)return xsize=x2-x1,ysize=y2-y1,xlimit&&Math.abs(xsize)>xlimit&&(x2=0<xsize?x1+xlimit:x1-xlimit),ylimit&&Math.abs(ysize)>ylimit&&(y2=0<ysize?y1+ylimit:y1-ylimit),ymin/yscale&&Math.abs(ysize)<ymin/yscale&&(y2=0<ysize?y1+ymin/yscale:y1-ymin/yscale),xmin/xscale&&Math.abs(xsize)<xmin/xscale&&(x2=0<xsize?x1+xmin/xscale:x1-xmin/xscale),x1<0&&(x2-=x1,x1-=x1),y1<0&&(y2-=y1,y1-=y1),x2<0&&(x1-=x2,x2-=x2),y2<0&&(y1-=y2,y2-=y2),boundx<x2&&(x1-=delta=x2-boundx,x2-=delta),boundy<y2&&(y1-=delta=y2-boundy,y2-=delta),boundx<x1&&(y2-=delta=x1-boundy,y1-=delta),boundy<y1&&(y2-=delta=y1-boundy,y1-=delta),makeObj(flipCoords(x1,y1,x2,y2));var xx,yy,w,h,ysize=options.aspectRatio,xsize=options.minSize[0]/xscale,delta=options.maxSize[0]/xscale,max_y=options.maxSize[1]/yscale,rw=x2-x1,rh=y2-y1,rwa=Math.abs(rw),rha=Math.abs(rh);return 0===delta&&(delta=10*boundx),0==max_y&&0,rwa/rha<ysize?(yy=y2,w=rha*ysize,(xx=rw<0?x1-w:w+x1)<0?(xx=0,h=Math.abs((xx-x1)/ysize),yy=rh<0?y1-h:h+y1):boundx<xx&&(xx=boundx,h=Math.abs((xx-x1)/ysize),yy=rh<0?y1-h:h+y1)):(xx=x2,h=rwa/ysize,(yy=rh<0?y1-h:y1+h)<0?(yy=0,w=Math.abs((yy-y1)*ysize),xx=rw<0?x1-w:w+x1):boundy<yy&&(yy=boundy,w=Math.abs(yy-y1)*ysize,xx=rw<0?x1-w:w+x1)),x1<xx?(xx-x1<xsize?xx=x1+xsize:delta<xx-x1&&(xx=x1+delta),yy=y1<yy?y1+(xx-x1)/ysize:y1-(xx-x1)/ysize):xx<x1&&(x1-xx<xsize?xx=x1-xsize:delta<x1-xx&&(xx=x1-delta),yy=y1<yy?y1+(x1-xx)/ysize:y1-(x1-xx)/ysize),xx<0?(x1-=xx,xx=0):boundx<xx&&(x1-=xx-boundx,xx=boundx),yy<0?(y1-=yy,yy=0):boundy<yy&&(y1-=yy-boundy,yy=boundy),makeObj(flipCoords(x1,y1,xx,yy))}function rebound(p){return p[0]<0&&(p[0]=0),p[1]<0&&(p[1]=0),p[0]>boundx&&(p[0]=boundx),p[1]>boundy&&(p[1]=boundy),[Math.round(p[0]),Math.round(p[1])]}function flipCoords(x1,y1,x2,y2){var xa=x1,xb=x2,ya=y1,yb=y2;return x2<x1&&(xa=x2,xb=x1),y2<y1&&(ya=y2,yb=y1),[xa,ya,xb,yb]}function makeObj(a){return{x:a[0],y:a[1],x2:a[2],y2:a[3],w:a[2]-a[0],h:a[3]-a[1]}}var awake,hdep,borders,handle,dragbar,seehandles,$track,Shade=function(){var enabled=!1,holder=$("<div />").css({position:"absolute",zIndex:240,opacity:0}),shades={top:createShade(),left:createShade().height(boundy),right:createShade().height(boundy),bottom:createShade()};function updateAuto(){return updateShade(Coords.getFixed())}function updateShade(c){shades.top.css({left:px(c.x),width:px(c.w),height:px(c.y)}),shades.bottom.css({top:px(c.y2),left:px(c.x),width:px(c.w),height:px(boundy-c.y2)}),shades.right.css({left:px(c.x2),width:px(boundx-c.x2)}),shades.left.css({width:px(c.x)})}function createShade(){return $("<div />").css({position:"absolute",backgroundColor:options.shadeColor||options.bgColor}).appendTo(holder)}function enableShade(){enabled||(enabled=!0,holder.insertBefore($img),updateAuto(),Selection.setBgOpacity(1,0,1),$img2.hide(),setBgColor(options.shadeColor||options.bgColor,1),Selection.isAwake()?setOpacity(options.bgOpacity,1):setOpacity(1,1))}function setBgColor(color,now){colorChangeMacro(getShades(),color,now)}function disableShade(){enabled&&(holder.remove(),$img2.show(),enabled=!1,Selection.isAwake()?Selection.setBgOpacity(options.bgOpacity,1,1):(Selection.setBgOpacity(1,1,1),Selection.disableHandles()),colorChangeMacro($div,0,1))}function setOpacity(opacity,now){enabled&&(options.bgFade&&!now?holder.animate({opacity:1-opacity},{queue:!1,duration:options.fadeTime}):holder.css({opacity:1-opacity}))}function getShades(){return holder.children()}return{update:updateAuto,updateRaw:updateShade,getShades:getShades,setBgColor:setBgColor,enable:enableShade,disable:disableShade,resize:function(w,h){shades.left.css({height:px(h)}),shades.right.css({height:px(h)})},refresh:function(){(options.shade?enableShade:disableShade)(),Selection.isAwake()&&setOpacity(options.bgOpacity)},opacity:setOpacity}}(),Selection=(hdep=370,borders={},handle={},seehandles=!(dragbar={}),options.dragEdges&&$.isArray(options.createDragbars)&&createDragbars(options.createDragbars),$.isArray(options.createHandles)&&createHandles(options.createHandles),options.drawBorders&&$.isArray(options.createBorders)&&createBorders(options.createBorders),$(document).bind("touchstart.jcrop-ios",function(e){$(e.currentTarget).hasClass("jcrop-tracker")&&e.stopPropagation()}),$track=newTracker().mousedown(createDragger("move")).css({cursor:"move",position:"absolute",zIndex:360}),Touch.support&&$track.bind("touchstart.jcrop",Touch.createDragger("move")),$img_holder.append($track),disableHandles(),{updateVisible:updateVisible,update:update,release:function(){disableHandles(),$sel.hide(),options.shade?Shade.opacity(1):setBgOpacity(1),awake=!1,options.onRelease.call(api)},refresh:refresh,isAwake:function(){return awake},setCursor:function(cursor){$track.css("cursor",cursor)},enableHandles:enableHandles,enableOnly:function(){seehandles=!0},showHandles:function(){seehandles&&$hdl_holder.show()},disableHandles:disableHandles,animMode:animMode,setBgOpacity:setBgOpacity,done:function(){animMode(!1),refresh()}});function dragDiv(ord,zi){zi=$("<div />").mousedown(createDragger(ord)).css({cursor:ord+"-resize",position:"absolute",zIndex:zi}).addClass("ord-"+ord);return Touch.support&&zi.bind("touchstart.jcrop",Touch.createDragger(ord)),$hdl_holder.append(zi),zi}function createDragbars(li){for(var i=0;i<li.length;i++)dragbar[li[i]]=dragDiv(li[i],hdep++).addClass("jcrop-dragbar")}function createBorders(li){for(var cl,type,i=0;i<li.length;i++){switch(li[i]){case"n":cl="hline";break;case"s":cl="hline bottom";break;case"e":cl="vline right";break;case"w":cl="vline"}borders[li[i]]=(type=cl,type=$("<div />").css({position:"absolute",opacity:options.borderOpacity}).addClass(cssClass(type)),$img_holder.append(type),type)}}function createHandles(li){for(var ord,hs,i=0;i<li.length;i++)handle[li[i]]=(ord=li[i],hs=void 0,hs=options.handleSize,ord=dragDiv(ord,hdep++).css({opacity:options.handleOpacity}).addClass(cssClass("handle")),hs&&ord.width(hs).height(hs),ord)}function refresh(){var c=Coords.getFixed();Coords.setPressed([c.x,c.y]),Coords.setCurrent([c.x2,c.y2]),updateVisible()}function updateVisible(select){if(awake)return update(select)}function update(select){var w,h,c=Coords.getFixed();w=c.w,h=c.h,$sel.width(Math.round(w)).height(Math.round(h)),w=c.x,h=c.y,options.shade||$img2.css({top:px(-h),left:px(-w)}),$sel.css({top:px(h),left:px(w)}),options.shade&&Shade.updateRaw(c),awake||($sel.show(),options.shade?Shade.opacity(bgopacity):setBgOpacity(bgopacity,!0),awake=!0);(select?options.onSelect:options.onChange).call(api,unscale(c))}function setBgOpacity(opacity,force,now){(awake||force)&&(options.bgFade&&!now?$img.animate({opacity:opacity},{queue:!1,duration:options.fadeTime}):$img.css("opacity",opacity))}function enableHandles(){if(seehandles=!0,options.allowResize)return $hdl_holder.show(),!0}function disableHandles(){seehandles=!1,$hdl_holder.hide()}function animMode(v){v?(animating=!0,disableHandles()):(animating=!1,enableHandles())}onMove=function(){},onDone=function(){},(trackDoc=options.trackDocument)||$trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp),$img.before($trk);var onMove,onDone,trackDoc,Tracker={activateHandlers:function(move,done,touch){return btndown=!0,onMove=move,onDone=done,function(touch){$trk.css({zIndex:450}),touch?$(document).bind("touchmove.jcrop",trackTouchMove).bind("touchend.jcrop",trackTouchEnd):trackDoc&&$(document).bind("mousemove.jcrop",trackMove).bind("mouseup.jcrop",trackUp)}(touch),!1},setCursor:function(t){$trk.css("cursor",t)}};function trackMove(e){return onMove(mouseAbs(e)),!1}function trackUp(e){return e.preventDefault(),e.stopPropagation(),btndown&&(btndown=!1,onDone(mouseAbs(e)),Selection.isAwake()&&options.onSelect.call(api,unscale(Coords.getFixed())),$trk.css({zIndex:290}),$(document).unbind(".jcrop"),onMove=function(){},onDone=function(){}),!1}function trackTouchMove(e){return onMove(mouseAbs(Touch.cfilter(e))),!1}function trackTouchEnd(e){return trackUp(Touch.cfilter(e))}$keymgr=$('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),tempImage=$("<div />").css({position:"absolute",overflow:"hidden"}).append($keymgr),options.keySupport&&($keymgr.keydown(function(e){if(e.ctrlKey||e.metaKey)return!0;var nudge=!!e.shiftKey?10:1;switch(e.keyCode){case 37:doNudge(e,-nudge,0);break;case 39:doNudge(e,nudge,0);break;case 38:doNudge(e,0,-nudge);break;case 40:doNudge(e,0,nudge);break;case 27:options.allowSelect&&Selection.release();break;case 9:return!0}return!1}).blur(function(e){$keymgr.hide()}),_ua||!options.fixedSupport?($keymgr.css({position:"absolute",left:"-20px"}),tempImage.append($keymgr).insertBefore($img)):$keymgr.insertBefore($img));var $keymgr,tempImage,KeyManager={watchKeys:function(){options.keySupport&&($keymgr.show(),$keymgr.focus())}};function doNudge(e,x,y){options.allowMove&&(Coords.moveOffset([x,y]),Selection.updateVisible(!0)),e.preventDefault(),e.stopPropagation()}function setSelect(rect){setSelectRaw([rect[0]/xscale,rect[1]/yscale,rect[2]/xscale,rect[3]/yscale]),options.onSelect.call(api,unscale(Coords.getFixed())),Selection.enableHandles()}function setSelectRaw(l){Coords.setPressed([l[0],l[1]]),Coords.setCurrent([l[2],l[3]]),Selection.update()}function disableCrop(){options.disabled=!0,Selection.disableHandles(),Selection.setCursor("default"),Tracker.setCursor("default")}function enableCrop(){options.disabled=!1,interfaceUpdate()}function colorChangeMacro($obj,color,now){color=color||options.bgColor;options.bgFade&&$.fx.step.hasOwnProperty("backgroundColor")&&options.fadeTime&&!now?$obj.animate({backgroundColor:color},{queue:!1,duration:options.fadeTime}):$obj.css("backgroundColor",color)}function interfaceUpdate(alt){options.allowResize?alt?Selection.enableOnly():Selection.enableHandles():Selection.disableHandles(),Tracker.setCursor(options.allowSelect?"crosshair":"default"),Selection.setCursor(options.allowMove?"move":"default"),options.hasOwnProperty("trueSize")&&(xscale=options.trueSize[0]/boundx,yscale=options.trueSize[1]/boundy),options.hasOwnProperty("setSelect")&&(setSelect(options.setSelect),Selection.done(),delete options.setSelect),Shade.refresh(),options.bgColor!=bgcolor&&(colorChangeMacro(options.shade?Shade.getShades():$div,options.shade&&options.shadeColor||options.bgColor),bgcolor=options.bgColor),bgopacity!=options.bgOpacity&&(bgopacity=options.bgOpacity,options.shade?Shade.refresh():Selection.setBgOpacity(bgopacity)),xlimit=options.maxSize[0]||0,ylimit=options.maxSize[1]||0,xmin=options.minSize[0]||0,ymin=options.minSize[1]||0,options.hasOwnProperty("outerImage")&&($img.attr("src",options.outerImage),delete options.outerImage),Selection.refresh()}Touch.support&&$trk.bind("touchstart.jcrop",Touch.newSelection),$hdl_holder.hide(),interfaceUpdate(!0);var api={setImage:function(src,callback){Selection.release(),disableCrop();var img=new Image;img.onload=function(){var iw=img.width,ih=img.height,bw=options.boxWidth,bh=options.boxHeight;$img.width(iw).height(ih),$img.attr("src",src),$img2.attr("src",src),presize($img,bw,bh),boundx=$img.width(),boundy=$img.height(),$img2.width(boundx).height(boundy),$trk.width(boundx+2*bound).height(boundy+2*bound),$div.width(boundx).height(boundy),Shade.resize(boundx,boundy),enableCrop(),"function"==typeof callback&&callback.call(api)},img.src=src},animateTo:function(a,callback){var c,animat,interv,ix1,iy1,ix2,iy2,pcent,velocity,animator,x1=a[0]/xscale,y1=a[1]/yscale,x2=a[2]/xscale,y2=a[3]/yscale;function queueAnimator(){window.setTimeout(animator,interv)}animating||(a=Coords.flipCoords(x1,y1,x2,y2),c=[(c=Coords.getFixed()).x,c.y,c.x2,c.y2],animat=c,interv=options.animationDelay,ix1=a[0]-c[0],iy1=a[1]-c[1],ix2=a[2]-c[2],iy2=a[3]-c[3],pcent=0,velocity=options.swingSpeed,x1=animat[0],y1=animat[1],x2=animat[2],y2=animat[3],Selection.animMode(!0),animator=function(){pcent+=(100-pcent)/velocity,animat[0]=Math.round(x1+pcent/100*ix1),animat[1]=Math.round(y1+pcent/100*iy1),animat[2]=Math.round(x2+pcent/100*ix2),animat[3]=Math.round(y2+pcent/100*iy2),(pcent=99.8<=pcent?100:pcent)<100?(setSelectRaw(animat),queueAnimator()):(Selection.done(),Selection.animMode(!1),"function"==typeof callback&&callback.call(api))},queueAnimator())},setSelect:setSelect,setOptions:function(opt){setOptions(opt),interfaceUpdate()},tellSelect:function(){return unscale(Coords.getFixed())},tellScaled:function(){return Coords.getFixed()},setClass:function(cname){$div.removeClass().addClass(cssClass("holder")).addClass(cname)},disable:disableCrop,enable:enableCrop,cancel:function(){Selection.done(),Tracker.activateHandlers(null,null)},release:Selection.release,destroy:function(){$div.remove(),$origimg.show(),$origimg.css("visibility","visible"),$(obj).removeData("Jcrop")},focus:KeyManager.watchKeys,getBounds:function(){return[boundx*xscale,boundy*yscale]},getWidgetSize:function(){return[boundx,boundy]},getScaleFactor:function(){return[xscale,yscale]},getOptions:function(){return options},ui:{holder:$div,selection:$sel}};return is_msie&&$div.bind("selectstart",function(){return!1}),$origimg.data("Jcrop",api),api},$.fn.Jcrop=function(options,callback){var api;return this.each(function(){if($(this).data("Jcrop")){if("api"===options)return $(this).data("Jcrop");$(this).data("Jcrop").setOptions(options)}else"IMG"==this.tagName?$.Jcrop.Loader(this,function(){$(this).css({display:"block",visibility:"hidden"}),api=$.Jcrop(this,options),$.isFunction(callback)&&callback.call(api)}):($(this).css({display:"block",visibility:"hidden"}),api=$.Jcrop(this,options),$.isFunction(callback)&&callback.call(api))}),this},$.Jcrop.Loader=function(imgobj,success,error){var $img=$(imgobj),img=$img[0];$img.bind("load.jcloader",function completeCheck(){img.complete?($img.unbind(".jcloader"),$.isFunction(success)&&success.call(img)):window.setTimeout(completeCheck,50)}).bind("error.jcloader",function(e){$img.unbind(".jcloader"),$.isFunction(error)&&error.call(img)}),img.complete&&$.isFunction(success)&&($img.unbind(".jcloader"),success.call(img))},$.Jcrop.defaults={allowSelect:!0,allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:!1,borderOpacity:.4,handleOpacity:.5,handleSize:null,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges:!0,fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}}(jQuery),function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?factory(require("jquery")):factory(jQuery)}(function($){"use strict";var incrementingId,defaultSettings={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},getEventClassName=(incrementingId=0,function(){var id=incrementingId;return incrementingId+=1,".perfect-scrollbar-"+id});$.fn.perfectScrollbar=function(suppliedSettings,option){return this.each(function(){var settings=$.extend(!0,{},defaultSettings),$this=$(this);if("object"==typeof suppliedSettings?$.extend(!0,settings,suppliedSettings):option=suppliedSettings,"update"===option)return $this.data("perfect-scrollbar-update")&&$this.data("perfect-scrollbar-update")(),$this;if("destroy"===option)return $this.data("perfect-scrollbar-destroy")&&$this.data("perfect-scrollbar-destroy")(),$this;if($this.data("perfect-scrollbar"))return $this.data("perfect-scrollbar");$this.addClass("ps-container");var scrollbarXActive,scrollbarYActive,containerWidth,containerHeight,contentWidth,contentHeight,scrollbarXWidth,scrollbarXLeft,scrollbarYHeight,scrollbarYTop,ieMatch,$scrollbarXRail=$("<div class='ps-scrollbar-x-rail'></div>").appendTo($this),$scrollbarYRail=$("<div class='ps-scrollbar-y-rail'></div>").appendTo($this),$scrollbarX=$("<div class='ps-scrollbar-x'></div>").appendTo($scrollbarXRail),$scrollbarY=$("<div class='ps-scrollbar-y'></div>").appendTo($scrollbarYRail),scrollbarXBottom=parseInt($scrollbarXRail.css("bottom"),10),isScrollbarXUsingBottom=scrollbarXBottom==scrollbarXBottom,scrollbarXTop=isScrollbarXUsingBottom?null:parseInt($scrollbarXRail.css("top"),10),scrollbarYRight=parseInt($scrollbarYRail.css("right"),10),isScrollbarYUsingRight=scrollbarYRight==scrollbarYRight,scrollbarYLeft=isScrollbarYUsingRight?null:parseInt($scrollbarYRail.css("left"),10),isRtl="rtl"===$this.css("direction"),eventClassName=getEventClassName(),updateContentScrollTop=function(currentTop,deltaY){currentTop+=deltaY,deltaY=containerHeight-scrollbarYHeight,scrollbarYTop=currentTop<0?0:deltaY<currentTop?deltaY:currentTop,deltaY=parseInt(scrollbarYTop*(contentHeight-containerHeight)/(containerHeight-scrollbarYHeight),10);$this.scrollTop(deltaY),isScrollbarXUsingBottom?$scrollbarXRail.css({bottom:scrollbarXBottom-deltaY}):$scrollbarXRail.css({top:scrollbarXTop+deltaY})},updateContentScrollLeft=function(currentLeft,deltaX){currentLeft+=deltaX,deltaX=containerWidth-scrollbarXWidth,scrollbarXLeft=currentLeft<0?0:deltaX<currentLeft?deltaX:currentLeft,deltaX=parseInt(scrollbarXLeft*(contentWidth-containerWidth)/(containerWidth-scrollbarXWidth),10);$this.scrollLeft(deltaX),isScrollbarYUsingRight?$scrollbarYRail.css({right:scrollbarYRight-deltaX}):$scrollbarYRail.css({left:scrollbarYLeft+deltaX})},getSettingsAdjustedThumbSize=function(thumbSize){return thumbSize=settings.minScrollbarLength?Math.max(thumbSize,settings.minScrollbarLength):thumbSize},updateScrollbarCss=function(){var scrollbarXStyles={width:containerWidth,display:scrollbarXActive?"inherit":"none"},scrollbarXStyles=(scrollbarXStyles.left=isRtl?$this.scrollLeft()+containerWidth-contentWidth:$this.scrollLeft(),isScrollbarXUsingBottom?scrollbarXStyles.bottom=scrollbarXBottom-$this.scrollTop():scrollbarXStyles.top=scrollbarXTop+$this.scrollTop(),$scrollbarXRail.css(scrollbarXStyles),{top:$this.scrollTop(),height:containerHeight,display:scrollbarYActive?"inherit":"none"});isScrollbarYUsingRight?scrollbarXStyles.right=isRtl?contentWidth-$this.scrollLeft()-scrollbarYRight-$scrollbarY.outerWidth():scrollbarYRight-$this.scrollLeft():scrollbarXStyles.left=isRtl?$this.scrollLeft()+2*containerWidth-contentWidth-scrollbarYLeft-$scrollbarY.outerWidth():scrollbarYLeft+$this.scrollLeft(),$scrollbarYRail.css(scrollbarXStyles),$scrollbarX.css({left:scrollbarXLeft,width:scrollbarXWidth}),$scrollbarY.css({top:scrollbarYTop,height:scrollbarYHeight})},updateBarSizeAndPosition=function(){containerWidth=settings.includePadding?$this.innerWidth():$this.width(),containerHeight=settings.includePadding?$this.innerHeight():$this.height(),contentWidth=$this.prop("scrollWidth"),contentHeight=$this.prop("scrollHeight"),!settings.suppressScrollX&&containerWidth+settings.scrollXMarginOffset<contentWidth?(scrollbarXActive=!0,scrollbarXWidth=getSettingsAdjustedThumbSize(parseInt(containerWidth*containerWidth/contentWidth,10)),scrollbarXLeft=parseInt($this.scrollLeft()*(containerWidth-scrollbarXWidth)/(contentWidth-containerWidth),10)):(scrollbarXActive=!1,scrollbarXLeft=scrollbarXWidth=0,$this.scrollLeft(0)),!settings.suppressScrollY&&containerHeight+settings.scrollYMarginOffset<contentHeight?(scrollbarYActive=!0,scrollbarYHeight=getSettingsAdjustedThumbSize(parseInt(containerHeight*containerHeight/contentHeight,10)),scrollbarYTop=parseInt($this.scrollTop()*(containerHeight-scrollbarYHeight)/(contentHeight-containerHeight),10)):(scrollbarYActive=!1,scrollbarYTop=scrollbarYHeight=0,$this.scrollTop(0)),containerHeight-scrollbarYHeight<=scrollbarYTop&&(scrollbarYTop=containerHeight-scrollbarYHeight),containerWidth-scrollbarXWidth<=scrollbarXLeft&&(scrollbarXLeft=containerWidth-scrollbarXWidth),updateScrollbarCss()},bindMouseScrollXHandler=function(){var currentLeft,currentPageX;$scrollbarX.bind("mousedown"+eventClassName,function(e){currentPageX=e.pageX,currentLeft=$scrollbarX.position().left,$scrollbarXRail.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),$(document).bind("mousemove"+eventClassName,function(e){$scrollbarXRail.hasClass("in-scrolling")&&(updateContentScrollLeft(currentLeft,e.pageX-currentPageX),e.stopPropagation(),e.preventDefault())}),$(document).bind("mouseup"+eventClassName,function(e){$scrollbarXRail.hasClass("in-scrolling")&&$scrollbarXRail.removeClass("in-scrolling")}),currentLeft=currentPageX=null},bindMouseScrollYHandler=function(){var currentTop,currentPageY;$scrollbarY.bind("mousedown"+eventClassName,function(e){currentPageY=e.pageY,currentTop=$scrollbarY.position().top,$scrollbarYRail.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),$(document).bind("mousemove"+eventClassName,function(e){$scrollbarYRail.hasClass("in-scrolling")&&(updateContentScrollTop(currentTop,e.pageY-currentPageY),e.stopPropagation(),e.preventDefault())}),$(document).bind("mouseup"+eventClassName,function(e){$scrollbarYRail.hasClass("in-scrolling")&&$scrollbarYRail.removeClass("in-scrolling")}),currentTop=currentPageY=null},shouldPreventDefault=function(deltaX,deltaY){var scrollTop=$this.scrollTop();if(0===deltaX){if(!scrollbarYActive)return!1;if(0===scrollTop&&0<deltaY||contentHeight-containerHeight<=scrollTop&&deltaY<0)return!settings.wheelPropagation}scrollTop=$this.scrollLeft();if(0===deltaY){if(!scrollbarXActive)return!1;if(0===scrollTop&&deltaX<0||contentWidth-containerWidth<=scrollTop&&0<deltaX)return!settings.wheelPropagation}return!0},bindMouseWheelHandler=function(){settings.wheelSpeed/=10;var shouldPrevent=!1;$this.bind("mousewheel"+eventClassName,function(e,deprecatedDelta,deprecatedDeltaX,deprecatedDeltaY){deprecatedDeltaX=e.deltaX*e.deltaFactor||deprecatedDeltaX,deprecatedDeltaY=e.deltaY*e.deltaFactor||deprecatedDeltaY;shouldPrevent=!1,settings.useBothWheelAxes?scrollbarYActive&&!scrollbarXActive?(deprecatedDeltaY?$this.scrollTop($this.scrollTop()-deprecatedDeltaY*settings.wheelSpeed):$this.scrollTop($this.scrollTop()+deprecatedDeltaX*settings.wheelSpeed),shouldPrevent=!0):scrollbarXActive&&!scrollbarYActive&&(deprecatedDeltaX?$this.scrollLeft($this.scrollLeft()+deprecatedDeltaX*settings.wheelSpeed):$this.scrollLeft($this.scrollLeft()-deprecatedDeltaY*settings.wheelSpeed),shouldPrevent=!0):($this.scrollTop($this.scrollTop()-deprecatedDeltaY*settings.wheelSpeed),$this.scrollLeft($this.scrollLeft()+deprecatedDeltaX*settings.wheelSpeed)),updateBarSizeAndPosition(),(shouldPrevent=shouldPrevent||shouldPreventDefault(deprecatedDeltaX,deprecatedDeltaY))&&(e.stopPropagation(),e.preventDefault())}),$this.bind("MozMousePixelScroll"+eventClassName,function(e){shouldPrevent&&e.preventDefault()})},bindKeyboardHandler=function(){var hovered=!1;$this.bind("mouseenter"+eventClassName,function(e){hovered=!0}),$this.bind("mouseleave"+eventClassName,function(e){hovered=!1});$(document).bind("keydown"+eventClassName,function(e){if(hovered&&!$(document.activeElement).is(":input,[contenteditable]")){var deltaX=0,deltaY=0;switch(e.which){case 37:deltaX=-30;break;case 38:deltaY=30;break;case 39:deltaX=30;break;case 40:deltaY=-30;break;case 33:deltaY=90;break;case 32:case 34:deltaY=-90;break;case 35:deltaY=-containerHeight;break;case 36:deltaY=containerHeight;break;default:return}$this.scrollTop($this.scrollTop()-deltaY),$this.scrollLeft($this.scrollLeft()+deltaX),shouldPreventDefault(deltaX,deltaY)&&e.preventDefault()}})},bindRailClickHandler=function(){function stopPropagation(e){e.stopPropagation()}$scrollbarY.bind("click"+eventClassName,stopPropagation),$scrollbarYRail.bind("click"+eventClassName,function(e){var halfOfScrollbarLength=parseInt(scrollbarYHeight/2,10),e=(e.pageY-$scrollbarYRail.offset().top-halfOfScrollbarLength)/(containerHeight-scrollbarYHeight);e<0?e=0:1<e&&(e=1),$this.scrollTop((contentHeight-containerHeight)*e)}),$scrollbarX.bind("click"+eventClassName,stopPropagation),$scrollbarXRail.bind("click"+eventClassName,function(e){var halfOfScrollbarLength=parseInt(scrollbarXWidth/2,10),e=(e.pageX-$scrollbarXRail.offset().left-halfOfScrollbarLength)/(containerWidth-scrollbarXWidth);e<0?e=0:1<e&&(e=1),$this.scrollLeft((contentWidth-containerWidth)*e)})},bindMobileTouchHandler=function(){function applyTouchMove(differenceX,differenceY){$this.scrollTop($this.scrollTop()-differenceY),$this.scrollLeft($this.scrollLeft()-differenceX),updateBarSizeAndPosition()}var startCoords={},startTime=0,speed={},breakingProcess=null,inGlobalTouch=!1;$(window).bind("touchstart"+eventClassName,function(e){inGlobalTouch=!0}),$(window).bind("touchend"+eventClassName,function(e){inGlobalTouch=!1}),$this.bind("touchstart"+eventClassName,function(e){var touch=e.originalEvent.targetTouches[0];startCoords.pageX=touch.pageX,startCoords.pageY=touch.pageY,startTime=(new Date).getTime(),null!==breakingProcess&&clearInterval(breakingProcess),e.stopPropagation()}),$this.bind("touchmove"+eventClassName,function(e){var touch,differenceY,currentCoords,timeGap;inGlobalTouch||1!==e.originalEvent.targetTouches.length||(touch=e.originalEvent.targetTouches[0],(currentCoords={}).pageX=touch.pageX,currentCoords.pageY=touch.pageY,touch=currentCoords.pageX-startCoords.pageX,differenceY=currentCoords.pageY-startCoords.pageY,applyTouchMove(touch,differenceY),startCoords=currentCoords,0<(timeGap=(currentCoords=(new Date).getTime())-startTime)&&(speed.x=touch/timeGap,speed.y=differenceY/timeGap,startTime=currentCoords),e.preventDefault())}),$this.bind("touchend"+eventClassName,function(e){clearInterval(breakingProcess),breakingProcess=setInterval(function(){Math.abs(speed.x)<.01&&Math.abs(speed.y)<.01?clearInterval(breakingProcess):(applyTouchMove(30*speed.x,30*speed.y),speed.x*=.8,speed.y*=.8)},10)})},bindScrollHandler=function(){$this.bind("scroll"+eventClassName,function(e){updateBarSizeAndPosition()})},destroy=function(){$this.unbind(eventClassName),$(window).unbind(eventClassName),$(document).unbind(eventClassName),$this.data("perfect-scrollbar",null),$this.data("perfect-scrollbar-update",null),$this.data("perfect-scrollbar-destroy",null),$scrollbarX.remove(),$scrollbarY.remove(),$scrollbarXRail.remove(),$scrollbarYRail.remove(),$scrollbarXRail=$scrollbarYRail=$scrollbarX=$scrollbarY=scrollbarXActive=scrollbarYActive=containerWidth=containerHeight=contentWidth=contentHeight=scrollbarXWidth=scrollbarXLeft=scrollbarXBottom=isScrollbarXUsingBottom=scrollbarXTop=scrollbarYHeight=scrollbarYTop=scrollbarYRight=isScrollbarYUsingRight=scrollbarYLeft=isRtl=eventClassName=null},ieSupport=function(version){$this.addClass("ie").addClass("ie"+version);function mouseenter(){$(this).addClass("hover")}function mouseleave(){$(this).removeClass("hover")}6===version&&($this.bind("mouseenter"+eventClassName,mouseenter).bind("mouseleave"+eventClassName,mouseleave),$scrollbarXRail.bind("mouseenter"+eventClassName,mouseenter).bind("mouseleave"+eventClassName,mouseleave),$scrollbarYRail.bind("mouseenter"+eventClassName,mouseenter).bind("mouseleave"+eventClassName,mouseleave),$scrollbarX.bind("mouseenter"+eventClassName,mouseenter).bind("mouseleave"+eventClassName,mouseleave),$scrollbarY.bind("mouseenter"+eventClassName,mouseenter).bind("mouseleave"+eventClassName,mouseleave),updateScrollbarCss=function(){var scrollbarXStyles={left:scrollbarXLeft+$this.scrollLeft(),width:scrollbarXWidth},scrollbarXStyles=(isScrollbarXUsingBottom?scrollbarXStyles.bottom=scrollbarXBottom:scrollbarXStyles.top=scrollbarXTop,$scrollbarX.css(scrollbarXStyles),{top:scrollbarYTop+$this.scrollTop(),height:scrollbarYHeight});isScrollbarYUsingRight?scrollbarXStyles.right=scrollbarYRight:scrollbarXStyles.left=scrollbarYLeft,$scrollbarY.css(scrollbarXStyles),$scrollbarX.hide().show(),$scrollbarY.hide().show()})},supportsTouch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;return(ieMatch=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/))&&"msie"===ieMatch[1]&&ieSupport(parseInt(ieMatch[2],10)),updateBarSizeAndPosition(),bindScrollHandler(),bindMouseScrollXHandler(),bindMouseScrollYHandler(),bindRailClickHandler(),supportsTouch&&bindMobileTouchHandler(),$this.mousewheel&&bindMouseWheelHandler(),settings.useKeyboard&&bindKeyboardHandler(),$this.data("perfect-scrollbar",$this),$this.data("perfect-scrollbar-update",updateBarSizeAndPosition),$this.data("perfect-scrollbar-destroy",destroy),$this})}}),function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory:factory(jQuery)}(function($){var nullLowestDeltaTimeout,lowestDelta,toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice;if($.event.fixHooks)for(var i=toFix.length;i;)$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var i=toBind.length;i;)this.addEventListener(toBind[--i],handler,!1);else this.onmousewheel=handler;$.data(this,"mousewheel-line-height",special.getLineHeight(this)),$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=toBind.length;i;)this.removeEventListener(toBind[--i],handler,!1);else this.onmousewheel=null},getLineHeight:function(elem){return parseInt($(elem)["offsetParent"in $.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:!0}};function handler(event){var lineHeight,orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0;if((event=$.event.fix(orgEvent)).type="mousewheel","detail"in orgEvent&&(deltaY=-1*orgEvent.detail),"wheelDelta"in orgEvent&&(deltaY=orgEvent.wheelDelta),"wheelDeltaY"in orgEvent&&(deltaY=orgEvent.wheelDeltaY),"wheelDeltaX"in orgEvent&&(deltaX=-1*orgEvent.wheelDeltaX),"axis"in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS&&(deltaX=-1*deltaY,deltaY=0),delta=0===deltaY?deltaX:deltaY,"deltaY"in orgEvent&&(delta=deltaY=-1*orgEvent.deltaY),"deltaX"in orgEvent&&(deltaX=orgEvent.deltaX,0===deltaY&&(delta=-1*deltaX)),0!==deltaY||0!==deltaX)return 1===orgEvent.deltaMode?(delta*=lineHeight=$.data(this,"mousewheel-line-height"),deltaY*=lineHeight,deltaX*=lineHeight):2===orgEvent.deltaMode&&(delta*=lineHeight=$.data(this,"mousewheel-page-height"),deltaY*=lineHeight,deltaX*=lineHeight),lineHeight=Math.max(Math.abs(deltaY),Math.abs(deltaX)),(!lowestDelta||lineHeight<lowestDelta)&&shouldAdjustOldDeltas(orgEvent,lowestDelta=lineHeight)&&(lowestDelta/=40),shouldAdjustOldDeltas(orgEvent,lineHeight)&&(delta/=40,deltaX/=40,deltaY/=40),delta=Math[1<=delta?"floor":"ceil"](delta/lowestDelta),deltaX=Math[1<=deltaX?"floor":"ceil"](deltaX/lowestDelta),deltaY=Math[1<=deltaY?"floor":"ceil"](deltaY/lowestDelta),event.deltaX=deltaX,event.deltaY=deltaY,event.deltaFactor=lowestDelta,event.deltaMode=0,args.unshift(event,delta,deltaX,deltaY),nullLowestDeltaTimeout&&clearTimeout(nullLowestDeltaTimeout),nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200),($.event.dispatch||$.event.handle).apply(this,args)}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&"mousewheel"===orgEvent.type&&absDelta%120==0}$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/*! svg.js v2.7.1 MIT*/;!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t,t.document)}):"object"==typeof exports?module.exports=t.document?e(t,t.document):function(t){return e(t,t.document)}:t.SVG=e(t,t.document)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e,i,n){return i+n.replace(b.regex.dots," .")}function n(t){for(var e=t.slice(0),i=e.length;i--;)Array.isArray(e[i])&&(e[i]=n(e[i]));return e}function r(t,e){return t instanceof e}function s(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}function o(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h(t){return 4==t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}function u(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function l(t,e,i){if(null==e||null==i){var n=t.bbox();null==e?e=n.width/n.height*i:null==i&&(i=n.height/n.width*e)}return{width:e,height:i}}function c(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function f(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function d(t){return t instanceof b.Matrix||(t=new b.Matrix(t)),t}function p(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function m(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e][0],null!=t[e][1]&&(n+=t[e][1],null!=t[e][2]&&(n+=" ",n+=t[e][2],null!=t[e][3]&&(n+=" ",n+=t[e][3],n+=" ",n+=t[e][4],null!=t[e][5]&&(n+=" ",n+=t[e][5],n+=" ",n+=t[e][6],null!=t[e][7]&&(n+=" ",n+=t[e][7])))));return n+" "}function x(e){for(var i=e.childNodes.length-1;i>=0;i--)e.childNodes[i]instanceof t.SVGElement&&x(e.childNodes[i]);return b.adopt(e).id(b.eid(e.nodeName))}function y(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function v(t){var e=(t||"").toString().match(b.regex.reference);if(e)return e[1]}function g(t){return Math.abs(t)>1e-37?t:0}var w=void 0!==this?this:t,b=w.SVG=function(t){if(b.supported)return t=new b.Doc(t),b.parser.draw||b.prepare(),t};if(b.ns="http://www.w3.org/2000/svg",b.xmlns="http://www.w3.org/2000/xmlns/",b.xlink="http://www.w3.org/1999/xlink",b.svgjs="http://svgjs.com/svgjs",b.supported=function(){return!!e.createElementNS&&!!e.createElementNS(b.ns,"svg").createSVGRect}(),!b.supported)return!1;b.did=1e3,b.eid=function(t){return"Svgjs"+a(t)+b.did++},b.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},b.extend=function(){var t,e,i,n;for(t=[].slice.call(arguments),e=t.pop(),n=t.length-1;n>=0;n--)if(t[n])for(i in e)t[n].prototype[i]=e[i];b.Set&&b.Set.inherit&&b.Set.inherit()},b.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,b.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&b.extend(e,t.extend),t.construct&&b.extend(t.parent||b.Container,t.construct),e},b.adopt=function(e){if(!e)return null;if(e.instance)return e.instance;var i;return i="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new b.Nested:new b.Doc:"linearGradient"==e.nodeName?new b.Gradient("linear"):"radialGradient"==e.nodeName?new b.Gradient("radial"):b[a(e.nodeName)]?new(b[a(e.nodeName)]):new b.Element(e),i.type=e.nodeName,i.node=e,e.instance=i,i instanceof b.Doc&&i.namespace().defs(),i.setData(JSON.parse(e.getAttribute("svgjs:data"))||{}),i},b.prepare=function(){var t=e.getElementsByTagName("body")[0],i=(t?new b.Doc(t):b.adopt(e.documentElement).nested()).size(2,0);b.parser={body:t||e.documentElement,draw:i.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").attr("focusable","false").node,poly:i.polyline().node,path:i.path().node,native:b.create("svg")}},b.parser={native:b.create("svg")},e.addEventListener("DOMContentLoaded",function(){b.parser.draw||b.prepare()},!1),b.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},b.utils={map:function(t,e){var i,n=t.length,r=[];for(i=0;i<n;i++)r.push(e(t[i]));return r},filter:function(t,e){var i,n=t.length,r=[];for(i=0;i<n;i++)e(t[i])&&r.push(t[i]);return r},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(e){return this.filter(e,function(e){return e instanceof t.SVGElement})}},b.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},b.Color=function(t){var e;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?b.regex.isRgb.test(t)?(e=b.regex.rgb.exec(t.replace(b.regex.whitespace,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):b.regex.isHex.test(t)&&(e=b.regex.hex.exec(h(t)),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"==typeof t&&(this.r=t.r,this.g=t.g,this.b=t.b))},b.extend(b.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+u(this.r)+u(this.g)+u(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new b.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new b.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),b.Color.test=function(t){return t+="",b.regex.isHex.test(t)||b.regex.isRgb.test(t)},b.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},b.Color.isColor=function(t){return b.Color.isRgb(t)||b.Color.test(t)},b.Array=function(t,e){t=(t||[]).valueOf(),0==t.length&&e&&(t=e.valueOf()),this.value=this.parse(t)},b.extend(b.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],i=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(i);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)-1==i.indexOf(this.value[t])&&i.push(this.value[t]);return this.value=i},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];e<i;e++)n.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new b.Array(n)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(b.regex.delimiter).map(parseFloat)},reverse:function(){return this.value.reverse(),this},clone:function(){var t=new this.constructor;return t.value=n(this.value),t}}),b.PointArray=function(t,e){b.Array.call(this,t,e||[[0,0]])},b.PointArray.prototype=new b.Array,b.PointArray.prototype.constructor=b.PointArray,b.extend(b.PointArray,{toString:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)i.push(this.value[t].join(","));return i.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];e<i;e++)n.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new b.PointArray(n)},parse:function(t){var e=[];if(t=t.valueOf(),Array.isArray(t)){if(Array.isArray(t[0]))return t.map(function(t){return t.slice()});if(null!=t[0].x)return t.map(function(t){return[t.x,t.y]})}else t=t.trim().split(b.regex.delimiter).map(parseFloat);t.length%2!=0&&t.pop();for(var i=0,n=t.length;i<n;i+=2)e.push([t[i],t[i+1]]);return e},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n=this.value.length-1;n>=0;n--)this.value[n]=[this.value[n][0]+t,this.value[n][1]+e];return this},size:function(t,e){var i,n=this.bbox();for(i=this.value.length-1;i>=0;i--)n.width&&(this.value[i][0]=(this.value[i][0]-n.x)*t/n.width+n.x),n.height&&(this.value[i][1]=(this.value[i][1]-n.y)*e/n.height+n.y);return this},bbox:function(){return b.parser.poly.setAttribute("points",this.toString()),b.parser.poly.getBBox()}});for(var C={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},S:function(t,e){return e.x=t[2],e.y=t[3],["S",t[0],t[1],t[2],t[3]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},T:function(t,e){return e.x=t[0],e.y=t[1],["T",t[0],t[1]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]},A:function(t,e){return e.x=t[5],e.y=t[6],["A",t[0],t[1],t[2],t[3],t[4],t[5],t[6]]}},N="mlhvqtcsaz".split(""),A=0,P=N.length;A<P;++A)C[N[A]]=function(t){return function(e,i,n){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var r=0,s=e.length;r<s;++r)e[r]=e[r]+(r%2?i.y:i.x);return C[t](e,i,n)}}(N[A].toUpperCase());b.PathArray=function(t,e){b.Array.call(this,t,e||[["M",0,0]])},b.PathArray.prototype=new b.Array,b.PathArray.prototype.constructor=b.PathArray,b.extend(b.PathArray,{toString:function(){return m(this.value)},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n,r=this.value.length-1;r>=0;r--)n=this.value[r][0],"M"==n||"L"==n||"T"==n?(this.value[r][1]+=t,this.value[r][2]+=e):"H"==n?this.value[r][1]+=t:"V"==n?this.value[r][1]+=e:"C"==n||"S"==n||"Q"==n?(this.value[r][1]+=t,this.value[r][2]+=e,this.value[r][3]+=t,this.value[r][4]+=e,"C"==n&&(this.value[r][5]+=t,this.value[r][6]+=e)):"A"==n&&(this.value[r][6]+=t,this.value[r][7]+=e);return this},size:function(t,e){var i,n,r=this.bbox();for(i=this.value.length-1;i>=0;i--)n=this.value[i][0],"M"==n||"L"==n||"T"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y):"H"==n?this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x:"V"==n?this.value[i][1]=(this.value[i][1]-r.y)*e/r.height+r.y:"C"==n||"S"==n||"Q"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y,this.value[i][3]=(this.value[i][3]-r.x)*t/r.width+r.x,this.value[i][4]=(this.value[i][4]-r.y)*e/r.height+r.y,"C"==n&&(this.value[i][5]=(this.value[i][5]-r.x)*t/r.width+r.x,this.value[i][6]=(this.value[i][6]-r.y)*e/r.height+r.y)):"A"==n&&(this.value[i][1]=this.value[i][1]*t/r.width,this.value[i][2]=this.value[i][2]*e/r.height,this.value[i][6]=(this.value[i][6]-r.x)*t/r.width+r.x,this.value[i][7]=(this.value[i][7]-r.y)*e/r.height+r.y);return this},equalCommands:function(t){var e,i,n;for(t=new b.PathArray(t),n=this.value.length===t.value.length,e=0,i=this.value.length;n&&e<i;e++)n=this.value[e][0]===t.value[e][0];return n},morph:function(t){return t=new b.PathArray(t),this.equalCommands(t)?this.destination=t:this.destination=null,this},at:function(t){if(!this.destination)return this;var e,i,n,r,s=this.value,o=this.destination.value,a=[],h=new b.PathArray;for(e=0,i=s.length;e<i;e++){for(a[e]=[s[e][0]],n=1,r=s[e].length;n<r;n++)a[e][n]=s[e][n]+(o[e][n]-s[e][n])*t;"A"===a[e][0]&&(a[e][4]=+(0!=a[e][4]),a[e][5]=+(0!=a[e][5]))}return h.value=a,h},parse:function(t){if(t instanceof b.PathArray)return t.valueOf();var e,n,r={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(b.regex.numbersWithDots,i).replace(b.regex.pathLetters," $& ").replace(b.regex.hyphen,"$1 -").trim().split(b.regex.delimiter):t.reduce(function(t,e){return[].concat.call(t,e)},[]);var n=[],s=new b.Point,o=new b.Point,a=0,h=t.length;do{b.regex.isPathLetter.test(t[a])?(e=t[a],++a):"M"==e?e="L":"m"==e&&(e="l"),n.push(C[e].call(null,t.slice(a,a+=r[e.toUpperCase()]).map(parseFloat),s,o))}while(h>a);return n},bbox:function(){return b.parser.path.setAttribute("d",this.toString()),b.parser.path.getBBox()}}),b.Number=b.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(b.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof b.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new b.Number(t),new b.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new b.Number(t),new b.Number(this-t,this.unit||t.unit)},times:function(t){return t=new b.Number(t),new b.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new b.Number(t),new b.Number(this/t,this.unit||t.unit)},to:function(t){var e=new b.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new b.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new b.Number(this.destination).minus(this).times(t).plus(this):this}}}),b.Element=b.invent({create:function(t){this._stroke=b.defaults.attrs.stroke,this._event=null,this._events={},this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._events=t._events||{},this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=l(this,t,e);return this.width(new b.Number(i.width)).height(new b.Number(i.height))},clone:function(t){this.writeDataToDom();var e=x(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(b.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return b.get(this.attr(t))},parent:function(e){var i=this;if(!i.node.parentNode)return null;if(i=b.adopt(i.node.parentNode),!e)return i;for(;i&&i.node instanceof t.SVGElement;){if("string"==typeof e?i.matches(e):i instanceof e)return i;if(!i.node.parentNode||"#document"==i.node.parentNode.nodeName||"#document-fragment"==i.node.parentNode.nodeName)return null;i=b.adopt(i.node.parentNode)}},doc:function(){return this instanceof b.Doc?this:this.parent(b.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return s(this.node,t)},native:function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof b.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var n=0,r=i.firstChild.childNodes.length;n<r;n++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){if(this.each||this.lines){(this.each?this:this.lines()).each(function(){this.writeDataToDom()})}return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return r(this,t)}}}),b.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},b.morph=function(t){return function(e,i){return new b.MorphObj(e,i).at(t)}},b.Situation=b.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new b.Number(t.duration).valueOf(),this.delay=new b.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),b.FX=b.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,i){"object"==typeof t&&(e=t.ease,i=t.delay,t=t.duration);var n=new b.Situation({duration:t||1e3,delay:i||0,ease:b.easing[e||"-"]||e});return this.queue(n),this},delay:function(t){var e=new b.Situation({duration:t,delay:0,ease:b.easing["-"]});return this.queue(e)},target:function(t){return t&&t instanceof b.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=t.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){t.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof b.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof b.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e,i,n=this.situation;if(n.init)return this;for(t in n.animations)for(i=this.target()[t](),Array.isArray(i)||(i=[i]),Array.isArray(n.animations[t])||(n.animations[t]=[n.animations[t]]),e=i.length;e--;)n.animations[t][e]instanceof b.Number&&(i[e]=new b.Number(i[e])),n.animations[t][e]=i[e].morph(n.animations[t][e]);for(t in n.attrs)n.attrs[t]=new b.MorphObj(this.target().attr(t),n.attrs[t]);for(t in n.styles)n.styles[t]=new b.MorphObj(this.target().style(t),n.styles[t]);return n.initialTransformation=this.target().matrixify(),n.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.atStart()}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},atStart:function(){return this.at(0,!0)},atEnd:function(){return!0===this.situation.loops&&(this.situation.loops=this.situation.loop+1),"number"==typeof this.situation.loops?this.at(this.situation.loops,!0):this.at(1,!0)},at:function(t,e){var i=this.situation.duration/this._speed;return this.absPos=t,e||(this.situation.reversed&&(this.absPos=1-this.absPos),this.absPos+=this.situation.loop),this.situation.start=+new Date-this.absPos*i,this.situation.finish=this.situation.start+i,this.step(!0)},speed:function(t){return 0===t?this.pause():t?(this._speed=t,this.at(this.absPos,!0)):this._speed},loop:function(t,e){var i=this.last();return i.loops=null==t||t,i.loop=0,e&&(i.reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),this},play:function(){return this.paused?(this.paused=!1,this.at(this.absPos,!0)):this},reverse:function(t){var e=this.last();return e.reversed=void 0===t?!e.reversed:t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last(),i=function i(n){n.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))};return this.target().on("finished.fx",i),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,b.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after(function(){this.off("during.fx",i)}),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,b.morph(e.detail.pos),e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)}),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){if(t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops){var e,i,n;e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,n=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,n=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-n)%2))}else this.absPos=Math.min(this.absPos,1),this.pos=this.absPos;this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var r=this.situation.ease(this.pos);for(var s in this.situation.once)s>this.lastPos&&s<=r&&(this.situation.once[s].call(this.target(),this.pos,r),delete this.situation.once[s]);return this.active&&this.target().fire("during",{pos:this.pos,eased:r,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=r,this):this},eachAt:function(){var t,e,i,n=this,r=this.target(),s=this.situation;for(t in s.animations)i=[].concat(s.animations[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(s.ease(n.pos),n.pos):t}),r[t].apply(r,i);for(t in s.attrs)i=[t].concat(s.attrs[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(s.ease(n.pos),n.pos):t}),r.attr.apply(r,i);for(t in s.styles)i=[t].concat(s.styles[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(s.ease(n.pos),n.pos):t}),r.style.apply(r,i);if(s.transforms.length){for(i=s.initialTransformation,t=0,e=s.transforms.length;t<e;t++){var o=s.transforms[t];o instanceof b.Matrix?i=o.relative?i.multiply((new b.Matrix).morph(o).at(s.ease(this.pos))):i.morph(o).at(s.ease(this.pos)):(o.relative||o.undo(i.extract()),i=i.multiply(o.at(s.ease(this.pos))))}r.matrix(i)}return this},once:function(t,e,i){var n=this.last();return i||(t=n.ease(t)),n.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:b.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new b.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new b.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this},speed:function(t){if(this.fx){if(null==t)return this.fx.speed();this.fx.speed(t)}return this}}}),b.MorphObj=b.invent({create:function(t,e){return b.Color.isColor(e)?new b.Color(t).morph(e):b.regex.delimiter.test(t)?b.regex.pathLetters.test(t)?new b.PathArray(t).morph(e):new b.Array(t).morph(e):b.regex.numberAndUnit.test(e)?new b.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),b.extend(b.FX,{attr:function(t,e,i){if("object"==typeof t)for(var n in t)this.attr(n,t[n]);else this.add(t,e,"attrs");return this},style:function(t,e){if("object"==typeof t)for(var i in t)this.style(i,t[i]);else this.add(t,e,"styles");return this},x:function(t,e){if(this.target()instanceof b.G)return this.transform({x:t},e),this;var i=new b.Number(t);return i.relative=e,this.add("x",i)},y:function(t,e){if(this.target()instanceof b.G)return this.transform({y:t},e),this;var i=new b.Number(t);return i.relative=e,this.add("y",i)},cx:function(t){return this.add("cx",new b.Number(t))},cy:function(t){return this.add("cy",new b.Number(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){if(this.target()instanceof b.Text)this.attr("font-size",t);else{var i;t&&e||(i=this.target().bbox()),t||(t=i.width/i.height*e),e||(e=i.height/i.width*t),this.add("width",new b.Number(t)).add("height",new b.Number(e))}return this},width:function(t){return this.add("width",new b.Number(t))},height:function(t){return this.add("height",new b.Number(t))},plot:function(t,e,i,n){return 4==arguments.length?this.plot([t,e,i,n]):this.add("plot",new(this.target().morphArray)(t))},leading:function(t){return this.target().leading?this.add("leading",new b.Number(t)):this},viewbox:function(t,e,i,n){return this.target()instanceof b.Container&&this.add("viewbox",new b.ViewBox(t,e,i,n)),this},update:function(t){if(this.target()instanceof b.Stop){if("number"==typeof t||t instanceof b.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),b.Box=b.invent({create:function(t,e,i,n){if(!("object"!=typeof t||t instanceof b.Element))return b.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height);4==arguments.length&&(this.x=t,this.y=e,this.width=i,this.height=n),y(this)},extend:{merge:function(t){var e=new this.constructor;return e.x=Math.min(this.x,t.x),e.y=Math.min(this.y,t.y),e.width=Math.max(this.x+this.width,t.x+t.width)-e.x,e.height=Math.max(this.y+this.height,t.y+t.height)-e.y,y(e)},transform:function(t){var e,i=1/0,n=-1/0,r=1/0,s=-1/0;return[new b.Point(this.x,this.y),new b.Point(this.x2,this.y),new b.Point(this.x,this.y2),new b.Point(this.x2,this.y2)].forEach(function(e){e=e.transform(t),i=Math.min(i,e.x),n=Math.max(n,e.x),r=Math.min(r,e.y),s=Math.max(s,e.y)}),e=new this.constructor,e.x=i,e.width=n-i,e.y=r,e.height=s-r,y(e),e}}}),b.BBox=b.invent({create:function(t){if(b.Box.apply(this,[].slice.call(arguments)),t instanceof b.Element){var i;try{if(e.documentElement.contains){if(!e.documentElement.contains(t.node))throw new Exception("Element not in the dom")}else{for(var n=t.node;n.parentNode;)n=n.parentNode;if(n!=e)throw new Exception("Element not in the dom")}i=t.node.getBBox()}catch(e){if(t instanceof b.Shape){var r=t.clone(b.parser.draw.instance).show();i=r.node.getBBox(),r.remove()}else i={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}b.Box.call(this,i)}},inherit:b.Box,parent:b.Element,construct:{bbox:function(){return new b.BBox(this)}}}),b.BBox.prototype.constructor=b.BBox,b.extend(b.Element,{tbox:function(){return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."),this.rbox(this.doc())}}),b.RBox=b.invent({create:function(t){b.Box.apply(this,[].slice.call(arguments)),t instanceof b.Element&&b.Box.call(this,t.node.getBoundingClientRect())},inherit:b.Box,parent:b.Element,extend:{addOffset:function(){return this.x+=t.pageXOffset,this.y+=t.pageYOffset,this}},construct:{rbox:function(t){return t?new b.RBox(this).transform(t.screenCTM().inverse()):new b.RBox(this).addOffset()}}}),b.RBox.prototype.constructor=b.RBox,b.Matrix=b.invent({create:function(t){var e,i=f([1,0,0,1,0,0]);for(t=t instanceof b.Element?t.matrixify():"string"==typeof t?f(t.split(b.regex.delimiter).map(parseFloat)):6==arguments.length?f([].slice.call(arguments)):Array.isArray(t)?f(t):"object"==typeof t?t:i,e=k.length-1;e>=0;--e)this[k[e]]=null!=t[k[e]]?t[k[e]]:i[k[e]]},extend:{extract:function(){var t=c(this,0,1),e=c(this,1,0),i=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(i*Math.PI/180)+this.f*Math.sin(i*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(i*Math.PI/180)+this.e*Math.sin(-i*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-i,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:i,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new b.Matrix(this)}},clone:function(){return new b.Matrix(this)},morph:function(t){return this.destination=new b.Matrix(t),this},at:function(t){return this.destination?new b.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t}):this},multiply:function(t){return new b.Matrix(this.native().multiply(d(t).native()))},inverse:function(){return new b.Matrix(this.native().inverse())},translate:function(t,e){return new b.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,i,n){return 1==arguments.length?e=t:3==arguments.length&&(n=i,i=e,e=t),this.around(i,n,new b.Matrix(t,0,0,e,0,0))},rotate:function(t,e,i){return t=b.utils.radians(t),this.around(e,i,new b.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):"y"==t?this.scale(1,-1,0,e):this.scale(-1,-1,t,null!=e?e:t)},skew:function(t,e,i,n){
return 1==arguments.length?e=t:3==arguments.length&&(n=i,i=e,e=t),t=b.utils.radians(t),e=b.utils.radians(e),this.around(i,n,new b.Matrix(1,Math.tan(e),Math.tan(t),1,0,0))},skewX:function(t,e,i){return this.skew(t,0,e,i)},skewY:function(t,e,i){return this.skew(0,t,e,i)},around:function(t,e,i){return this.multiply(new b.Matrix(1,0,0,1,t||0,e||0)).multiply(i).multiply(new b.Matrix(1,0,0,1,-t||0,-e||0))},native:function(){for(var t=b.parser.native.createSVGMatrix(),e=k.length-1;e>=0;e--)t[k[e]]=this[k[e]];return t},toString:function(){return"matrix("+g(this.a)+","+g(this.b)+","+g(this.c)+","+g(this.d)+","+g(this.e)+","+g(this.f)+")"}},parent:b.Element,construct:{ctm:function(){return new b.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof b.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new b.Matrix(e)}return new b.Matrix(this.node.getScreenCTM())}}}),b.Point=b.invent({create:function(t,e){var i,n={x:0,y:0};i=Array.isArray(t)?{x:t[0],y:t[1]}:"object"==typeof t?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:n,this.x=i.x,this.y=i.y},extend:{clone:function(){return new b.Point(this)},morph:function(t,e){return this.destination=new b.Point(t,e),this},at:function(t){return this.destination?new b.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t}):this},native:function(){var t=b.parser.native.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new b.Point(this.native().matrixTransform(t.native()))}}}),b.extend(b.Element,{point:function(t,e){return new b.Point(t,e).transform(this.screenCTM().inverse())}}),b.extend(b.Element,{attr:function(t,e,i){if(null==t){for(t={},e=this.node.attributes,i=e.length-1;i>=0;i--)t[e[i].nodeName]=b.regex.isNumber.test(e[i].nodeValue)?parseFloat(e[i].nodeValue):e[i].nodeValue;return t}if("object"==typeof t)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return e=this.node.getAttribute(t),null==e?b.defaults.attrs[t]:b.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(b.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof b.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new b.Number(e):b.Color.isColor(e)?e=new b.Color(e):Array.isArray(e)&&(e=new b.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof i?this.node.setAttributeNS(i,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),b.extend(b.Element,{transform:function(t,e){var i,n,r=this;if("object"!=typeof t)return i=new b.Matrix(r).extract(),"string"==typeof t?i[t]:i;if(i=new b.Matrix(r),e=!!e||!!t.relative,null!=t.a)i=e?i.multiply(new b.Matrix(t)):new b.Matrix(t);else if(null!=t.rotation)p(t,r),i=e?i.rotate(t.rotation,t.cx,t.cy):i.rotate(t.rotation-i.extract().rotation,t.cx,t.cy);else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(p(t,r),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var s=i.extract();t.scaleX=1*t.scaleX/s.scaleX,t.scaleY=1*t.scaleY/s.scaleY}i=i.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skew||null!=t.skewX||null!=t.skewY){if(p(t,r),t.skewX=null!=t.skew?t.skew:null!=t.skewX?t.skewX:0,t.skewY=null!=t.skew?t.skew:null!=t.skewY?t.skewY:0,!e){var s=i.extract();i=i.multiply((new b.Matrix).skew(s.skewX,s.skewY,t.cx,t.cy).inverse())}i=i.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?r.bbox()["c"+t.flip]:t.offset:null==t.offset?(n=r.bbox(),t.flip=n.cx,t.offset=n.cy):t.flip=t.offset,i=(new b.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(e?i=i.translate(t.x,t.y):(null!=t.x&&(i.e=t.x),null!=t.y&&(i.f=t.y)));return this.attr("transform",i)}}),b.extend(b.FX,{transform:function(t,e){var i,n,r=this.target();return"object"!=typeof t?(i=new b.Matrix(r).extract(),"string"==typeof t?i[t]:i):(e=!!e||!!t.relative,null!=t.a?i=new b.Matrix(t):null!=t.rotation?(p(t,r),i=new b.Rotate(t.rotation,t.cx,t.cy)):null!=t.scale||null!=t.scaleX||null!=t.scaleY?(p(t,r),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,i=new b.Scale(t.scaleX,t.scaleY,t.cx,t.cy)):null!=t.skewX||null!=t.skewY?(p(t,r),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,i=new b.Skew(t.skewX,t.skewY,t.cx,t.cy)):t.flip?("x"==t.flip||"y"==t.flip?t.offset=null==t.offset?r.bbox()["c"+t.flip]:t.offset:null==t.offset?(n=r.bbox(),t.flip=n.cx,t.offset=n.cy):t.flip=t.offset,i=(new b.Matrix).flip(t.flip,t.offset)):null==t.x&&null==t.y||(i=new b.Translate(t.x,t.y)),i?(i.relative=e,this.last().transforms.push(i),this._callStart()):this)}}),b.extend(b.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(b.regex.transforms).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(b.regex.delimiter).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(f(e[1])):t[e[0]].apply(t,e[1])},new b.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),b.Transformation=b.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var i=0,n=this.arguments.length;i<n;++i)this[this.arguments[i]]=t[i];else if("object"==typeof t)for(var i=0,n=this.arguments.length;i<n;++i)this[this.arguments[i]]=t[this.arguments[i]];this.inversed=!1,!0===e&&(this.inversed=!0)},extend:{arguments:[],method:"",at:function(t){for(var e=[],i=0,n=this.arguments.length;i<n;++i)e.push(this[this.arguments[i]]);var r=this._undo||new b.Matrix;return r=(new b.Matrix).morph(b.Matrix.prototype[this.method].apply(r,e)).at(t),this.inversed?r.inverse():r},undo:function(t){for(var e=0,i=this.arguments.length;e<i;++e)t[this.arguments[e]]=void 0===this[this.arguments[e]]?0:t[this.arguments[e]];return t.cx=this.cx,t.cy=this.cy,this._undo=new(b[a(this.method)])(t,!0).at(1),this}}}),b.Translate=b.invent({parent:b.Matrix,inherit:b.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),b.Rotate=b.invent({parent:b.Matrix,inherit:b.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new b.Matrix).rotate((new b.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){return this._undo=t,this}}}),b.Scale=b.invent({parent:b.Matrix,inherit:b.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),b.Skew=b.invent({parent:b.Matrix,inherit:b.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),b.extend(b.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"==typeof t)for(e in t)this.style(e,t[e]);else{if(!b.regex.isCss.test(t))return this.node.style[o(t)];for(t=t.split(/\s*;\s*/).filter(function(t){return!!t}).map(function(t){return t.split(/\s*:\s*/)});e=t.pop();)this.style(e[0],e[1])}else this.node.style[o(t)]=null===e||b.regex.isBlank.test(e)?"":e;return this}}),b.Parent=b.invent({create:function(t){this.constructor.call(this,t)},inherit:b.Element,extend:{children:function(){return b.utils.map(b.utils.filterSVGElements(this.node.childNodes),function(t){return b.adopt(t)})},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return b.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){var i,n,r=this.children();for(i=0,n=r.length;i<n;i++)r[i]instanceof b.Element&&t.apply(r[i],[i,r]),e&&r[i]instanceof b.Container&&r[i].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),b.extend(b.Parent,{ungroup:function(t,e){return 0===e||this instanceof b.Defs||this.node==b.parser.draw?this:(t=t||(this instanceof b.Doc?this:this.parent(b.Parent)),e=e||1/0,this.each(function(){return this instanceof b.Defs?this:this instanceof b.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),b.Container=b.invent({create:function(t){this.constructor.call(this,t)},inherit:b.Parent}),b.ViewBox=b.invent({create:function(t){var e,i,n,r,s,o,a,h=[0,0,0,0],u=1,l=1,c=/[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;if(t instanceof b.Element){for(o=t,a=t,s=(t.attr("viewBox")||"").match(c),t.bbox,n=new b.Number(t.width()),r=new b.Number(t.height());"%"==n.unit;)u*=n.value,n=new b.Number(o instanceof b.Doc?o.parent().offsetWidth:o.parent().width()),o=o.parent();for(;"%"==r.unit;)l*=r.value,r=new b.Number(a instanceof b.Doc?a.parent().offsetHeight:a.parent().height()),a=a.parent();this.x=0,this.y=0,this.width=n*u,this.height=r*l,this.zoom=1,s&&(e=parseFloat(s[0]),i=parseFloat(s[1]),n=parseFloat(s[2]),r=parseFloat(s[3]),this.zoom=this.width/this.height>n/r?this.height/r:this.width/n,this.x=e,this.y=i,this.width=n,this.height=r)}else t="string"==typeof t?t.match(c).map(function(t){return parseFloat(t)}):Array.isArray(t)?t:"object"==typeof t?[t.x,t.y,t.width,t.height]:4==arguments.length?[].slice.call(arguments):h,this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t,e,i,n){return this.destination=new b.ViewBox(t,e,i,n),this},at:function(t){return this.destination?new b.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}},parent:b.Container,construct:{viewbox:function(t,e,i,n){return 0==arguments.length?new b.ViewBox(this):this.attr("viewBox",new b.ViewBox(t,e,i,n))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","mouseenter","mouseleave","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){b.Element.prototype[t]=function(e){return null==e?b.off(this,t):b.on(this,t,e),this}}),b.listenerId=0,b.on=function(t,e,i,n,r){var s=i.bind(n||t),o=t instanceof b.Element?t.node:t;o.instance=o.instance||{_events:{}};var a=o.instance._events;i._svgjsListenerId||(i._svgjsListenerId=++b.listenerId),e.split(b.regex.delimiter).forEach(function(t){var e=t.split(".")[0],n=t.split(".")[1]||"*";a[e]=a[e]||{},a[e][n]=a[e][n]||{},a[e][n][i._svgjsListenerId]=s,o.addEventListener(e,s,r||!1)})},b.off=function(t,e,i,n){var r=t instanceof b.Element?t.node:t;if(r.instance&&("function"!=typeof i||(i=i._svgjsListenerId))){var s=r.instance._events;(e||"").split(b.regex.delimiter).forEach(function(t){var e,o,a=t&&t.split(".")[0],h=t&&t.split(".")[1];if(i)s[a]&&s[a][h||"*"]&&(r.removeEventListener(a,s[a][h||"*"][i],n||!1),delete s[a][h||"*"][i]);else if(a&&h){if(s[a]&&s[a][h]){for(o in s[a][h])b.off(r,[a,h].join("."),o);delete s[a][h]}}else if(h)for(t in s)for(e in s[t])h===e&&b.off(r,[t,h].join("."));else if(a){if(s[a]){for(e in s[a])b.off(r,[a,e].join("."));delete s[a]}}else{for(t in s)b.off(r,t);r.instance._events={}}})}},b.extend(b.Element,{on:function(t,e,i,n){return b.on(this,t,e,i,n),this},off:function(t,e){return b.off(this.node,t,e),this},fire:function(e,i){return e instanceof t.Event?this.node.dispatchEvent(e):this.node.dispatchEvent(e=new b.CustomEvent(e,{detail:i,cancelable:!0})),this._event=e,this},event:function(){return this._event}}),b.Defs=b.invent({create:"defs",inherit:b.Container}),b.G=b.invent({create:"g",inherit:b.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new b.G)}}}),b.Doc=b.invent({create:function(t){t&&(t="string"==typeof t?e.getElementById(t):t,"svg"==t.nodeName?this.constructor.call(this,t):(this.constructor.call(this,b.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:b.Container,extend:{namespace:function(){return this.attr({xmlns:b.ns,version:"1.1"}).attr("xmlns:xlink",b.xlink,b.xmlns).attr("xmlns:svgjs",b.svgjs,b.xmlns)},defs:function(){if(!this._defs){var t;(t=this.node.getElementsByTagName("defs")[0])?this._defs=b.adopt(t):this._defs=new b.Defs,this.node.appendChild(this._defs.node)}return this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName&&"#document-fragment"!=this.node.parentNode.nodeName?this.node.parentNode:null},spof:function(){var t=this.node.getScreenCTM();return t&&this.style("left",-t.e%1+"px").style("top",-t.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,b.parser.draw.parentNode||this.node.appendChild(b.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=x(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),b.extend(b.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof b.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof b.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),b.Mask=b.invent({create:function(){this.constructor.call(this,b.create("mask")),this.targets=[]},inherit:b.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],b.Element.prototype.remove.call(this),this}},construct:{mask:function(){return this.defs().put(new b.Mask)}}}),b.extend(b.Element,{maskWith:function(t){return this.masker=t instanceof b.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),b.ClipPath=b.invent({create:function(){this.constructor.call(this,b.create("clipPath")),this.targets=[]},inherit:b.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new b.ClipPath)}}}),b.extend(b.Element,{clipWith:function(t){return this.clipper=t instanceof b.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),b.Gradient=b.invent({create:function(t){this.constructor.call(this,b.create(t+"Gradient")),this.type=t},inherit:b.Container,extend:{at:function(t,e,i){return this.put(new b.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),b.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),b.extend(b.Gradient,b.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new b.Number(t),fy:new b.Number(e)}):this.attr({x1:new b.Number(t),y1:new b.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new b.Number(t),cy:new b.Number(e)}):this.attr({x2:new b.Number(t),y2:new b.Number(e)})}}),b.extend(b.Defs,{gradient:function(t,e){return this.put(new b.Gradient(t)).update(e)}}),b.Stop=b.invent({create:"stop",inherit:b.Element,extend:{update:function(t){return("number"==typeof t||t instanceof b.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new b.Number(t.offset)),this}}}),b.Pattern=b.invent({create:"pattern",inherit:b.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),b.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),b.extend(b.Defs,{pattern:function(t,e,i){return this.put(new b.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),b.Shape=b.invent({create:function(t){this.constructor.call(this,t)},inherit:b.Element}),b.Bare=b.invent({create:function(t,e){if(this.constructor.call(this,b.create(t)),e)for(var i in e.prototype)"function"==typeof e.prototype[i]&&(this[i]=e.prototype[i])},inherit:b.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),b.extend(b.Parent,{element:function(t,e){return this.put(new b.Bare(t,e))}}),b.Symbol=b.invent({create:"symbol",inherit:b.Container,construct:{symbol:function(){return this.put(new b.Symbol)}}}),b.Use=b.invent({create:"use",inherit:b.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,b.xlink)}},construct:{use:function(t,e){return this.put(new b.Use).element(t,e)}}}),b.Rect=b.invent({create:"rect",inherit:b.Shape,construct:{rect:function(t,e){return this.put(new b.Rect).size(t,e)}}}),b.Circle=b.invent({create:"circle",inherit:b.Shape,construct:{circle:function(t){return this.put(new b.Circle).rx(new b.Number(t).divide(2)).move(0,0)}}}),b.extend(b.Circle,b.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),b.Ellipse=b.invent({create:"ellipse",inherit:b.Shape,construct:{ellipse:function(t,e){return this.put(new b.Ellipse).size(t,e).move(0,0)}}}),b.extend(b.Ellipse,b.Rect,b.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),b.extend(b.Circle,b.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new b.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new b.Number(t).divide(2))},size:function(t,e){var i=l(this,t,e);return this.rx(new b.Number(i.width).divide(2)).ry(new b.Number(i.height).divide(2))}}),b.Line=b.invent({create:"line",inherit:b.Shape,extend:{array:function(){return new b.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,n){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:n}:new b.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=l(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,n){return b.Line.prototype.plot.apply(this.put(new b.Line),null!=t?[t,e,i,n]:[0,0,0,0])}}}),b.Polyline=b.invent({create:"polyline",inherit:b.Shape,construct:{polyline:function(t){return this.put(new b.Polyline).plot(t||new b.PointArray)}}}),b.Polygon=b.invent({create:"polygon",inherit:b.Shape,construct:{polygon:function(t){return this.put(new b.Polygon).plot(t||new b.PointArray)}}}),b.extend(b.Polyline,b.Polygon,{array:function(){return this._array||(this._array=new b.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new b.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=l(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),b.extend(b.Line,b.Polyline,b.Polygon,{morphArray:b.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),b.Path=b.invent({create:"path",inherit:b.Shape,extend:{morphArray:b.PathArray,array:function(){return this._array||(this._array=new b.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new b.PathArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var i=l(this,t,e);return this.attr("d",this.array().size(i.width,i.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new b.Path).plot(t||new b.PathArray)}}}),b.Image=b.invent({create:"image",inherit:b.Shape,extend:{load:function(e){if(!e)return this;var i=this,n=new t.Image;return b.on(n,"load",function(){b.off(n);var t=i.parent(b.Pattern);null!==t&&(0==i.width()&&0==i.height()&&i.size(n.width,n.height),t&&0==t.width()&&0==t.height()&&t.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:n.width,height:n.height,ratio:n.width/n.height,url:e}))}),b.on(n,"error",function(t){b.off(n),"function"==typeof i._error&&i._error.call(i,t)}),this.attr("href",n.src=this.src=e,b.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new b.Image).load(t).size(e||0,i||e||0)}}}),b.Text=b.invent({create:function(){this.constructor.call(this,b.create("text")),this.dom.leading=new b.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",b.defaults.attrs["font-family"])},inherit:b.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},y:function(t){var e=this.attr("y"),i="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-i:e:this.attr("y","number"==typeof t.valueOf()?t+i:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if(void 0===t){for(var t="",e=this.node.childNodes,i=0,n=e.length;i<n;++i)0!=i&&3!=e[i].nodeType&&1==b.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{t=t.split("\n");for(var i=0,r=t.length;i<r;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new b.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=b.utils.map(b.utils.filterSVGElements(t.childNodes),function(t){return b.adopt(t)});return new b.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,n=this.dom.leading*new b.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=n:(this.attr("dy",n+i),i=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new b.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new b.Text).text(t)},plain:function(t){return this.put(new b.Text).plain(t)}}}),b.Tspan=b.invent({create:"tspan",inherit:b.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(b.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),b.extend(b.Text,b.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new b.Tspan;return!1===this._build&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),b.TextPath=b.invent({create:"textPath",inherit:b.Parent,parent:b.Text,construct:{morphArray:b.PathArray,path:function(t){for(var e=new b.TextPath,i=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+i,b.xlink),this},array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return b.adopt(this.node.firstChild)}}}),b.Nested=b.invent({create:function(){this.constructor.call(this,b.create("svg")),this.style("overflow","visible")},inherit:b.Container,construct:{nested:function(){return this.put(new b.Nested)}}}),b.A=b.invent({create:"a",inherit:b.Container,extend:{to:function(t){return this.attr("href",t,b.xlink)},show:function(t){return this.attr("show",t,b.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new b.A).to(t)}}}),b.extend(b.Element,{linkTo:function(t){var e=new b.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),b.Marker=b.invent({create:"marker",inherit:b.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,i){return this.defs().marker(t,e,i)}}}),b.extend(b.Defs,{marker:function(t,e,i){return this.put(new b.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(i)}}),b.extend(b.Line,b.Polyline,b.Polygon,b.Path,{marker:function(t,e,i,n){var r=["marker"];return"all"!=t&&r.push(t),r=r.join("-"),t=arguments[1]instanceof b.Marker?arguments[1]:this.doc().marker(e,i,n),this.attr(r,t)}});var M={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};["fill","stroke"].forEach(function(t){var e,i={};i[t]=function(i){if(void 0===i)return this;if("string"==typeof i||b.Color.isRgb(i)||i&&"function"==typeof i.fill)this.attr(t,i);else for(e=M[t].length-1;e>=0;e--)null!=i[M[t][e]]&&this.attr(M.prefix(t,M[t][e]),i[M[t][e]]);return this},b.extend(b.Element,b.FX,i)}),b.extend(b.Element,b.FX,{rotate:function(t,e,i){return this.transform({rotation:t,cx:e,cy:i})},skew:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({skew:t,cx:e,cy:i}):this.transform({skewX:t,skewY:e,cx:i,cy:n})},scale:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:i}):this.transform({scaleX:t,scaleY:e,cx:i,cy:n})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return e="number"==typeof t?t:e,this.transform({flip:t||"both",offset:e})},matrix:function(t){return this.attr("transform",new b.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new b.Number(t).plus(this instanceof b.FX?0:this.x()),!0)},dy:function(t){return this.y(new b.Number(t).plus(this instanceof b.FX?0:this.y()),!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),b.extend(b.Rect,b.Ellipse,b.Circle,b.Gradient,b.FX,{radius:function(t,e){var i=(this._target||this).type;return"radial"==i||"circle"==i?this.attr("r",new b.Number(t)):this.rx(t).ry(null==e?t:e)}}),b.extend(b.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),b.extend(b.Parent,b.Text,b.Tspan,b.FX,{font:function(t,e){if("object"==typeof t)for(e in t)this.font(e,t[e]);return"leading"==t?this.leading(e):"anchor"==t?this.attr("text-anchor",e):"size"==t||"family"==t||"weight"==t||"stretch"==t||"variant"==t||"style"==t?this.attr("font-"+t,e):this.attr(t,e)}}),b.Set=b.invent({create:function(t){t instanceof b.Set?this.members=t.members.slice():Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,i=[].slice.call(arguments);for(t=0,e=i.length;t<e;t++)this.members.push(i[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){if(0==this.members.length)return new b.RBox;var t=this.members[0].rbox(this.members[0].doc());return this.each(function(){t=t.merge(this.rbox(this.doc()))}),t}},construct:{set:function(t){
return new b.Set(t)}}}),b.FX.Set=b.invent({create:function(t){this.set=t}}),b.Set.inherit=function(){var t,e=[];for(var t in b.Shape.prototype)"function"==typeof b.Shape.prototype[t]&&"function"!=typeof b.Set.prototype[t]&&e.push(t);e.forEach(function(t){b.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new b.FX.Set(this)):this}}),e=[];for(var t in b.FX.prototype)"function"==typeof b.FX.prototype[t]&&"function"!=typeof b.FX.Set.prototype[t]&&e.push(t);e.forEach(function(t){b.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},b.extend(b.Element,{data:function(t,e,i){if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(e){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:!0===i||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),b.extend(b.Element,{remember:function(t,e){if("object"==typeof arguments[0])for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),b.get=function(t){var i=e.getElementById(v(t)||t);return b.adopt(i)},b.select=function(t,i){return new b.Set(b.utils.map((i||e).querySelectorAll(t),function(t){return b.adopt(t)}))},b.extend(b.Parent,{select:function(t){return b.select(t,this.node)}});var k="abcdef".split("");if("function"!=typeof t.CustomEvent){var S=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=e.createEvent("CustomEvent");return n.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),n};S.prototype=t.Event.prototype,b.CustomEvent=S}else b.CustomEvent=t.CustomEvent;return function(e){for(var i=0,n=["moz","webkit"],r=0;r<n.length&&!t.requestAnimationFrame;++r)e.requestAnimationFrame=e[n[r]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[n[r]+"CancelAnimationFrame"]||e[n[r]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),s=e.setTimeout(function(){t(n+r)},r);return i=n+r,s},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),b});
!function(doc,win){if("function"!=typeof doc.createEvent)return;function pointerEvent(type){var lo=type.toLowerCase(),ms="MS"+type;return navigator.msPointerEnabled?ms:!!window.PointerEvent&&lo}function touchEvent(name){return"on"+name in window&&name}function isTheSameFingerId(e){return!e.pointerId||void 0===pointerId||e.pointerId===pointerId}function setListener(elm,events,callback){for(var eventsArray=events.split(" "),i=eventsArray.length;i--;)elm.addEventListener(eventsArray[i],callback,!1)}function getPointerEvent(event){var hasTargetTouches=Boolean(event.targetTouches&&event.targetTouches.length);switch(!0){case Boolean(event.target.touches):return event.target.touches[0];case hasTargetTouches&&void 0!==event.targetTouches[0].pageX:return event.targetTouches[0];case hasTargetTouches&&Boolean(event.targetTouches[0].touches):return event.targetTouches[0].touches[0];default:return event}}function isMultipleTouches(event){return 1<(event.targetTouches||event.target.touches||[]).length}function getTimestamp(){return(new Date).getTime()}function sendEvent(elm,eventName,originalEvent,data){var customEvent=doc.createEvent("Event");if(customEvent.originalEvent=originalEvent,(data=data||{}).x=currX,data.y=currY,defaults.useJquery&&(customEvent=jQuery.Event(eventName,{originalEvent:originalEvent}),jQuery(elm).trigger(customEvent,data)),customEvent.initEvent){for(var key in data)customEvent[key]=data[key];customEvent.initEvent(eventName,!0,!0),elm.dispatchEvent(customEvent)}for(;elm;)elm["on"+eventName]&&elm["on"+eventName](customEvent),elm=elm.parentNode}var pointerId,currX,currY,cachedX,cachedY,timestamp,target,dblTapTimer,longtapTimer,defaults={useJquery:!win.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:win.SWIPE_THRESHOLD||100,tapThreshold:win.TAP_THRESHOLD||150,dbltapThreshold:win.DBL_TAP_THRESHOLD||200,longtapThreshold:win.LONG_TAP_THRESHOLD||1e3,tapPrecision:win.TAP_PRECISION/2||30,justTouchEvents:win.JUST_ON_TOUCH_DEVICES},wasTouch=!1,touchevents_touchstart=touchEvent("touchstart")||pointerEvent("PointerDown"),touchevents_touchend=touchEvent("touchend")||pointerEvent("PointerUp"),touchevents_touchmove=touchEvent("touchmove")||pointerEvent("PointerMove"),tapNum=0;setListener(doc,touchevents_touchstart+(defaults.justTouchEvents?"":" mousedown"),function(e){if(isTheSameFingerId(e)&&!isMultipleTouches(e)&&(pointerId=e.pointerId,"mousedown"!==e.type&&(wasTouch=!0),"mousedown"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);cachedX=currX=pointer.pageX,cachedY=currY=pointer.pageY,longtapTimer=setTimeout(function(){sendEvent(e.target,"longtap",e),target=e.target},defaults.longtapThreshold),timestamp=getTimestamp(),tapNum++}}),setListener(doc,touchevents_touchend+(defaults.justTouchEvents?"":" mouseup"),function(e){if(isTheSameFingerId(e)&&!isMultipleTouches(e))if(pointerId=void 0,"mouseup"===e.type&&wasTouch)wasTouch=!1;else{var eventsArr=[],now=getTimestamp(),deltaY=cachedY-currY,deltaX=cachedX-currX;if(clearTimeout(dblTapTimer),clearTimeout(longtapTimer),deltaX<=-defaults.swipeThreshold&&eventsArr.push("swiperight"),deltaX>=defaults.swipeThreshold&&eventsArr.push("swipeleft"),deltaY<=-defaults.swipeThreshold&&eventsArr.push("swipedown"),deltaY>=defaults.swipeThreshold&&eventsArr.push("swipeup"),eventsArr.length){for(var i=0;i<eventsArr.length;i++){var eventName=eventsArr[i];sendEvent(e.target,eventName,e,{distance:{x:Math.abs(deltaX),y:Math.abs(deltaY)}})}tapNum=0}else cachedX>=currX-defaults.tapPrecision&&cachedX<=currX+defaults.tapPrecision&&cachedY>=currY-defaults.tapPrecision&&cachedY<=currY+defaults.tapPrecision&&0<=timestamp+defaults.tapThreshold-now&&(sendEvent(e.target,2<=tapNum&&target===e.target?"dbltap":"tap",e),target=e.target),dblTapTimer=setTimeout(function(){tapNum=0},defaults.dbltapThreshold)}}),setListener(doc,touchevents_touchmove+(defaults.justTouchEvents?"":" mousemove"),function(e){if(isTheSameFingerId(e)&&("mousemove"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);currX=pointer.pageX,currY=pointer.pageY}}),win.tocca=function(options){for(var opt in options)defaults[opt]=options[opt];return defaults}}(document,window);

;(function(window, undefined){
	"use strict"

	var _valueRanges = {
			rgb:   {r: [0, 255], g: [0, 255], b: [0, 255]},
			hsv:   {h: [0, 360], s: [0, 100], v: [0, 100]},
			hsl:   {h: [0, 360], s: [0, 100], l: [0, 100]},
			cmy:   {c: [0, 100], m: [0, 100], y: [0, 100]},
			cmyk:  {c: [0, 100], m: [0, 100], y: [0, 100], k: [0, 100]},
			Lab:   {L: [0, 100], a: [-128, 127], b: [-128, 127]},
			XYZ:   {X: [0, 100], Y: [0, 100], Z: [0, 100]},
			alpha: {alpha: [0, 1]},
			HEX:   {HEX: [0, 16777215]} // maybe we don't need this
		},

		_instance = {},
		_colors = {},

		// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html for more
		XYZMatrix = { // Observer = 2° (CIE 1931), Illuminant = D65
			X: [ 0.4124564,  0.3575761,  0.1804375],
			Y: [ 0.2126729,  0.7151522,  0.0721750],
			Z: [ 0.0193339,  0.1191920,  0.9503041],
			R: [ 3.2404542, -1.5371385, -0.4985314],
			G: [-0.9692660,  1.8760108,  0.0415560],
			B: [ 0.0556434, -0.2040259,  1.0572252]
		},
		grey = {r: 0.298954, g: 0.586434, b: 0.114612}, // CIE-XYZ 1931
		luminance = {r: 0.2126, g: 0.7152, b: 0.0722}, // W3C 2.0

		_math = window.Math,
		_parseint = window.parseInt,

		Colors = window.Colors = function(options) {
			this.colors = {RND: {}};
			this.options = {
				color: 'rgba(204, 82, 37, 0.8)', // init value(s)...
				XYZMatrix: XYZMatrix,
				// XYZReference: {},
				grey: grey,
				luminance: luminance,
				valueRanges: _valueRanges
				// customBG: '#808080'
				// convertCallback: undefined,
				// allMixDetails: false
			};
			initInstance(this, options || {});
		},
		initInstance = function(THIS, options) {
			var matrix,
				importColor,
				_options = THIS.options,
				customBG;

			focusInstance(THIS);
			for (var option in options) {
				if (options[option] !== undefined) _options[option] = options[option];
			}
			matrix = _options.XYZMatrix;
			if (!options.XYZReference) _options.XYZReference = {
				X: matrix.X[0] + matrix.X[1] + matrix.X[2],
				Y: matrix.Y[0] + matrix.Y[1] + matrix.Y[2],
				Z: matrix.Z[0] + matrix.Z[1] + matrix.Z[2]
			};
			customBG = _options.customBG;
			_options.customBG = (typeof customBG === 'string') ? ColorConverter.txt2color(customBG).rgb : customBG;
			_colors = setColor(THIS.colors, _options.color, undefined, true); // THIS.colors = _colors =
		},
		focusInstance = function(THIS) {
			if (_instance !== THIS) {
				_instance = THIS;
				_colors = THIS.colors;
			}
		};

	Colors.prototype.setColor = function(newCol, type, alpha) {
		focusInstance(this);
		if (newCol) {
			return setColor(this.colors, newCol, type, undefined, alpha);
		} else {
			if (alpha !== undefined) {
				this.colors.alpha = limitValue(alpha, 0, 1);
			}
			return convertColors(type);
		}
	};

	Colors.prototype.getColor = function(type) {
		var result = this.colors, n = 0;

		if (type) {
			type = type.split('.');
			while (result[type[n]]) {
				result = result[type[n++]];
			}
			if (type.length !== n) {
				result = undefined;
			}
		}
		return result;
	};

	Colors.prototype.setCustomBackground = function(col) { // wild gues,... check again...
		focusInstance(this); // needed???
		this.options.customBG = (typeof col === 'string') ? ColorConverter.txt2color(col).rgb : col;
		// return setColor(this.colors, this.options.customBG, 'rgb', true); // !!!!RGB
		return setColor(this.colors, undefined, 'rgb'); // just recalculate existing
	};

	Colors.prototype.saveAsBackground = function() { // alpha
		focusInstance(this); // needed???
		// return setColor(this.colors, this.colors.RND.rgb, 'rgb', true);
		return setColor(this.colors, undefined, 'rgb', true);
	};

	Colors.prototype.convertColor = function(color, type) {
		var convert = ColorConverter,
			ranges = _valueRanges,
			types = type.split('2'),
			fromType = types[0],
			toType = types[1],
			test = /(?:RG|HS|CM|LA)/,
			normalizeFrom = test.test(fromType),
			normalizeTo = test.test(toType),
			exceptions = {LAB: 'Lab'},
			normalize = function(color, type, reverse) {
				var result = {},
					Lab = type === 'Lab' ? 1 : 0;

				for (var n in color) { // faster (but bigger) way: if/else outside 2 for loops
					result[n] = reverse ?
						_math.round(color[n] * (Lab || ranges[type][n][1])) :
						color[n] / (Lab || ranges[type][n][1]);
				}

				return result;
			};

		fromType = ranges[fromType] ? fromType : exceptions[fromType] || fromType.toLowerCase();
		toType = ranges[toType] ? toType : exceptions[toType] || toType.toLowerCase();

		if (normalizeFrom && type !== 'RGB2HEX') { // from ABC to abc
			color = normalize(color, fromType);
		}
		color = fromType === toType ? color : ( // same type; returns same/normalized version
			convert[fromType + '2' + toType] ? convert[fromType + '2' + toType](color, true) : // existing converter
			toType === 'HEX' ? convert.RGB2HEX(type === 'RGB2HEX' ? color : normalize(fromType === 'rgb' ? color :
				convert[fromType + '2rgb'](color, true), 'rgb', true)) :
			convert['rgb2' + toType](convert[fromType + '2rgb'](color, true), true) // not in ColorConverter
		);
		if (normalizeTo) { // from abc to ABC
			color = normalize(color, toType, true);
		}

		return color;
	};

	Colors.prototype.toString = function(colorMode, forceAlpha) {
		return ColorConverter.color2text((colorMode || 'rgb').toLowerCase(), this.colors, forceAlpha);
	};


	// ------------------------------------------------------ //
	// ---------- Color calculation related stuff  ---------- //
	// -------------------------------------------------------//

	function setColor(colors, color, type, save, alpha) { // color only full range
		if (typeof color === 'string') {
			var color = ColorConverter.txt2color(color); // new object
			type = color.type;
			_colors[type] = color[type];
			alpha = alpha !== undefined ? alpha : color.alpha;
		} else if (color) {
			for (var n in color) {
				colors[type][n] = type === 'Lab' ?
				limitValue(color[n], _valueRanges[type][n][0], _valueRanges[type][n][1]) :
				limitValue(color[n] / _valueRanges[type][n][1], 0 , 1);
			}
		}
		if (alpha !== undefined) {
			colors.alpha = limitValue(+alpha, 0, 1);
		}
		return convertColors(type, save ? colors : undefined);
	}

	function saveAsBackground(RGB, rgb, alpha) {
		var grey = _instance.options.grey,
			color = {};

		color.RGB = {r: RGB.r, g: RGB.g, b: RGB.b};
		color.rgb = {r: rgb.r, g: rgb.g, b: rgb.b};
		color.alpha = alpha;
		// color.RGBLuminance = getLuminance(RGB);
		color.equivalentGrey = _math.round(grey.r * RGB.r + grey.g * RGB.g + grey.b * RGB.b);

		color.rgbaMixBlack = mixColors(rgb, {r: 0, g: 0, b: 0}, alpha, 1);
		color.rgbaMixWhite = mixColors(rgb, {r: 1, g: 1, b: 1}, alpha, 1);
		color.rgbaMixBlack.luminance = getLuminance(color.rgbaMixBlack, true);
		color.rgbaMixWhite.luminance = getLuminance(color.rgbaMixWhite, true);

		if (_instance.options.customBG) {
			color.rgbaMixCustom = mixColors(rgb, _instance.options.customBG, alpha, 1);
			color.rgbaMixCustom.luminance = getLuminance(color.rgbaMixCustom, true);
			_instance.options.customBG.luminance = getLuminance(_instance.options.customBG, true);
		}

		return color;
	}

	function convertColors(type, colorObj) {
		// console.time('convertColors');
		var _Math = _math,
			colors = colorObj || _colors,
			convert = ColorConverter,
			options = _instance.options,
			ranges = _valueRanges,
			RND = colors.RND,
			// type = colorType, // || _mode.type,
			modes, mode = '', from = '', // value = '',
			exceptions = {hsl: 'hsv', cmyk: 'cmy', rgb: type},
			RGB = RND.rgb, SAVE, SMART;

		if (type !== 'alpha') {
			for (var typ in ranges) {
				if (!ranges[typ][typ]) { // no alpha|HEX
					if (type !== typ && typ !== 'XYZ') {
						from = exceptions[typ] || 'rgb';
						colors[typ] = convert[from + '2' + typ](colors[from]);
					}

					if (!RND[typ]) RND[typ] = {};
					modes = colors[typ];
					for(mode in modes) {
						RND[typ][mode] = _Math.round(modes[mode] * (typ === 'Lab' ? 1 : ranges[typ][mode][1]));
					}
				}
			}
			if (type !== 'Lab') {
				delete colors._rgb;
			}

			RGB = RND.rgb;
			colors.HEX = convert.RGB2HEX(RGB);
			colors.equivalentGrey =
				options.grey.r * colors.rgb.r +
				options.grey.g * colors.rgb.g +
				options.grey.b * colors.rgb.b;
			colors.webSave = SAVE = getClosestWebColor(RGB, 51);
			// colors.webSave.HEX = convert.RGB2HEX(colors.webSave);
			colors.webSmart = SMART = getClosestWebColor(RGB, 17);
			// colors.webSmart.HEX = convert.RGB2HEX(colors.webSmart);
			colors.saveColor =
				RGB.r === SAVE.r && RGB.g === SAVE.g && RGB.b === SAVE.b  ? 'web save' :
				RGB.r === SMART.r && RGB.g === SMART.g && RGB.b === SMART.b  ? 'web smart' : '';
			colors.hueRGB = convert.hue2RGB(colors.hsv.h);

			if (colorObj) {
				colors.background = saveAsBackground(RGB, colors.rgb, colors.alpha);
			}
		} // else RGB = RND.rgb;

		var rgb = colors.rgb, // for better minification...
			alpha = colors.alpha,
			luminance = 'luminance',
			background = colors.background,
			rgbaMixBlack, rgbaMixWhite, rgbaMixCustom,
			rgbaMixBG, rgbaMixBGMixBlack, rgbaMixBGMixWhite, rgbaMixBGMixCustom,
			_mixColors = mixColors,
			_getLuminance = getLuminance,
			_getWCAG2Ratio = getWCAG2Ratio,
			_getHueDelta = getHueDelta;

		rgbaMixBlack = _mixColors(rgb, {r: 0, g: 0, b: 0}, alpha, 1);
		rgbaMixBlack[luminance] = _getLuminance(rgbaMixBlack, true);
		colors.rgbaMixBlack = rgbaMixBlack;

		rgbaMixWhite = _mixColors(rgb, {r: 1, g: 1, b: 1}, alpha, 1);
		rgbaMixWhite[luminance] = _getLuminance(rgbaMixWhite, true);
		colors.rgbaMixWhite = rgbaMixWhite;

		if (options.allMixDetails) {
			rgbaMixBlack.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBlack[luminance], 0);
			rgbaMixWhite.WCAG2Ratio = _getWCAG2Ratio(rgbaMixWhite[luminance], 1);

			if (options.customBG) {
				rgbaMixCustom = _mixColors(rgb, options.customBG, alpha, 1);
				rgbaMixCustom[luminance] = _getLuminance(rgbaMixCustom, true);
				rgbaMixCustom.WCAG2Ratio = _getWCAG2Ratio(rgbaMixCustom[luminance], options.customBG[luminance]);
				colors.rgbaMixCustom = rgbaMixCustom;
			}

			rgbaMixBG = _mixColors(rgb, background.rgb, alpha, background.alpha);
			rgbaMixBG[luminance] = _getLuminance(rgbaMixBG, true); // ?? do we need this?
			colors.rgbaMixBG = rgbaMixBG;

			rgbaMixBGMixBlack = _mixColors(rgb, background.rgbaMixBlack, alpha, 1);
			rgbaMixBGMixBlack[luminance] = _getLuminance(rgbaMixBGMixBlack, true);
			rgbaMixBGMixBlack.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBGMixBlack[luminance],
				background.rgbaMixBlack[luminance]);
			/* ------ */
			rgbaMixBGMixBlack.luminanceDelta = _Math.abs(
				rgbaMixBGMixBlack[luminance] - background.rgbaMixBlack[luminance]);
			rgbaMixBGMixBlack.hueDelta = _getHueDelta(background.rgbaMixBlack, rgbaMixBGMixBlack, true);
			/* ------ */
			colors.rgbaMixBGMixBlack = rgbaMixBGMixBlack;

			rgbaMixBGMixWhite = _mixColors(rgb, background.rgbaMixWhite, alpha, 1);
			rgbaMixBGMixWhite[luminance] = _getLuminance(rgbaMixBGMixWhite, true);
			rgbaMixBGMixWhite.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBGMixWhite[luminance],
				background.rgbaMixWhite[luminance]);
			/* ------ */
			rgbaMixBGMixWhite.luminanceDelta = _Math.abs(
				rgbaMixBGMixWhite[luminance] - background.rgbaMixWhite[luminance]);
			rgbaMixBGMixWhite.hueDelta = _getHueDelta(background.rgbaMixWhite, rgbaMixBGMixWhite, true);
			/* ------ */
			colors.rgbaMixBGMixWhite = rgbaMixBGMixWhite;
		}

		if (options.customBG) {
			rgbaMixBGMixCustom = _mixColors(rgb, background.rgbaMixCustom, alpha, 1);
			rgbaMixBGMixCustom[luminance] = _getLuminance(rgbaMixBGMixCustom, true);
			rgbaMixBGMixCustom.WCAG2Ratio = _getWCAG2Ratio(rgbaMixBGMixCustom[luminance],
				background.rgbaMixCustom[luminance]);
			colors.rgbaMixBGMixCustom = rgbaMixBGMixCustom;
			/* ------ */
			rgbaMixBGMixCustom.luminanceDelta = _Math.abs(
				rgbaMixBGMixCustom[luminance] - background.rgbaMixCustom[luminance]);
			rgbaMixBGMixCustom.hueDelta = _getHueDelta(background.rgbaMixCustom, rgbaMixBGMixCustom, true);
			/* ------ */
		}

		colors.RGBLuminance = _getLuminance(RGB);
		colors.HUELuminance = _getLuminance(colors.hueRGB);

		// renderVars.readyToRender = true;
		if (options.convertCallback) {
			options.convertCallback(colors, type); //, convert); //, _mode);
		}

		// console.timeEnd('convertColors')
		// if (colorObj)
		return colors;
	}


	// ------------------------------------------------------ //
	// ------------------ color conversion ------------------ //
	// -------------------------------------------------------//

	var ColorConverter = {
		txt2color: function(txt) {
			var color = {},
				parts = txt.replace(/(?:#|\)|%)/g, '').split('('),
				values = (parts[1] || '').split(/,\s*/),
				type = parts[1] ? parts[0].substr(0, 3) : 'rgb',
				m = '';

			color.type = type;
			color[type] = {};
			if (parts[1]) {
				for (var n = 3; n--; ) {
					m = type[n] || type.charAt(n); // IE7
					color[type][m] = +values[n] / _valueRanges[type][m][1];
				}
			} else {
				color.rgb = ColorConverter.HEX2rgb(parts[0]);
			}
			// color.color = color[type];
			color.alpha = values[3] ? +values[3] : 1;

			return color;
		},

		color2text: function(colorMode, colors, forceAlpha) {
			var alpha = forceAlpha !== false && _math.round(colors.alpha * 100) / 100,
				hasAlpha = typeof alpha === 'number' &&
					forceAlpha !== false && (forceAlpha || alpha !== 1),
				RGB = colors.RND.rgb,
				HSL = colors.RND.hsl,
				shouldBeHex = colorMode === 'hex' && hasAlpha,
				isHex = colorMode === 'hex' && !shouldBeHex,
				isRgb = colorMode === 'rgb' || shouldBeHex,
				innerText = isRgb ? RGB.r + ', ' + RGB.g + ', ' + RGB.b :
					!isHex ? HSL.h + ', ' + HSL.s + '%, ' + HSL.l + '%' :
					'#' + colors.HEX;

			return isHex ? innerText : (shouldBeHex ? 'rgb' : colorMode) + 
					(hasAlpha ? 'a' : '') + '(' + innerText + (hasAlpha ? ', ' + alpha : '') + ')';
		},

		RGB2HEX: function(RGB) {
			return (
				(RGB.r < 16 ? '0' : '') + RGB.r.toString(16) +
				(RGB.g < 16 ? '0' : '') + RGB.g.toString(16) +
				(RGB.b < 16 ? '0' : '') + RGB.b.toString(16)
			).toUpperCase();
		},

		HEX2rgb: function(HEX) {
			HEX = HEX.split(''); // IE7
			return {
				r: +('0x' + HEX[0] + HEX[HEX[3] ? 1 : 0]) / 255,
				g: +('0x' + HEX[HEX[3] ? 2 : 1] + (HEX[3] || HEX[1])) / 255,
				b: +('0x' + (HEX[4] || HEX[2]) + (HEX[5] || HEX[2])) / 255
			};
		},

		hue2RGB: function(hue) {
			var _Math = _math,
				h = hue * 6,
				mod = ~~h % 6, // Math.floor(h) -> faster in most browsers
				i = h === 6 ? 0 : (h - mod);

			return {
				r: _Math.round([1, 1 - i, 0, 0, i, 1][mod] * 255),
				g: _Math.round([i, 1, 1, 1 - i, 0, 0][mod] * 255),
				b: _Math.round([0, 0, i, 1, 1, 1 - i][mod] * 255)
			};
		},

		// ------------------------ HSV ------------------------ //

		rgb2hsv: function(rgb) { // faster
			var _Math = _math,
				r = rgb.r,
				g = rgb.g,
				b = rgb.b,
				k = 0, chroma, min, s;

			if (g < b) {
				g = b + (b = g, 0);
				k = -1;
			}
			min = b;
			if (r < g) {
				r = g + (g = r, 0);
				k = -2 / 6 - k;
				min = _Math.min(g, b); // g < b ? g : b; ???
			}
			chroma = r - min;
			s = r ? (chroma / r) : 0;
			return {
				h: s < 1e-15 ? ((_colors && _colors.hsl && _colors.hsl.h) || 0) :
					chroma ? _Math.abs(k + (g - b) / (6 * chroma)) : 0,
				s: r ? (chroma / r) : ((_colors && _colors.hsv && _colors.hsv.s) || 0), // ??_colors.hsv.s || 0
				v: r
			};
		},

		hsv2rgb: function(hsv) {
			var h = hsv.h * 6,
				s = hsv.s,
				v = hsv.v,
				i = ~~h, // Math.floor(h) -> faster in most browsers
				f = h - i,
				p = v * (1 - s),
				q = v * (1 - f * s),
				t = v * (1 - (1 - f) * s),
				mod = i % 6;

			return {
				r: [v, q, p, p, t, v][mod],
				g: [t, v, v, q, p, p][mod],
				b: [p, p, t, v, v, q][mod]
			};
		},

		// ------------------------ HSL ------------------------ //

		hsv2hsl: function(hsv) {
			var l = (2 - hsv.s) * hsv.v,
				s = hsv.s * hsv.v;

			s = !hsv.s ? 0 : l < 1 ? (l ? s / l : 0) : s / (2 - l);

			return {
				h: hsv.h,
				s: !hsv.v && !s ? ((_colors && _colors.hsl && _colors.hsl.s) || 0) : s, // ???
				l: l / 2
			};
		},

		rgb2hsl: function(rgb, dependent) { // not used in Color
			var hsv = ColorConverter.rgb2hsv(rgb);

			return ColorConverter.hsv2hsl(dependent ? hsv : (_colors.hsv = hsv));
		},

		hsl2rgb: function(hsl) {
			var h = hsl.h * 6,
				s = hsl.s,
				l = hsl.l,
				v = l < 0.5 ? l * (1 + s) : (l + s) - (s * l),
				m = l + l - v,
				sv = v ? ((v - m) / v) : 0,
				sextant = ~~h, // Math.floor(h) -> faster in most browsers
				fract = h - sextant,
				vsf = v * sv * fract,
				t = m + vsf,
				q = v - vsf,
				mod = sextant % 6;

			return {
				r: [v, q, m, m, t, v][mod],
				g: [t, v, v, q, m, m][mod],
				b: [m, m, t, v, v, q][mod]
			};
		},

		// ------------------------ CMYK ------------------------ //
		// Quote from Wikipedia:
		// "Since RGB and CMYK spaces are both device-dependent spaces, there is no
		// simple or general conversion formula that converts between them.
		// Conversions are generally done through color management systems, using
		// color profiles that describe the spaces being converted. Nevertheless, the
		// conversions cannot be exact, since these spaces have very different gamuts."
		// Translation: the following are just simple RGB to CMY(K) and visa versa conversion functions.

		rgb2cmy: function(rgb) {
			return {
				c: 1 - rgb.r,
				m: 1 - rgb.g,
				y: 1 - rgb.b
			};
		},

		cmy2cmyk: function(cmy) {
			var _Math = _math,
				k = _Math.min(_Math.min(cmy.c, cmy.m), cmy.y),
				t = 1 - k || 1e-20;

			return { // regular
				c: (cmy.c - k) / t,
				m: (cmy.m - k) / t,
				y: (cmy.y - k) / t,
				k: k
			};
		},

		cmyk2cmy: function(cmyk) {
			var k = cmyk.k;

			return { // regular
				c: cmyk.c * (1 - k) + k,
				m: cmyk.m * (1 - k) + k,
				y: cmyk.y * (1 - k) + k
			};
		},

		cmy2rgb: function(cmy) {
			return {
				r: 1 - cmy.c,
				g: 1 - cmy.m,
				b: 1 - cmy.y
			};
		},

		rgb2cmyk: function(rgb, dependent) {
			var cmy = ColorConverter.rgb2cmy(rgb); // doppelt??

			return ColorConverter.cmy2cmyk(dependent ? cmy : (_colors.cmy = cmy));
		},

		cmyk2rgb: function(cmyk, dependent) {
			var cmy = ColorConverter.cmyk2cmy(cmyk); // doppelt??

			return ColorConverter.cmy2rgb(dependent ? cmy : (_colors.cmy = cmy));
		},

		// ------------------------ LAB ------------------------ //

		XYZ2rgb: function(XYZ, skip) {
			var _Math = _math,
				M = _instance.options.XYZMatrix,
				X = XYZ.X,
				Y = XYZ.Y,
				Z = XYZ.Z,
				r = X * M.R[0] + Y * M.R[1] + Z * M.R[2],
				g = X * M.G[0] + Y * M.G[1] + Z * M.G[2],
				b = X * M.B[0] + Y * M.B[1] + Z * M.B[2],
				N = 1 / 2.4;

			M = 0.0031308;

			r = (r > M ? 1.055 * _Math.pow(r, N) - 0.055 : 12.92 * r);
			g = (g > M ? 1.055 * _Math.pow(g, N) - 0.055 : 12.92 * g);
			b = (b > M ? 1.055 * _Math.pow(b, N) - 0.055 : 12.92 * b);

			if (!skip) { // out of gammut
				_colors._rgb = {r: r, g: g, b: b};
			}

			return {
				r: limitValue(r, 0, 1),
				g: limitValue(g, 0, 1),
				b: limitValue(b, 0, 1)
			};
		},

		rgb2XYZ: function(rgb) {
			var _Math = _math,
				M = _instance.options.XYZMatrix,
				r = rgb.r,
				g = rgb.g,
				b = rgb.b,
				N = 0.04045;

			r = (r > N ? _Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92);
			g = (g > N ? _Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92);
			b = (b > N ? _Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92);

			return {
				X: r * M.X[0] + g * M.X[1] + b * M.X[2],
				Y: r * M.Y[0] + g * M.Y[1] + b * M.Y[2],
				Z: r * M.Z[0] + g * M.Z[1] + b * M.Z[2]
			};
		},

		XYZ2Lab: function(XYZ) {
			var _Math = _math,
				R = _instance.options.XYZReference,
				X = XYZ.X / R.X,
				Y = XYZ.Y / R.Y,
				Z = XYZ.Z / R.Z,
				N = 16 / 116, M = 1 / 3, K = 0.008856, L = 7.787037;

			X = X > K ? _Math.pow(X, M) : (L * X) + N;
			Y = Y > K ? _Math.pow(Y, M) : (L * Y) + N;
			Z = Z > K ? _Math.pow(Z, M) : (L * Z) + N;

			return {
				L: (116 * Y) - 16,
				a: 500 * (X - Y),
				b: 200 * (Y - Z)
			};
		},

		Lab2XYZ: function(Lab) {
			var _Math = _math,
				R = _instance.options.XYZReference,
				Y = (Lab.L + 16) / 116,
				X = Lab.a / 500 + Y,
				Z = Y - Lab.b / 200,
				X3 = _Math.pow(X, 3),
				Y3 = _Math.pow(Y, 3),
				Z3 = _Math.pow(Z, 3),
				N = 16 / 116, K = 0.008856, L = 7.787037;

			return {
				X: (X3 > K ? X3 : (X - N) / L) * R.X,
				Y: (Y3 > K ? Y3 : (Y - N) / L) * R.Y,
				Z: (Z3 > K ? Z3 : (Z - N) / L) * R.Z
			};
		},

		rgb2Lab: function(rgb, dependent) {
			var XYZ = ColorConverter.rgb2XYZ(rgb);

			return ColorConverter.XYZ2Lab(dependent ? XYZ : (_colors.XYZ = XYZ));
		},

		Lab2rgb: function(Lab, dependent) {
			var XYZ = ColorConverter.Lab2XYZ(Lab);

			return ColorConverter.XYZ2rgb(dependent ? XYZ : (_colors.XYZ = XYZ), dependent);
		}
	};

	// ------------------------------------------------------ //
	// ------------------ helper functions ------------------ //
	// -------------------------------------------------------//

	function getClosestWebColor(RGB, val) {
		var out = {},
			tmp = 0,
			half = val / 2;

		for (var n in RGB) {
			tmp = RGB[n] % val; // 51 = 'web save', 17 = 'web smart'
			out[n] = RGB[n] + (tmp > half ? val - tmp : -tmp);
		}
		return out;
	}

	function getHueDelta(rgb1, rgb2, nominal) {
		var _Math = _math;

		return (_Math.max(rgb1.r - rgb2.r, rgb2.r - rgb1.r) +
				_Math.max(rgb1.g - rgb2.g, rgb2.g - rgb1.g) +
				_Math.max(rgb1.b - rgb2.b, rgb2.b - rgb1.b)) * (nominal ? 255 : 1) / 765;
	}

	function getLuminance(rgb, normalized) {
		var div = normalized ? 1 : 255,
			RGB = [rgb.r / div, rgb.g / div, rgb.b / div],
			luminance = _instance.options.luminance;

		for (var i = RGB.length; i--; ) {
			RGB[i] = RGB[i] <= 0.03928 ? RGB[i] / 12.92 : _math.pow(((RGB[i] + 0.055) / 1.055), 2.4);
		}
		return ((luminance.r * RGB[0]) + (luminance.g * RGB[1]) + (luminance.b * RGB[2]));
	}

	function mixColors(topColor, bottomColor, topAlpha, bottomAlpha) {
		var newColor = {},
			alphaTop = (topAlpha !== undefined ? topAlpha : 1),
			alphaBottom = (bottomAlpha !== undefined ? bottomAlpha : 1),
			alpha = alphaTop + alphaBottom * (1 - alphaTop); // 1 - (1 - alphaTop) * (1 - alphaBottom);

		for(var n in topColor) {
			newColor[n] = (topColor[n] * alphaTop + bottomColor[n] * alphaBottom * (1 - alphaTop)) / alpha;
		}
		newColor.a = alpha;
		return newColor;
	}

	function getWCAG2Ratio(lum1, lum2) {
		var ratio = 1;

		if (lum1 >= lum2) {
			ratio = (lum1 + 0.05) / (lum2 + 0.05);
		} else {
			ratio = (lum2 + 0.05) / (lum1 + 0.05);
		}
		return _math.round(ratio * 100) / 100;
	}

	function limitValue(value, min, max) {
		// return Math.max(min, Math.min(max, value)); // faster??
		return (value > max ? max : value < min ? min : value);
	}
})(window);

;(function () {
  'use strict'

  // Polyfill Element.closest() for IE9+
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this
      if (!document.documentElement.contains(el)) return null
      do {
        if (el.matches(s)) return el
        el = el.parentElement || el.parentNode
      } while (el !== null && el.nodeType === 1)
      return null
    }
  }

  /**
   * Helper function to create HTML element from HTML string
   *
   * @param htmlString
   * @returns {Element}
   */
  var createElementFromHTML = function (htmlString) {
    var div = document.createElement('div')
    div.innerHTML = htmlString.trim()

    return div.firstElementChild
  }

  /**
   * Helper function to insert HTML element after referenceNode
   *
   * @param newNode
   * @param referenceNode
   */
  var insertAfter = function (newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  }

  /**
   * Helper function to get current element position
   *
   * @param element
   * @returns {{left: number, top: number}}
   */
  var getElementPosition = function (element) {
    var doc = element && element.ownerDocument
    var win = doc.defaultView || doc.parentWindow || window
    var docElem = doc.documentElement
    var clientTop = docElem.clientTop || 0
    var clientLeft = docElem.clientLeft || 0
    var box = {top: 0, left: 0}
    if (element.getBoundingClientRect) {
      box = element.getBoundingClientRect()
    }

    return {
      left: box.left - clientLeft,
      top: box.top - clientTop
    }
  }

  /**
   *  Helper function to merge two object non-recursively
   */
  var merge = function () {
    var obj = {}
    var key
    var il = arguments.length
    var i = 0

    for (; i < il; i++) {
      for (key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          obj[key] = arguments[i][key]
        }
      }
    }

    return obj
  }

  /**
   * Helper function to filter duplicate element from Array
   *
   * @param arr
   * @returns {array}
   */
  var uniqueArray = function (arr) {
    var onlyUnique = function (value, index, self) {
      return self.indexOf(value) === index
    }
    var unique = arr.filter(onlyUnique)

    return unique
  }

  /**
   * The ColorPicker
   *
   * @param arg
   * @constructor
   */
  var ColorPicker = function (arg) {
    /**
     * Default options value
     */
    var options = {
      selector: null,
      templateSelector: null,
      localStorageKey: '_color-picker',
      defaultColorPalette: [],
      initialColorValue: null,
      renderCallback: null,
      triggerOn: 'click',
      marginTop: 30,
      marginLeft: 0
    }

    /**
     * HTML element on color picker template
     */
    var attachedOnElement
    var pickerElm
    var colorDiscElm
    var luminanceBarElm
    var coverLayerElm
    var barWhiteLayerElm
    var barBGLayerElm
    var discCursorElm
    var barCursorElm
    var hexValueBoxElm
    var colorPaletteElm
    var paletteAddElm
    var customizerElm

    /**
     * Reference to this object
     *
     * @type {ColorPicker}
     */
    var self = this

    /**
     * Hold state of this object already rendered or not
     *
     * @type {boolean}
     */
    var rendered = false

    /**
     * Hold state if user change color via color disc customizer
     *
     * @type {boolean}
     */
    var updateTheColorPalette = false

    /**
     * Color data to be rendered
     *
     * @type {Array}
     */
    var colorPalette = []

    /**
     * Mouse position start point on mousemove event
     */
    var mouseMoveStartPoint = {top: 0, left: 0}

    /**
     * Hold render timer interval, will be used for cancelling timer interval
     */
    var renderTimer

    /**
     * Hold flag whenever render will recursively call requestAnimationFrame or not
     */
    var renderRecursiveLoop

    /**
     *
     * @type {boolean}
     */
    var isAfterMouseMove = false

    /**
     *
     * @type {boolean}
     */
    var needToCallRenderCallback = false

    /**
     * Hold HTML element that is targeted on click/drag event
     */
    var currentMouseEventTarget

    /**
     * Instance of Colors library
     *
     * @type {Window.Colors}
     */
    var Color = new Colors({color: 'rgb(255, 255, 255'})

    /**
     * Draw colors disc
     *
     * @param context
     * @param radius
     */
    var drawDisc = function (context, radius) {
      var xAxis = radius[0] || radius // radius on x-axis
      var yAxis = radius[1] || radius // radius on y-axis
      var steps = 1
      var angle = 360
      var coef = Math.PI / 180
      var gradient

      context.save()
      context.scale(xAxis, yAxis)

      for (; angle > 0; angle -= steps) {
        context.beginPath()
        if (steps !== 360) {
          context.moveTo(1, 1) // stroke
        }
        context.arc(
          1, 1, 1,
          (angle - (steps / 2) - 1) * coef,
          (angle + (steps / 2) + 1) * coef
        )

        gradient = context.createRadialGradient(1, 1, 1, 1, 1, 0)
        gradient.addColorStop(0, 'hsl(' + (360 - angle) + ', 100%, 50%)')
        gradient.addColorStop(1, '#FFFFFF')

        context.fillStyle = gradient
        context.fill()
      }
      context.restore()
    }

    /**
     * Draw luminance bar
     *
     * @param context
     */
    var drawLuminanceBar = function (context) {
      var gradient = context.createLinearGradient(0, 0, 200, 20)

      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(1, 'black')

      context.fillStyle = gradient
      context.fillRect(0, 0, 200, 20)
    }

    /**
     * Render the picker and color changes
     */
    var doRender = function () {
      var colorDiscRadius = colorDiscElm.offsetHeight / 2
      var luminanceBarWidth = luminanceBarElm.offsetWidth
      var pi2 = Math.PI * 2
      var x = Math.cos(pi2 - (Color.colors.hsv.h * pi2))
      var y = Math.sin(pi2 - (Color.colors.hsv.h * pi2))
      var r = Color.colors.hsv.s * (colorDiscRadius - 10)

      coverLayerElm.style.opacity = 1 - Color.colors.hsv.v
      barWhiteLayerElm.style.opacity = 1 - Color.colors.hsv.s

      barBGLayerElm.style.backgroundColor = 'rgb(' +
        Color.colors.hueRGB.r + ',' +
        Color.colors.hueRGB.g + ',' +
        Color.colors.hueRGB.b + ')'

      discCursorElm.style.cssText =
        'left: ' + ((x * r) + colorDiscRadius) + 'px;' +
        'top: ' + ((y * r) + colorDiscRadius) + 'px;' +
        'border-color: ' + (Color.colors.RGBLuminance > 0.22 ? '#666;' : '#ddd')

      barCursorElm.style.left = ((1 - Color.colors.hsv.v) * (luminanceBarWidth - 20)) + 'px'

      if (document.activeElement != hexValueBoxElm) {
        hexValueBoxElm.value = '#' + Color.colors.HEX
      }

      if (options.renderCallback && typeof options.renderCallback === 'function' && needToCallRenderCallback) {
        options.renderCallback(self)
      }

      if (renderRecursiveLoop) {
        window.requestAnimationFrame(doRender)
      }
    }

    /**
     * Stop render timer interval
     */
    var stopRender = function () {
      renderRecursiveLoop = false
      window.cancelAnimationFrame(renderTimer)
    }

    /**
     * Start render timer interval
     *
     * @param oneTime
     */
    var startRender = function (oneTime) {
      if (oneTime) {
        renderRecursiveLoop = false
        doRender()
        stopRender()
      } else {
        renderRecursiveLoop = true
        renderTimer = window.requestAnimationFrame(doRender)
      }
    }

    /**
     * Callback on mousemove event
     *
     * @param event
     */
    var mouseMove = function (event) {
      var radius, width, hue, saturation, value, clientX, clientY, x, y

      isAfterMouseMove = true

      if (event.touches === undefined) {
        clientX = event.clientX
        clientY = event.clientY
      } else {
        clientX = event.touches[0].clientX
        clientY = event.touches[0].clientY
      }

      if (currentMouseEventTarget === colorDiscElm.parentNode) {
        // Curent target is color disc
        radius = currentMouseEventTarget.offsetHeight / 2
        x = clientX - mouseMoveStartPoint.left - radius
        y = clientY - mouseMoveStartPoint.top - radius
        hue = 360 - (((Math.atan2(y, x) * 180) / Math.PI) + (y < 0 ? 360 : 0))
        saturation = (Math.sqrt((x * x) + (y * y)) / radius) * 100

        Color.setColor({h: hue, s: saturation}, 'hsv')
      } else if (currentMouseEventTarget === luminanceBarElm.parentNode) {
        // Current target is luminanceBar
        width = currentMouseEventTarget.offsetWidth
        value = ((width - (clientX - mouseMoveStartPoint.left)) / width) * 100

        Color.setColor({v: value}, 'hsv')
      }
    }

    /**
     * Callback on mousedown event
     *
     * @param event
     */
    var mouseDown = function (event) {
      var target = event.target || event.srcElement

      if (target === hexValueBoxElm) {
        return
      }

      if (event.preventDefault) {
        event.preventDefault()
      }

      currentMouseEventTarget = target.parentNode
      mouseMoveStartPoint = getElementPosition(currentMouseEventTarget)

      // Hide the cursor
      customizerElm.classList.add('no-cursor')

      // Flag color palette need to be updated
      updateTheColorPalette = true

      window.addEventListener('mousemove', mouseMove, false)
      window.addEventListener('touchmove', mouseMove, false)

      mouseMove(event)
      startRender()
    }

    /**
     * Reset default color value from Colors instance. Make it more bright.
     */
    var makesColorBrighter = function () {
      var currentHue = Color.colors.hsv.h
      var currentSaturation = Color.colors.hsv.s

      Color.setColor({h: (currentHue * 100), s: (currentSaturation * 100), v: 100}, 'hsv')
    }

    /**
     * Create color paletter squar item
     *
     * @param data
     * @returns {HTMLDivElement}
     */
    var createColorPaletteElement = function (data) {
      var element = document.createElement('div')
      element.className = 'color-picker-palette-square'
      element.style.cssText = 'background-color: ' + data

      return element
    }

    /**
     * Create "+" button in the palette
     *
     * @returns {HTMLDivElement}
     */
    var createAddButtonElement = function () {
      var element = document.createElement('div')
      element.className = 'color-picker-palette-add color-picker-palette-square'

      return element
    }

    /**
     * Insert palette squares into color picker
     */
    var drawDefaultPaletteSquares = function () {
      var i, i2, len, len2, colorPaletteGroup, element
      var colorPaletteGroupIndex = 0

      for (i = 0, len = colorPaletteElm.children.length; i < len; ++i) {
        colorPaletteGroup = colorPaletteElm.children[i]

        if (!colorPaletteGroup.classList.contains('color-picker-palette-group')) {
          continue
        }

        colorPaletteGroup.innerHTML = ''

        if (colorPaletteGroupIndex === 0) {
          // First item is square box with 'plus' symbol
          paletteAddElm = createAddButtonElement()
          colorPaletteGroup.appendChild(paletteAddElm)
        }

        for (i2 = 0, len2 = colorPalette[colorPaletteGroupIndex].length; i2 < len2; ++i2) {
          element = createColorPaletteElement(colorPalette[colorPaletteGroupIndex][i2])
          colorPaletteGroup.appendChild(element)
        }
        colorPaletteGroupIndex += 1
      }
    }

    /**
     * Refresh palette squares, maybe there are a new data
     */
    var refreshThePalette = function () {
      var colorValue, dataString
      var data = []

      if (updateTheColorPalette) {
        colorValue = '#' + self.Color.colors.HEX
        dataString = window.localStorage.getItem(options.localStorageKey)

        if (dataString) {
          try {
            data = JSON.parse(dataString)
          } catch (e) {
            data = []
          }
        }

        data.unshift(colorValue)
        data = uniqueArray(data)
        dataString = JSON.stringify(data)
        window.localStorage.setItem(options.localStorageKey, dataString)

        colorPalette = options.defaultColorPalette.slice(0)
        if (data.length > 0) {
          colorPalette.unshift(data)
        }

        drawDefaultPaletteSquares()
      }

      updateTheColorPalette = false
    }

    /**
     * Mouse event
     */
    var bindMouseEvent = function () {
      // Core color picker event
      customizerElm.addEventListener('mousedown', mouseDown, false)
      customizerElm.addEventListener('touchstart', mouseDown, false)
      window.addEventListener('mouseup', function (e) {
        window.removeEventListener('mousemove', mouseMove, false)
        customizerElm.classList.remove('no-cursor')
        stopRender()
      }, false)
      window.addEventListener('touchend', function (e) {
        window.removeEventListener('touchmove', mouseMove, false)
        customizerElm.classList.remove('no-cursor')
        stopRender()
      }, false)

      window.addEventListener('click', function (e) {
        var target = e.target
        var onAddBtn = target === paletteAddElm
        var onCallerBtn = target === attachedOnElement
        var onPaletteSquare = target.closest('.color-picker-palette-square')
        var inCustomizer = target.closest('.color-picker-customizer')

        // This if is hack for  Chrome. Because Chrome will fire click event after mouseup
        if (!isAfterMouseMove) {
          if (onCallerBtn) {
            pickerElm.classList.toggle('color-picker-active')
          } else if (onAddBtn) {
            customizerElm.classList.toggle('color-picker-active')
            startRender(true)
          } else if (onPaletteSquare) {
            Color.setColor(e.target.style.backgroundColor)
            needToCallRenderCallback = true
            startRender(true)
            needToCallRenderCallback = false
          } else if (!onCallerBtn && !onAddBtn && !inCustomizer && target.closest('.color-picker')) {
            customizerElm.classList.remove('color-picker-active')
            Color.setColor('#FFFFFF')
            refreshThePalette()
          } else if (!onCallerBtn && !onAddBtn && !target.closest('.color-picker')) {
            pickerElm.classList.remove('color-picker-active')
            customizerElm.classList.remove('color-picker-active')
            Color.setColor('#FFFFFF')
            refreshThePalette()
          } else if (target === hexValueBoxElm) {
            hexValueBoxElm.setSelectionRange(0, 7)
          }
        }

        // This event is hack for Chrome
        window.addEventListener('mousedown', function (e) {
          isAfterMouseMove = false

          if (e.target.closest('.color-picker')) {
            needToCallRenderCallback = true
          }
        }, false)

        // This event is hack for Chrome
        window.addEventListener('touchstart', function (e) {
          isAfterMouseMove = false

          if (e.target.closest('.color-picker')) {
            needToCallRenderCallback = true
          }
        }, false)

        window.addEventListener('mouseup', function (e) {
          needToCallRenderCallback = false
        })

        window.addEventListener('touchend', function (e) {
          needToCallRenderCallback = false
        })
      }, false)
    }

    var bindHexValueBoxChanges = function () {
      hexValueBoxElm.addEventListener('keyup', function (event) {
        var target = event.target
        var inputValue = target.value.replace('#', '');
        var value = '000000';

        if (inputValue.length <= 6) {
          // No brain solution, :(
          switch ( inputValue.length ) {
            case 1:
              value = inputValue + inputValue + inputValue + inputValue + inputValue + inputValue
              break;
            case 2:
              value = inputValue + inputValue + inputValue
              break;
            case 3:
              value = inputValue + inputValue
            case 4:
              value = inputValue + inputValue.substring(0, 2)
            case 5:
              value = inputValue + inputValue.substring(0, 1)
            case 6:
              value = inputValue
          }
        } else {
          value = inputValue.substring(0, 6)
        }

        Color.setColor(value)
        needToCallRenderCallback = true
        doRender()
      })

      hexValueBoxElm.addEventListener('keydown', function (event) {
        if (event.which == 13) {
          pickerElm.classList.remove('color-picker-active')
          customizerElm.classList.remove('color-picker-active')
        }
      })
    }

    /**
     * Makes Color accessible publicly
     *
     * @type {Window.Colors}
     */
    this.Color = Color

    /**
     * Initial render the color picker
     */
    this.render = function () {
      var data = []
      var dataString = localStorage.getItem(options.localStorageKey)

      if (!rendered) {
        colorPalette = options.defaultColorPalette.slice(0)

        if (dataString) {
          try {
            data = JSON.parse(dataString)
          } catch (e) {}
        }

        data = uniqueArray(data)
        colorPalette.unshift(data)

        makesColorBrighter()

        drawDefaultPaletteSquares()
        drawDisc(colorDiscElm.getContext('2d'), [colorDiscElm.width / 2, colorDiscElm.height / 2])
        drawLuminanceBar(luminanceBarElm.getContext('2d'))
        insertAfter(pickerElm, attachedOnElement)

        if (options.initialColorValue) {
          Color.setColor(options.initialColorValue())
        }

        doRender()
        bindMouseEvent()
        bindHexValueBoxChanges()
      }

      rendered = true
    }

    options = merge(options, arg)
    attachedOnElement = document.querySelector(options.selector)
    pickerElm = createElementFromHTML(document.querySelector(options.templateSelector).innerHTML)
    colorDiscElm = pickerElm.querySelector('.color-picker-disc')
    luminanceBarElm = pickerElm.querySelector('.color-picker-luminance-bar')
    coverLayerElm = pickerElm.querySelector('.color-picker-cover')
    barWhiteLayerElm = pickerElm.querySelector('.color-picker-bar-white')
    barBGLayerElm = pickerElm.querySelector('.color-picker-bar-bg')
    discCursorElm = pickerElm.querySelector('.color-picker-disc-cursor')
    barCursorElm = pickerElm.querySelector('.color-picker-bar-cursor')
    hexValueBoxElm = pickerElm.querySelector('.color-picker-hex')
    colorPaletteElm = pickerElm.querySelector('.color-picker-palette')
    paletteAddElm = pickerElm.querySelector('.color-picker-palette-add')
    customizerElm = pickerElm.querySelector('.color-picker-customizer')

    attachedOnElement.addEventListener(options.triggerOn, function (e) {
      var positions = e.target.getBoundingClientRect()
      var top, left

      self.render()

      top = positions.top + options.marginTop - pickerElm.offsetHeight
      left = positions.left + options.marginLeft

      pickerElm.style.cssText = 'left: ' + left + 'px; top: ' + top + 'px'
    }, false)
  }

  /**
   * Export to global window object
   * @type {ColorPicker}
   */
  window.ColorPicker = ColorPicker
}())

var Topperoo = (function($)
{
    var $e = {};

    function buildCache ()
    {
        $e.topperoo = $("#topperoo");
        $e.userDesignsSection = $e.topperoo.find("#tpr-user-designs-section");
        $e.userDesignsList = $e.userDesignsSection.find(".tpr-saved-designs");
        $e.userDesignsContainer = $e.userDesignsSection.find(".mCSB_container");
        $e.userDesignTpl = $e.topperoo.find("#tpr-saved-design-template").html();
    }

    function updateCache ()
    {
        $e.userDesigns = $e.userDesignsList.find(".tpr-user-design");
    }

    function updateUserDesignsScrollbar ()
    {
        $e.userDesignsList.mCustomScrollbar("update");
    }

    /**
     * Renders the markup for a user design item, based on the existing Mustache template.
     *
     * @param data
     * @returns String
     */
    function renderUserDesignMarkup (data)
    {
        return Mustache.render($e.userDesignTpl, {
            id: data.id,
            name: data.name || "Name (click to edit)",
            description: data.description || "Description (click to edit)"
        });
    }

    /**
     * Adds a single user-saved design to the list.
     *
     * @param data
     * @param position Specifies where to add the design, the start or finish of the list
     */
    function addUserDesignToList (data, position)
    {
        var design = renderUserDesignMarkup(data);
        var container = $e.userDesignsSection.find(".mCSB_container");

        if (!container.length) {
            container = $e.userDesignsList;
        }

        switch (position) {
            case "before":
                container.prepend(design);
                break;
            case "after":
            default:
                container.append(design);
        }

        updateCache();
        loadUserDesignThumbnail(data.id);
        updateUserDesignsScrollbar();
    }

    /**
     * Adds a set of user-saved designs to the list.
     *
     * @param arr
     */
    function initUserDesignsList (arr)
    {
        var design;

        if (arr.constructor !== Array) {
            console.log("Designs list must be array");
            return;
        }

        arr.forEach(function(data){
            design = renderUserDesignMarkup(data);
            $e.userDesignsList.append(design);
        });

        updateCache();
    }

    function loadUserDesignThumbnail (id)
    {
        var $image = $e.userDesigns.filter("[data-id=" + id + "]").find("img");
        var url = $image.attr("data-src");

        CMF.utils.preloadOneImage(url, function(){
            $image.attr("src", url);
        }, false);
    }

    function prependUserDesign (data)
    {
        addUserDesignToList(data, "before");
    }

    function appendUserDesign (data)
    {
        addUserDesignToList(data, "after");
    }

    function removeUserDesign (id)
    {
        var $design = $e.userDesigns.filter("[data-id=" + id + "]");

        $design.hide(200, function(){
            CMF.config.executeCustomCallback('topperoo.designs.remove', id);
            $design.remove();
        });
        updateCache();
        updateUserDesignsScrollbar();
    }

    function showLoader (message)
    {
        CMF.viewport.showLoader(message);
    }

    function hideLoader ()
    {
        CMF.viewport.hideLoader();
    }

    function getURL (resource)
    {
        return CMF.config.url(resource);
    }

    function appendUserTemplate (data)
    {
        CMF.dashboard.appendUserTemplate(data);
    }

    function activateUiTab (tabIndex)
    {
        $('#topperoo .tabs a').eq(tabIndex).trigger('click');
    }

    return {
        buildCache: buildCache,

        api: {
            appendUserDesign: appendUserDesign,
            prependUserDesign: prependUserDesign,
            initUserDesignsList: initUserDesignsList,
            removeUserDesign: removeUserDesign,
            appendUserTemplate: appendUserTemplate,
            showLoader: showLoader,
            hideLoader: hideLoader,
            getURL: getURL,
            activateUiTab: activateUiTab
        }
    };

})(jQuery);
var CMF = CMF || {};

CMF.config = (function($, undefined)
{
    var app_origin = 'https://app.topperoo.com';

    var instance = {
        cid: null,
        output: null,
        currency: null,
        baseUrl: null
    };

    /**
     * Determines a limit for the objects' rotation angle, after which the
     * object will stop to rotate with the cursor in either direction and
     * instead, snap to the closes angle that is a multiple of 90 degrees.
     *
     * For example, trying to rotate an object within the 85-95 degrees
     * interval when the snapAngle is set to 5, will have no effect, the
     * object will remain "snapped" to 90 degrees.
     *
     * @type {Number}
     */
    var snapAngle = 5;     // expressed in degrees

    /**
     * Computes the intervals around each angle that is a multiple
     * of 90 degrees, within which an object will snap to that angle.
     *
     * @type {Object}
     */
    var snapLimits = {
        low360: 360 - snapAngle,
        high360: snapAngle,
        low270: 270 - snapAngle,
        high270: 270 + snapAngle,
        low180: 180 - snapAngle,
        high180: 180 + snapAngle,
        low90: 90 - snapAngle,
        high90: 90 + snapAngle
    };

    /**
     * Indicates a minimum height for viewport objects; expressed in pixels.
     * @type {Number}
     */
    var minObjectSize = 20;

    var paths = {
        schematics: {
            thumbnail : app_origin + "/schematics/thumbnails/",
            viewport : app_origin + "/schematics/viewports/",
            sample : app_origin + "/schematics/samples/"
        }
    };

    var shiftKey = false;   // indicates whether the shift key is pressed or not
    var env = 'user';   // or 'admin'


    function get ()
    {
        var keys = arguments;

        switch (keys.length) {
            case 1:
                return instance[keys[0]];
            case 2:
                return instance[keys[0]][keys[1]];
        }

        return null;
    }

    function url(fragment)
    {
        return instance.baseUrl + fragment + '/';
    }

    function buildURL (resource)
    {
        return app_origin + resource;
    }

    function getClientID()
    {
        return instance.cid;
    }

    function storeInstanceData (data, callback)
    {
        instance.baseUrl = app_origin + '/' + data['ID'] + '/';
        instance.cid = data['ID'];
        instance.currency = {
            code: data['Currency']['Code'],
            name: data['Currency']['Code'],  // don't know why I used different labels (i.e. "code" / "name")
            symbol: data['Currency']['Symbol']
        };
        instance.outputURL = data['OutputURL'];

        callback();
    }

    function getInstanceData (callback)
    {
        var settings = window.tprSettings;

        if (!settings) {
            callback(new Error("tprSettings objects undefined"));
            return;
        }

        if (!settings.tpriid) {
            callback(new Error("Topperoo instance ID not set"));
            return;
        }

        var dataURL = buildURL('/instance/data/' + settings.tpriid);

        $.getJSON(dataURL, function(data){
            storeInstanceData(data, callback);
        });
    }

    function executeCustomCallback (key, args)
    {
        if (!window.tprCallbacks) {
            return;
        }

        if (typeof window.tprCallbacks[key] == 'function') {
            return window.tprCallbacks[key](args);
        }
    }

    function getConfigOption (key)
    {
        if (typeof window._tprcfg == 'undefined') {
            return null;
        }

        if (typeof window._tprcfg.options == 'undefined') {
            return null;
        }

        if (typeof window._tprcfg.options[key] == 'undefined') {
            return null;
        }

        return window._tprcfg.options[key];
    }

    function getConfigData (key)
    {
        if (typeof window._tprcfg == 'undefined') {
            return null;
        }

        if (typeof window._tprcfg.data == 'undefined') {
            return null;
        }

        if (typeof window._tprcfg.data[key] == 'undefined') {
            return null;
        }

        return window._tprcfg.data[key];
    }

    return {
        // properties
        snapLimits: snapLimits,
        minObjectSize: minObjectSize,
        paths: paths,
        env: env,
        shiftKey: shiftKey,

        // methods
        url: url,
        buildURL: buildURL,
        getClientId: getClientID,
        getInstanceData: getInstanceData,
        get: get,

        getConfigOption: getConfigOption,
        getConfigData: getConfigData,

        executeCustomCallback: executeCustomCallback
    };

})(jQuery);
var CMF = CMF || {};

CMF.template = (function($)
{
    function Template (data, productID)
    {
        this.data = data;
        this.data['ProductID'] = productID;
        this.svg = null;

        return this;
    }

    /**
     * Retrieves the value of a template property.
     *
     * @param key
     * @returns {*}
     */
    Template.prototype.get = function (key)
    {
        return this.data[key];
    };

    Template.prototype.getData = function ()
    {
        console.log(this.data);
        return this.data;
    };

    Template.prototype.drawEntireSheet = function (config)
    {
        var tpl = this;
        var height, width;

        /**
         * The ratio between the physical size of the template (e.g. 11 inches)
         * and the size of the template on screen, in pixels.
         *
         * @type {number}
         */
        var resolution;

        if (config.width) {
            resolution = config.width / tpl.data['Width'];
            width = config.width;
            height = resolution * tpl.data['Height'];
        } else if (config.height) {
            resolution = config.height / tpl.data['Height'];
            height = config.height;
            width = resolution * tpl.data['Width'];
        }

        this.svg = SVG(config.containerID).size(width, height);
        var paper = this.svg.rect(width, height).attr({
            'fill': config.color,
            'fill-opacity': config.opacity
        });
        var mask = this.svg.mask();
        var paperMask = this.svg.rect(width, height).fill('#FFF');
        var topperMask;
        var x, y;
        var cx, cy;

        switch (tpl.data['Topper']['Shape']) {
            case 'round':
                topperMask = this.svg.circle(
                    tpl.data['Topper']['Width'] * resolution    // width == height == diameter
                ).fill('#000');
                break;
            case 'rectangular':
                topperMask = this.svg.rect(
                    tpl.data['Topper']['Width'] * resolution,
                    tpl.data['Topper']['Height'] * resolution
                ).fill('#000');
                break;
            default:
                console.log("Attempting to paint the following path:", tpl.data['Topper']['Shape']);
                topperMask = this.svg.path(tpl.data['Topper']['Shape']);
                topperMask.width(Math.round(tpl.data['Topper']['Width'] * resolution));
                console.log('SVG width applied: ', tpl.data['Topper']['Width'] * resolution);
                topperMask.height(Math.round(tpl.data['Topper']['Height'] * resolution));
                console.log('SVG height applied: ', tpl.data['Topper']['Height'] * resolution);
                topperMask.fill('#000');
                console.log('SVG fill applied');
        }

        mask.add(paperMask);

        for (x = 0; x < tpl.data['Matrix'].length; x++) {
            for (y = 0; y < tpl.data['Matrix'][0].length; y++) {
                if (tpl.data['Matrix'][x][y] === 0) {
                    continue;
                }

                cx = tpl.data['Margins']['Left'];
                cx += y * (tpl.data['Topper']['Width'] + tpl.data['Margins']['Horizontal']);
                cx += tpl.data['Topper']['Width'] / 2;
                cx *= resolution;

                cy = tpl.data['Margins']['Top'];
                cy += x * (tpl.data['Topper']['Height'] + tpl.data['Margins']['Vertical']);
                cy += tpl.data['Topper']['Height'] / 2;
                cy *= resolution;

                mask.add(topperMask.clone().center(cx, cy));
            }
        }

        paper.maskWith(mask);
        topperMask.remove();

        return {
            height: height,
            width: width
        };
    };

    Template.prototype.drawEditorPreview = function ()
    {
        var container = document.getElementById('tpr-template-editor-preview');
        var size;

        container.innerHTML = '';   // remove the existing preview, if any
        container.style.display = 'block';

        size = this.drawEntireSheet({
            containerID: 'tpr-template-editor-preview',
            width: CMF.viewport.width,
            color: '#17a086',
            opacity: 0.7
        });

        document.getElementsByClassName('viewport')[0].style.height = size.height + 'px';
    }

    Template.prototype.drawViewport = function ()
    {
        this.drawEntireSheet({
            containerID: 'tpr-template-viewport',
            width: CMF.viewport.width,
            color: '#C2D1E1',
            opacity: 0.9
        });
    };

    /**
     * Draw the template thumbnail SVG.
     *
     * @param width The width of the thumbnail on screen, specified in pixels.
     */
    Template.prototype.drawThumbnail = function (containerID)
    {
        var tpl = this;

        if (typeof containerID == 'undefined') {
            //containerID = 'tpr-product-thumb-' + tpl.data['ID'];
            containerID = 'tpr-product-thumb-' + this.data['ProductID'];
        }

        var options = {
            containerID: containerID,
            color: '#C2D1E1',
            opacity: 0.9
        };

        if (tpl.data['Width'] > tpl.data['Height']) {
            options.width = 80;
        } else {
            options.height = 100;
        }

        this.drawEntireSheet(options);
    };

    Template.prototype.drawSingleTopper = function ()
    {
        var tpl = this;

        var width = CMF.viewport.width;

        /**
         * The ratio between the physical size of the topper (e.g. 2.1 inches)
         * and the size of the topper on screen, in pixels.
         *
         * @type {number}
         */
        var resolution = width / tpl.data['Topper']['Width'];

        var height = resolution * tpl.data['Topper']['Height'];
        var draw = SVG('tpr-template-viewport').size(width, height);
        var paper = draw.rect(width, height).attr({
            'fill': '#C2D1E1',
            'fill-opacity': 0.9
        });
        var mask = draw.mask();
        var paperMask = draw.rect(width, height).fill('#FFF');
        var topperMask;

        switch (tpl.data['Topper']['Shape']) {
            case 'round':
                topperMask = draw.circle(width).fill('#000');
                break;
            case 'rectangular':
                topperMask = draw.rect(width, height).fill('#000');
                break;
            default:
                topperMask = draw.path(tpl.data['Topper']['Shape']).fill('#000');
        }

        mask.add(paperMask);
        mask.add(topperMask.center(width/2, height/2));
        paper.maskWith(mask);
    };

    Template.prototype.hasMultipleToppers = function ()
    {
        if (this.data['DisallowDesignReplication'] == 1) {
            return false;
        }

        return !(
            typeof this.data['Matrix'][0][1] == 'undefined'
            && typeof this.data['Matrix'][1] == 'undefined'
        );
    };

    Template.prototype.getDefaultName = function ()
    {
        var topperCount = this.data['Matrix'].length * this.data['Matrix'][0].length;
        var name = '';

        switch (this.data['Topper']['Shape']) {
            case 'round':
                name = this.data['Topper']['Width'] + '" ';
                break;
            case 'rectangular':
                name = this.data['Topper']['Width'] + '" × ' + this.data['Topper']['Height'] + '" ';
                break;
        }

        name += this.data['Topper']['Shape'] + ' (' + topperCount + ')';

        return name;
    };

    Template.prototype.getDefaultDescription = function ()
    {
        return this.data['Width'] + '" × ' + this.data['Height'] + '" sheet';
    };

    Template.prototype._getSheetHeightOnScreen = function ()
    {
        var resolution = CMF.viewport.width / this.data['Width'];
        return resolution * this.data['Height'];
    };

    Template.prototype._getTopperHeightOnScreen = function ()
    {
        var resolution = CMF.viewport.width / this.data['Topper']['Width'];
        return resolution * this.data['Topper']['Height'];
    };

    Template.prototype.getPixelSize = function (surface, unit)
    {
        var value;

        if (surface == 'sheet') {
            value = this.data['Width'] / CMF.viewport.width;
        } else {
            value = this.data['Topper']['Width'] / CMF.viewport.width;
        }

        if (unit == 'cm') {
            value *= 2.54;
        }

        return value;
    };

    return Template;

})(jQuery);

CMF.editor = (function($)
{
    let template = null;

    function setTemplate (tpl) {
        template = tpl;
    }

    function saveTemplate (callback)
    {
        let url = CMF.config.buildURL('/product/save');

        $.ajax({
            type: "POST",
            url: url,
            data: template.getData(),
            success: function (data) {
                callback(data);
            },
            dataType: 'json'
        });
    }

    return {
        setTemplate: setTemplate,
        saveTemplate: saveTemplate
    };
})(jQuery);

var CMF = CMF || {};

CMF.dashboard = (function($, undefined){

    var $doc;
    var $controls;
    var $productsSection;
    var $premadeSection;
    var $topperoo;
    var initialized = false;


    function buildCache() {
        $doc = $(document);
        $controls = $('.tpr-controls');
        $productsSection = $('#productsSection');
        $premadeSection = $('#premadeSection');
        $textObjectDialog = $('#textObjectDialog');
        $topperoo = $('#topperoo');
        $tplEditor = $('#tpr-template-editor');
    }

    /**
     * Loads the UI HTML from the server
     */
    function load (callback)
    {
        var uiWrapper = $('#topperoo').eq(0);
        var url = (!CMF.admin ? CMF.config.url('dashboard') : CMF.config.url('dashboarda'));
        var templates;

        initDefaultConfig();

        /**
         * Check if the webpage embedding the tool has the necessary wrapper
         */
        if (!uiWrapper.length) {
            console.log('Topperoo container not found');
            return;
        }

        if (window._tprcfg) {
            if (_tprcfg.data) {
                if (_tprcfg.data.savedTemplates) {
                    templates = [];
                    _tprcfg.data.savedTemplates.forEach(function(tpl){
                        templates.push(tpl.id);
                    });
                }
            }
        }

        $.ajax({
            url: url,
            data: {
                templates: CMF.utils.getB64EncodedArray(templates)
            },
            dataType: 'jsonp',
            crossDomain: true,
            cache: true,
            success: function(response){
                uiWrapper.html(response.content);

                if (_tprcfg.options) {
                    if (_tprcfg.options.swapPreviewElements) {
                        let $indications = $(".tpr-preview-indications").detach();
                        $(".tpr-preview-buttons-wrp").after($indications);
                    }
                }

                removeDisallowedComponents();

                // Cache DOM elements needed in all application modules
                CMF.dashboard.buildCache();
                CMF.products.buildCache();
                CMF.viewport.buildCache();
                CMF.lightbox.buildCache();
                CMF.design.buildCache();
                CMF.dashboard.enableEventHandlersForMobile();

                CMF.config.executeCustomCallback('topperoo.dashboard.loaded');

                if (typeof callback === "function") {
                    callback();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
                alert("Could not load the application interface. Please check the console for details.");
            }
        });
    }

    function initDefaultConfig()
    {
        var defaultCfg = {
            options: {
                // defaultProductId: null,
                defaultTab: 0,
                editor: false,
                saveCustomTemplates: false,
                forcePreviewBeforeSubmit: true,
                swapPreviewElements: false,
                tabsDisabled: [],
                forceOpenTabOnInit: false,
            },
            data: {
                // tpl: false,
                // savedDesigns: [],
                savedTemplates: []
            }
        };

        if (typeof _tprcfg == 'undefined') {
            window._tprcfg = {};
        }

        _tprcfg = $.extend(true, {}, defaultCfg, _tprcfg);
    }

    function removeTemplateEditor ()
    {
        $('ul.tabs li', $controls).each(function (i, elm) {
            if ($(this).attr('id') === 'tpr-template-editor-tab') {
                _tprcfg.options.tabsDisabled.push(i + 1);
            }
        });
        $('#tpr-template-editor-preview').remove();
        $('#tpr-custom-templates').remove();
    }

    function disableTabs ()
    {
        var $tabs = $("#topperoo .tabs").children("li");

        if (!Array.isArray(_tprcfg.options.tabsDisabled)) {
            return;
        }

        _tprcfg.options.tabsDisabled.forEach(function(index){
            var $tab = $tabs.eq(index - 1);
            var $anchor = $tab.children('a').eq(0);

            if ($anchor.length) {
                var href = $anchor.attr('href');
                var arrayHref = href.split('#');

                if (arrayHref.length > 1) {
                    $('#' + arrayHref[1]).hide();
                }
            }

            $tab.remove();
        });
    }

    /**
     * Remove sections of the UI which are disallowed by instance settings
     */
    function removeDisallowedComponents ()
    {
        if (typeof _tprcfg == "undefined") {
            removeTemplateEditor();
            return;
        }

        if (typeof _tprcfg.options == "undefined") {
            removeTemplateEditor();
            return;
        }

        if (_tprcfg.options.editor !== true) {
            removeTemplateEditor();
        }
    }

    function loadPreMadeDesign (id, callback)
    {
        CMF.viewport.changeLoaderText("Loading the selected design");
        CMF.viewport.showLoader();

        CMF.design.load('premade', id, function(err){
            if (err) {
                CMF.viewport.changeLoaderText("The design could not be loaded.");
                CMF.viewport.showLoader();
                CMF.viewport.hideLoader(3000);
                console.log('Error loading pre-made design: ', err);
                return;
            }

            CMF.viewport.hideLoader();
        });

        if (typeof callback === 'function') {
            callback(null);
        }
    }

    function loadCrossClientDesign (id, country, callback)
    {
        CMF.viewport.changeLoaderText("Loading the selected design");
        CMF.viewport.showLoader();

        CMF.design.load('cross-client', id + '/' + country, function(err){
            if (err) {
                CMF.viewport.changeLoaderText("The design could not be loaded.");
                CMF.viewport.showLoader();
                CMF.viewport.hideLoader(3000);
                console.log('Error loading design: ', err);
                return;
            }

            CMF.viewport.hideLoader();
        });

        if (typeof callback === 'function') {
            callback(null);
        }
    }

    function loadUserSavedDesign (id, callback)
    {
        CMF.viewport.changeLoaderText("Loading the selected design");
        CMF.viewport.showLoader();

        CMF.design.load('custom', id, function(err){
            if (err) {
                CMF.viewport.changeLoaderText("The design could not be loaded.");
                CMF.viewport.showLoader();
                CMF.viewport.hideLoader(3000);
                console.log('Error loading custom design: ' + id, err);
                return;
            }

            CMF.viewport.hideLoader();
        });

        if (typeof callback === 'function') {
            callback(null);
        }
    }


    /**
     * Sets up the tabs for the dashboard sections (products | customise | pre-made)
     * @param {Number}   activeTab  Indicates the index of the initially active tab
     * @param {Function} callback   Function to execute when the tabs are set up
     */
    function setUpTabs(activeTab, callback)
    {
        var urlSetTab = CMF.utils.getURLParameterByName('tprtab');
        var tabsDisabled = [];

        if (Array.isArray(_tprcfg.options.tabsDisabled)) {
            // Make tab disabled data start from zero
            _tprcfg.options.tabsDisabled.forEach(function(index) {
                tabsDisabled.push(index - 1);
            });
        }

        if (urlSetTab) {
            activeTab = parseInt(urlSetTab);
        }

        // The following lines are the fix for the problem with the <base> tag vs. `href` attribute on the tabs
        var $tabs = $controls.children("ul.tabs").find("a");
        $tabs.prop('href', function(){
            var location = window.location.protocol + '//';
                location += window.location.hostname;
                location += (window.location.port.length > 0) ? (':' + window.location.port) : '';
                location += window.location.pathname;
                location += window.location.search;

            return location + $(this).attr('href');
        });

        // Set active tab only on available tab.
        if (tabsDisabled.length > 0) {
            var liIndex = [];
            var $li = $controls.find('.tabs li');

            $li.each(function (i) {
                liIndex.push(i);
            });

            liIndex = liIndex.filter(function (i) {
                return tabsDisabled.indexOf(i) < 0;
            });

            if (liIndex.indexOf(activeTab) < 0) {
                activeTab = liIndex[0];
            }
        }

        if (!CMF.viewport.isMaxSize && !_tprcfg.options.forceOpenTabOnInit) {
            // For mobile
            $controls.tabs({
                /**
                 * Highlights the active tab and executes the custom callback
                 */
                create: function(event, ui){
                    $controls.children('div').addClass('slide_down').show();
                    $('#tpr-mobile-overlay').addClass('tpr-hidden');

                    if (typeof callback === "function") {
                        callback();
                    }
                },

                /**
                 * Highlights the active tab and un-highlights all others
                 */
                beforeActivate: function(event, ui){
                    $(ui.oldTab).removeClass('activeTab');
                    $(ui.newTab).addClass('activeTab');
                    $(ui.newPanel).addClass('slide_down');
                    $(ui.newPanel).show();
                },

                activate: function(event, ui) {
                    $(ui.newPanel).removeClass('slide_down');
                },

                show: { delay: 30 }
            });

        } else {
            // For desktop
            $controls.tabs({
                /**
                 * Sets the initially active tab to be the first tab in the list
                 * @type {Number}
                 */
                active: activeTab,

                /**
                 * Highlights the active tab and executes the custom callback
                 */
                create: function(event, ui){
                    $(ui.tab).addClass("activeTab");

                    if (typeof callback === "function") {
                        callback();
                    }
                },

                /**
                 * Highlights the active tab and un-highlights all others
                 */
                beforeActivate: function(event, ui){
                    $(ui.oldTab).removeClass("activeTab");
                    $(ui.newTab).addClass("activeTab");
                }
            });
        }

        if (typeof _tprcfg !== 'undefined' && typeof _tprcfg.options !== 'undefined' &&  _tprcfg.options.tabsDisabled !== true) {
            disableTabs();
        }

        initialized = true;
    }


    /**
     * Determines the product to be selected from the list, by default.
     * URL-set product takes precedence over anything, then the _tprcfg-based
     * product, then the first in the list.
     * @returns {number}
     */
    function getForcedSetProduct ()
    {
        var urlSetProduct = CMF.utils.getURLParameterByName('tprpid');  // URL-set ID of default product

        if (urlSetProduct) {
            return urlSetProduct;
        }

        if (typeof _tprcfg !== "undefined") {
            if (_tprcfg.options) {
                if (_tprcfg.options.defaultProductId) {
                    return _tprcfg.options.defaultProductId;
                }
            }
        }

        return null;
    }


    function getDefaultTab ()
    {
        var urlSetTab;

        urlSetTab = CMF.utils.getURLParameterByName('tprtab');
        if (urlSetTab) {
            return urlSetTab;
        }

        if (typeof _tprcfg !== "undefined") {
            if (_tprcfg.options) {
                if (_tprcfg.options.defaultTab) {
                    return _tprcfg.options.defaultTab;
                }
            }
        }

        return 0;
    }

    function preMadeDesignsAccessRestricted ()
    {
        if (typeof _tprcfg != "undefined") {
            if (_tprcfg.data) {
                if (_tprcfg.data.tpl === true) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Initializes the dashboard
     */
    function init (callback)
    {
        var designId = CMF.design.getId();
        var forcedSetProduct = getForcedSetProduct();
        var defaultTab = getDefaultTab();
        var urlSetPreMadeDesign = CMF.utils.getURLParameterByName('tprdesign');
        var urlSetCrossClientDesign = CMF.utils.getURLParameterByName('tprcdesign');
        var country = CMF.utils.getURLParameterByName('country');
        var customTemplatesWrapper = $('#tpr-custom-templates');
        var customTemplates = customTemplatesWrapper.find('.product');

        // Check if a custom design is required to load via URL
        if ( urlSetCrossClientDesign && country ) {
            CMF.products.generate(function() {
                loadCrossClientDesign(urlSetCrossClientDesign, country, function() {
                    setUpTabs(1, callback);
                });
            });
            return;

        // Check if a pre-made design is required to load via URL
        } else if ( urlSetPreMadeDesign ) {

            CMF.products.generate(function() {
                loadPreMadeDesign(urlSetPreMadeDesign, function() {
                    setUpTabs(1, callback);
                });
            });
            return;
        }

        if (customTemplates.length) {
            customTemplatesWrapper.show();
        }

        // If starting with a fresh design, or accessing the admin UI...
        if (!designId || CMF.admin) {
            CMF.products.generate(function() {
                var productToLoad = forcedSetProduct ? forcedSetProduct : 0;
                CMF.products.select(productToLoad);
                setUpTabs(defaultTab, callback);
            });
            return;
        }

        // If starting with a saved design...
        CMF.viewport.changeLoaderText("Loading your saved design");
        CMF.products.generate(function(){
            CMF.design.load('custom', designId, function(err){
                if (err) {
                    console.log("Could not load saved design", designId, "\n", err);
                    CMF.storage.eraseDesignId();
                }

                if (forcedSetProduct) {
                    CMF.products.select(forcedSetProduct);
                }

                setUpTabs(defaultTab, callback);
            });
        });
    }


    function assignPlaceholderToLazyImages ()
    {
        var placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC";

        $(".tpr-lazy-image").each(function() {
             if (this.getAttribute("src") !== this.getAttribute("data-src")) {
                 this.setAttribute("src", placeholder);
             }
        });
    }

    /**
     * Determines which of the images in the provided collection are above
     * the offset limits, where they are visible to the user, and loads them.
     *
     * @param $images Jquery collection of lazy images
     * @param offsetLimit The vertical offset that constitutes the visibility threshold
     */
    function loadVisibleLazyImages ($images, offsetLimit)
    {
        if (!$images.length) {
            return;
        }

        $images.each(function() {
            var $image = $(this);

            if ( $image.offset().top <= offsetLimit ) {
                if ( $image.attr("src") != $image.attr("data-src") ) {
                    $image.attr("src", $image.attr("data-src"));
                }
            }
        });
    }

    function enableCustomScrollbars ()
    {
        $(".tpr-has-scrollbar").each(function(){
            var $wrapper = $(this);
            var $lazyImages = $wrapper.find(".tpr-lazy-image");
            var offsetLimit;

            var checkForLazyImages = function () {
                if (!$lazyImages.length) {
                    return;
                }

                offsetLimit = $wrapper.offset().top + $wrapper.height();
                loadVisibleLazyImages($lazyImages, offsetLimit);
            };

            $wrapper.on('scroll', function() {
                checkForLazyImages();
            });
        });
    }

    function appendUserSavedDesignSection ()
    {
        var template = $("#tpr-user-designs-section-tpl").html();

        $(".tpr-saved-designs-panel").prepend(Mustache.render(template,{}));
        Topperoo.buildCache();
    }

    function populateUserSavedDesignsList ()
    {
        Topperoo.api.initUserDesignsList(_tprcfg.data.savedDesigns);
    }

    function showSaveDesignButton ()
    {
        $(".tpr-button[data-action='save']").removeClass("tpr-hidden");
    }

    function loadCfgData ()
    {

        if (typeof _tprcfg === "undefined") {
            return;
        }

        if (!_tprcfg.data) {
            return;
        }

        if (_tprcfg.data.savedDesigns) {
            appendUserSavedDesignSection();
            populateUserSavedDesignsList();
            showSaveDesignButton();
        }
    }


    /**
     * Makes the dashboard controls usable
     */
    function activate (callback)
    {
        $controls.removeClass("tpr-invisible");
        assignPlaceholderToLazyImages();
        enableCustomScrollbars();
        CMF.viewport.recalculateOffset();   // values computer up to here, don't reflect the reality, on mobile devices
        CMF.viewport.hideLoader();

        if (window.location.hostname === 'topperoo.com' || window.location.hostname === 'www.topperoo.com') {
            $('.cmf-octrlw').addClass('hidden');
        }

        if ( preMadeDesignsAccessRestricted() ) {
            $("#tpr-pre-made-designs-section").remove();
        }

        if (typeof callback === 'function') {
            callback();
        }

    }


    function disableWindowScrolling ()
    {
        $(window).on('touchmove', function(event) {
            event.preventDefault();
        });
    }


    function enableWindowScrolling ()
    {
        $(window).off('touchmove');
    }

    function getTemplateEditorData ()
    {
        let unit = $tplEditor.find('input[name="tpl-measurement-unit"]:checked').val();
        let topperShape = $tplEditor.find('input[name="template.topper.shape"]:checked').val();
        let topperWidth, topperHeight;
        let mCols = $tplEditor.find('input[name="template.matrix.columns"]').val();
        let mRows = $tplEditor.find('input[name="template.matrix.rows"]').val();

        let name = $tplEditor.find('input[name="template.name"]').val();
        let description = $tplEditor.find('input[name="template.description"]').val();

        let matrix = [];
        let factor = 1;

        if (unit === 'cm') {
            factor = 0.393701;
        }

        if (topperShape === 'round') {
            topperWidth = topperHeight = $('input[name="template.topper.width"]').eq(0).val() * factor;
        } else if (topperShape === 'rectangular') {
            topperWidth = $('input[name="template.topper.width"]').eq(1).val() * factor;
            topperHeight = $('input[name="template.topper.height"]').val() * factor;
        }

        for (let i = 0; i < mRows; i++) {
            matrix[i] = [];
            for (let j = 0; j< mCols; j++) {
                matrix[i][j] = 1;
            }
        }

        return {
            'Name': $.trim(name),
            'Description': $.trim(description),
            'Height': parseFloat(($('input[name="template.height"]').val() * factor).toFixed(3)),
            'Width': parseFloat(($('input[name="template.width"]').val() * factor).toFixed(3)),
            'Margins': {
                'Top': parseFloat(($('input[name="template.margins.top"]').val() * factor).toFixed(3)),
                'Left': parseFloat(($('input[name="template.margins.left"]').val() * factor).toFixed(3)),
                'Vertical': parseFloat(($('input[name="template.margins.vertical"]').val() * factor).toFixed(3)),
                'Horizontal': parseFloat(($('input[name="template.margins.horizontal"]').val() * factor).toFixed(3))
            },
            'Topper': {
                'Shape': topperShape,
                    'Height': parseFloat(topperHeight.toFixed(3)),
                    'Width': parseFloat(topperWidth.toFixed(3))
            },
            'Matrix': matrix
        };
    }

    /**
     * Swaps the fields containing dimension inputs (width/height/diameter)
     * depending on the selected topper shape, within the Template Editor.
     */
    function swapTplEditorTopperFields ()
    {
        var $input = $(this);
        var shape = $input.val();
        var $fields = $tplEditor.find('.tpl-shape-dependent-field');
        var width;

        if ($input.val() === 'round') {
            width = $fields.filter('[data-shape="rectangular"]').find('[name="template.topper.width"]').val();
            $fields.filter('[data-shape="round"]').find('[name="template.topper.width"]').val(width);
        } else {
            width = $fields.filter('[data-shape="round"]').find('[name="template.topper.width"]').val();
            $fields.filter('[data-shape="rectangular"]').find('[name="template.topper.width"]').val(width);
        }

        $fields.hide().filter('[data-shape="' + shape + '"]').show();
        $input.trigger('template.draw');
    }

    /**
     * Determine the multiplication factor for all dimensions,
     * when converting when from inch to centimeter, or vice versa.
     * @returns {number}
     */
    function computeUnitConversionFactor ()
    {
        var unit = $('input[name="tpl-measurement-unit"]:checked').val();

        switch (unit) {
            case 'in':
                return 0.393701;    // 1 cm = 0.393701"
            case 'cm':
                return 2.54;      // 1" = 2.54 cm
        }
    }

    /**
     * Modify dimensions related to the template in the editor,
     * based on the selected measurement unit.
     */
    function changeTplEditorMeasurementUnit ()
    {
        let factor = computeUnitConversionFactor();
        let unit = $('input[name="tpl-measurement-unit"]:checked').val();

        $tplEditor.find('.tpl-dimension').each(function() {
            const $input = $(this);
            const value = parseFloat($input.attr('data-value')) * factor;
            $input.val(value).attr('data-value', value).trigger('measurement_unit_changed');
        });
        $tplEditor.find('[data-unit]').attr('data-unit', unit);
        $tplEditor.trigger('template.draw');
    }

    /**
     * Limit the maximum value
     */
    function limitTplEditorDimensionValue ($input, min, max)
    {
        var value = parseFloat($input.val());

        if (value > max) {
            value = max;
            $input.val(value);
        } else if (value < min) {
            value = min;
            $input.val(value);
        }

        var str_value = value.toString();
        var parts = str_value.split('.');

        if (parts[1] && parts[1].length > 2) {
            str_value = str_value.substring(0, str_value.indexOf('.') + 3);
            $input.val(str_value);
        }

        return str_value;
    }

    function drawTemplatePreview ()
    {
        let data = getTemplateEditorData();
        let template = new CMF.template(data);

        CMF.editor.setTemplate(template);
        template.drawEditorPreview();
    }

    function appendUserTemplate (product)
    {
        console.log("appendUserTemplate: ", product);
        const $wrapper = $('#tpr-custom-templates');
        const itemMarkupTpl = $('#tpr-templates-list-item').html();
        const rowMarkupTpl = $('#tpr-templates-list-row').html();
        let template = new CMF.template(product['Template'], product['ID']);
        let itemMarkup = Mustache.render(itemMarkupTpl, {
            template_json: JSON.stringify(product['Template']),
            name: product['Name'],
            id: product['ID'],
            oldid: product['OldID'],
            description: product['Description']
        });
        let customTemplatesCount = $wrapper.find('.product').length;

        if (customTemplatesCount % 3 === 0) {
            $wrapper.append(Mustache.render(rowMarkupTpl, {}));
        }

        $wrapper.find('.tpr-products-row').last().append(itemMarkup);
        template.drawThumbnail('tpr-product-thumb-' + product['ID']);
        $wrapper.show();
        CMF.products.buildCache();
        CMF.products.select(product['ID']);
    }

    function adjustRangeInputValueIndicator ()
    {
        let $input = $(this);
        let $indicator = $input.siblings(".tpr-value-indicator");
        let value = $input.val();
        let min = parseInt($input.attr("min"));
        let max = parseInt($input.attr("max"));
        let range = max - min;
        let left = (parseInt(value) - min ) / range * 100;

        $indicator.html(value).css("left", left + "%");
    }

    function attachEventHandlers (callback)
    {
        $doc.on("keydown", function(event) {
            CMF.config.shiftKey = event.shiftKey;
        });

        $doc.on("keyup", function(event) {
            CMF.config.shiftKey = event.shiftKey;
        });

        $topperoo.on('click', '.tabs li', function(){
            var id = $(this).attr('id') || '';
            var editorPreviewContainer = document.getElementById('tpr-template-editor-preview');
            var $selected;
            var template;
            var height;

            if (id != 'tpr-template-editor-tab') {
                if (editorPreviewContainer) {
                    editorPreviewContainer.style.display = 'none';
                }
                $selected = CMF.products.getSelected(true);
                template = new CMF.template($selected.data('template'), $selected.data('id'));

                if ($('#isRepetitiveSelector').prop('checked')) {
                    height = template._getTopperHeightOnScreen();
                } else {

                    height = template._getSheetHeightOnScreen();
                }

                $('.viewport').css('height', height);
            }
        });

        $topperoo.on('click', '#tpr-template-editor-tab', function(){
            $tplEditor.trigger('template.draw');
        });

        $doc.on("input", "input[type='range']", adjustRangeInputValueIndicator);

        /**
         * Because the pre-made designs wrapper is hidden when the user loads the application,
         * the lazy loading plugin won't run on the images within it until the user scrolls.
         * Thus, the wrapper needs a little nudge when the wrapper is revealed, just enough
         * for the loading of the first images to trigger.
         */
        $doc.one("click", "#tpr-saved-designs-tab", function(){
            $(".tpr-saved-designs").scrollTop(1).scrollTop(0);
        });

        $doc.on("mousedown touchstart", ".grip", function(event){
            var id;
            var object;
            var ev;

            //disableWindowScrolling();

            // Don't trigger selection when clicking on object controls (rotate, resize etc.)
            if (event.target != this) {
                return;
            }

            if (event.type === 'mousedown') {
                ev = event;
            } else {    // type === 'touchstart'
                ev = event.originalEvent.targetTouches[0];     // only the first finger counts
            }

            id = $(this).attr("data-objectid");
            object = CMF.design.getObjectById(id);
            object.select().dragStart(ev.pageX, ev.pageY);
        });

        /**
         * Trigger text object editing when double clicking an object's grip
         */
        $doc.on("dblclick", ".grip", function(event){
            var id = $(this).attr("data-objectid");
            var object = CMF.design.getObjectById(id);

            if (object.type !== "text") {
                return;
            }

            $("#listItem-"+id).find(".edit a").trigger("click");
        });

        $doc.on("click", ".grip .ctrl.edit", function(){
            var id = $(this).parent().attr("data-objectid");
            $("#listItem-"+id).find(".edit a").trigger("click");
        });

        $doc.on("mousedown touchstart", ".ctrl.rotate", function(event){
            var id = $(this).parent().attr("data-objectid");
            var object = CMF.design.getObjectById(id);
            var ev;

            //disableWindowScrolling();

            if (event.type === 'mousedown') {
                ev = event;
            } else {    // type === 'touchstart'
                ev = event.originalEvent.targetTouches[0];     // only the first finger counts
            }

            object.rotateStart(ev.pageX, ev.pageY);
        });

        $doc.on("mousedown touchstart", ".ctrl.resize", function(event){
            var ctrl = $(this);
            var id = ctrl.parent().data("objectid");
            var object = CMF.design.getObjectById(id);
            var sDir = ctrl.data("scale-direction");

            //disableWindowScrolling();

            if (event.type != "mousedown") {    // type === 'touchstart'
                event = event.originalEvent.targetTouches[0];     // only the first finger counts
            }

            object.resizeStart(event.pageX, event.pageY, sDir);
        });

        $doc.on("click", ".ctrl.copy", function(event){
            var id = $(this).closest("li").attr("data-objectid");
            CMF.design.clearSelection();
            CMF.design.duplicateObject(id);
        });

        $doc.on("click", ".ctrl.crop", function(event){
            var ctrl = $(this);
            var id = ctrl.closest(".grip").data("objectid");

            if (typeof id === "undefined") {
                id = ctrl.closest(".listItem").data("objectid");
            }

            CMF.lightbox.crop(id);
        });

        $doc.on("click", ".ctrl.depth", function(event){
            var ctrl = $(this);
            var id = ctrl.closest("li").attr("data-objectid");
            CMF.design.changeObjectDepth(id, ctrl.data("direction"));
        });

        $doc.on("click", ".ctrl.delete:not(.premadeDesignCtrl)", function(){
            var ctrl = $(this);
            var id = ctrl.closest(".grip").data("objectid");

            if (typeof id === "undefined") {
                id = ctrl.closest(".listItem").data("objectid");
            }

            CMF.design.removeObject(id);
        });

        $productsSection.on("click", ".tpr-template-thumb", CMF.products.select);
        $productsSection.on("click", ".tpr-remove-btn", function () {
            var message = "Are you sure you want to remove this template?";
            var $button = $(this);
            var $product = $button.closest('.product');

            if (window.confirm(message)) {
                $product.remove();
                CMF.config.executeCustomCallback('topperoo.template.remove', $product.data('id'));
            }
        });

        $doc.on("click", ".listItem", function(event){
            var $target = $(event.target);
            var object;
            var id;

            if (!$target.hasClass('listItem')) {
                return; // don't select the list item if the click target was a DOM child
            }

            id = $(this).attr("data-objectid");
            object = CMF.design.getObjectById(id);
            object.select();
        });

        /**
         * Set up horizontal navigation between tabbed sections
         */
        $doc.on("click", ".cmf-thnb:not(.cmf-submitOrderBtn)", function(){
            if ($(this).hasClass('cmf-next')) {
                $('.tabs').find('a').eq(1).trigger('click');
            } else {
                $('.tabs').find('a').eq(0).trigger('click');
            }
        });


        /**
         * Highlight an object's grip when the its corresponding details list item is hovered
         */
        $doc.on("mouseenter mouseleave", ".listItem", function(event){
            var id = $(this).attr("data-objectid");
            $("#grip-"+id).toggleClass("hover");
        });

        /**
         * Clear the design object selection when the viewport is clicked outside of any grip element (i.e. "empty space")
         */
        $doc.on("mouseup", function(event)
        {
            //CMF.design.clearSelection();
        });

        $doc.on("click", ".designControls button", function(event){
            var button = $(this);
            var action = button.attr("data-action");

            switch (action)
            {
                case "reset":
                    if (window.confirm("Are you sure you want to reset your design?")) {
                        CMF.design.reset(CMF.viewport.hideLoader);
                    }
                    break;

                case "save":
                    CMF.viewport.changeLoaderText("Saving design...");
                    CMF.viewport.showLoader(function(){
                        CMF.design.save(function(err, data){
                            CMF.viewport.changeLoaderText("Design saved");
                            CMF.viewport.hideLoader(3000);

                            CMF.design.setId(data.id);

                            if (!err) {
                                CMF.config.executeCustomCallback('topperoo.design.saved', data);
                            }
                        }, true);
                    });
                    break;

                case "preview":
                    CMF.viewport.changeLoaderText("Loading design preview");
                    CMF.viewport.showLoader(function(){
                        CMF.design.save(function(){
                            var url = CMF.config.buildURL("/image/preview/" + CMF.design.getId() + "?_=" + Date.now());
                            CMF.viewport.hideLoader();
                            CMF.lightbox.preview(url, '');
                        });
                    });
                    break;
            }
        });

        $('#isRepetitiveSelector').on('change', function()
        {
            var product = CMF.products.getSelected();
            var $product = $('#topperoo .product[data-id="' + product.id + '"]');
            var template = new CMF.template($product.data('template'), product.id);
            var topperHeight = template._getTopperHeightOnScreen();
            var sheetHeight = template._getSheetHeightOnScreen();
            var obj = CMF.design.getSelectedObject();

            CMF.design.markAsRepetitive(this.checked);

            if (this.checked) {
                CMF.viewport.switchToSingleTopper(template, topperHeight);
                CMF.viewport.setPixelSize(false);   // set pixel size to that of sample topper
            } else {
                CMF.viewport.changeSheet(template, sheetHeight);
                CMF.viewport.setPixelSize(true);   // set pixel size to that of sheet
            }

            if (obj !== null) {
                obj.setSizeOnPaper();
            }
        });

        $('#imageUploadForm [type="file"]').on('change', function () {
            var $input = $(this);
            var $button = $input.siblings('[type="reset"]');

            if ($input.val()) {
                $button.show();
            } else {
                $button.hide();
            }
        });

        $('#imageUploadForm [type="reset"]').on('click', function () {
            $(this).hide();
            $("#addAnImageDialog").find("[type='submit']").prop("disabled", true);
        });

        $tplEditor.find('input[type="number"]').on('input', function () {
            var $input = $(this);

            var value = limitTplEditorDimensionValue($input, -99.99, 99.99);

            $input.attr('data-value', value);
            $input.trigger('template.draw');
        });

        $tplEditor.find('input[type="number"]').on('measurement_unit_changed', function () {
            const $input = $(this);
            let minimum = -99.99;
            let maximum = 99.99;
            let current = parseFloat($input.attr('data-value'));

            limitTplEditorDimensionValue($input, minimum, maximum);

            if (current > maximum) {
                $input.attr('data-value', maximum);
            } else if (current < minimum) {
                $input.attr('data-value', minimum);
            }

            $input.trigger('template.draw');
        });

        $tplEditor.find('input[name="tpl-measurement-unit"]').on('change', changeTplEditorMeasurementUnit);
        $tplEditor.find('input[name="template.topper.shape"]').on('change', swapTplEditorTopperFields);
        $tplEditor.on('template.draw', drawTemplatePreview);
        $tplEditor.on('click', '#tpr-save-template-btn', function(){
            const $button = $(this);

            drawTemplatePreview();  // this helps update the name & description fields

            if (CMF.config.getConfigOption('saveCustomTemplates') === false) {
                $button.prop('disabled', true);
                CMF.config.executeCustomCallback('topperoo.template.savingDenied');
                return;
            }

            CMF.viewport.showLoader('Saving your layout');
            CMF.editor.saveTemplate(function(data) {
                appendUserTemplate(data);
                CMF.config.executeCustomCallback('topperoo.template.saved', data);
            });
        });
        $tplEditor.on("click", ".tpr-sheet-size-preset", function () {
            const $preset = $(this);
            const unit = $tplEditor.find('input[name="tpl-measurement-unit"]:checked').val();
            let width = $preset.attr("data-width");
            let height = $preset.attr("data-height");

            if ($preset.hasClass("active")) {
                return;
            }

            // De-select all other size preset icons
            $tplEditor
                .find(".tpr-sheet-size-preset")
                .not(this)
                .removeClass("active");
            $preset.addClass("active");

            if (unit === "cm") {
                width = (width * 2.54);
                height = (height * 2.54);
            }

            $("#tpr-template-height-inp").val(height).trigger('input');
            $("#tpr-template-width-inp").val(width).trigger('input');

            // $preset.trigger('template.draw');
        });
        $tplEditor.on("click", ".tpr-create-new-size-btn", function () {
            $tplEditor.find(".tpr-sheet-size-preset").removeClass("active");    // de-select all size presets
            $(".tpr-sheet-size-presets-section").hide();
            $(".tpr-custom-sheet-size-section").show();
        });
        $tplEditor.on("click", ".tpr-use-size-preset-btn", function () {
            $(".tpr-custom-sheet-size-section").hide();
            $(".tpr-sheet-size-presets-section").show();
        });


        /**
         * Load a pre-made design when its corresponding list item is clicked on
         */
        $premadeSection.on("click", ".tpr-saved-designs__item", function(event) {
            var $li = $(this);
            var id = $li.attr("data-id");   // pre-made design ID
            var $target = $(event.target);

            event.stopPropagation();

            if ($target.hasClass("premadeDesignCtrl")) {
                return;
            }

            if ($target.hasClass("tpr-active-element")) {
                return;
            }

            if (!window.confirm("Loading a pre-made design will erase your current design.\nAre you sure want to proceed?")) {
                return;
            }

            if ($li.hasClass("tpr-user-design")) {
                loadUserSavedDesign(id);
            } else {
                loadPreMadeDesign(id);
            }
        });

        $premadeSection.on("click", ".tpr-user-design-remove", function() {
            var id = $(this).closest(".tpr-user-design").attr("data-id");

            if (window.confirm("Are you sure you want to remove this design")) {
                Topperoo.api.removeUserDesign(id);
            }
        });

        /**
         * Emits a custom event when a user's design name or description changes
         */
        function triggerUserDesignPropertyChange ()
        {
            var $element = $(this);

            CMF.config.executeCustomCallback('topperoo.design.propertyChange', {
                id: $element.closest(".tpr-user-design").attr("data-id"),
                key: $element.attr("data-key"),
                value: $.trim($element.text())
            });
        }

        /**
         * Emits a custom event when a user's template name or description changes
         */
        function triggerUserTemplatePropertyChange ()
        {
            var $element = $(this);

            CMF.config.executeCustomCallback('topperoo.template.propertyChange', {
                id: $element.closest(".product").attr("data-id"),
                key: $element.attr("data-key"),
                value: $.trim($element.text())
            });
        }

        $productsSection.on("blur", "[contenteditable='true']", triggerUserTemplatePropertyChange);
        $premadeSection.on("blur", "[contenteditable='true']", triggerUserDesignPropertyChange);
        $premadeSection.on("keydown", "[contenteditable='true']", function (event)
        {
            if (event.keyCode != 13) {  // Enter (i.e. "Return")
                return;
            }

            $(this).trigger("blur");
            event.preventDefault();
        });


        $premadeSection.on("click", ".premadeDesignCtrl", function(event)
        {
            var $this = $(this);
            var $listItem = $this.closest(".tpr-saved-designs__item");
            var designID = $listItem.attr("data-id");

            switch ($this.attr("data-action")) {
                case "changeState":
                    CMF.utilsa.swapPremadeDesignState(designID, function(){
                        var text = $this.html();

                        if ($this.html() === 'private') {
                            $this.html('public');
                        } else {
                            $this.html('private');
                        }

                        $this.toggleClass('private');
                    });
                    break;
                case "delete":
                    if (window.confirm("Are you sure you want to delete this design")) {
                        CMF.utilsa.deletePremadeDesign(designID, function(){
                            $listItem.hide(200);
                        });
                    }
                    break;
                default:
                    break;
            }

            event.stopPropagation();
        });

        $topperoo.on("keyup", function (event)
        {
            //if (event.keyCode == 46) {  // Delete key
            //    if (CMF.design.areAnyItemsSelected()) {
            //        console.log("Item selected, not deleted.");
            //        CMF.design.removeSelected();
            //    }
            //}
        });

        /** Workaround with iOS Safari **/
        $(".objectTypeSelectors a").on("mousedown touchstart", function() {
            window.tprDocumentActiveElement = $(this)[0];
        });

        /**
         * Set dashboard buttons 'Add images', 'Add a video', 'Add text' to open their corresponding forms when clicked
         */
        $(".objectTypeSelectors a").magnificPopup({
            type: "inline",
            overflowY: "scroll",
            closeOnBgClick: true,      // prevents closing the lightbox when the background is clicked
            callbacks: {
                beforeOpen: function(){
                    CMF.lightbox.initTextAddDialog();
                },

                open: function () {
                    var buttonType = window.tprDocumentActiveElement.getAttribute('data-type');

                    if (buttonType === 'clipart') {
                        $('.galleryContainer').scrollTop(1).scrollTop(0);
                    }
                }
            }
        });

        /**
         * Set the "edit" icons in the objects details list to trigger the "Edit Text" dialog
         */
        $(".objectsDetailsList").magnificPopup({
            delegate: ".ctrl.edit a",
            type: "inline",
            overflowY: "scroll",
            closeOnBgClick: true,  // prevents closing the lightbox when the background is clicked
            callbacks: {
                beforeOpen: function(){
                    var $editIcon = $($.magnificPopup.instance.st.el);   // the icon that triggered the "edit" action
                    var id = $editIcon.closest(".listItem").attr("data-objectid");
                    CMF.lightbox.initTextEditDialog(id);
                }
            }
        });

        $(window).on("mousedown touchstart", function(event) {
            var $target = $(event.target);
            if (
                $target.closest('.grip').length === 0 &&       // Not inside the object bounding box (viewport)
                $target.closest('.listItem').length === 0 &&   // Not inside object list
                $target.closest('.mfp-wrap').length === 0      // Not inside crop tool popup
            ) {
                CMF.design.clearSelection();
            }
        });

        $('#tpr-mobile-overlay').on('click', function() {
            $controls.find('.activeTab').trigger('click');
        });
    }

    function enableEventHandlersForMobile() {
        window.tocca({swipeThreshold: 50, tapPrecision: 80});

        // Handle swipe down
        $('.tpr-mobile-panel-grip').on('swipedown', function() {
            var $parent = $(this).closest('.tpr-ui-panel');
            var id = $parent.attr('id');

            $('.tpr-controls .ui-tabs-nav').find('li[aria-controls="' + id +'"]').removeClass('activeTab');
            $parent.addClass('slide_down');
            $('#tpr-mobile-overlay').addClass('tpr-hidden');
        });

        // Remove css applied by swipe down
        $('.tpr-controls').on('tabsbeforeactivate', function(event, ui) {
            $('#tpr-mobile-overlay').removeClass('tpr-hidden');
            ui.newPanel.removeClass('slide_down');
            ui.newTab.addClass('activeTab');
            ui.newTab.data('just-active', true);
        });

        $('.tpr-controls .tabs > li').on('click', function() {
            var target = $(this).attr('aria-controls');
            var justActive = $(this).data('just-active');

            if ( ! justActive) {
                $(this).toggleClass('activeTab');
                $('#' + target).toggleClass('slide_down');
                $('#tpr-mobile-overlay').toggleClass('tpr-hidden');
            }

            $(this).data('just-active', null);
        });

        $('#topperoo').on('topperoo.design.object_added', function() {
            if (!_tprcfg.options.forceOpenTabOnInit || initialized) {
                $('.tpr-controls .tpr-ui-panel').addClass('slide_down');
                $('#tpr-mobile-overlay').addClass('tpr-hidden');
            }
        });
    }

    return {
        buildCache: buildCache,
        load: load,
        attachEventHandlers: attachEventHandlers,
        init: init,
        activate: activate,
        enableWindowScrolling: enableWindowScrolling,
        disableWindowScrolling: disableWindowScrolling,
        loadCfgData: loadCfgData,
        appendUserTemplate: appendUserTemplate,
        enableEventHandlersForMobile: enableEventHandlersForMobile
    };

})(jQuery);

var CMF = CMF || {};

CMF.design = (function($, undefined){

    var id;

    /**
     * The objects (image | text | qr) collection associated with the current design
     * @type {Array}
     */
    var objects = [];

    /**
     * Determines whether the design is for a sample topper from a sheet, or for the entire sheet
     * @type {Boolean}
     */
    var isRepetitive = false;

    /**
     * The value by which the z-index of an object's grip and viewport image are increased when the object is dragged
     * @type {Number}
     */
    var selectionDepthGain = 1000;

    /**
     * The product associated with the current design
     * @type {Object}
     */
    var product = {
        id: ''
    };

    /**
     * Object used to cache saved design data; useful when checking if the design has changed.
     * @type {Object}
     */
    var data = {};

    /**
     * A placeholder for autosave-related messages
     * @type {Object}
     */
    var $autosaveNotice;

    var autosaveTimerId;


    function buildCache() {
        $autosaveNotice = $(".tpr-autosave-notice");
    }


    function addObject(data) {
        var o;

        data.id = createNewObjectId();
        data.zIndex = getHighestZ() + 1;

        o = new CMF.Object(data);
        objects.push(o);

        o.addToUi();
        o.select();
    }

    /**
     * Append a text object to the viewport
     */
    function addTextObject(objectFormatting) {
        var url;
        var css = CMF.lightbox.getTextObjectFormatting();
        var text = CMF.lightbox.getTextObjectText();

        if (!text) {
            return;
        }

        CMF.lightbox.showLoader();
        url = CMF.utils.getTextObjectUrl(text, css);

        CMF.utils.preloadOneImage(url, function(err, data){
            var object = css;

            if (err) {
                CMF.lightbox.showError(err);
                return;
            }

            // Resize image depends on viewport size
            var ratio = CMF.viewport.width / CMF.viewport.baseWidth;
            if (ratio != 1) {
                data.size.width = data.size.width * ratio;
                data.size.height = data.size.height * ratio;
            }

            $.extend(object, {
                type : "text",
                url: url,
                pxWidth : data.size.width,
                pxHeight : data.size.height,
                text : text,
                color: object["color"],
                fontFamily: object["font-family"],
                fontSize: object["font-size"],
                fontWeight: object["font-weight"],
                fontStyle: object["font-style"],
                textDecoration: object["text-decoration"],
                textCurvature: object["text-curvature"],
                textAlign: object["text-align"]
            });

            if (typeof objectFormatting !== 'undefined') {
                $.extend(object, objectFormatting);

                if (typeof objectFormatting.center !== 'undefined') {
                    object.left = objectFormatting.center.left - (data.size.width / 2);
                    object.top = objectFormatting.center.top - (data.size.height / 2);
                }
            }

            CMF.design.addObject(object);
            CMF.lightbox.hideLoader();
            $.magnificPopup.close();
        });
    }

    function areAnyItemsSelected ()
    {
        for (var i = 0; i < objects.length; i++) {
            if (objects[i].isSelected()) {
                return true;
            }
        }

        return false;
    }

    function getSelectedObject ()
    {
        for (var i=0; i<objects.length; i++) {
            if (objects[i].isSelected()) {
                return objects[i];
            }
        }

        return null;
    }


    /**
     * Appends a QR code image to the design
     */
    function addQrObject() {

        var size = 546; // size of the QR code image, expressed in pixels
        var url;
        var text = CMF.lightbox.getQrObjectText();

        if (!text) {
            return;
        }

        CMF.lightbox.showLoader();
        url = CMF.utils.getQrCodeUrl(text, size);

        CMF.utils.preloadImages(url, function(err){

            if (err) {
                CMF.lightbox.showError(err);
                return;
            }

            var data = {
                type: "qr",
                text: text,
                url: url,
                pxWidth: size,
                pxHeight: size,
                inWidth: size/300,
                inHeight: size/300
            };

            CMF.design.addObject(data);
            CMF.lightbox.hideLoader();
            $.magnificPopup.close();
        });

    }


    /**
     * Determines the ID for a new object, as equal to the highest ID in the existing objects list, plus 1.
     */
    function createNewObjectId() {
        var id = -1;

        for (var i=0; i<objects.length; i++) {
            if (id < objects[i].id) {
                id = objects[i].id;
            }
        }

        return id + 1;
    }


    /**
     * Determines the highest z-index among the objects in the existing collection
     */
    function getHighestZ() {
        var z = 0;

        for (var i=0; i<objects.length; i++) {
            if (z < objects[i].zIndex) {
                z = objects[i].zIndex;
            }
        }

        return z;
    }


    /**
     * Return from the objects collection, the item with the given ID
     */
    function getObjectById(id) {
        id = parseInt(id,10);

        for (var i=0; i<objects.length; i++) {
            if (objects[i].id == id) {
                return objects[i];
            }
        }

        return null;
    }


    /**
     * Return from the objects collection, the item with the specified z-index
     */
    function getObjectByDepth(depth) {

        for (var i=0; i<objects.length; i++) {
            if (objects[i].zIndex === depth) {
                return objects[i];
            }
        }

        return null;
    }


    /**
     * Creates an exact copy of the object with the given ID and adds it to the existing collection
     * @param {Number} id The ID of the object to duplicate
     */
    function duplicateObject(id) {
        id = parseInt(id, 10);

        var o = getObjectById(id);
        var data = o.getData(10);

        addObject(data);
    }


    /**
     * Removes the object with the given ID from the collection and from the UI
     */
    function removeObject(id, callback) {
        id = parseInt(id, 10);

        var o = getObjectById(id);
        var z = o.zIndex;
        var index = objects.indexOf(o);

        if (!callback) {
            o.remove();     // remove from UI
        } else {
            o.remove(callback);     // remove from UI
        }

        objects.splice(index, 1);  // remove corresponding item from collection

        // Push all objects that were above the removed object down by one level, so as not to leave its depth slot unoccupied
        pushObjects(z);
    }


    /**
     * Removes the currently selected object within the UI
     */
    function removeSelected() {
        var id = $(".listItem.selected").eq(0).data("objectid");
        if (typeof id !== "undefined") {
            removeObject(id);
        }
    }


    /**
     * Deselects the selected objects in the design
     */
    function clearSelection() {
        objects.forEach(function(o){
            o.deselect();
        });
    }




    /**
     * Pops all objects that are bellow the reference depth, up by one level
     * @param  {Number} referenceDepth
     * @return {Number} The z-index of the last objects to be popped (always 1)
     */
    function popObjects(referenceDepth) {
        for (var i=0; i<objects.length; i++) {
            if (objects[i].zIndex < referenceDepth) {
                objects[i].moveToDepth(objects[i].zIndex+1);
            }
        }

        return 1;
    };


    /**
     * Pushes all objects that are above the reference depth, down by one level
     * @param  {number} referenceDepth
     * @return {number} The z-index of the last object to pe pushed
     */
    function pushObjects(referenceDepth) {
        var z = referenceDepth;

        for (var i=0; i<objects.length; i++) {
            if (objects[i].zIndex > referenceDepth) {
                z = objects[i].zIndex;
                objects[i].moveToDepth(z-1);
            }
        }

        return z;
    };


    /**
     * Move the object with the specified id on the Z axis, up one level,
     * down one level, on top of or bellow all others in the collection
     */
    function changeObjectDepth(id, direction) {
        var o = getObjectById(id);
        var z;

        switch (direction) {
            case "top":
                // Move all objects above the selected one down one level, to free the top position for it
                z = pushObjects(o.zIndex);
                o.moveToDepth(z);
                break;
            case "bottom":
                // Move all objects bellow the selected one up one level, to free the bottom position for it
                z = popObjects(o.zIndex);
                o.moveToDepth(1);
                break;
            case "up":
                // Swap the selected object with the one on top of it, if any
                z = o.zIndex + 1;
                swapObject = getObjectByDepth(z);
                if (swapObject) {
                    o.moveToDepth(z);
                    swapObject.moveToDepth(z-1);
                }
                break;
            case "down":
                // Swap the selected object with the one bellow it, if any
                z = o.zIndex - 1;
                swapObject = getObjectByDepth(z);
                if (swapObject) {
                    o.moveToDepth(z);
                    swapObject.moveToDepth(z+1);
                }
                break;
            default:
                break;
        }
    }


    /**
     * Removes all objects from the collection
     */
    function reset(callback) {
        while(objects.length > 0) {
            objects[0].remove();    // remove from UI
            objects.splice(0,1);    // remove corresponding item from collection
        }

        if (typeof callback === "function") {
            callback();
        }
    }


    function setProduct(id) {
        product.id = id;
    }


    /**
     * Sets the state of the current design as repetitive(true)/non-repetitive(false)
     * @param {boolean} bool         True means that the design is repetitive, false that it isn't
     * @param {boolean} tickSelector Determines whether to trigger 'checked' state of the input selector, or not
     */
    function markAsRepetitive (bool, tickSelector) {
        isRepetitive = bool;

        if (tickSelector) {
            var product = CMF.products.getSelected();
            var $product = $('#topperoo .product[data-id="' + product.id + '"]');
            var template = new CMF.template($product.data('template'), product.id);
            var topperHeight = template._getTopperHeightOnScreen();

            CMF.viewport.switchToSingleTopper(template, topperHeight);
            CMF.viewport.setPixelSize(false);
            $('#isRepetitiveSelector').prop('checked', true);
        }
    }


    /**
     * Aggregates all the data about the current design, that needs to be sent to the server for storage
     * @return {{}}
     */
    function getData() {
        var data = {
            id: getId(),
            objects: [],
            repetitive: isRepetitive,
            product: {},
            unitPrice: 0,
            qty: CMF.order.qty,
            currency: CMF.config.get('currency', 'name'),
            viewportWidth: 0,
        };

        // Get data of all design objects
        for (var i=0; i<objects.length; i++) {
            data.objects.push(objects[i].getData());
        }

        data.product = {
            id: product.id
        };

        data.unitPrice = CMF.products.getSelected()['price'];
        data.qty = CMF.order.get("qty");
        data.currency = CMF.config.get('currency', 'name');
        data.viewportWidth = CMF.viewport.width;

        return data;
    }


    /**
     * Submits the design data to the server, where it is saved/updated within the database
     * @param  {Function} callback  Callback function to execute when receiving the response
     * @param  {Boolean}  duplicate Indicates whether to copy the current design within the DB (used when submitting an order)
     */
    function save(callback, replicate) {

        var requestData;

        data = getData();   // uses the module property 'data', not a local variable
        requestData = data;

        if (!CMF.admin) {
            requestData = $.extend({}, data, {
                'type': 'custom',
                'protocol': window.location.protocol,
                'host': window.location.hostname,
                'replicate': (replicate ? true : false)
            });
        } else {
            requestData = $.extend({}, data, {
                'type': 'premade',
                'protocol': window.location.protocol,
                'host': window.location.hostname,
                'name': $('.cmf-pddi input').val(),
                'description': $('.cmf-pddi textarea').val()
            });
        }

        $.ajax({
            url: CMF.config.url('save-design'),
            type: "POST",
            crossDomain: true,
            data: requestData,
            dataType: 'json',
            error: function(jqXHR, textStatus, errorThrown) {
                callback(new Error(textStatus+": "+errorThrown), null);
            },
            success: function(response) {
                if (response.status === "error") {
                    callback(new Error(response.message), response.design);
                    return;
                }

                callback(null, response.design);
            }
        });
    }


    /**
     * Determines whether the design has changed in any way since the last time is was saved.
     * @return {Boolean}
     */
    function hasChanged() {
        if (!data) {    // when opening the application, the design data object is empty
            return false;
        }

        if (JSON.stringify(data) === JSON.stringify(getData())) {
            return false;
        }

        $('#topperoo').trigger('topperoo.design.changed', getData());

        return true;
    }

    /**
     *
     * @param state Can be either 'saving', 'saved' or 'error'
     */
    function showAutosaveNotice (state)
    {
        $autosaveNotice.attr('data-state', state);
        $autosaveNotice.fadeIn(250);
    }

    function hideAutosaveNotice ()
    {
        $autosaveNotice.fadeOut(250);
    }


    /**
     * Initiates the timer that periodically triggers the design autosave.
     */
    function initAutosave() {
        var delay = 8;  // expressed in seconds

        autosaveTimerId = window.setInterval(function(){
            if (hasChanged()) {     // only save if there are any changes since the last autosave
                showAutosaveNotice('saving');
                save(function(err, data){
                    if (err) {
                        showAutosaveNotice('error');
                        return;
                    }

                    if (!getId()) {
                        setId(data.id);
                    }

                    showAutosaveNotice('success');
                    window.setTimeout(function(){
                        hideAutosaveNotice();
                    }, 2000);
                });
            }
        }, delay*1000);
    }


    function deactivateAutosave() {
        window.clearInterval(autosaveTimerId);
    }


    function load(type, id, callback, beforeLoad) {

        var data = {
            type: type,
            id: id
        };
        var url = CMF.config.url('load-design') + type + "/" + id;

        if (typeof beforeLoad === "function") {
            beforeLoad();
        }

        CMF.design.reset(function(){
            $.ajax({
                url: url,
                method: "GET",
                dataType: "jsonp",
                crossDomain: true,
                error: function(jqXHR, textStatus, errorThrown) {
                    callback(new Error(textStatus + " :: " + errorThrown));
                },
                success: function(response) {

                    var preloadList = [];

                    if (response.status === "error") {
                        callback(new Error(response.message));
                        return;
                    }

                    // Set the design product.
                    // When the selection fails, it means that the locally saved design is based
                    // on a product that does not exist (anymore), in which case it has to be erased.
                    if (!CMF.products.select(response.data.product.id)) {
                        callback(new Error('Product from loaded design does not exist. Starting over with a blank workspace.'));
                        return;
                    }

                    // Switch the sheet image to that of the sample topper, if the design is repetitive
                    if (response.data.repetitive === true) {
                        CMF.design.markAsRepetitive(true, true);
                    }

                    if (response.data.objects.length === 0) {
                        callback(null);
                        return;
                    }

                    if (typeof response.data.id !== 'undefined') {
                        CMF.design.setId(response.data.id);
                    }

                    // Add the design objects
                    response.data.objects.forEach(function(object){
                        var url;

                        switch (object.type) {
                            case "image":
                                preloadList.push(object.url);
                                break;

                            case "text":
                                url = CMF.utils.getTextObjectUrl(object.text, {
                                    "color": object.color,
                                    "font-size": object.fontSize,
                                    "font-family": object.fontFamily,
                                    "font-weight": object.fontWeight,
                                    "font-style": object.fontStyle,
                                    "text-align": object.textAlign,
                                    "text-decoration": object.textDecoration,
                                    "text-curvature": object.textCurvature
                                });
                                preloadList.push(url);
                                object.url = url;

                                break;

                            case "qr":
                                url = CMF.utils.getQrCodeUrl(object.text);
                                preloadList.push(url);
                                object.url = url;
                                break;
                        }
                    });

                    CMF.utils.preloadImages(preloadList, function(err){
                        if (err) {
                            callback(err);
                            return;
                        }

                        // Calculate the dimensions with current viewport.
                        var ratio = CMF.viewport.width / CMF.viewport.baseWidth;
                        var ignoredProperties = ['zIndex', 'angle', 'fontSize', 'textCurvature', 'text'];

                        response.data.objects.forEach(function(data){
                            for (var key in data) {
                                if (data.hasOwnProperty(key) && ignoredProperties.indexOf(key) === -1 && $.isNumeric(data[key])) {
                                    data[key] = ratio * data[key];
                                }
                            }

                            addObject(data);
                        });

                        callback(null);
                    });
                }
            });
        });
    }

    /**
     * Attempts to load the saved design id from disk, if any exists.
     * @return {Number|null}
     */
    function getStoredDesignId() {
        var design;

        if (!window.localStorage) {
            return null;
        }

        design = localStorage.getItem("design");

        if (!design) {
            return null;
        }

        try {
            design = JSON.parse(design);
        } catch (e) {
            //console.log("Attempting to parse saved design data resulted in:\n\t"+e);
            return null;
        }

        if (!design.id) {
            return null;
        }

        return design.id;
    }


    //function storeDesignId(id) {
    //    var design = {
    //        id: id
    //    };
    //
    //    if (!window.localStorage) {
    //        return;
    //    }
    //
    //    localStorage.setItem("design", JSON.stringify(design));
    //}


    function getId() {
        if (id) {
            return id;
        }

        // [START]
        // The following fragment handles design ID's that were
        // set in a deprecated format using localStorage, then
        // saves them using the new structure and removes the
        // deprecated data from the browser.
        //id = getStoredDesignId();
        //if (id) {
        //    CMF.storage.setDesignId(id);
        //    localStorage.removeItem("design");
        //}
        // [END]

        id = CMF.storage.getDesignId();

        return id;
    }


    function setId(designId) {
        id = designId;
        //storeDesignId(designId);
        CMF.storage.setDesignId(designId);
    }


    /**
     * Determines if the current design has no associated objects
     */
    function isEmpty ()
    {
        if (!objects.length) {
            return true;
        }

        return false;
    }

    function getDesignItems ()
    {
        var designItems = [];

        objects.forEach(function(object) {
            var item = {
                type: object.type
            };
            var filenameIndexInURL;

            if (object.type === "image") {
                filenameIndexInURL = object.url.indexOf("cmf_");
                item.filename = object.url.substring(filenameIndexInURL);
            }

            designItems.push(item);
        });

        return designItems;
    }


    return {
        buildCache: buildCache,
        addObject: addObject,
        addTextObject: addTextObject,
        addQrObject: addQrObject,
        clearSelection: clearSelection,
        getObjectById: getObjectById,
        getObjectByDepth: getObjectByDepth,
        duplicateObject: duplicateObject,
        removeObject: removeObject,
        removeSelected: removeSelected,
        changeObjectDepth: changeObjectDepth,
        markAsRepetitive: markAsRepetitive,
        setProduct: setProduct,
        initAutosave: initAutosave,
        reset: reset,
        save: save,
        load: load,
        getId: getId,
        setId: setId,
        deactivateAutosave: deactivateAutosave,
        getSelectedObject: getSelectedObject,
        isEmpty: isEmpty,
        getDesignItems: getDesignItems,
        areAnyItemsSelected: areAnyItemsSelected
    };

})(jQuery);

var CMF = CMF || {};

CMF.lightbox = (function($, undefined) {

    var $doc = $(document);
    var $tpr;
    var $cropTarget;
    var $cropForm;
    var $designPreviewUrlInput;
    var $uploadForm;
    var $textObjectDialog;
    var $colorBtn;

    function buildCache() {
        $tpr = $("#topperoo, .tpr-dialog");
        $cropTarget = $(".cropTargetImage").eq(0);
        $cropForm = $("#imageCroppingForm");
        $textObjectDialog = $("#textObjectDialog");
        $designPreviewUrlInput = $(".tpr-designPreviewUrl");
        $uploadForm = $("#imageUploadForm");
        $colorBtn = $('.tpr-text-format-option .tpr-color-picker');
    }

    function attachEventHandlers()
    {
        $tpr.on("tpr.change", function() {
            let formatting = getTextObjectFormatting();
            setTextObjectPreview(formatting);
        });

        $doc.on("input", "#textObjectDialog textarea", function() {
            var text = $(this).val();
            setTextObjectPreview(null, text);
        });

        $doc.on("click", ".lightboxClose", function() {
            $.magnificPopup.close();
        });

        $doc.on("submit", "#imageUploadForm", handleFileUpload);
        $doc.on("submit", "#clipArtSelectionForm", addClipArtToDesign);
        $doc.on("click", "#imageCroppingForm [type='submit']", function(event){
            submitCroppedImage();
            event.preventDefault();
        });

        $doc.on("click", "#videoSelectionForm [type='submit']", function(event){
            CMF.design.addQrObject();
            event.preventDefault();
        });

        $doc.on("click", ".textObjectDialog [type='submit']", function(event){
            var id;
            var originalTextObject;
            var objectPosition;

            switch ($textObjectDialog.attr('data-role')) {
                case 'edit':
                    id = $(this).attr("data-objectid"); // ID of object being edited

                    originalTextObject = CMF.design.getObjectById(id);

                    var originalCenterCoordinates = getCenterCoordinate(
                        originalTextObject.width,
                        originalTextObject.height,
                        originalTextObject.left,
                        originalTextObject.top
                    );

                    objectPosition = {
                        angle: originalTextObject.angle,
                        center: originalCenterCoordinates,
                    };

                    CMF.design.removeObject(id, function () {
                        CMF.design.addTextObject(objectPosition);
                    });

                    break;
                case 'add':
                default:
                    CMF.design.addTextObject();
            }

            event.preventDefault();
        });

        /**
         * Toggle select/deselect on a gallery image when it is clicked
         */
        $doc.on("click", ".gallery img", toggleGalleryImageSelection);

        $doc.on("change", "#tpr-upl-copyright-ack", function () {
            var $button = $("#imageUploadForm").find("[type='submit']");

            if (this.checked) {
                $button.prop('disabled', false);
            } else {
                $button.prop('disabled', true);
            }
        });

        new ColorPicker({
            selector: '.tpr-text-format-option .tpr-color-picker',
            templateSelector: '#tpr-color-picker',
            marginTop: -20,
            marginLeft: -10,
            defaultColorPalette: [
                [
                    '#ff5c5c', '#ffbd4a', '#fff952', '#99e265', '#35b729', '#44d9e6',
                    '#2eb2ff', '#5271ff', '#b760e6', '#ff63b1'
                ],
                ['#000000', '#666666', '#a8a8a8', '#d9d9d9', '#ffffff']
            ],
            renderCallback: function (picker) {
                var $option = $colorBtn.parent();

                $colorBtn.attr('data-value', '#' + picker.Color.colors.HEX);
                $colorBtn.data('value', '#' + picker.Color.colors.HEX);
                $colorBtn.css('background-color', '#' + picker.Color.colors.HEX);

                $option.trigger('tpr.change', {
                    key: $option.data('key'),
                    value: $colorBtn.data('value')
                })
            }
        })

        initComponents();
    }

    function getTextFormattingDefaults ()
    {
        return {
            "color": "#000000",
            "font-family": "Pacifico",
            "font-size": "28px",
            "font-weight": "normal",
            "font-style": "normal",
            "text-decoration": "none",
            "text-align": "center",
            "text-curvature": "0"
        };
    }


    function initSelectComponents ()
    {
        $tpr.on("click", ".tpr-menu__head", function() {
            $(this).siblings(".tpr-menu__body").addClass("tpr-menu__body_visible");
        });

        $tpr.on("mouseleave", ".tpr-menu", function() {
            $(this).children(".tpr-menu__body").removeClass("tpr-menu__body_visible");
        });

        $tpr.on("click", ".tpr-menu__option", function() {
            var $option = $(this);
            var $menu = $option.closest(".tpr-menu");
            var $body = $menu.children(".tpr-menu__body");
            var $head = $menu.children(".tpr-menu__head");
            var oldLabel = $head.html();
            var newLabel = $option.html();

            $body.removeClass("tpr-menu__body_visible");

            if (oldLabel === newLabel) {
                return;
            }

            $head.html(newLabel);
            $option.addClass("tpr-selected").siblings().removeClass("tpr-selected");

            $menu.trigger("tpr.change", {
                key: $menu.data("key"),
                value: $option.data("value")
            });
        });
    }

    /**
     * Returns the default value for the specified CSS option
     * @param $option
     */
    function getDefaultTextOptionValue ($option)
    {
        switch ($option) {
            case "font-weight":
            case "font-style":
                return "normal";
            case "color":
                return "#000000";
            case "text-decoration":
            default:
                return "none";
        }
    }

    function initTextFormatComponents ()
    {
        $tpr.on("input", ".tpr-text-format-option", function () {
            let $option = $(this);
            let key = $option.data("key");
            let suffix = $option.data("suffix") || "";
            let value = $option.val() + suffix;

            $option.trigger("tpr.change", {
                key: key,
                value: value
            });
        });

        // $tpr.on("click", ".tpr-text-format-option__item:not(.tpr-menu__option)", function() {
        $tpr.on("click", ".tpr-text-format-option__item", function() {
            const $item = $(this);
            const $option = $item.parent();
            const key = $option.data("key");

            let value = $item.data("value");
            let wasSelected = $item.hasClass("tpr-selected");
            let triggerChange = false;

            $item.siblings().removeClass("tpr-selected");

            /**
             * type "1":  only one option can be selected at a time, but not 0
             * type "0+": one or none of the options can be selected
             */
            if ($option.data("type") == 1) {
                if (!wasSelected) {
                    $item.addClass("tpr-selected");
                    triggerChange = true;
                }
            } else {    // optionType == "0+"
                $item.toggleClass("tpr-selected");
                triggerChange = true;
                if (!$item.hasClass("tpr-selected")) {
                    value = getDefaultTextOptionValue(key);
                }
            }

            if (triggerChange) {
                $option.trigger("tpr.change", {
                    key: $option.data("key"),
                    value: value
                });
            }
        });
    }

    /**
     * Bind events on advance curvature related elements
     */
    function bindEventsOnAdvanceCurvature() {
        $tpr.on('click', '.show-advance-switcher', function () {
            useAdvanceCurvature();
        });
        $tpr.on('click', '.show-simple-switcher', function () {
            unUseAdvanceCurvature();
        });
        $('.advance-curvature-value', $tpr).on('change keyup mouseup', function () {
            var submitValue = $(this).val();
            var advanceCurvatureDir = $('.advance-curvature-direction', $tpr);

            $(this).data('value', submitValue);

            if (submitValue > 0) {
                advanceCurvatureDir.removeClass('arc-down');
                advanceCurvatureDir.removeClass('arc-straight');
                advanceCurvatureDir.addClass('arc-up');
            } else if (submitValue < 0) {
                advanceCurvatureDir.removeClass('arc-up');
                advanceCurvatureDir.removeClass('arc-straight');
                advanceCurvatureDir.addClass('arc-down');
            } else {
                advanceCurvatureDir.removeClass('arc-up');
                advanceCurvatureDir.removeClass('arc-down');
                advanceCurvatureDir.addClass('arc-straight');
            }
        });

        $tpr.on('click', '.curvature .tpr-input-number .inc-button', function (e) {
            var currentVal, siblingInput;
            var $target = $(e.target);

            siblingInput = $target.siblings('input').eq(0);
            currentVal = siblingInput.val();
            currentVal = parseFloat(currentVal) + 0.25;
            siblingInput.val(currentVal);
            siblingInput.trigger('change');
        });

        $tpr.on('click', '.curvature .tpr-input-number .dec-button', function (e) {
            var currentVal, siblingInput;
            var $target = $(e.target);

            siblingInput = $target.siblings('input').eq(0);
            currentVal = siblingInput.val();
            currentVal = parseFloat(currentVal) - 0.25;
            siblingInput.val(currentVal);
            siblingInput.trigger('change');
        });
    }

    function initComponents ()
    {
        initSelectComponents();
        initTextFormatComponents();
        bindEventsOnAdvanceCurvature();
    }


    /**
     * Initializes/Resets the Jcrop plugin
     */
    function setUpJcropPlugin()
    {
        var objectId = $cropForm.data("objectId");
        var object = CMF.design.getObjectById(objectId);
        var $inputs = {
            selection: $cropForm.find("[name='selection']"),
            filename: $cropForm.find("[name='filename']"),
            width: $cropForm.find("[name='width']"),
            height: $cropForm.find("[name='height']")
        };

        var maxSize;
        var width;
        var height;

        // Remove the Jcrop data from the target image in case it was previously added
        if (typeof $cropTarget.data('Jcrop') !== "undefined") {
            $cropTarget.data('Jcrop').destroy();
        }

        // Reset hidden inputs' values from last image crop
        $inputs.selection.val('');
        $inputs.filename.val('');

        // Compute a height and width for the crop target image
        maxSize = parseInt(($('.tpr-crop-width-helper').width() - 20), 10);

        if (object.aspectRatio >= 1) {
            width = maxSize;
            height = maxSize / object.aspectRatio;
        } else {
            width = maxSize * object.aspectRatio;
            height = maxSize;
        }

        $cropTarget.css({
            "width": width,
            "height": height
        });

        $cropTarget.attr("src", object.url);

        $cropTarget.Jcrop({
            bgColor: "transparent",
            onSelect: function(selection){
                $inputs.selection.val(JSON.stringify(selection));
                $inputs.filename.val(object.getFilename());
                $inputs.width.val($cropTarget.width());
                $inputs.height.val($cropTarget.height());
            }
        });
    }


    /**
     * Submits the image cropping form and attempts to append the cropped image as a new object to the design.
     */
    function submitCroppedImage()
    {
        var formData = new FormData($cropForm[0]);
        var cropFormObject = {
            selection: $cropForm.find('[name="selection"]').val(),
            filename: $cropForm.find('[name="filename"]').val(),
            width: $cropForm.find('[name="width"]').val(),
            height: $cropForm.find('[name="height"]').val()
        };
        var formButtons = $cropForm.find("button");

        formData.append('host', window.location.hostname);
        formData.append('protocol', window.location.protocol);
        formData.append('src', $cropTarget.attr('src'));

        var resetForm = function(err){
            if (err) {
                showError(err);
            }

            formButtons.prop("disabled", false);    // reactivate the form
            hideLoader();
            //setUpJcropPlugin();     // reset the Jcrop tool
        };

        formButtons.prop("disabled", true);
        showLoader();

        $.ajax({
            url: $cropForm.attr("action"),
            dataType: "json",
            data: formData,
            type: "POST",
            crossDomain: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function(response) {
                var preloadList = [];
                var originalObject;

                /**
                 * If there was a server error, just reset the selection form and display a notice.
                 * Otherwise, create a new object with the cropped image and remove the original one from the design.
                 */
                if (response.error) {
                    resetForm(response.error);
                    return;
                }

                preloadList.push(response.image.url);

                CMF.utils.preloadImages(preloadList, function(err) {

                    var id;
                    var object;

                    if (err) {
                        resetForm(err.toString());
                        return;
                    }

                    id = $cropForm.data("objectId");

                    originalObject = CMF.design.getObjectById(id);

                    CMF.design.removeObject(id, function(){
                        var image;

                        resetForm();
                        image = realignCroppedImage(response.image, originalObject, cropFormObject);

                        CMF.design.addObject(image);
                        $.magnificPopup.close();
                    });
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                resetForm("An error occured, please try again.");
            }
        });
    }

    function realignCroppedImage(image, originalImage, cropFormObject) {
        var selection = JSON.parse(cropFormObject.selection);
        var cropThumbnailWidth  = cropFormObject.width;
        var cropThumbnailHeight = cropFormObject.height;

        var relWidth = selection.w / cropThumbnailWidth;
        var relHeight = selection.h / cropThumbnailHeight;

        var originalCenterCoordinates = getCenterCoordinate(
            originalImage.width,
            originalImage.height,
            originalImage.left,
            originalImage.top
        );

        image.angle = originalImage.angle;
        image.width = originalImage.width * relWidth;
        image.height = originalImage.height * relHeight;

        image.left = originalCenterCoordinates.left - (image.width / 2);
        image.top = originalCenterCoordinates.top - (image.height / 2);

        return image;
    }

    function getCenterCoordinate(width, height, left, top) {
        var verticalCenter = height / 2;
        var horizontalCenter = width / 2;

        return {
            left: horizontalCenter + left,
            top: verticalCenter + top
        }
    }

    function toggleGalleryImageSelection() {

       var image = $(this);
       var inputId = "galleryImageInput-"+image.attr('data-id');

       if (image.hasClass("selected")) {   // deselect image
           image.removeClass("selected");
           $("#"+inputId).remove();
       } else {       // select image
           image.addClass("selected");
           $("<input />", {
               id: inputId,
               type: "hidden",
               name: "galleryImages[]",
               value: image.attr("src")
           }).appendTo("#clipArtSelectionForm");
       }
    }

    function disableImagesSelectionForm ()
    {
        var dialog = getOpenDialog();
        var form = dialog.find('form').eq(0);

        form.find("button, [type='file']").prop("disabled", true);
        showLoader();
    }

    function resetImagesSelectionForm (err)
    {
        var dialog = getOpenDialog();
        var form = dialog.find('form').eq(0);

        form.find("button, [type='file']").prop("disabled", false);
        form[0].reset();
        clearGallerySelection();    // applicable only to clip art form
        hideLoader();

        if (err) {
            showError(err);
        }
    }

    function processImagesSelectionResponse (data)
    {
        var preloadList = [];

        if (data.error) {
            resetImagesSelectionForm(data.error);
            return;
        }

        data.images.forEach(function(image){
            preloadList.push(image.url);
        });

        CMF.utils.preloadMultipleImages(preloadList, function(requests) {
            var errors = [];

            requests.forEach(function(request){
                if (request.error) {
                    errors.push(request.src);
                }
            });

            data.images.forEach(function(image){
                // Make sure that the variants for the current image were
                // not among the ones that produced errors on pre-loading
                if (errors.indexOf(image.url) == -1) {
                    CMF.design.addObject(image);
                }
            });

            resetImagesSelectionForm();
            $.magnificPopup.close();
        });
    }

    function addClipArtToDesign (event)
    {
        event.preventDefault();

        $(this).asyncFileUpload({
            afterSubmit: disableImagesSelectionForm,
            success: processImagesSelectionResponse,
            error: resetImagesSelectionForm
        });

        return false;
    }

    function handleFileUpload (event)
    {
        var imagesHaveCopyright = $(".tpr-upl-copyright-notice input")[0].checked;

        event.preventDefault();

        if (imagesHaveCopyright) {
            $(this).asyncFileUpload({
                afterSubmit: disableImagesSelectionForm,
                success: processImagesSelectionResponse,
                error: resetImagesSelectionForm
            });
        }

        return false;
    }


    /**
     * Opens the image cropping tool within a lightbox
     * @param  {Number} id  The ID of the design object being cropped
     */
    function crop(id) {

        $cropForm.data("objectId", id);

        $.magnificPopup.open({
            items: {
                src: "#tpr-crop-image-dialog",
                type: "inline"
            },
            type: "inline",
            overflowY: "scroll",
            closeOnBgClick: true,      // prevents closing the lightbox when the background is clicked
            callbacks: {
                open: setUpJcropPlugin
            }
        });
    }


    /**
     * Opens a colorbox for preview a design
     * @param {String} url The URL to the image being previewed
     */
    function preview(url, shortUrl, options) {
        var templateSelector = '#tpr-designPreviewDialog';
        if (typeof options !== 'undefined' && typeof options.templateSelector !== 'undefined') {
            templateSelector = options.templateSelector;
        }

        if (!shortUrl) {
            shortUrl = url;
        }

        $.magnificPopup.open({
            items: {
                src: templateSelector,
                type: "inline"
            },
            type: "inline",
            overflowY: "scroll",
            closeOnBgClick: true,      // prevents closing the lightbox when the background is clicked
            callbacks: {
                open: function() {
                    $(".tpr-designPreview").attr('src', url);

                    window.setTimeout(function(){
                        $designPreviewUrlInput.val(url).trigger('select');
                        $('#cmf-sharePreviewUrl2').val(url).trigger('select');
                    }, 100);
                }
            }
        });
    }


    function adjustRangeInputValueIndicator ($input, value)
    {
        value = parseFloat(value);

        let $indicator = $input.siblings(".tpr-value-indicator");
        let min = parseInt($input.attr("min"));
        let max = parseInt($input.attr("max"));
        let range = max - min;
        let left = (parseInt(value) - min ) / range * 100;

        $input.val(value);
        $indicator.html(value).css("left", left + "%");
    }


    /**
     * Initializes the add|edit text dialog specifically for adding a new object
     */
    function initTextAddDialog() {
        let defaults = getTextFormattingDefaults();
        let heading = $textObjectDialog.find('h2');

        $textObjectDialog.attr("data-role","add");
        heading.html(heading.data('addtextlabel'));

        initTextObjectDialog(defaults, '');
    }


    /**
     * Initializes the add|edit text dialog specifically for editing an existing object
     * @param  {Number} id Target object ID
     */
    function initTextEditDialog(id) {
        let object = CMF.design.getObjectById(id);
        let styling = object.getTextStylingData();
        let heading = $textObjectDialog.find('h2');

        heading.html(heading.data('edittextlabel'));
        $textObjectDialog.attr("data-role","edit");
        $textObjectDialog.find("[type='submit']").attr("data-objectid", id);

        initTextObjectDialog(styling, object.text);
    }


    function setTextFormatOptionsValues (options)
    {
        let $formatOptions = $(".tpr-text-format-option");

        if (!options) {
            return;
        }

        $formatOptions.find("[data-value]").removeClass("tpr-selected");
        $formatOptions.each(function() {
            let $option = $(this);
            let key = $option.data("key");

            if ($option.attr("type") === "range") {
                adjustRangeInputValueIndicator($option, options[key]);
                return;
            }

            let $item = $option.find("[data-value='"+ options[key] +"']");

            $item.addClass("tpr-selected");

            //
            if ($option.hasClass("tpr-menu")) {
                $option.find(".tpr-menu__head").html(options[key]);
            }
        });
    }


    /**
     * Initializes the text add|edit dialog when it is opened, by adjusting the state of the text formatting controls within it.
     * @param  {Object} styling  Text formatting data
     * @param  {String} text
     */
    function initTextObjectDialog(styling, text)
    {
        setTextFormatOptionsValues(styling);
        setColorPickerInitialColor(styling.color);
        setTextObjectPreview(styling, text);
        $textObjectDialog.find("textarea").val(text);
        // setAdvanceCurvature(styling);
    }


    /**
     * Applies styling and text to the text object preview element within the add/edit text dialogs.
     */
    function setTextObjectPreview(styling, text) {
        var textObjectPreview = $(".textObjectPreview");

        if (styling) {
            textObjectPreview.css(styling);
        }

        if (typeof text === 'string') {
            textObjectPreview.html(text);
        }
    }


    /**
     * Returns the trimmed text that was input for a text object
     * @return {String|Null}
     */
    function getTextObjectText() {
        var $textarea = $("#textObjectDialog").find("textarea");
        var text = $.trim($textarea.val());

        if (!text) {
            alert("No text was input!");
            $textarea.trigger("focus");
            return;
        }

        return text;
    }


    /**
     * Reads in values of the text formatting controls from the text object dialog.
     * @return {Object}
     */
    function getTextObjectFormatting()
    {
        let data = getTextFormattingDefaults();
        let $formattingOptions = $(".tpr-text-format-option");

        $formattingOptions.each(function() {
            let $elem = $(this);
            let key = $elem.data("key");
            let $selected;

            if ($elem.attr("type") === "range") {
                data[key] = $elem.val() + $elem.data("suffix");
                return;
            }

            $selected = $elem.find(".tpr-selected");

            if ($selected.length) {
                if (!$elem.hasClass('disabled')) {
                    data[key] = $selected.data("value");
                }
            } else {
                data[key] = getDefaultTextOptionValue(key);
            }
        });

        return data;
    }


    function getQrObjectText() {
        let $textarea = $("#videoSelectionForm").find("textarea");
        let text = $.trim($textarea.val());

        if (!text) {
            alert("No text was input!");
            $textarea.trigger("focus");
            return;
        }

        return text;
    }


    /**
     * Returns a reference to the dalog (lightbox) that is currently opened.
     */
    function getOpenDialog() {
        var dialog;

        $(".lightbox").each(function(){
            var $this = $(this);
            if ($this.css("display") !== "none") {
                dialog = $this;
            }
        });

        return dialog;
    }


    /**
     * Display the loader within the dialog that is currently opened
     */
    function showLoader() {
        var dialog = getOpenDialog();
        var loader;

        if (dialog) {
            loader = dialog.find(".loader");
            if (loader) {
                loader.fadeIn(200).css("display","inline-block");
            }
        }
    }


    /**
     * Display the loader within the dialog that is currently opened
     */
    function hideLoader() {
        var dialog = getOpenDialog();
        var loader;

        if (dialog) {
            loader = dialog.find(".loader");
            if (loader) {
                loader.fadeOut(200);
            }
        }
    }


    /**
     * Display an error message within the open dialog
     */
    function showError(message) {
        var dialog = getOpenDialog();
        var error;
        var duration = 3000;    // the time that the error message will be visible

        if (dialog) {
            error = dialog.find(".error");
            if (error) {
                error.html(message);
                error.fadeIn(200, function(){
                    setTimeout(function(){
                        error.fadeOut(200);
                    }, duration);
                });
            }
        }
    }


    /**
     * Un-select the selected images in the gallery list
     */
    function clearGallerySelection() {
       var $form = $("#clipArtSelectionForm");
       $form.find("img").removeClass("selected");
       $form.find("input[type=hidden]").remove();
    }

    /**
     * Initialize color picker button background color
     * @param value
     */
    function setColorPickerInitialColor(value) {
        $colorBtn.css('background-color', value);
        $colorBtn.attr('data-value', value);
        $colorBtn.data('value', value);

        if (!$colorBtn.hasClass("tpr-selected")) {
            $colorBtn.addClass("tpr-selected");
        }
    }

    /**
     * Initialize value of advance curvature fields based on `styling` data
     * @param styling
     */
    function setAdvanceCurvature(styling) {
        var curvature, advanceCurvatureDir, simpleCurvatureValue = [];

        $('.advance-curvature-value', $tpr).val(styling['text-curvature']).data('value', styling['text-curvature']);

        curvature = $textObjectDialog.find('.tpr-text-format-option[data-key="text-curvature"]:not(.advance-curvature)');

        if (curvature.length > 0) {
            $('[data-value]', curvature).each(function () {
                simpleCurvatureValue.push($(this).attr('data-value'));
            });

            if ($.inArray(styling['text-curvature'].toString(), simpleCurvatureValue) === -1) {
                useAdvanceCurvature();
            } else {
                unUseAdvanceCurvature();
            }
        }

        advanceCurvatureDir = $('.advance-curvature-direction', $tpr);

        if (styling['text-curvature'] > 0) {
            advanceCurvatureDir.removeClass('arc-down');
            advanceCurvatureDir.removeClass('arc-straight');
            advanceCurvatureDir.addClass('arc-up');
        } else if (styling['text-curvature'] < 0) {
            advanceCurvatureDir.removeClass('arc-up');
            advanceCurvatureDir.removeClass('arc-straight');
            advanceCurvatureDir.addClass('arc-down');
        } else {
            advanceCurvatureDir.removeClass('arc-up');
            advanceCurvatureDir.removeClass('arc-down');
            advanceCurvatureDir.addClass('arc-straight');
        }
    }

    /**
     * Show advance curvature fields and hide simple curvature fields in text editor dialog
     */
    function useAdvanceCurvature() {
        var $advanceCurvature = $('.advance-curvature', $tpr);
        var $simpleCurvature = $('.simple-curvature', $tpr);

        $advanceCurvature.css('display', 'block');
        $advanceCurvature.removeClass('disabled');

        $simpleCurvature.addClass('disabled');
        $simpleCurvature.css('display', 'none');
    }

    /**
     * Hide advance curvature fields and show simple curvature fields in text editor dialog
     */
    function unUseAdvanceCurvature() {
        var $advanceCurvature = $('.advance-curvature', $tpr);
        var $simpleCurvature = $('.simple-curvature', $tpr);

        $advanceCurvature.css('display', 'none');
        $advanceCurvature.addClass('disabled');

        $simpleCurvature.removeClass('disabled');
        $simpleCurvature.css('display', 'block');
    }

    return {
        buildCache: buildCache,
        attachEventHandlers: attachEventHandlers,
        initTextAddDialog: initTextAddDialog,
        initTextEditDialog: initTextEditDialog,
        getTextObjectFormatting: getTextObjectFormatting,
        getTextObjectText: getTextObjectText,
        getQrObjectText: getQrObjectText,
        showLoader: showLoader,
        hideLoader: hideLoader,
        showError: showError,
        crop: crop,
        preview: preview
    };

})(jQuery);

var CMF = CMF || {};

CMF.Object = (function($, undefined){

    var $doc;
    var $objects;
    var $grips;
    var $detailsList;

    var cache = false;  // determine whether or not the module has cached its needed jqueryfied elements (above)

    var _PI2 = Math.PI / 2;
    var _3PI2 = 3 * Math.PI / 2;
    var _2PI = 2 * Math.PI;

    var pixelSize = 0;


    function buildCache() {
        $doc = $(document);
        $objects = $(".objects");
        $grips = $(".grips");
        $detailsList = $(".objectsDetailsList");
    }


    /**
     * Radians to degrees angle conversion
     */
    function rad2deg(angle) {
        return angle * 180 / Math.PI;
    }

    /**
     * Degrees to radians angle conversion
     */
    function deg2rad(angle) {
        return angle * Math.PI / 180;
    }


    function setPixelSize ()
    {
        pixelSize = CMF.viewport.getPixelSize();
        return pixelSize;
    }


    /**
     * Constructor for design objects
     */
    function CmfObject(data) {

        // Check if jqueryfied elements exist within the module cache
        if (!cache) {
            buildCache();
            cache = true;
        }

        // Generic properties, applicable to all types of objects
        this.id = data.id;
        this.type = data.type || "image";                       // types: image|qr|text
        this.url = data.url || null;
        this.angle = data.angle || 0;                           // rotation angle (degrees)
        this.zIndex = data.zIndex;
        this.pxWidth = data.pxWidth || 1;                       // width in pixels for the original variant of the image
        this.pxHeight = data.pxHeight || 1;                     // height in pixels for the original variant of the image
        this.inWidth = data.inWidth || this.pxWidth;            // width in inches for the original variant of the image
        this.inHeight = data.inHeight || this.pxHeight;         // height in inches for the original variant of the image
        this.top = data.top || null;
        this.left = data.left || null;
        this.width = data.width || null;                        // width of the design object, within the viewport (in pixels)
        this.height = data.height || null;                      // height of the design object, within the viewport (in pixels)
        this.aspectRatio = this.inWidth / this.inHeight;
        this.maxQualityThreshold = 1;                           // the limit at which the image's quality indicator begins to decrease from 100%;
                                                                // it is expressed as the ratio between the original files's (px) height and the
                                                                // (px) height of the printable sheet associated with the selected product
        // SVG-related elements and properties
        this.svg = {};
        this.svg.canvas = undefined;                            // SVG canvas used to draw the object image on
        this.svg.image = undefined;                             // SVG image representing the design object
        this.scaleFactorX = data.scaleFactorX || 1;             // indicates the current scaling factor with regard to the original size of the viewport image
        this.scaleFactorY = data.scaleFactorY || 1;             // indicates the current scaling factor with regard to the original size of the viewport image
        this.cache = {                                          // a cache for the elements associated with the design object
            dom : {},       // "raw" DOM elements
            jq : {}         // "jquerified" DOM elements
        };

        if (!this.width || !this.height) {
            if (this.type !== "text") {
                this.setDefaultSize();
            } else {
                this.width = this.pxWidth;
                this.height = this.pxHeight;
            }
        }

        if (!this.left || !this.top) {
            this.setDefaultPosition();
        }

        // Properties specific to "Text" and "QR" objects
        this.text = data.text || "";

        // Properties specific to "Text" objects
        this.color = data.color || "#000000";
        this.fontSize = data.fontSize || 24;                    // expressed in pixels
        this.fontFamily = data.fontFamily || "Arial";
        this.fontWeight = data.fontWeight || "normal";          // values: bold|normal
        this.fontStyle = data.fontStyle || "normal";            // values: italic|normal
        this.textAlign = data.textAlign || "left";              // values: left|right|center
        this.textDecoration = data.textDecoration || "none";    // values: none|underline|line-through
        this.textCurvature = data.textCurvature || "0";

        return this;
    }


    /**
     * Returns the filename for the object images (identical for all variants)
     * @return {string}
     */
    CmfObject.prototype.getFilename = function() {
        return this.url.replace(/^.*[\\\/]/, '');
    };


    /**
     * Computes a default size for the CmfObject image within the viewport
     */
    CmfObject.prototype.setDefaultSize = function() {
        if (this.aspectRatio >= 1) {    // width >= height
            this.width = Math.round(CMF.viewport.get('width') * 0.5);
            this.height = Math.round(this.width / this.aspectRatio);
        } else {    // width < height
            this.height = Math.round(CMF.viewport.get('height') * 0.5);
            this.width = Math.round(this.height * this.aspectRatio);
        }

        return this;
    };


    /**
     * Computes a default position (centered) for the CmfObject
     */
    CmfObject.prototype.setDefaultPosition = function() {
        this.left = Math.round((CMF.viewport.get('width') - this.width) / 2);
        this.top = Math.round((CMF.viewport.get('height') - this.height) / 2);

        return this;
    };


    /**
     * Retrieves the components corresponding to a single design object (i.e. viewport image, viewport grip, details list item)
     */
    CmfObject.prototype.cacheComponents = function()
    {
        // Cache the DOM elements
        this.cache.dom = {
            image : document.getElementById("designObject-"+this.id),
            grip : document.getElementById("grip-"+this.id),
            listItem : document.getElementById("listItem-"+this.id),
            qualityIndicator: document.getElementById("qualityIndicator-"+this.id),
            inWidthIndicator: document.getElementById("grip-"+this.id).getElementsByClassName('tpr-widthIndicator')[0],
            inHeightIndicator: document.getElementById("grip-"+this.id).getElementsByClassName('tpr-heightIndicator')[0],
            cmWidthIndicator: document.getElementById("grip-"+this.id).getElementsByClassName('tpr-widthIndicator')[1],
            cmHeightIndicator: document.getElementById("grip-"+this.id).getElementsByClassName('tpr-heightIndicator')[1]
        };

        // Cache the "jquerified" DOM elements
        this.cache.jq = {
            image : $(this.cache.dom.image),
            grip : $(this.cache.dom.grip),
            listItem : $(this.cache.dom.listItem),
            qualityIndicator: $(this.cache.dom.qualityIndicator),
            inWidthIndicator: $(this.cache.dom.inWidthIndicator),
            inHeightIndicator: $(this.cache.dom.inHeightIndicator),
            cmWidthIndicator: $(this.cache.dom.cmWidthIndicator),
            cmHeightIndicator: $(this.cache.dom.cmHeightIndicator)
        };

        return this;
    };


    /**
     * Computes the position and the size of the object's grip element and applies them to that element
     */
    CmfObject.prototype.adjustGrip = function()
    {
        var bbox = this.svg.image.getBBox();
        var borderWidth = 1;

        this.cache.jq.grip.css({
            left: bbox.x - borderWidth,             // account for the width of the border
            top: bbox.y - borderWidth,              // account for the width of the border
            width: bbox.width + 2 * borderWidth,    // the box must be visible outside the object, hence 2px bigger
            height: bbox.height + 2 * borderWidth   // the box must be visible outside the object, hence 2px bigger
        });
    };


    /**
     * Creates the object image SVG canvas, then creates the actual image and appends it to the canvas
     */
    CmfObject.prototype.addImageToViewport = function() {

        var template = $("#cmfObjectTemplate").html();
        var data = {
            id: this.id,
            zIndex: this.zIndex
        };

        $objects.append(Mustache.render(template,data));

        // Create the new object's SVG canvas
        this.svg.canvas = Raphael("designObject-"+this.id, CMF.viewport.get('width'), CMF.viewport.get('height'));

        // Create the image and append it to the SVG canvas
        this.svg.image = this.svg.canvas.image(this.url, this.left, this.top, this.width, this.height);

        return this;
    };


    CmfObject.prototype.setSizeOnPaper = function ()
    {
        var inWidth, inHeight;
        var cmWidth, cmHeight;

        setPixelSize();

        inWidth = (pixelSize * this.width).toFixed(1);
        inHeight = (pixelSize * this.height).toFixed(1);
        cmWidth = (inWidth * 2.54).toFixed(1);
        cmHeight = (inHeight * 2.54).toFixed(1);

        this.cache.dom.inWidthIndicator.innerHTML = inWidth;
        this.cache.dom.inHeightIndicator.innerHTML = inHeight;
        this.cache.dom.cmWidthIndicator.innerHTML = cmWidth;
        this.cache.dom.cmHeightIndicator.innerHTML = cmHeight;

        return this;
    }


    /**
     * Creates and appends the grip element associated with the design object, which will be
     * added on top of the product schematic and be used for manipulating the object image
     */
    CmfObject.prototype.addGripToViewport = function() {

        var template = $("#cmf-"+this.type+"ObjectGripTemplate").html();
        var data = {
            id: this.id,
            left: this.left - 2,        // substract the width of the border
            top: this.top - 2,          // substract the width of the border
            width: this.width,
            height: this.height,
            zIndex: this.zIndex
        };

        $grips.append(Mustache.render(template,data));

        return this;
    };


    /**
     * Add an item to the design objects details list, corresponding to the current design object
     */
    CmfObject.prototype.addToDetailsList = function() {

        var templateId = "cmf-"+this.type+"ObjectDetailsTemplate";
        var template = $("#"+templateId).html();
        var data = {
            id: this.id,
            src: this.url,
            text: this.text
        };

        $detailsList.prepend(Mustache.render(template,data));
        return this;
    };


    /**
     * Creates a collection of DOM elements associated with the selected design object and appends them to the UI viewport
     */
    CmfObject.prototype.addToUi = function() {
        this.addImageToViewport();
        this.addGripToViewport();
        this.addToDetailsList();
        this.cacheComponents();
        this.applyTransformations();    // applies stored svg transformations, if any; useful when duplicating or loading objects.

        $('#topperoo').trigger('topperoo.design.object_added');

        return this;
    };


    /**
     * Removes the design object completely, both from the UI and the CMF.ui.objects array
     */
    CmfObject.prototype.remove = function(callback) {

        var self = this;
        var duration = 50; // animation duration

        // Remove the corresponding list item from the design objects details list
        self.cache.jq.listItem.hide(duration, function() {
            self.cache.jq.listItem.remove();
        });

        // Remove the viewport object
        self.cache.jq.image.fadeOut(duration, function() {
            self.cache.jq.image.remove();
        });

        // Remove the viewport object grip
        self.cache.jq.grip.fadeOut(duration, function() {
            self.cache.jq.grip.remove();

            if (typeof callback === "function") {
                callback();
            }
        });

        return this;
    };


    /**
     * Highlights a design object's grip element and corresponding item in the objects details list
     */
    CmfObject.prototype.select = function() {

        var zIndex;

        // If the targeted object is already selected, exit
        if (this.isSelected()) {
            return this;
        }

        CMF.design.clearSelection();

        this.cache.jq.listItem.addClass("selected");
        this.cache.jq.image.addClass("selected");
        this.cache.jq.grip.addClass("selected");

        // In order for the control elements within the grip of the selected object
        // to be clickable, the grip itself must gain a z-index above all other grips
        zIndex = parseInt(this.cache.jq.grip.css("z-index"),10);
        zIndex += 999;
        this.cache.jq.grip.css("z-index",zIndex);

        this.setSizeOnPaper();

        return this;
    };


    /**
     * Removes the highlight from a design object
     */
    CmfObject.prototype.deselect = function() {

        this.cache.jq.listItem.removeClass("selected");
        this.cache.jq.image.removeClass("selected");
        this.cache.jq.grip.removeClass("selected").css("z-index",this.zIndex);

        return this;
    };


    CmfObject.prototype.isSelected = function ()
    {
        return this.cache.jq.listItem.hasClass("selected");
    }


    /**
     * Moves the current object to a specified depth (z-index)
     * @param  {number} depth
     * @return {object}
     */
    CmfObject.prototype.moveToDepth = function(depth) {
        var previousDepth = this.zIndex;

        // Reposition the viewport elements
        this.zIndex = depth;
        this.cache.jq.image.css("z-index", depth);
        this.cache.jq.grip.css("z-index", depth + 999);

        return this;
    };


    /**
     * Pushes the current object on top of all its siblings in the viewport
     */
    CmfObject.prototype.highlightImage = function() {
        var zIndex;

        // Push the actual image on top of all others by increasing its current z-index
        zIndex = parseInt(this.cache.jq.image.css("z-index"), 10);
        zIndex += 999;
        this.cache.jq.image.css("z-index", zIndex);
    };


    /**
     * Applies effects to the current object that are common to any type of transformation (scale | rotate | translate)
     * return {object}
     */
    CmfObject.prototype.addTransformFx = function() {
        // Push the selected object on top of all other design objects in the viewport
        this.highlightImage();

        // Apply styling to the image
        this.cache.jq.image.addClass("dragged");

        // Hide the grip
        this.cache.jq.grip.addClass("tpr-invisible");

        return this;
    };


    /**
     * Removes the common effects that were applied during last transformation
     * @return {object}
     */
    CmfObject.prototype.removeTransformFx = function() {
        // Return the object to its original depth (z-index before dragging started)
        this.cache.jq.image.css("z-index", this.zIndex);

        // Remove styling applied to the image
        this.cache.jq.image.removeClass("dragged");

        // Show the object's grip
        this.cache.jq.grip.removeClass("tpr-invisible");

        return this;
    };


    /**
     * Initiates the dragging of the viewport object
     * @param {Number} The initial horizontal coordinate of pointer
     * @param {Number} The initial vertical coordinate of pointer
     */
    CmfObject.prototype.dragStart = function(x0, y0) {

        var self = this;
        var translation = [0,0];    // horizontal and vertical position adjustment

        $doc.one("mousemove touchmove", function(){
            self.addTransformFx();
        });

        // move the selected object in relation to its original position
        $doc.on({
            mousemove: function (event) {
                translation = self.drag(event.pageX, event.pageY, x0, y0);
            },
            touchmove: function (event) {
                var touch = event.originalEvent.targetTouches[0];     // only the first finger counts
                translation = self.drag(touch.pageX, touch.pageY, x0, y0);
            }
        });

        $doc.on("mouseup touchend", function(){
            CMF.dashboard.enableWindowScrolling();
            self.dragEnd(translation);
        });

        return self;
    };


    /**
     * Drag the selected object to a new (i.e. "current") position
     * @param  Integer  x   The current horizontal coordinate of the pointer
     * @param  Integer  y   The current vertical coordinate of the pointer
     * @param  Integer  x0  The initial horizontal coordinate of the pointer
     * @param  Integer  y0  The initial vertical coordinate of the pointer
     */
    CmfObject.prototype.drag = function(x, y, x0, y0) {

        var xTranslation = x - x0;
        var yTranslation  = y - y0;

        this.svg.image.transform("T"+xTranslation+","+yTranslation+"R"+(-this.angle));

        return [xTranslation, yTranslation];
    };


    /**
     * Finalize the dragging of the object by saving its new position and detaching the "mousemove" event handler
     * @param  Array  The last horizontal (x) and vertical (y) translation values
     */
    CmfObject.prototype.dragEnd = function(translation) {

        // Store the new left|top coordinates after the transformation
        this.left += translation[0];
        this.top += translation[1];

        // Modify the x|y parameters of the svg image to reflect the new position after the transformation,
        // or otherwise on the next transformation, the original coordinates (x:0, y:0) will be used.
        this.svg.image.attr({
            "x" : this.left,
            "y" : this.top
        });

        // Reset the translation transformation, because the translation
        // is already reflected in the new (x,y) coordinates
        this.svg.image.transform("T0,0R"+(-this.angle));

        // Remove the "drag" event handler
        $doc.off("mousemove mouseup touchmove touchend");

        // Adjust the position and size of the object's grip element before making it visible again
        this.adjustGrip();

        // Remove drag-related styling from the design object's elements
        return this.removeTransformFx();
    };


    /**
     * Retrieves the coordinates of the object's pivot point coordinates. This is, by default, the same as the object's center.
     * @param  Boolean relateToDocument  Determines whether to compute the center coordinates in relation to the document margins or not
     * @return Array
     */
    CmfObject.prototype.getRotationPivotCoordinates = function(relateToDocument) {

        var xp = this.left + this.width/2;
        var yp = this.top + this.height/2;
        var offset = CMF.viewport.get('offset');

        if (relateToDocument === true) {
            xp += offset.left;
            yp += offset.top;
        }

        return {
            x: xp,
            y: yp
        };
    };


    /**
     * Computes the radius of the circle that will border the viewport object during rotation
     * @return Integer
     */
    CmfObject.prototype.getRotationCircleRadius = function() {

        var circleDiameter = Math.sqrt(Math.pow(this.width,2) + Math.pow(this.height,2));
        return (circleDiameter/2);
    };


    /**
     * Applies rotation-relation styling to a design object
     */
    CmfObject.prototype.addRotationEffects = function() {

        var center = this.getRotationPivotCoordinates();
        var radius = this.getRotationCircleRadius();

        // Append a rotation circle around the object image
        CMF.viewport.addRotationOutline(center, radius, {
            "stroke": "#000",
            "stroke-width" : 1
        });

        this.addTransformFx();

        return this;
    };


    /**
     * Removes any styling applied to the object during its rotation
     */
    CmfObject.prototype.removeRotationEffects = function() {

        CMF.viewport.removeRotationOutline();
        this.removeTransformFx();

        return this;
    };


    /**
     * Prepares an object for rotation
     * @param {Number} xc Initial cursor horizontal coordinate
     * @param {Number} yc Initial cursor vertical coordinate
     */
    CmfObject.prototype.rotateStart = function(xc, yc) {

        var self = this;

        // Determine the coordinates for the object's pivot point in relation to the document margins
        var pivot = this.getRotationPivotCoordinates(true);

        // Initial cursor coordinates in relation to the document margins
        var x0 = xc - pivot.x;
        var y0 = -(yc - pivot.y);

        // Compute the original angle
        var alpha0 = Math.atan(y0/x0);

        $doc.one("mousemove touchmove", function(){
            self.addRotationEffects();
        });

        $doc.on({
            mousemove: function (event) {
                self.rotate((event.pageX - pivot.x), -(event.pageY - pivot.y), alpha0);
            },
            touchmove: function (event) {
                var touch = event.originalEvent.targetTouches[0];     // only the first finger counts
                self.rotate((touch.pageX - pivot.x), -(touch.pageY - pivot.y), alpha0);
            }
        });

        $doc.on("mouseup touchend", function(){
            self.rotateEnd();
            CMF.dashboard.enableWindowScrolling();
        });

        return self;
    };


    /**
     * Rotate the object around its pivot point, P(0,0)
     */
    CmfObject.prototype.rotate = function(x, y, alpha0) {

        var alpha;  // the rotation angle

        // Determine the angle between the abscissa of the Cartesian system whose origin is the object's
        // pivot point, and the segment between the same system's origin and the current position of the pointer.
        if (x > 0) {
            if (y > 0) {
                // ===[ Quadrant I ]===
                alpha = Math.atan(y/x);
            } else if (y < 0) {
                // ===[ Quadrant IV ]===
                alpha = Math.atan(x/(-y)) + _3PI2;
            } else {    // y == 0
                alpha = 0;
            }
        } else if (x < 0) {
            if (y > 0) {
                // ===[ Quadrant II ]===
                alpha = Math.atan((-x)/y) + _PI2;
            } else if (y < 0) {
                // ===[ Quadrant III ]===
                // Non-optimized expression:  alpha = Math.atan((-y)/(-x)) + Math._PI2;
                alpha = Math.atan(y/x) + Math.PI;
            } else {    // x == 0
                alpha = Math.PI;
            }
        } else {    // x == 0
            if (y > 0) {
                alpha = _PI2;
            } else if (y < 0) {
                alpha = _3PI2;
            } else {    // y == 0
                /**
                 * In this scenario, the object needs to remain in its current position
                 */
                return this;
            }
        }

        // Determine the current rotation angle
        alpha = alpha - alpha0 + deg2rad(this.angle);

        // Filter the angle
        if (alpha < 0) {
            alpha += _2PI;
        }
        alpha = rad2deg(alpha) % 360;


        // "Snap" the object to 90x angles
        if ((alpha >= CMF.config.snapLimits.low360) || (alpha <= CMF.config.snapLimits.high360)) {
            alpha = 0;
        } else if ((alpha >= CMF.config.snapLimits.low270) && (alpha <= CMF.config.snapLimits.high270)) {
            alpha = 270;
        } else if ((alpha >= CMF.config.snapLimits.low180) && (alpha <= CMF.config.snapLimits.high180)) {
            alpha = 180;
        } else if ((alpha >= CMF.config.snapLimits.low90) && (alpha <= CMF.config.snapLimits.high90)) {
            alpha = 90;
        }

        // Rotate the object
        this.svg.image.transform("R"+(-alpha));   // Raphael.js rotates in a CW direction, while all calculations are made CCW. Hence the "-" sign.

        return this;
    };


    /**
     * Finalizes the rotation by saving the current rotation angle
     */
    CmfObject.prototype.rotateEnd = function() {

        var matrix = this.svg.image.matrix.split();
        this.angle = -(matrix.rotate);   // the SVG rotation transformation occurs CW, hence the "-" needed to convert it to CCW direction
        if (this.angle < 0) {
            this.angle += 360;
        }

        // Detach the "rotate" event handler
        $doc.off("mousemove touchmove").off("mouseup touchend");

        // Adjust the position and size of the object's grip element before making it visible again
        this.adjustGrip();

        // Remove all rotation-related styling and additional effects/elements
        this.removeRotationEffects();

        return this;
    };

    /**
     *
     * @param x0 Cursor's initial horizontal position
     * @param y0 Cursor's initial vertical position
     * @param sDir Scale direction
     * @returns {CMF.Object}
     */
    CmfObject.prototype.resizeStart = function(x0, y0, sDir)
    {
        var self = this;
        var bbox = this.svg.image.getBBox();      // Bounding box with transform
        var uBbox = this.svg.image.getBBox(true); // Bounding box without transform
        var scx,    // 'x' scale center coordinate relative to view port
            scy,    // 'y' scale center coordinate relative to view port
            relscx, // 'x' scale center coordinate relative to screen
            relscy, // 'y' scale center coordinate relative to screen
            w0,     // width of the bounding box (image)
            h0;     // height of the bounding box (image)
        var atan0;
        var limitScaleFactor;
        var offset = $objects.offset();

        switch (sDir) {
            case "se":
                scx = bbox.x;
                scy = bbox.y;
                break;
            case "sw":
                scx = bbox.x2;
                scy = bbox.y;
                break;
            case "nw":
                scx = bbox.x2;
                scy = bbox.y2;
                break;
            case "ne":
                scx = bbox.x;
                scy = bbox.y2;
                break;
            case "n":
                scx = uBbox.x + (uBbox.width / 2);
                scy = uBbox.y2;
                break;
            case "e":
                scx = uBbox.x;
                scy = uBbox.y + (uBbox.height /2);
                break;
            case "s":
                scx = uBbox.x + (uBbox.width / 2);
                scy = uBbox.y;
                break;
            case "w":
                scx = uBbox.x2;
                scy = uBbox.y + (uBbox.height / 2);
                break;
        }

        w0 = bbox.width;
        h0 = bbox.height;

        atan0 = Math.atan(h0 / w0);
        relscx = scx + offset.left;
        relscy = scy + offset.top;
        limitScaleFactor = CMF.config.minObjectSize / w0;

        $doc.one("mousemove touchmove", function(){
            self.addTransformFx();
        });

        $doc.on({
            mousemove: function (event) {
                if (['n', 'e', 's', 'w'].indexOf(sDir) !== -1) {
                    self.stretch(event.pageX, event.pageY, scx, scy, x0, y0, uBbox, sDir, limitScaleFactor);
                } else {
                    self.resize(event.pageX, event.pageY, scx, scy, relscx, relscy, bbox, atan0, limitScaleFactor);
                }
            },
            touchmove: function (event) {
                var touch = event.originalEvent.targetTouches[0];     // only the first finger counts
                if (['n', 'e', 's', 'w'].indexOf(sDir) !== -1) {
                    self.stretch(touch.pageX, touch.pageY, scx, scy, x0, y0, uBbox, sDir, limitScaleFactor);
                } else {
                    self.resize(touch.pageX, touch.pageY, scx, scy, relscx, relscy, bbox, atan0, limitScaleFactor);
                }
            }
        });

        $doc.on("mouseup touchend", function(){
            CMF.dashboard.enableWindowScrolling();
            self.resizeEnd();
        });

        return self;
    };

    /**
     * @param x Current cursor horizontal coordinate
     * @param y Current cursor horizontal coordinate
     * @param scx Scale center horizontal coordinate, relative to SVG canvas
     * @param scy Scale center vertical coordinate, relative to SVG canvas
     * @param relscx Scale center horizontal coordinate, relative to document
     * @param relscy Scale center vertical coordinate, relative to document
     * @param w0 Initial object bounding box width
     * @param h0 Initial object bounding box height
     * @param atan0 Arctangent of bounding box inner angle
     * @param limitScaleFactor The value of the minimum accepted scale factor
     */
    CmfObject.prototype.resize = function(x, y, scx, scy, relscx, relscy, bbox, atan0, limitScaleFactor)
    {
        var rotation, scale;
        var dx = Math.abs(relscx - x);
        var dy = Math.abs(relscy - y);
        var atan1 = Math.atan(dy/dx);

        if (!CMF.config.shiftKey) {
            if (atan1 <= atan0) {
                this.scaleFactorX = dy / bbox.height;
            } else {
                this.scaleFactorX = dx / bbox.width;
            }
        } else {
            scx = bbox.x + bbox.width / 2;
            scy = bbox.y + bbox.height / 2;

            if (atan1 <= atan0) {
                this.scaleFactorX = (2 * dy - bbox.height) / bbox.height;
            } else {
                this.scaleFactorX = (2 * dx - bbox.width) / bbox.width;
            }
        }

        if (this.scaleFactorX < limitScaleFactor) {
            this.scaleFactorX = limitScaleFactor;
        }

        this.scaleFactorY = this.scaleFactorX;

        rotation = "R" + (-this.angle);
        scale = "S" + this.scaleFactorX + "," + this.scaleFactorY + "," + scx + "," + scy;

        this.svg.image.transform(rotation + scale);
    };

    /**
     *
     */
    CmfObject.prototype.resizeEnd = function()
    {
        var bbox = this.svg.image.getBBox();

        this.width *= this.scaleFactorX;
        this.height *= this.scaleFactorY;

        this.left = bbox.cx - this.width/2;
        this.top = bbox.cy - this.height/2;

        // Store the new width and height of the image
        this.svg.image.attr({
            width: this.width,
            height: this.height,
            x: this.left,
            y: this.top
        });

        // Remove the last resizing transformation effect by the applying a new scaling transformation
        // once the new width, height, x and y attributes of the SVG image have been changed
        this.svg.image.transform("S1R"+(-this.angle));

        // Reset the scaling transformation, because the size of the object
        // is now reflected in the new svg (width, height) attributes
        this.scaleFactorX = 1;
        this.scaleFactorY = 1;

        // Detach the "rotate" event handler
        $doc.off("mousemove touchmove").off("mouseup touchend");

        // Adjust the position and size of the object's grip element before making it visible again
        this.adjustGrip();

        this.setSizeOnPaper();

        // Remove all rotation-related styling and additional effects/elements
        return this.removeTransformFx();
    };

    CmfObject.prototype.stretch = function (x, y, scx, scy, startX, startY, bbox, sDir, limitScaleFactor) {
        var rotation, scale;
        var sx, sy; // Scale factor x & y
        var dx = x - startX;
        var dy = y - startY;
        var a; // Radian
        var xm, ym; // Center of the image without transform
        var rScx, rScy; // scx & scy coordinates after rotation.

        // if stretching in y direction, set dx to 0
        if (['n', 's'].indexOf(sDir) !== -1) {
            dx = 0;
        }

        // if stretching in x direction, set dy to 0
        if (['e', 'w'].indexOf(sDir) !== -1) {
            dy = 0;
        }

        sy = (bbox.height + dy) / bbox.height;
        sx = (bbox.width + dx) / bbox.width;

        // Dragging to north side
        if ('n' === sDir) {
            sy = (bbox.height - dy) / bbox.height;
        }

        // Dragging to west side
        if ('w' === sDir) {
            sx = (bbox.width - dx) / bbox.width;
        }

        if (sx < limitScaleFactor) {
            sx = limitScaleFactor;
        }

        if (sy < limitScaleFactor) {
            sy = limitScaleFactor;
        }

        this.scaleFactorX = sx;
        this.scaleFactorY = sy;

        xm = bbox.x + (bbox.width / 2);
        ym = bbox.y + (bbox.height / 2);
        a  = deg2rad(-this.angle);

        rScx = ((scx - xm) * Math.cos(a)) - ((scy - ym) * Math.sin(a)) + xm;
        rScy = ((scx - xm) * Math.sin(a)) + ((scy - ym) * Math.cos(a)) + ym;

        rotation = "R" + (-this.angle);
        scale = "S" + sx + "," + sy + "," + rScx + "," + rScy;

        this.svg.image.transform(rotation + scale);
    };

    CmfObject.prototype.getData = function(pxPositionCorrection) {
        if (!pxPositionCorrection) {
            pxPositionCorrection = 0;
        }

        var data = {
            type: this.type,
            url: this.url,
            angle: this.angle,
            pxWidth: this.pxWidth,
            pxHeight: this.pxHeight,
            inWidth: this.inWidth,
            inHeight: this.inHeight,
            width: parseInt(this.width, 10),
            height: parseInt(this.height, 10),
            left: parseInt(this.left + pxPositionCorrection, 10),
            top: parseInt(this.top + pxPositionCorrection, 10),
            trueLeft: parseInt(this.cache.dom.grip.style.left, 10) + 2,		// we're adding [borderWidth]px, the width of the grip's border, because the grip is positioned by -[borderWidth]px in regard to the object's actual top & left position
            trueTop: parseInt(this.cache.dom.grip.style.top, 10) + 2,
            zIndex: this.zIndex
        };

        if (this.type === "text") {
            $.extend(data, {
                color: this.color,
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontStyle: this.fontStyle,
                textAlign: this.textAlign,
                textDecoration: this.textDecoration,
                textCurvature: this.textCurvature
            });
        }

        if (this.type !== "image") {
            data.text = this.text;
        }

        return data;
    };


    CmfObject.prototype.getTextStylingData = function() {
        if (this.type !== "text") {
            return;
        }

        return {
            "color": this.color,
            "font-family": this.fontFamily,
            "font-size": this.fontSize,
            "font-weight": this.fontWeight,
            "font-style": this.fontStyle,
            "text-decoration": this.textDecoration,
            "text-align": this.textAlign,
            "text-curvature": this.textCurvature
        };
    };


    CmfObject.prototype.applyTransformations = function() {

        this.svg.image.attr({
            width: this.width,
            height: this.height
        });

        // Reset the translation transformation, because the translation
        // is already reflected in the new (x,y) coordinates
        this.svg.image.transform("T0,0R"+(-this.angle));

        this.adjustGrip();

        this.select();

        return this;
    };

    return CmfObject;

})(jQuery);

var CMF = CMF || {};

CMF.order = (function($, undefined){
    var $doc = $(document);

    /**
     * Quantity (# of icing sheets)
     * @type {Number}
     */
    var qty = 1;

    /**
     * Total price for the current order
     * @type {Number}
     */
    var cost = 0;

    function setCost() {
        /**
         * Expression for calculating total order cost:
         * (qty x (productCost + SUM(optionsCostA))) x SUM(optionsCostB) + SUM(optionsCostC)
         *
         * See client's options config file to understand which fields have type A, B or C cost effect.
         */
        var product = CMF.products.getSelected();
        var optionsCosts = getOptionsCost();

        cost = (qty * (product.price + optionsCosts['A'])) * (1 - optionsCosts['B']) + optionsCosts['C'];
        $('#tpr-amount').html(CMF.config.get('currency','symbol') + ' ' + cost.toFixed(2));   // set the 'order total cost'
    }

    /**
     * Determines the total cost of the order options (e.g. shipping, flavour etc.)
     */
    function getOptionsCost ()
    {
        var costs = {
            'A': 0,
            'B': 0,
            'C': 0
        };

        $(".tpr-customFormField").each(function(){
            var field = $(this);
            var fieldType = field.data("fieldtype");
            var costEffect = field.data("costeffect");
            var value = 0;

            switch (fieldType) {
                case 'select':
                    value = field.find('option:selected').val();
                    break;
                case 'radio':
                    value = field.find('input:checked').val();
                    break;
                case 'checkbox':
                    value = field.find('checkbox').prop('checked') ? field.find('checkbox').val() : 0;
            }

            if (costEffect) {
                costs[costEffect] += parseFloat(value);
            }
        });

        return costs;
    }


    /**
     * Gathers key/value pairs regarding the order options. Typically used within storefronts.
     * Because the value is used within order confirmation emails, the labels are, in fact, used.
     * @returns {{}}
     */
    function collectOrderOptions ()
    {
        var options = {};

        $(".tpr-customFormField").each(function(){
            var field = $(this);
            var fieldType = field.data("fieldtype");
            var fieldName = field.data("fieldname");

            switch (fieldType) {
                case 'select':
                    options[fieldName] = field.find('option:selected').html();
                    break;
                case 'radio':
                    options[fieldName] = field.find('input:checked').next().html();
                    break;
                case 'text':
                    options[fieldName] = field.find('input').val();
                    break;
                case 'checkbox':
                    options[fieldName] = field.find('checkbox').prop('checked') ? 'yes' : 'no';
            }
        });

        return ($.isEmptyObject(options) ? null : options);
    }


    function getOrderData ()
    {
        var product = CMF.products.getSelected();
        var options = collectOrderOptions();
        var output;

        output = {
            designId:     CMF.design.getId(),
            productId:    product.id,
            productName:  product.name,
            productType:  product.type,
            unitPrice:    product.price,
            qty:          qty,
            cost:         cost,
            currency:     CMF.config.get('currency', 'code'),
            shop:         product.shop || {},
            options:      options
        }
        output.designItems = CMF.design.getDesignItems();

        return output;
    }

    function submitHiddenOrderForm (data)
    {
        var form = $('<form/>', {
            action: CMF.config.get('outputURL'),
            method: 'POST'
        });

        var input = $('<input/>', {
            'type': 'hidden',
            'name': 'cmfOrderData',
            'value': JSON.stringify(data)
        });

        form.append(input).hide().appendTo('body').trigger('submit');

        return form;
    }


    /**
     * Submits the order via POST request to the designated URL
     */
    function submit ()
    {
        var orderData;

        if (CMF.design.isEmpty()) {
            CMF.viewport.showLoader('You cannot submit an empty design!', function() {
                CMF.viewport.hideLoader(2500);
            });
            return;
        }

        orderData = getOrderData();
        CMF.design.deactivateAutosave();

        // Save the design and also request its replication within the database.
        // The incoming ID will be the public ID of the replicated design's DB entry.
        CMF.viewport.showLoader('Processing your design...', function(){
            CMF.design.save(function(err, data){
                if (err) {
                    CMF.viewport.changeLoaderText('There was an error saving your design. Please try again.');
                    CMF.viewport.hideLoader();
                    return;
                }

                CMF.design.setId(data.id);
                console.log('topperoo.order.submit: ', orderData);
                CMF.config.executeCustomCallback('topperoo.order.submit', orderData);

                if (CMF.config.get('outputURL') != null) {
                    submitHiddenOrderForm(orderData)
                }
            }, true);
        });
    }

    function attachEventHandlers ()
    {
        $doc.on("input", "#cmf-qtySelector", function() {
            this.value = this.value.replace(/[^0-9]/g,'');  // avoid non-numeric symbols
            qty = parseInt(this.value);
            setCost();
        });

        $doc.on("blur", "#cmf-qtySelector", function() {
            qty = parseInt(this.value);

            if (!qty) {
                qty = 1;
            }

            this.value = qty;
            setCost();
        });

        $doc.on("click", ".tpr-qty-control", function() {
            var gain;
            var operation = $(this).data('op');
            var input = $("#cmf-qtySelector");

            qty = parseInt(input.val());

            switch (operation) {
                case "sub":
                    gain = -1;
                    break;
                case "add":
                default:
                    gain = 1;
            }

            qty += gain;

            if (qty < 1) {
                qty = 1;
            } else if (qty > 999) {
                qty = 999;
            }

            input.val(qty);
            setCost();
        });

        $doc.on("change", ".tpr-customFormField", function() {
            setCost();
        });

        $doc.on("click", ".cmf-submitOrderBtn", function(event) {
            CMF.config.executeCustomCallback('topperoo.order.beforePreview', CMF.design.getId());

            if (typeof _tprcfg != "undefined") {
                if (_tprcfg.data) {
                    if (_tprcfg.data.dl === false) {
                        CMF.config.executeCustomCallback('topperoo.download.denied', event);
                        return;
                    }
                }
            }

            CMF.viewport.changeLoaderText("Loading design preview");
            CMF.viewport.showLoader(function(){
                CMF.design.save(function(){
                    let url = CMF.config.buildURL("/image/preview/" + CMF.design.getId() + "?_=" + Date.now());
                    CMF.viewport.hideLoader();
                    CMF.lightbox.preview(url, '', {templateSelector: '#tpr-designForcePreviewDialog'});
                });
            });
        });

        $doc.on("click", "#tpr-designPreviewConfirmBtn", function(event) {
            $.magnificPopup.close();
            submit();
        });
    }


    function get(name) {
        switch (name) {
            case 'qty':
                return qty;
        }
    }


    return {
        attachEventHandlers: attachEventHandlers,
        setCost: setCost,
        get: get
    };

})(jQuery);

var CMF = CMF || {};

CMF.products = (function($)
{
    var $productsList;

    function buildCache ()
    {
        $productsList = $("#productsSection .product");
    }

    function generate (callback)
    {
        $productsList.each(function(){
            var $product = $(this);
            var $name = $product.find('.name');
            var $description = $product.find('.description');
            var templateData = $product.data('template');
            var template = new CMF.template(templateData, $product.data('id'));

            template.drawThumbnail();

            if ($name.html() == '') {
                $name.html(template.getDefaultName());
            }

            if ($description.html() == '') {
                $description.html(template.getDefaultDescription());
            }
        });

        callback();
    }

    /**
     * Pre-loads all the viewport images for the listed products, plus their associated sample topper images
     */
    function preload(callback)
    {
        var preloadList = [];
        var filepath;
        var sampleUrl;

        if (!callback) {
            callback = function(){};
        }

        $productsList.each(function(){
            $this = $(this);

            filepath = CMF.config.paths.schematics.viewport + $this.attr("data-filename") + ".png";
            preloadList.push(filepath);

            if ($this.attr('data-sample')) {
                sampleUrl = CMF.config.paths.schematics.viewport + $this.attr('data-sample');
                if (preloadList.indexOf(sampleUrl) == -1) {
                    preloadList.push(sampleUrl);
                }
            }
        });

        CMF.utils.preloadImages(preloadList, callback);
    }


    /**
     * Performs the selection of a product from the available list
     */
    function select()
    {
        var $product;
        var sheetHeight;
        var arg = arguments[0];
        var $isRepetitiveSelector = $('#isRepetitiveSelector');
        var selectedObject;
        var template;

        if (typeof arg === 'number') {
            $product = $productsList.eq(arg);
        } else if (typeof arg === 'object' && arg !== null) {  // click event, triggered on the product image; typeof null === 'object'
            $product = $(this).closest('.product');
        } else if (typeof arg === 'string') {
            $productsList.each(function(){
                var $this = $(this);

                if ($this.data('id') === arg) {
                    $product = $this;
                }

                /* Deprecated, remove asap! */
                if ($this.data('oldid') === arg) {
                    $product = $this;
                }
                // ------------------------ //
            });
        } else {
            return false;
        }

        // When $product is undefined, it means that the locally saved design is based
        // on a product that does not exist (anymore), in which case it has to be erased.
        if (!$product) {
            return false;
        }

        CMF.viewport.width = CMF.viewport.resizeViewport($product.data('template').Width, $product.data('template').Height);

        template = new CMF.template($product.data('template'), $product.data('id'));

        $productsList.removeClass('selected');
        $product.addClass('selected');

        /**
         * When the selected product does not have a sample image filename associated,
         * it means that it does not support repeatable design.
         */
        $isRepetitiveSelector.prop('checked', false);    // when selecting a different product, set the isRepetitive flag to false
        CMF.design.markAsRepetitive(false);

        if (template.hasMultipleToppers()) {
            $isRepetitiveSelector.prop('disabled', false);
            $isRepetitiveSelector.closest('.tpr-repetitiveDesignToggleWrp').show();
        } else {
            $isRepetitiveSelector.prop('disabled', true);
            $isRepetitiveSelector.closest('.tpr-repetitiveDesignToggleWrp').hide();
        }

        sheetHeight = template._getSheetHeightOnScreen();
        CMF.viewport.changeSheet(template, sheetHeight);
        CMF.viewport.setPixelSize(true);
        CMF.design.setProduct($product.attr('data-id'));

        selectedObject = CMF.design.getSelectedObject();
        if (selectedObject !== null) {
            selectedObject.setSizeOnPaper();
        }

        CMF.order.setCost();

        return true;
    }


    function getSelected (getJqueryfied)
    {
        var $product = $productsList.filter('.selected').eq(0);

        if (getJqueryfied === true) {
            return $product;
        }

        var data = {
            id:                $product.attr('data-id'),
            name:              $product.attr('data-name'),
            type:              $product.attr('data-type'),
            filepath:          CMF.config.paths.schematics.viewport + $product.attr('data-filename') + '.png',
            height:            $product.attr('data-height'),
            sample:            CMF.config.paths.schematics.viewport + $product.attr('data-sample'),
            sampleAspectRatio: $product.attr('data-sampleaspectratio'),
            price:             parseFloat($product.attr('data-price')),
            template: $product.data('template'),
            shop:              {}
        };
        var key;

        for (var attribute in $product.data()) {
            if (attribute.indexOf('shop') === 0) {
                key = attribute.replace(/shop/, '');
                key = key.charAt(0).toLowerCase() + key.slice(1);
                data.shop[key] = $product.data(attribute);
            }
        }

        return data;
    }


    return {
        buildCache: buildCache,
        preload: preload,
        select: select,
        getSelected: getSelected,
        generate: generate
    };

})(jQuery);

var CMF = CMF || {};

CMF.storage = (function ($){

    var data = { shops: [] };

    /**
     *
     */
    function storeData ()
    {
        return window.localStorage.setItem("topperoo", JSON.stringify(data));
    }

    /**
     * Reads Topperoo-related data from the browser's local
     * storage and saves it within the current module.
     */
    function readDataIn ()
    {
        var localData = JSON.parse(window.localStorage.getItem("topperoo"));

        if (!localData) {
            return null;
        }

        data = localData;
    }

    /**
     * Appends a new item to the locally stored list of shops.
     *
     * @param designId
     */
    function addShopData (designId)
    {
        data.shops.push({
            id: CMF.config.getClientId(),
            design: {
                id: designId
            }
        });
    }

    /**
     * Attempts to find data about the existing application
     * instance (i.e. "shop") within the module's `data` object
     * and returns it if it exists.
     *
     * @returns {*}
     */
    function getCurrentShop ()
    {
        var shopId = CMF.config.getClientId();
        var selection = null;

        data.shops.forEach(function (shop){
            if (shop.id === shopId) {
                selection = shop;
            }
        });

        return selection;
    }

    /**
     *
     * @param designId
     */
    function setDesignId (designId)
    {
        var shop;

        readDataIn();
        shop = getCurrentShop();

        if (!shop) {
            addShopData(designId);
        } else {
            shop.design.id = designId;
        }

        storeData();

        return;
    }

    /**
     * Attempts to retrieve the design ID associated
     * with the current application instance (i.e. `shop`).
     *
     * @returns {*}
     */
    function getDesignId ()
    {
        var designId = null;
        var shopId = CMF.config.getClientId();

        readDataIn();
        data.shops.forEach(function (shop){
            if (shop.id === shopId) {
                designId = shop.design.id;
            }
        });

        return designId;
    }

    /**
     * Removes the design ID associated with the
     * current shop, along with the shop entry itself,
     * from the local storage.
     */
    function eraseDesignId ()
    {
        var shopId = CMF.config.getClientId();
        var index = null;

        readDataIn();

        data.shops.forEach(function (shop, i){
            if (shop.id === shopId) {
                index = i;
            }
        });

        if (index == null) {
            console.log('Shop ' + shopId + ' does not exist locally');
            return;
        }

        data.shops.splice(index, 1);
        storeData();

        return;
    }


    return {
        setDesignId: setDesignId,
        getDesignId: getDesignId,
        eraseDesignId: eraseDesignId
    };
})(jQuery);
var CMF = CMF || {};

CMF.utils = (function($, undefined){

    /**
     * Generates the URL to a text image object, based on the provided text and styling options.
     */
    function getTextObjectUrl(text, styling)
    {
        var baseUrl = CMF.config.buildURL('/text/');
        var params = '';

        // Encode the actual text
        text = B64.encode(text).replace(/\//g,"_");     // replace any slashes to prevent routing problems on the back-end
        text = encodeURIComponent(text);

        // Encode the styling parameters
        for (var property in styling) {
            if (styling.hasOwnProperty(property)) {
                params += property + "=" + styling[property] + ",";
            }
        }
        params = params.slice(0,-1);
        params = B64.encode(params);
        params = params.replace(/\//g,"_");     // replace slashes from the base64 encoded string to prevent incorrect routing
        params = encodeURIComponent(params);

        return (baseUrl + text + "/params/" + params);
    }

    function getB64EncodedArray (arr)
    {
        var str = '';

        if (!arr || !arr.length) {
            return '';
        }

        arr.forEach(function(item){
             str += item +',';
        });

        str = str.slice(0,-1);  // removes last comma
        str = B64.encode(str).replace(/\//g,"_");     // replace any slashes to prevent routing problems on the back-end
        str = encodeURIComponent(str);

        return str;
    }


    /**
     * Generates the URL to a QR code image, built with Google Charts
     */
    function getQrCodeUrl(text, size) {

        var url = "https://chart.googleapis.com/chart?cht=qr&chs=";
        var encoding = "UTF-8";
        var correction = "L";
        var margin = 0;

        if (!size) {
            size = 546;
        }

        url += size+"x"+size + "&chl=" + encodeURIComponent(text) + "&choe=" + encoding + "&chld=" + correction + "|" + margin;

        return url;
    }


    /**
     * Generic image preloader
     */
    function preloadImages(filepaths, callback) {

        var image;
        var counter = 0;
        var size;

        if (typeof filepaths === "string") {
            filepaths = [filepaths];
        }

        function onLoad() {
            counter++;
            if (counter === filepaths.length) {
                callback(null);
            }
        }

        function onError() {
            callback(new Error("Could not find image "+this.src));
        }

        for (var i=0; i<filepaths.length; i++) {
            image = new Image();
            image.onload = onLoad;
            image.onerror = onError;
            image.src = filepaths[i];
        }
    }


    function preloadOneImage(url, callback, getSize) {
        var image = new Image();
        var data = {};

        if (!getSize) {
            getSize = true;
        }

        image.onload = function() {
            if (getSize) {
                data.size = getImageSize(this);
            }

            callback(null, data);
        };

        image.onerror = function () {
            callback(new Error("Could not GET image at " + this.src), null);
        };
        image.src = url;
    }


    /**
     * Retrieves the value of the URL parameter by name.
     * @param name
     * @returns {string}
     */
    function getURLParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
    }


    function ImageRequest (src)
    {
        this.src = src;
        this.error = false;
        return this;
    }


    ImageRequest.prototype.execute = function (callback, retryAttempts)
    {
        var request = this;
        var image = new Image();
        var retryDelay = 3000;

        image.onload = function ()
        {
            request.error = false;
            callback(request);
        };

        image.onerror = function (error)
        {
            request.error = error;

            if (retryAttempts) {
                setTimeout(function(){
                    request.execute(callback, --retryAttempts);
                }, retryDelay);
                return;
            }

            callback(request);
        };

        image.src = this.src;
    };


    function preloadMultipleImages (paths, callback) {
        var counter = 0;
        var requests = [];
        var retryAttempts = 3;

        paths.forEach(function(path){
            var req = new ImageRequest(path);
            requests.push(req);
            req.execute(function() {
                counter++;
                if (counter != paths.length) {
                    return;
                }
                callback(requests);
            }, retryAttempts);    // should loading the image fail, retry loading it a number of times
        });

    }


    /**
     * Appends an image to the DOM to compute its size
     * @param {Object} image
     * @return {Object}
     */
    function getImageSize(image) {
        var $image = $(image);
        var size = {};

        $image.css({
            "position":"absolute",
            "visibility":"hidden"
        });
        $image.prependTo("body");
        size.width = $image.width();
        size.height = $image.height();
        $image.remove();

        return size;
    }


    return {
        getTextObjectUrl:       getTextObjectUrl,
        getQrCodeUrl:           getQrCodeUrl,
        getURLParameterByName:  getURLParameterByName,
        preloadOneImage:        preloadOneImage,
        preloadImages:          preloadImages,
        preloadMultipleImages:  preloadMultipleImages,
        getB64EncodedArray: getB64EncodedArray
    };

})(jQuery);
var CMF = CMF || {};

CMF.viewport = (function($, undefined){

    var finalReturn = {};

    var $viewport;
    var $sheet;
    var $loader;

    var baseWidth = 462;
    var width;
    var height;
    var offset;

    /**
     * The size of one viewport pixel (on screen) in inches/centimeters
     */
    var pixelSize = {
        'in': 0,
        'cm': 0
    };

    /**
     * An SVG canvas covering the entire viewport, positioned above the objects' layer
     * @type {Object}
     */
    var canvas;
    var circle;

    var isMaxSize = true;

    function buildCache() {
        $viewport = $(".viewport");
        $sheet = $(".sheet");
        $loader = $viewport.children(".loader").eq(0);
        width  = $viewport.width();
        height = $viewport.height();
        offset = $viewport.offset();
        canvas = Raphael("viewportCanvas", width, height);
    }

    function recalculateOffset ()
    {
        offset = $viewport.offset();
    }


    /**
     * Stores the size of a viewport pixel,
     * in inches and centimeters, retrieved
     * from the selected product sheet or topper.
     *
     * @param isSheet Boolean Is the viewport a representation of a sheet (true) or a topper (false)?
     */
    function setPixelSize (isSheet)
    {
        var product = CMF.products.getSelected();
        var template = new CMF.template(product.template, product.id);

        if (isSheet) {
            pixelSize = {
                'in': template.getPixelSize('sheet', 'in'),
                'cm': template.getPixelSize('sheet', 'cm')
            };
        } else {
            pixelSize = {
                'in': template.getPixelSize('topper', 'in'),
                'cm': template.getPixelSize('topper', 'cm')
            };
        }

        return pixelSize;
    }


    function getPixelSize ()
    {
        return pixelSize['in'];
    }


    function get(prop) {
        switch (prop) {
            case 'width':
                return width;
            case 'height':
                return height;
            case 'offset':
                return offset;
            default:
                return null;
        }
    }


    // Displays the loader animation on top of the application viewport
    function showLoader() {

        var duration = 300;
        var arg = arguments;

        if (typeof arg[0] === 'function') {
            $loader.fadeIn(duration, arg[0]); // callback function
        } else if (typeof arg[0] === 'string') {  // loader text
            changeLoaderText(arg[0]);
            if (typeof arg[1] === 'function') {
                $loader.fadeIn(duration, arg[1]); // callback function
                return;
            }
            $loader.fadeIn(duration);
        }
    }


    /**
     * Hides the loader on top of the viewport and may execute a callback function at the end of the animation;
     * @param {number|function} [optional]  Either represents the delay (ms) with which the callback is executed, or the callback itself
     * @param {function} callback
     */
    function hideLoader() {

        var animationDuration = 300;
        var delay;
        var callback;
        var timeout;

        if (arguments.length === 0) {
            $loader.fadeOut(animationDuration);
            return;
        }

        if (arguments.length === 1) {
            if (typeof arguments[0] === "function") {
                callback = arguments[0];
                $loader.fadeOut(animationDuration, callback);
                return;
            }

            if (typeof arguments[0] === "number") {
                delay = arguments[0];
                timeout = window.setTimeout(function(){
                    $loader.fadeOut(animationDuration);
                    window.clearTimeout(timeout);
                }, delay);
                return;
            }
        }

        if (arguments.length === 2) {
            if (typeof arguments[0] === "number" && typeof arguments[1] === "function") {
                delay = arguments[0];
                callback = arguments[1];
                timeout = window.setTimeout(function(){
                    $loader.fadeOut(animationDuration, callback);
                    window.clearTimeout(timeout);
                }, delay);
            }
        }

        return;
    }


    /**
     * Changes the message displayed within the viewport loader
     */
    function changeLoaderText(message) {
        var messageWrapper = $loader.find(".message");
        messageWrapper.html(message);

        return messageWrapper;
    }


    /**
     * Adds a circle that borders a rotating design object, to the viewport canvas.
     * @param {Object} center Coordinates of the circle center, in relation to the canvas
     * @param {Number} radius Circle radius, expressed in pixels
     * @param {Object} data   Styling data for the circle
     */
    function addRotationOutline(center, radius, data) {
        if (!data) {
            data = {
                "stroke": "#000",
                "stroke-width" : 1
            };
        }

        circle = canvas.circle(center.x, center.y, radius);
        circle.attr(data);
    }


    /**
     * Removes the objects rotation circle, if any exists on the viewport canvas.
     */
    function removeRotationOutline() {
        if (circle) {
            circle.remove();
        }

        circle = null;
    }


    /**
     * Resizes all the viewport canvases to fit the height of the viewport.
     * This is useful when resizing the viewport, otherwise the canvases would not resize along with it.
     */
    function resizeSvgCanvases(h) {
        height = h;
        $viewport.find("svg").css("height",h);
    }

    function switchToSingleTopper (template, height)
    {
        $sheet.stop(true, true).animate({opacity: 0}, 200, 'swing', function () {
            $sheet.empty();
            template.drawSingleTopper();
            $viewport.animate({ height: height }, 200);  // change the size of the sheet
            $sheet.animate({opacity: 1}, 200);
            resizeSvgCanvases(height);
        });
    }

    function changeSheet (template, height, animate) {
        var animationDuration = 200;    // milliseconds

        if (animate === false) {
            animationDuration = 0;
        }

        $sheet.stop(true, true).animate({opacity: 0}, animationDuration, 'swing', function () {
            $sheet.empty();
            template.drawViewport();
            $viewport.animate({ height: height }, animationDuration);  // change the size of the sheet
            $sheet.animate({opacity: 1}, animationDuration);
            resizeSvgCanvases(height);
        });
    }

    function resizeViewport(templateWidth, templateHeight) {
        var $viewport = $(".viewport");
        var $viewportWrapper = $(".viewportWrapper");

        if ($viewportWrapper.width() >= 462) {
            finalReturn['isMaxSize'] = true;

            return baseWidth;
        } else {
            var widthRatio = $viewportWrapper.width() / templateWidth;
            var heightRatio = $viewportWrapper.height() / templateHeight;
            var ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

            width = templateWidth * ratio;
            $viewport.width(width);

            finalReturn['isMaxSize'] = false;

            return width;
        }
    }

    $.extend(finalReturn, {
        // properties
        width: width,
        height: height,
        offset: offset,
        baseWidth: baseWidth,
        isMaxSize: isMaxSize,

        // methods
        get: get,
        buildCache: buildCache,
        showLoader: showLoader,
        hideLoader: hideLoader,
        changeLoaderText: changeLoaderText,
        addRotationOutline: addRotationOutline,
        removeRotationOutline: removeRotationOutline,
        changeSheet: changeSheet,
        switchToSingleTopper: switchToSingleTopper,
        setPixelSize: setPixelSize,
        getPixelSize: getPixelSize,
        resizeViewport: resizeViewport,
        recalculateOffset: recalculateOffset
    });

    return finalReturn;

})(jQuery);

(function(){
    // CMF.config.getInstanceData(function(error){
    //     if (error) {
    //         console.log(error);
    //         return;
    //     }

        CMF.dashboard.load(function(){
            CMF.dashboard.init(function(){
                CMF.dashboard.attachEventHandlers();
                CMF.lightbox.attachEventHandlers();
                CMF.order.attachEventHandlers();
                CMF.order.setCost();
                CMF.dashboard.loadCfgData();
                CMF.dashboard.activate(function(){
                    CMF.design.initAutosave();
                });
            });
        });
    // });
})();