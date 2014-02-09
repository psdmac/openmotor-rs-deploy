(function(n,t,a){"use strict";t.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(e,i){var r=t.noop,o=t.forEach,s=i.$$selectors,u=1,l="$$ngAnimateState",f="ng-animate",d={running:!0};e.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(n,a,e,i,c,v){function m(n){if(n){var t=[],i={},r=n.substr(1).split(".");(e.transitions||e.animations)&&r.push("");for(var o=0;r.length>o;o++){var u=r[o],l=s[u];l&&!i[u]&&(t.push(a.get(l)),i[u]=!0)}return t}}function p(n,t,a,e,i,s,u){function d(n){if(g(),n===!0)return D(),void 0;var t=a.data(l);t&&(t.done=D,a.data(l,t)),v(k,"after",D)}function v(e,i,s){function u(n,t){var a=t+"Complete",i=e[n];i[a]=!0,(i[l]||r)();for(var o=0;e.length>o;o++)if(!e[o][a])return;s()}var l=i+"End";o(e,function(e,r){var o=function(){u(r,i)};return"before"!=i||"enter"!=n&&"move"!=n?(e[i]?e[l]=S?e[i](a,t,o):e[i](a,o):o(),void 0):(o(),void 0)})}function p(){u&&c(u,0,!1)}function g(){g.hasBeenRun||(g.hasBeenRun=!0,s())}function D(){if(!D.hasBeenRun){D.hasBeenRun=!0;var n=a.data(l);n&&(S?C(a):(n.closeAnimationTimeout=c(function(){C(a)},0,!1),a.data(l,n))),p()}}var b=a.attr("class")||"",$=b+" "+t,w=(" "+$).replace(/\s+/g,".");e||(e=i?i.parent():a.parent());var x=m(w),S="addClass"==n||"removeClass"==n,A=a.data(l)||{};if(h(a,e)||0===x.length)return g(),D(),void 0;var k=[];if(A.running&&S&&A.structural||o(x,function(e){if(!e.allowCancel||e.allowCancel(a,n,t)){var i,r=e[n];"leave"==n?(i=r,r=null):i=e["before"+n.charAt(0).toUpperCase()+n.substr(1)],k.push({before:i,after:r})}}),0===k.length)return g(),p(),void 0;var M=" "+b+" ";A.running&&(c.cancel(A.closeAnimationTimeout),C(a),y(A.animations),A.beforeComplete?(A.done||r)(!0):S&&!A.structural&&(M="removeClass"==A.event?M.replace(A.className,""):M+A.className+" "));var E=" "+t+" ";return"addClass"==n&&M.indexOf(E)>=0||"removeClass"==n&&-1==M.indexOf(E)?(g(),p(),void 0):(a.addClass(f),a.data(l,{running:!0,event:n,className:t,structural:!S,animations:k,done:d}),v(k,"before",d),void 0)}function g(n){var a=n[0];a.nodeType==u&&o(a.querySelectorAll("."+f),function(n){n=t.element(n);var a=n.data(l);a&&(y(a.animations),C(n))})}function y(n){var t=!0;o(n,function(a){n.beforeComplete||(a.beforeEnd||r)(t),n.afterComplete||(a.afterEnd||r)(t)})}function C(n){n[0]==i[0]?d.disabled||(d.running=!1,d.structural=!1):(n.removeClass(f),n.removeData(l))}function h(n,t){if(d.disabled)return!0;if(n[0]==i[0])return d.disabled||d.running;do{if(0===t.length)break;var a=t[0]==i[0],e=a?d:t.data(l),r=e&&(!!e.disabled||!!e.running);if(a||r)return r;if(a)return!0}while(t=t.parent());return!0}return i.data(l,d),v.$$postDigest(function(){v.$$postDigest(function(){d.running=!1})}),{enter:function(t,a,e,i){this.enabled(!1,t),n.enter(t,a,e),v.$$postDigest(function(){p("enter","ng-enter",t,a,e,r,i)})},leave:function(t,a){g(t),this.enabled(!1,t),v.$$postDigest(function(){p("leave","ng-leave",t,null,null,function(){n.leave(t)},a)})},move:function(t,a,e,i){g(t),this.enabled(!1,t),n.move(t,a,e),v.$$postDigest(function(){p("move","ng-move",t,a,e,r,i)})},addClass:function(t,a,e){p("addClass",a,t,null,null,function(){n.addClass(t,a)},e)},removeClass:function(t,a,e){p("removeClass",a,t,null,null,function(){n.removeClass(t,a)},e)},enabled:function(n,t){switch(arguments.length){case 2:if(n)C(t);else{var a=t.data(l)||{};a.disabled=!0,t.data(l,a)}break;case 1:d.disabled=!n;break;default:n=!d.disabled}return!!n}}}]),i.register("",["$window","$sniffer","$timeout",function(e,i,s){function l(n){F.push(n),s.cancel(N),N=s(function(){o(F,function(n){n()}),F=[],N=null,q={}},10,!1)}function f(n,t){var a=t?q[t]:null;if(!a){var i,r,s,l,f=0,c=0,v=0,m=0;o(n,function(n){if(n.nodeType==u){var t=e.getComputedStyle(n)||{};s=t[S+T],f=Math.max(d(s),f),l=t[S+P],i=t[S+R],c=Math.max(d(i),c),r=t[k+R],m=Math.max(d(r),m);var a=d(t[k+T]);a>0&&(a*=parseInt(t[k+B],10)||1),v=Math.max(a,v)}}),a={total:0,transitionPropertyStyle:l,transitionDurationStyle:s,transitionDelayStyle:i,transitionDelay:c,transitionDuration:f,animationDelayStyle:r,animationDelay:m,animationDuration:v},t&&(q[t]=a)}return a}function d(n){var a=0,e=t.isString(n)?n.split(/\s*,\s*/):[];return o(e,function(n){a=Math.max(parseFloat(n)||0,a)}),a}function c(n){var t=n.parent(),a=t.data(O);return a||(t.data(O,++z),a=z),a+"-"+n[0].className}function v(n,t){var a=c(n),e=a+" "+t,i={},r=q[e]?++q[e].total:0;if(r>0){var s=t+"-stagger",u=a+" "+s,l=!q[u];l&&n.addClass(s),i=f(n,u),l&&n.removeClass(s)}n.addClass(t);var d=f(n,e),v=Math.max(d.transitionDuration,d.animationDuration);if(0===v)return n.removeClass(t),!1;n[0];var g="";return d.transitionDuration>0?(n.addClass(W),g+=j+" ",m(n)):p(n),o(t.split(" "),function(n,t){g+=(t>0?" ":"")+n+"-active"}),n.data(I,{className:t,activeClassName:g,maxDuration:v,classes:t+" "+g,timings:d,stagger:i,ii:r}),!0}function m(n){n[0].style[S+P]="none"}function p(n){n[0].style[k]="none 0s"}function g(n){var t=n[0],a=S+P;t.style[a]&&t.style[a].length>0&&(t.style[a]="")}function y(n){var t=n[0],a=k;t.style[a]&&t.style[a].length>0&&(n[0].style[a]="")}function C(n,t,a){function e(n){n.stopPropagation();var t=n.originalEvent||n,e=t.$manualTimeStamp||t.timeStamp||Date.now();Math.max(e-v,0)>=c&&t.elapsedTime>=f&&a()}var r=n.data(I);if(!n.hasClass(t)||!r)return a(),void 0;var o,s=n[0],u=r.timings,l=r.stagger,f=r.maxDuration,d=r.activeClassName,c=1e3*Math.max(u.transitionDelay,u.animationDelay),v=Date.now(),m=M+" "+A,p=r.ii,g="",y=[];if(u.transitionDuration>0){var C=u.transitionPropertyStyle;if(-1==C.indexOf("all")){o=!0;var D=i.msie?"-ms-zoom":"border-spacing";g+=E+"transition-property: "+C+", "+D+"; ",g+=E+"transition-duration: "+u.transitionDurationStyle+", "+u.transitionDuration+"s; ",y.push(E+"transition-property"),y.push(E+"transition-duration")}}if(p>0){if(l.transitionDelay>0&&0===l.transitionDuration){var b=u.transitionDelayStyle;o&&(b+=", "+u.transitionDelay+"s"),g+=E+"transition-delay: "+h(b,l.transitionDelay,p)+"; ",y.push(E+"transition-delay")}l.animationDelay>0&&0===l.animationDuration&&(g+=E+"animation-delay: "+h(u.animationDelayStyle,l.animationDelay,p)+"; ",y.push(E+"animation-delay"))}if(y.length>0){var $=s.getAttribute("style")||"";s.setAttribute("style",$+" "+g)}return n.on(m,e),n.addClass(d),function(){n.off(m,e),n.removeClass(d),w(n,t);for(var a in y)s.style.removeProperty(y[a])}}function h(n,t,a){var e="";return o(n.split(","),function(n,i){e+=(i>0?",":"")+(a*t+parseInt(n,10))+"s"}),e}function D(n,t){return v(n,t)?function(a){a&&w(n,t)}:void 0}function b(n,t,a){return n.data(I)?C(n,t,a):(w(n,t),a(),void 0)}function $(n,t,a){var e=D(n,t);if(!e)return a(),void 0;var i=e;return l(function(){g(n),y(n),i=b(n,t,a)}),function(n){(i||r)(n)}}function w(n,t){n.removeClass(t),n.removeClass(W),n.removeData(I)}function x(n,a){var e="";return n=t.isArray(n)?n:n.split(/\s+/),o(n,function(n,t){n&&n.length>0&&(e+=(t>0?" ":"")+n+a)}),e}var S,A,k,M,E="";n.ontransitionend===a&&n.onwebkittransitionend!==a?(E="-webkit-",S="WebkitTransition",A="webkitTransitionEnd transitionend"):(S="transition",A="transitionend"),n.onanimationend===a&&n.onwebkitanimationend!==a?(E="-webkit-",k="WebkitAnimation",M="webkitAnimationEnd animationend"):(k="animation",M="animationend");var N,T="Duration",P="Property",R="Delay",B="IterationCount",O="$$ngAnimateKey",I="$$ngAnimateCSS3Data",W="ng-animate-start",j="ng-animate-active",q={},z=0,F=[];return{allowCancel:function(n,a,e){var i=(n.data(I)||{}).classes;if(!i||["enter","leave","move"].indexOf(a)>=0)return!0;var r=n.parent(),s=t.element(n[0].cloneNode());s.attr("style","position:absolute; top:-9999px; left:-9999px"),s.removeAttr("id"),s.html(""),o(i.split(" "),function(n){s.removeClass(n)});var u="addClass"==a?"-add":"-remove";s.addClass(x(e,u)),r.append(s);var l=f(s);return s.remove(),Math.max(l.transitionDuration,l.animationDuration)>0},enter:function(n,t){return $(n,"ng-enter",t)},leave:function(n,t){return $(n,"ng-leave",t)},move:function(n,t){return $(n,"ng-move",t)},beforeAddClass:function(n,t,a){var e=D(n,x(t,"-add"));return e?(l(function(){g(n),y(n),a()}),e):(a(),void 0)},addClass:function(n,t,a){return b(n,x(t,"-add"),a)},beforeRemoveClass:function(n,t,a){var e=D(n,x(t,"-remove"));return e?(l(function(){g(n),y(n),a()}),e):(a(),void 0)},removeClass:function(n,t,a){return b(n,x(t,"-remove"),a)}}}])}])})(window,window.angular);