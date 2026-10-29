import styles from "./GlobalScriptureReader.module.css";
import {useScriptureReader} from "./useScriptureReader.ts";
import ScriptureReaderDock from "./ScriptureReaderDock.tsx";
import {ChevronUp, X} from "lucide-react";

export default function GlobalScriptureReader() {
    const scriptureReader = useScriptureReader();
    const {
        activeReference,
        isMinimized,
        isReaderOpen,
        minimizeReader,
        closeReader
    } = scriptureReader;

    if (!isReaderOpen || !activeReference) {
        return null;
    }

    if (isMinimized) {
        return (
            <ScriptureReaderDock>
            </ScriptureReaderDock>
        )
    }

    return (
        <aside className={`${styles.reader}`}>

            <header className={styles.header}>
                <button
                    type="button"
                    onClick={minimizeReader}
                    className={styles.minimize}
                    aria-label={`Restore Scripture Reader: ${activeReference?.reference}`}
                >
                    <ChevronUp size={18} aria-hidden="true"/>
                    <span className={`${styles.eyebrow} text-eyebrow`}>Scripture Reader</span>
                </button>
                <button
                    type="button"
                    onClick={closeReader}
                    className={styles.close}
                    aria-label="Close Scripture Reader"
                >
                    <X size={18} aria-hidden="true"/>
                </button>
            </header>

            <div className={styles.body}>
                <h2 className={`${styles.reference} text-heading-small`}>{activeReference?.reference}</h2>
                <div className={`${styles.passage} text-prose`}>
                    {activeReference.verses.map((verse) => (
                        <p
                            key={`${activeReference.reference}=${verse.number}`}
                            className={styles.verse}
                        >
                            <sup className={styles["verse-number"]}>{verse.number}</sup>
                            <span className={styles["verse-text"]}>{verse.text}</span>
                        </p>
                    ))}
                </div>
            </div>

            <footer className={styles.footer}>
                <p className={`${styles["footer-text"]} text-eyebrow`}>King James Version</p>
            </footer>

        </aside>
    )
}