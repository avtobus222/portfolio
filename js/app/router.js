/* Переходы между разделами: show() и back() */

function show(k){
 if(busy||k===cur)return;if(k==="home")return back();busy=true;
 const c=SC[k].c,i=ORD.indexOf(k),nx=ORD[(i+1)%N];
 curtain("0"+(i+1),SC[k].t,c,()=>{
  PC=[c,c];vis.add(k);if(vis.size===N)unlock("explore");
  $$("#lw").forEach(e=>e.removeAttribute("id"));
  $$(".pg").forEach(o=>o.remove());
  const el=document.createElement("div");el.className="pg";el.style.cssText=`--a:${c};--pk:${c};--acc:${c};--acc2:color-mix(in srgb,${c} 55%,#000)`;
  el.innerHTML=`<div id="lw"><div class="crumb"><button class="btn sm" data-back>← На главную</button><span>Раздел ${i+1} из ${N} · ${SC[k].t}</span></div>`+L[k]()+`<div class="nextb"><button class="btn main" data-next>Дальше: ${SC[nx].t} →</button></div></div>`;
  document.body.appendChild(el);
  (INIT[k]||(()=>{}))();caseGo();extras(el);fx(el);
  $("[data-back]",el).onclick=()=>back();
  $("[data-next]",el).onclick=()=>show(nx);
  document.documentElement.style.setProperty("--a",c);hub.classList.add("dim");cur=k;nav(k)})}
function back(){
 if(busy||!$$(".pg").length)return;busy=true;
 curtain("","Главная",SC[ORD[act]].c,()=>{
  $$(".pg").forEach(p=>p.remove());hub.classList.remove("dim");cur="home";nav("home");
  document.documentElement.style.setProperty("--a",SC[ORD[act]].c)})}
$$("#nav button[data-id]").forEach(b=>b.onclick=()=>show(b.dataset.id));
