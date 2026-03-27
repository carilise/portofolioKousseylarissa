import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaShoppingBag, FaGift, FaBaby, FaStar } from "react-icons/fa";
import { FaShirt, FaBottleWater } from "react-icons/fa6";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiDatabase,
} from "react-icons/di";
import {
  SiLaravel,
  SiSymfony,
  SiPostgresql,
  SiVite,
  SiTypescript,
} from "react-icons/si";

export const profile = {
  name: "Larissa",
  lastname: "KOUSSEY",
  initials: "LK",
  role: "Développeur Full Stack",
  tagline:
    "Développeur web passionné par la création d'expériences web modernes et performantes.",
  available: true,
  email: "larissakousseypro@email.com",
  linkedin: "https://bj.linkedin.com/in/larissa-koussey-772109385",
  github: "https://github.com/carilise",
  formation: "Systeme informatique et logiciel",
  langues: "Français, Anglais",
  apprentissage: "Python, PostgreSQL",
};

export const skills = [
  { name: "HTML / CSS", icon: DiHtml5, color: "#e34c26" },
  { name: "JavaScript", icon: DiJavascript1, color: "#f7df1e" },
  { name: "React Vite", icon: DiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Git", icon: DiGit, color: "#f05032" },
  { name: "Bases de données", icon: DiDatabase, color: "#336791" },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
  { name: "Symfony", icon: SiSymfony, color: "#1a1a2e" },
  { name: "Python", icon: DiPython, color: "#3776ab" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

export const projects = [
  {
    title: "Portfolio Personnel — Larissa KOUSSEY",
    description:
      "Mon portfolio professionnel conçu de A à Z — de la maquette au déploiement. Stack hybride HTML/CSS/JavaScript en frontend et Python Flask en backend pour une architecture moderne et dynamique.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
    image: "/img/portfolio.png",
    alt: "Portfolio personnel",
    demoUrl: "https://portofoliokousseylarissa-2.onrender.com/",
  },
  {
    title: "Site de création de boutique en ligne",
    description:
      "Une plateforme moderne pour créer et gérer facilement votre boutique en ligne. Marketown propose des outils intuitifs pour ajouter vos produits, personnaliser votre vitrine et suivre vos ventes en temps réel — une solution complète pour lancer votre commerce digital.",
    tags: ["E-commerce", "Boutique en ligne", "Gestion produits"],
    image: "/img/lariShop.png",
    alt: "Site de création de boutique Marketown",
    demoUrl: "https://marketown.olahdn.net/",
  },

  {
    title: "Mini Calculatrice — Simple & Efficace",
    description:
      "Une calculatrice web minimaliste et intuitive. Opérations de base, interface claire et interactions dynamiques en JavaScript pur — un classique revisité avec soin.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    image: "/img/calculatrice.png",
    alt: "Mini Calculatrice",
    demoUrl: "https://minicalculatrice-xacg.onrender.com/",
  },
  {
    title: "MonitoPets — E-commerce de chiots",
    description:
      "Un site e-commerce élégant dédié à l'adoption de chiots. Intégration pixel-perfect d'une maquette Figma avec des composants React réutilisables et une expérience utilisateur fluide.",
    tags: ["HTML", "CSS", "React", "TypeScript", "Vite"],
    image: "/img/monito_challenge.png",
    alt: "MonitoPets Challenge",
    codeUrl: "https://github.com/carilise/MonitoPetsChallenge3",
    demoUrl: "https://carilise.github.io/MonitoPetsChallenge3/",
  },
  {
    title: "TheFrenchTototte — Boutique bébé",
    description:
      "Une boutique en ligne chic et moderne pour produits bébé made in France. Design épuré, typographie soignée et fidélité totale à la maquette Figma originale.",
    tags: ["HTML", "CSS", "React", "TypeScript", "Vite"],
    image: "/img/tottote_challenge.png",
    alt: "TheFrenchTototte",
    codeUrl: "https://github.com/carilise/TheFrenchTototte",
    demoUrl: "https://carilise.github.io/TheFrenchTototte/",
  },
  {
    title: "Futuristic App — Interface nouvelle génération",
    description:
      "Une interface web au design avant-gardiste et immersif. Animations CSS avancées, effets visuels modernes et mise en page audacieuse inspirée de l'univers futuriste.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/img/vault_challenge.png",
    alt: "Futuristic App",
    codeUrl: "https://github.com/carilise/Futuristic_App",
    demoUrl: "https://carilise.github.io/Futuristic_App/",
  },
];

export const beyond = {
  description: [
    "En dehors du développement web, je dirige LariSTORE, ma boutique en ligne dédiée à la personnalisation d'articles. Je crée des pièces uniques et sur-mesure pour mes clients.",
    "Cette activité m'a permis de développer un vrai sens du design, de l'expérience client et du commerce digital — des compétences qui enrichissent aussi mon travail de développeuse.",
  ],
  categories: [
    { label: "Accessoires & bijoux", icon: FaShoppingBag },
    { label: "Objets déco & cadeaux", icon: FaGift },
    { label: "Articles bébé & enfants", icon: FaBaby },
    { label: "Vêtements & textiles", icon: FaShirt },
    { label: "Gourdes personnalisées", icon: FaBottleWater },
    { label: "Et bien plus encore...", icon: FaStar },
  ],
  shopUrl: "https://laristore.vercel.app/",
  shopSub: "Boutique de personnalisation en ligne",
};

export const contacts = [
  {
    label: "Email",
    value: "larissakousseypro@email.com",
    href: "mailto:larissakousseypro@email.com",
    icon: FaEnvelope,
    color: "#d93025",
    fab: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/larissa-koussey",
    href: "https://bj.linkedin.com/in/larissa-koussey-772109385",
    icon: FaLinkedin,
    color: "#0077b5",
    fab: true,
  },
  {
    label: "GitHub",
    value: "github.com/carilise",
    href: "https://github.com/carilise",
    icon: FaGithub,
    color: "#333",
    fab: true,
  },
  {
    label: "WhatsApp",
    value: "+229 01 53 93 47 71",
    href: "https://wa.me/22953934771",
    icon: FaWhatsapp,
    color: "#25d366",
    fab: true,
  },
];
