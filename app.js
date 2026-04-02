// ===== EXERCISE PHOTO DATABASE =====
// Source: github.com/yuhonas/free-exercise-db (Public Domain / Unlicense)
// Base URL: https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/
const BASE = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

const EXERCISE_PHOTOS = {
  "supino-reto":             [BASE+"Barbell_Bench_Press_-_Medium_Grip/0.jpg", BASE+"Barbell_Bench_Press_-_Medium_Grip/1.jpg"],
  "supino-inclinado-halter": [BASE+"Dumbbell_Incline_Bench_Press/0.jpg",      BASE+"Dumbbell_Incline_Bench_Press/1.jpg"],
  "supino-inclinado-barra":  [BASE+"Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg", BASE+"Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg"],
  "remada-curvada":          [BASE+"Bent_Over_Barbell_Row/0.jpg",             BASE+"Bent_Over_Barbell_Row/1.jpg"],
  "puxada-frente":           [BASE+"Wide-Grip_Lat_Pulldown/0.jpg",            BASE+"Wide-Grip_Lat_Pulldown/1.jpg"],
  "elevacao-lateral":        [BASE+"Dumbbell_Lateral_Raise/0.jpg",            BASE+"Dumbbell_Lateral_Raise/1.jpg"],
  "rosca-direta":            [BASE+"Barbell_Curl/0.jpg",                      BASE+"Barbell_Curl/1.jpg"],
  "triceps-corda":           [BASE+"Triceps_Pushdown/0.jpg",                  BASE+"Triceps_Pushdown/1.jpg"],
  "agachamento-livre":       [BASE+"Barbell_Full_Squat/0.jpg",                BASE+"Barbell_Full_Squat/1.jpg"],
  "agachamento":             [BASE+"Barbell_Full_Squat/0.jpg",                BASE+"Barbell_Full_Squat/1.jpg"],
  "leg-press":               [BASE+"Leg_Press/0.jpg",                         BASE+"Leg_Press/1.jpg"],
  "stiff":                   [BASE+"Romanian_Deadlift/0.jpg",                 BASE+"Romanian_Deadlift/1.jpg"],
  "mesa-flexora":            [BASE+"Lying_Leg_Curls/0.jpg",                   BASE+"Lying_Leg_Curls/1.jpg"],
  "cadeira-extensora":       [BASE+"Leg_Extensions/0.jpg",                    BASE+"Leg_Extensions/1.jpg"],
  "extensora":               [BASE+"Leg_Extensions/0.jpg",                    BASE+"Leg_Extensions/1.jpg"],
  "flexora":                 [BASE+"Lying_Leg_Curls/0.jpg",                   BASE+"Lying_Leg_Curls/1.jpg"],
  "panturrilha-pe":          [BASE+"Standing_Calf_Raises/0.jpg",              BASE+"Standing_Calf_Raises/1.jpg"],
  "panturrilha-sentada":     [BASE+"Seated_Calf_Raise/0.jpg",                 BASE+"Seated_Calf_Raise/1.jpg"],
  "panturrilha":             [BASE+"Standing_Calf_Raises/0.jpg",              BASE+"Standing_Calf_Raises/1.jpg"],
  "desenvolvimento-halter":  [BASE+"Dumbbell_Shoulder_Press/0.jpg",           BASE+"Dumbbell_Shoulder_Press/1.jpg"],
  "desenvolvimento":         [BASE+"Dumbbell_Shoulder_Press/0.jpg",           BASE+"Dumbbell_Shoulder_Press/1.jpg"],
  "crucifixo-maquina":       [BASE+"Pec_Deck_Fly/0.jpg",                      BASE+"Pec_Deck_Fly/1.jpg"],
  "triceps-testa":           [BASE+"Barbell_Lying_Triceps_Extension_Skull_Crusher/0.jpg", BASE+"Barbell_Lying_Triceps_Extension_Skull_Crusher/1.jpg"],
  "triceps-mergulho":        [BASE+"Tricep_Dips/0.jpg",                       BASE+"Tricep_Dips/1.jpg"],
  "paralela":                [BASE+"Tricep_Dips/0.jpg",                       BASE+"Tricep_Dips/1.jpg"],
  "barra-fixa":              [BASE+"Pullups/0.jpg",                           BASE+"Pullups/1.jpg"],
  "remada-baixa":            [BASE+"Low_Cable_One_Arm_Rowing/0.jpg",          BASE+"Low_Cable_One_Arm_Rowing/1.jpg"],
  "pulldown":                [BASE+"Wide-Grip_Lat_Pulldown/0.jpg",            BASE+"Wide-Grip_Lat_Pulldown/1.jpg"],
  "face-pull":               [BASE+"Face_Pull/0.jpg",                         BASE+"Face_Pull/1.jpg"],
  "rosca-martelo":           [BASE+"Dumbbell_Alternate_Bicep_Curl/0.jpg",     BASE+"Dumbbell_Alternate_Bicep_Curl/1.jpg"],
  "terra-romeno":            [BASE+"Romanian_Deadlift/0.jpg",                 BASE+"Romanian_Deadlift/1.jpg"],
  "afundo":                  [BASE+"Barbell_Lunge/0.jpg",                     BASE+"Barbell_Lunge/1.jpg"],
  "gluteo-cabo":             [BASE+"Cable_Hip_Adduction/0.jpg",               BASE+"Cable_Hip_Adduction/1.jpg"],
  "crossover":               [BASE+"Cable_Crossover/0.jpg",                   BASE+"Cable_Crossover/1.jpg"],
  "rosca-alternada":         [BASE+"Dumbbell_Alternate_Bicep_Curl/0.jpg",     BASE+"Dumbbell_Alternate_Bicep_Curl/1.jpg"],
  "rosca-concentrada":       [BASE+"Concentration_Curls/0.jpg",               BASE+"Concentration_Curls/1.jpg"],
  "martelo":                 [BASE+"Hammer_Curls/0.jpg",                      BASE+"Hammer_Curls/1.jpg"],
  "remada-maquina":          [BASE+"Bent_Over_Barbell_Row/0.jpg",             BASE+"Bent_Over_Barbell_Row/1.jpg"],
};

