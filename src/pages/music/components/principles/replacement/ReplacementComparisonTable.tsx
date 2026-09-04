import styles from "./ReplacementComparisonTable.module.css";
import type {ReplacementPrinciple} from "../../../musicPrinciples.ts";
import type {ScriptureReference} from "../../../../../components/content/Scripture/scriptureTypes.ts";

type ReplacementComparisonProps = {
    rows: ReplacementPrinciple[];
    onSelect: (reference: ScriptureReference) => void;
}

export default function ReplacementComparisonTable({rows, onSelect}: ReplacementComparisonProps) {
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
                            onClick={() => onSelect(row.scripture)}
                            className={`text-heading-small ${styles.button}`}
                        >
                            {row.scripture.reference}
                        </button>
                    </th>
                    <td className={`text-action ${styles["put-away"]}`}>{row.putAway}</td>
                    <td className={`text-action ${styles["put-on"]}`}>{row.putOn}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}