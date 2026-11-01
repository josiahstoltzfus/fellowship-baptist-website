import styles from "./GlobalAudioPlayer.module.css";
import {type CSSProperties, type KeyboardEvent, type FocusEvent, useState, useEffect, useRef} from "react";
import {Pause, Play, ChevronDown, ChevronUp, X, Volume2, VolumeX, Gauge, Download, Share} from "lucide-react";
import {useAudioPlayer} from "./useAudioPlayer.ts";
import {formatTime} from "../../../pages/sermons/sermons.ts";

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
        isExpanded,
        focusRequest,
        focusTrigger,
        toggleExpanded,
        changePlaybackRate,
        seek,
        closePlayer,
        togglePlayback,
        changeVolume,
        toggleMute
    } = audioPlayer;
    const currentDuration = formatTime(currentTime);
    const totalDuration = formatTime(duration);

    const [isSpeedMenuOpen, setIsSpeedMenuOpen] = useState(false);
    const progressPercentage =
        duration > 0 ? (currentTime / duration) * 100 : 0;
    const volumePercentage = volume * 100;
    const playbackRates = [1, 1.25, 1.5];
    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const playerRef = useRef<HTMLElement>(null);
    const playButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRequest = useRef(focusRequest);
    const speedButtonRef = useRef<HTMLButtonElement>(null);
    const speedControlRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (focusRequest !== previousFocusRequest.current) {
            previousFocusRequest.current = focusRequest;

            if (activeMessage) {
                playButtonRef.current?.focus();
            }
        }
    }, [focusRequest, activeMessage]);

    useEffect(() => {
        const player = playerRef.current;
        const root = document.documentElement;

        if (!activeMessage || !player) {
            root.style.setProperty("--audio-player-height", "0px");
            return;
        }

        function updatePlayerHeight() {
            const height = player?.getBoundingClientRect().height;

            root.style.setProperty(
                "--audio-player-height",
                `${height}px`
            );
        }

        updatePlayerHeight();

        const resizeObserver = new ResizeObserver(updatePlayerHeight);
        resizeObserver.observe(player);

        return () => {
            resizeObserver.disconnect();
        };
    }, [activeMessage]);

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

    function handlePlayKeydown(event: KeyboardEvent<HTMLButtonElement>) {
        if (event.key === "Tab" && event.shiftKey) {
            event.preventDefault();
            focusTrigger();
        }
    }

    function handlePlayerKeyDown(event: KeyboardEvent<HTMLElement>) {
        if (event.key !== "Tab" || event.shiftKey) {
            return;
        }

        const player = playerRef.current;

        if (!player) {
            return;
        }

        const focusableElements = Array.from(
            player.querySelectorAll<HTMLElement>(
                'button:not(:disabled), a[href], input:not(:disabled)'
            )
        ).filter((element) => element.getClientRects().length > 0);

        const lastElement = focusableElements.at(-1);

        if (document.activeElement === lastElement) {
            event.preventDefault();
            focusTrigger();
        }
    }

    useEffect(() => {
        if (!isSpeedMenuOpen) return;

        function handlePointerDown(event: PointerEvent) {
            if (
                event.target instanceof Node &&
                !speedControlRef.current?.contains(event.target)
            ) {
                setIsSpeedMenuOpen(false);
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [isSpeedMenuOpen]);

    function handleSpeedBlur(event: FocusEvent<HTMLLIElement>) {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsSpeedMenuOpen(false);
        }
    }

    function handleSpeedKeyDown(event: KeyboardEvent<HTMLLIElement>) {
        if (event.key === "Escape" && isSpeedMenuOpen) {
            event.stopPropagation();
            setIsSpeedMenuOpen(false);
            speedButtonRef.current?.focus();
        }
    }

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
        <aside
            ref={playerRef}
            onKeyDown={handlePlayerKeyDown}
            className={`${styles.player} ${isExpanded ? styles.expanded : styles.compact}`}
            aria-label="Audio player"
        >
            <div className={styles.content}>
                <button
                    ref={playButtonRef}
                    className={`${styles["playback-button"]}`}
                    type="button"
                    onClick={togglePlayback}
                    onKeyDown={handlePlayKeydown}
                    aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                    {isPlaying ? <Pause className={styles.icon} aria-hidden="true"/> :
                        <Play className={styles.icon} aria-hidden="true"/>}
                </button>

                <div className={styles["message-info"]}>
                    <p className={`text-heading-xs ${styles.title}`}>{activeMessage.title}</p>
                    <span className={`text-eyebrow ${styles.speaker}`}>{activeMessage.speaker}</span>
                </div>

                <div className={`${styles["window-controls"]}`}>
                    <button
                        className={`${styles["expand-button"]}`}
                        onClick={toggleExpanded}
                        aria-label={isExpanded ? "Collapse audio player" : "Expand audio player"}>
                        {isExpanded
                            ? <ChevronDown size={20} className={`${styles["control-icon"]}`} aria-hidden="true"/>
                            : <ChevronUp size={20} className={`${styles["control-icon"]}`} aria-hidden="true"/>
                        }
                    </button>

                    <button
                        type="button"
                        className={styles["close-button"]}
                        onClick={closePlayer}
                        aria-label="Close audio player"
                    >
                        <X size={20} className={`${styles["control-icon"]}`} aria-hidden="true"/>
                    </button>
                </div>
            </div>

            <div className={styles.timeline}>
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
                    aria-valuetext={`${Math.floor(currentTime/60)} minutes, ${Math.floor(currentTime%60)} seconds of ${Math.floor(duration / 60)} minutes, ${Math.floor(duration % 60)} seconds`}
                    onChange={(event) => {
                        const newTime = Number(event.currentTarget.value);

                        seek(newTime);
                    }}
                />

                <div className={styles.timestamps}>
                    <span className={`text-eyebrow ${styles.duration}`}>{currentDuration}</span>
                    <span aria-hidden="true">/</span>
                    <span className={`text-eyebrow ${styles.duration}`}>{totalDuration}</span>
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
                            aria-label="Volume"
                            aria-valuetext={`${Math.floor(volume * 100)}%`}
                            onChange={(event) => {
                                changeVolume(Number(event.currentTarget.value));
                            }}
                        />
                    </li>

                    <li
                        ref={speedControlRef}
                        onBlur={handleSpeedBlur}
                        onKeyDown={handleSpeedKeyDown}
                        className={`${styles.item} ${styles["playback-speed"]}`}
                    >
                        <button
                            ref={speedButtonRef}
                            type="button"
                            className={`text-action ${styles["control-button"]}`}
                            onClick={() => setIsSpeedMenuOpen((open) => !open)}
                            aria-label={`Playback speed: ${playbackRate}x`}
                            aria-expanded={isSpeedMenuOpen}
                        >
                            <Gauge className={`${styles["control-icon"]}`} aria-hidden="true"/>
                            {playbackRate}×
                        </button>

                        {isSpeedMenuOpen && (
                            <div className={styles["speed-options"]}>
                                <p className={`text-action`}>Playback Speed</p>

                                <div className={styles["speed-list"]}>
                                    {playbackRates.map((rate) => (
                                        <button
                                            type="button"
                                            key={rate}
                                            className={`text-action ${styles["speed-option"]}`}
                                            onClick={() => {
                                                changePlaybackRate(rate);
                                                setIsSpeedMenuOpen(false);
                                                speedButtonRef.current?.focus();
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
                        <a
                            href={activeMessage.audioUrl}
                            className={`text-action ${styles["control-button"]}`}
                            download={activeMessage.downloadFileName}
                        >
                            <Download className={styles["control-icon"]} aria-hidden="true"/>
                            Download
                        </a>
                    </li>

                    <li className={`${styles.item} ${styles.share}`}>
                        <button
                            type="button"
                            onClick={shareMessage}
                            className={`text-action ${styles["control-button"]}`}
                        >
                            <Share className={`${styles["control-icon"]}`} aria-hidden="true"/>
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