// Comprehensive site settings management
export interface SiteSettings {
    // General Site Info
    siteName: string;
    siteDescription: string;
    contactEmail: string;

    // Social Links
    socialLinks: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };

    // Homepage Hero
    heroTitle: string;
    heroSubtitle: string;

    // About Page
    aboutTitle: string;
    aboutIntro: string;
    aboutMission: string;
    aboutVision: string;

    // Domains Page
    domainsTitle: string;
    domainsSubtitle: string;

    // Projects Page
    projectsTitle: string;
    projectsSubtitle: string;

    // Events Page
    eventsTitle: string;
    eventsSubtitle: string;

    // Blog Page
    blogTitle: string;
    blogSubtitle: string;

    // Contact Page
    contactTitle: string;
    contactSubtitle: string;
    contactAddress: string;
    contactPhone: string;
}

const SETTINGS_KEY = 'rootron_settings';

const defaultSettings: SiteSettings = {
    siteName: "ROOTRON",
    siteDescription: "Building the next generation of innovators",
    contactEmail: "contact@rootron.com",
    socialLinks: {
        github: "https://github.com/rootron",
        linkedin: "https://linkedin.com/company/rootron",
        twitter: "https://twitter.com/rootron",
        instagram: "https://instagram.com/rootron",
    },
    heroTitle: "Ignite. Innovate. Implement.",
    heroSubtitle: "ROOTRON is a student-led technical community dedicated to exploring the frontiers of technology, from AI and Robotics to Cybersecurity and Cloud Computing.",

    aboutTitle: "About ROOTRON",
    aboutIntro: "We are a passionate community of tech enthusiasts, innovators, and problem-solvers committed to pushing the boundaries of what's possible.",
    aboutMission: "To empower students with cutting-edge technical skills and foster innovation through hands-on projects and collaborative learning.",
    aboutVision: "To become the leading student technical community, producing innovators who shape the future of technology.",

    domainsTitle: "Our Domains",
    domainsSubtitle: "Explore the diverse fields of technology we specialize in",

    projectsTitle: "Our Projects",
    projectsSubtitle: "Innovative solutions built by our talented team",

    eventsTitle: "Events & Workshops",
    eventsSubtitle: "Join us for exciting tech events and learning opportunities",

    blogTitle: "Latest Insights",
    blogSubtitle: "Stay updated with our latest articles and tech insights",

    contactTitle: "Get In Touch",
    contactSubtitle: "Have questions? We'd love to hear from you!",
    contactAddress: "Tech Campus, Innovation Hub, Building A",
    contactPhone: "+1 (555) 123-4567",
};

export const settingsService = {
    get: (): SiteSettings => {
        if (typeof window === 'undefined') return defaultSettings;
        const stored = localStorage.getItem(SETTINGS_KEY);
        return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings;
    },

    save: (settings: SiteSettings): void => {
        if (typeof window === 'undefined') return;
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    },

    reset: (): void => {
        if (typeof window === 'undefined') return;
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultSettings));
    },
};
