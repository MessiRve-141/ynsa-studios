export type GameId = 'vigilia' | 'ynsanity-racing' | 'after-the-fall';

export interface GameSpecItem {
  label: string;
  value: string;
}

export interface GameFeature {
  title: string;
  detail: string;
}

export interface VigiliaData {
  id: 'vigilia';
  indexLabel: string;
  title: string;
  subtitle: string;
  genreLine: string;
  url: string;
  coverImage: string;
  coverAlt: string;
  shortHook: string;
  narrativeLead: string;
  storyParagraphs: string[];
  protagonist: {
    name: string;
    context: string;
    premise: string;
  };
  objective: string;
  experience: string;
  audioNotice: string;
  controls: { key: string; action: string }[];
  features: GameFeature[];
  specs: GameSpecItem[];
}

export interface YnsanityTrack {
  name: string;
  distance: string;
  timeOfDay: string;
  unlock: string;
  description: string;
}

export interface YnsanityVehicle {
  name: string;
  tier: string;
  category: string;
  power: string;
  drivetrain: string;
}

export interface YnsanityData {
  id: 'ynsanity-racing';
  indexLabel: string;
  title: string;
  subtitle: string;
  genreLine: string;
  url: string;
  coverImage: string;
  coverAlt: string;
  shortHook: string;
  narrativeLead: string;
  storyParagraphs: string[];
  objective: string;
  experience: string;
  modes: { name: string; description: string }[];
  tracks: YnsanityTrack[];
  vehicles: YnsanityVehicle[];
  features: GameFeature[];
  specs: GameSpecItem[];
}

export interface AfterFallWeapon {
  name: string;
  caliber: string;
  role: string;
  stats: string;
}

export interface AfterFallData {
  id: 'after-the-fall';
  indexLabel: string;
  title: string;
  subtitle: string;
  genreLine: string;
  url: string;
  coverImage: string;
  coverAlt: string;
  shortHook: string;
  narrativeLead: string;
  storyParagraphs: string[];
  sectorBriefing: {
    zone: string;
    network: string;
    initialLoadout: string[];
  };
  objective: string;
  experience: string;
  arsenal: AfterFallWeapon[];
  achievements: { name: string; requirement: string }[];
  controls: { key: string; action: string }[];
  features: GameFeature[];
  specs: GameSpecItem[];
}

export type GameEntry = VigiliaData | YnsanityData | AfterFallData;

export const STUDIO_IMAGES = {
  heroStudio: '/src/assets/images/hero_ynsa_studio_1794933088438.jpg',
  creatorDesk: '/src/assets/images/creator_ynsa_desk_1794933090916.jpg',
};

