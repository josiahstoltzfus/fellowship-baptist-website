import styles from "./TeachingArticle.module.css";
import TeachingContents from "./TeachingContents.tsx";

export default function TeachingArticle() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.layout}>
                    <TeachingContents/>

                    <article className={styles.article}>
                        <p className={styles.articleLabel}>Written Teaching</p>
                        <h2 className={styles.title}>
                            A guide through essential passages
                        </h2>

                        <div className={styles.introduction}>
                            ...
                        </div>

                        <div className={styles.sections}>
                            <section className={styles.teachingSection}>
                                <h3 className={styles.sectionHeading}>
                                    The Character of God
                                </h3>

                                <div className={styles.sectionBody}>
                                    {/* Teaching paragraphs */}
                                </div>

                                <div className={styles.scriptureReferences}>
                                    <p className={styles.scriptureLabel}>
                                        Scripture References
                                    </p>

                                    <ul className={styles.referenceList}>
                                        <li>Genesis 1:1</li>
                                        <li>Psalm 90:2</li>
                                        <li>John 1:1–3</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}