const contestants = {
  korea: [
    {name:"CHOI GAYOON", country:"korea", image:"https://i.imgur.com/iXCOXZr_d.webp"},
    {name:"CHOI YOUMIN", country:"korea", image:"https://i.imgur.com/1ZOrjwe_d.webp"},
    {name:"HAN HEEYEON", country:"korea", image:"https://i.imgur.com/L4CEU6m_d.webp"},
    {name:"KIM CHAERIN", country:"korea", image:"https://i.imgur.com/ZnSOsgI.jpeg"},
    {name:"KIM DOYI", country:"korea", image:"https://i.imgur.com/m9Dio4L.jpeg"},
    {name:"KIM SUJIN", country:"korea", image:"https://i.imgur.com/QL2FKUS_d.webp"},
    {name:"KIM YEEUN", country:"korea", image:"https://i.imgur.com/EYgTdoq.jpeg"},
    {name:"KWON DOHEE", country:"korea", image:"https://i.imgur.com/KdFjuoB.jpeg"},
    {name:"LEE CHAEHYUN", country:"korea", image:"https://i.imgur.com/M8ZzyUg.jpeg"},
    {name:"LEE CHAEYEON", country:"korea", image:"https://i.imgur.com/Z4jDB3h_d.webp"},
    {name:"LEE JOOEUN", country:"korea", image:"https://i.imgur.com/Hv2UhiV.jpeg"},
    {name:"LEE SEOHYUN", country:"korea", image:"https://i.imgur.com/rZcjbAQ_d.webp"},
    {name:"MIN JIHO", country:"korea", image:"https://i.imgur.com/FcvQMcR_d.webp"},
    {name:"NAM YUJU", country:"korea", image:"https://i.imgur.com/2RRYhVr_d.webp"},
    {name:"RYU HAJIN", country:"korea", image:"https://i.imgur.com/1KfZQGf_d.webp"},
    {name:"SHIN YOOKYUNG", country:"korea", image:"https://i.imgur.com/UhMyjfd_d.webp"},
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
  } else {
    alert('Please enter a number between 1 and 40');
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
        slot.innerHTML = `
          <div class="remove-btn" onclick="removeFromSlot(${slotIndex}, event)">×</div>
          <img src="${c.image}" class="contestant-img ${c.country}-border" onerror="this.src='https://via.placeholder.com/65/cccccc/666666?text=?'">
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

function renderContestants() {
  const grid = document.getElementById('contestantsGrid');
  grid.innerHTML = '';
  const all = [...contestants.korea, ...contestants.japan];
  
  all.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contestant-card';
    card.onclick = () => addToPyramid(c);
    card.innerHTML = `
      <img src="${c.image}" class="contestant-img ${c.country}-border" onerror="this.src='https://via.placeholder.com/65/cccccc/666666?text=?'">
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
  } else {
    alert('All slots are filled! Remove someone first or increase the top size.');
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
  exportContainer.style.position = "fixed";
  exportContainer.style.left = "-9999px";
  exportContainer.style.top = "0";
  exportContainer.style.padding = "20px";
  exportContainer.style.background = "white";
  exportContainer.style.borderRadius = "15px";
  exportContainer.style.zIndex = "10000";
  
  const pyramidClone = document.getElementById("pyramid").cloneNode(true);
  
  const removeButtons = pyramidClone.querySelectorAll('.remove-btn');
  removeButtons.forEach(btn => btn.remove());
  
  exportContainer.innerHTML = `
    <h2 style="text-align:center; margin-bottom:20px; color:#333;">MY HIPHOP PRINCESS TOP ${currentFormat}</h2>
  `;
  exportContainer.appendChild(pyramidClone);
  
  document.body.appendChild(exportContainer);
  
  setTimeout(() => {
    html2canvas(exportContainer, {
      useCORS: true,
      allowTaint: true,
      scale: 2,
      logging: false
    }).then(canvas => {
      try {
        const link = document.createElement("a");
        link.download = `my_hiphop_princess_top_${currentFormat}.png`;
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error creating download:', error);
        alert('Error creating image. Please try again.');
      } finally {
        document.body.removeChild(exportContainer);
      }
    }).catch(error => {
      console.error('Error with html2canvas:', error);
      alert('Error generating image. Please try again.');
      document.body.removeChild(exportContainer);
    });
  }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('setTopBtn').addEventListener('click', applyTopSize);
  document.getElementById('searchInput').addEventListener('input', filterContestants);
  document.getElementById('downloadBtn').addEventListener('click', downloadTop);
  
  applyTopSize();
  renderContestants();
});

window.removeFromSlot = removeFromSlot;
