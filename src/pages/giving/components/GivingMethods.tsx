import styles from "./GivingMethods.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function GivingMethods() {
    return (
        <section className={`${styles.methods}`}>
            <div className={`${styles.content}`}>
                <div className={styles.header}>
                    <p className={`text-eyebrow ${styles.number}`}>Give Online</p>
                    <ActionLink href="..." external={true}>Continue to secure giving</ActionLink>
                    <p className={`${styles.disclaimer} text-body-small`}>Giving is handled by the church's approved provider.</p>
                </div>

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