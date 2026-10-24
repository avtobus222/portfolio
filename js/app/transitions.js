/* Состояние страниц и переход-занавес */

/* страницы и переходы */
let cur="home",busy=false;const vis=new Set();
function nav(k){$$("#nav button[data-id]").forEach(b=>b.classList.toggle("on",b.dataset.id===k))}
const caseGo=()=>$$("#lw .go").forEach(b=>b.onclick=e=>{e.stopPropagation();openCase(GD[+b.dataset.case])});
/* ===== переход-занавес: панели закрывают экран, меняется страница, панели открываются ===== */
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
function curtain(num,title,color,mid){
 if(RM){mid();revealInit();busy=false;return}
 const cv=document.createElement("div");cv.id="cur";cv.style.setProperty("--cc",color);
 const n=8;let h="";for(let q=0;q<n;q++)h+=`<i class="cs" style="left:${q*100/n}%;width:calc(${100/n}% + 1px)"></i>`;
 cv.innerHTML=h+`<div class="cl2"><span class="cn2">${num}</span><div class="ct2"><span>${title}</span></div><b class="cbar"></b></div>`;
 document.body.appendChild(cv);
 const S=[...cv.querySelectorAll(".cs")],D=560,ST=52,E="cubic-bezier(.76,0,.24,1)",dl=q=>Math.abs(q-(n-1)/2)*ST;
 const mx=dl(0),cover=D+mx;
 S.forEach((e,q)=>e.animate([{transform:"scaleY(0)"},{transform:"scaleY(1)"}],{duration:D,delay:dl(q),easing:E,fill:"forwards"}));
 const lab=cv.querySelector(".cl2"),tt=cv.querySelector(".ct2 span"),bar=cv.querySelector(".cbar");
 lab.animate([{opacity:0},{opacity:1}],{duration:260,delay:D*.55,fill:"both"});
 tt.animate([{transform:"translateY(115%)"},{transform:"none"}],{duration:620,delay:D*.55,easing:"cubic-bezier(.22,1,.36,1)",fill:"both"});
 snd(180,.07);
 setTimeout(()=>{mid();bar.animate([{transform:"scaleX(0)"},{transform:"scaleX(1)"}],{duration:520,easing:"ease-in-out",fill:"forwards"})},cover+30);
 setTimeout(()=>{
  snd(560,.05);
  tt.animate([{transform:"none"},{transform:"translateY(-115%)"}],{duration:420,easing:"cubic-bezier(.64,0,.78,0)",fill:"forwards"});
  lab.animate([{opacity:1},{opacity:0}],{duration:280,delay:200,fill:"forwards"});
  S.forEach((e,q)=>{e.style.transformOrigin="top";e.animate([{transform:"scaleY(1)"},{transform:"scaleY(0)"}],{duration:D,delay:dl(q),easing:E,fill:"forwards"})});
  setTimeout(revealInit,D*.35);
 },cover+30+560);
 setTimeout(()=>{cv.remove();busy=false},cover+30+560+D+mx+60)}
