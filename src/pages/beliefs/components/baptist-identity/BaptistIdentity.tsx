import styles from "./BaptistIdentity.module.css";
import BaptistIdentityList from "./BaptistIdentityList.tsx";
import {baptistIdentityScriptures} from "../../whatWeBelieveContent.ts";
import ScriptureReferenceList from "../../../../components/content/Scripture/ScriptureReferenceList.tsx";

export default function BaptistIdentity() {
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

                    <p className={`text-prose-lead ${styles.description}`}>
                        As a Baptist church, we identify with specific New Testament doctrine, consistent with similar
                        groups of believers who have gone before us, since the time of Christ.
                    </p>

                    <ScriptureReferenceList references={baptistIdentityScriptures} />

                </header>

                <div className={styles.desktop}>
                    <BaptistIdentityList />
                </div>

            </div>
        </section>
    )
}