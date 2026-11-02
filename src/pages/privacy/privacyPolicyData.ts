export type PrivacyPolicySection = {
    id: string;
    title: string;
    paragraphs: string[];
    services?: {
        name: string;
        description: string;
    }[];
    contact?: {
        name: string;
        street: string;
        city: string;
        email: string;
    };
};

export const privacyPolicySections: PrivacyPolicySection[] = [
    {
        id: "information-we-collect",
        title: "Information We Collect",
        paragraphs: [
            "When you use our contact form, we collect the information you voluntarily provide, including your name, email address, subject, and message.",
            "Our website hosting and security services may also process technical information, such as IP addresses, browser information, and website requests.",
            "We may also collect anonymous website usage information, such as page views, referring websites, and general visitor locations, through Cloudflare Web Analytics.",
        ],
    },
    {
        id: "how-we-use-your-information",
        title: "How We Use Your Information",
        paragraphs: [
            "Information submitted through our contact form is used to receive and respond to your questions or messages.",
            "Contact form submissions are delivered to the church's designated email recipient. We do not use contact form submissions for marketing purposes.",
            "Website analytics help us understand how visitors use our website and identify opportunities to improve its content and performance.",
        ],
    },
    {
        id: "third-party-services",
        title: "Third-Party Services",
        paragraphs: [
            "These providers may process information as necessary to deliver their services.",
        ],
        services: [
            {
                name: "Cloudflare",
                description: "Provides website hosting and security services.",
            },
            {
                name: "Cloudflare Web Analytics",
                description: "Provides privacy-focused website traffic and performance statistics without using cookies, local storage, or visitor fingerprinting.",
            },
            {
                name: "Web3Forms",
                description: "Processes contact form submissions and delivers messages to the church's email inbox. Submission retention is configured for 30 days.",
            },
            {
                name: "Tithely",
                description: "Provides online giving services. Donations are processed on Tithely's website under its own privacy and security practices.",
            },
        ],
    },
    {
        id: "information-security",
        title: "Information Security",
        paragraphs: [
            "We use third-party services that provide security measures intended to protect information transmitted through the website. However, no method of transmitting or storing information online can be guaranteed to be completely secure.",
        ],
    },
    {
        id: "data-retention",
        title: "Data Retention",
        paragraphs: [
            "Contact form submissions are retained by Web3Forms for 30 days under our configured retention setting.",
            "Messages delivered to the church's email inbox may be retained separately as needed to respond to inquiries and maintain church correspondence.",
        ],
    },
    {
        id: "external-websites",
        title: "External Websites",
        paragraphs: [
            "Our website may contain links to external websites. Fellowship Baptist Church is not responsible for the privacy practices or content of those websites. We encourage visitors to review their privacy policies.",
        ],
    },
    {
        id: "changes-to-this-policy",
        title: "Changes to This Policy",
        paragraphs: [
            "We may update this Privacy Policy as our website and services change. Updates will be reflected by the date shown at the top of this page.",
        ],
    },
    {
        id: "contact-us",
        title: "Contact Us",
        paragraphs: [
            "If you have questions about this Privacy Policy or how information submitted through our website is handled, please contact Fellowship Baptist Church.",
        ],
        contact: {
            name: "Fellowship Baptist Church",
            street: "401 Jenkins Bridge Road",
            city: "Fountain Inn, SC 29644",
            email: "PastorJackLBoyer@spectrum.net",
        },
    },
];
