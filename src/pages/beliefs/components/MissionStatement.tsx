import styles from "./MissionStatement.module.css";
import {Link} from "react-router-dom";

export default function MissionStatement() {
    return (
        <section className={`${styles.mission}`}>
            <div className={`${styles.content}`}>
                <header className={`${styles.introduction}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Our Mission
                    </p>

                    <h2 className={`text-section-title ${styles.title}`}>Building Lives Focused on Christ</h2>
                </header>

                <div className={`${styles.message}`}>

                    <p className={`text-eyebrow ${styles.reference}`}>
                        1 Corinthians 3:11
                    </p>

                    <blockquote className={`text-subheading ${styles.quotation}`}>
                        “For other foundation can no man lay than that is laid,
                        which is Jesus Christ.”
                    </blockquote>

                    <p className={`text-prose ${styles.description}`}>
                        The pastor’s approved mission explanation can connect the church’s doctrine with its
                        preaching, worship, fellowship, and desire to help believers grow.
                    </p>

                    <Link to="/about/church-music" className={`text-action ${styles.link}`}>
                        Explore our principles of church music →
                    </Link>

                </div>

            </div>
        </section>
)
}