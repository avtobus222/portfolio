/* Появление при прокрутке, наклон карточек, магнитные кнопки */

/* появление блоков при прокрутке */
let IOo=null;
function revealInit(){
 const el=$$(".pg").pop();if(!el)return;
 if(IOo)IOo.disconnect();
 const items=$$(".rv",el);
 if(!("IntersectionObserver" in window)){items.forEach(e=>e.classList.add("in"));return}
 IOo=new IntersectionObserver(es=>{let q=0;es.forEach(en=>{if(en.isIntersecting){const t=en.target;t.style.animationDelay=(q++*.09)+"s";t.classList.add("in");IOo.unobserve(t)}})},{root:el,threshold:.08,rootMargin:"0px 0px -6% 0px"});
 items.forEach(e=>IOo.observe(e))}

/* интерактив: подсветка под курсором, наклон карточек, магнитные кнопки, полоса прокрутки, параллакс */
function fx(el){
 const sel=".sk,.cf,.w,.tl,.cb,.xc,.th3,.q,.cnt>div,.pcd,.ct";
 $$(sel,el).forEach(c=>{c.classList.add("tilt");const sp=document.createElement("i");sp.className="spot";c.appendChild(sp)});
 el.addEventListener("pointermove",e=>{
  const c=e.target.closest&&e.target.closest(sel);
  if(c&&el.contains(c)){const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
   c.style.setProperty("--mx",x+"px");c.style.setProperty("--my",y+"px");
   if(!c.matches(".ct,.pcd")&&e.pointerType==="mouse"){const rx=((y/r.height)-.5)*-6,ry=((x/r.width)-.5)*6;c.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`}}
  const b=e.target.closest&&e.target.closest(".btn.main");
  if(b){const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.16}px,${(e.clientY-r.top-r.height/2)*.22}px)`}
 });
 el.addEventListener("pointerout",e=>{const c=e.target.closest&&e.target.closest(sel+",.btn.main");if(c&&!c.contains(e.relatedTarget))c.style.transform=""});
 const pb=document.createElement("div");pb.className="pbar";pb.innerHTML="<i></i>";el.appendChild(pb);
 const bn=$(".bign",el),dc=$(".deco",el),bar=pb.firstChild;
 el.addEventListener("scroll",()=>{const m=el.scrollHeight-el.clientHeight;bar.style.transform=`scaleX(${m>0?el.scrollTop/m:0})`;
  if(bn)bn.style.transform=`translateY(${el.scrollTop*.18}px)`;if(dc)dc.style.transform=`translateY(${el.scrollTop*.08}px)`},{passive:true});
}
