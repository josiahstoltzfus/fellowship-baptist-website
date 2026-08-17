import styles from "./WorshipPracticeOverview.module.css";

export default function WorshipPracticeOverview() {
    return (
        <section className={`${styles.overview}`}>
            <div className={`${styles.content}`}>
                <header className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Our Worship
                    </p>

                    <h2 className="text-section-title">
                        Music in practice
                    </h2>

                    <p className={`text-lead ${styles.description}`}>
                        These details show how the church’s musical convictions shape its ordinary worship.
                    </p>
                </header>

                <div className={styles.items}>
                    <article className={styles.item}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>
                            Our Hymnal
                        </p>

                        <h3 className="text-heading-small">
                            Hymnal title.
                        </h3>

                        <p className={`text-eyebrow ${styles.status}`}>
                            Optional — details to confirm
                        </p>
                    </article>

                    <article className={styles.item}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>
                            Instruments
                        </p>

                        <h3 className="text-heading-small">
                            The instruments normally used during worship.
                        </h3>

                        <p className={`text-eyebrow ${styles.status}`}>
                            Optional — details to confirm
                        </p>
                    </article>

                    <article className={styles.item}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>
                            Congregational Singing
                        </p>

                        <h3 className="text-heading-small">
                            How the congregation participates in musical worship.
                        </h3>

                        <p className={`text-eyebrow ${styles.status}`}>
                            Optional — details to confirm
                        </p>
                    </article>




                </div>





            </div>
        </section>
    )
}