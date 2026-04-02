// ===== EXERCISE PHOTO DATABASE =====
const EXERCISE_PHOTOS = {
  "bench-press":    "https://treinomestre.com.br/wp-content/uploads/2016/08/supino-reto.gif",
  "incline-dumbbell":"https://treinomestre.com.br/wp-content/uploads/2019/09/supino-inclinado-halteres.gif",
  "incline-press":  "https://treinomestre.com.br/wp-content/uploads/2019/09/supino-inclinado-barra.gif",
  "crossover":      "https://treinomestre.com.br/wp-content/uploads/2019/09/crossover.gif",
  "fly-machine":    "https://treinomestre.com.br/wp-content/uploads/2019/09/crucifixo-maquina.gif",
  "bent-row":       "https://treinomestre.com.br/wp-content/uploads/2019/01/remada-curvada.gif",
  "lat-pulldown":   "https://treinomestre.com.br/wp-content/uploads/2019/01/puxada-frontal.gif",
  "cable-row":      "https://treinomestre.com.br/wp-content/uploads/2019/01/remada-baixa.gif",
  "face-pull":      "https://treinomestre.com.br/wp-content/uploads/2019/01/face-pull.gif",
  "pull-up":        "https://treinomestre.com.br/wp-content/uploads/2019/01/barra-fixa.gif",
  "shoulder-press": "https://treinomestre.com.br/wp-content/uploads/2018/12/desenvolvimento-halteres.gif",
  "lateral-raise":  "https://treinomestre.com.br/wp-content/uploads/2018/12/elevacao-lateral.gif",
  "bicep-curl":     "https://treinomestre.com.br/wp-content/uploads/2016/08/rosca-direta.gif",
  "hammer-curl":    "https://treinomestre.com.br/wp-content/uploads/2016/08/rosca-martelo.gif",
  "alt-curl":       "https://treinomestre.com.br/wp-content/uploads/2016/08/rosca-alternada.gif",
  "concentration-curl":"https://treinomestre.com.br/wp-content/uploads/2016/08/rosca-concentrada.gif",
  "tricep-pushdown":"https://treinomestre.com.br/wp-content/uploads/2018/11/triceps-corda.gif",
  "skull-crusher":  "https://treinomestre.com.br/wp-content/uploads/2018/11/triceps-testa.gif",
  "dip":            "https://treinomestre.com.br/wp-content/uploads/2019/01/mergulho.gif",
  "squat":          "https://treinomestre.com.br/wp-content/uploads/2019/01/agachamento-livre.gif",
  "leg-press":      "https://treinomestre.com.br/wp-content/uploads/2019/01/leg-press-45.gif",
  "stiff":          "https://treinomestre.com.br/wp-content/uploads/2019/01/stiff.gif",
  "leg-curl":       "https://treinomestre.com.br/wp-content/uploads/2019/01/mesa-flexora.gif",
  "leg-extension":  "https://treinomestre.com.br/wp-content/uploads/2019/01/cadeira-extensora.gif",
  "calf-raise":     "https://treinomestre.com.br/wp-content/uploads/2018/12/panturrilha-em-pe.gif",
  "seated-calf":    "https://treinomestre.com.br/wp-content/uploads/2018/12/panturrilha-sentada.gif",
  "rdl":            "https://treinomestre.com.br/wp-content/uploads/2019/01/terra-romeno.gif",
  "lunge":          "https://treinomestre.com.br/wp-content/uploads/2019/01/afundo.gif",
  "cable-kickback": "https://treinomestre.com.br/wp-content/uploads/2019/01/gluteo-cabo.gif",
  "pulldown":       "https://treinomestre.com.br/wp-content/uploads/2019/01/puxada-frontal.gif",
};

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
      onclick="selectDay('${moduleId}', ${i})" id="day-btn-${moduleId}-${i}">
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
    </div>
  `;
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
    </div>
  `;
}

// ===== MODAL =====
function openModal(key, sets, reps, tech) {
  const data = EXERCISES_DB[key];
  if (!data) return;

  const photoUrl = EXERCISE_PHOTOS[data.anim];
  const animContainer = document.getElementById('modalAnim');

  if (photoUrl) {
    animContainer.innerHTML = `
      <img 
        src="${photoUrl}" 
        alt="${data.name}"
        style="width:100%;height:100%;object-fit:cover;object-position:center;"
        onerror="this.parentElement.innerHTML='<div style=\\'display:flex;flex-direction:column;align-items:center;gap:8px;opacity:.5\\'><span style=\\'font-size:56px\\'>${data.icon}</span><span style=\\'font-family:Barlow Condensed,sans-serif;font-size:12px;color:#555;letter-spacing:1px\\'>IMAGEM INDISPONÍVEL</span></div>'"
      />
    `;
  } else {
    animContainer.innerHTML = `<span style="font-size:60px;opacity:.4">${data.icon}</span>`;
  }

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

// Close modal on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== NAV SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.background = window.scrollY > 20
    ? 'rgba(8,8,8,0.98)'
    : 'rgba(10,10,10,0.9)';
});
