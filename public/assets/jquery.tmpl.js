/*
 * jQuery Templating Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function(e,t){function h(t,n,r,i){var u={data:i||(n?n.data:{}),_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:w,nest:E,wrap:S,html:x,update:T};return t&&e.extend(u,t,{nodes:[],parent:n}),r&&(u.tmpl=r,u._ctnt=u._ctnt||u.tmpl(e,u),u.key=++f,(c.length?o:s)[f]=u),u}function p(t,n,i){var s,o=i?e.map(i,function(e){return typeof e=="string"?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+r+'="'+t.key+'" $2'):e:p(e,t,e._ctnt)}):t;return n?o:(o=o.join(""),o.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,n,r,i){s=e(r).get(),b(s),n&&(s=d(n).concat(s)),i&&(s=s.concat(d(i)))}),s?s:d(o))}function d(t){var n=document.createElement("div");return n.innerHTML=t,e.makeArray(n.childNodes)}function v(t){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+e.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,n,r,i,s,o,u){var a=e.tmpl.tag[r],f,l,c;if(!a)throw"Template command not found: "+r;return f=a._default||[],o&&!/\w$/.test(s)&&(s+=o,o=""),s?(s=g(s),u=u?","+g(u)+")":o?")":"",l=o?s.indexOf(".")>-1?s+o:"("+s+").call($item"+u:s,c=o?l:"(typeof("+s+")==='function'?("+s+").call($item):("+s+"))"):c=l=f.$1||"null",i=g(i),"');"+a[n?"close":"open"].split("$notnull_1").join(s?"typeof("+s+")!=='undefined' && ("+s+")!=null":"true").split("$1a").join(c).split("$1").join(l).split("$2").join(i?i.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(e,t,n,r){return r=r?","+r+")":n?")":"",r?"("+t+").call($item"+r:e}):f.$2||"")+"_.push('"})+"');}return _;")}function m(t,n){t._wrap=p(t,!0,e.isArray(n)?n:[i.test(n)?n:e(n).html()]).join("")}function g(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function y(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function b(t){function v(t){function v(e){e+=n,p=a[e]=a[e]||h(p,s[p.parent.key+n]||p.parent,null,!0)}var i,u=t,c,p,d;if(d=t.getAttribute(r)){while(u.parentNode&&(u=u.parentNode).nodeType===1&&!(i=u.getAttribute(r)));i!==d&&(u=u.parentNode?u.nodeType===11?0:u.getAttribute(r)||0:0,(p=s[d])||(p=o[d],p=h(p,s[u]||o[u],null,!0),p.key=++f,s[f]=p),l&&v(d)),t.removeAttribute(r)}else l&&(p=e.data(t,"tmplItem"))&&(v(p.key),s[p.key]=p,u=e.data(t.parentNode,"tmplItem"),u=u?u.key:0);if(p){c=p;while(c&&c.key!=u)c.nodes.push(t),c=c.parent;delete p._ctnt,delete p._wrap,e.data(t,"tmplItem",p)}}var n="_"+l,i,u,a={},c,p,d;for(c=0,p=t.length;c<p;c++){if((i=t[c]).nodeType!==1)continue;u=i.getElementsByTagName("*");for(d=u.length-1;d>=0;d--)v(u[d]);v(i)}}function w(e,t,n,r){if(!e)return c.pop();c.push({_:e,tmpl:t,item:this,data:n,options:r})}function E(t,n,r){return e.tmpl(e.template(t),n,r,this)}function S(t,n){var r=t.options||{};return r.wrapped=n,e.tmpl(e.template(t.tmpl),t.data,r,t.item)}function x(t,n){var r=this._wrap;return e.map(e(e.isArray(r)?r.join(""):r).filter(t||"*"),function(e){return n?e.innerText||e.textContent:e.outerHTML||y(e)})}function T(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]),e(t).remove()}var n=e.fn.domManip,r="_tmplitem",i=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,s={},o={},u,a={key:0,data:{}},f=0,l=0,c=[];e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(r){var i=[],o=e(r),a,f,c,h,p=this.length===1&&this[0].parentNode;u=s||{};if(p&&p.nodeType===11&&p.childNodes.length===1&&o.length===1)o[n](this[0]),i=this;else{for(f=0,c=o.length;f<c;f++)l=f,a=(f>0?this.clone(!0):this).get(),e.fn[n].apply(e(o[f]),a),i=i.concat(a);l=0,i=this.pushStack(i,t,o.selector)}return h=u,u=null,e.tmpl.complete(h),i}}),e.fn.extend({tmpl:function(t,n,r){return e.tmpl(this[0],t,n,r)},tmplItem:function(){return e.tmplItem(this[0])},template:function(t){return e.template(t,this[0])},domManip:function(t,r,i,o){if(t[0]&&t[0].nodeType){var a=e.makeArray(arguments),f=t.length,c=0,h;while(c<f&&!(h=e.data(t[c++],"tmplItem")));f>1&&(a[0]=[e.makeArray(t)]),h&&l&&(a[2]=function(t){e.tmpl.afterManip(this,t,i)}),n.apply(this,a)}else n.apply(this,arguments);return l=0,u||e.tmpl.complete(s),this}}),e.extend({tmpl:function(t,n,r,i){var u,f=!i;if(f)i=a,t=e.template[t]||e.template(null,t),o={};else if(!t)return t=i.tmpl,s[i.key]=i,i.nodes=[],i.wrapped&&m(i,i.wrapped),e(p(i,null,i.tmpl(e,i)));return t?(typeof n=="function"&&(n=n.call(i||{})),r&&r.wrapped&&m(r,r.wrapped),u=e.isArray(n)?e.map(n,function(e){return e?h(r,i,t,e):null}):[h(r,i,t,n)],f?e(p(i,null,u)):u):[]},tmplItem:function(t){var n;t instanceof e&&(t=t[0]);while(t&&t.nodeType===1&&!(n=e.data(t,"tmplItem"))&&(t=t.parentNode));return n||a},template:function(t,n){return n?(typeof n=="string"?n=v(n):n instanceof e&&(n=n[0]||{}),n.nodeType&&(n=e.data(n,"tmpl")||e.data(n,"tmpl",v(n.innerHTML))),typeof t=="string"?e.template[t]=n:n):t?typeof t!="string"?e.template(null,t):e.template[t]||e.template(null,i.test(t)?t:e(t)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(e){s={}},afterManip:function(n,r,i){var s=r.nodeType===11?e.makeArray(r.childNodes):r.nodeType===1?[r]:[];i.call(n,r),b(s),l++}})})(jQuery);