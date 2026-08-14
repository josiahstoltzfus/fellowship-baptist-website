import type {ReactNode} from "react";
import styles from "./ImageTextSection.module.css";

type ImageTextSectionProps = {
    eyebrow: string;
    heading: string;
    children: ReactNode;
    imageAlt: string;
    imagePosition?: "left" | "right";
    surface?: "base" | "reflective";
}

export default function ImageTextSection({
                                             eyebrow,
                                             heading,
                                             children,
                                             imageAlt,
                                             imagePosition = "right",
                                             surface = "base"
                                         }: ImageTextSectionProps) {
    return (
        <section className={`${styles.section} ${styles[surface]}`}>
            <div className={`${styles.content} ${styles[imagePosition]}`}>

                <figure className={`text-eyebrow ${styles.media}`}>{imageAlt}</figure>

                <div className={`${styles.text}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>

                    <h2 className={`text-section-title`}>{heading}</h2>

                    <div className={styles.body}>
                        {children}
                    </div>
                </div>

            </div>
        </section>
    )
}