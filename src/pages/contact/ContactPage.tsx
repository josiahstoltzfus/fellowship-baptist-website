import ContactMessageSection from "./components/ContactMessageSection.tsx";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Contact"
                title="We would be glad to hear from you."
                spacing="connected"
                description="Have a question about the church, planning a visit, or simply want to reach out? Send us a message using the form below.">
                <div className={`${styles.content}`}>
                    <article className={styles.method}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>
                            Phone
                        </p>

                        <a className={`text-body ${styles.link}`} href="tel:...">
                            864-630-6821
                        </a>
                    </article>

                    <article className={styles.method}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>
                            Email
                        </p>

                        <a className={`text-body ${styles.link}`} href="mailto:...">
                            PastorJackLBoyer@spectrum.net
                        </a>
                    </article>
                </div>
            </PageIntroduction>
            <ContactMessageSection/>
        </>
    )
}