// ===== PHOTO SLIDESHOW STATE =====
let slideIntervals = {};

function loadExercisePhoto(key, icon, container) {
  const photos = EXERCISE_PHOTOS[key];
  if (!photos || photos.length === 0) {
    container.innerHTML = fallbackHTML(icon);
    return;
  }

  // Two photos = slideshow (before/after movement)
  if (photos.length === 2) {
    let current = 0;
    container.innerHTML = `
      <div style="position:relative;width:100%;height:100%;background:#0a0a0a;">
        <img id="slide-img" src="${photos[0]}"
          style="width:100%;height:100%;object-fit:contain;object-position:center;padding:8px;transition:opacity .4s"
          onerror="handleImgError(this,'${icon}')" />
        <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px;">
          <div id="dot-0" style="width:8px;height:8px;border-radius:50%;background:var(--accent,#e8ff00);"></div>
          <div id="dot-1" style="width:8px;height:8px;border-radius:50%;background:#444;"></div>
        </div>
        <div style="position:absolute;top:10px;right:12px;font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:1.5px;color:rgba(255,255,255,.3);text-transform:uppercase;">execução</div>
      </div>`;
    // Clear old interval
    if (slideIntervals['modal']) clearInterval(slideIntervals['modal']);
    slideIntervals['modal'] = setInterval(() => {
      current = current === 0 ? 1 : 0;
      const img = document.getElementById('slide-img');
      const d0 = document.getElementById('dot-0');
      const d1 = document.getElementById('dot-1');
      if (!img) { clearInterval(slideIntervals['modal']); return; }
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = photos[current];
        img.style.opacity = '1';
        if (d0) d0.style.background = current === 0 ? 'var(--accent,#e8ff00)' : '#444';
        if (d1) d1.style.background = current === 1 ? 'var(--accent,#e8ff00)' : '#444';
      }, 200);
    }, 1800);
  } else {
    container.innerHTML = `
      <img src="${photos[0]}"
        style="width:100%;height:100%;object-fit:contain;padding:8px;"
        onerror="handleImgError(this,'${icon}')" />`;
  }
}

