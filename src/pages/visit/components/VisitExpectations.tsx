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

                    <p className={`text-prose-lead ${styles.description}`}>
                        Here are a few practical details to help you know
                        what to expect.
                    </p>
                </header>

                <ul className={`${styles.list}`}>
                    <li className={`${styles.item}`}>
                        <h3 className={`text-heading-small ${styles["item-heading"]}`}>
                            Our preaching
                        </h3>

                        <div className={styles["item-text"]}>
                            <p className={`text-prose ${styles["item-description"]}`}>
                                Our verse by verse exposition of Scripture is always Biblical, Christ-centered, understandable,
                                alive and practical in covering every important subject and doctrine in the Bible.  Our preaching
                                feeds believers the milk, meat, and honey of God’s Word to meet people’s spiritual needs.
                            </p>

                            <p className={`text-prose ${styles["item-description"]}`}>
                                We use the King James Version of the Bible because it is the most literal (word-for-word) and absolutely reliable translation of Scripture.
                            </p>
                        </div>
                    </li>

                    <li className={`${styles.item}`}>
                        <h3 className={`text-heading-small ${styles["item-heading"]}`}>
                            Our worship
                        </h3>

                        <div className={`${styles["item-text"]}`}>
                            <p className={`text-prose ${styles["item-description"]}`}>
                                Our worship declares the Lord’s worth. True worship must be in spirit and in truth. Through our singing, we seek to glorify the Lord, edify believers, and rest in Christ’s all-sufficiency for our insufficiency.
                            </p>

                            <p className={`text-prose ${styles["item-description"]}`}>
                                According to Psalm 96, worship includes preaching (verses 3–6), offerings (verses 7–9), and testimony (verses 10–13).
                            </p>
                        </div>
                    </li>

                    <li className={`${styles.item}`}>
                        <h3 className={`text-heading-small ${styles["item-heading"]}`}>
                            What to wear
                        </h3>

                        <p className={`text-prose ${styles["item-description"]}`}>
                            You are welcome to attend without fear of judgement.  We simply request modesty.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}