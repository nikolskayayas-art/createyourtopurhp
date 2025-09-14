const contestants = {
  korea: [
    {name:"CHOI GAYOON", country:"korea", image:"https://files.catbox.moe/vx7qli.jpeg"},
    {name:"CHOI YOUMIN", country:"korea", image:"https://files.catbox.moe/i5ktqz.jpeg"},
    {name:"HAN HEEYEON", country:"korea", image:"https://files.catbox.moe/a5nf0r.jpeg"},
    {name:"KIM CHAERIN", country:"korea", image:"https://files.catbox.moe/ln4sgr.jpeg"},
    {name:"KIM DOYI", country:"korea", image:"https://files.catbox.moe/lc3qv1.jpeg"},
    {name:"KIM SUJIN", country:"korea", image:"https://files.catbox.moe/4oxs1h.jpeg"},
    {name:"KIM YEEUN", country:"korea", image:"https://files.catbox.moe/qr7hhf.jpeg"},
    {name:"KWON DOHEE", country:"korea", image:"https://files.catbox.moe/oytqr5.jpeg"},
    {name:"LEE CHAEHYUN", country:"korea", image:"https://files.catbox.moe/fgcjp5.jpeg"},
    {name:"LEE CHAEYEON", country:"korea", image:"https://files.catbox.moe/7j75w9.jpeg"},
    {name:"LEE JOOEUN", country:"korea", image:"https://files.catbox.moe/pypaek.jpeg"},
    {name:"LEE SEOHYUN", country:"korea", image:"https://files.catbox.moe/omwhe7.jpeg"},
    {name:"MIN JIHO", country:"korea", image:"https://files.catbox.moe/wix8he.jpeg"},
    {name:"NAM YUJU", country:"korea", image:"https://files.catbox.moe/8dse6u.jpeg"},
    {name:"RYU HAJIN", country:"korea", image:"https://files.catbox.moe/47rjjx.jpeg"},
    {name:"SHIN YOOKYUNG", country:"korea", image:"https://files.catbox.moe/ggphe5.jpeg"},
    {name:"YANG JAEYUN", country:"korea", image:"https://files.catbox.moe/n07gsj.jpeg"},
    {name:"YOON SOOIN", country:"korea", image:"https://files.catbox.moe/q8x265.jpeg"},
    {name:"YOON CHAEEUN", country:"korea", image:"https://files.catbox.moe/2g9ia8.jpeg"},
    {name:"YUN SEOYOUNG", country:"korea", image:"https://files.catbox.moe/r1l89v.jpeg"}
  ],
  japan: [
    {name:"COCORO", country:"japan", image:"https://files.catbox.moe/rrdnoj.jpeg"},
    {name:"HANABI", country:"japan", image:"https://files.catbox.moe/2bvclr.jpeg"},
    {name:"HINA", country:"japan", image:"https://files.catbox.moe/ltmgzj.jpeg"},
    {name:"KARIN", country:"japan", image:"https://files.catbox.moe/dq319b.jpeg"},
    {name:"KOKO", country:"japan", image:"https://files.catbox.moe/2953jj.jpeg"},
    {name:"MAYU", country:"japan", image:"https://files.catbox.moe/5f3h6j.jpeg"},
    {name:"MIA", country:"japan", image:"https://files.catbox.moe/vbymqk.jpeg"},
    {name:"MIRIKA", country:"japan", image:"https://files.catbox.moe/o2ic97.jpeg"},
    {name:"MIYABI", country:"japan", image:"https://files.catbox.moe/xyl0ew.jpeg"},
    {name:"NANA", country:"japan", image:"https://files.catbox.moe/00pgec.jpeg"},
    {name:"NATSUHO", country:"japan", image:"https://files.catbox.moe/59yxls.jpeg"},
    {name:"NIKO", country:"japan", image:"https://files.catbox.moe/ujjen2.jpeg"},
    {name:"RINO", country:"japan", image:"https://files.catbox.moe/ju3y20.jpeg"},
    {name:"SAAYA", country:"japan", image:"https://files.catbox.moe/kl0iab.jpeg"},
    {name:"SASA", country:"japan", image:"https://files.catbox.moe/2frtrj.jpeg"},
    {name:"SEA", country:"japan", image:"https://files.catbox.moe/6h0ccd.jpeg"},
    {name:"SENA", country:"japan", image:"https://files.catbox.moe/mesqqc.jpeg"},
    {name:"SHIHO", country:"japan", image:"https://files.catbox.moe/e7wn7o.jpeg"},
    {name:"URARA", country:"japan", image:"https://files.catbox.moe/x6724l.jpeg"},
    {name:"YUNON", country:"japan", image:"https://files.catbox.moe/k1qihr.jpeg"}
  ]
};

