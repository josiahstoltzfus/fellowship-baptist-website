import styles from "./ContactMessageSection.module.css";

export default function ContactMessageSection() {
    return (
        <section className={`${styles.message}`}>
            <div className={`${styles.content}`}>
                <header className={`${styles.introduction}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        General Message
                    </p>

                    <h2 className="text-section-title">
                        Send a message
                    </h2>

                    <p className={`text-body ${styles.description}`}>
                        Use this form for ordinary questions about the church or an upcoming visit. Direct phone and email remain available above.
                    </p>
                </header>

                <form className={styles.form}>
                    <div className={styles["field-row"]}>
                        <div className={styles.field}>
                            <label className={`text-eyebrow ${styles.label}`} htmlFor="name">
                                Name
                            </label>

                            <input
                                className={`text-body ${styles.input}`}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={`text-eyebrow ${styles.label}`} htmlFor="email">
                                Email
                            </label>

                            <input
                                className={`text-body ${styles.input}`}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label className={`text-eyebrow ${styles.label}`} htmlFor="subject">
                            Subject
                        </label>

                        <input
                            className={`text-body ${styles.input}`}
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Enter subject"
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={`text-eyebrow ${styles.label}`} htmlFor="message">
                            Message
                        </label>

                        <textarea
                            className={`text-body ${styles.textarea}`}
                            id="message"
                            name="message"
                            placeholder="How can we help?"
                        />
                    </div>

                    <div className={styles.actions}>
                        <button className={`text-action ${styles.submit}`} type="submit">
                            Send message
                        </button>

                        <p className={`text-caption ${styles.notice}`}>
                            Please do not include confidential or urgent information. Submission routing, spam protection, privacy handling, and response expectations must be confirmed before launch.
                        </p>

                        <p className={`text-eyebrow ${styles.status}`}>
                            Form delivery method and recipient address required
                        </p>
                    </div>
                </form>



            </div>
        </section>
    )
}