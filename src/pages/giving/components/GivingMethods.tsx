import styles from "./GivingMethods.module.css";

export default function GivingMethods() {
    return (
        <section className={`${styles.methods}`}>
            <div className={`${styles.content}`}>
                <header className={`${styles.introduction}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Other ways to give</p>
                    <h2 className={`text-section-title`}>Giving in person or by mail.</h2>
                </header>

                <div className={`${styles.list}`}>
                    <article className={`${styles.method}`}>
                        <p className={`text-eyebrow ${styles.number}`}>Give In Person</p>
                        <p className={`text-prose ${styles.description}`}>Offerings may be given during regular worship services.</p>
                    </article>

                    <article className={`${styles.method}`}>
                        <p className={`text-eyebrow ${styles.number}`}>Give By Mail</p>
                        <p className={`text-prose ${styles.description}`}>Mailing instructions would appear here after the church confirms the appropriate address.</p>
                    </article>
                </div>

            </div>
        </section>
    )
}