import styles from "./FeaturedTeaching.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function FeaturedTeaching() {
    return (
        <section className={`${styles.featured}`}>
            <div className={`${styles.content}`}>
                <figure className={`${styles.media}`}>
                    <figcaption className={`${styles.credit}`}>
                        Printable resource cover
                    </figcaption>
                </figure>

                <div className={`${styles.text}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Featured Teaching</p>
                    <h2 className={`text-section-title ${styles.title}`}>152 Key Bible Verses</h2>
                    <p className={`text-body ${styles.description}`}>A foundational teaching resource from Fellowship Baptist. Its exact format, description, Scripture details, and duration remain to be confirmed.</p>
                    <p className={`text-eyebrow ${styles.meta}`}>PASTOR [NAME] · FORMAT TO BE CONFIRMED</p>
                    <ActionLink variant="inverse" href="/resources/sermons/152-key-bible-verses">
                        Explore
                    </ActionLink>
                </div>
            </div>
        </section>
    )
}