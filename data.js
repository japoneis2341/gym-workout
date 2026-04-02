// ===== WORKOUT DATA =====

const EXERCISES_DB = {
  // ---- PEITO ----
  "supino-reto": {
    name: "Supino Reto",
    icon: "🏋️",
    muscle: "Peito · Tríceps · Ombro Anterior",
    tip: "Mantenha os pés no chão, costas levemente arqueadas. Desça a barra controlado até tocar o peito e empurre com explosão.",
    anim: "bench-press"
  },
  "supino-inclinado-halter": {
    name: "Supino Inclinado Halter",
    icon: "💪",
    muscle: "Peito Superior · Tríceps",
    tip: "Ângulo entre 30°–45°. Palmas voltadas uma para a outra no pico, rotacione para cima ao subir.",
    anim: "incline-dumbbell"
  },
  "supino-inclinado-barra": {
    name: "Supino Inclinado Barra",
    icon: "💪",
    muscle: "Peito Superior · Tríceps",
    tip: "Pegada levemente mais larga que os ombros. Controle a descida, empurre forte na subida.",
    anim: "incline-press"
  },
  "crossover": {
    name: "Crossover",
    icon: "🔀",
    muscle: "Peito · Serrátil",
    tip: "Leve inclinação no tronco. Cruze as mãos no final para máximo adução. Foco total na contração.",
    anim: "crossover"
  },
  "crucifixo-maquina": {
    name: "Crucifixo Máquina",
    icon: "🤗",
    muscle: "Peito · Deltoide Anterior",
    tip: "Ajuste o banco para que os cotovelos fiquem alinhados com os ombros. Expire no fechamento.",
    anim: "fly-machine"
  },

  // ---- COSTAS ----
  "remada-curvada": {
    name: "Remada Curvada",
    icon: "🔙",
    muscle: "Dorsais · Romboides · Bíceps",
    tip: "Tronco a 45°, coluna neutra. Puxe em direção ao umbigo, cotoveladas para trás.",
    anim: "bent-row"
  },
  "puxada-frente": {
    name: "Puxada na Frente",
    icon: "⬇️",
    muscle: "Dorsais · Bíceps",
    tip: "Pegada larga, tronco levemente inclinado. Puxe até a altura do queixo, cotoveladas em direção ao chão.",
    anim: "lat-pulldown"
  },
  "remada-baixa": {
    name: "Remada Baixa",
    icon: "🎣",
    muscle: "Dorsais · Romboides · Trapézio",
    tip: "Sente ereto, puxe o cabo até o abdômen. Pausa na contração por 1s antes de soltar.",
    anim: "cable-row"
  },
  "pulldown": {
    name: "Pulldown",
    icon: "🔽",
    muscle: "Dorsais · Bíceps",
    tip: "Semelhante à puxada, mas foco na amplitude. Permita o alongamento completo no topo.",
    anim: "lat-pulldown"
  },
  "face-pull": {
    name: "Face Pull",
    icon: "🎯",
    muscle: "Deltoide Posterior · Manguito Rotador",
    tip: "Puxe em direção à testa, cotovelos acima dos ombros. Ótimo para saúde do ombro.",
    anim: "face-pull"
  },
  "barra-fixa": {
    name: "Barra Fixa / Puxada Aberta",
    icon: "🔝",
    muscle: "Dorsais · Bíceps · Romboides",
    tip: "Pegada pronada larga. Puxe o peito em direção à barra. Evite balançar o corpo.",
    anim: "pull-up"
  },
  "remada-maquina": {
    name: "Remada",
    icon: "🔙",
    muscle: "Dorsais · Romboides",
    tip: "Mantenha coluna neutra. Foque em retrair as escápulas ao puxar.",
    anim: "bent-row"
  },

  // ---- OMBRO ----
  "desenvolvimento-halter": {
    name: "Desenvolvimento Halter",
    icon: "🎯",
    muscle: "Deltoide · Trapézio",
    tip: "Sente no banco com encosto. Empurre verticalmente sem travar os cotovelos no topo.",
    anim: "shoulder-press"
  },
  "desenvolvimento": {
    name: "Desenvolvimento",
    icon: "🎯",
    muscle: "Deltoide · Trapézio",
    tip: "Core contraído. Pressione os halteres acima da cabeça de forma controlada.",
    anim: "shoulder-press"
  },
  "elevacao-lateral": {
    name: "Elevação Lateral",
    icon: "↔️",
    muscle: "Deltoide Medial",
    tip: "Leve flexão do cotovelo, polegar levemente voltado para baixo. Não use momentum.",
    anim: "lateral-raise"
  },

  // ---- BÍCEPS ----
  "rosca-direta": {
    name: "Rosca Direta",
    icon: "💪",
    muscle: "Bíceps Braquial",
    tip: "Cotovelos fixos ao lado do tronco. Supine o punho no topo para máxima contração.",
    anim: "bicep-curl"
  },
  "rosca-martelo": {
    name: "Rosca Martelo",
    icon: "🔨",
    muscle: "Bíceps · Braquial · Braquiorradial",
    tip: "Pegada neutra (polegar para cima). Curl controlado, ótimo para espessura do braço.",
    anim: "hammer-curl"
  },
  "rosca-alternada": {
    name: "Rosca Alternada",
    icon: "🔄",
    muscle: "Bíceps Braquial",
    tip: "Alterne os braços de forma controlada. Supine o antebraço na fase concêntrica.",
    anim: "alt-curl"
  },
  "rosca-concentrada": {
    name: "Rosca Concentrada",
    icon: "🎯",
    muscle: "Bíceps (pico)",
    tip: "Apoie o cotovelo na parte interna da coxa. Movimento isolado para o pico do bíceps.",
    anim: "concentration-curl"
  },
  "martelo": {
    name: "Martelo",
    icon: "🔨",
    muscle: "Bíceps · Braquiorradial",
    tip: "Pegada neutra. Curle de forma controlada sem balançar os cotovelos.",
    anim: "hammer-curl"
  },

  // ---- TRÍCEPS ----
  "triceps-corda": {
    name: "Tríceps Corda",
    icon: "🪢",
    muscle: "Tríceps (cabeça lateral)",
    tip: "Cotovelos fixos ao lado do corpo. Abra a corda no final para ativar a cabeça lateral.",
    anim: "tricep-pushdown"
  },
  "triceps-testa": {
    name: "Tríceps Testa",
    icon: "🧠",
    muscle: "Tríceps (cabeça longa)",
    tip: "Deitado no banco, baixe o halter ou barra em direção à testa. Ótimo para massa.",
    anim: "skull-crusher"
  },
  "triceps-mergulho": {
    name: "Tríceps Mergulho",
    icon: "⬇️",
    muscle: "Tríceps · Peito · Ombro",
    tip: "Tronco ereto para foco no tríceps. Desça até 90° nos cotovelos.",
    anim: "dip"
  },
  "paralela": {
    name: "Paralela",
    icon: "⬇️",
    muscle: "Tríceps · Peito Inferior",
    tip: "Tronco levemente à frente. Desça controlado, empurre com força.",
    anim: "dip"
  },

  // ---- PERNAS ----
  "agachamento-livre": {
    name: "Agachamento Livre",
    icon: "🦵",
    muscle: "Quadríceps · Glúteos · Isquiotibiais",
    tip: "Pés na largura dos ombros, pontas levemente abertas. Desça até paralelo ou abaixo. Coluna neutra.",
    anim: "squat"
  },
  "agachamento": {
    name: "Agachamento",
    icon: "🦵",
    muscle: "Quadríceps · Glúteos",
    tip: "Core ativado durante todo o movimento. Joelhos alinhados com a ponta dos pés.",
    anim: "squat"
  },
  "leg-press": {
    name: "Leg Press",
    icon: "🦿",
    muscle: "Quadríceps · Glúteos",
    tip: "Pés no meio da plataforma. Não trave os joelhos no topo. Amplitude completa.",
    anim: "leg-press"
  },
  "stiff": {
    name: "Stiff",
    icon: "📐",
    muscle: "Isquiotibiais · Glúteos",
    tip: "Joelhos quase estendidos. Incline o tronco à frente mantendo costas retas até sentir o alongamento.",
    anim: "stiff"
  },
  "mesa-flexora": {
    name: "Mesa Flexora",
    icon: "🔄",
    muscle: "Isquiotibiais",
    tip: "Quadril apoiado no banco. Flexione as pernas de forma controlada. Pausa na contração.",
    anim: "leg-curl"
  },
  "cadeira-extensora": {
    name: "Cadeira Extensora",
    icon: "🦵",
    muscle: "Quadríceps",
    tip: "Estenda completamente os joelhos. Pausa no topo por 1s para máxima contração.",
    anim: "leg-extension"
  },
  "extensora": {
    name: "Extensora",
    icon: "🦵",
    muscle: "Quadríceps",
    tip: "Estenda as pernas completamente. Mantenha o quadril apoiado.",
    anim: "leg-extension"
  },
  "flexora": {
    name: "Flexora",
    icon: "🔄",
    muscle: "Isquiotibiais",
    tip: "Movimento controlado. Pausa na contração máxima.",
    anim: "leg-curl"
  },
  "panturrilha-pe": {
    name: "Panturrilha em Pé",
    icon: "🦶",
    muscle: "Gastrocnêmio · Sóleo",
    tip: "Amplitude máxima, tanto em cima quanto embaixo. Pausa de 1s em cima.",
    anim: "calf-raise"
  },
  "panturrilha-sentada": {
    name: "Panturrilha Sentada",
    icon: "🦶",
    muscle: "Sóleo",
    tip: "Amplitude completa. Esse exercício foca no sóleo, músculo profundo da panturrilha.",
    anim: "seated-calf"
  },
  "panturrilha": {
    name: "Panturrilha",
    icon: "🦶",
    muscle: "Gastrocnêmio · Sóleo",
    tip: "Execute com amplitude máxima. Pausa no pico de cada repetição.",
    anim: "calf-raise"
  },
  "terra-romeno": {
    name: "Terra Romeno",
    icon: "🏗️",
    muscle: "Isquiotibiais · Glúteos · Lombar",
    tip: "Barra próxima ao corpo, joelhos com leve flexão fixa. Empurre o quadril para frente ao subir.",
    anim: "rdl"
  },
  "afundo": {
    name: "Afundo",
    icon: "🚶",
    muscle: "Quadríceps · Glúteos · Isquiotibiais",
    tip: "Passo largo, joelho de trás quase toca o chão. Tronco ereto.",
    anim: "lunge"
  },
  "gluteo-cabo": {
    name: "Glúteo no Cabo",
    icon: "🍑",
    muscle: "Glúteo Máximo",
    tip: "Fixe o cabo no tornozelo. Empurre a perna para trás com controle, squeeze no glúteo.",
    anim: "cable-kickback"
  },
};

