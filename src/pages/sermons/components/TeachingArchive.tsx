import styles from "./TeachingArchive.module.css";
import {type AudioMessage} from "../../../lib/sanityTypes.ts";
import {useAudioPlayer} from "../../../components/media/audio-player/useAudioPlayer.ts";
import {useEffect, useState} from "react";

type TeachingArchiveProps = {
    messages: AudioMessage[];
};

export default function TeachingArchive({messages} : TeachingArchiveProps) {
    const audioPlayer = useAudioPlayer();
    const [isLinkCopied, setIsLinkCopied] = useState(false);

    useEffect(() => {
        if (!isLinkCopied) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsLinkCopied(false);
        }, 2000);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isLinkCopied]);

    async function shareMessage(message: AudioMessage) {
        const shareData = {
            title: message.title,
            text: `Listen to ${message.title} by ${message.speakerName}.`,
            url: `${window.location.origin}/resources/sermons`,
        };

        if (!navigator.share) {
            await navigator.clipboard.writeText(shareData.url);
            setIsLinkCopied(true);
            return;
        }

        try {
            await navigator.share(shareData);
            setIsLinkCopied(true);
        } catch (error) {
            if (error instanceof Error && error.name === "AbortError") {
                return;
            }
            console.error("Error sharing message:", error);
        }
    }

    return (
        <section className={`${styles.archive}`}>
            <div className={`${styles.content}`}>

                <ul className={styles.list}>
                    {messages.map((sermon) => {
                        const durationMinutes =
                            sermon.durationSeconds != null
                                ? Math.round(sermon.durationSeconds / 60)
                                : null;

                        return (
                            <li key={sermon._id} className={styles.item}>
                                <div className={styles["sermon-details"]}>
                                    <span className={`text-eyebrow`}>{sermon.kind}</span>
                                    <h2 className={`text-heading-small`}>{sermon.title}</h2>
                                    <div className={`text-eyebrow ${styles.metadata}`}>
                                        <span>{sermon.speakerName}</span>
                                        {/*sermon.scripture && <span>{sermon.scripture.reference}</span>*/}
                                        {durationMinutes !== null && (
                                            <span>{durationMinutes} min</span>
                                        )}
                                    </div>
                                </div>
                                <ul className={styles["sermon-controls"]}>
                                    <li className={styles.control}>
                                        <button
                                            className={`text-action-large link-hover`}
                                            type="button"
                                            onClick={() => audioPlayer.playMessage(sermon)}
                                            aria-label={`Listen to ${sermon.title}`}
                                        >
                                            Listen
                                        </button>
                                    </li>

                                    <li className={styles.control}>
                                        <a
                                            href={`${sermon.audioUrl}?dl`}
                                            className={`text-action-large link-hover`}
                                            download={sermon.downloadFileName}
                                        >
                                            Download
                                        </a>
                                    </li>

                                    <li className={styles.control}>
                                        <button
                                            type="button"
                                            onClick={() => shareMessage(sermon)}
                                            className={`text-action-large link-hover`}
                                        >
                                            Share
                                        </button>

                                        {isLinkCopied && (
                                            <span className={`text-action ${styles.copy}`} role="status"
                                                  aria-live="polite">Link copied</span>
                                        )}
                                    </li>

                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}