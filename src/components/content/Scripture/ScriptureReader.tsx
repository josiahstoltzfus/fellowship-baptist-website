import type {ScriptureReference} from "./scriptureTypes.ts";
import styles from "./ScriptureReader.module.css";
import {useId, useRef, useEffect} from "react";
import { X } from "lucide-react";

type ScriptureReaderProps = {
    scripture: ScriptureReference;
    onClose: () => void;
}

export default function ScriptureReader({scripture, onClose} : ScriptureReaderProps) {
    const titleId = useId();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog?.open) {
            dialog?.showModal();
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";

            if (dialog?.open) {
                dialog.close();
            }
        };
    }, []);

    return (
        <dialog
            ref={dialogRef}
            className={`${styles.dialog}`}
            aria-labelledby={titleId}
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
        >
            <header className={`${styles.header}`}>
                <div className={`${styles.title}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Scripture Reader
                    </p>

                    <h2
                        id={titleId}
                        className={`text-section-title ${styles.reference}`}
                    >
                        {scripture.reference}
                    </h2>
                </div>

                <button
                    type="button"
                    className={styles["close-button"]}
                    onClick={onClose}
                    aria-label="Close Scripture reader"
                >
                    <X size={24} aria-hidden="true" />
                </button>
            </header>

            <blockquote className={`${styles.passage}`}>
                {scripture.verses.map((verse) => (
                    <p className={`text-body ${styles["verse-text"]}`}>
                        <sup className={styles["verse-number"]}>
                            {verse.number}
                        </sup>

                        {verse.text}
                    </p>
                ))}
            </blockquote>

            <footer className={`${styles.footer}`}>
                <p className={`text-eyebrow ${styles.version}`}>
                    King James Version
                </p>
                <p className={`text-eyebrow ${styles.escape}`}>Esc to close</p>
            </footer>
        </dialog>
    )
}