export const VIGILIA_GAME: VigiliaData = {
  id: 'vigilia',
  indexLabel: '01',
  title: 'VIGILIA — Las noches de Martín',
  subtitle: 'Terror psicológico y suspenso en primera persona',
  genreLine: 'Terror · Rosario, invierno de 1988 · Primera persona',
  url: 'https://vigilia-terror.lovable.app',
  coverImage: '/src/assets/images/game_vigilia_cover_1794933088662.jpg',
  coverAlt: 'Pasillo oscuro de madera iluminado por una linterna hacia una puerta entreabierta en Rosario, 1988',
  shortHook:
    'Rosario, invierno de 1988. Son las 12:00 AM, mamá dijo que mañana hay escuela, pero algo se mueve en el pasillo.',
  narrativeLead:
    'La casa quedó en silencio pasada la medianoche. Con solo una linterna y el oído atento a cada crujido, Martín debe atravesar las horas más largas de la noche.',
  storyParagraphs: [
    'Ambientado en Rosario durante el invierno de 1988, VIGILIA — Las noches de Martín comienza en el Prólogo a las 12:00 AM con una premisa íntima e inquietante: "Algo se mueve en el pasillo. Mamá dijo que mañana hay escuela."',
    'No hay armas ni enfrentamientos directos. La tensión nace de la oscuridad doméstica, la incertidumbre detrás de cada puerta y el sonido ambiental que advierte lo que se aproxima antes de que puedas verlo.',
  ],
  protagonist: {
    name: 'Martín',
    context: 'Rosario, invierno de 1988 · 12:00 AM',
    premise:
      'Un chico atrapado en la vigilia nocturna dentro de su propia casa mientras una presencia recorre los pasillos.',
  },
  objective:
    'Sobrevivir y sostener la vigilia nocturna vigilando los pasillos, examinando el entorno, cerrando accesos a tiempo y guiándote por el sonido hasta que termine la noche.',
  experience:
    'Una experiencia inmersiva de horror minimalista y claustrofóbico donde la oscuridad, el silencio y cada señal sonora te mantienen en vilo.',
  audioNotice: 'Usá auriculares · El sonido te mantiene vivo',
  controls: [
    { key: 'WASD / Flechas', action: 'Caminar por la casa' },
    { key: 'Mouse / Botón der.', action: 'Mirar alrededor y avanzar' },
    { key: 'F', action: 'Encender o apagar la linterna' },
    { key: 'E', action: 'Examinar objetos y el entorno' },
    { key: 'Espacio', action: 'Cerrar puertas y protegerte' },
  ],
  features: [
    {
      title: 'Ambientación en Rosario, 1988',
      detail: 'Escenarios nocturnos cargados de nostalgia oscura, madera, sombras densas e iluminación tenue de linterna.',
    },
    {
      title: 'Diseño centrado en el sonido',
      detail: 'El audio espacial es una herramienta vital de supervivencia para anticipar movimientos en el pasillo.',
    },
    {
      title: 'Guardado en cuenta o sin conexión',
      detail: 'Elegí iniciar sesión para conservar tu progreso o entrar directo en modo local sin conexión.',
    },
    {
      title: 'Controles adaptados por dispositivo',
      detail: 'Interfaz optimizada tanto para computadora (teclado y mouse) como para teléfono con botones táctiles.',
    },
  ],
  specs: [
    { label: 'Época', value: 'Invierno 1988' },
    { label: 'Inicio', value: '12:00 AM · Prólogo' },
    { label: 'Plataformas', value: 'PC y Móvil' },
  ],
};

