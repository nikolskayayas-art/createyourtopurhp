const episodeNames = {
  ru: [
    "первый эпизод", "второй эпизод", "третий эпизод", 
    "четвертый эпизод", "пятый эпизод", "шестой эпизод",
    "седьмой эпизод", "восьмой эпизод", "девятый эпизод", "десятый эпизод"
  ],
  en: [
    "first episode", "second episode", "third episode", 
    "fourth episode", "fifth episode", "sixth episode",
    "seventh episode", "eighth episode", "ninth episode", "tenth episode"
  ]
};

const data = {
  ru: [
    {num:1, date:"16/10", full:"Дата выхода: 16 октября",
      links:[{text:"Смотреть на YouTube", url:"https://www.youtube.com/live/RBymY7B1XuA?si=N_lwCcNqNsKKvCwU"}],
      embed:"https://www.youtube.com/embed/RBymY7B1XuA"},
    {num:2, date:"23/10", full:"Дата выхода: 23 октября",
      links:[
        {text:"Смотреть на Dailymotion", url:"https://www.dailymotion.com/video/x9syjhm"},
        {text:"Смотреть в VK", url:"https://vkvideo.ru/playlist/-215535783_216/video-215535783_456245373?linked=1"}],
      note:"Русские и английские субтитры доступны в VK",
      embed:"https://www.dailymotion.com/embed/video/x9syjhm"},
    {num:3, date:"30/10", full:"Дата выхода: 30 октября",
      links:[
        {text:"Смотреть на Dailymotion", url:"https://www.dailymotion.com/video/x9syjv0"},
        {text:"Смотреть в VK", url:"https://vkvideo.ru/playlist/-215535783_216/video-215535783_456245456?linked=1"}],
      note:"Русские и английские субтитры доступны в VK",
      embed:"https://www.dailymotion.com/embed/video/x9syjv0"},
    {num:4, date:"06/11", full:"Дата выхода: 6 ноября",
      links:[{text:"Смотреть в VK", url:"https://vkvideo.ru/video-215535783_456245523"}],
      msgTitle:"Просмотр возможен только в VK",
      msgText:"Для просмотра этого эпизода нужно авторизоваться в VK"},
    {num:5, date:"13/11", full:"Дата выхода: 13 ноября",
      links:[{text:"Смотреть в VK", url:"https://vkvideo.ru/video-215535783_456245609"}],
      msgTitle:"Просмотр возможен только в VK",
      msgText:"Для просмотра этого эпизода нужно авторизоваться в VK"},
    {num:6, date:"20/11", full:"Дата выхода: 20 ноября",
      links:[{text:"Скоро доступно", url:"#"}],
      msgTitle:"Эпизод появится позже",
      msgText:"Этот эпизод будет доступен чуть позднее"},
    {num:7, date:"27/11", full:"Дата выхода: 27 ноября",
      links:[{text:"Скоро доступно", url:"#"}],
      msgTitle:"Эпизод появится позже",
      msgText:"Этот эпизод будет доступен чуть позднее"},
    {num:8, date:"04/12", full:"Дата выхода: 4 декабря",
      links:[{text:"Скоро доступно", url:"#"}],
      msgTitle:"Эпизод появится позже",
      msgText:"Этот эпизод будет доступен чуть позднее"},
    {num:9, date:"11/12", full:"Дата выхода: 11 декабря",
      links:[{text:"Скоро доступно", url:"#"}],
      msgTitle:"Эпизод появится позже",
      msgText:"Этот эпизод будет доступен чуть позднее"},
    {num:10, date:"18/12", full:"Дата выхода: 18 декабря",
      links:[{text:"Скоро доступно", url:"#"}],
      msgTitle:"Эпизод появится позже",
      msgText:"Этот эпизод будет доступен чуть позднее"}
  ],
  en: [
    {num:1, date:"16/10", full:"Release date: October 16",
      links:[{text:"Watch on YouTube", url:"https://www.youtube.com/live/RBymY7B1XuA?si=N_lwCcNqNsKKvCwU"}],
      embed:"https://www.youtube.com/embed/RBymY7B1XuA"},
    {num:2, date:"23/10", full:"Release date: October 23",
      links:[
        {text:"Watch on Dailymotion", url:"https://www.dailymotion.com/video/x9syjhm"},
        {text:"Watch on VK", url:"https://vkvideo.ru/playlist/-215535783_216/video-215535783_456245373?linked=1"}],
      note:"Russian and English subtitles available in VK",
      embed:"https://www.dailymotion.com/embed/video/x9syjhm"},
    {num:3, date:"30/10", full:"Release date: October 30",
      links:[
        {text:"Watch on Dailymotion", url:"https://www.dailymotion.com/video/x9syjv0"},
        {text:"Watch on VK", url:"https://vkvideo.ru/playlist/-215535783_216/video-215535783_456245456?linked=1"}],
      note:"Russian and English subtitles available in VK",
      embed:"https://www.dailymotion.com/embed/video/x9syjv0"},
    {num:4, date:"06/11", full:"Release date: November 6",
      links:[{text:"Watch on VK", url:"https://vkvideo.ru/video-215535783_456245523"}],
      msgTitle:"Available only on VK",
      msgText:"You must be logged in to VK to watch this episode."},
    {num:5, date:"13/11", full:"Release date: November 13",
      links:[{text:"Watch on VK", url:"https://vkvideo.ru/video-215535783_456245609"}],
      msgTitle:"Available only on VK",
      msgText:"You must be logged in to VK to watch this episode."},
    {num:6, date:"20/11", full:"Release date: November 20",
      links:[{text:"Coming soon", url:"#"}],
      msgTitle:"Episode coming later",
      msgText:"This episode will be available after November 20."},
    {num:7, date:"27/11", full:"Release date: November 27",
      links:[{text:"Coming soon", url:"#"}],
      msgTitle:"Episode coming later",
      msgText:"This episode will be available after November 27."},
    {num:8, date:"04/12", full:"Release date: December 4",
      links:[{text:"Coming soon", url:"#"}],
      msgTitle:"Episode coming later",
      msgText:"This episode will be available after December 4."},
    {num:9, date:"11/12", full:"Release date: December 11",
      links:[{text:"Coming soon", url:"#"}],
      msgTitle:"Episode coming later",
      msgText:"This episode will be available after December 11."},
    {num:10, date:"18/12", full:"Release date: December 18",
      links:[{text:"Coming soon", url:"#"}],
      msgTitle:"Episode coming later",
      msgText:"This episode will be available after December 18."}
  ]
};

