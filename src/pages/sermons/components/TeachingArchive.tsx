import styles from "./TeachingArchive.module.css";
import TeachingArchiveItem from "./TeachingArchiveItem.tsx";
import {teachings} from "../sermons.ts";

export default function TeachingArchive() {
    return (
        <section className={`${styles.archive}`}>
            <div className={`${styles.content}`}>
                <header className={styles.header}>
                    <h2 className={`text-heading-small ${styles.heading}`}>Teaching archive</h2>

                    <div className={styles.filters}>
                        {/* Filter buttons */}
                    </div>
                </header>

                <ul className={styles.list}>
                    {teachings.map((teaching) => (
                        <TeachingArchiveItem
                            key={teaching.id}
                            teaching={teaching}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}