import type {ScriptureReference} from "./scriptureTypes.ts";
import styles from "./SupportingScriptureAccordion.module.css";
import {useState} from "react";
import {Minus, Plus} from "lucide-react";
import {useScriptureReader} from "../../media/scripture-reader/useScriptureReader.ts";

type ScriptureAccordionProps = {
    passages: ScriptureReference[];
}

export default function SupportingScriptureAccordion({passages}: ScriptureAccordionProps) {
    const [expandedReference, setExpandedReference] = useState<string | null>(null);
    const {openReference} = useScriptureReader();

    return (
        <section className={`${styles.section}`}>
            <h3 className={`text-eyebrow ${styles.heading}`}>
                Supporting Scripture
            </h3>

            <ul className={styles.list}>
                {passages.map((passage) => {
                    const isExpanded = expandedReference === passage.reference;

                    return (
                        <li key={passage.reference} className={`${styles.item}`}>
                            <button
                                type="button"
                                className={styles.trigger}
                                onClick={() => {
                                    setExpandedReference(
                                        isExpanded
                                            ? null
                                            : passage.reference
                                    );
                                }}
                                aria-expanded={isExpanded}
                            >
                                <span className={`text-heading-xs ${styles.reference}`}>{passage.reference}</span>
                                <span aria-hidden="true" className={`${styles.icon}`}>{isExpanded ? <Minus size={16} strokeWidth={2.5} aria-hidden="true"/> : <Plus size={16} strokeWidth={2.5} aria-hidden="true"/>}</span>
                            </button>

                            {isExpanded && (
                                <blockquote className={styles.passage}>
                                    {passage.verses.slice(0, 4).map((verse) => (
                                        <p key={verse.number} className={`text-prose-small ${styles["verse-text"]}`}>
                                            <sup className={`${styles["verse-number"]}`}>{verse.number}</sup>
                                            {verse.text}
                                        </p>
                                    ))}

                                    {passage.verses.length > 4 && (
                                        <button
                                            type="button"
                                            className={`text-action link-hover ${styles["full-passage-button"]}`}
                                            onClick={() => openReference(passage)}
                                        >
                                            Read full passage
                                        </button>
                                    )}
                                </blockquote>
                            )}
                        </li>
                    )
                })}
            </ul>

        </section>
    )
}