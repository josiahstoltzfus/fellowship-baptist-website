import styles from "./ResourceItem.module.css";

export default function ResourceItem() {
    return (
        <li className={styles.item}>
            <article>
                <p className={styles.type}>Book</p>

                <div className={styles.details}>
                    <h3 className={styles.title}>[Recommended book title]</h3>
                    <p className={styles.creator}>[Author]</p>
                    <p className={styles.description}>A short pastoral recommendation explaining the subject, intended reader, and value of the book.</p>
                </div>

                <a className={styles.action} href="#">
                    View Resource
                </a>
            </article>
        </li>
    )
}