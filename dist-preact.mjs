var e={},t=[],n=[];function r(r,o){var i,a,l,s,p=n;for(s=arguments.length;s-- >2;)t.push(arguments[s]);for(o&&null!=o.children&&(t.length||t.push(o.children),delete o.children);t.length;)if((a=t.pop())&&void 0!==a.pop)for(s=a.length;s--;)t.push(a[s]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&i?p[p.length-1]+=a:p===n?p=[a]:p.push(a),i=l;var c=new function(){};return c.nodeName=r,c.children=p,c.attributes=null==o?void 0:o,c.key=null==o?void 0:o.key,void 0!==e.vnode&&e.vnode(c),c}function o(e,t){for(var n in t)e[n]=t[n];return e}var i="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,l=[];function s(t){!t._dirty&&(t._dirty=!0)&&1==l.push(t)&&(e.debounceRendering||i)(p)}function p(){var e,t=l;for(l=[];e=t.pop();)e._dirty&&T(e)}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===a.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,v,l):e.removeEventListener(t,v,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function v(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var _=[],m=0,h=!1,b=!1;function y(){for(var t;t=_.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function g(e,t,n,r,o,i){m++||(h=null!=o&&void 0!==o.ownerSVGElement,b=null!=e&&!("__preactattr_"in e));var a=C(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--m||(b=!1,i||y()),a}function C(e,t,n,r,o){var i=e,a=h;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0))),i.__preactattr_=!0,i;var l,s,p=t.nodeName;if("function"==typeof p)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,l=o&&e._componentConstructor===t.nodeName,s=l,p=u(t);for(;o&&!s&&(o=o._parentComponent);)s=o.constructor===t.nodeName;o&&s&&(!r||o._component)?(U(o,p,3,n,r),e=o.base):(i&&!l&&(L(i),e=a=null),o=k(t.nodeName,p,n),e&&!o.nextBase&&(o.nextBase=e,a=null),U(o,p,1,n,r),e=o.base,a&&e!==a&&(a._component=null,x(a,!1)));return e}(e,t,n,r);if(h="svg"===p||"foreignObject"!==p&&h,p=String(p),(!e||!c(e,p))&&(l=p,(s=h?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=s,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0)}var v=i.firstChild,_=i.__preactattr_,m=t.children;if(null==_){_=i.__preactattr_={};for(var y=i.attributes,g=y.length;g--;)_[y[g].name]=y[g].value}return!b&&m&&1===m.length&&"string"==typeof m[0]&&null!=v&&void 0!==v.splitText&&null==v.nextSibling?v.nodeValue!=m[0]&&(v.nodeValue=m[0]):(m&&m.length||null!=v)&&function(e,t,n,r,o){var i,a,l,s,p,u=e.childNodes,d=[],v={},_=0,m=0,h=u.length,b=0,y=t?t.length:0;if(0!==h)for(var g=0;g<h;g++){var N=u[g],w=N.__preactattr_,k=y&&w?N._component?N._component.__key:w.key:null;null!=k?(_++,v[k]=N):(w||(void 0!==N.splitText?!o||N.nodeValue.trim():o))&&(d[b++]=N)}if(0!==y)for(var g=0;g<y;g++){p=null;var k=(s=t[g]).key;if(null!=k)_&&void 0!==v[k]&&(p=v[k],v[k]=void 0,_--);else if(!p&&m<b)for(i=m;i<b;i++)if(void 0!==d[i]&&(S=a=d[i],T=o,"string"==typeof(U=s)||"number"==typeof U?void 0!==S.splitText:"string"==typeof U.nodeName?!S._componentConstructor&&c(S,U.nodeName):T||S._componentConstructor===U.nodeName)){p=a,d[i]=void 0,i===b-1&&b--,i===m&&m++;break}p=C(p,s,n,r),l=u[g],p&&p!==e&&p!==l&&(null==l?e.appendChild(p):p===l.nextSibling?f(l):e.insertBefore(p,l))}var S,U,T;if(_)for(var g in v)void 0!==v[g]&&x(v[g],!1);for(;m<=b;)void 0!==(p=d[b--])&&x(p,!1)}(i,m,n,r,b||null!=_.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||d(e,r,n[r],n[r]=void 0,h);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||d(e,r,n[r],n[r]=t[r],h)}(i,t.attributes,_),h=a,i}function x(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),N(e))}function N(e){for(e=e.lastChild;e;){var t=e.previousSibling;x(e,!0),e=t}}var w={};function k(e,t,n){var r,o=w[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),$.call(r,t,n)):((r=new $(t,n)).constructor=e,r.render=S),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function S(e,t,n){return this.constructor(e,n)}function U(t,n,r,o,i){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==r&&(1!==r&&!1===e.syncComponentUpdates&&t.base?s(t):T(t,1,i)),t.__ref&&t.__ref(t))}function T(t,n,r,i){if(!t._disable){var a,l,s,p=t.props,c=t.state,f=t.context,d=t.prevProps||p,v=t.prevState||c,h=t.prevContext||f,b=t.base,C=t.nextBase,N=b||C,w=t._component,S=!1;if(b&&(t.props=d,t.state=v,t.context=h,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(p,c,f)?S=!0:t.componentWillUpdate&&t.componentWillUpdate(p,c,f),t.props=p,t.state=c,t.context=f),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!S){a=t.render(p,c,f),t.getChildContext&&(f=o(o({},f),t.getChildContext()));var $,M,B=a&&a.nodeName;if("function"==typeof B){var P=u(a);(l=w)&&l.constructor===B&&P.key==l.__key?U(l,P,1,f,!1):($=l,t._component=l=k(B,P,f),l.nextBase=l.nextBase||C,l._parentComponent=t,U(l,P,0,f,!1),T(l,1,r,!0)),M=l.base}else s=N,($=w)&&(s=t._component=null),(N||1===n)&&(s&&(s._component=null),M=g(s,a,f,r||!b,N&&N.parentNode,!0));if(N&&M!==N&&l!==w){var W=N.parentNode;W&&M!==W&&(W.replaceChild(M,N),$||(N._component=null,x(N,!1)))}if($&&L($),t.base=M,M&&!i){for(var E=t,V=t;V=V._parentComponent;)(E=V).base=M;M._component=E,M._componentConstructor=E.constructor}}if(!b||r?_.unshift(t):S||(t.componentDidUpdate&&t.componentDidUpdate(d,v,h),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);m||i||y()}}function L(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var r=t._component;r?L(r):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,f(n),function(e){var t=e.constructor.name;(w[t]||(w[t]=[])).push(e)}(t),N(n)),t.__ref&&t.__ref(null)}function $(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}o($.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),T(this,2)},render:function(){}});var M={},B=document.createElement("template"),P=/(\$_h\[\d+\])/g;function W(e,t){return t.toUpperCase()}function E(e,t){var n=e.match(P),r=JSON.stringify(e);if(null!=n){if(n[0]===e)return e;r=r.replace(P,'"'+t+"$1"+t+'"').replace(/"[+,]"/g,""),","===t&&(r="["+r+"]")}return r}function V(e,t){!function(e,t,n){g(n,e,{},!1,t,!1)}(e,t,t.firstElementChild)}var A=function(e){return(M[e]||(M[e]=function(e){for(var t=e[0],n=1;n<e.length;)t+="$_h["+n+"]"+e[n++];return B.innerHTML=t.replace(/<(\/?)(\$_h\[\d+\])/g,"<$1c c@=$2").replace(/<([\w:-]+)(\s.*?)?\/>/gi,"<$1$2></$1>").trim(),Function("h","$_h","return "+function e(t){if(1!==t.nodeType)return 3===t.nodeType&&t.data?E(t.data,","):"null";for(var n='"'+t.localName+'"',r="{",o="",i="}",a=0;a<t.attributes.length;a++){var l=t.attributes[a],s=l.name,p=l.value;"c@"!=s?"..."!==s.substring(0,3)?(r+=o+'"'+s.replace(/:(\w)/g,W)+'":'+(!p||E(p,"+")),o=","):(i="})",r="Object.assign("+r+"},"+s.substring(3)+",{",o=""):n=p}r="h("+n+","+r+i;for(var c=t.firstChild;c;)r+=","+e(c),c=c.nextSibling;return r+")"}((B.content||B).firstChild))}(e)))(this,arguments)}.bind(r);export{r as h,$ as Component,V as render,A as html};