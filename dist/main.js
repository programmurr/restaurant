(()=>{"use strict";function e(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.id="restaurant-name",t.textContent="Monsieur Murr's";const n=document.createElement("div");n.id="tabs";const a=document.createElement("div");a.className="tab",a.id="home-tab",a.textContent="Home";const o=document.createElement("div");o.className="tab",o.id="menu-tab",o.textContent="Menu";const c=document.createElement("div");c.className="tab",c.id="contact-tab",c.textContent="Contact",n.appendChild(a),n.appendChild(o),n.appendChild(c);const d=document.createElement("img");d.src="../src/baguette.jpeg",d.alt="Image of Lovely Bread";const i=document.createElement("p");i.id="welcome-text",i.textContent="\n            Welcome to the finest French eating-hole this side of the River Bann.\n            With lots of different types of foods you have no idea how to pronounce,\n            all you need to do is sit back, relax, and let us put snails in your mouth.\n\t\t\t",e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(i)}e(),document.querySelector("#home-tab").addEventListener("click",e),document.querySelector("#menu-tab").addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.id="restaurant-name",t.textContent="Monsieur Murr's";const n=document.createElement("div");n.id="tabs";const a=document.createElement("div");a.className="tab",a.id="home-tab",a.textContent="Home";const o=document.createElement("div");o.className="tab",o.id="menu-tab",o.textContent="Menu";const c=document.createElement("div");c.className="tab",c.id="contact-tab",c.textContent="Contact",n.appendChild(a),n.appendChild(o),n.appendChild(c);const d=document.createElement("p");d.id="menu-text",d.textContent="Menu page!",e.appendChild(t),e.appendChild(n),e.appendChild(d)})),document.querySelector("#contact-tab").addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.id="restaurant-name",t.textContent="Monsieur Murr's";const n=document.createElement("div");n.id="tabs";const a=document.createElement("div");a.className="tab",a.id="home-tab",a.textContent="Home";const o=document.createElement("div");o.className="tab",o.id="menu-tab",o.textContent="Menu";const c=document.createElement("div");c.className="tab",c.id="contact-tab",c.textContent="Contact",n.appendChild(a),n.appendChild(o),n.appendChild(c);const d=document.createElement("p");d.id="contact-text",d.textContent="Contact page!",e.appendChild(t),e.appendChild(n),e.appendChild(d)}))})();