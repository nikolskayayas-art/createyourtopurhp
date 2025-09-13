const participants = [
  {
    name: "최가윤 (Choi GaYoon)",
    country: "korea",
    image: "https://files.catbox.moe/vx7qli.jpeg",
    birth: "2009.08.17",
    height: "168",
    mbti: "ISTP",
    hobby: "Shopping",
    specialty: "Filming challenge videos"
  },
  {
    name: "김수진 (Kim SuJin)",
    country: "korea",
    image: "https://files.catbox.moe/4oxs1h.jpeg",
    birth: "2009.12.18",
    height: "170",
    mbti: "ENTJ",
    hobby: "Going to karaoke, Watching horror movies, eating spicy food",
    specialty: "Drawing"
  },
  {
    name: "최유민 (Choi YouMin)",
    country: "korea",
    image: "https://files.catbox.moe/i5ktqz.jpeg",
    birth: "2007.10.15",
    height: "164.4",
    mbti: "ENTP",
    hobby: "Playing instruments, chilling to music",
    specialty: "Playing piano, guitar, drums, and oboe"
  },
  {
    name: "김예은 (Kim YeEun)",
    country: "korea",
    image: "https://files.catbox.moe/qr7hhf.jpeg",
    birth: "2009.03.31",
    height: "160",
    mbti: "ISFP",
    hobby: "Taking walks",
    specialty: "Gymnastics, cartwheel, Hapkido (nunchaku)"
  },
  {
    name: "한희연 (Han HeeYeon)",
    country: "korea",
    image: "https://files.catbox.moe/a5nf0r.jpeg",
    birth: "2006.06.10",
    height: "160",
    mbti: "ESFJ",
    hobby: "Badminton, watching dramas",
    specialty: "Playing piano, clarinet, solving a Rubik's Cube"
  },
  {
    name: "김채린 (Kim ChaeRin)",
    country: "korea",
    image: "https://files.catbox.moe/ln4sgr.jpeg",
    birth: "2010.12.02",
    height: "165",
    mbti: "ESFJ",
    hobby: "Watching movies, shopping, watching MVs",
    specialty: "Singing"
  },
  {
    name: "김도이 (Kim DoYi)",
    country: "korea",
    image: "https://files.catbox.moe/lc3qv1.jpeg",
    birth: "2008.10.21",
    height: "159",
    mbti: "ISTP",
    hobby: "Watching anime",
    specialty: "Cartwheel, \"Drip\" triple high note"
  },
  {
    name: "권도희 (Kwon DoHee)",
    country: "korea",
    image: "https://files.catbox.moe/oytqr5.jpeg",
    birth: "2009.11.17",
    height: "166",
    mbti: "INFP",
    hobby: "Watching horror movies",
    specialty: "Lyric writing"
  },
  {
    name: "이채현 (Lee ChaeHyun)",
    country: "korea",
    image: "https://files.catbox.moe/fgcjp5.jpeg",
    birth: "2007.08.24",
    height: "165",
    mbti: "INFP",
    hobby: "Collecting perfume, watching cat videos",
    specialty: "Taekwondo"
  },
  {
    name: "이주은 (Lee JooEun)",
    country: "korea",
    image: "https://files.catbox.moe/pypaek.jpeg",
    birth: "2007.08.01",
    height: "160",
    mbti: "ESTP",
    hobby: "Dancing, reading, editing photos and videos",
    specialty: "Tumbling"
  },
  {
    name: "이채연 (Lee ChaeYeon)",
    country: "korea",
    image: "https://files.catbox.moe/7j75w9.jpeg",
    birth: "2009.03.30",
    height: "158.7",
    mbti: "ISTP",
    hobby: "Foodie adventures with friends",
    specialty: "Dancing"
  },
  {
    name: "이서현 (Lee SeoHyun)",
    country: "korea",
    image: "https://files.catbox.moe/omwhe7.jpeg",
    birth: "2010.11.14",
    height: "162",
    mbti: "INTJ",
    hobby: "Watching musicals, reading",
    specialty: "Singing musical numbers"
  },
  {
    name: "민지호 (Min JiHo)",
    country: "korea",
    image: "https://files.catbox.moe/wix8he.jpeg",
    birth: "2009.08.20",
    height: "170",
    mbti: "ISTP",
    hobby: "Journaling every day",
    specialty: "Singing, acoustic guitar"
  },
  {
    name: "남유주 (Nam YuJu)",
    country: "korea",
    image: "https://files.catbox.moe/8dse6u.jpeg",
    birth: "2007.07.28",
    height: "166.5",
    mbti: "ISFP",
    hobby: "Reading, transcribing, journaling",
    specialty: "Japanese, acting"
  },
  {
    name: "류하진 (Ryu HaJin)",
    country: "korea",
    image: "https://files.catbox.moe/47rjjx.jpeg",
    birth: "2009.03.04",
    height: "163",
    mbti: "ISTP",
    hobby: "Shopping for clothes, eating spicy food",
    specialty: "Perfect pitch (identifying piano white-key notes by ear)"
  },
  {
    name: "신유경 (Shin YooKyung)",
    country: "korea",
    image: "https://files.catbox.moe/ggphe5.jpeg",
    birth: "2011.02.10",
    height: "164",
    mbti: "ESFP",
    hobby: "Dancing",
    specialty: "Playing guitar"
  },
  {
    name: "양재윤 (Yang JaeYun)",
    country: "korea",
    image: "https://files.catbox.moe/n07gsj.jpeg",
    birth: "2010.03.17",
    height: "164",
    mbti: "ESTJ",
    hobby: "Listening to music, reading, Cycling, badminton",
    specialty: "Acting, conversational English"
  },
  {
    name: "윤채은 (Yoon ChaeEun)",
    country: "korea",
    image: "https://files.catbox.moe/2g9ia8.jpeg",
    birth: "2005.12.10",
    height: "168",
    mbti: "ISFP",
    hobby: "Dancing, listening to music",
    specialty: "Belly dance, Chinese"
  },
  {
    name: "윤수인 (Yoon SooIn)",
    country: "korea",
    image: "https://files.catbox.moe/q8x265.jpeg",
    birth: "2005.07.21",
    height: "164",
    mbti: "ENTJ",
    hobby: "Drawing, creating choreography, watching movies",
    specialty: "Choreography across genres"
  },
  {
    name: "윤서영 (Yun SeoYoung)",
    country: "korea",
    image: "https://files.catbox.moe/r1l89v.jpeg",
    birth: "2007.05.07",
    height: "153",
    mbti: "INFP",
    hobby: "Songwriting, watching and analyzing music videos, Traveling, working out",
    specialty: "Taekwondo, rap, dance, producing, choreography, observing/describing people"
  },

  /* --- JAPAN --- */
  {
    name: "코코로 (Cocoro)",
    country: "japan",
    image: "https://files.catbox.moe/rrdnoj.jpeg",
    birth: "2009.04.21",
    height: "170",
    mbti: "INTP",
    hobby: "Living a different concept every day",
    specialty: "Dislocating shoulder joint"
  },
  {
    name: "마유 (Mayu)",
    country: "japan",
    image: "https://files.catbox.moe/5f3h6j.jpeg",
    birth: "2011.07.26",
    height: "158",
    mbti: "ESFJ",
    hobby: "Camping, drawing, buying pretty clothes, Posting dance videos, Pilates",
    specialty: "Calligraphy, front splits, abdominal waves"
  },
  {
    name: "미야비 (Miyabi)",
    country: "japan",
    image: "https://files.catbox.moe/xyl0ew.jpeg",
    birth: "2007.05.03",
    height: "168",
    mbti: "ENFP",
    hobby: "Watching movies, dramas, anime, reading comics",
    specialty: "Acrobatics"
  },
  {
    name: "미아 (Mia)",
    country: "japan",
    image: "https://files.catbox.moe/vbymqk.jpeg",
    birth: "2008.10.21",
    height: "168",
    mbti: "ESFP",
    hobby: "Watching Korean dramas",
    specialty: "Acrobatics"
  },
  {
    name: "히나 (Hina)",
    country: "japan",
    image: "https://files.catbox.moe/ltmgzj.jpeg",
    birth: "2006.05.29",
    height: "162",
    mbti: "ISTP",
    hobby: "Makeup, listening to music",
    specialty: "Cooking"
  },
  {
    name: "코코 (Koko)",
    country: "japan",
    image: "https://files.catbox.moe/2953jj.jpeg",
    birth: "2004.09.02",
    height: "167",
    mbti: "ENFP",
    hobby: "Listening to various music genres",
    specialty: "Rapping in English"
  },
  {
    name: "미리카 (Mirika)",
    country: "japan",
    image: "https://files.catbox.moe/o2ic97.jpeg",
    birth: "2008.08.21",
    height: "156",
    mbti: "ENFP",
    hobby: "Dressing up",
    specialty: "Singing musical numbers"
  },
  {
    name: "카린 (Karin)",
    country: "japan",
    image: "https://files.catbox.moe/dq319b.jpeg",
    birth: "2011.01.28",
    height: "170",
    mbti: "ISTP",
    hobby: "Chatting",
    specialty: "Aegyo"
  },
  {
    name: "하나비 (Hanabi)",
    country: "japan",
    image: "https://files.catbox.moe/2bvclr.jpeg",
    birth: "2005.08.25",
    height: "162",
    mbti: "ISFP",
    hobby: "Doing my own nails",
    specialty: "Knitting"
  },
  {
    name: "우라라 (Urara)",
    country: "japan",
    image: "https://files.catbox.moe/x6724l.jpeg",
    birth: "2007.05.19",
    height: "160",
    mbti: "ISTP",
    hobby: "Watching animation, taking walks",
    specialty: "Sewing, massage"
  },
  {
    name: "유논 (Yunon)",
    country: "japan",
    image: "https://files.catbox.moe/k1qihr.jpeg",
    birth: "2008.06.23",
    height: "160",
    mbti: "ENFP",
    hobby: "Doing my own nails",
    specialty: "Cooking"
  }
];

