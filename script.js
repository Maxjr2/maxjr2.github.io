// Translation data
const translations = {
    en: {
        "hero.title": "Welcome to GitHub",
        "hero.subtitle": "A friendly introduction for non-developers and IT professionals",
        "what.title": "What is GitHub?",
        "what.description": "GitHub is a web-based platform that helps teams collaborate on projects, track changes, and manage versions of files. Think of it as a sophisticated \"track changes\" feature combined with a collaboration hub.",
        "what.benefit1.title": "Version Control",
        "what.benefit1.description": "Keep track of every change made to your files with a complete history.",
        "what.benefit2.title": "Team Collaboration",
        "what.benefit2.description": "Work together with your team without overwriting each other's work.",
        "what.benefit3.title": "Backup & Recovery",
        "what.benefit3.description": "Never lose work again - easily restore previous versions anytime.",
        "concepts.title": "Key Concepts",
        "concepts.repository.title": "📚 Repository (Repo)",
        "concepts.repository.description": "A repository is like a project folder that contains all your files and the complete history of changes. Think of it as your project's home.",
        "concepts.commit.title": "💾 Commit",
        "concepts.commit.description": "A commit is a saved snapshot of your changes. It's like clicking \"Save\" with a description of what you changed. Each commit creates a checkpoint you can return to.",
        "concepts.branch.title": "🌳 Branch",
        "concepts.branch.description": "Branches let you work on different versions of your project simultaneously. The main branch is your primary version, while other branches are for testing new ideas safely.",
        "concepts.pull.title": "⬇️ Pull Request (PR)",
        "concepts.pull.description": "A pull request is a proposal to merge your changes into the main project. It allows team members to review and discuss changes before they're finalized.",
        "concepts.issue.title": "🎯 Issue",
        "concepts.issue.description": "Issues are used to track tasks, bugs, or feature requests. They help organize work and facilitate discussion about improvements.",
        "getting-started.title": "Getting Started",
        "getting-started.step1.title": "Create an Account",
        "getting-started.step1.description": "Sign up for a free GitHub account at github.com. You'll need an email address and username.",
        "getting-started.step2.title": "Explore a Repository",
        "getting-started.step2.description": "Browse public repositories to see how projects are organized. Click on files to view their contents and history.",
        "getting-started.step3.title": "Create Your First Repository",
        "getting-started.step3.description": "Click the \"+\" icon and select \"New repository\". Give it a name and description, then initialize it with a README file.",
        "getting-started.step4.title": "Make Your First Commit",
        "getting-started.step4.description": "Edit the README file directly on GitHub, write a commit message describing your change, and save it.",
        "use-cases.title": "Use Cases for Non-Developers",
        "use-cases.documentation.title": "📄 Documentation Management",
        "use-cases.documentation.description": "Store and track changes to technical documentation, user guides, and team wikis. Everyone can contribute and improvements are tracked.",
        "use-cases.project.title": "📊 Project Management",
        "use-cases.project.description": "Use Issues and Projects to organize tasks, track progress, and manage workflows without needing specialized project management software.",
        "use-cases.policies.title": "📋 Policy & Procedure Tracking",
        "use-cases.policies.description": "Maintain company policies, SOPs, and procedures with full version history. See who changed what and when, ensuring accountability.",
        "use-cases.collaboration.title": "🤝 Cross-Team Collaboration",
        "use-cases.collaboration.description": "Collaborate with developers on requirements, testing scenarios, or configuration files. No development experience required.",
        "next.title": "Ready to Get Started?",
        "next.description": "GitHub is more accessible than you think! Start exploring and don't be afraid to experiment - you can always undo changes.",
        "next.button": "Visit GitHub",
        "footer.text": "An introductory guide to GitHub for non-technical professionals"
    },
    es: {
        "hero.title": "Bienvenido a GitHub",
        "hero.subtitle": "Una introducción amigable para profesionales no desarrolladores y de TI",
        "what.title": "¿Qué es GitHub?",
        "what.description": "GitHub es una plataforma basada en web que ayuda a los equipos a colaborar en proyectos, rastrear cambios y gestionar versiones de archivos. Piénsalo como una función sofisticada de \"control de cambios\" combinada con un centro de colaboración.",
        "what.benefit1.title": "Control de Versiones",
        "what.benefit1.description": "Rastrea cada cambio realizado en tus archivos con un historial completo.",
        "what.benefit2.title": "Colaboración en Equipo",
        "what.benefit2.description": "Trabaja junto con tu equipo sin sobrescribir el trabajo de los demás.",
        "what.benefit3.title": "Respaldo y Recuperación",
        "what.benefit3.description": "Nunca pierdas trabajo nuevamente - restaura versiones anteriores fácilmente en cualquier momento.",
        "concepts.title": "Conceptos Clave",
        "concepts.repository.title": "📚 Repositorio (Repo)",
        "concepts.repository.description": "Un repositorio es como una carpeta de proyecto que contiene todos tus archivos y el historial completo de cambios. Piénsalo como el hogar de tu proyecto.",
        "concepts.commit.title": "💾 Commit",
        "concepts.commit.description": "Un commit es una instantánea guardada de tus cambios. Es como hacer clic en \"Guardar\" con una descripción de lo que cambiaste. Cada commit crea un punto de control al que puedes regresar.",
        "concepts.branch.title": "🌳 Rama (Branch)",
        "concepts.branch.description": "Las ramas te permiten trabajar en diferentes versiones de tu proyecto simultáneamente. La rama principal es tu versión primaria, mientras que otras ramas son para probar nuevas ideas de forma segura.",
        "concepts.pull.title": "⬇️ Solicitud de Extracción (Pull Request)",
        "concepts.pull.description": "Una solicitud de extracción es una propuesta para fusionar tus cambios en el proyecto principal. Permite a los miembros del equipo revisar y discutir cambios antes de finalizarlos.",
        "concepts.issue.title": "🎯 Problema (Issue)",
        "concepts.issue.description": "Los issues se utilizan para rastrear tareas, errores o solicitudes de funciones. Ayudan a organizar el trabajo y facilitar la discusión sobre mejoras.",
        "getting-started.title": "Primeros Pasos",
        "getting-started.step1.title": "Crear una Cuenta",
        "getting-started.step1.description": "Regístrate para obtener una cuenta gratuita de GitHub en github.com. Necesitarás una dirección de correo electrónico y un nombre de usuario.",
        "getting-started.step2.title": "Explorar un Repositorio",
        "getting-started.step2.description": "Explora repositorios públicos para ver cómo están organizados los proyectos. Haz clic en los archivos para ver su contenido e historial.",
        "getting-started.step3.title": "Crear tu Primer Repositorio",
        "getting-started.step3.description": "Haz clic en el ícono \"+\" y selecciona \"Nuevo repositorio\". Dale un nombre y descripción, luego inicialízalo con un archivo README.",
        "getting-started.step4.title": "Hacer tu Primer Commit",
        "getting-started.step4.description": "Edita el archivo README directamente en GitHub, escribe un mensaje de commit describiendo tu cambio y guárdalo.",
        "use-cases.title": "Casos de Uso para No Desarrolladores",
        "use-cases.documentation.title": "📄 Gestión de Documentación",
        "use-cases.documentation.description": "Almacena y rastrea cambios en documentación técnica, guías de usuario y wikis del equipo. Todos pueden contribuir y las mejoras se rastrean.",
        "use-cases.project.title": "📊 Gestión de Proyectos",
        "use-cases.project.description": "Usa Issues y Projects para organizar tareas, rastrear progreso y gestionar flujos de trabajo sin necesidad de software especializado de gestión de proyectos.",
        "use-cases.policies.title": "📋 Seguimiento de Políticas y Procedimientos",
        "use-cases.policies.description": "Mantén políticas de la empresa, POE y procedimientos con historial de versiones completo. Verifica quién cambió qué y cuándo, garantizando responsabilidad.",
        "use-cases.collaboration.title": "🤝 Colaboración entre Equipos",
        "use-cases.collaboration.description": "Colabora con desarrolladores en requisitos, escenarios de prueba o archivos de configuración. No se requiere experiencia en desarrollo.",
        "next.title": "¿Listo para Empezar?",
        "next.description": "¡GitHub es más accesible de lo que piensas! Comienza a explorar y no tengas miedo de experimentar - siempre puedes deshacer cambios.",
        "next.button": "Visitar GitHub",
        "footer.text": "Una guía introductoria de GitHub para profesionales no técnicos"
    },
    fr: {
        "hero.title": "Bienvenue sur GitHub",
        "hero.subtitle": "Une introduction conviviale pour les professionnels non développeurs et informatiques",
        "what.title": "Qu'est-ce que GitHub ?",
        "what.description": "GitHub est une plateforme web qui aide les équipes à collaborer sur des projets, suivre les modifications et gérer les versions de fichiers. Imaginez-le comme une fonction sophistiquée de \"suivi des modifications\" combinée à un hub de collaboration.",
        "what.benefit1.title": "Contrôle de Version",
        "what.benefit1.description": "Suivez chaque modification apportée à vos fichiers avec un historique complet.",
        "what.benefit2.title": "Collaboration d'Équipe",
        "what.benefit2.description": "Travaillez ensemble avec votre équipe sans écraser le travail des autres.",
        "what.benefit3.title": "Sauvegarde et Récupération",
        "what.benefit3.description": "Ne perdez plus jamais de travail - restaurez facilement les versions précédentes à tout moment.",
        "concepts.title": "Concepts Clés",
        "concepts.repository.title": "📚 Dépôt (Repository)",
        "concepts.repository.description": "Un dépôt est comme un dossier de projet qui contient tous vos fichiers et l'historique complet des modifications. Considérez-le comme la maison de votre projet.",
        "concepts.commit.title": "💾 Commit",
        "concepts.commit.description": "Un commit est un instantané enregistré de vos modifications. C'est comme cliquer sur \"Enregistrer\" avec une description de ce que vous avez changé. Chaque commit crée un point de contrôle auquel vous pouvez revenir.",
        "concepts.branch.title": "🌳 Branche (Branch)",
        "concepts.branch.description": "Les branches vous permettent de travailler sur différentes versions de votre projet simultanément. La branche principale est votre version primaire, tandis que d'autres branches servent à tester de nouvelles idées en toute sécurité.",
        "concepts.pull.title": "⬇️ Demande de Tirage (Pull Request)",
        "concepts.pull.description": "Une demande de tirage est une proposition pour fusionner vos modifications dans le projet principal. Elle permet aux membres de l'équipe d'examiner et de discuter des modifications avant qu'elles ne soient finalisées.",
        "concepts.issue.title": "🎯 Problème (Issue)",
        "concepts.issue.description": "Les issues sont utilisés pour suivre les tâches, les bugs ou les demandes de fonctionnalités. Ils aident à organiser le travail et à faciliter la discussion sur les améliorations.",
        "getting-started.title": "Premiers Pas",
        "getting-started.step1.title": "Créer un Compte",
        "getting-started.step1.description": "Inscrivez-vous pour un compte GitHub gratuit sur github.com. Vous aurez besoin d'une adresse e-mail et d'un nom d'utilisateur.",
        "getting-started.step2.title": "Explorer un Dépôt",
        "getting-started.step2.description": "Parcourez les dépôts publics pour voir comment les projets sont organisés. Cliquez sur les fichiers pour afficher leur contenu et leur historique.",
        "getting-started.step3.title": "Créer Votre Premier Dépôt",
        "getting-started.step3.description": "Cliquez sur l'icône \"+\" et sélectionnez \"Nouveau dépôt\". Donnez-lui un nom et une description, puis initialisez-le avec un fichier README.",
        "getting-started.step4.title": "Faire Votre Premier Commit",
        "getting-started.step4.description": "Modifiez le fichier README directement sur GitHub, écrivez un message de commit décrivant votre modification et enregistrez-le.",
        "use-cases.title": "Cas d'Utilisation pour Non-Développeurs",
        "use-cases.documentation.title": "📄 Gestion de la Documentation",
        "use-cases.documentation.description": "Stockez et suivez les modifications de la documentation technique, des guides utilisateur et des wikis d'équipe. Tout le monde peut contribuer et les améliorations sont suivies.",
        "use-cases.project.title": "📊 Gestion de Projet",
        "use-cases.project.description": "Utilisez Issues et Projects pour organiser les tâches, suivre les progrès et gérer les flux de travail sans avoir besoin de logiciel spécialisé de gestion de projet.",
        "use-cases.policies.title": "📋 Suivi des Politiques et Procédures",
        "use-cases.policies.description": "Maintenez les politiques de l'entreprise, les procédures opératoires standard et les procédures avec un historique complet des versions. Voyez qui a changé quoi et quand, assurant la responsabilité.",
        "use-cases.collaboration.title": "🤝 Collaboration Inter-Équipes",
        "use-cases.collaboration.description": "Collaborez avec les développeurs sur les exigences, les scénarios de test ou les fichiers de configuration. Aucune expérience de développement requise.",
        "next.title": "Prêt à Commencer ?",
        "next.description": "GitHub est plus accessible que vous ne le pensez ! Commencez à explorer et n'ayez pas peur d'expérimenter - vous pouvez toujours annuler les modifications.",
        "next.button": "Visiter GitHub",
        "footer.text": "Un guide d'introduction à GitHub pour les professionnels non techniques"
    }
};

// Current language
let currentLang = 'en';

// Function to update page content based on selected language
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
}

// Load saved language preference or detect browser language
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferredLanguage');
    
    if (savedLang && translations[savedLang]) {
        updateLanguage(savedLang);
    } else {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0]; // Get primary language code
        
        if (translations[langCode]) {
            updateLanguage(langCode);
        } else {
            updateLanguage('en'); // Default to English
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    loadLanguagePreference();
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
