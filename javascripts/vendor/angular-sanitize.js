(function(e,t){"use strict";function r(){this.$get=["$$sanitizeUri",function(e){return function(t){var r=[];return s(t,c(r,function(t,r){return!/^unsafe/.test(e(t,r))})),r.join("")}}]}function n(e){var r=[],n=c(r,t.noop);return n.chars(e),r.join("")}function a(e){var t,r={},n=e.split(",");for(t=0;n.length>t;t++)r[n[t]]=!0;return r}function s(e,r){function n(e,n,s,o){if(n=t.lowercase(n),z[n])for(;v.last()&&y[v.last()];)a("",v.last());k[n]&&v.last()==n&&a("",n),o=w[n]||!!o,o||v.push(n);var c={};s.replace(f,function(e,t,r,n,a){var s=r||n||a||"";c[t]=i(s)}),r.start&&r.start(n,c,o)}function a(e,n){var a,s=0;if(n=t.lowercase(n))for(s=v.length-1;s>=0&&v[s]!=n;s--);if(s>=0){for(a=v.length-1;a>=s;a--)r.end&&r.end(v[a]);v.length=s}}var s,o,c,v=[],x=e;for(v.last=function(){return v[v.length-1]};e;){if(o=!0,v.last()&&E[v.last()])e=e.replace(new RegExp("(.*)<\\s*\\/\\s*"+v.last()+"[^>]*>","i"),function(e,t){return t=t.replace(d,"$1").replace(b,"$1"),r.chars&&r.chars(i(t)),""}),a("",v.last());else if(0===e.indexOf("<!--")?(s=e.indexOf("--",4),s>=0&&e.lastIndexOf("-->",s)===s&&(r.comment&&r.comment(e.substring(4,s)),e=e.substring(s+3),o=!1)):m.test(e)?(c=e.match(m),c&&(e=e.replace(c[0],""),o=!1)):g.test(e)?(c=e.match(p),c&&(e=e.substring(c[0].length),c[0].replace(p,a),o=!1)):h.test(e)&&(c=e.match(u),c&&(e=e.substring(c[0].length),c[0].replace(u,n),o=!1)),o){s=e.indexOf("<");var $=0>s?e:e.substring(0,s);e=0>s?"":e.substring(s),r.chars&&r.chars(i($))}if(e==x)throw l("badparse","The sanitizer was unable to parse the following block of html: {0}",e);x=e}a()}function i(e){if(!e)return"";var t=/^(\s*)([\s\S]*?)(\s*)$/,r=t.exec(e);return r[0]="",r[2]&&(A.innerHTML=r[2].replace(/</g,"&lt;"),r[2]=A.innerText||A.textContent),r.join("")}function o(e){return e.replace(/&/g,"&amp;").replace(v,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c(e,r){var n=!1,a=t.bind(e,e.push);return{start:function(e,s,i){e=t.lowercase(e),!n&&E[e]&&(n=e),n||O[e]!==!0||(a("<"),a(e),t.forEach(s,function(n,s){var i=t.lowercase(s),c="img"===e&&"src"===i||"background"===i;j[i]!==!0||T[i]===!0&&!r(n,c)||(a(" "),a(s),a('="'),a(o(n)),a('"'))}),a(i?"/>":">"))},end:function(e){e=t.lowercase(e),n||O[e]!==!0||(a("</"),a(e),a(">")),e==n&&(n=!1)},chars:function(e){n||a(o(e))}}}var l=t.$$minErr("$sanitize"),u=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,p=/^<\s*\/\s*([\w:-]+)[^>]*>/,f=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,h=/^</,g=/^<\s*\//,d=/<!--(.*?)-->/g,m=/<!DOCTYPE([^>]*?)>/i,b=/<!\[CDATA\[(.*?)]]>/g,v=/([^\#-~| |!])/g,w=a("area,br,col,hr,img,wbr"),x=a("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),$=a("rp,rt"),k=t.extend({},$,x),z=t.extend({},x,a("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),y=t.extend({},$,a("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),E=a("script,style"),O=t.extend({},w,z,y,k),T=a("background,cite,href,longdesc,src,usemap"),j=t.extend({},T,a("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),A=document.createElement("pre");t.module("ngSanitize",[]).provider("$sanitize",r),t.module("ngSanitize").filter("linky",["$sanitize",function(e){var r=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,a=/^mailto:/;return function(s,i){function o(e){e&&h.push(n(e))}function c(e,r){h.push("<a "),t.isDefined(i)&&(h.push('target="'),h.push(i),h.push('" ')),h.push('href="'),h.push(e),h.push('">'),o(r),h.push("</a>")}if(!s)return s;for(var l,u,p,f=s,h=[];l=f.match(r);)u=l[0],l[2]==l[3]&&(u="mailto:"+u),p=l.index,o(f.substr(0,p)),c(u,l[0].replace(a,"")),f=f.substring(p+l[0].length);return o(f),e(h.join(""))}}])})(window,window.angular);