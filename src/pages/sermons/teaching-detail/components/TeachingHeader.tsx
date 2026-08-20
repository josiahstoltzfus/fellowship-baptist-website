import styles from "./TeachingHeader.module.css";

export default function TeachingHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <a className={styles.backLink}>Back to teaching archive</a>
                <p className={styles.eyebrow}>Featured Teaching</p>
                <h1 className={styles.title}>152 Key Bible Verses</h1>
                <p className={styles.meta}>...</p>
                <p className={styles.summary}>...</p>
            </div>
        </header>
    )
}