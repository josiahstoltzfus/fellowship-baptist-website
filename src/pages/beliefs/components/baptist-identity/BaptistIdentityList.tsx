import styles from "./BaptistIdentityList.module.css";
import {baptistIdentities} from "./baptistIdentities.ts";
import ScriptureReferenceList from "../../../../components/content/Scripture/ScriptureReferenceList.tsx";

export default function BaptistIdentityList() {
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
                                   className={`text-prose ${styles.text}`}>{paragraph}</p>
                            ))}
                            <ScriptureReferenceList
                                references={identity.scriptureReferences}
                                variant="accent"/>
                        </div>

                    </li>
                )
            })}
        </ul>
    )
}