export const YNSANITY_GAME: YnsanityData = {
  id: 'ynsanity-racing',
  indexLabel: '02',
  title: 'YNSANITY RACING',
  subtitle: 'Simulador de carreras arcade 3D en tu navegador',
  genreLine: 'Carreras 3D · 7 modos de juego · 10 circuitos',
  url: 'https://ynsanity-racing.lovable.app',
  coverImage: '/src/assets/images/game_ynsanity_cover_1794933088713.jpg',
  coverAlt: 'Superdeportivo rojo y fibra de carbono tomando una curva nocturna bajo reflectores sobre asfalto mojado',
  shortHook:
    'Siete modos de carrera, diez circuitos con clima y hora dinámicos, garaje progresivo y duelos locales o en línea.',
  narrativeLead:
    'De un compacto deportivo de tracción delantera hasta hiperdeportivos de 1600 HP. Elegí circuito, ajustá el clima y salí a buscar la vuelta perfecta.',
  storyParagraphs: [
    'YNSANITY RACING transforma el navegador en una parrilla de salida completa. Podés competir como invitado en modo local o crear tu perfil para sincronizar progreso, nivel, créditos y clasificaciones en línea.',
    'Cada carrera permite personalizar vueltas (1 a 5), dificultad (Fácil, Normal o Difícil), hora del día (Amanecer, Día, Atardecer o Noche) y condiciones climáticas entre despejado, nublado o lluvia.',
  ],
  objective:
    'Escalar niveles desde la clase D hasta la categoría S+, desbloquear circuitos y vehículos de alto rendimiento, ganar campeonatos de tres pruebas y marcar récords en cada trazado.',
  experience:
    'Velocidad arcade directa, competencia contra rivales de IA o fantasma de mejor vuelta, pantalla dividida local para dos jugadores y salas multijugador por código.',
  modes: [
    {
      name: 'Carrera Individual',
      description: 'Parrilla completa contra 5 rivales de IA. Vueltas, posiciones y podio.',
    },
    {
      name: 'Uno contra la Máquina',
      description: 'Tú contra un único rival. Sin tráfico: pura velocidad.',
    },
    {
      name: 'Contrarreloj',
      description: 'Solo contra el crono para conseguir medallas y récords personales.',
    },
    {
      name: 'Carrera Fantasma',
      description: 'Persigue en pista el fantasma del mejor tiempo registrado.',
    },
    {
      name: 'Campeonato',
      description: 'Tres pruebas consecutivas (como Anillo Apex → Ciudad Neón → Costa Azul) con copa en juego.',
    },
    {
      name: '1v1 Local (2 Jugadores)',
      description: 'Dos jugadores en el mismo dispositivo a pantalla dividida.',
    },
    {
      name: 'Multijugador',
      description: 'Creación y acceso a salas en línea mediante código y tabla de clasificación por circuito.',
    },
  ],
  tracks: [
    {
      name: 'Anillo Apex',
      distance: '3.21 km',
      timeOfDay: 'Día',
      unlock: 'Inicial',
      description: 'Circuito profesional con tribunas, boxes y curvas rápidas.',
    },
    {
      name: 'Ciudad Neón',
      distance: '2.26 km',
      timeOfDay: 'Noche',
      unlock: 'Inicial',
      description: 'Calles nocturnas entre rascacielos iluminados y asfalto reflectante.',
    },
    {
      name: 'Costa Azul',
      distance: '3.21 km',
      timeOfDay: 'Atardecer',
      unlock: 'Nivel 3',
      description: 'Carretera costera con cambios de rasante junto al mar.',
    },
    {
      name: 'Dunas Rojas',
      distance: '2.95 km',
      timeOfDay: 'Amanecer',
      unlock: 'Nivel 5',
      description: 'Cuenca del desierto con tres curvones gigantes bajo un volcán.',
    },
    {
      name: 'La Serpiente',
      distance: '3.89 km',
      timeOfDay: 'Día',
      unlock: 'Nivel 4',
      description: 'Ocho eses enormes encadenadas entre pinos sin dejar de girar.',
    },
    {
      name: 'Laguna Nocturna',
      distance: '2.51 km',
      timeOfDay: 'Noche',
      unlock: 'Nivel 11',
      description: 'Costa nocturna con un sector rapidísimo y una sucesión técnica de curvas.',
    },
  ],
  vehicles: [
    { name: 'Rabbit GTI Mk-S', tier: 'Clase D', category: 'Compacto inicial', power: '245 HP', drivetrain: 'FWD' },
    { name: 'Mazuma RX-Seven', tier: 'Clase C', category: 'Cupé japonés', power: '280 HP', drivetrain: 'RWD' },
    { name: 'Vanguard Thunder SS', tier: 'Clase B', category: 'Muscle car V8', power: '455 HP', drivetrain: 'RWD' },
    { name: 'Nishin Skyline GT-X R36', tier: 'Clase A', category: 'Gran turismo', power: '600 HP', drivetrain: 'AWD' },
    { name: 'Toro Aventus SVJ', tier: 'Clase S', category: 'Superdeportivo V12', power: '770 HP', drivetrain: 'AWD' },
    { name: 'Ängelholm Apex One', tier: 'Clase S+', category: 'Hiperdeportivo', power: '1600 HP', drivetrain: 'RWD' },
  ],
  features: [
    {
      title: 'Garaje con cámara libre 360°',
      detail: 'Inspeccioná cada vehículo con métricas reales de velocidad punta, aceleración, agarre y frenada.',
    },
    {
      title: 'Clima y horario configurables',
      detail: 'Corré al amanecer, de día, al atardecer o de noche bajo cielo despejado, nublado o lluvia.',
    },
    {
      title: 'Teclado, mando y táctil',
      detail: 'Teclas reasignables (WASD / flechas y freno de mano), compatibilidad automática con mando y controles móviles.',
    },
    {
      title: 'Progresión, tienda y rankings',
      detail: 'Subí de nivel, desbloqueá nuevos circuitos y autos de clases D a S+ y registrá tus tiempos.',
    },
  ],
  specs: [
    { label: 'Modos', value: '7 modalidades' },
    { label: 'Circuitos', value: '10 trazados' },
    { label: 'Categorías', value: 'Clase D a S+' },
  ],
};

