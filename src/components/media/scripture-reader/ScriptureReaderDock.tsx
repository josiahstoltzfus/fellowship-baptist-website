import {useScriptureReader} from "./useScriptureReader.ts";
import styles from "./ScriptureReaderDock.module.css";
import {ChevronDown, X} from "lucide-react";

export default function ScriptureReaderDock() {
    const scriptureReader = useScriptureReader();
    const {restoreReader, closeReader, activeReference} = scriptureReader;

    return (
        <aside
            className={styles.dock}
            aria-label="Minimize Scripture Reader"
        >
            <button
                type="button"
                onClick={restoreReader}
                className={styles.restore}
                aria-label={`Restore Scripture Reader: ${activeReference?.reference}`}
            >
                <ChevronDown size={18} aria-hidden="true"/>
                <span className={`${styles.eyebrow} text-eyebrow`}>Scripture Reader</span>
            </button>
            <button
                type="button"
                onClick={closeReader}
                className={styles.close}
                aria-label="Close Scripture Reader"
            >
                <X size={18} aria-hidden="true" />
            </button>
        </aside>
    )
}