function handleImgError(img, icon) {
  img.parentElement.innerHTML = fallbackHTML(icon);
}

function fallbackHTML(icon) {
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;opacity:.4">
    <span style="font-size:64px">${icon}</span>
    <span style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:#555;letter-spacing:2px;text-transform:uppercase">imagem indisponível</span>
  </div>`;
}

// ===== APP STATE =====
let currentModule = null;
let currentDayIdx = 0;

// ===== NAV =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'naka') {
    currentModule = NAKA;
    renderWeekNav('naka-week', NAKA, 'naka');
    renderDay('naka-content', NAKA, 0);
    currentDayIdx = 0;
  } else if (page === 'thayniton') {
    currentModule = THAYNITON;
    renderWeekNav('thayniton-week', THAYNITON, 'thayniton');
    renderDay('thayniton-content', THAYNITON, 0);
    currentDayIdx = 0;
  }
}

function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
}

// ===== WEEK NAV =====
function renderWeekNav(containerId, workout, moduleId) {
  const container = document.getElementById(containerId);
  container.innerHTML = workout.days.map((day, i) => `
    <button class="day-btn ${i === 0 ? 'active' : ''}"
      onclick="selectDay('${moduleId}', ${i})">
      <span class="day-short">${day.short}</span>
      <span>${day.day}</span>
      <span class="day-focus">${day.focus}</span>
    </button>
  `).join('');
}

function selectDay(moduleId, idx) {
  document.querySelectorAll(`#${moduleId}-week .day-btn`).forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  const workout = moduleId === 'naka' ? NAKA : THAYNITON;
  renderDay(`${moduleId}-content`, workout, idx);
  currentDayIdx = idx;
}

// ===== DAY CONTENT =====
function renderDay(containerId, workout, dayIdx) {
  const container = document.getElementById(containerId);
  const day = workout.days[dayIdx];
  if (!day) return;
  container.innerHTML = `
    <div class="day-header">
      <div class="day-number">${day.day.toUpperCase()} — DIA ${dayIdx + 1}</div>
      <div class="day-title">${day.title}</div>
      <div class="day-subtitle">${day.subtitle}</div>
    </div>
    <div class="ex-list">
      ${day.exercises.map((ex, i) => renderExercise(ex, i)).join('')}
    </div>`;
}

function renderExercise(ex, i) {
  const data = EXERCISES_DB[ex.key];
  if (!data) return '';
  const techTag = ex.tech ? `<span class="ex-tech">${ex.tech}</span>` : '';
  return `
    <div class="ex-item" onclick="openModal('${ex.key}', '${ex.sets}', '${ex.reps}', '${ex.tech || ''}')">
      <div class="ex-num">${String(i + 1).padStart(2, '0')}</div>
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

// ===== MODAL =====
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
  const detailParts = [`${sets} séries`, `${reps} reps`];
  if (tech) detailParts.push(tech);
  document.getElementById('modalDetail').innerHTML = detailParts.map(p => `<span>${p}</span>`).join('');
  document.getElementById('modalTip').innerHTML = `<strong style="color:var(--text);display:block;margin-bottom:6px">💡 Dica de execução</strong>${data.tip}`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (slideIntervals['modal']) { clearInterval(slideIntervals['modal']); delete slideIntervals['modal']; }
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.background = window.scrollY > 20 ? 'rgba(8,8,8,0.98)' : 'rgba(10,10,10,0.9)';
});
