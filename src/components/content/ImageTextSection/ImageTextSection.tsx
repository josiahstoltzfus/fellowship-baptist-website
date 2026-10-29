import type {ReactNode} from "react";
import styles from "./ImageTextSection.module.css";

type ImageTextSectionProps = {
    eyebrow?: string;
    heading?: string;
    children: ReactNode;
    imageAlt: string;
    imageSrc?: string;
    imagePosition?: "left" | "right";
    layout?: "split" | "stacked";
    surface?: "base" | "reflective";
}

export default function ImageTextSection({
                                             eyebrow,
                                             heading,
                                             children,
                                             imageAlt,
                                             imageSrc,
                                             imagePosition = "right",
                                             layout = "split",
                                             surface = "base"
                                         }: ImageTextSectionProps) {
    return (
        <section className={`${styles.section} ${styles[surface]}`}>
            <div className={`${styles.content} ${styles[layout]} ${styles[imagePosition]}`}>

                <div className={`${styles.text}`}>
                    {eyebrow && <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}
                    {heading && <h2 className={`text-subheading`}>{heading}</h2>}

                    <div className={styles.body}>
                        {children}
                    </div>
                </div>

                <figure className={`text-eyebrow ${styles.media}`}>
                    <img src={imageSrc} alt={imageAlt}/>
                </figure>

            </div>
        </section>
    )
}