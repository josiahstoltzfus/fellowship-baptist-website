import styles from "./FeaturedResource.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function FeaturedResource() {
    return (
        <section className={`${styles.section}`}>
            <div className={`${styles.content}`}>
                <figure className={`text-eyebrow ${styles.media}`}>
                    Book Cover / Resource Artwork
                </figure>

                <div className={styles.details}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Featured Recommendation</p>
                    <h2 className={`text-section-title ${styles.title}`}>[Featured Resource Title]</h2>
                    <p className={`text-body ${styles.creator}`}>[Author or ministry]</p>
                    <p className={`text-body ${styles.description}`}>A foundational resource selected to help readers become familiar with key passages of Scripture. Featured recommendations can change as the church’s current studies and needs change.</p>
                    <ActionLink href="/resources/sermons/resourceId">View Resource</ActionLink>
                </div>

            </div>
        </section>
    )
}