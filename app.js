const BASE = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

const EXERCISE_PHOTOS = {
  "supino-reto":             [BASE+"Barbell_Bench_Press_-_Medium_Grip/0.jpg",   BASE+"Barbell_Bench_Press_-_Medium_Grip/1.jpg"],
  "supino-inclinado-halter": [BASE+"Dumbbell_Incline_Bench_Press/0.jpg",        BASE+"Dumbbell_Incline_Bench_Press/1.jpg"],
  "supino-inclinado-barra":  [BASE+"Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg", BASE+"Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg"],
  "remada-curvada":          [BASE+"Bent_Over_Barbell_Row/0.jpg",               BASE+"Bent_Over_Barbell_Row/1.jpg"],
  "puxada-frente":           [BASE+"Wide-Grip_Lat_Pulldown/0.jpg",              BASE+"Wide-Grip_Lat_Pulldown/1.jpg"],
  "elevacao-lateral":        [BASE+"Dumbbell_Lateral_Raise/0.jpg",              BASE+"Dumbbell_Lateral_Raise/1.jpg"],
  "rosca-direta":            [BASE+"Barbell_Curl/0.jpg",                        BASE+"Barbell_Curl/1.jpg"],
  "triceps-corda":           [BASE+"Triceps_Pushdown/0.jpg",                    BASE+"Triceps_Pushdown/1.jpg"],
  "agachamento-livre":       [BASE+"Barbell_Full_Squat/0.jpg",                  BASE+"Barbell_Full_Squat/1.jpg"],
  "agachamento":             [BASE+"Barbell_Full_Squat/0.jpg",                  BASE+"Barbell_Full_Squat/1.jpg"],
  "leg-press":               [BASE+"Leg_Press/0.jpg",                           BASE+"Leg_Press/1.jpg"],
  "stiff":                   [BASE+"Romanian_Deadlift/0.jpg",                   BASE+"Romanian_Deadlift/1.jpg"],
  "mesa-flexora":            [BASE+"Lying_Leg_Curls/0.jpg",                     BASE+"Lying_Leg_Curls/1.jpg"],
  "cadeira-extensora":       [BASE+"Leg_Extensions/0.jpg",                      BASE+"Leg_Extensions/1.jpg"],
  "extensora":               [BASE+"Leg_Extensions/0.jpg",                      BASE+"Leg_Extensions/1.jpg"],
  "flexora":                 [BASE+"Lying_Leg_Curls/0.jpg",                     BASE+"Lying_Leg_Curls/1.jpg"],
  "panturrilha-pe":          [BASE+"Standing_Calf_Raises/0.jpg",                BASE+"Standing_Calf_Raises/1.jpg"],
  "panturrilha-sentada":     [BASE+"Seated_Calf_Raise/0.jpg",                   BASE+"Seated_Calf_Raise/1.jpg"],
  "panturrilha":             [BASE+"Standing_Calf_Raises/0.jpg",                BASE+"Standing_Calf_Raises/1.jpg"],
  "desenvolvimento-halter":  [BASE+"Dumbbell_Shoulder_Press/0.jpg",             BASE+"Dumbbell_Shoulder_Press/1.jpg"],
  "desenvolvimento":         [BASE+"Dumbbell_Shoulder_Press/0.jpg",             BASE+"Dumbbell_Shoulder_Press/1.jpg"],
  "crucifixo-maquina":       [BASE+"Pec_Deck_Fly/0.jpg",                        BASE+"Pec_Deck_Fly/1.jpg"],
  "triceps-testa":           [BASE+"Barbell_Lying_Triceps_Extension_Skull_Crusher/0.jpg", BASE+"Barbell_Lying_Triceps_Extension_Skull_Crusher/1.jpg"],
  "triceps-mergulho":        [BASE+"Tricep_Dips/0.jpg",                         BASE+"Tricep_Dips/1.jpg"],
  "paralela":                [BASE+"Tricep_Dips/0.jpg",                         BASE+"Tricep_Dips/1.jpg"],
  "barra-fixa":              [BASE+"Pullups/0.jpg",                             BASE+"Pullups/1.jpg"],
  "remada-baixa":            [BASE+"Seated_Cable_Rows/0.jpg",                   BASE+"Seated_Cable_Rows/1.jpg"],
  "pulldown":                [BASE+"Wide-Grip_Lat_Pulldown/0.jpg",              BASE+"Wide-Grip_Lat_Pulldown/1.jpg"],
  "face-pull":               [BASE+"Face_Pull/0.jpg",                           BASE+"Face_Pull/1.jpg"],
  "rosca-martelo":           [BASE+"Alternate_Hammer_Curl/0.jpg",               BASE+"Alternate_Hammer_Curl/1.jpg"],
  "terra-romeno":            [BASE+"Romanian_Deadlift/0.jpg",                   BASE+"Romanian_Deadlift/1.jpg"],
  "afundo":                  [BASE+"Barbell_Lunge/0.jpg",                       BASE+"Barbell_Lunge/1.jpg"],
  "gluteo-cabo":             [BASE+"Standing_Hip_Extension/0.jpg",              BASE+"Standing_Hip_Extension/1.jpg"],
  "crossover":               [BASE+"Cable_Crossover/0.jpg",                     BASE+"Cable_Crossover/1.jpg"],
  "rosca-alternada":         [BASE+"Dumbbell_Alternate_Bicep_Curl/0.jpg",       BASE+"Dumbbell_Alternate_Bicep_Curl/1.jpg"],
  "rosca-concentrada":       [BASE+"Concentration_Curls/0.jpg",                 BASE+"Concentration_Curls/1.jpg"],
  "martelo":                 [BASE+"Alternate_Hammer_Curl/0.jpg",               BASE+"Alternate_Hammer_Curl/1.jpg"],
  "remada-maquina":          [BASE+"Bent_Over_Barbell_Row/0.jpg",               BASE+"Bent_Over_Barbell_Row/1.jpg"],
};

