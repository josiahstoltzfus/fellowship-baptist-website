import styles from "./ReplacementComparisonList.module.css";
import type {ReplacementPrinciple} from "../../../musicPrinciples.ts";
import type {ScriptureReference} from "../../../../../components/content/Scripture/scriptureTypes.ts";

type ReplacementComparisonProps = {
    rows: ReplacementPrinciple[];
    onSelect: (reference: ScriptureReference) => void;
}

export default function ReplacementComparisonList({rows, onSelect} : ReplacementComparisonProps & {}) {
    return (
        <div className={styles.wrapper}>
            <h2 className={`text-eyebrow ${styles.eyebrow}`}>Biblical Pattern</h2>
            <ul className={styles.list}>
                {rows.map((row) => {
                    return (
                        <li key={row.scripture.reference} className={styles.item}>
                            <button
                                type="button"
                                className={`text-heading-small ${styles["scripture-button"]}`}
                                onClick={() => onSelect(row.scripture)}
                            >
                                {row.scripture.reference}
                            </button>

                            <div className={styles.comparison}>
                                <div className={styles["comparison-item"]}>
                                    <p className={`text-eyebrow ${styles.label}`}>Put off</p>
                                    <p className={`text-action ${styles.value}`}>{row.putAway}</p>
                                </div>
                                <div className={styles["comparison-item"]}>
                                    <p className={`text-eyebrow ${styles.label}`}>Put on</p>
                                    <p className={`text-action ${styles.value}`}>{row.putOn}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}