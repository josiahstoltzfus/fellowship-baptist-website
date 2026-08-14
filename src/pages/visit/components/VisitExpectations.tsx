import styles from "./VisitExpectations.module.css";

export default function VisitExpectations() {
    return (
        <div className={styles.expectations}>
            <div className={`${styles.content}`}>

                <header className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Before You Visit</p>

                    <h2 className={`text-section-title ${styles.heading}`}>
                        A simple picture of Sunday.
                    </h2>

                    <p className={`text-body ${styles.description}`}>
                        Here are a few practical details to help you know
                        what to expect when you worship with us.
                    </p>
                </header>

                <ul className={`${styles.list}`}>
                    <li className={`${styles.item}`}>
                        <h3 className={`text-heading-small ${styles["item-heading"]}`}>
                            Worship and preaching
                        </h3>

                        <p className={`text-body ${styles["item-description"]}`}>
                            Expect Scripture-centered worship and clear, verse-by-verse preaching focused on Jesus
                            Christ and practical spiritual growth.
                        </p>
                    </li>

                    <li className={`${styles.item}`}>
                        <h3 className={`text-heading-small ${styles["item-heading"]}`}>
                            What to wear
                        </h3>

                        <p className={`text-body ${styles["item-description"]}`}>
                            You are welcome to attend without fear of judgment. Many regular attendees dress
                            traditionally, but final visitor-facing wording will be confirmed with the pastor.
                        </p>
                    </li>

                    <li className={`${styles.item}`}>
                        <h3 className={`text-heading-small ${styles["item-heading"]}`}>
                            Children during worship
                        </h3>

                        <p className={`text-body ${styles["item-description"]}`}>
                            The church intends to welcome families and provide care for children during the service.
                            Nursery ages, supervision, location, and check-in details still need to be confirmed.
                        </p>
                    </li>

                    <li className={`${styles.item}`}>
                        <h3 className={`text-heading-small ${styles["item-heading"]}`}>
                            Sunday school
                        </h3>

                        <p className={`text-body ${styles["item-description"]}`}>
                            Sunday School begins at 10:00 AM. Class groupings and the experience for adults and children
                            will be added once the church supplies the details.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}