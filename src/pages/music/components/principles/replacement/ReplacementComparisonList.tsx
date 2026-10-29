import styles from "./ReplacementComparisonList.module.css";
import type {ReplacementPrinciple} from "../../../musicPrinciples.ts";
import {useScriptureReader} from "../../../../../components/media/scripture-reader/useScriptureReader.ts";

type ReplacementComparisonProps = {
    rows: ReplacementPrinciple[];
}

export default function ReplacementComparisonList({rows} : ReplacementComparisonProps) {
    const {openReference} = useScriptureReader();
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
                                onClick={() => openReference(row.scripture)}
                            >
                                {row.scripture.reference}
                            </button>

                            <div className={styles.comparison}>
                                <div className={styles["comparison-item"]}>
                                    <p className={`text-eyebrow ${styles.label}`}>Put off</p>
                                    <p className={`text-prose ${styles.value}`}>{row.putAway}</p>
                                </div>
                                <div className={styles["comparison-item"]}>
                                    <p className={`text-eyebrow ${styles.label}`}>Put on</p>
                                    <p className={`text-prose ${styles.value}`}>{row.putOn}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}