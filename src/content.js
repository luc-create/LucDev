export const hero = {
  eyebrow: 'Développeur Web & Mobile',
  title: 'Je conçois des expériences numériques belles et utiles',
  intro:
    "Je suis Luc Konou, développeur Full Stack polyvalent. J'imagine et réalise des applications web, mobiles et desktop qui allient design, performance et impact.",
  image: '/images/Luc-Photoroom.png',
  imageAlt: 'Portrait de Luc Konou',
  actions: [
    {
      label: 'Explorer mon travail',
      href: '#projects',
      variant: 'primary',
    },
    {
      label: 'Télécharger mon CV',
      href: '/assets/KONOU.pdf',
      variant: 'ghost',
      download: true,
    },
  ],
  highlights: [
    { label: 'Projets réalisés', value: '35+' },
    { label: 'Technos maîtrisées', value: '12' },
    { label: 'Satisfaction clients', value: '98%' },
  ],
}

export const about = {
  title: 'Créer des solutions qui transforment le quotidien',
  text: [
    "Étudiant passionné en développement d'applications, je combine créativité, rigueur et esprit d'équipe pour concevoir des solutions numériques modernes.",
    "J'ai accompagné des cafétérias, des services de beauté, des plateformes de formation et je co-conçois l'application de livraison Maplénou.",
    "Toujours en apprentissage, j'explore Flutter, Firebase, Laravel, Bootstrap et bien d'autres technologies pour créer un web accessible et humain.",
  ],
  points: [
    'Approche centrée utilisateur et design systems modernes',
    'Vision produit : du prototype au déploiement',
    'Collaboration fluide avec équipes métiers et techniques',
  ],
}

export const services = [
  {
    title: 'Applications Mobiles',
    description:
      'Développement Flutter & Firebase : authentification sécurisée, notifications, analytics et expériences fluides.',
  },
  {
    title: 'Sites Web Modernes',
    description:
      'Sites vitrines et back-office responsives avec React, Laravel ou PHP, optimisés pour la performance.',
  },
  {
    title: 'Design UI/UX',
    description:
      'Création d’interfaces raffinées avec Figma, design systems complets et prototypage interactif.',
  },
  {
    title: 'Gestion de Données',
    description:
      'Modélisation SQL/NoSQL, dashboards, automatisation et intégrations temps réel sur mesure.',
  },
]

export const skills = [
  { name: 'Flutter & Firebase', value: 85 },
  { name: 'HTML & CSS', value: 95 },
  { name: 'JavaScript', value: 80 },
  { name: 'PHP & MySQL', value: 70 },
  { name: 'UI Design (Figma, Adobe)', value: 60 },
]

export const differentiators = [
  {
    title: 'Technologies maîtrisées',
    content: 'Flutter, Firebase, React, Laravel, PHP/MySQL, Java, Git, Botpress, Tailwind, Bootstrap.',
  },
  {
    title: 'Expériences concrètes',
    content:
      'Applications mobiles, systèmes de gestion, plateformes de formation, chatbots, sites institutionnels et outils métiers.',
  },
  {
    title: 'Partenaire de confiance',
    content:
      'Je privilégie la transparence, la qualité du code et une collaboration proactive dans la durée.',
  },
]

