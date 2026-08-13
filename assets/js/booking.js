// ============================================================
// nährraum – Buchungssystem (Frontend-Demo)
// Simuliert einen echten Buchungsablauf im Browser (kein Backend).
// Für den Live-Betrieb: an ein Kalender-/Terminbuchungstool
// (z.B. Cal.com, SimplyBook, Amelia o.ä.) oder eigenes Backend anbinden –
// die Datenstruktur unten (state) ist so aufgebaut, dass sie 1:1 an eine
// API übergeben werden kann (POST /api/booking).
// ============================================================

const services = [
  { id:'erst', name:'Erstgespräch (kostenlos)', duration:'20 Min · Online', price:'0 €', desc:'Unverbindliches Kennenlernen – wir klären, wie ich dich unterstützen kann.' },
  { id:'einzel', name:'1:1 Beratung Beikost & Picky Eating', duration:'50 Min · Online oder vor Ort', price:'89 €', desc:'Individuelle Begleitung bei Beikoststart, wählerischem Essverhalten oder Mahlzeiten-Stress.' },
  { id:'folge', name:'Folgetermin', duration:'30 Min · Online', price:'49 €', desc:'Für Klient:innen in laufender Begleitung.' },
  { id:'vortrag', name:'Vortrag / Workshop anfragen', duration:'nach Absprache · Einrichtungen & Kitas', price:'auf Anfrage', desc:'Für Kitas, Schulen und pädagogische Fachkräfte.' },
];

const state = { service:null, date:null, time:null, name:'', email:'', phone:'', notes:'' };
let step = 1;

function renderServices(){
  const wrap = document.getElementById('service-list');
  if(!wrap) return;
  wrap.innerHTML = services.map(s => `
    <div class="service-option" data-id="${s.id}" role="button" tabindex="0" aria-pressed="false">
      <div>
        <h4>${s.name}</h4>
        <div class="meta">${s.duration}</div>
        <div class="meta">${s.desc}</div>
      </div>
      <div class="price">${s.price}</div>
    </div>`).join('');
  wrap.querySelectorAll('.service-option').forEach(el => {
    const activate = () => {
      wrap.querySelectorAll('.service-option').forEach(o => { o.classList.remove('selected'); o.setAttribute('aria-pressed','false'); });
      el.classList.add('selected'); el.setAttribute('aria-pressed','true');
      state.service = services.find(s => s.id === el.dataset.id);
      document.getElementById('next-1').disabled = false;
    };
    el.addEventListener('click', activate);
    el.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); activate(); } });
  });
}

function nextWeekdays(n){
  const out = []; let d = new Date(); let added = 0;
  const dayNames = ['So','Mo','Di','Mi','Do','Fr','Sa'];
  while(added < n){
    d.setDate(d.getDate()+1);
    if(d.getDay() !== 0 && d.getDay() !== 6){
      out.push({ label:dayNames[d.getDay()], num:d.getDate(), month:d.getMonth()+1, key:`${d.getDate()}.${d.getMonth()+1}.` });
      added++;
    }
  }
  return out;
}

function renderDates(){
  const grid = document.getElementById('date-grid');
  if(!grid) return;
  const days = nextWeekdays(8);
  grid.innerHTML = days.map(d => `
    <div class="date-cell" data-key="${d.key}" role="button" tabindex="0">
      <div class="d">${d.label}</div>
      <div class="n">${d.num}.${d.month}.</div>
    </div>`).join('');
  grid.querySelectorAll('.date-cell').forEach(el => {
    const activate = () => {
      grid.querySelectorAll('.date-cell').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      state.date = el.dataset.key;
      renderTimes();
      checkStep2();
    };
    el.addEventListener('click', activate);
    el.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault(); activate();} });
  });
}

function renderTimes(){
  const grid = document.getElementById('time-grid');
  if(!grid) return;
  const slots = ['09:00','10:00','11:00','13:00','14:00','15:00','16:00','17:00'];
  // simple deterministic "availability" so it feels real
  const seed = state.date ? state.date.length + state.date.charCodeAt(0) : 0;
  grid.innerHTML = slots.map((t,i) => {
    const taken = (i + seed) % 5 === 0;
    return `<div class="time-cell ${taken?'disabled':''}" data-time="${t}" role="button" tabindex="${taken?-1:0}">${t}</div>`;
  }).join('');
  grid.querySelectorAll('.time-cell:not(.disabled)').forEach(el => {
    const activate = () => {
      grid.querySelectorAll('.time-cell').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      state.time = el.dataset.time;
      checkStep2();
    };
    el.addEventListener('click', activate);
    el.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault(); activate();} });
  });
}

function checkStep2(){
  const btn = document.getElementById('next-2');
  if(btn) btn.disabled = !(state.date && state.time);
}

function goTo(n){
  document.querySelectorAll('.bk-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-'+n).classList.add('active');
  document.querySelectorAll('.p-step').forEach((el,i) => {
    el.classList.remove('active','done');
    if(i+1 < n) el.classList.add('done');
    if(i+1 === n) el.classList.add('active');
  });
  step = n;
  window.scrollTo({ top: document.getElementById('buchung-tool').offsetTop - 100, behavior:'smooth' });
}

function renderSummary(){
  const box = document.getElementById('summary');
  if(!box) return;
  box.innerHTML = `
    <div class="summary-row"><span>Leistung</span><strong>${state.service.name}</strong></div>
    <div class="summary-row"><span>Termin</span><strong>${state.date} · ${state.time} Uhr</strong></div>
    <div class="summary-row"><span>Preis</span><strong>${state.service.price}</strong></div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if(!document.getElementById('buchung-tool')) return;
  renderServices();
  renderDates();

  document.getElementById('next-1')?.addEventListener('click', () => goTo(2));
  document.getElementById('back-2')?.addEventListener('click', () => goTo(1));
  document.getElementById('next-2')?.addEventListener('click', () => { renderSummary(); goTo(3); });
  document.getElementById('back-3')?.addEventListener('click', () => goTo(2));

  const form = document.getElementById('booking-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    state.name = document.getElementById('bk-name').value;
    state.email = document.getElementById('bk-email').value;
    state.phone = document.getElementById('bk-phone').value;
    state.notes = document.getElementById('bk-notes').value;

    document.getElementById('confirm-service').textContent = state.service.name;
    document.getElementById('confirm-datetime').textContent = `${state.date} um ${state.time} Uhr`;
    document.getElementById('confirm-email').textContent = state.email;
    goTo(4);
  });
});
