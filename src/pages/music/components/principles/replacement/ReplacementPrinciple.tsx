import styles from "./ReplacementPrinciple.module.css";
import {newCreationScripture} from "../../../musicPrinciples.ts";
import {useScriptureReader} from "../../../../../components/media/scripture-reader/useScriptureReader.ts";

export default function ReplacementPrinciple() {
    const {openReference} = useScriptureReader();
    return (
        <section className={styles.section}>
            <div className={styles.content}>

                <div className={styles.heading}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Biblical Principle</p>
                    <h2 className={`text-section-title ${styles["heading-title"]}`}>Replacement</h2>
                    <p className={`text-prose-lead ${styles["featured-scripture-text"]}`}>
                        The biblical pattern is not merely to put away what is wrong, but to replace it with what honors
                        God. We apply this same principle when considering the message and character of church music.
                    </p>
                    <button
                        type="button"
                        onClick={() => openReference(newCreationScripture)}
                        className={`text-body-small ${styles["scripture-button"]}`}>
                        {newCreationScripture.reference}
                    </button>
                </div>

            </div>
        </section>
    )
}