import styles from "./HomeHero.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function HomeHero() {
    return (
        <section className={`${styles.hero}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.text}`}>
                    <div className={styles.heading}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>1 Corinthians 3:11</p>
                        <h1 className={`text-page-title ${styles.title}`}>Jesus Christ, our foundation.</h1>
                    </div>
                    <blockquote className={`text-heading-small ${styles.scripture}`}>For other foundation can no man lay
                        than that is
                        laid, which is Jesus Christ.
                    </blockquote>
                    <blockquote className={`text-prose ${styles.quote}`}>— "How firm a foundation ye saints of the Lord
                        is laid for your faith in His excellent Word, What more can He say to you than He hath said,
                        To you, who for refuge to Jesus has fled?"
                    </blockquote>

                    <div className={styles.actions}>
                        <ActionLink href="/visit" className={styles["hero-action"]}>Plan your visit</ActionLink>
                        <ActionLink variant="secondary" href="/about/what-we-believe" className={styles["hero-action"]}>What we believe</ActionLink>
                    </div>
                </div>
            </div>

        </section>
    )
}