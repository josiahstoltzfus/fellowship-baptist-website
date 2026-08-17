import styles from "./DoctrineExplorer.module.css";
import {doctrineArticles} from "../doctrineArticles.ts";
import {useState} from "react";

export default function DoctrineExplorer() {
    const [selectedId, setSelectedId] = useState(doctrineArticles[0].id);
    const selectedArticle = doctrineArticles.find((article) => article.id === selectedId) ?? doctrineArticles[0];

    return (
        <section className={`${styles.explorer}`}>
            <div className={`${styles.content}`}>

                <nav className={`${styles.navigation}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Contents</p>

                    <ul className={`${styles.list}`}>
                        {doctrineArticles.map((article) => (
                            <li>
                                <button
                                    type="button"
                                    className={`text-heading-small ${styles.item}`}
                                    aria-pressed={selectedId === article.id}
                                    onClick={() => setSelectedId(article.id)}
                                >
                                    {article.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <article className={styles.article}>
                    <p className={`text-eyebrow ${styles["article-label"]}`}>
                        {selectedArticle.articleLabel}
                    </p>

                    <h2 className="text-section-title">
                        {selectedArticle.title}
                    </h2>

                    <div className={styles.body}>
                        {selectedArticle.paragraphs.map((paragraph, index) => (
                            <p className={`text-body`} key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {selectedArticle.scriptureReferences && (
                        <section className={styles["scripture-references"]}>
                            <h3 className={`text-eyebrow ${styles.eyebrow}`}>
                                Supporting Scripture
                            </h3>

                            <ul className={`${styles["verse-list"]}`}>
                                {selectedArticle.scriptureReferences.map(
                                    (reference) => (
                                        <li className="text-body" key={reference}>
                                            {reference}
                                        </li>
                                    ))}
                            </ul>
                        </section>
                    )}
                </article>
            </div>
        </section>
    )
}