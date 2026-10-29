import styles from "./RejoicingPrinciple.module.css";
import {rejoicingPrinciple} from "../../../musicPrinciples.ts";
import ScriptureReferenceList from "../../../../../components/content/Scripture/ScriptureReferenceList.tsx";

export default function RejoicingPrinciple() {
    /*<ScriptureReferenceList references={rejoicingPrinciple}/>*/
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Biblical Principle</p>
                    <h2 className={`text-section-title ${styles["principle-heading"]}`}>Rejoicing</h2>
                    <p className={`text-prose-lead ${styles["heading-text"]}`}>Church music begins with a heart made glad in the Lord. Its message should engage both the spirit and the understanding.</p>
                    <ScriptureReferenceList references={rejoicingPrinciple}/>
                </div>

                <div className={`${styles["featured-scriptures"]}`}>
                    <div className={`${styles["featured-scripture"]}`}>
                        <p className={`text-subheading ${styles["featured-scripture-text"]}`}>Behold, my servants shall sing for
                            joy of heart.</p>
                        <p className={`text-eyebrow ${styles["featured-scripture-verse"]}`}>‒ Isaiah 65:14</p>
                    </div>

                    <div className={`${styles["featured-scripture"]}`}>
                        <p className={`text-subheading ${styles["featured-scripture-text"]}`}>I will sing with the spirit,
                            and I will
                            sing with the understanding also.</p>
                        <p className={`text-eyebrow ${styles["featured-scripture-verse"]}`}>‒ 1 Corinthians 14:15</p>
                    </div>
                </div>

            </div>
        </section>
    )
}