import styles from "./ContactPrompt.module.css";
import ActionLink from "../../actions/ActionLink.tsx";

export default function ContactPrompt() {
    return (
        <aside className={styles.prompt}>
            <div className={`${styles.content}`}>
                <div className={`${styles.message}`}>
                    <h2 className={`text-section-title ${styles.heading}`}>
                        Still have a question?
                    </h2>

                    <p className={`text-body ${styles.description}`}>
                        We’ll make it easy to contact the church before your visit. Public phone and email details will
                        be added once supplied. </p>
                </div>

                <ActionLink href="/contact" variant="inverse">
                    Contact Us
                </ActionLink>
            </div>
        </aside>
    )
}