import styles from "./PageIntroduction.module.css";
import type {ReactNode} from "react";

type PageIntroductionProps = {
    eyebrow: string;
    title: string;
    description?: string;
    scripture?: string;
    commentary?: string;
    alignment?: "left" | "center";
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
                                             alignment = "left",
                                             spacing = "default"
                                         }: PageIntroductionProps) {
    return (
        <header className={`${styles.introduction} ${styles[alignment]}`}>
            <div className={`${styles.content} ${styles[spacing]}`}>
                <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
                <h1 className={`text-page-title ${styles.heading}`}>{title}</h1>
                {description && <p className={`text-prose-lead ${styles.description}`}>{description}</p>}
                {scripture && <p className={`text-eyebrow ${styles.eyebrow}`}>— {scripture}</p>}
                {commentary && <p className={`text-prose ${styles.commentary}`}>{commentary}</p>}
                <div className={styles.spacer}></div>
                {children && (
                    <div className={styles.children}>{children}</div>
                )}
            </div>
        </header>
    )
}