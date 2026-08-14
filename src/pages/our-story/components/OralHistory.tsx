import styles from "./OralHistory.module.css";

export default function OralHistory() {
    return (
        <section className={`${styles.history}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.message}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        The Church’s Origin
                    </p>

                    <h2 className={`text-section-title`}>
                        Hear the story firsthand
                    </h2>

                    <p className={`text-body ${styles.description}`}>
                        If the existing origin recording is appropriate for publication, it can preserve the pastor’s
                        voice and complement the written history without duplicating it.
                    </p>
                </div>

                <figure className={`text-eyebrow ${styles.media}`}>
                    Origin Recording / Poster Image
                </figure>
            </div>
        </section>
    )
}