let currentFormat = 8;
let pyramidSlots = [];

function applyTopSize() {
  const size = parseInt(document.getElementById('topSize').value);
  if(size >= 1 && size <= 40){
    currentFormat = size;
    pyramidSlots = Array(size).fill(null);
    renderPyramid();
  }
}

function renderPyramid() {
  const pyramid = document.getElementById('pyramid');
  pyramid.innerHTML = '';
  let slotIndex = 0;
  while(slotIndex < currentFormat){
    const row = document.createElement('div');
    row.className = 'pyramid-row';
    const perRow = Math.min(slotIndex+1, 6);
    for(let i=0;i<perRow && slotIndex<currentFormat;i++){
      const slot = document.createElement('div');
      slot.className = 'slot';
      if(pyramidSlots[slotIndex]){
        const c = pyramidSlots[slotIndex];
        const imgUrl = fixImgurUrl(c.image);
        const initials = c.name.split(' ')[0];
        slot.innerHTML = `
          <div class="remove-btn" onclick="removeFromSlot(${slotIndex}, event)">×</div>
          <img src="${imgUrl}" class="contestant-img ${c.country}-border" crossorigin="anonymous" 
               onerror="
                 if (!this.retried) {
                   this.retried = true;
                   this.src = '${c.image.replace('i.imgur.com', 'imgur.com').replace('_d.webp', '.jpg')}';
                 } else {
                   this.style.backgroundColor='${c.country === 'korea' ? '#002080' : '#a6005a'}';
                   this.style.color='white';
                   this.style.display='flex';
                   this.style.alignItems='center';
                   this.style.justifyContent='center';
                   this.style.fontSize='10px';
                   this.style.fontWeight='bold';
                   this.textContent='${initials}';
                 }
               ">
          ${slotIndex===0 
            ? `<svg class="crown" viewBox="0 0 24 24">
                 <path d="M5 20h14l-1-9-4 3-3-7-3 7-4-3z"/>
               </svg>
               <div class="crown-text">1</div>`
            : `<div class="slot-badge">${slotIndex+1}</div>`}
          <div class="contestant-name">${c.name}</div>
        `;
      } else {
        slot.innerHTML = `<div class="slot-circle">${slotIndex+1}</div>`;
      }
      row.appendChild(slot);
      slotIndex++;
    }
    pyramid.appendChild(row);
  }
  updateDisabledCards();
}


// Функция для исправления URL imgur изображений
function fixImgurUrl(url) {
  if (url.includes('i.imgur.com') && url.includes('_d.webp')) {
    // Убираем _d и меняем формат на jpg для лучшей совместимости
    return url.replace('_d.webp', '.jpg');
  }
  return url;
}

function renderContestants() {
  const grid = document.getElementById('contestantsGrid');
  grid.innerHTML = '';
  const all = [...contestants.korea, ...contestants.japan];
  all.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contestant-card';
    card.onclick = () => addToPyramid(c);
    const imgUrl = fixImgurUrl(c.image);
    const initials = c.name.split(' ')[0];
    card.innerHTML = `
      <img src="${imgUrl}" class="contestant-img ${c.country}-border" crossorigin="anonymous" loading="lazy" 
           onerror="
             if (!this.retried) {
               this.retried = true;
               this.src = '${c.image.replace('i.imgur.com', 'imgur.com').replace('_d.webp', '.jpg')}';
             } else {
               this.style.backgroundColor='${c.country === 'korea' ? '#002080' : '#a6005a'}';
               this.style.color='white';
               this.style.display='flex';
               this.style.alignItems='center';
               this.style.justifyContent='center';
               this.style.fontSize='8px';
               this.style.fontWeight='bold';
               this.textContent='${initials}';
             }
           ">
      <div class="contestant-name">${c.name}</div>
      <div class="country-tag ${c.country}-tag">${c.country.toUpperCase()}</div>
    `;
    grid.appendChild(card);
  });
}

