(()=>{var t={2962:()=>{window.jetpackForms=window.jetpackForms||{},window.jetpackForms.getBackgroundColor=function(t){let o=window.getComputedStyle(t).backgroundColor;for(;"rgba(0, 0, 0, 0)"===o&&t.parentNode&&t.parentNode.nodeType===window.Node.ELEMENT_NODE;)if("wp-block-cover"!==(t=t.parentNode).className)o=window.getComputedStyle(t).backgroundColor;else{const e=t.querySelector(".wp-block-cover__background");o=window.getComputedStyle(e).backgroundColor}return o},window.jetpackForms.generateStyleVariables=function(t){if(!t)return;const o=window["editor-canvas"]?window["editor-canvas"].document:document,e=o.querySelector("body"),r=o.createElement("div");r.className="contact-form__style-probe",r.style="position: absolute; z-index: -1; width: 1px; height: 1px; visibility: hidden",r.innerHTML='\n\t\t\t<div class="contact-form">\n\t\t\t\t<div class="wp-block-button">\n\t\t\t\t\t<div class="wp-block-button__link btn-primary">Test</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="wp-block-button is-style-outline">\n\t\t\t\t\t<div class="wp-block-button__link btn-outline">Test</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="jetpack-field">\n\t\t\t\t\t<input class="jetpack-field__input" type="text">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',t.parentNode.appendChild(r);const n=r.querySelector(".btn-primary"),c=r.querySelector(".btn-outline"),a=r.querySelector('input[type="text"]'),d=window.jetpackForms.getBackgroundColor(e),i=window.jetpackForms.getBackgroundColor(a),l=window.getComputedStyle(a).backgroundColor,{border:p,borderColor:u,backgroundColor:b,color:s}=window.getComputedStyle(n),{backgroundColor:k,border:m,borderWidth:f,borderRadius:w,color:g,padding:j,lineHeight:y}=window.getComputedStyle(c),v=window.jetpackForms.getBackgroundColor(c),{color:C,padding:S,paddingTop:h,paddingLeft:_,border:x,borderColor:F,borderWidth:N,borderStyle:T,borderRadius:q,fontSize:E,fontFamily:z,lineHeight:B}=window.getComputedStyle(a);return r.remove(),{"--jetpack--contact-form--primary-color":b,"--jetpack--contact-form--background-color":d,"--jetpack--contact-form--text-color":C,"--jetpack--contact-form--border":x,"--jetpack--contact-form--border-color":F,"--jetpack--contact-form--border-size":N,"--jetpack--contact-form--border-style":T,"--jetpack--contact-form--border-radius":q,"--jetpack--contact-form--input-background":l,"--jetpack--contact-form--input-background-fallback":i,"--jetpack--contact-form--input-padding":S,"--jetpack--contact-form--input-padding-top":h,"--jetpack--contact-form--input-padding-left":_,"--jetpack--contact-form--font-size":E,"--jetpack--contact-form--font-family":z,"--jetpack--contact-form--line-height":B,"--jetpack--contact-form--button-primary--color":s,"--jetpack--contact-form--button-primary--background-color":b,"--jetpack--contact-form--button-primary--border":p,"--jetpack--contact-form--button-primary--border-color":u,"--jetpack--contact-form--button-outline--padding":j,"--jetpack--contact-form--button-outline--border":m,"--jetpack--contact-form--button-outline--background-color":k,"--jetpack--contact-form--button-outline--background-color-fallback":v,"--jetpack--contact-form--button-outline--border-size":f,"--jetpack--contact-form--button-outline--border-radius":w,"--jetpack--contact-form--button-outline--text-color":g,"--jetpack--contact-form--button-outline--line-height":y}}}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var c=o[r]={exports:{}};return t[r](c,c.exports,e),c.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var r in o)if(e.o(o,r)&&!e.o(t,r))Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),(()=>{"use strict";e(2962);const{generateStyleVariables:t}=window.jetpackForms,o=setTimeout((()=>{r()}),3e3);function r(){const o=document.querySelectorAll(".wp-block-jetpack-contact-form-container");for(const e of o){const o=t(e);if(!o)return;for(const t in o)e.style.setProperty(t,o[t])}}window.addEventListener("load",(()=>{clearTimeout(o),r()}))})()})();