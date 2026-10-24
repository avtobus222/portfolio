/* Разделы сайта: названия, цвета, иконки (карусель и меню) */

const n3=PROJECTS.filter(p=>p.cat!=="2D").length,n2=PROJECTS.filter(p=>p.cat==="2D").length;
const SC={
 about:{t:"Обо мне",sub:"Кто я, чему учусь и что умею",c:"#ffd62e",i:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'},
 "3d":{t:"3D и 2D",sub:"Модели в 3ds Max и интерфейсы в Photoshop",c:"#b8a0ff",i:'<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>'},
 unity:{t:"Unity",sub:UNITY.length+" игры, в которые можно поиграть",c:"#6ee7c8",i:'<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10v5M4.5 12.5h5"/><circle cx="16" cy="11.5" r="1"/><circle cx="18.5" cy="14" r="1"/>'},
 gd:{t:"Геймдизайн",sub:GD.length+" кейсов, графики и симулятор",c:"#ff7ab8",i:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>'},
 contact:{t:"Контакты",sub:"Почта, Telegram и терминал",c:"#7ac8ff",i:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'}};
const ORD=Object.keys(SC),N=ORD.length,step=360/N;
