const BASE = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

// Verified IDs from free-exercise-db (public domain)
const EXERCISE_PHOTOS = {
  "supino-reto":             BASE+"Barbell_Bench_Press_-_Medium_Grip/0.jpg",
  "supino-inclinado-halter": BASE+"Dumbbell_Incline_Bench_Press/0.jpg",
  "supino-inclinado-barra":  BASE+"Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg",
  "remada-curvada":          BASE+"Bent_Over_Barbell_Row/0.jpg",
  "puxada-frente":           BASE+"Wide-Grip_Lat_Pulldown/0.jpg",
  "elevacao-lateral":        BASE+"Dumbbell_Lateral_Raise/0.jpg",
  "rosca-direta":            BASE+"Barbell_Curl/0.jpg",
  "triceps-corda":           BASE+"Triceps_Pushdown/0.jpg",
  "agachamento-livre":       BASE+"Barbell_Full_Squat/0.jpg",
  "agachamento":             BASE+"Barbell_Full_Squat/0.jpg",
  "leg-press":               BASE+"Leg_Press/0.jpg",
  "stiff":                   BASE+"Romanian_Deadlift/0.jpg",
  "mesa-flexora":            BASE+"Lying_Leg_Curls/0.jpg",
  "cadeira-extensora":       BASE+"Leg_Extensions/0.jpg",
  "extensora":               BASE+"Leg_Extensions/0.jpg",
  "flexora":                 BASE+"Lying_Leg_Curls/0.jpg",
  "panturrilha-pe":          BASE+"Standing_Calf_Raises/0.jpg",
  "panturrilha-sentada":     BASE+"Seated_Calf_Raise/0.jpg",
  "panturrilha":             BASE+"Standing_Calf_Raises/0.jpg",
  "desenvolvimento-halter":  BASE+"Dumbbell_Shoulder_Press/0.jpg",
  "desenvolvimento":         BASE+"Dumbbell_Shoulder_Press/0.jpg",
  "crucifixo-maquina":       BASE+"Pec_Deck_Fly/0.jpg",
  "triceps-testa":           BASE+"Barbell_Lying_Triceps_Extension_Skull_Crusher/0.jpg",
  "triceps-mergulho":        BASE+"Tricep_Dips/0.jpg",
  "paralela":                BASE+"Tricep_Dips/0.jpg",
  "barra-fixa":              BASE+"Pullups/0.jpg",
  "remada-baixa":            BASE+"Seated_Cable_Rows/0.jpg",
  "pulldown":                BASE+"Wide-Grip_Lat_Pulldown/0.jpg",
  "face-pull":               BASE+"Face_Pull/0.jpg",
  "rosca-martelo":           BASE+"Alternate_Hammer_Curl/0.jpg",
  "terra-romeno":            BASE+"Romanian_Deadlift/0.jpg",
  "afundo":                  BASE+"Barbell_Lunge/0.jpg",
  "gluteo-cabo":             BASE+"Standing_Hip_Extension/0.jpg",
  "crossover":               BASE+"Cable_Crossover/0.jpg",
  "rosca-alternada":         BASE+"Dumbbell_Alternate_Bicep_Curl/0.jpg",
  "rosca-concentrada":       BASE+"Concentration_Curls/0.jpg",
  "martelo":                 BASE+"Alternate_Hammer_Curl/0.jpg",
  "remada-maquina":          BASE+"Bent_Over_Barbell_Row/0.jpg",
};

// Fallback candidates if primary fails (alternate IDs)
const EXERCISE_FALLBACKS = {
  "supino-inclinado-halter": BASE+"Dumbbell_Flyes/0.jpg",
  "elevacao-lateral":        BASE+"Dumbbell_Lateral_Raise/0.jpg",
  "crucifixo-maquina":       BASE+"Cable_Crossover/0.jpg",
  "triceps-testa":           BASE+"Lying_Triceps_Press/0.jpg",
  "triceps-mergulho":        BASE+"Bench_Dips/0.jpg",
  "paralela":                BASE+"Bench_Dips/0.jpg",
  "remada-baixa":            BASE+"Bent_Over_Barbell_Row/0.jpg",
  "gluteo-cabo":             BASE+"Cable_Hip_Adduction/0.jpg",
};

function loadExercisePhoto(key, icon, container) {
  const url = EXERCISE_PHOTOS[key];
  if (!url) { container.innerHTML = fallbackHTML(icon); return; }

  const img = new Image();
  img.onload = () => {
    container.innerHTML = '';
    container.style.background = '#111';
    const el = document.createElement('img');
    el.src = url;
    el.style.cssText = 'width:100%;height:100%;object-fit:contain;object-position:center;padding:12px;';
    container.appendChild(el);
  };
  img.onerror = () => {
    // try fallback
    const fb = EXERCISE_FALLBACKS[key];
    if (fb) {
      const img2 = new Image();
      img2.onload = () => {
        container.innerHTML = '';
        const el = document.createElement('img');
        el.src = fb;
        el.style.cssText = 'width:100%;height:100%;object-fit:contain;padding:12px;';
        container.appendChild(el);
      };
      img2.onerror = () => { container.innerHTML = fallbackHTML(icon); };
      img2.src = fb;
    } else {
      container.innerHTML = fallbackHTML(icon);
    }
  };
  img.src = url;
}

function fallbackHTML(icon) {
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;opacity:.4">
    <span style="font-size:64px">${icon}</span>
    <span style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:#555;letter-spacing:2px;text-transform:uppercase">imagem indisponível</span>
  </div>`;
}

let currentModule = null;
let currentDayIdx = 0;

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
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.background = window.scrollY > 20 ? 'rgba(8,8,8,0.98)' : 'rgba(10,10,10,0.9)';
});
