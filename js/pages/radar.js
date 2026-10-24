/* Радар навыков (SVG) */

const radar=()=>{const n=SKILLS.length,C=170,r=120,pt=(i,v)=>{const a=i/n*Math.PI*2-Math.PI/2;return[C+Math.cos(a)*r*v/100,C+Math.sin(a)*r*v/100]};let g="";
 [25,50,75,100].forEach(v=>g+=`<polygon points="${SKILLS.map((_,i)=>pt(i,v).join(",")).join(" ")}" fill="none" stroke="#2d1d52"/>`);
 SKILLS.forEach(([nm],i)=>{const[x,y]=pt(i,100),[lx,ly]=pt(i,124);g+=`<line x1="${C}" y1="${C}" x2="${x}" y2="${y}" stroke="#2d1d52"/><text x="${lx}" y="${ly+4}" text-anchor="middle" fill="#cfc3f5" font-size="11">${nm}</text>`});
 g+=`<polygon points="${SKILLS.map(([,v],i)=>pt(i,v).join(",")).join(" ")}" fill="${PC[1]}" fill-opacity=".25" stroke="${PC[1]}" stroke-width="2.5"/>`+SKILLS.map(([nm,v],i)=>{const[x,y]=pt(i,v);return`<circle cx="${x}" cy="${y}" r="5" fill="${PC[0]}"><title>${nm}: ${LV(v)}</title></circle>`}).join("");
 return`<svg viewBox="-30 0 400 340">${g}</svg>`};
