import styles from "./MissionStatement.module.css";

export default function MissionStatement() {
    return (
        <section className={`${styles.mission}`}>
            <div className={`${styles.content}`}>
                <header className={`${styles.introduction}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Our Mission
                    </p>

                    <h2 className={`text-section-title`}>Building Lives Focused on Christ</h2>
                </header>

                <div className={`${styles.message}`}>

                    <p className={`text-eyebrow ${styles.reference}`}>
                        1 Corinthians 3:11
                    </p>

                    <blockquote className={`text-subheading ${styles.quotation}`}>
                        “For other foundation can no man lay than that is laid,
                        which is Jesus Christ.”
                    </blockquote>

                    <p className={`text-body ${styles.description}`}>
                        The pastor’s approved mission explanation can connect the church’s doctrine with its
                        preaching, worship, fellowship, and desire to help believers grow.
                    </p>

                    <a className={`text-action ${styles.link}`} href="/about/church-music">
                        Explore our principles of church music →
                    </a>

                </div>

            </div>
        </section>
)
}