export const hero = {
  eyebrow: 'Développeur Full Stack',
  title: 'Architecture & Innovation Digitales',
  intro:
    "Je suis Luc Konou. Je conçois des solutions techniques robustes et élégantes, de la conception mobile au déploiement backend, avec une approche pragmatique axée sur la performance.",
  image: '/images/Luc.jpeg',
  imageAlt: 'Portrait de Luc Konou',
  actions: [
    {
      label: 'Voir mes projets',
      href: '#projects',
      variant: 'primary',
    },
    {
      label: 'Mon CV',
      href: '/assets/CV-KONOU.pdf',
      variant: 'ghost',
      download: true,
    },
  ],
  highlights: [
    { label: 'Projets déployés', value: '20+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Expertise', value: 'Full Stack' },
  ],
}

export const about = {
  title: 'Une vision pragmatique du développement',
  text: [
    "Fort d'une expérience concrète dans le déploiement d'applications critiques comme Ecopower sur le Play Store, je transforme des problématiques complexes en interfaces intuitives et backends performants.",
    "Mon approche repose sur l'efficacité technique et la clarté architecturale, en évitant le sur-ingénierie pour privilégier la maintenabilité et l'impact utilisateur.",
  ],
  points: [
    'Architecture logicielle propre et scalable',
    'Développement mobile-first & PWA',
    'Expertise Backend (API REST, Sécurité JWT)',
  ],
}

export const services = [
  {
    title: 'Applications Mobiles',
    description:
      'Développement Flutter (iOS/Android) avec backends Node.js ou Firebase : authentification, temps réel et performances optimales.',
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
  { name: 'Flutter (Mobile)', value: 95 },
  { name: 'Node.js / Express / Prisma', value: 85 },
  { name: 'React / Next.js', value: 85 },
  { name: 'PostgreSQL / MySQL', value: 80 },
  { name: 'Vue.js (PWA)', value: 80 },
  { name: 'PHP / Laravel', value: 75 },
]

export const differentiators = [
  {
    title: 'Expertise Full-Stack',
    content: 'Flutter, Node.js, Prisma, PostgreSQL, React/Next.js, Vue.js, Laravel, Spring Boot.',
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
    title: 'Ecopower — Gestion Électrique Intelligente',
    category: 'App Mobile (Play Store)',
    description: 'Flutter · Node.js · Prisma · PostgreSQL — Solution complète de suivi de consommation, facturation automatique et notifications WhatsApp. Déployée pour propriétaires et résidents.',
    image: '/images/ecopower-frame.jpg',
    imageAlt: 'Application Ecopower on Google Play',
    link: 'https://play.google.com/store/apps/details?id=tg.konou.ecopower',
    featured: true,
  },
  {
    title: 'Sheloa — Carnet de Vaccination',
    category: 'PWA / Mobile-First',
    description: 'Vue 3 · Vite 7 · Tailwind 4 — Plateforme de suivi vaccinal pour enfants avec authentification OTP, gestion des dossiers patients et rappels intelligents.',
    image: '/images/vaccicarnet.webp',
    imageAlt: 'Interface mobile de Sheloa',
    link: 'https://sheloa.joinweheal.com/',
    featured: true,
  },
  {
    title: 'UCAO Academy — Gestion Académique',
    category: 'Web',
    description: 'Next.js · Node.js — Système complet pour l’UCAO-UUT : gestion des cours, emplois du temps, examens et espace de discussion interactif.',
    image: '/images/ucao-academy.png',
    imageAlt: 'Tableau de bord UCAO Academy',
    link: 'https://ucao-academy.vercel.app/',
    featured: true,
  },
  {
    title: 'Loban — Transport et livraison',
    category: 'App Mobile',
    description:
      'Application de transport et livraison : gestion de colis, déménagements, comparaison d\'offres et suivi en temps réel. Collaboration au développement.',
    image: '/images/loban.webp',
    imageAlt: 'Application mobile Loban pour le transport et la livraison',
    link: 'https://play.google.com/store/apps/details?id=com.najahscore.loaban',
    featured: true,
  },
  {
    title: 'VoteGBDE — Plateforme de vote',
    category: 'Backend / API',
    description:
      'Node.js · Express · Prisma · PostgreSQL — API de vote sécurisée (JWT, OTP e-mail, rate limiting), tests et documentation OpenAPI/Swagger. Déployée sur Vercel.',
    image: '/images/frame.jpg',
    imageAlt: 'API VoteGBDE — santé et documentation',
    link: 'https://ucao-vote-bgde.vercel.app/',
    featured: true,
  },
  {
    title: 'Trouvtogo — API objets perdus & trouvés',
    category: 'Backend / API',
    description:
      'Java 17 · Spring Boot · PostgreSQL — API REST pour signalements et gestion d’objets perdus/trouvés, sécurité JWT et documentation SpringDoc.',
    image: '/images/frame.jpg',
    imageAlt: 'Dépôt et architecture API Trouvtogo',
    link: 'https://github.com/Konou0luc/trouvtogo-api',
  },
  {
    title: 'Trouvtogo — Application web',
    category: 'Web',
    description:
      'React 19 · Vite · Tailwind CSS · Framer Motion — Front-office pour la découverte et le signalement d’objets.',
    image: '/images/trouvTogo-web.png',
    imageAlt: 'Application web Trouvtogo',
    link: 'https://trouv-togo-web.vercel.app/',
  },
  {
    title: 'WeHeal — Système de Gestion de Santé',
    category: 'Web',
    description: 'Vue.js · API REST — Dashboard d’administration centralisé pour les centres médicaux : rapports, gestion des patients et suivi des vaccinations.',
    image: '/images/frame.jpg', // Nouvelle illustration
    imageAlt: 'Dashboard WeHeal pour centres de santé',
    link: '#',
  },
  {
    title: 'DigiTicket — Sécurité & Billetterie',
    category: 'Backend / API',
    description: 'Java · Spring Boot · PostgreSQL — API robuste pour la gestion de billetterie, incluant authentification JWT et architecture granulaire des rôles.',
    image: '/images/tickets-app.jpg',
    imageAlt: 'Architecture DigiTicket Backend',
    link: 'https://github.com/luc-create/digiTicket.git',
  },
  {
    title: 'Nye Dowola — Application de Services',
    category: 'App Mobile',
    description: 'Flutter — Application facilitant l’accès aux services de proximité et la gestion des notifications en temps réel pour une expérience utilisateur fluide.',
    image: '/images/frame.jpg', // Suppression image Loban
    imageAlt: 'Interface de Nye Dowola',
    link: '#',
  },
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
    category: 'Projet Scolaire',
    description: 'WordPress — Architecture des pages, design responsive et intégration de contenus académiques.',
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
    category: 'Projet Scolaire',
    description: 'Java · JDBC — Gestion des stocks et des utilisateurs pour points de vente.',
    image: '/images/hardware-desktop.png',
    imageAlt: 'Application desktop de suivi de stock quincaillerie',
    link: '#',
  },
  {
    title: 'App de Bibliothèque',
    category: 'Projet Scolaire',
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
  linkedin: 'https://www.linkedin.com/in/luc-komla-konou-23957833a/',
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
