/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n,o,t=!1;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),t||(n=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=n,o})}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o,t=arguments[e];for(o in t)n[o]=t[o]}return n}return function n(o){function t(n,r,i){var c,s;if("undefined"!=typeof document){if(1<arguments.length){"number"==typeof(i=e({path:"/"},t.defaults,i)).expires&&((s=new Date).setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s),i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f,p="";for(f in i)i[f]&&(p+="; "+f,!0!==i[f])&&(p+="="+i[f]);return document.cookie=n+"="+r+p}n||(c={});for(var a=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<a.length;u++){var l=a[u].split("=");'"'===(g=l.slice(1).join("=")).charAt(0)&&(g=g.slice(1,-1));try{var C=l[0].replace(d,decodeURIComponent),g=o.read?o.read(g,C):o(g,C)||g.replace(d,decodeURIComponent);if(this.json)try{g=JSON.parse(g)}catch(e){}if(n===C){c=g;break}n||(c[C]=g)}catch(e){}}return c}}return(t.set=t).get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}((function(){}))}));