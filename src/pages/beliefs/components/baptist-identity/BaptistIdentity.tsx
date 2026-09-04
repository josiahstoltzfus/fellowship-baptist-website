import styles from "./BaptistIdentity.module.css";
import BaptistIdentityList from "./BaptistIdentityList.tsx";
import {baptistIdentityScriptures} from "../../whatWeBelieveContent.ts";
import ScriptureReferenceList from "../../../../components/content/Scripture/ScriptureReferenceList.tsx";
import type {ScriptureReference} from "../../../../components/content/Scripture/scriptureTypes.ts";

type BaptistIdentityProps = {
    onSelect: (reference: ScriptureReference) => void;
};

export default function BaptistIdentity({onSelect}: BaptistIdentityProps) {
    return (
        <section className={`${styles.section}`}>
            <div className={`${styles.content}`}>
                <header className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Baptist Identity
                    </p>

                    <h2 className="text-section-title">
                        What is a Baptist?
                    </h2>

                    <p className={`text-lead ${styles.description}`}>
                        As a Baptist church, we identify with specific New Testament doctrine, consistent with similar
                        groups of believers who have gone before us, since the time of Christ.
                    </p>

                    <ScriptureReferenceList references={baptistIdentityScriptures} onSelect={onSelect}/>

                </header>

                <div className={styles.desktop}>
                    <BaptistIdentityList onSelect={onSelect}/>
                </div>

            </div>
        </section>
    )
}