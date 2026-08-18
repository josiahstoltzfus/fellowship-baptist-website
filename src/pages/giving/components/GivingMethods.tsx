import styles from "./GivingMethods.module.css";

export default function GivingMethods() {
    return (
        <section className={`${styles.methods}`}>
            <div className={`${styles.content}`}>
                <header className={`${styles.introduction}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Other ways to give</p>
                    <h2 className={`text-section-title`}>Ways to support Fellowship Baptist.</h2>
                </header>

                <div className={`${styles.list}`}>
                    <article className={`${styles.method}`}>
                        <p className={`text-eyebrow ${styles.number}`}>In Person</p>
                        <h3 className={`text-heading-small`}>Give in person</h3>
                        <p className={`text-body ${styles.description}`}>Offerings may be given during regular worship services.</p>
                    </article>

                    <article className={`${styles.method}`}>
                        <p className={`text-eyebrow ${styles.number}`}>By Mail</p>
                        <h3 className={`text-heading-small`}>Give by mail</h3>
                        <p className={`text-body ${styles.description}`}>Mailing instructions would appear here after the church confirms the appropriate address.</p>
                    </article>
                </div>

            </div>
        </section>
    )
}