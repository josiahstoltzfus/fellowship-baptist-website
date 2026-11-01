import styles from "./DoctrineExplorer.module.css";
import {doctrineArticles} from "../../doctrineArticles.ts";
import {doctrineIntroductionScriptures} from "../../whatWeBelieveContent.ts";
import {useState} from "react";
import ScriptureReferenceList from "../../../../components/content/Scripture/ScriptureReferenceList.tsx";
import SupportingScriptureAccordion from "../../../../components/content/Scripture/SupportingScriptureAccordion.tsx";

export default function DoctrineExplorer() {
    const [selectedId, setSelectedId] = useState(doctrineArticles[0].id);
    const selectedArticle = doctrineArticles.find((article) => article.id === selectedId) ?? doctrineArticles[0];

    return (
        <section className={`${styles.explorer}`}>
            <div className={`${styles.content}`}>
                <header className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Core Doctrines
                    </p>

                    <p className={`text-prose-lead ${styles.description}`}>
                        As a Bible-believing church, we believe in the basic,
                        traditional doctrines of the Christian faith, including
                        a literal interpretation of the Scriptures. We seek to
                        remain separate from religious groups that deny these
                        doctrines.
                    </p>

                    <ScriptureReferenceList
                        references={doctrineIntroductionScriptures}
                    />
                </header>

                <div className={`${styles.layout}`}>
                    <nav className={`${styles.navigation}`}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>Contents</p>

                        <ul className={`${styles.list}`}>
                            {doctrineArticles.map((article) => (
                                <li key={article.id}>
                                    <button
                                        type="button"
                                        className={`text-heading-small ${styles.item}`}
                                        aria-pressed={selectedId === article.id}
                                        aria-controls={"selected-doctrine"}
                                        onClick={() => setSelectedId(article.id)}
                                    >
                                        {article.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <article
                        id={"selected-doctrine"}
                        className={styles.article}>
                        <p className={`text-eyebrow ${styles["article-label"]}`}>
                            {selectedArticle.articleLabel}
                        </p>

                        <h2 className="text-subheading">
                            {selectedArticle.title}
                        </h2>

                        <div className={styles.body}>
                            {selectedArticle.paragraphs.map((paragraph, index) => (
                                <p className={`text-prose`} key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {selectedArticle.supportingScriptures && (
                            <SupportingScriptureAccordion passages={selectedArticle.supportingScriptures}/>
                        )}
                    </article>
                </div>
            </div>
        </section>
    )
}