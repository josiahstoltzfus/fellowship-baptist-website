import styles from "./ReplacementPrinciple.module.css";
import type {ScriptureReference} from "../../../../../components/content/Scripture/scriptureTypes.ts";
import ReplacementComparisonTable from "./ReplacementComparisonTable.tsx";
import ReplacementComparisonList from "./ReplacementComparisonList.tsx";
import {replacementPrinciple} from "../../../musicPrinciples.ts";

type ReplacementPrincipleProps = {
    onSelect: (reference: ScriptureReference) => void;
};

export default function ReplacementPrinciple({onSelect}: ReplacementPrincipleProps) {
    return (
        <section className={styles.section}>
            <div className={styles.content}>

                <div className={styles.heading}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Biblical Principle</p>
                    <h2 className={`text-section-title ${styles["heading-title"]}`}>Replacement</h2>
                    <p className={`text-body ${styles["featured-scripture-text"]}`}>
                        The biblical pattern is not merely to put away what is wrong, but to replace it with what honors
                        God. We apply this same principle when considering the message and character of church music.
                    </p>
                    <button
                        type="button"
                        onClick={() => onSelect({
                            reference: "2 Corinthians 5:17",
                            verses: [
                                {
                                    number: 17,
                                    text: "Old things are passed away; behold, all things are become new."
                                }
                            ]
                        })}
                        className={`text-body-small ${styles["scripture-button"]}`}>
                        2 Corinthians 5:17
                    </button>
                </div>

                <ReplacementComparisonTable rows={replacementPrinciple} onSelect={onSelect}/>
                <ReplacementComparisonList rows={replacementPrinciple} onSelect={onSelect}/>
            </div>
        </section>
    )
}