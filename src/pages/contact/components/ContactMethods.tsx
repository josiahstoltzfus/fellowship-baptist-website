import styles from "./ContactMethods.module.css";

export default function ContactMethods() {
    return (
        <section className={`${styles.methods}`}>
            <div className={`${styles.content}`}>

                <article className={styles.method}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Phone
                    </p>

                    <h2 className="text-heading-small">
                        Call the church
                    </h2>

                    <a className={`text-body ${styles.link}`} href="tel:...">
                        Public phone number to be supplied
                    </a>

                    <p className={`text-body-small ${styles.description}`}>
                        Tap the number on a phone to begin a call.
                    </p>
                </article>

                <article className={styles.method}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Email
                    </p>

                    <h2 className="text-heading-small">
                        Write to us
                    </h2>

                    <a className={`text-body ${styles.link}`} href="mailto:...">
                        Public email address to be supplied
                    </a>

                    <p className={`text-body-small ${styles.description}`}>
                        Or use the general message form below.
                    </p>
                </article>

            </div>
        </section>
    )
}