/* Геймдизайн: интерактивная кривая ценности */

/* value curve */
const VCL=["Атмосфера","Беспомощность","Честный ИИ","Сюжет","Ресурсы","Рассудок","Реиграбельность","Кооператив","Графика","Порог входа"];
const VC=[{n:"Alien: Isolation",c:"#ff5fd2",d:[5,4,3,4,3,1,1,0,5,2]},{n:"Amnesia: TDD",c:"#a78bfa",d:[5,5,1,5,4,5,1,0,3,3]},{n:"Outlast",c:"#22d3ee",d:[4,5,2,4,3,2,1,0,4,4]},{n:"Amnesia: Bunker",c:"#fbbf24",d:[4,4,2,3,4,1,3,0,4,3]},{n:"Hello Neighbor",c:"#4ade80",d:[3,3,2,2,2,1,2,0,2,2]},{n:"Phasmophobia",c:"#f8fafc",d:[4,3,3,1,3,4,3,5,3,4]}];
const vcOn=new Set(VC.map((_,i)=>i));let vcHl=-1,vcFirst=true;
function drawVC(){if(!$("#vc"))return;const W=800,L0=40,R0=780,T=16,B=240,x=i=>L0+(R0-L0)*i/9,y=v=>B-(B-T)*v/5;let g="";
 [2,6].forEach(i=>g+=`<rect x="${x(i)-36}" y="${T-6}" width="72" height="${B-T+12}" rx="10" fill="${PC[1]}" opacity=".14"/>`);
 for(let v=0;v<=5;v++)g+=`<line x1="${L0}" x2="${R0}" y1="${y(v)}" y2="${y(v)}" stroke="#2d1d52" stroke-dasharray="3 5"/><text x="${L0-10}" y="${y(v)+4}" text-anchor="end" fill="#9b8fc0" font-size="11">${v}</text>`;
 VCL.forEach((l,i)=>g+=`<text transform="translate(${x(i)},${B+18}) rotate(-28)" text-anchor="end" fill="#9b8fc0" font-size="12">${l}</text>`);
 VC.forEach((s,i)=>{if(!vcOn.has(i))return;const o=vcHl<0||vcHl===i?1:.12;g+=`<g opacity="${o}"><polyline class="${vcFirst?"vl":""}" points="${s.d.map((v,k)=>x(k)+","+y(v)).join(" ")}" fill="none" stroke="${s.c}" stroke-width="${vcHl===i?4:2.5}" stroke-linejoin="round"/>`+s.d.map((v,k)=>`<circle cx="${x(k)}" cy="${y(v)}" r="4.5" fill="${s.c}"><title>${s.n}: ${VCL[k]} — ${v}/5</title></circle>`).join("")+"</g>"});
 $("#vc").innerHTML=`<svg viewBox="0 0 ${W} 300" width="100%">${g}</svg>`;vcFirst=false}
function vcInit(){vcFirst=true;vcOn.clear();VC.forEach((_,i)=>vcOn.add(i));$("#leg").innerHTML=VC.map((s,i)=>`<button class="lgb" data-i="${i}"><i style="background:${s.c}"></i>${s.n}</button>`).join("");
 $$(".lgb").forEach(b=>{const i=+b.dataset.i;b.onclick=()=>{vcOn.has(i)?vcOn.delete(i):vcOn.add(i);b.classList.toggle("off",!vcOn.has(i));drawVC();snd(480,.04)};b.onmouseenter=()=>{vcHl=i;drawVC()};b.onmouseleave=()=>{vcHl=-1;drawVC()}});drawVC()}
