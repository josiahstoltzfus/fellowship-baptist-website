import type {ReactNode} from "react";
import styles from "./Action.module.css";
import {Link} from "react-router-dom";

type ActionLinkProps = {
    href: string,
    children: ReactNode;
    variant?: "primary" | "secondary" | "inverse";
    external?: boolean;
};

export default function ActionLink({href, children, variant = "primary", external = false}: ActionLinkProps) {
    const className = `text-action ${styles.action} ${styles[variant]}`;

    if (external) {
        return (
            <a
                href={href}
                className={className}
                target="_blank"
                rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <Link to={href} className={className}>
            {children}
        </Link>
    )
}