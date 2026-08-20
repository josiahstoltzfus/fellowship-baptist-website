import styles from "./ResourceLibrary.module.css";

export default function ResourceLibrary() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>

                <header className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Resource Library</p>
                    <h2 className={`text-section-title ${styles.title}`}>Resources for reading and study</h2>
                    <p className={`text-body ${styles.description}`}>Browse one curated directory. Categories organize this page; they do not lead to additional internal pages.</p>
                </header>

                <div className={styles.layout}>
                    <aside className={styles.categories}>
                        <h3 className={`text-eyebrow ${styles["category-heading"]}`}>Categories</h3>
                        <ul className={`${styles["category-list"]}`}>
                            <li className={`${styles["category-item"]}`}>
                                <button
                                    type="button"
                                    className={`text-body ${styles["category-button"]}`}
                                >Books & devotionals</button>
                            </li>
                            <li className={`${styles["category-item"]}`}>
                                <button
                                    type="button"
                                    className={`text-body ${styles["category-button"]}`}
                                >Study & reference tools</button>
                            </li>
                            <li className={`${styles["category-item"]}`}>
                                <button
                                    type="button"
                                    className={`text-body ${styles["category-button"]}`}
                                >Printed resources</button>
                            </li>
                            <li className={`${styles["category-item"]}`}>
                                <button
                                    type="button"
                                    className={`text-body ${styles["category-button"]}`}
                                >Online resources</button>
                            </li>
                        </ul>
                    </aside>

                    <ul className={styles.resourceList}>
                        {/* ResourceItem components */}
                    </ul>
                </div>
            </div>
        </section>
    )
}