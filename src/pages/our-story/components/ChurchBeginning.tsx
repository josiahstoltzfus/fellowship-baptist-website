import styles from "./ChurchBeginning.module.css";

export default function ChurchBeginning() {
    return (
        <section className={`${styles.beginning}`}>
            <div className={`${styles.content}`}>

                <figure className={`text-eyebrow ${styles.media}`}>Historical Photograph</figure>

                <div className={`${styles.message}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Our Beginning
                    </p>

                    <h2 className={`text-section-title`}>
                        Rooted in God’s Word
                    </h2>

                    <div className={styles.description}>
                        <p className="text-body">The pastor’s approved history will explain when and why the church began, the people and convictions that shaped its early ministry, and the work it continues today.</p>
                        <p className="text-body">Additional paragraphs may preserve meaningful milestones or memories if enough material is supplied. This section should remain concise if the available history is brief.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}