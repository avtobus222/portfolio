/* Страница «Контакты»: ссылки и терминал */

L.contact=()=>lh(5,"СВЯЗЬ","Контакты","Ищу стажировку или практику: геймдизайнер или 3D-артист. Напиши мне на почту или в Telegram.","contact")+`
<div class="links rv"><a class="btn main" href="mailto:mariadegtarenko34@gmail.com">✉ mariadegtarenko34@gmail.com</a><a class="btn" href="https://t.me/avtobus0" target="_blank">Telegram @avtobus0</a></div>
<h3>Терминал</h3><div class="term rv"><div id="to"></div><div class="tin"><span>maria@portfolio:~$</span><input id="ti" autocomplete="off" spellcheck="false" placeholder="введи help"></div></div>`;

INIT.contact=()=>{const to=$("#to"),ti=$("#ti");const out=t=>{to.textContent+=t+"\n";to.scrollTop=1e5};out("Это небольшой терминал. Введи help, чтобы увидеть команды.");
 const CMD={help:()=>"Команды: about, skills, edu, projects, contact, clear, sudo hire maria",about:()=>A.lead,skills:()=>SKILLS.map(([n,v])=>n.padEnd(18,".")+LV(v)).join("\n"),edu:()=>EDU.map(e=>`${e.y} — ${e.t}`).join("\n"),
  projects:()=>`3D и 2D: ${PROJECTS.length} · Unity: ${UNITY.length} · Геймдизайн: ${GD.length}`,contact:()=>"Почта: mariadegtarenko34@gmail.com\nTelegram: @avtobus0",
clear:()=>{to.textContent="";return""},"sudo hire maria":()=>{setTimeout(()=>location.href="mailto:mariadegtarenko34@gmail.com?subject=Приглашение на стажировку",900);return"Доступ разрешён. Открываю почту..."}};
 ti.onkeydown=e=>{if(e.key!=="Enter")return;const v=ti.value.trim().toLowerCase();ti.value="";out("$ "+v);const f=CMD[v];out(f?f():"Команда не найдена. Введи help.");unlock("term");snd(600,.05)};setTimeout(()=>ti.focus(),800)};
