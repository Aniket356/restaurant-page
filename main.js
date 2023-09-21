(()=>{"use strict";var e={774:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: black;\n    color: white;\n}\n\n.tabs {\n    height: 5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 0;\n}\n\n.tabs ul{\n    list-style-type: none;\n    display: flex;\n    gap: 4em;\n}\n\n.tabs li{\n    font-size: 1.6rem;\n    font-weight: bold;\n    transition: all 0.3s;\n    padding-bottom: 5px;\n}\n\n.tabs li:hover {\n    cursor: pointer;\n    border-bottom: 1px solid white;\n}\n\n#content {\n    height: calc(100vh - 5rem);\n}\n\n.home {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-items: center;\n    gap: 1.5em;\n}\n\n.home div {\n    width: 40%;\n}\n\n.home h1{\n    font-size: 4rem;\n    margin-bottom: 0.3em;\n}\n\n.home p {\n    font-size: 2rem;\n}\n\n.home img{\n    width: 30rem;\n    height: auto;\n    border-radius: 9px;\n    border: 4px solid white;\n}\n\n.menu, .contact-info {\n    width: 60vw;\n    margin: 0 auto;\n    border: 1px solid white;\n    padding: 1.3em 2em;\n    border-radius: 8px;\n    margin-bottom: 5rem;\n}\n\n.dish {\n    display: flex;\n    gap: 1.3rem;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1.3em;\n}\n\n.dish:not(.dish:last-child) {\n    border-bottom: 1px solid white;\n}\n\n.dish div {\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.dish img {\n    height: 14rem;\n    width: 14rem;\n    border: 1px solid white;\n    border-radius: 15px;\n}\n\n.contact > h1 {\n    text-align: center;\n    margin-bottom: 2rem;\n}\n\n.contact-info .section {\n    margin: 1.4rem;\n}\n\n.contact-info .section h2 {\n    margin-bottom: 0.7rem;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(774),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"1ca82dbe086ce18a236a.jpg",g=function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("div"),t=document.createElement("h1");t.textContent="Savory Heaven",n.appendChild(t);const r=document.createElement("p");r.textContent="Savory Haven: Where Culinary Artistry Meets Heartfelt Hospitality!",n.appendChild(r),e.appendChild(n);const o=document.createElement("img");return o.src=f,e.appendChild(o),e},v=t.p+"b74e7bdc6f157debbf9c.jpg",b=t.p+"0f662d5408e242295fd7.jpg",y=t.p+"96560aa950ba292e158f.jpg",C=t.p+"f5d0dd0d5f80c312f40f.jpg",x=t.p+"60143d7e251b3e23164c.jpg",w=t.p+"2b3eb1aee0d52be02940.jpg",E=(e,n,t)=>({dishName:e,description:n,image:t}),S=[E("Mediterranean Grilled Chicken","Tender chicken marinated in a blend of Mediterranean spices, grilled to perfection, and served with a side of lemon-infused couscous and a refreshing cucumber yogurt sauce.",v),E("Gourmet Mushroom Risotto","Creamy Arborio rice cooked with a medley of gourmet mushrooms, white wine, and Parmesan cheese, creating a rich and comforting dish that's a celebration of earthy flavors.",C),E("Seared Sesame Tuna Salad","Sesame-crusted Ahi tuna seared to a delicate rare, placed atop a bed of mixed greens, julienned vegetables, and a zesty ginger soy dressing.",w),E("Butternut Squash Ravioli","Homemade ravioli filled with roasted butternut squash and ricotta cheese, drizzled with sage-infused brown butter and garnished with toasted pine nuts.",y),E("Braised Short Rib Tacos","Slow-cooked beef short ribs shredded and nestled in warm corn tortillas, topped with pickled red onions, fresh cilantro, and a tangy avocado crema.",x),E("Decadent Chocolate Fondant","Indulge in a warm and gooey chocolate fondant dessert, served with a scoop of vanilla bean ice cream and a drizzle of raspberry coulis.",b)],L=document.querySelector("#content");L.appendChild(g()),document.querySelector("#home").addEventListener("click",(()=>{L.innerHTML="",L.appendChild(g())})),document.querySelector("#menu").addEventListener("click",(()=>{L.innerHTML="",L.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),S.forEach((n=>{const t=document.createElement("div");t.classList.add("dish");const r=document.createElement("div"),o=document.createElement("h1");o.textContent=n.dishName,r.appendChild(o);const a=document.createElement("p");a.textContent=n.description,r.appendChild(a),t.appendChild(r);const i=document.createElement("img");i.src=n.image,t.appendChild(i),e.appendChild(t)})),e}())})),document.querySelector("#contact").addEventListener("click",(()=>{L.innerHTML="",L.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("h1");n.textContent="Contact Us",e.appendChild(n);const t=document.createElement("div");t.classList.add("contact-info");const r=document.createElement("div");r.classList.add("section");const o=document.createElement("h2");o.textContent="Address:",r.appendChild(o);const a=document.createElement("p");a.innerHTML="Savory Haven Restaurant<br>\n                        456 Gourmet Lane<br>\n                        Fictionalville, FCT 12345<br>\n                        Imaginary Land",r.appendChild(a),t.appendChild(r);const i=document.createElement("div");i.classList.add("section");const c=document.createElement("h2");c.textContent="Phone",i.appendChild(c);const s=document.createElement("p");s.innerHTML="<strong>Reservations & Inquiries:</strong> +1 (123) 456-7890<br>\n    <strong>General Contact:</strong> +1 (987) 654-3210",i.appendChild(s),t.appendChild(i);const d=document.createElement("div");d.classList.add("section");const l=document.createElement("h2");l.textContent="Email us:",d.appendChild(l);const p=document.createElement("p");return p.innerHTML="<strong>Reservations:</strong> reservations@savoryhaven.com<br>\n    <strong>General Inquiries:</strong> info@savoryhaven.com",d.appendChild(p),t.appendChild(d),e.appendChild(t),e}())}))})()})();