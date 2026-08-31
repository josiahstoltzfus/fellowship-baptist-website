import type {ScriptureReference} from "./scriptureTypes.ts";
import styles from "./ScriptureReferenceList.module.css";

type ScriptureReferenceListProps = {
    references: ScriptureReference[];
    onSelect: (reference: ScriptureReference) => void;
}

export default function ScriptureReferenceList({references, onSelect}: ScriptureReferenceListProps) {
    return (
        <ul className={`${styles.list}`}>
            {references.map((reference) => (
                <li key={reference.reference} className={`${styles.item}`}>
                    <button
                        type="button"
                        onClick={() => onSelect(reference)}
                        className={`text-body-small ${styles.button}`}
                    >
                        {reference.reference}
                    </button>
                </li>
            ))}
        </ul>
    )
}