import styles from "./TeachingArchive.module.css";
import {type AudioMessage, sermons} from "../sermons.ts";
import {useAudioPlayer} from "../../../components/media/audio-player/useAudioPlayer.ts";
import {useEffect, useState} from "react";

export default function TeachingArchive() {
    const audioPlayer = useAudioPlayer();
    const {isPlaying, activeMessage} = audioPlayer;
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
            text: `Listen to ${activeMessage?.title} by ${activeMessage?.speaker}.`,
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
                    {sermons.map((sermon) => {
                        const durationMinutes = Math.round(sermon.durationSeconds / 60);

                        return (
                            <li className={styles.item}>
                                <div className={styles["sermon-details"]}>
                                    <span className={`text-eyebrow`}>{sermon.kind}</span>
                                    <h3 className={`text-heading-small`}>{sermon.title}</h3>
                                    <div className={`text-eyebrow ${styles.metadata}`}>
                                        <span>{sermon.speaker}</span>
                                        {sermon.scripture && <span>{sermon.scripture.reference}</span>}
                                        <span>{`${durationMinutes} min`}</span>
                                    </div>
                                </div>
                                <ul className={styles["sermon-controls"]}>
                                    <li className={styles.control}>
                                        <button
                                            className={`text-action-large ${styles["play-button"]}`}
                                            type="button"
                                            onClick={() => audioPlayer.playMessage(sermon)}
                                            aria-label={isPlaying ? "Pause audio" : "Play audio"}
                                        >
                                            Listen
                                        </button>
                                    </li>

                                    <li className={styles.control}>
                                        <a
                                            href={sermon.audioUrl}
                                            className={`text-action-large ${styles["download-button"]}`}
                                            download={sermon.downloadFileName}
                                        >
                                            Download
                                        </a>
                                    </li>

                                    <li className={styles.control}>
                                        <button
                                            type="button"
                                            onClick={() => shareMessage(sermon)}
                                            className={`text-action-large ${styles["share-button"]}`}
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