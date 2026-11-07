import styles from "./FeaturedTeaching.module.css";
import {getFeaturedMessage} from "../../../lib/sanityQueries.ts";
import {getYouTubeEmbedUrl} from "../../../lib/getYouTubeEmbedUrl.ts";
import {useAudioPlayer} from "../../../components/media/audio-player/useAudioPlayer.ts";
import {useEffect, useState} from "react";
import type {Message, AudioMessage} from "../../../lib/sanityTypes.ts";

export default function FeaturedTeaching() {
    const audioPlayer = useAudioPlayer();
    const [featuredTeaching, setFeaturedTeaching] = useState<Message | null>(null);
    const [featuredFormat, setFeaturedFormat] = useState<"audio" | "video">("audio");

    useEffect(() => {
        async function loadFeaturedTeaching() {
            try {
                const data = await getFeaturedMessage();

                if (!data) {
                    return;
                }

                setFeaturedTeaching(data.featuredMessage);
                setFeaturedFormat(data.featuredFormat);
            } catch (error) {
                console.error("Failed to load featured teaching:", error);
            }
        }

        void loadFeaturedTeaching();
    }, []);

    function hasAudio(message: Message): message is AudioMessage {
        return Boolean(message.audioUrl && message.durationSeconds != null);
    }

    if (!featuredTeaching) {
        return null;
    }

    const videoEmbedUrl = featuredTeaching.videoUrl
        ? getYouTubeEmbedUrl(featuredTeaching.videoUrl)
        : null;

    const durationMinutes = featuredTeaching.durationSeconds != null
        ? Math.round(featuredTeaching.durationSeconds / 60)
        : null;

    return (
        <section className={`${styles.highlights}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles["featured-teaching"]}`}>
                    <div className={styles.heading}>
                        <h2 className={`text-eyebrow ${styles.eyebrow}`}>
                            Featured Teaching
                        </h2>
                        <h3 className="text-section-title">
                            {featuredTeaching.title}
                        </h3>
                    </div>

                    <ul className={`${styles.list}`}>
                        <li className={`text-eyebrow ${styles.item}`}>
                            {featuredTeaching.kind}
                        </li>
                        <li className={`text-eyebrow ${styles.item}`}>
                            {featuredTeaching.speakerName}
                        </li>
                        {durationMinutes !== null && (
                            <li className={`text-eyebrow ${styles.item}`}>
                                {`${durationMinutes} min`}
                            </li>
                        )}
                    </ul>

                    {featuredFormat === "audio" && hasAudio(featuredTeaching) && (
                        <button
                            className={`text-action-large ${styles.button}`}
                            type="button"
                            onClick={() => audioPlayer.playMessage(featuredTeaching)}
                            aria-label={`Listen to ${featuredTeaching.title}`}
                        >
                            Listen
                        </button>
                    )}

                    {featuredFormat === "video" && videoEmbedUrl && (
                        <div className={styles.video}>
                            <iframe
                                src={videoEmbedUrl}
                                title={featuredTeaching.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}