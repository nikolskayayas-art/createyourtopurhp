(function(){
    // CONFIG: Apps Script webhook URL (paste your deployed Web App URL here)
    const WEB_APP_URL = ""; // <-- вставьте сюда Web App URL после деплоя
    const VOTE_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;

    const contestants = [
      {name:"CHOI GAYOON", image:"https://i.imgur.com/iXCOXZr_d.webp?maxwidth=760&fidelity=grand"},
      {name:"CHOI YOUMIN", image:"https://i.imgur.com/1ZOrjwe_d.webp?maxwidth=760&fidelity=grand"},
      {name:"HAN HEEYEON", image:"https://i.imgur.com/L4CEU6m_d.webp?maxwidth=760&fidelity=grand"},
      {name:"KIM CHAERIN", image:"https://i.imgur.com/ZnSOsgI.jpeg"},
      {name:"KIM DOYI", image:"https://i.imgur.com/m9Dio4L.jpeg"},
      {name:"KIM SUJIN", image:"https://i.imgur.com/QL2FKUS_d.webp?maxwidth=760&fidelity=grand"},
      {name:"KIM YEEUN", image:"https://i.imgur.com/EYgTdoq.jpeg"},
      {name:"KWON DOHEE", image:"https://i.imgur.com/KdFjuoB.jpeg"},
      {name:"LEE CHAEHYUN", image:"https://i.imgur.com/M8ZzyUg.jpeg"},
      {name:"LEE CHAEYEON", image:"https://i.imgur.com/Z4jDB3h_d.webp?maxwidth=760&fidelity=grand"},
      {name:"LEE JOOEUN", image:"https://i.imgur.com/Hv2UhiV.jpeg"},
      {name:"LEE SEOHYUN", image:"https://i.imgur.com/rZcjbAQ_d.webp?maxwidth=760&fidelity=grand"},
      {name:"MIN JIHO", image:"https://i.imgur.com/FcvQMcR_d.webp?maxwidth=760&fidelity=grand"},
      {name:"NAM YUJU", image:"https://i.imgur.com/2RRYhVr_d.webp?maxwidth=760&fidelity=grand"},
      {name:"RYU HAJIN", image:"https://i.imgur.com/1KfZQGf_d.webp?maxwidth=760&fidelity=grand"},
      {name:"SHIN YOOKYUNG", image:"https://i.imgur.com/UhMyjfd_d.webp?maxwidth=760&fidelity=grand"},
      {name:"YANG JAEYUN", image:"https://files.catbox.moe/n07gsj.jpeg"},
      {name:"YOON SOOIN", image:"https://files.catbox.moe/q8x265.jpeg"},
      {name:"YOON CHAEEUN", image:"https://files.catbox.moe/2g9ia8.jpeg"},
      {name:"YUN SEOYOUNG", image:"https://files.catbox.moe/r1l89v.jpeg"},
      {name:"COCORO", image:"https://files.catbox.moe/rrdnoj.jpeg"},
      {name:"HANABI", image:"https://files.catbox.moe/2bvclr.jpeg"},
      {name:"HINA", image:"https://files.catbox.moe/ltmgzj.jpeg"},
      {name:"KARIN", image:"https://files.catbox.moe/dq319b.jpeg"},
      {name:"KOKO", image:"https://files.catbox.moe/2953jj.jpeg"},
      {name:"MAYU", image:"https://files.catbox.moe/5f3h6j.jpeg"},
      {name:"MIA", image:"https://files.catbox.moe/vbymqk.jpeg"},
      {name:"MIRIKA", image:"https://files.catbox.moe/o2ic97.jpeg"},
      {name:"MIYABI", image:"https://files.catbox.moe/xyl0ew.jpeg"},
      {name:"NANA", image:"https://files.catbox.moe/00pgec.jpeg"},
      {name:"NATSUHO", image:"https://files.catbox.moe/59yxls.jpeg"},
      {name:"NIKO", image:"https://files.catbox.moe/ujjen2.jpeg"},
      {name:"RINO", image:"https://files.catbox.moe/ju3y20.jpeg"},
      {name:"SAAYA", image:"https://files.catbox.moe/kl0iab.jpeg"},
      {name:"SASA", image:"https://files.catbox.moe/2frtrj.jpeg"},
      {name:"SEA", image:"https://files.catbox.moe/6h0ccd.jpeg"},
      {name:"SENA", image:"https://files.catbox.moe/mesqqc.jpeg"},
      {name:"SHIHO", image:"https://files.catbox.moe/e7wn7o.jpeg"},
      {name:"URARA", image:"https://files.catbox.moe/x6724l.jpeg"},
      {name:"YUNON", image:"https://files.catbox.moe/k1qihr.jpeg"}
    ];

    // votes start at zero
    let votes = { top1: Array(contestants.length).fill(0), top3: Array(contestants.length).fill(0), top8: Array(contestants.length).fill(0) };

    // state
    let userVoted = { top1:false, top3:false, top8:false };
    let currentVoteType = "top1";
    let selectedContestants = [];
    let maxSelections = 1;

    // DOM refs
    const voteGridEl = document.getElementById("voteGrid");
    const selectionInfoEl = document.getElementById("selectionInfo");
    const voteMessageEl = document.getElementById("voteMessage");
    const resultsContainerEl = document.getElementById("resultsContainer");
    const voteTypeButtons = document.querySelectorAll(".vote-type-btn");
    const selectedContestantsContainer = document.getElementById("selectedContestants");
    const confirmationModal = document.getElementById("confirmationModal");
    const confirmationContestants = document.getElementById("confirmationContestants");
    const confirmVoteBtn = document.getElementById("confirmVote");
    const cancelVoteBtn = document.getElementById("cancelVote");
    const votingStatusEl = document.getElementById("votingStatus");
    const resultsTitleText = document.getElementById("resultsTitleText");
    const voteBasket = document.getElementById("voteBasket");
    const basketContestants = document.getElementById("basketContestants");
    const toggleResultsBtnEl = document.getElementById("toggleResultsBtn");
    const basketVoteBtn = document.getElementById("basketVoteBtn");

    // storage
    const STORAGE_RECORDS = "vote_records_by_ip_or_local";
    const STORAGE_VOTES = "local_votes_backup";
    let clientId = null;
    let userIP = null;

    // helpers
    function loadVoteRecords(){ try { return JSON.parse(localStorage.getItem(STORAGE_RECORDS) || "{}"); } catch(e){ return {}; } }
    function saveVoteRecords(r){ localStorage.setItem(STORAGE_RECORDS, JSON.stringify(r)); }
    function saveLocalVotesBackup(){ try{ localStorage.setItem(STORAGE_VOTES, JSON.stringify(votes)); }catch(e){ console.warn(e); } }
    function loadLocalVotesBackup(){ try{ const raw = localStorage.getItem(STORAGE_VOTES); if(!raw) return false; const parsed = JSON.parse(raw); if(parsed && parsed.top1 && parsed.top1.length===contestants.length){ votes = parsed; return true } }catch(e){} return false; }
    function canUserVoteForType(id, voteType){ const records = loadVoteRecords(); if(!records[id] || !records[id][voteType]) return { ok:true }; const last = records[id][voteType]; const elapsed = Date.now() - last; if(elapsed >= VOTE_COOLDOWN_MS) return { ok:true }; return { ok:false, remainingMs: VOTE_COOLDOWN_MS - elapsed }; }
    function recordUserVote(id, voteType){ const r = loadVoteRecords(); r[id] = r[id] || {}; r[id][voteType] = Date.now(); saveVoteRecords(r); }

    // webhook append
    async function appendToGoogleSheet_viaWebhook(row){
      if(!WEB_APP_URL) { console.warn("WEB_APP_URL empty; remote append skipped"); return { ok:false, error:"no webhook"}; }
      try {
        const resp = await fetch(WEB_APP_URL, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ timestamp: row[0], voteType: row[1], names: row[2], ip: row[3] }) });
        const json = await resp.json();
        if(!resp.ok) return { ok:false, error: json };
        return { ok:true, result: json };
      } catch(e){ console.warn("append webhook failed", e); return { ok:false, error: e.message || e }; }
    }

    // detect IP non-blocking
    (async function detectIP_nonblocking(){
      try {
        const resp = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
        if(resp.ok){ const d = await resp.json(); userIP = d.ip; console.info("Detected IP:", userIP); return; }
      } catch(e){}
      clientId = localStorage.getItem("vh_client_id");
      if(!clientId){ clientId = "local-" + Math.random().toString(36).slice(2,10); localStorage.setItem("vh_client_id", clientId); }
      console.info("Using clientId:", clientId);
    })().then(()=> {
      try {
        const id = userIP || clientId;
        const records = loadVoteRecords();
        if(records[id]){
          userVoted.top1 = !!records[id].top1 && (Date.now() - records[id].top1 < VOTE_COOLDOWN_MS);
          userVoted.top3 = !!records[id].top3 && (Date.now() - records[id].top3 < VOTE_COOLDOWN_MS);
          userVoted.top8 = !!records[id].top8 && (Date.now() - records[id].top8 < VOTE_COOLDOWN_MS);
        }
        updateVotingStatusUI();
        renderVoteGrid(); renderResults(); updateBasket(); updateSubmitButton();
      } catch(e){ console.warn("post-ip update failed", e); }
    });

    // render grid
    function renderVoteGrid(){
      voteGridEl.innerHTML = "";
      const currentVotes = votes[currentVoteType];
      const maxVotes = currentVotes.length ? Math.max(...currentVotes) : 0;
      const sorted = contestants.map((c,i)=>({...c,votes:currentVotes[i],index:i})).sort((a,b)=>b.votes - a.votes || a.name.localeCompare(b.name));
      sorted.forEach(cont=>{
        const card = document.createElement("div");
        card.className = "vote-card";
        if(userVoted[currentVoteType]) card.classList.add("disabled");
        if(selectedContestants.includes(cont.index)) card.classList.add("selected");
        const barPercent = maxVotes>0 ? Math.min((cont.votes/maxVotes)*100,100) : 0;
        card.innerHTML = `<img src="${cont.image}" class="vote-avatar" alt="${cont.name}"><div class="vote-name">${cont.name}</div><div class="vote-count">${cont.votes}</div><div class="vote-bar-container"><div class="vote-bar" style="width:${barPercent}%"></div></div>`;
        if(!userVoted[currentVoteType]){
          card.addEventListener("click", ()=> {
            if(selectedContestants.includes(cont.index)) {
              // If already selected, clicking card removes
              removeContestant(cont.index);
            } else {
              if(selectedContestants.length < maxSelections){
                selectedContestants.push(cont.index);
                renderVoteGrid(); updateBasket(); updateSubmitButton(); updateSelectedContestantsUI();
              } else showMessage(`You can only select up to ${maxSelections} contestants`, "error");
            }
          });
        }
        voteGridEl.appendChild(card);
      });
    }

    // selected contestants UI (above grid)
    function updateSelectedContestantsUI(){
      selectedContestantsContainer.innerHTML = "";
      if(selectedContestants.length>0){
        selectedContestants.forEach(i=>{
          const c = contestants[i];
          const el = document.createElement("div");
          el.className = "selected-contestant";
          el.innerHTML = `<img src="${c.image}" alt="${c.name}"><span>${c.name}</span>`;
          // clicking selected element removes contestant (as requested)
          el.addEventListener("click", ()=> removeContestant(i));
          selectedContestantsContainer.appendChild(el);
        });
      } else {
        selectedContestantsContainer.innerHTML = '<div style="color:#999;text-align:center">No contestants selected</div>';
      }
    }

    // basket updated: clickable items remove contestant; Vote button appears here
    function updateBasket(){
      basketContestants.innerHTML = "";
      if(selectedContestants.length>0){
        selectedContestants.forEach(i=>{
          const c = contestants[i];
          const el = document.createElement("div");
          el.className = "basket-contestant";
          el.innerHTML = `<img src="${c.image}" alt="${c.name}"><span>${c.name}</span>`;
          // clicking basket element removes that contestant
          el.addEventListener("click", ()=> removeContestant(i));
          basketContestants.appendChild(el);
        });
        voteBasket.classList.add("visible"); voteBasket.setAttribute("aria-hidden","false");
        basketVoteBtn.style.display = "inline-block";
        basketVoteBtn.textContent = `Vote (${selectedContestants.length})`;
      } else {
        basketContestants.innerHTML = '<div class="empty-basket" style="color:#999;text-align:center">No contestants selected</div>';
        voteBasket.classList.remove("visible"); voteBasket.setAttribute("aria-hidden","true");
        basketVoteBtn.style.display = "none";
      }
      updateSelectedContestantsUI();
    }

    function updateSubmitButton(){ // now controls basketVoteBtn via updateBasket
      // noop (kept for compatibility)
    }

    function renderResults(){
      resultsContainerEl.innerHTML = "";
      const currentVotes = votes[currentVoteType];
      const sorted = contestants.map((c,i)=>({...c,votes:currentVotes[i],index:i})).sort((a,b)=>b.votes - a.votes || a.name.localeCompare(b.name));
      sorted.forEach((c,rank)=>{
        const item = document.createElement("div");
        item.className = "result-item" + (rank<3 ? " highlight" : "");
        item.innerHTML = `<div class="result-rank">${rank+1}</div><img src="${c.image}" class="result-avatar" alt="${c.name}"><div class="result-name">${c.name}</div><div class="result-votes">${c.votes}</div>`;
        resultsContainerEl.appendChild(item);
      });
    }

    function showMessage(msg,type="info",ms=3500){
      voteMessageEl.textContent = msg; voteMessageEl.className = "vote-message " + type;
      setTimeout(()=>{ voteMessageEl.textContent=""; voteMessageEl.className="vote-message"; }, ms);
    }

    function removeContestant(index){
      const p = selectedContestants.indexOf(index);
      if(p!==-1) selectedContestants.splice(p,1);
      renderVoteGrid(); updateBasket(); updateSelectedContestantsUI();
    }

    // confirmation
    function showConfirmation(){
      if(selectedContestants.length===0) return;
      document.getElementById("confirmationTitle").textContent = `Confirm Your ${currentVoteType==="top1"?"One Pick":currentVoteType.toUpperCase()} Vote`;
      confirmationContestants.innerHTML = "";
      selectedContestants.forEach(i=>{
        const c = contestants[i];
        const el = document.createElement("div");
        el.className = "confirmation-contestant";
        el.innerHTML = `<img src="${c.image}" alt="${c.name}" style="width:25px;height:25px;border-radius:50%;object-fit:cover"><span>${c.name}</span>`;
        confirmationContestants.appendChild(el);
      });
      confirmationModal.style.display = "flex"; confirmationModal.setAttribute("aria-hidden","false");
    }

    async function submitVotes(){
      confirmationModal.style.display = "none"; confirmationModal.setAttribute("aria-hidden","true");
      const id = userIP || clientId;
      const can = canUserVoteForType(id, currentVoteType);
      if(!can.ok){ const hrs = Math.ceil(can.remainingMs/(60*60*1000)); showMessage(`You can vote again in about ${hrs} hour(s).`,"error"); return; }

      selectedContestants.forEach(i=> votes[currentVoteType][i] = (votes[currentVoteType][i]||0) + 1);
      userVoted[currentVoteType] = true;
      recordUserVote(id, currentVoteType);
      saveLocalVotesBackup();

      const names = selectedContestants.map(i=>contestants[i].name).join(", ");
      const ts = new Date().toISOString();
      const ipForSheet = userIP || clientId || "unknown";
      const appendRes = await appendToGoogleSheet_viaWebhook([ts, currentVoteType, names, ipForSheet]);

      if(appendRes.ok) showMessage("Your vote has been counted and saved. Thank you!", "success");
      else showMessage("Vote counted locally; saving to spreadsheet failed (check console).", "info", 7000);

      selectedContestants = [];
      updateVotingStatusUI(); renderVoteGrid(); renderResults(); updateBasket();
    }

    function cancelSelection(){ confirmationModal.style.display="none"; confirmationModal.setAttribute("aria-hidden","true"); }

    function updateVotingStatusUI(){ if(userVoted[currentVoteType]){ votingStatusEl.textContent = "You have already voted for this category."; votingStatusEl.style.display = "block"; } else votingStatusEl.style.display = "none"; }

    function setupEventListeners(){
      voteTypeButtons.forEach(btn=>{
        btn.addEventListener("click", async ()=>{
          const id = userIP || clientId;
          const can = canUserVoteForType(id, btn.dataset.type);
          userVoted[btn.dataset.type] = !can.ok ? true : false;

          voteTypeButtons.forEach(b=>b.classList.remove("active"));
          btn.classList.add("active");
          currentVoteType = btn.dataset.type; selectedContestants = [];
          if(currentVoteType==="top1"){ maxSelections=1; selectionInfoEl.textContent="Select 1 contestant"; resultsTitleText.textContent="Live Results - One Pick"; }
          else if(currentVoteType==="top3"){ maxSelections=3; selectionInfoEl.textContent="Select up to 3 contestants"; resultsTitleText.textContent="Live Results - Top 3"; }
          else{ maxSelections=8; selectionInfoEl.textContent="Select up to 8 contestants"; resultsTitleText.textContent="Live Results - Top 8"; }

          updateVotingStatusUI(); renderVoteGrid(); renderResults(); updateBasket();
        });
      });

      // Vote from basket
      basketVoteBtn.addEventListener("click", async ()=>{
        const id = userIP || clientId;
        const can = canUserVoteForType(id, currentVoteType);
        if(!can.ok){ const hrs = Math.ceil(can.remainingMs/(60*60*1000)); showMessage(`You can vote again in about ${hrs} hour(s).`,"error"); return; }
        showConfirmation();
      });

      confirmVoteBtn.addEventListener("click", submitVotes);
      cancelVoteBtn.addEventListener("click", cancelSelection);

      toggleResultsBtnEl.addEventListener("click", ()=>{
        const visible = resultsContainerEl.classList.toggle("visible");
        toggleResultsBtnEl.textContent = visible ? "Hide Live Results" : "Show Live Results";
      });

      confirmationModal.addEventListener("click",(e)=>{ if(e.target===confirmationModal) cancelSelection(); });
    }

    // initial render ASAP
    function init(){
      try {
        loadLocalVotesBackup();
        renderVoteGrid();
        renderResults();
        updateBasket();
        updateSelectedContestantsUI();
        setupEventListeners();
      } catch(e){
        console.error("init failed", e);
      }
    }

    window.addEventListener("DOMContentLoaded", init);

  })();