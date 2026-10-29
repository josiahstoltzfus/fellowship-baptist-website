import styles from "./TextSection.module.css";
import type {ReactNode} from "react";

type Scripture = {
    text: string,
    reference: string,
}

type TextSectionProps = {
    eyebrow: string,
    heading: string,
    description: string,
    scripture?: Scripture,
    verse?: string,
    alignment?: "left" | "center",
    surface?: "base" | "reflective",
    children?: ReactNode,
}

export default function TextSection({
                                        eyebrow,
                                        heading,
                                        description,
                                        scripture,
                                        children,
                                        alignment = "left",
                                        surface = "base"
                                    }: TextSectionProps) {
    return (
        <section className={`section ${styles.section} ${styles[surface]}`}>
            <div className={`content ${styles.content} ${styles[alignment]}`}>

                <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
                <h2 className={`text-section-title`}>{heading}</h2>
                <p className={`text-prose-lead ${styles.description}`}>{description}</p>

                {scripture && (
                    <blockquote className={styles.scripture}>
                        <p className={`text-heading-small ${styles["scripture-text"]}`}>{scripture.text}</p>

                        <cite className={`text-eyebrow ${styles.reference}`}>
                            — {scripture.reference}
                        </cite>
                    </blockquote>
                )}

                {children && (
                    <div className={`${styles.additional}`}>
                        {children}
                    </div>
                )}
            </div>
        </section>
    )
}