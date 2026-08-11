import type {ReactNode} from "react";
import styles from "./Action.module.css";

type ActionLinkProps = {
    href: string,
    children: ReactNode;
    variant?: "primary" | "secondary" | "inverse";
};

export default function ActionLink({href, children, variant = "primary",}: ActionLinkProps) {
    const className = `text-action ${styles.action} ${styles[variant]}`;

    return (
        <a href={href} className={className}>
            {children}
        </a>
    )
}