/* Общие куски разметки: заголовок раздела, умения, инструменты, процесс, призыв */

const lh=(n,k,t,sb,d)=>`<div class="lh rv"><div class="bign">0${n}</div><div class="lht"><span class="kick">${k}</span><h2>${t}</h2><p class="sub">${sb}</p></div><div class="deco d-${d}"><i></i><i></i><i></i><b></b></div></div>`;
const tools=a=>`<div class="tools">${a.map(([n,d])=>`<div class="tl rv"><b>${n}</b><span>${d}</span></div>`).join("")}</div>`;
const caseIdx=t=>GD.findIndex(g=>g.type===t);
const abil=a=>`<div class="skg">${a.map(([ic,t,p,tgs,ct])=>`<div class="sk rv"><div class="si">${ic}</div><h4>${t}</h4><p>${p}</p><div class="chips">${tg(tgs)}</div>${ct&&caseIdx(ct)>=0?`<button class="go" data-case="${caseIdx(ct)}">Открыть кейс →</button>`:""}</div>`).join("")}</div>`;
const stepper=(id,arr)=>`<div class="steps rv" id="${id}"><i></i>${arr.map((s,k)=>`<button data-k="${k}"><span>${k+1}</span><em>${s[0]}</em></button>`).join("")}</div><div class="sdet" id="${id}d"></div>`;
function stepInit(id,arr){const el=$("#"+id);if(!el)return;const bs=[...el.querySelectorAll("button")];const sd=(k,q)=>{bs.forEach((b,i)=>b.classList.toggle("on",i<=k));el.querySelector("i").style.width=`calc((100% - 90px)*${k/(arr.length-1)})`;$("#"+id+"d").innerHTML=`<b>${arr[k][0]}</b><p>${arr[k][1]}</p>`;if(!q)snd(400+k*80,.05)};bs.forEach(b=>b.onclick=()=>sd(+b.dataset.k));sd(0,1)}
const cta=(k)=>`<div class="cta rv"><div><h3>${SEC[k].cta[0]}</h3><p>${SEC[k].cta[1]}</p></div><div class="cl" style="margin:0"><a class="btn main" href="${MAIL}">✉ Написать</a><a class="btn" href="https://t.me/avtobus0" target="_blank">Telegram</a></div></div>`;
const secSk=k=>`<h3 class="rv">Что я умею</h3><p class="sub rv">${SEC[k].intro}</p>`+abil(SEC[k].sk);
const secTools=k=>`<h3 class="rv">Инструменты</h3>`+tools(SEC[k].tools);
const secProc=k=>`<h3 class="rv">${SEC[k].procT}</h3><p class="sub rv">Нажми на этап, чтобы увидеть, что на нём происходит.</p>`+stepper("st-"+k,SEC[k].proc);
const secXp=()=>`<h3 class="rv">В деле</h3><p class="sub rv">Командная работа и учебные проекты, доведённые до результата.</p><div class="xpc">${XPD.map(x=>`<div class="xc rv"><span class="ky">${x.k}</span><h4>${x.t}</h4><em>${x.p}</em><span class="xm">Подробнее +</span><ul class="pts">${x.pts.map(t=>`<li>${t}</li>`).join("")}</ul></div>`).join("")}</div>`;
function bindGo(){$$("#lw .go").forEach(b=>b.onclick=e=>{e.stopPropagation();openCase(GD[+b.dataset.case])})}