function filterContestants() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const grid = document.getElementById('contestantsGrid');
  Array.from(grid.children).forEach(card => {
    const name = card.querySelector('.contestant-name').innerText.toLowerCase();
    card.style.display = name.includes(search) ? "flex" : "none";
  });
}

function addToPyramid(c) {
  let idx = pyramidSlots.findIndex(s => s===null);
  if(idx !== -1){
    pyramidSlots[idx]=c;
    renderPyramid();
  }
}

function removeFromSlot(idx, e) {
  if(e) e.stopPropagation();
  pyramidSlots[idx]=null;
  renderPyramid();
}

function updateDisabledCards() {
  const grid = document.getElementById('contestantsGrid');
  const allCards = Array.from(grid.children);
  const selectedNames = pyramidSlots.filter(Boolean).map(c => c.name);
  allCards.forEach(card => {
    const name = card.querySelector('.contestant-name').innerText;
    if(selectedNames.includes(name)){
      card.classList.add("disabled");
    } else {
      card.classList.remove("disabled");
    }
  });
}

function downloadTop() {
  const exportContainer = document.createElement("div");
  exportContainer.style.padding = "20px";
  exportContainer.style.background = "white";
  exportContainer.style.fontFamily = "Arial, sans-serif";
  exportContainer.innerHTML = `
    <h2 style="text-align:center; margin-bottom:10px; color:#333;">my hiphop princess top ${currentFormat}</h2>
  `;
  
  const clone = document.getElementById("pyramid").cloneNode(true);
  
  // Применяем все необходимые стили к клону
  const style = document.createElement('style');
  style.textContent = `
    .pyramid-container { 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      gap: 8px; 
    }
    .pyramid-row { 
      display: flex; 
      justify-content: center; 
      gap: 6px; 
    }
    .slot { 
      position: relative; 
      width: 80px; 
      height: 100px; 
      background: white;
      border: 2px solid #ddd; 
      border-radius: 8px; 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      overflow: hidden;
    }
    .contestant-img { 
      width: 76px; 
      height: 76px; 
      object-fit: cover; 
      border-radius: 6px; 
    }
    .korea-border { 
      border: 2px solid #002080 !important; 
    }
    .japan-border { 
      border: 2px solid #a6005a !important; 
    }
    .contestant-name { 
      font-size: 8px; 
      text-align: center; 
      color: #333; 
      margin-top: 2px; 
      line-height: 1; 
      font-weight: bold;
    }
    .slot-badge {
      position: absolute;
      bottom: 18px;
      background: #7a1fd0; 
      color: white;
      font-size: 11px;
      width: 20px; 
      height: 20px; 
      border-radius: 50%;
      display: flex; 
      align-items: center; 
      justify-content: center;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(122, 31, 208, 0.4);
    }
    .crown {
      position: absolute;
      bottom: 18px;
      width: 26px; 
      height: 26px;
      fill: #7a1fd0;
    }
    .crown-text {
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: bold;
      color: white;
      z-index: 10;
    }
    .slot-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: #999;
      font-size: 14px;
      font-weight: bold;
    }
    .slot.innerHTML = `
  <div class="remove-btn" onclick="removeFromSlot(${slotIndex}, event)">×</div>
  <img src="${c.image}" class="contestant-img ${c.country}-border">
  
  exportContainer.appendChild(style);
  exportContainer.appendChild(clone);

  document.body.appendChild(exportContainer);
  html2canvas(exportContainer, {
    useCORS: true,
    allowTaint: true,
    scale: 2,
    backgroundColor: "white",
    logging: false
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = `my_hiphop_princess_top_${currentFormat}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    document.body.removeChild(exportContainer);
  }).catch(err => {
    console.error("Ошибка при скачивании:", err);
    document.body.removeChild(exportContainer);
  });
}

applyTopSize();
renderContestants();
