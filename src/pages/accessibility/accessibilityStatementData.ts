export type AccessibilitySection = {
    id: string;
    title: string;
    paragraphs: string[];
    items?: string[];
};

export const accessibilityContact = {
    name: "Fellowship Baptist Church",
    street: "401 Jenkins Bridge Road",
    city: "Fountain Inn, SC 29644",
    email: "PastorJackLBoyer@spectrum.net",
};

export const accessibilitySections: AccessibilitySection[] = [
    {
        id: "our-commitment",
        title: "Our Commitment",
        paragraphs: [
            "We strive to provide a website that is easy to navigate, understand, and use, regardless of a visitor's abilities or the technology they use.",
            "Our goal is to follow the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA wherever reasonably possible.",
        ],
    },
    {
        id: "accessibility-features",
        title: "Accessibility Features",
        paragraphs: [
            "We have taken steps to improve the accessibility of our website, including:",
        ],
        items: [
            "Using semantic HTML and clear heading structures.",
            "Supporting keyboard navigation throughout the website.",
            "Providing visible focus indicators for interactive elements.",
            "Supporting screen readers through appropriate labels and accessible controls.",
            "Designing responsive layouts that accommodate different screen sizes and browser zoom levels.",
            "Considering text contrast and readability throughout the website.",
        ],
    },
    {
        id: "known-limitations",
        title: "Known Limitations",
        paragraphs: [
            "Although we work to make our website accessible, some content or third-party services may not fully meet accessibility standards.",
            "We will continue reviewing and improving accessibility as the website develops.",
        ],
    },
    {
        id: "accessibility-feedback",
        title: "Accessibility Feedback",
        paragraphs: [
            "If you encounter an accessibility barrier or have difficulty using any part of our website, please contact us.",
            "We welcome feedback and will make reasonable efforts to address reported accessibility issues.",
        ],
    },
];