export const AFTER_FALL_GAME: AfterFallData = {
  id: 'after-the-fall',
  indexLabel: '03',
  title: 'AFTER THE FALL',
  subtitle: 'Dead Sector · Supervivencia zombie FPS tras el apocalipsis',
  genreLine: 'Supervivencia FPS · Zona en cuarentena · Oleadas y saqueo',
  url: 'https://after-the-fall.lovable.app',
  coverImage: '/src/assets/images/game_afterfall_cover_1794933089128.jpg',
  coverAlt: 'Calle urbana abandonada en cuarentena bajo niebla densa y lluvia con un patrullero solitario encendido',
  shortHook:
    'Dead Sector: sobreviví a la noche eterna entre edificios infectados, niebla densa y lluvia ácida mientras armás tu equipo en el Mercado Negro.',
  narrativeLead:
    'En una zona urbana puesta en cuarentena, cada incursión es una carrera contra las oleadas de infectados, la falta de munición y la oscuridad.',
  storyParagraphs: [
    'AFTER THE FALL te sitúa dentro de Dead Sector, una ciudad colapsada bajo niebla espesa, lluvia ácida y edificios infectados. El operador inicia su incursión con equipamiento básico —cuchillo táctico, Glock 17 Gen5, escopeta Rem 870 y carabina M4A1— mientras explora calles vigiladas por radar y brújula.',
    'A medida que abatís infectados y saqueás cofres de suministros, reunís dinero y chatarra para acceder a la terminal oculta del Mercado Negro (ONION://SECTOR-7/MERCADO-NEGRO.SYS), donde podés inspeccionar en 360° y equipar 23 armas registradas, chalecos tácticos y munición especial.',
  ],
  sectorBriefing: {
    zone: 'DEAD SECTOR · Zona en cuarentena',
    network: 'ONION://SECTOR-7/MERCADO-NEGRO.SYS',
    initialLoadout: ['[0] Knife', '[1] Glock 17 Gen5', '[2] Rem 870', '[3] M4A1'],
  },
  objective:
    'Resistir oleada tras oleada controlando vitalidad y resistencia, saquear cajas de suministro, cumplir misiones diarias, desbloquear los 8 logros y mejorar tu arsenal y chaleco en el Mercado Negro.',
  experience:
    'Supervivencia táctica en primera persona con ciclo de día/noche y clima dinámico, gestión de durabilidad y munición FMJ, brújula activa de hostiles y botín, y progresión persistente de operador.',
  arsenal: [
    {
      name: 'Glock 17 Gen5',
      caliber: '9×19 mm Parabellum',
      role: 'Pistola equilibrada (inicial)',
      stats: 'Daño 32 · Cargador 17 · Alcance 60m',
    },
    {
      name: 'Colt M1911A1',
      caliber: '.45 ACP',
      role: 'Pistola de alto impacto',
      stats: 'Daño 54 · Cargador 8 · Alcance 58m',
    },
    {
      name: 'CZ Shadow 2',
      caliber: '.380 ACP / 9×19 mm',
      role: 'Pistola de precisión',
      stats: 'Daño 40 · Cargador 19 · Alcance 66m',
    },
    {
      name: 'Colt Python',
      caliber: '.44 Magnum',
      role: 'Revólver cañón pesado',
      stats: 'Daño 94 · Tambor 6 · Alcance 78m',
    },
    {
      name: 'Rem 870 y M4A1',
      caliber: 'Armas largas de dotación',
      role: 'Escopeta táctica y carabina de asalto',
      stats: 'Equipadas desde el inicio en slots [2] y [3]',
    },
  ],
  achievements: [
    { name: 'Primera Baja', requirement: 'Abatí a tu primer infectado en la zona en cuarentena.' },
    { name: 'Tiro de Gracia', requirement: 'Eliminá un infectado con disparo crítico a la cabeza.' },
    { name: 'Saqueador Urbano', requirement: 'Registrá 5 cajas de suministro en el sector.' },
    { name: 'Arsenal Clandestino', requirement: 'Adquirí nuevo equipamiento en el Mercado Negro.' },
    { name: 'Aguante Nocturno', requirement: 'Sobreviví 3 minutos continuos (180s) en una incursión.' },
    { name: 'Survive 10 Minutes', requirement: 'Resistí 10 minutos continuos (600s) en una sola incursión.' },
  ],
  controls: [
    { key: 'WASD + Shift', action: 'Moverse y esprintar' },
    { key: 'Clic Izq / Der / V', action: 'Disparar y apuntar con mira' },
    { key: 'R / E / I', action: 'Recargar, saquear cofres e inspeccionar' },
    { key: 'F / Q / 0-3', action: 'Linterna táctica, cuchillo y cambio de arma' },
  ],
  features: [
    {
      title: 'Mercado Negro con visor 3D',
      detail: '23 armas entre pistolas, revólveres, fusiles, SMG, snipers, escopetas, ametralladoras, chalecos y munición.',
    },
    {
      title: 'HUD táctico de supervivencia',
      detail: 'Vitalidad, resistencia, radar de hostiles y botín, brújula, durabilidad del arma y linterna.',
    },
    {
      title: 'Misiones diarias y logros',
      detail: 'Registro del Superviviente con récords de bajas, mejor tiempo y 8 logros desbloqueables.',
    },
    {
      title: 'Modo PC y Celular exclusivos',
      detail: 'Teclado + ratón en computadora o joystick virtual y botones ergonómicos en móvil, con cuenta o modo local.',
    },
  ],
  specs: [
    { label: 'Sector', value: 'Dead Sector' },
    { label: 'Arsenal', value: '23 armas + chalecos' },
    { label: 'Desafíos', value: '8 logros + misiones' },
  ],
};

