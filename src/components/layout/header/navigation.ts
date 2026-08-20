export type NavLinkItem = {
    type: "link";
    label: string;
    href: string;
    emphasis?: boolean;
};

export type NavDropdownItem = {
    type: "dropdown";
    label: string;
    children: NavLinkItem[];
};

export type NavItem = NavLinkItem | NavDropdownItem;

export const navigationItems: NavItem[] = [
    {
        type: "dropdown",
        label: "About",
        children: [
            {
                type: "link",
                label: "Our Story",
                href: "/about/our-story",
            },
            {
                type: "link",
                label: "Meet the Pastor",
                href: "/about/meet-the-pastor",
            },
            {
                type: "link",
                label: "What We Believe",
                href: "/about/what-we-believe",
            },
            {
                type: "link",
                label: "Principles of Church Music",
                href: "/about/church-music",
            },
        ]
    },
    {type: "link", label: "Visit", href: "/visit"},
    {
        type: "dropdown",
        label: "Resources",
        children: [
            {
                type: "link",
                label: "Sermons & Teaching",
                href: "/resources/sermons",
            },
            {
                type: "link",
                label: "Recommended Resources",
                href: "/resources/recommended",
            },
        ]
    },
    {type: "link", label: "Contact", href: "/contact"},
    {type: "link", label: "Give", href: "/give", emphasis: true}
]