const participantsGrid = document.getElementById("participantsGrid");

// Функция для исправления URL imgur изображений
function fixImgurUrl(url) {
  if (url.includes('i.imgur.com') && url.includes('_d.webp')) {
    // Убираем параметры и меняем формат для лучшей совместимости
    return url.replace('_d.webp?maxwidth=760&fidelity=grand', '.jpg');
  }
  return url;
}

participants.forEach(p => {
  const card = document.createElement("div");
  card.className = "profile-card";
  const initials = p.name.split(' ').map(word => word[0]).join('').slice(0, 2);
  const imgUrl = fixImgurUrl(p.image);
  
  card.innerHTML = `
    <img src="${imgUrl}" alt="${p.name}" loading="lazy" 
         onerror="
           if (!this.retried) {
             this.retried = true;
             this.src = '${p.image.replace('i.imgur.com', 'imgur.com').replace('_d.webp?maxwidth=760&fidelity=grand', '.jpg')}';
           } else {
             this.style.backgroundColor='${p.country === 'korea' ? '#002080' : '#a6005a'}';
             this.style.color='white';
             this.style.display='flex';
             this.style.alignItems='center';
             this.style.justifyContent='center';
             this.style.fontSize='32px';
             this.style.fontWeight='bold';
             this.textContent='${initials}';
           }
         ">
    <h3>${p.name}</h3>
    <div class="country-tag ${p.country}-tag">${p.country.toUpperCase()}</div>
    <div class="profile-details">
      <p><b>Birth:</b> ${p.birth}</p>
      <p><b>Height:</b> ${p.height} cm</p>
      <p><b>MBTI:</b> ${p.mbti}</p>
      <p><b>Hobby:</b> ${p.hobby}</p>
      <p><b>Specialty:</b> ${p.specialty}</p>
    </div>
  `;
  card.addEventListener('click', function() {
    this.classList.toggle('expanded');
  });
  participantsGrid.appendChild(card);
});