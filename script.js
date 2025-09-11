const contestants = {
  korea: [
    {name:"CHOI GAYOON", country:"korea", image:"https://i.imgur.com/iXCOXZr_d.webp?maxwidth=760&fidelity=grand"},
    {name:"CHOI YOUMIN", country:"korea", image:"https://i.imgur.com/1ZOrjwe_d.webp?maxwidth=760&fidelity=grand"},
    {name:"HAN HEEYEON", country:"korea", image:"https://i.imgur.com/L4CEU6m_d.webp?maxwidth=760&fidelity=grand"},
    {name:"KIM CHAERIN", country:"korea", image:"https://i.imgur.com/ZnSOsgI.jpeg"},
    {name:"KIM DOYI", country:"korea", image:"https://i.imgur.com/m9Dio4L.jpeg"},
    {name:"KIM SUJIN", country:"korea", image:"https://i.imgur.com/QL2FKUS_d.webp?maxwidth=760&fidelity=grand"},
    {name:"KIM YEEUN", country:"korea", image:"https://i.imgur.com/EYgTdoq.jpeg"},
    {name:"KWON DOHEE", country:"korea", image:"https://i.imgur.com/KdFjuoB.jpeg"},
    {name:"LEE CHAEHYUN", country:"korea", image:"https://i.imgur.com/M8ZzyUg.jpeg"},
    {name:"LEE CHAEYEON", country:"korea", image:"https://i.imgur.com/Z4jDB3h_d.webp?maxwidth=760&fidelity=grand"},
    {name:"LEE JOOEUN", country:"korea", image:"https://i.imgur.com/Hv2UhiV.jpeg"},
    {name:"LEE SEOHYUN", country:"korea", image:"https://i.imgur.com/rZcjbAQ_d.webp?maxwidth=760&fidelity=grand"},
    {name:"MIN JIHO", country:"korea", image:"https://i.imgur.com/FcvQMcR_d.webp?maxwidth=760&fidelity=grand"},
    {name:"NAM YUJU", country:"korea", image:"https://i.imgur.com/2RRYhVr_d.webp?maxwidth=760&fidelity=grand"},
    {name:"RYU HAJIN", country:"korea", image:"https://i.imgur.com/1KfZQGf_d.webp?maxwidth=760&fidelity=grand"},
    {name:"SHIN YOOKYUNG", country:"korea", image:"https://i.imgur.com/UhMyjfd_d.webp?maxwidth=760&fidelity=grand"},
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
let pyramidSlots = Array(10).fill(null);
let availableContestants = [...contestants.korea, ...contestants.japan];

function changeFormat(event, format) {
  currentFormat = format;
  document.querySelectorAll('.format-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const currentTop = pyramidSlots.slice(0, currentFormat).filter(Boolean);
  pyramidSlots = Array(10).fill(null);
  currentTop.forEach((c, i) => { if(i < currentFormat) pyramidSlots[i] = c; });

  availableContestants = [...contestants.korea, ...contestants.japan]
    .filter(c => !pyramidSlots.includes(c));

  renderPyramid();
  renderContestants();
}

function renderPyramid() {
  const pyramid = document.getElementById('pyramid');
  pyramid.innerHTML = '';
  const structure = {6:[1,2,3], 8:[1,2,3,2], 10:[1,2,3,4]};
  let slotIndex = 0;
  structure[currentFormat].forEach(rowSlots => {
    const row = document.createElement('div');
    row.className = 'pyramid-row';
    for(let i=0;i<rowSlots;i++){
      const slot = document.createElement('div');
      slot.className = pyramidSlots[slotIndex] ? 'slot' : 'slot empty';
      if(pyramidSlots[slotIndex]){
        const contestant = pyramidSlots[slotIndex];
        slot.innerHTML = `
          <div class="remove-btn" onclick="removeFromSlot(${slotIndex}, event)">×</div>
          <img src="${contestant.image}" class="contestant-img ${contestant.country}-border">
          <div class="contestant-name">${contestant.name}</div>
        `;
      } else {
        slot.innerHTML = `<div class="slot-number">${slotIndex+1}</div>`;
        slot.onclick = () => { if(availableContestants.length>0) addToPyramid(availableContestants[0], slotIndex); };
      }
      row.appendChild(slot); slotIndex++;
    }
    pyramid.appendChild(row);
  });
}

function renderContestants() {
  const grid = document.getElementById('contestantsGrid');
  grid.innerHTML = '';
  availableContestants.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contestant-card';
    card.onclick = () => addToPyramid(c);
    card.innerHTML = `
      <img src="${c.image}" class="contestant-img ${c.country}-border">
      <div class="contestant-name">${c.name}</div>
      <div class="country-tag ${c.country}-tag">${c.country.toUpperCase()}</div>
    `;
    grid.appendChild(card);
  });
}

function addToPyramid(c, idx=null) {
  let slotIndex = idx!==null ? idx : pyramidSlots.findIndex((s,i)=> s===null && i<currentFormat);
  if(slotIndex !== -1){
    pyramidSlots[slotIndex]=c;
    availableContestants = availableContestants.filter(x=>x!==c);
    renderPyramid(); renderContestants();
  }
}

function removeFromSlot(idx, e) {
  if(e) e.stopPropagation();
  if(pyramidSlots[idx]){
    const c = pyramidSlots[idx];
    pyramidSlots[idx]=null;
    availableContestants.push(c);
    renderPyramid(); renderContestants();
  }
}

function downloadTop() {
  // Создаем временный контейнер только для пирамиды
  const pyramidContainer = document.getElementById('pyramid');
  
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.background = 'white';
  tempContainer.style.padding = '40px';
  tempContainer.style.borderRadius = '15px';
  tempContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
  
  // Клонируем пирамиду
  const clonedPyramid = pyramidContainer.cloneNode(true);
  
  // Улучшаем отображение для скриншота
  clonedPyramid.style.display = 'flex';
  clonedPyramid.style.flexDirection = 'column';
  clonedPyramid.style.alignItems = 'center';
  clonedPyramid.style.gap = '15px';
  
  // Увеличиваем размеры элементов
  const slots = clonedPyramid.querySelectorAll('.slot');
  slots.forEach(slot => {
    slot.style.minWidth = '120px';
    slot.style.margin = '5px';
    
    const img = slot.querySelector('.contestant-img');
    if(img) {
      img.style.width = '90px';
      img.style.height = '90px';
      img.style.borderWidth = '4px';
      img.style.marginBottom = '10px';
    }
    
    const name = slot.querySelector('.contestant-name');
    if(name) {
      name.style.fontSize = '16px';
      name.style.maxWidth = '140px';
      name.style.whiteSpace = 'normal';
      name.style.textOverflow = 'clip';
      name.style.height = 'auto';
      name.style.lineHeight = '1.3';
      name.style.fontWeight = 'bold';
    }
    
    // Убираем кнопки удаления и номера
    const removeBtn = slot.querySelector('.remove-btn');
    if(removeBtn) removeBtn.style.display = 'none';
    
    const slotNumber = slot.querySelector('.slot-number');
    if(slotNumber) slotNumber.style.display = 'none';
  });
  
  // Добавляем заголовок
  const title = document.createElement('h2');
  title.textContent = `MY TOP ${currentFormat}`;
  title.style.marginBottom = '30px';
  title.style.fontSize = '28px';
  title.style.color = '#222';
  title.style.textAlign = 'center';
  
  tempContainer.appendChild(title);
  tempContainer.appendChild(clonedPyramid);
  document.body.appendChild(tempContainer);
  
  // Создаем скриншот
  html2canvas(tempContainer, {
    scale: 3, // Высокое качество
    logging: false,
    useCORS: true,
    backgroundColor: '#ffffff'
  }).then(canvas => {
    // Удаляем временный контейнер
    document.body.removeChild(tempContainer);
    
    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.download = `my-top-${currentFormat}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  });
}

renderPyramid();
renderContestants();
