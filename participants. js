const participants = [
  {
    name: "김수진 (Kim SuJin)",
    country: "korea",
    image: "https://i.imgur.com/QL2FKUS_d.webp?maxwidth=760&fidelity=grand",
    birth: "2009.12.18",
    height: "170",
    mbti: "ENTJ",
    hobby: "Going to karaoke, Watching horror movies, eating spicy food",
    specialty: "Drawing"
  },
  {
    name: "최유민 (Choi YouMin)",
    country: "korea",
    image: "https://i.imgur.com/1ZOrjwe_d.webp?maxwidth=760&fidelity=grand",
    birth: "2007.10.15",
    height: "164.4",
    mbti: "ENTP",
    hobby: "Playing instruments, chilling to music",
    specialty: "Playing piano, guitar, drums, and oboe"
  },
  {
    name: "김예은 (Kim YeEun)",
    country: "korea",
    image: "https://i.imgur.com/EYgTdoq.jpeg",
    birth: "2009.03.31",
    height: "160",
    mbti: "ISFP",
    hobby: "Taking walks",
    specialty: "Gymnastics, cartwheel, Hapkido (nunchaku)"
  },
  {
    name: "한희연 (Han HeeYeon)",
    country: "korea",
    image: "https://i.imgur.com/L4CEU6m_d.webp?maxwidth=760&fidelity=grand",
    birth: "2006.06.10",
    height: "160",
    mbti: "ESFJ",
    hobby: "Badminton, watching dramas",
    specialty: "Playing piano, clarinet, solving a Rubik's Cube"
  },
  {
    name: "김채린 (Kim ChaeRin)",
    country: "korea",
    image: "https://i.imgur.com/ZnSOsgI.jpeg",
    birth: "2010.12.02",
    height: "165",
    mbti: "ESFJ",
    hobby: "Watching movies, shopping, watching MVs",
    specialty: "Singing"
  },
  {
    name: "김도이 (Kim DoYi)",
    country: "korea",
    image: "https://i.imgur.com/m9Dio4L.jpeg",
    birth: "2008.10.21",
    height: "159",
    mbti: "ISTP",
    hobby: "Watching anime",
    specialty: "Cartwheel, “Drip” triple high note"
  },
  {
    name: "권도희 (Kwon DoHee)",
    country: "korea",
    image: "https://i.imgur.com/KdFjuoB.jpeg",
    birth: "2009.11.17",
    height: "166",
    mbti: "INFP",
    hobby: "Watching horror movies",
    specialty: "Lyric writing"
  },
  {
    name: "이채현 (Lee ChaeHyun)",
    country: "korea",
    image: "https://i.imgur.com/M8ZzyUg.jpeg",
    birth: "2007.08.24",
    height: "165",
    mbti: "INFP",
    hobby: "Collecting perfume, watching cat videos",
    specialty: "Taekwondo"
  }
];

const participantsGrid = document.getElementById("participantsGrid");

participants.forEach(p => {
  const card = document.createElement("div");
  card.className = "profile-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <div class="country-tag ${p.country}-tag">${p.country.toUpperCase()}</div>
    <div class="profile-details">
      <p><b>Birth:</b> ${p.birth}</p>
      <p><b>Height(cm):</b> ${p.height}</p>
      <p><b>MBTI:</b> ${p.mbti}</p>
      <p><b>Hobby:</b> ${p.hobby}</p>
      <p><b>Specialty:</b> ${p.specialty}</p>
    </div>
  `;
  participantsGrid.appendChild(card);
});
