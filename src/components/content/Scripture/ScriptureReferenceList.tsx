import type {ScriptureReference} from "./scriptureTypes.ts";
import styles from "./ScriptureReferenceList.module.css";
import {useScriptureReader} from "../../media/scripture-reader/useScriptureReader.ts";

type ScriptureReferenceListProps = {
    references: ScriptureReference[];
    variant?: "default" | "accent";
}

export default function ScriptureReferenceList({references, variant="default"}: ScriptureReferenceListProps) {
    const scriptureReader = useScriptureReader();

    const {openReference} = scriptureReader;

    return (
        <ul className={`${styles.list}`}>
            {references.map((reference) => (
                <li key={reference.reference} className={`${styles.item}`}>
                    <button
                        type="button"
                        onClick={() => openReference(reference)}
                        className={`text-body-small ${styles.button} ${styles[`button--${variant}`]}`}
                    >
                        {reference.reference}
                    </button>
                </li>
            ))}
        </ul>
    )
}