export const projects = [
  {
    title: 'Application de Gestion de Tickets',
    category: 'App Mobile',
    description: 'Flutter · Firebase — Authentification, rôles, suivi et notifications temps réel.',
    image: '/images/tickets-app.jpg',
    imageAlt: 'Interface mobile de gestion de tickets',
    link: '#',
  },
  {
    title: 'Application mobile Doctagne',
    category: 'App Mobile',
    description:
      'Prise de rendez-vous médicaux, suivi des dossiers patients et gestion des urgences. Interfaces Flutter, UI/UX Figma et lancement mobile en cours.',
    image: '/images/doctagne.png',
    imageAlt: 'Application mobile Doctagne pour la prise de rendez-vous médicaux',
    link: 'https://doctagne.com',
  },
  {
    title: 'Ecopower — Suivi électrique collaboratif',
    category: 'App Mobile',
    description:
      'Application de monitoring énergétique : relevés, factures, tableau de bord et rôles utilisateurs.',
    image: '/images/ecopower-frame.jpg',
    imageAlt: 'Application mobile Ecopower avec graphiques de consommation',
    link: '#',
  },
  {
    title: 'Restaurant Universitaire de Lomé',
    category: 'Web',
    description:
      'Plateforme de commande en ligne pour étudiants et personnel avec rôles différenciés, gestion des menus, des commandes et dashboard administrateur. Stack Vue.js, Vite, Node.js, MongoDB, Bootstrap, API REST (projet en cours).',
    image: '/images/campus-cantine.png',
    imageAlt: 'Application web de gestion du restaurant universitaire de Lomé',
    link: '#',
  },
  {
    title: 'Application Météo',
    category: 'Web',
    description: 'JavaScript · OpenWeatherMap — Interface responsive avec géolocalisation et prévisions.',
    image: '/images/meteo-app.png',
    imageAlt: 'Capture de l’application météo web',
    link: 'https://codepen.io/Luc-KONOU/pen/bNbrqmY',
  },
  {
    title: 'Générateur de Citations',
    category: 'Web',
    description: 'Application web JS proposant des citations aléatoires partageables.',
    image: '/images/quote-gen.png',
    imageAlt: 'Interface minimaliste du générateur de citations',
    link: 'https://codepen.io/Luc-KONOU/pen/ZYEERKm',
  },
  {
    title: 'CMS pour contenus éditoriaux',
    category: 'Web',
    description: 'PHP · MySQL · Bootstrap — Gestion des articles, rôles utilisateurs et workflows éditoriaux.',
    image: '/images/cms-web.png',
    imageAlt: 'Tableau de bord du CMS web',
    link: '#',
  },
  {
    title: 'Plateforme de formation JavaScript',
    category: 'Web',
    description: 'Cours interactifs, exercices, messagerie et analytics pour les apprenants.',
    image: '/images/js-formation.png',
    imageAlt: 'Plateforme de formation JavaScript en ligne',
    link: 'https://work.go.yj.fr/formation/',
  },
  {
    title: 'Raccourcisseur d’URL',
    category: 'Web',
    description: 'Application PHP avec génération de liens courts personnalisés et suivi des clics.',
    image: '/images/zip-url.png',
    imageAlt: 'Interface du raccourcisseur d’URL personnalisé',
    link: 'https://work.go.yj.fr/zip_url/home.php',
  },
  {
    title: "Refonte du site UCAO-UUT",
    category: 'Web',
    description: 'WordPress — Architecture des pages, design responsive et intégration de contenus.',
    image: '/images/ucao-uut.png',
    imageAlt: 'Page d’accueil du site UCAO-UUT',
    link: 'https://work.go.yj.fr/ucao-uut/',
  },
  {
    title: 'App Web Quincaillerie',
    category: 'Web',
    description: 'Suivi des ventes, stocks et tableaux de bord en temps réel.',
    image: '/images/hardware-web.png',
    imageAlt: 'Dashboard web pour gestion de quincaillerie',
    link: '#',
  },
  {
    title: 'App Desktop Quincaillerie',
    category: 'App Desktop',
    description: 'Java · JDBC — Gestion des stocks et des utilisateurs pour points de vente.',
    image: '/images/hardware-desktop.png',
    imageAlt: 'Application desktop de suivi de stock quincaillerie',
    link: '#',
  },
  {
    title: 'App de Bibliothèque',
    category: 'Web',
    description: 'Laravel — Gestion des emprunts, rôles et interface Blade moderne.',
    image: '/images/biblio.png',
    imageAlt: 'Interface web de gestion de bibliothèque',
    link: '#',
  },
  {
    title: 'Chatbot intelligent',
    category: 'Web',
    description: 'Botpress — Automatisation des réponses, génération de texte et code.',
    image: '/images/chatbot.png',
    imageAlt: 'Conversation avec le chatbot intelligent',
    link: 'https://mediafiles.botpress.cloud/50814c15-3417-478b-a3f2-6e0a97a10285/webchat/bot.html',
  },
]

export const testimonials = [
  {
    name: 'Eusebio Claude',
    role: 'Ancien Directeur ISTIN - UCAO',
    quote:
      "Luc est un étudiant rigoureux et passionné. Il a démontré une grande autonomie dans ses projets et une maîtrise solide des technologies web et mobile.",
  },
  {
    name: 'Folly Habib Messan',
    role: 'Développeur Web & Mobile',
    quote:
      "J’ai vu Luc évoluer avec une belle progression. Il sait combiner esprit d’équipe, innovation et compétences techniques pour livrer des solutions fiables.",
  },
  {
    name: 'Kossi Emmanuel Lodo',
    role: 'Développeur Full Stack (Mentor)',
    quote:
      "Luc est un développeur très prometteur. Il n’a pas peur des défis techniques et apprend vite. C’est un plaisir de le voir progresser jour après jour.",
  },
]

export const faqs = [
  {
    question: 'Quels types de projets réalises-tu ?',
    answer:
      'Applications mobiles Flutter, sites web dynamiques en React, Laravel ou PHP, et des outils métiers sur mesure.',
  },
  {
    question: 'Quels langages et outils utilises-tu ?',
    answer:
      'Flutter, Laravel, PHP, Java, JavaScript, HTML/CSS, Firebase, MySQL, Botpress, Tailwind, Bootstrap, Git.',
  },
  {
    question: 'Proposes-tu la maintenance après livraison ?',
    answer:
      'Oui, je propose un suivi : correctifs, mises à jour, évolutions fonctionnelles et monitoring du produit.',
  },
  {
    question: 'Combien de temps faut-il pour réaliser un projet ?',
    answer:
      'Un site vitrine simple prend 1 à 2 semaines. Une application mobile complète demande 3 à 6 semaines selon la complexité.',
  },
  {
    question: 'Comment te contacter ?',
    answer:
      'Par e-mail à konouluc0@gmail.com, via le formulaire de contact ou encore sur LinkedIn.',
  },
]

export const contact = {
  location: 'Zanguéra, Lomé - Togo',
  phone: '+228 97 24 04 60',
  email: 'konouluc0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luc-konou',
}

export const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
