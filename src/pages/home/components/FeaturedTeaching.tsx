import styles from "./FeaturedTeaching.module.css";
import {featuredTeaching} from "../../sermons/sermons.ts";
import {useAudioPlayer} from "../../../components/media/audio-player/useAudioPlayer.ts";

export default function FeaturedTeaching() {
    const audioPlayer = useAudioPlayer();
    const {isPlaying} = audioPlayer;
    const durationMinutes = Math.round(featuredTeaching.durationSeconds / 60);

    return (
        <section className={`${styles.highlights}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles["featured-teaching"]}`}>
                    <p className={`text-eyebrow ${styles.title}`}>Featured Teaching</p>
                    <p className={`text-section-title`}>{featuredTeaching.title}</p>
                    <ul className={`${styles.list}`}>
                        <li className={`${styles.item}`}>
                            <p className={`text-eyebrow ${styles["item-text"]}`}>{featuredTeaching.kind}</p>
                        </li>
                        <li className={`${styles.item}`}>
                            <p className={`text-eyebrow ${styles["item-text"]}`}>{featuredTeaching.speaker}</p>
                        </li>
                        {featuredTeaching.scripture &&
                            <li className={`text-eyebrow ${styles.item}`}>
                                <p className={`${styles["item-text"]}`}>
                                    {featuredTeaching.scripture.reference}
                                </p>
                            </li>
                        }
                        <li className={`text-eyebrow ${styles.item}`}>
                            {`${durationMinutes} min`}
                        </li>
                    </ul>

                    <button
                        className={`text-action-large ${styles.button}`}
                        type="button"
                        onClick={()=> audioPlayer.playMessage(featuredTeaching)}
                        aria-label={isPlaying ? "Pause audio" : "Play audio"}
                    >
                        Listen
                    </button>
                </div>
            </div>
        </section>
    )
}