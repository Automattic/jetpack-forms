!function(){var t={7940:function(){window.jetpackForms=window.jetpackForms||{},window.jetpackForms.getBackgroundColor=function(t){let o=window.getComputedStyle(t).backgroundColor;for(;"rgba(0, 0, 0, 0)"===o&&t.parentNode&&t.parentNode.nodeType===window.Node.ELEMENT_NODE;)if("wp-block-cover"!==(t=t.parentNode).className)o=window.getComputedStyle(t).backgroundColor;else{const e=t.querySelector(".wp-block-cover__background");o=window.getComputedStyle(e).backgroundColor}return o},window.jetpackForms.generateStyleVariables=function(t){const o=window["editor-canvas"]?window["editor-canvas"].document:document,e=o.querySelector("body");if(!t)return;const r=o.createElement("div");r.className="contact-form__style-probe",r.style="position: absolute; z-index: -1; width: 1px; height: 1px; visibility: hidden",r.innerHTML='\n\t\t\t<div class="contact-form">\n\t\t\t\t<div class="wp-block-button">\n\t\t\t\t\t<div class="wp-block-button__link btn-primary">Test</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="wp-block-button is-style-outline">\n\t\t\t\t\t<div class="wp-block-button__link btn-outline">Test</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="jetpack-field">\n\t\t\t\t\t<input class="jetpack-field__input" type="text">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',t.parentNode.appendChild(r);const n=r.querySelector(".btn-primary"),c=r.querySelector(".btn-outline"),a=r.querySelector('input[type="text"]'),i=window.jetpackForms.getBackgroundColor(e),d=window.jetpackForms.getBackgroundColor(a),l=window.getComputedStyle(a).backgroundColor,{border:p,borderColor:u,backgroundColor:b,color:s}=window.getComputedStyle(n),{backgroundColor:f,border:m,borderWidth:k,borderRadius:w,color:g,padding:j,lineHeight:y}=window.getComputedStyle(c),{color:v,padding:C,paddingTop:S,paddingLeft:h,border:_,borderColor:x,borderWidth:N,borderStyle:F,borderRadius:T,fontSize:q,fontFamily:E,lineHeight:z}=window.getComputedStyle(a);return r.remove(),{"--jetpack--contact-form--primary-color":b,"--jetpack--contact-form--background-color":i,"--jetpack--contact-form--text-color":v,"--jetpack--contact-form--border":_,"--jetpack--contact-form--border-color":x,"--jetpack--contact-form--border-size":N,"--jetpack--contact-form--border-style":F,"--jetpack--contact-form--border-radius":T,"--jetpack--contact-form--input-background":l,"--jetpack--contact-form--input-background-fallback":d,"--jetpack--contact-form--input-padding":C,"--jetpack--contact-form--input-padding-top":S,"--jetpack--contact-form--input-padding-left":h,"--jetpack--contact-form--font-size":q,"--jetpack--contact-form--font-family":E,"--jetpack--contact-form--line-height":z,"--jetpack--contact-form--button-primary--color":s,"--jetpack--contact-form--button-primary--background-color":b,"--jetpack--contact-form--button-primary--border":p,"--jetpack--contact-form--button-primary--border-color":u,"--jetpack--contact-form--button-outline--padding":j,"--jetpack--contact-form--button-outline--border":m,"--jetpack--contact-form--button-outline--background-color":f,"--jetpack--contact-form--button-outline--border-size":k,"--jetpack--contact-form--button-outline--border-radius":w,"--jetpack--contact-form--button-outline--text-color":g,"--jetpack--contact-form--button-outline--line-height":y}}}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var c=o[r]={exports:{}};return t[r](c,c.exports,e),c.exports}e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},function(){"use strict";e(7940);const{generateStyleVariables:t}=window.jetpackForms,o=setTimeout((()=>{r()}),3e3);function r(){const o=document.querySelectorAll(".wp-block-jetpack-contact-form-container");for(const e of o){const o=t(e);if(!o)return;for(const t in o)e.style.setProperty(t,o[t])}}window.addEventListener("load",(()=>{clearTimeout(o),r()}))}()}();