// ===== NAKA WORKOUT =====
const NAKA = {
  id: "naka",
  name: "Naka",
  days: [
    {
      day: "Segunda",
      short: "SEG",
      focus: "Upper",
      title: "UPPER",
      subtitle: "Peito · Costas · Braços",
      exercises: [
        { key: "supino-reto", sets: "4", reps: "6–8" },
        { key: "remada-curvada", sets: "4", reps: "8–10" },
        { key: "supino-inclinado-halter", sets: "3", reps: "8–10" },
        { key: "puxada-frente", sets: "3", reps: "10–12" },
        { key: "elevacao-lateral", sets: "3", reps: "12–15" },
        { key: "rosca-direta", sets: "3", reps: "8–10" },
        { key: "triceps-corda", sets: "3", reps: "12–15" },
      ]
    },
    {
      day: "Terça",
      short: "TER",
      focus: "Lower",
      title: "LOWER",
      subtitle: "Completo",
      exercises: [
        { key: "agachamento-livre", sets: "4", reps: "6–8" },
        { key: "leg-press", sets: "3", reps: "10–12" },
        { key: "stiff", sets: "3", reps: "8–10" },
        { key: "mesa-flexora", sets: "3", reps: "12" },
        { key: "cadeira-extensora", sets: "3", reps: "12" },
        { key: "panturrilha-pe", sets: "4", reps: "15–20" },
      ]
    },
    {
      day: "Quarta",
      short: "QUA",
      focus: "Push",
      title: "PUSH",
      subtitle: "Peito · Ombro · Tríceps",
      exercises: [
        { key: "supino-inclinado-barra", sets: "4", reps: "6–8" },
        { key: "desenvolvimento-halter", sets: "4", reps: "8–10" },
        { key: "crucifixo-maquina", sets: "3", reps: "12" },
        { key: "elevacao-lateral", sets: "4", reps: "15" },
        { key: "triceps-testa", sets: "3", reps: "8–10" },
        { key: "triceps-mergulho", sets: "3", reps: "falha" },
      ]
    },
    {
      day: "Quinta",
      short: "QUI",
      focus: "Pull",
      title: "PULL",
      subtitle: "Costas · Bíceps",
      exercises: [
        { key: "barra-fixa", sets: "4", reps: "6–8" },
        { key: "remada-baixa", sets: "4", reps: "10" },
        { key: "pulldown", sets: "3", reps: "12" },
        { key: "face-pull", sets: "3", reps: "15" },
        { key: "rosca-direta", sets: "3", reps: "8–10" },
        { key: "rosca-martelo", sets: "3", reps: "12" },
      ]
    },
    {
      day: "Sexta",
      short: "SEX",
      focus: "Legs",
      title: "LEGS",
      subtitle: "Posterior · Glúteo",
      exercises: [
        { key: "terra-romeno", sets: "4", reps: "6–8" },
        { key: "afundo", sets: "3", reps: "10 cada" },
        { key: "mesa-flexora", sets: "3", reps: "12" },
        { key: "gluteo-cabo", sets: "3", reps: "12" },
        { key: "panturrilha-sentada", sets: "4", reps: "20" },
      ]
    },
  ]
};

