import styles from "./ReplacementComparisonTable.module.css";
import type {ReplacementPrinciple} from "../../../musicPrinciples.ts";
import {useScriptureReader} from "../../../../../components/media/scripture-reader/useScriptureReader.ts";

type ReplacementComparisonProps = {
    rows: ReplacementPrinciple[];
}

export default function ReplacementComparisonTable({rows}: ReplacementComparisonProps) {
    const {openReference} = useScriptureReader();
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th scope="col" className={`text-eyebrow ${styles["table-header"]}`}>Scripture</th>
                <th scope="col"  className={`text-eyebrow ${styles["table-header"]}`}>Put Off</th>
                <th scope="col"  className={`text-eyebrow ${styles["table-header"]}`}>Put On</th>
            </tr>
            </thead>

            <tbody>
            {rows.map((row) => (
                <tr key={row.scripture.reference}>
                    <th scope="row" className={styles.scripture}>
                        <button
                            type="button"
                            onClick={() => openReference(row.scripture)}
                            className={`text-heading-small ${styles.button}`}
                        >
                            {row.scripture.reference}
                        </button>
                    </th>
                    <td className={`text-prose ${styles["put-away"]}`}>{row.putAway}</td>
                    <td className={`text-prose ${styles["put-on"]}`}>{row.putOn}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}