let currentLang = 'en';

function render(lang) {
  const list = data[lang];
  const container = document.getElementById('episodes');
  container.innerHTML = list.map(ep => `
    <div class="episode-item">
      <div class="episode-header">
        <div class="episode-number">
          <div class="episode-badge">${ep.num}</div>
          <div class="episode-name">${episodeNames[lang][ep.num - 1]}</div>
        </div>
        <div class="episode-date">${ep.date}</div>
      </div>
      <div class="episode-content">
        <div class="episode-details">
          <div class="episode-info">
            <div class="episode-full-date">${ep.full}</div>
            <div class="links-container">
              ${ep.links.map(l => `<a href="${l.url}" class="episode-link" target="_blank">${l.text}</a>`).join('')}
            </div>
          </div>
          ${ep.note ? `<div class="subtitle-note">${ep.note}</div>` : ''}
          ${ep.embed ? `<div class="video-container"><iframe src="${ep.embed}" allowfullscreen></iframe></div>` : ''}
          ${ep.msgTitle ? `<div class="auth-message"><div class="auth-title">${ep.msgTitle}</div><p class="auth-text">${ep.msgText}</p></div>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.episode-header').forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      document.querySelectorAll('.episode-content').forEach(item => item !== content && item.classList.remove('active'));
      content.classList.toggle('active');
    });
  });
  document.querySelector('.episode-header')?.click();
}

document.getElementById('langSwitcher').addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  document.getElementById('langSwitcher').textContent = currentLang.toUpperCase();
  render(currentLang);
});

// Initialize
render('en');