export const ALL_GAMES: GameEntry[] = [VIGILIA_GAME, YNSANITY_GAME, AFTER_FALL_GAME];

export const CREATOR_STORY = {
  eyebrow: 'La historia detrás de los juegos',
  openingHeadline: 'TODO GRAN PROYECTO COMIENZA CON UNA IDEA QUE, AL PRINCIPIO, PARECE IMPOSIBLE.',
  paragraphs: [
    'Desde hace tiempo tenía una ilusión: crear mis propios videojuegos. No solamente jugarlos, sino imaginar mundos, inventar experiencias y conseguir que otras personas pudieran disfrutar de algo creado por mí.',
    'Siempre tuve ese entusiasmo, aunque muchas veces las herramientas, los conocimientos o las posibilidades parecían estar lejos de mi alcance.',
    'Pero decidí intentarlo.',
    'Con la ayuda de diferentes inteligencias artificiales, fui transformando ideas en proyectos reales. Aprendí, experimenté, corregí errores y descubrí que aquello que alguna vez imaginé para una exposición podía convertirse en algo que otras personas realmente pudieran jugar.',
    'Y ahí entendí algo:',
  ],
  featuredQuote:
    'La inteligencia artificial no tuvo el sueño por mí. Solamente me ayudó a encontrar una forma de hacerlo realidad.',
  continuationParagraphs: [
    'Porque no siempre necesitamos tener todos los recursos, saberlo todo o contar con todas las herramientas para empezar. A veces, lo único que necesitamos es una idea que nos entusiasme y el valor de intentar convertirla en algo real.',
    'Hay límites que existen, obstáculos que aparecen y cosas que todavía no sabemos hacer. Pero nunca deberíamos permitir que eso sea suficiente para abandonar algo que nos apasiona.',
    'El límite de lo que podemos llegar a crear no debería estar definido por lo que tenemos hoy, sino por lo que nos animamos a imaginar mañana.',
    'Estos tres juegos representan eso: una idea, una pasión y las ganas de demostrar que incluso algo que comienza como el sueño de un chico de sexto año puede convertirse en un proyecto que sorprenda a los demás.',
    'No sé hasta dónde puede llegar una idea cuando uno decide perseguirla. Pero sí sé algo: nunca habría descubierto lo que podía crear si no me hubiera animado a comenzar.',
  ],
  closingStatement:
    'NO ESPERES A TENER TODO PARA EMPEZAR. EMPEZÁ CON LO QUE TENÉS Y DESCUBRÍ HASTA DÓNDE PODÉS LLEGAR.',
  signature: 'YNSA',
};

export const CREATOR_CREDITS = {
  headline: 'UN PROYECTO CREADO CON IMAGINACIÓN, CURIOSIDAD Y MUCHA PASIÓN.',
  subheadline: 'Desarrollado por un chico de sexto año, conocido como YNSA.',
  body: 'Durante el desarrollo de Vigilia, Ynsanity Racing y After the Fall se utilizaron distintas herramientas de inteligencia artificial como apoyo técnico y creativo para transformar bocetos e ideas en experiencias interactivas jugables directamente en la web.',
  clarification:
    'La inteligencia artificial funcionó como puente y herramienta de aprendizaje; la curiosidad, el concepto de cada universo, las decisiones de diseño, las pruebas y las ganas de construir algo propio nacieron íntegramente de su creador.',
};
