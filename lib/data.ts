export type Service = {
  icon: "web" | "app" | "rocket" | "ai";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "web",
    title: "Création de sites web professionnels",
    description:
      "Sites modernes, rapides et sécurisés, conçus pour refléter l'identité de votre entreprise et convertir vos visiteurs.",
  },
  {
    icon: "app",
    title: "Applications web personnalisées",
    description:
      "Applications web sur mesure, pensées pour vos processus métier et développées pour évoluer avec votre activité.",
  },
  {
    icon: "rocket",
    title: "Solutions digitales sur mesure",
    description:
      "Outils numériques qui simplifient vos processus, réduisent les tâches répétitives et augmentent la productivité.",
  },
  {
    icon: "ai",
    title: "Intelligence artificielle & automatisation",
    description:
      "Intégration de solutions IA pour automatiser vos tâches et offrir une meilleure expérience à vos utilisateurs.",
  },
];

export type ProjectCategory =
  | "Sites web professionnels"
  | "Applications web"
  | "Solutions digitales";

export type Project = {
  name: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  gradient: string; // aperçu visuel de la carte
  code: string; // extrait affiché dans l'aperçu
};

export const projects: Project[] = [
  {
    name: "Head and Neck Journal of Madagascar",
    description:
      "Le Head and Neck Journal of Madagascar publie des travaux de recherche clinique et fondamentale en neurochirurgie, ORL, ophtalmologie, chirurgie maxillo-faciale et stomatologie. Il est destiné aux professionnels de santé et aux chercheurs.",
    category: "Sites web professionnels",
    technologies: ["Laravel", "Javascript", "Bootstrap"],
    gradient: "from-gold/40 via-navy-2 to-ink",
    code: "export const site = build('vitrine')",
  },
  {
    name: "Des sites web ministériels",
    description:
      "Conception et mise en production de plateformes web utilisées quotidiennement par les services du ministère de l'Enseignement Technique et de la Formation Professionnelle pour la gestion des activités administratives et pédagogiques.",
    category: "Applications web",
    technologies: ["Laravel", "Symfony", "CodeIgniter", "Next.js", "Javascript", "Bootstrap"],
    gradient: "from-gold/40 via-navy-2 to-ink",
    code: "export const site = build('vitrine')",
  },
  {
    name: "Vitrine Atelier Karibu",
    description:
      "Site vitrine premium pour un cabinet de conseil : présentation des services, blog et prise de rendez-vous en ligne.",
    category: "Sites web professionnels",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-gold/40 via-navy-2 to-ink",
    code: "export const site = build('vitrine')",
  },
  {
    name: "E-commerce Rabutin Market",
    description:
      "Boutique en ligne complète avec catalogue, panier, gestion du stock et suivi des commandes.",
    category: "Sites web professionnels",
    technologies: ["Laravel", "PHP", "MySQL"],
    gradient: "from-gold-light/30 via-navy to-ink",
    code: "await checkout.pay(order)",
  },
  {
    name: "Portail RH TeamFlow",
    description:
      "Application web de gestion des congés, des présences et des évaluations pour une organisation de 200 employés.",
    category: "Applications web",
    technologies: ["React", "Node.js", "MongoDB"],
    gradient: "from-gold/30 via-navy-2 to-ink",
    code: "leave.approve(employeeId)",
  },
  {
    name: "Tableau de bord LogiTrack",
    description:
      "Suivi logistique en temps réel : cartographie des livraisons, alertes automatiques et rapports d'activité.",
    category: "Applications web",
    technologies: ["Next.js", "WebSocket", "Mapbox"],
    gradient: "from-gold-light/25 via-navy to-ink",
    code: "socket.on('delivery', update)",
  },
  {
    name: "Automatisation FacturePro",
    description:
      "Solution digitale de facturation automatisée : génération de devis, relances intelligentes et export comptable.",
    category: "Solutions digitales",
    technologies: ["TypeScript", "Node.js", "PDFKit"],
    gradient: "from-gold/35 via-navy-2 to-ink",
    code: "invoice.generate({ auto: true })",
  },
  
];

export const contactInfo = {
  email: "ernestorabutin02@gmail.com",
  whatsapp: "+261 34 12 584 92",
  whatsappLink: "https://wa.me/261341258492",
  socials: [
    // { name: "LinkedIn", href: "https://www.linkedin.com/in/ernesto-rabutin-a58611323/" },
    // { name: "GitHub", href: "https://github.com/rbt-dev-hub" },
    { name: "WhatsApp", href: "https://wa.me/261341258492" },
    { name: "Facebook", href: "https://facebook.com/rbtdevhub" },
  ],
};
