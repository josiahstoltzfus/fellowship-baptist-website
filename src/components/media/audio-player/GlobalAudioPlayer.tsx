import styles from "./GlobalAudioPlayer.module.css";
import {type CSSProperties, useEffect} from "react";
import {Pause, Play, ChevronDown, ChevronUp, X, Volume2, VolumeX, Gauge, Download, Share} from "lucide-react";
import {useAudioPlayer} from "./useAudioPlayer.ts";
import {formatTime} from "../../../pages/sermons/sermons.ts";
import {useState} from "react";

type ProgressStyle = CSSProperties & {
    "--progress": string;
};

export default function GlobalAudioPlayer() {
    const audioPlayer = useAudioPlayer();
    const {
        activeMessage,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        playbackRate,
        changePlaybackRate,
        seek,
        closePlayer,
        togglePlayback,
        changeVolume,
        toggleMute
    } = audioPlayer;
    const currentDuration = formatTime(currentTime);
    const totalDuration = formatTime(duration);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSpeedMenuOpen, setIsSpeedMenuOpen] = useState(false);
    const progressPercentage =
        duration > 0 ? (currentTime / duration) * 100 : 0;
    const volumePercentage = volume * 100;
    const playbackRates = [0.75, 1, 1.25, 1.5, 2];
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

    if (!activeMessage) {
        return null;
    }

    async function shareMessage() {
        const shareData = {
            title: activeMessage?.title,
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
        <aside className={`${styles.player} ${isExpanded ? styles.expanded : styles.compact}`}
               aria-label="Audio player">
            <div className={styles.content}>
                <button
                    className={`${styles["playback-button"]}`}
                    type="button"
                    onClick={togglePlayback}
                    aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                    {isPlaying ? <Pause className={styles.icon} aria-hidden="true"/> :
                        <Play className={styles.icon} aria-hidden="true"/>}
                </button>

                <div className={styles["message-info"]}>
                    <p className={`text-heading-small ${styles.title}`}>{activeMessage.title}</p>
                    <div className={styles.metadata}>
                        <span className={`text-eyebrow ${styles.speaker}`}>{activeMessage.speaker}</span>
                        <span aria-hidden="true" className={styles.separator}>·</span>
                        <span className={`text-eyebrow ${styles.kind}`}>{activeMessage.kind}</span>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <span className={`text-body ${styles.duration}`}>{currentDuration}</span>
                    <input
                        className={styles.input}
                        style={{
                            "--progress": `${progressPercentage}%`,
                        } as ProgressStyle}
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        step="1"
                        aria-label="Audio progress"
                        onChange={(event) => {
                            const newTime = Number(event.currentTarget.value);

                            seek(newTime);
                        }}
                    />
                    <span className={`text-body ${styles.duration}`}>{totalDuration}</span>
                </div>

                <div className={`${styles["window-controls"]}`}>
                    <button
                        className={`${styles["expand-button"]}`}
                        onClick={() => setIsExpanded(() => !isExpanded)}
                        aria-label={isExpanded ? "Collapse audio player" : "Expand audio player"}>
                        {isExpanded
                            ? <ChevronDown className={`${styles["control-icon"]}`} aria-hidden="true"/>
                            : <ChevronUp className={`${styles["control-icon"]}`} aria-hidden="true"/>
                        }
                    </button>

                    <button
                        type="button"
                        className={styles["close-button"]}
                        onClick={closePlayer}
                        aria-label="Close audio player"
                    >
                        <X className={`${styles["control-icon"]}`} aria-hidden="true"/>
                    </button>

                </div>
            </div>

            {isExpanded && (
                <ul className={styles["expanded-details"]}>
                    <li className={`${styles.item} ${styles["volume-control"]}`}>
                        <button
                            type="button"
                            onClick={toggleMute}
                            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                        >
                            {isMuted || volume === 0 ? (
                                <VolumeX className={`${styles["control-icon"]}`} aria-hidden="true"/>
                            ) : (
                                <Volume2 className={`${styles["control-icon"]}`} aria-hidden="true"/>
                            )}
                        </button>

                        <input
                            type="range"
                            className={styles.input}
                            style={{
                                "--progress": `${volumePercentage}%`,
                            } as ProgressStyle}
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(event) => {
                                changeVolume(Number(event.currentTarget.value));
                            }}
                        />
                    </li>

                    <li className={`${styles.item} ${styles["playback-speed"]}`}>
                        <button
                            type="button"
                            className={`${styles["control-button"]}`}
                            onClick={() => setIsSpeedMenuOpen((open) => !open)}
                            aria-expanded={isSpeedMenuOpen}
                        >
                            <Gauge className={`${styles["control-icon"]}`} aria-hidden="true"/>

                            <span className={`text-action-large ${styles["speed-label"]}`}>{playbackRate}× Speed</span>
                        </button>

                        {isSpeedMenuOpen && (
                            <div className={styles["speed-options"]}>
                                <p className={`text-action-large`}>Playback Speed</p>

                                <div className={styles["speed-list"]}>
                                    {playbackRates.map((rate) => (
                                        <button
                                            type="button"
                                            key={rate}
                                            className={`text-action-large ${styles["speed-option"]}`}
                                            onClick={() => {
                                                changePlaybackRate(rate);
                                                setIsSpeedMenuOpen(false);
                                            }}
                                            aria-pressed={playbackRate === rate}
                                        >
                                            {`${rate}×`}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>

                    <li className={`${styles.item} ${styles.download}`}>
                        <Download className={styles["control-icon"]} aria-hidden="true"/>
                        <a
                            href={activeMessage.audioUrl}
                            className={`text-action-large ${styles["download-link"]}`}
                            download={activeMessage.downloadFileName}
                        >
                            Download
                        </a>
                    </li>

                    <li className={`${styles.item} ${styles.share}`}>
                        <Share className={`${styles["control-icon"]}`} aria-hidden="true"/>
                        <button
                            type="button"
                            onClick={shareMessage}
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
            )}

        </aside>
    )
}