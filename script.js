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
    de: {
        "hero.title": "Willkommen bei GitHub",
        "hero.subtitle": "Eine freundliche Einführung für Nicht-Entwickler und IT-Professionals",
        "what.title": "Was ist GitHub?",
        "what.description": "GitHub ist eine webbasierte Plattform, die Teams bei der Zusammenarbeit an Projekten, der Verfolgung von Änderungen und der Verwaltung von Dateiversionen unterstützt. Stellen Sie es sich als eine ausgefeilte \"Änderungen nachverfolgen\"-Funktion in Kombination mit einem Kollaborations-Hub vor.",
        "what.benefit1.title": "Versionskontrolle",
        "what.benefit1.description": "Verfolgen Sie jede Änderung an Ihren Dateien mit einer vollständigen Historie.",
        "what.benefit2.title": "Team-Zusammenarbeit",
        "what.benefit2.description": "Arbeiten Sie mit Ihrem Team zusammen, ohne die Arbeit der anderen zu überschreiben.",
        "what.benefit3.title": "Sicherung & Wiederherstellung",
        "what.benefit3.description": "Verlieren Sie nie wieder Arbeit - stellen Sie frühere Versionen jederzeit einfach wieder her.",
        "concepts.title": "Wichtige Konzepte",
        "concepts.repository.title": "📚 Repository (Repo)",
        "concepts.repository.description": "Ein Repository ist wie ein Projektordner, der alle Ihre Dateien und die vollständige Historie der Änderungen enthält. Betrachten Sie es als das Zuhause Ihres Projekts.",
        "concepts.commit.title": "💾 Commit",
        "concepts.commit.description": "Ein Commit ist eine gespeicherte Momentaufnahme Ihrer Änderungen. Es ist wie das Klicken auf \"Speichern\" mit einer Beschreibung dessen, was Sie geändert haben. Jeder Commit erstellt einen Kontrollpunkt, zu dem Sie zurückkehren können.",
        "concepts.branch.title": "🌳 Branch (Zweig)",
        "concepts.branch.description": "Branches ermöglichen es Ihnen, gleichzeitig an verschiedenen Versionen Ihres Projekts zu arbeiten. Der Hauptzweig ist Ihre primäre Version, während andere Zweige zum sicheren Testen neuer Ideen dienen.",
        "concepts.pull.title": "⬇️ Pull Request (PR)",
        "concepts.pull.description": "Ein Pull Request ist ein Vorschlag, Ihre Änderungen in das Hauptprojekt zu integrieren. Er ermöglicht es Teammitgliedern, Änderungen zu überprüfen und zu diskutieren, bevor sie finalisiert werden.",
        "concepts.issue.title": "🎯 Issue (Problem)",
        "concepts.issue.description": "Issues werden verwendet, um Aufgaben, Fehler oder Feature-Anfragen zu verfolgen. Sie helfen bei der Organisation der Arbeit und erleichtern die Diskussion über Verbesserungen.",
        "getting-started.title": "Erste Schritte",
        "getting-started.step1.title": "Konto erstellen",
        "getting-started.step1.description": "Melden Sie sich für ein kostenloses GitHub-Konto unter github.com an. Sie benötigen eine E-Mail-Adresse und einen Benutzernamen.",
        "getting-started.step2.title": "Repository erkunden",
        "getting-started.step2.description": "Durchsuchen Sie öffentliche Repositories, um zu sehen, wie Projekte organisiert sind. Klicken Sie auf Dateien, um deren Inhalt und Historie anzuzeigen.",
        "getting-started.step3.title": "Ihr erstes Repository erstellen",
        "getting-started.step3.description": "Klicken Sie auf das \"+\"-Symbol und wählen Sie \"Neues Repository\". Geben Sie ihm einen Namen und eine Beschreibung und initialisieren Sie es dann mit einer README-Datei.",
        "getting-started.step4.title": "Ihren ersten Commit durchführen",
        "getting-started.step4.description": "Bearbeiten Sie die README-Datei direkt auf GitHub, schreiben Sie eine Commit-Nachricht, die Ihre Änderung beschreibt, und speichern Sie sie.",
        "use-cases.title": "Anwendungsfälle für Nicht-Entwickler",
        "use-cases.documentation.title": "📄 Dokumentationsverwaltung",
        "use-cases.documentation.description": "Speichern und verfolgen Sie Änderungen an technischer Dokumentation, Benutzerhandbüchern und Team-Wikis. Jeder kann beitragen und Verbesserungen werden verfolgt.",
        "use-cases.project.title": "📊 Projektmanagement",
        "use-cases.project.description": "Verwenden Sie Issues und Projects, um Aufgaben zu organisieren, Fortschritte zu verfolgen und Workflows zu verwalten, ohne spezialisierte Projektmanagement-Software zu benötigen.",
        "use-cases.policies.title": "📋 Richtlinien- und Verfahrensverfolgung",
        "use-cases.policies.description": "Pflegen Sie Unternehmensrichtlinien, SOPs und Verfahren mit vollständiger Versionshistorie. Sehen Sie, wer was und wann geändert hat, um Verantwortlichkeit sicherzustellen.",
        "use-cases.collaboration.title": "🤝 Team-übergreifende Zusammenarbeit",
        "use-cases.collaboration.description": "Arbeiten Sie mit Entwicklern an Anforderungen, Testszenarien oder Konfigurationsdateien zusammen. Keine Entwicklungserfahrung erforderlich.",
        "next.title": "Bereit loszulegen?",
        "next.description": "GitHub ist zugänglicher als Sie denken! Beginnen Sie mit der Erkundung und haben Sie keine Angst zu experimentieren - Sie können Änderungen jederzeit rückgängig machen.",
        "next.button": "GitHub besuchen",
        "footer.text": "Ein einführender Leitfaden zu GitHub für nicht-technische Fachkräfte"
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
