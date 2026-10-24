/* Главная: цифры, теги-ссылки, меняющаяся роль */

const hub=$("#hub"),ring=$("#ring"),st=$("#st");
$("#hst").innerHTML=[["SLEDAK","стажёр-геймдизайнер в команде"],["Low Poly","научная работа, опрос 140 человек"],[GD.length,"кейсов по геймдизайну"],["3 курс","БГУИР · 2024–2028"]].map(([b,s])=>`<div><b>${b}</b><small>${s}</small></div>`).join("");
$("#hch").innerHTML=[["Game Design","gd"],["GDD · ТЗ","gd"],["3ds Max","3d"],["Photoshop","3d"],["Unity","unity"]].map(([s,k])=>`<span data-k="${k}">${s}</span>`).join("");
$$("#hch span").forEach(s=>s.onclick=e=>{const r=s.getBoundingClientRect();show(s.dataset.k,r.left+r.width/2,r.top+r.height/2)});

/* роли */
let ri=0;
const role=$("#role");const setRole=()=>{role.innerHTML=`<span>${ROLES[ri++%ROLES.length]}</span>`};setRole();setInterval(setRole,2800);
