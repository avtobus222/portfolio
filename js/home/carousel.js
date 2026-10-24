/* Главная: 3D-карусель разделов */

/* карусель-кольцо */
ring.innerHTML=ORD.map((k,i)=>`<button class="cd" data-k="${k}" style="--c:${SC[k].c}"><div class="art"></div><svg viewBox="0 0 24 24">${SC[k].i}</svg><div class="tx"><h3>${SC[k].t}</h3><small>${SC[k].sub}</small><br><span class="go">Открыть</span></div></button>`).join("");
$("#dots").innerHTML=ORD.map((k,i)=>`<button aria-label="${SC[k].t}" data-i="${i}"></button>`).join("");
const cards=$$(".cd"),dots=$$(".dots button");
let R=300,rot=-420,tgt=-420,act=-1,drag=false,sx=0,sr=0,moved=0,lx=0,vel=0,lastIn=0,hov=false,lastT=performance.now();
function size(){R=Math.min(430,Math.max(230,st.clientWidth*.47));ring.style.transform=`translateZ(${-R}px)`}
function go(i){lastIn=performance.now();const d=((-i*step-rot)%360+540)%360-180;tgt=rot+d}
function frame(now){
 const dt=Math.min(.05,((now||performance.now())-lastT)/1000);lastT=now||performance.now();
 if(!drag){
  const idle=!hov&&!hub.classList.contains("dim")&&!$("#pop").classList.contains("open")&&performance.now()-lastIn>1200&&Math.abs(tgt-rot)<1.5;
  if(idle){rot-=14*dt;tgt=rot}else rot+=(tgt-rot)*.12}
 if(hub.classList.contains("dim")&&!busy){requestAnimationFrame(frame);return}
 cards.forEach((c,i)=>{const a=i*step+rot,d=((a%360)+540)%360-180,f=Math.cos(d*Math.PI/180);
  c.style.transform=`rotateY(${a}deg) translateZ(${R}px)`;c.style.opacity=Math.max(.18,.2+.9*f);c.style.zIndex=Math.round(f*10)+10});
 const n=((Math.round(-rot/step)%N)+N)%N;
 if(n!==act){act=n;cards.forEach((c,i)=>c.classList.toggle("on",i===n));dots.forEach((d,i)=>d.classList.toggle("on",i===n));const c=SC[ORD[n]].c;hub.style.setProperty("--a",c);document.documentElement.style.setProperty("--a",c)}
 requestAnimationFrame(frame)}
size();addEventListener("resize",size);requestAnimationFrame(frame);
ring.addEventListener("pointerenter",()=>hov=true);ring.addEventListener("pointerleave",()=>{hov=false;lastIn=performance.now()-1500});
st.addEventListener("pointerdown",e=>{lastIn=performance.now();drag=true;sx=lx=e.clientX;sr=rot;moved=0;vel=0;st.classList.add("dg")});
addEventListener("pointermove",e=>{
 document.documentElement.style.setProperty("--x",e.clientX+"px");document.documentElement.style.setProperty("--y",e.clientY+"px");
 if(!drag)return;const d=e.clientX-sx;moved=Math.max(moved,Math.abs(d));vel=e.clientX-lx;lx=e.clientX;rot=sr+d*.35;tgt=rot});
addEventListener("pointerup",()=>{if(!drag)return;drag=false;lastIn=performance.now();st.classList.remove("dg");if(moved>6)tgt=Math.round((rot+vel*-0.8*-1*1.5)/step)*step;});
st.addEventListener("wheel",e=>{e.preventDefault();if(Math.abs(e.deltaY)+Math.abs(e.deltaX)>20&&!st._w){st._w=1;go(act+(e.deltaY+e.deltaX>0?1:-1));setTimeout(()=>st._w=0,450)}},{passive:false});
$("#pv").onclick=()=>go(act-1);$("#nxt").onclick=()=>go(act+1);
dots.forEach(d=>d.onclick=()=>go(+d.dataset.i));
ring.addEventListener("click",e=>{const c=e.target.closest(".cd");if(!c||moved>6)return;const i=cards.indexOf(c);if(i===act){const r=c.getBoundingClientRect();show(ORD[i],r.left+r.width/2,r.top+r.height/2)}else go(i)});
$("#open").onclick=e=>{const r=e.currentTarget.getBoundingClientRect();show(ORD[act],r.left+r.width/2,r.top+r.height/2)};
