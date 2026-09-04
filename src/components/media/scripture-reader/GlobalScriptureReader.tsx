import styles from "./GlobalScriptureReader.module.css";

export default function GlobalScriptureReader() {
    /*
     import {useScriptureReader} from "./useScriptureReader.ts";
     const scriptureReader = useScriptureReader();
     const {
        activeReference,
        isReaderOpen,
        openReferences,
        isMinimized,
        minimizeReader,
        restoreReader,
        openReference,
        selectReference,
        closeReference,
        closeReader,
     } = scriptureReader;
     */

    return (
        <aside className={styles.reader}>

            <header className={styles.header}>
                <p className={`text-eyebrow ${styles.eyebrow}`}>Scripture Reader</p>

                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={styles.button}>
                        -
                    </button>
                    <button
                        type="button"
                        className={styles.button}>
                        x
                    </button>
                </div>
            </header>

            <div className={styles.tabs}>
                {/* map through the open verses and create tabs. will need a horizontal scroll */}
                <div className={styles.tab}>
                    <button
                        type="button"
                        className={styles.reference}>Reference</button>
                    <button
                        type="button"
                        className={styles["tab-button"]}>x</button>
                </div>
            </div>

            {/* body needs to be a scrollable container */}
            <div className={styles.body}>
                <h2 className={styles.title}>Scripture</h2>
                {/* map through the verses and create a passage */}
                <div className={styles.verse}>
                    <span className={styles["verse-number"]}>verse number</span>
                    <p className={styles["verse-text"]}>verse text</p>
                </div>
            </div>

            <footer className={styles.footer}>
                <p className={styles["footer-text"]}>King James Version</p>
            </footer>

        </aside>
    )
}