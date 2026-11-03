import type {ReactNode} from "react";
import styles from "./Action.module.css";
import {Link} from "react-router-dom";

type ActionLinkProps = {
    href: string,
    children: ReactNode;
    variant?: "primary" | "secondary" | "inverse";
    external?: boolean;
    className?: string;
};

export default function ActionLink({href, children, variant = "primary", external = false, className= ""}: ActionLinkProps) {
    const classes = `text-action ${styles.action} ${styles[variant]} ${className}`;

    if (external) {
        return (
            <a
                href={href}
                className={classes}
                target="_blank"
                rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <Link to={href} className={classes}>
            {children}
        </Link>
    )
}