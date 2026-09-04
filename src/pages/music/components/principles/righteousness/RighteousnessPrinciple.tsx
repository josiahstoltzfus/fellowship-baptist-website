import styles from "./RighteousnessPrinciple.module.css";
import {righteousnessPrinciple} from "../../../musicPrinciples.ts";
import ScriptureReferenceList from "../../../../../components/content/Scripture/ScriptureReferenceList.tsx";
import type {ScriptureReference} from "../../../../../components/content/Scripture/scriptureTypes.ts";

type RighteousnessPrincipleProps = {
    onSelect: (reference: ScriptureReference) => void;
}

export default function RighteousnessPrinciple({onSelect}: RighteousnessPrincipleProps) {
    return (
        <section className={styles.section}>
            <div className={styles.content}>

                <div className={styles.heading}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Biblical Principle</p>
                    <h2 className={`text-section-title ${styles["heading-title"]}`}>Righteousness</h2>
                    <p className={`text-body ${styles["heading-text"]}`}>The most important feature of music is its
                        message. Church music is therefore shaped by clear biblical purposes—not by entertainment
                        alone.</p>
                </div>

                <ul className={styles.list}>
                    {righteousnessPrinciple.map((principle) => {
                        return (
                            <li key={principle.title} className={styles.item}>
                                <p className={`text-heading-small ${styles.number}`}>{principle.number}</p>
                                <h3 className={`text-heading-small ${styles["principle-title"]}`}>{principle.title}</h3>
                                <p className={`text-body ${styles["principle-text"]}`}>{principle.text}</p>

                                <div className={`${styles["principle-references"]}`}>
                                    <ScriptureReferenceList
                                        references={principle.references}
                                        onSelect={onSelect}
                                        variant="accent"/>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </section>
    )
}