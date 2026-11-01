import styles from "./FeaturedTeaching.module.css";
import {featuredTeaching} from "../../sermons/sermons.ts";
import {useAudioPlayer} from "../../../components/media/audio-player/useAudioPlayer.ts";

export default function FeaturedTeaching() {
    const audioPlayer = useAudioPlayer();
    const durationMinutes = Math.round(featuredTeaching.durationSeconds / 60);

    return (
        <section className={`${styles.highlights}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles["featured-teaching"]}`}>
                    <h2 className={`text-eyebrow ${styles.eyebrow}`}>Featured Teaching</h2>
                    <h3 className={`text-section-title`}>{featuredTeaching.title}</h3>
                    <ul className={`${styles.list}`}>
                        <li className={`text-eyebrow ${styles.item}`}>
                            {featuredTeaching.kind}
                        </li>
                        <li className={`text-eyebrow ${styles.item}`}>
                            {featuredTeaching.speaker}
                        </li>
                        {featuredTeaching.scripture &&
                            <li className={`text-eyebrow ${styles.item}`}>
                                {featuredTeaching.scripture.reference}
                            </li>
                        }
                        <li className={`text-eyebrow ${styles.item}`}>
                            {`${durationMinutes} min`}
                        </li>
                    </ul>

                    <button
                        className={`text-action-large ${styles.button}`}
                        type="button"
                        onClick={() => audioPlayer.playMessage(featuredTeaching)}
                        aria-label={`Listen to ${featuredTeaching.title}`}
                    >
                        Listen
                    </button>
                </div>
            </div>
        </section>
    )
}