// Fallbacks para exercícios que possam ter nomes diferentes no banco
const FALLBACKS = {
  "supino-inclinado-halter": BASE+"Dumbbell_Flyes/0.jpg",
  "crucifixo-maquina":       BASE+"Cable_Crossover/0.jpg",
  "triceps-testa":           BASE+"Lying_Triceps_Press/0.jpg",
  "triceps-mergulho":        BASE+"Bench_Dips/0.jpg",
  "paralela":                BASE+"Bench_Dips/0.jpg",
  "remada-baixa":            BASE+"Bent_Over_Barbell_Row/0.jpg",
  "gluteo-cabo":             BASE+"Cable_Hip_Adduction/0.jpg",
  "rosca-concentrada":       BASE+"Dumbbell_Concentration_Curl/0.jpg",
};

let slideTimer = null;

function loadExercisePhoto(key, icon, container) {
  const photos = EXERCISE_PHOTOS[key];
  if (!photos) { container.innerHTML = fallbackHTML(icon); return; }

  if (slideTimer) { clearInterval(slideTimer); slideTimer = null; }

  // Tenta carregar a foto 0
  const img0 = new Image();
  img0.onload = () => {
    // Foto 0 carregou — tenta foto 1 também para fazer slideshow
    const img1 = new Image();
    img1.onload = () => startSlideshow(container, [photos[0], photos[1]]);
    img1.onerror = () => showSingle(container, photos[0]);
    img1.src = photos[1];
  };
  img0.onerror = () => {
    // Foto 0 falhou — tenta fallback
    const fb = FALLBACKS[key];
    if (fb) {
      const imgFb = new Image();
      imgFb.onload = () => showSingle(container, fb);
      imgFb.onerror = () => { container.innerHTML = fallbackHTML(icon); };
      imgFb.src = fb;
    } else {
      container.innerHTML = fallbackHTML(icon);
    }
  };
  img0.src = photos[0];
}

function showSingle(container, url) {
  container.innerHTML = '';
  container.style.background = '#0a0a0a';
  const el = document.createElement('img');
  el.src = url;
  el.style.cssText = 'width:100%;height:100%;object-fit:contain;object-position:center;padding:10px;';
  container.appendChild(el);
}

function startSlideshow(container, urls) {
  container.style.background = '#0a0a0a';
  let current = 0;
  container.innerHTML = `
    <div style="position:relative;width:100%;height:100%;">
      <img id="slide-img" src="${urls[0]}"
        style="width:100%;height:100%;object-fit:contain;padding:10px;transition:opacity .4s ease;"/>
      <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px;">
        <div id="dot0" style="width:7px;height:7px;border-radius:50%;background:#e8ff00;transition:.3s;"></div>
        <div id="dot1" style="width:7px;height:7px;border-radius:50%;background:#333;transition:.3s;"></div>
      </div>
    </div>`;

  slideTimer = setInterval(() => {
    current = current === 0 ? 1 : 0;
    const img = document.getElementById('slide-img');
    const d0 = document.getElementById('dot0');
    const d1 = document.getElementById('dot1');
    if (!img) { clearInterval(slideTimer); return; }
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = urls[current];
      img.style.opacity = '1';
      if (d0) d0.style.background = current === 0 ? '#e8ff00' : '#333';
      if (d1) d1.style.background = current === 1 ? '#e8ff00' : '#333';
    }, 200);
  }, 2000);
}

