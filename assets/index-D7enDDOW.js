!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?n.credentials="include":"anonymous"===e.crossOrigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.createElement("div");e.innerHTML='\n    <h1>Scroll Animation</h1>\n    <nav>\n      <a href="#section01" class="scroll-link" data-target="section01">Section 01</a>\n      <a href="#section02" class="scroll-link" data-target="section02">Section 02</a>\n      <a href="#section03" class="scroll-link" data-target="section03">Section 03</a>\n      <a href="#section04" class="scroll-link" data-target="section04">Section 04</a>\n      <a href="#section05" class="scroll-link" data-target="section05">Section 05</a>\n    </nav>\n  ',document.getElementById("header").innerHTML=e.innerHTML})(),(()=>{const e=document.createElement("div");e.innerHTML="\n    <p>Footer</p>\n  ",document.getElementById("footer").innerHTML=e.innerHTML})(),(()=>{const e=document.querySelectorAll(".scroll-link"),n=document.querySelectorAll("section");e.forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault();const t=e.getAttribute("data-target"),o=document.querySelector(`#${t}`);o&&(o.scrollIntoView({behavior:"smooth"}),history.pushState(null,null,`#${t}`))}))}));const t=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const n=e.target.id;history.replaceState(null,null,`#${n}`)}}))}),{root:null,rootMargin:"0px",threshold:.6});if(n.forEach((e=>t.observe(e))),window.addEventListener("popstate",(()=>{const e=window.location.hash.substring(1),n=document.querySelector(`#${e}`);n&&n.scrollIntoView({behavior:"smooth"})})),window.location.hash){const e=window.location.hash.substring(1),n=document.querySelector(`#${e}`);n&&n.scrollIntoView({behavior:"smooth"})}})(),(()=>{const e=document.createElement("div");e.innerHTML="\n    <h2>Section 01</h2>\n  ",document.getElementById("section01").innerHTML=e.innerHTML})(),(()=>{const e=document.createElement("div");e.innerHTML="\n    <h2>Section 02</h2>\n  ",document.getElementById("section02").innerHTML=e.innerHTML})(),(()=>{const e=document.createElement("div");e.innerHTML="\n    <h2>Section 03</h2>\n  ",document.getElementById("section03").innerHTML=e.innerHTML})(),(()=>{const e=document.createElement("div");e.innerHTML="\n    <h2>Section 04</h2>\n  ",document.getElementById("section04").innerHTML=e.innerHTML})(),(()=>{const e=document.createElement("div");e.innerHTML="\n    <h2>Section 05</h2>\n  ",document.getElementById("section05").innerHTML=e.innerHTML})()}));
