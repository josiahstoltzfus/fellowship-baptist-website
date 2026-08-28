import styles from "./MusicPrinciples.module.css";
import {musicPrinciples} from "../musicPrinciples.ts";

export default function MusicPrinciples() {
    return (
        <section className={`${styles.principles}`}>
            <div className={`${styles.content}`}>

                <header className={`${styles.introduction}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Biblical Convictions
                    </p>

                    <h2 className={`text-section-title ${styles.heading}`}>The Principles that guide us</h2>

                    <p className={`text-body ${styles.description}`}>Just as God’s Word rightly interpreted is the message we are to preach, it also provides the guiding principles for our church music.</p>
                </header>

                <div className={styles.list}>
                    {musicPrinciples.map((principle) => (
                        <article className={styles.item} key={principle.id}>
                            <header className={styles["item-heading"]}>
                                <h3 className="text-heading-small">
                                    {principle.title}
                                </h3>
                            </header>

                            <div className={styles["item-content"]}>
                                <div className={`text-body ${styles.body}`}>
                                    {principle.paragraphs.map((paragraph) => (
                                        <p>{paragraph}</p>
                                    ))}
                                </div>

                                {principle.scriptureReferences && (
                                    <section className={styles["scripture-references"]}>
                                        <h3 className={`text-eyebrow ${styles.eyebrow}`}>
                                            Supporting Scripture
                                        </h3>

                                        <ul className={`${styles["verse-list"]}`}>
                                            {principle.scriptureReferences.map(
                                                (reference) => (
                                                    <li className="text-body" key={reference}>
                                                        {reference}
                                                    </li>
                                                ))}
                                        </ul>
                                    </section>
                                )}
                            </div>
                        </article>
                    ))}
                </div>


            </div>
        </section>
    )
}