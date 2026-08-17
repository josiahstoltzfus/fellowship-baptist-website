import {useState} from "react";
import {doctrineArticles} from "../doctrineArticles.ts";
import styles from "./DoctrineAccordion.module.css";
import {Minus, Plus} from 'lucide-react';

export default function DoctrineAccordion() {
    const [openId, setOpenId] = useState<string | null>(doctrineArticles[0].id);

    function toggleArticle(id: string) {
        setOpenId((currentlyOpen) => currentlyOpen === id ? null : id)
    }

    return (
        <section className={`${styles.accordion}`}>
            <div className={`${styles.content}`}>
            {doctrineArticles.map((article) => {
                const isOpen = openId === article.id;

                return (
                    <article key={article.id} className={`${styles.article}`}>
                            <button
                                type="button"
                                className={`${styles.button}`}
                                aria-expanded={isOpen}
                                onClick={() => toggleArticle(article.id)}
                            >
                                <span className={`text-heading-small`}>{article.title}</span>
                                <span aria-hidden="true">{isOpen ? <Minus size={16} aria-hidden="true"/> : <Plus size={16} aria-hidden="true"/>}</span>
                            </button>

                            {isOpen && (
                                <div className={`text-body ${styles.body}`}>
                                    <p className={`text-eyebrow ${styles.eyebrow}`}>{article.articleLabel}</p>

                                    {article.paragraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}

                                    {article.scriptureReferences && (
                                        <section className={styles["scripture-references"]}>
                                            <h3 className={`text-eyebrow ${styles.eyebrow}`}>
                                                Supporting Scripture
                                            </h3>

                                            <ul className={`${styles["verse-list"]}`}>
                                                {article.scriptureReferences.map(
                                                    (reference) => (
                                                        <li className="text-body" key={reference}>
                                                            {reference}
                                                        </li>
                                                    ))}
                                            </ul>
                                        </section>
                                    )}

                                </div>
                            )}
                    </article>
                )
            })}
            </div>
        </section>
    )
}