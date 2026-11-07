import type {ReactNode} from "react";
import styles from "./MediaTextSection.module.css";

type ImageTextSectionProps = {
    eyebrow?: string;
    heading?: string;
    children: ReactNode;
    imageAlt: string;
    imageSrc?: string;
    videoUrl?: string;
    imagePosition?: "left" | "right";
    layout?: "split" | "stacked";
    surface?: "base" | "reflective";
}

export default function MediaTextSection({
                                             eyebrow,
                                             heading,
                                             children,
                                             imageAlt,
                                             imageSrc,
                                             videoUrl,
                                             imagePosition = "right",
                                             layout = "split",
                                             surface = "base",
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

                {(videoUrl || imageSrc) && (
                    <figure className={`text-eyebrow ${styles.media}`}>
                        {videoUrl ? (
                            <div className={styles.video}>
                                <iframe
                                    src={videoUrl}
                                    title={heading ?? "Church video"}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <img src={imageSrc} alt={imageAlt} />
                        )}
                    </figure>
                )}

            </div>
        </section>
    )
}