function fallbackHTML(icon) {
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;opacity:.4">
    <span style="font-size:64px">${icon}</span>
    <span style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:#555;letter-spacing:2px;text-transform:uppercase">imagem indisponível</span>
  </div>`;
}

// ===== APP =====
let currentModule = null;
let currentDayIdx = 0;

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'naka') {
    renderWeekNav('naka-week', NAKA, 'naka');
    renderDay('naka-content', NAKA, 0);
  } else if (page === 'thayniton') {
    renderWeekNav('thayniton-week', THAYNITON, 'thayniton');
    renderDay('thayniton-content', THAYNITON, 0);
  }
}

function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
}

function renderWeekNav(containerId, workout, moduleId) {
  document.getElementById(containerId).innerHTML = workout.days.map((day, i) => `
    <button class="day-btn ${i === 0 ? 'active' : ''}" onclick="selectDay('${moduleId}', ${i})">
      <span class="day-short">${day.short}</span>
      <span>${day.day}</span>
      <span class="day-focus">${day.focus}</span>
    </button>`).join('');
}

function selectDay(moduleId, idx) {
  document.querySelectorAll(`#${moduleId}-week .day-btn`).forEach((b, i) => b.classList.toggle('active', i === idx));
  renderDay(`${moduleId}-content`, moduleId === 'naka' ? NAKA : THAYNITON, idx);
}

function renderDay(containerId, workout, dayIdx) {
  const day = workout.days[dayIdx];
  if (!day) return;
  document.getElementById(containerId).innerHTML = `
    <div class="day-header">
      <div class="day-number">${day.day.toUpperCase()} — DIA ${dayIdx + 1}</div>
      <div class="day-title">${day.title}</div>
      <div class="day-subtitle">${day.subtitle}</div>
    </div>
    <div class="ex-list">${day.exercises.map((ex, i) => renderExercise(ex, i)).join('')}</div>`;
}

function renderExercise(ex, i) {
  const data = EXERCISES_DB[ex.key];
  if (!data) return '';
  const techTag = ex.tech ? `<span class="ex-tech">${ex.tech}</span>` : '';
  return `
    <div class="ex-item" onclick="openModal('${ex.key}','${ex.sets}','${ex.reps}','${ex.tech||''}')">
      <div class="ex-num">${String(i+1).padStart(2,'0')}</div>
      <div class="ex-icon">${data.icon}</div>
      <div class="ex-info">
        <div class="ex-name">${data.name}</div>
        <div class="ex-meta">
          <span class="ex-sets">${ex.sets} × ${ex.reps}</span>
          ${techTag}
          <span class="ex-muscle">${data.muscle}</span>
        </div>
      </div>
      <div class="ex-cta">ver foto</div>
    </div>`;
}

function openModal(key, sets, reps, tech) {
  const data = EXERCISES_DB[key];
  if (!data) return;

  const animContainer = document.getElementById('modalAnim');
  animContainer.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;opacity:.5">
      <div style="width:34px;height:34px;border:3px solid #2a2a2a;border-top-color:#e8ff00;border-radius:50%;animation:spin .8s linear infinite;"></div>
      <span style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:#555;letter-spacing:2px;text-transform:uppercase">carregando...</span>
    </div>`;

  loadExercisePhoto(key, data.icon, animContainer);

  document.getElementById('modalTitle').textContent = data.name;
  const pts = [`${sets} séries`, `${reps} reps`];
  if (tech) pts.push(tech);
  document.getElementById('modalDetail').innerHTML = pts.map(p => `<span>${p}</span>`).join('');
  document.getElementById('modalTip').innerHTML = `<strong style="color:var(--text);display:block;margin-bottom:6px">💡 Dica de execução</strong>${data.tip}`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (slideTimer) { clearInterval(slideTimer); slideTimer = null; }
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.background = window.scrollY > 20 ? 'rgba(8,8,8,0.98)' : 'rgba(10,10,10,0.9)';
});