// ===== THAYNITON WORKOUT =====
const THAYNITON = {
  id: "thayniton",
  name: "Thayniton",
  days: [
    {
      day: "Segunda",
      short: "SEG",
      focus: "Peito+Tri",
      title: "PEITO",
      subtitle: "Peito + Tríceps · Bulking Avançado",
      exercises: [
        { key: "supino-reto", sets: "4", reps: "6–8", tech: "rest-pause" },
        { key: "supino-inclinado-barra", sets: "4", reps: "8–10", tech: "drop" },
        { key: "crossover", sets: "3", reps: "12–15" },
        { key: "triceps-testa", sets: "4", reps: "8", tech: "rest-pause" },
        { key: "triceps-corda", sets: "3", reps: "12", tech: "drop" },
        { key: "paralela", sets: "3", reps: "falha" },
      ]
    },
    {
      day: "Terça",
      short: "TER",
      focus: "Costas+Bi",
      title: "COSTAS",
      subtitle: "Costas + Bíceps · Bulking Avançado",
      exercises: [
        { key: "puxada-frente", sets: "4", reps: "8–10", tech: "drop" },
        { key: "remada-curvada", sets: "4", reps: "6–8" },
        { key: "remada-baixa", sets: "3", reps: "10", tech: "rest-pause" },
        { key: "rosca-direta", sets: "4", reps: "8", tech: "rest-pause" },
        { key: "rosca-alternada", sets: "3", reps: "10", tech: "drop" },
        { key: "martelo", sets: "3", reps: "12" },
      ]
    },
    {
      day: "Quarta",
      short: "QUA",
      focus: "Pernas",
      title: "PERNAS",
      subtitle: "Quadríceps · Posterior · Panturrilha",
      exercises: [
        { key: "agachamento", sets: "4", reps: "6–8" },
        { key: "leg-press", sets: "4", reps: "10", tech: "drop" },
        { key: "extensora", sets: "3", reps: "12", tech: "drop" },
        { key: "flexora", sets: "3", reps: "12", tech: "rest-pause" },
        { key: "panturrilha", sets: "5", reps: "15" },
      ]
    },
    {
      day: "Quinta",
      short: "QUI",
      focus: "Ombro+Braço",
      title: "OMBRO",
      subtitle: "Ombro + Braço · Bulking Avançado",
      exercises: [
        { key: "desenvolvimento", sets: "4", reps: "8", tech: "rest-pause" },
        { key: "elevacao-lateral", sets: "4", reps: "12", tech: "drop" },
        { key: "rosca-direta", sets: "3", reps: "8", tech: "rest-pause" },
        { key: "triceps-testa", sets: "3", reps: "8", tech: "rest-pause" },
      ]
    },
    {
      day: "Sexta",
      short: "SEX",
      focus: "Peito+Cos",
      title: "PEITO + COSTAS",
      subtitle: "Volume Intenso",
      exercises: [
        { key: "supino-reto", sets: "4", reps: "8" },
        { key: "puxada-frente", sets: "4", reps: "10" },
        { key: "remada-maquina", sets: "3", reps: "10", tech: "rest-pause" },
      ]
    },
    {
      day: "Sábado",
      short: "SÁB",
      focus: "Braço",
      title: "BRAÇO",
      subtitle: "Volume Total · Bíceps + Tríceps",
      exercises: [
        { key: "rosca-direta", sets: "4", reps: "8", tech: "rest-pause" },
        { key: "rosca-alternada", sets: "4", reps: "10", tech: "drop" },
        { key: "rosca-concentrada", sets: "3", reps: "12" },
        { key: "triceps-testa", sets: "4", reps: "8", tech: "rest-pause" },
        { key: "triceps-corda", sets: "4", reps: "12", tech: "drop" },
        { key: "paralela", sets: "3", reps: "falha" },
      ]
    },
  ]
};
