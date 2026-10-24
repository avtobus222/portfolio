/* Геймдизайн: симулятор выживания */

/* survival sim */
function sim(){const S={food:100,water:100,energy:100,warm:100,hp:100},RT={food:.8,water:1.1,energy:.6,warm:.9};let t=0,on=false,dead=false;
 const log=m=>$("#slog").textContent=m;
 const paint=()=>Object.keys(S).forEach(k=>{const b=$(`.sb[data-k=${k}]`);b.querySelector("b").style.width=Math.max(0,S[k])+"%";b.classList.toggle("low",k!=="hp"&&S[k]<25)});
 const ACT={eat:()=>{S.food=Math.min(100,S.food+30);S.energy-=5;log("Мясо съедено. Энергии чуть меньше: готовка тоже требует сил.")},drink:()=>{S.water=Math.min(100,S.water+35);log("Вода из ручья. Жажда отступила.")},
  sleep:()=>{S.energy=Math.min(100,S.energy+40);S.warm-=15;log("Поспала, но в укрытии стало холоднее.")},fire:()=>{S.warm=Math.min(100,S.warm+40);if(Math.random()<.5){S.hp-=12;log("Костёр заметили каннибалы! −12 здоровья.")}else log("Костёр горит: тепло, но огонь привлекает врагов.")}};
 $$(".sa button").forEach(b=>b.onclick=()=>{if(dead){Object.assign(S,{food:100,water:100,energy:100,warm:100,hp:100});t=0;dead=false}on=true;ACT[b.dataset.a]();paint();snd(520,.06)});
 const iv=setInterval(()=>{if(!$("#slog")){clearInterval(iv);return}if(!on||dead)return;t++;Object.keys(RT).forEach(k=>{S[k]-=RT[k];if(S[k]<=0){S[k]=0;S.hp-=2}});$("#stime").textContent=t+" c";
  if(t===30)unlock("survive");if(S.hp<=0){S.hp=0;dead=true;log(`Игра окончена. Время выживания: ${t} с. Нажми любую кнопку, чтобы начать заново.`);snd(140,.3,"sawtooth")}paint()},1000);paint()}
