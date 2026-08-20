import styles from "./TeachingContents.module.css";

export default function TeachingContents() {
    return (
        <nav className={styles.contents} aria-label="Sections in this teaching">
            <p className={styles.eyebrow}>In This Teaching</p>
            <p className={styles.description}>Jump to a section on this page</p>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <a className={styles.link} href="#introduction">
                        Introduction
                    </a>
                </li>
            </ul>
        </nav>
    )
}