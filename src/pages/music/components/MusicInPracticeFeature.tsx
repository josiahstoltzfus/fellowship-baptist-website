import styles from "./MusicInPracticeFeature.module.css";

export default function MusicInPracticeFeature() {
    return (
        <section className={styles.feature}>
            <div className={styles.content}>
                <div className={styles.message}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Music at Fellowship
                    </p>

                    <h2 className={`text-section-title ${styles.heading}`}>
                        Hear these principles in practice.
                    </h2>

                    <p className={`text-body ${styles.description}`}>
                        If an appropriate recording becomes available, it can demonstrate the musical practice described above in the church’s own voice.
                    </p>

                    <p className={`text-eyebrow ${styles.status}`}>
                        Optional — featured recording to confirm
                    </p>

                    <a className={`text-action ${styles.link}`} href="/sermons">
                        Explore sermons and resources →
                    </a>
                </div>

                <figure className={styles.media}>
                    <figcaption className={`text-eyebrow ${styles.caption}`}>
                        Featured music video or audio artwork
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}