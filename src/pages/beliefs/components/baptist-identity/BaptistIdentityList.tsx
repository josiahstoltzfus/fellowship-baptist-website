import styles from "./BaptistIdentityList.module.css";
import {baptistIdentities} from "./baptistIdentities.ts";
import ScriptureReferenceList from "../../../../components/content/Scripture/ScriptureReferenceList.tsx";
import type {ScriptureReference} from "../../../../components/content/Scripture/scriptureTypes.ts";

type BaptistIdentityDesktopProps = {
    onSelect: (reference: ScriptureReference) => void;
};

export default function BaptistIdentityList({onSelect}: BaptistIdentityDesktopProps) {
    return (
        <ul className={`${styles.list}`}>
            {baptistIdentities.map((identity) => {
                return (
                    <li key={identity.title} className={`${styles.item}`}>

                        <p className={`text-section-title ${styles.letter}`} aria-hidden="true">{identity.letter}</p>

                        <div className={`${styles.content}`}>
                            <h2 className={`text-heading-small ${styles.title}`}>{identity.title}</h2>
                            {identity.paragraphs.map((paragraph, index) => (
                                <p key={`${identity.title}=${index}`}
                                   className={`text-body ${styles.text}`}>{paragraph}</p>
                            ))}
                            <ScriptureReferenceList
                                references={identity.scriptureReferences}
                                onSelect={onSelect}
                                variant="accent"/>
                        </div>

                    </li>
                )
            })}
        </ul>
    )
}