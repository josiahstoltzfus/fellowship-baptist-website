import styles from "./DoctrineAccordion.module.css";
import {useState} from "react";
import {doctrineArticles} from "../../doctrineArticles.ts";
import {doctrineIntroductionScriptures} from "../../whatWeBelieveContent.ts";
import {Minus, Plus} from 'lucide-react';
import ScriptureReferenceList from "../../../../components/content/Scripture/ScriptureReferenceList.tsx";
import type {ScriptureReference} from "../../../../components/content/Scripture/scriptureTypes.ts";
import SupportingScriptureAccordion from "../../../../components/content/Scripture/SupportingScriptureAccordion.tsx";

type DoctrineAccordionProps = {
    onSelect: (reference: ScriptureReference) => void;
};

export default function DoctrineAccordion({onSelect} : DoctrineAccordionProps) {
    const [openId, setOpenId] = useState<string | null>(doctrineArticles[0].id);
    const selectedArticle = doctrineArticles.find((article) => article.id === openId) ?? doctrineArticles[0];

    function toggleArticle(id: string) {
        setOpenId((currentlyOpen) => currentlyOpen === id ? null : id)
    }

    return (
        <section className={`${styles.accordion}`}>
            <div className={`${styles.content}`}>
                <header className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Core Doctrines
                    </p>

                    <h2 className="text-section-title">
                        What does our church believe?
                    </h2>

                    <p className={`text-lead ${styles.description}`}>
                        As a Bible-believing church, we believe in the basic,
                        traditional doctrines of the Christian faith, including
                        a literal interpretation of the Scriptures. We seek to
                        remain separate from religious groups that deny these
                        doctrines.
                    </p>

                    <ScriptureReferenceList
                        references={doctrineIntroductionScriptures}
                        onSelect={onSelect}
                    />

                </header>

                <div className={`${styles.layout}`}>
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
                                    <span aria-hidden="true" className={`${styles.icon}`}>{isOpen ? <Minus size={16} strokeWidth={2.5} aria-hidden="true"/> : <Plus size={16} strokeWidth={2.5} aria-hidden="true"/>}</span>
                                </button>

                                {isOpen && (
                                    <div className={`text-body ${styles.body}`}>
                                        <p className={`text-eyebrow ${styles.eyebrow}`}>{article.articleLabel}</p>

                                        {article.paragraphs.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}

                                        {selectedArticle.supportingScriptures && (
                                            <SupportingScriptureAccordion passages={selectedArticle.supportingScriptures}/>
                                        )}

                                    </div>
                                )}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}