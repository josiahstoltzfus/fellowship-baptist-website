import styles from "./HomeHero.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";
import home_hero_image from "../../../assets/images/home-hero-image.jpg";

export default function HomeHero() {
    return (
        <section className={`${styles.hero}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.text}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>1 Corinthians 3:11</p>
                    <h1 className={`text-page-title ${styles.title}`}>Jesus Christ, our foundation.</h1>
                    <blockquote className={`text-heading-small ${styles.scripture}`}>For other foundation can no man lay than that is
                        laid, which is Jesus Christ.
                    </blockquote>
                    <blockquote className={`text-prose ${styles.quote}`}>— "How firm a foundation ye saints of the Lord
                        is laid for your faith in His excellent Word, What more can He say to you than He hath said,
                        To you, who for refuge to Jesus has fled?"
                    </blockquote>
                    <ActionLink href="/visit">Plan your visit</ActionLink>
                </div>

                <div className={styles["media-frame"]}>
                    <figure className={`${styles.media}`}>
                        <img
                            src={home_hero_image}
                            className={`${styles.image}`}
                            alt="Exterior of Fellowship Baptist Church in Fountain Inn, South Carolina"/>
                    </figure>
                </div>
            </div>

        </section>
    )
}