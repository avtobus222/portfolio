/* Страница «Обо мне» */

L.about=()=>lh(1,"ЗНАКОМСТВО","Обо мне","Кто я, чему учусь и что умею.","about")+`
<div class="prof"><aside class="pcd rv"><div class="ring"><div class="av" ${A.photo?`style="background-image:url(${A.photo})"`:""}>${A.photo?"":A.initials}</div></div><h3>${A.name}</h3><div class="st"><i></i>${A.status}</div>
<ul class="facts">${A.facts.map(f=>`<li><span>${f[0]}</span><b>${f[1]}</b></li>`).join("")}</ul></aside>
<div><p class="lead rv">${A.lead}</p>${A.story.slice(0,1).map(t=>`<p class="sub rv">${t}</p>`).join("")}${A.story.length>1?`<div class="fold" id="fold">${A.story.slice(1).map(t=>`<p class="sub">${t}</p>`).join("")}</div><button class="btn sm rv" id="foldb">Читать дальше ↓</button>`:""}
<h3 class="rv">Навыки</h3><div class="rad rv">${radar()}</div><div class="chips rv">${SKILLS.map(([n,v])=>`<span class="chip">${n} · ${LV(v)}</span>`).join("")}</div>
<h3 class="rv">Учёба и опыт</h3>${EDU.map(e=>`<div class="q rv"><div class="qi">${e.y==="Сейчас"?"⏳":"✔"}</div><div><b>${e.y}</b><h4>${e.t}</h4><em>${e.p}</em><p>${e.d}</p>${e.l?`<a href="${e.l}" target="_blank">Открыть сертификат →</a>`:""}</div></div>`).join("")}
<h3 class="rv">Почему я</h3><div class="why">${WHY.map(w=>`<div class="w rv"><div class="ic">${w[0]}</div><h4>${w[1]}</h4><p>${w[2]}</p></div>`).join("")}</div></div></div>`;
