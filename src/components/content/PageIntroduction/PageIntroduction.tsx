import styles from "./PageIntroduction.module.css";
import type {ReactNode} from "react";

type PageIntroductionProps = {
    eyebrow: string;
    title: string;
    description?: string;
    scripture?: string;
    commentary?: string;
    spacing?: "default" | "connected";
    children?: ReactNode;
};

export default function PageIntroduction({
                                             eyebrow,
                                             scripture,
                                             commentary,
                                             title,
                                             description,
                                             children,
                                             spacing = "default"
                                         }: PageIntroductionProps) {
    return (
        <header className={`${styles.introduction}`}>
            <div className={`${styles.content} ${styles[spacing]}`}>
                <div className={styles.header}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
                    <h1 className={`text-page-title ${styles.heading}`}>{title}</h1>
                </div>
                {commentary && <p className={`text-prose-lead ${styles.commentary}`}>{commentary}</p>}
                <div className={styles.body}>
                    {description && <p className={`text-heading-small ${styles.description}`}>{description}</p>}
                    {scripture && <p className={`text-eyebrow ${styles.eyebrow}`}>— {scripture}</p>}
                </div>
                {children && (
                    <div className={styles.children}>{children}</div>
                )}
            </div>
        </header>
    )
}