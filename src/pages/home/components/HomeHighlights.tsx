import styles from "./HomeHighlights.module.css";

export default function HomeHighlights() {
    return (
        <section className={`${styles.highlights}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles["weekly-highlights"]}`}>
                    <p className={`text-eyebrow ${styles.title}`}>This Week</p>

                    <div className={`${styles["weekly-service"]}`}>
                        <p className={`text-subheading`}>Sunday Worship</p>
                        <p className={`text-subheading`}>11:00 AM</p>
                    </div>
                </div>

                <div className={`${styles["featured-teaching"]}`}>
                    <p className={`text-eyebrow ${styles.title}`}>Featured Teaching</p>
                    <p className={`text-section-title`}>152 Key Bible Verses</p>
                </div>

            </div>
        </section>
    )
}