var e={},t=document.createElement("template"),r=/(\$_h\[\d+\])/g;function n(e,t){return t.toUpperCase()}function a(e,t){var n=e.match(r),a=JSON.stringify(e);if(null!=n){if(n[0]===e)return e;a=a.replace(r,'"'+t+"$1"+t+'"').replace(/"[+,]"/g,""),","===t&&(a="["+a+"]")}return a}export default function(r){return(e[r]||(e[r]=function(e){for(var r=e[0],i=1;i<e.length;)r+="$_h["+i+"]"+e[i++];return t.innerHTML=r.replace(/<(\/?)(\$_h\[\d+\])/g,"<$1c c@=$2").replace(/<([\w:-]+)(\s.*?)?\/>/gi,"<$1$2></$1>").trim(),Function("h","$_h","return "+function e(t){if(1!==t.nodeType)return 3===t.nodeType&&t.data?a(t.data,","):"null";for(var r='"'+t.localName+'"',i="{",u="",c="}",l=0;l<t.attributes.length;l++){var o=t.attributes[l],f=o.name,s=o.value;"c@"!=f?"..."!==f.substring(0,3)?(i+=u+'"'+f.replace(/:(\w)/g,n)+'":'+(!s||a(s,"+")),u=","):(c="})",i="Object.assign("+i+"},"+f.substring(3)+",{",u=""):r=s}i="h("+r+","+i+c;for(var g=t.firstChild;g;)i+=","+e(g),g=g.nextSibling;return i+")"}((t.content||t).firstChild))}(r)))(this,arguments)};