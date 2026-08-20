import styles from "./TeachingArchiveItem.module.css";
import type {Teaching} from "../sermons.ts";
import {Link} from "react-router-dom";

type TeachingArchiveItemsProps = {
    teaching: Teaching;
}

export default function TeachingArchiveItem({teaching} : TeachingArchiveItemsProps) {
    return (
        <li className={styles.item}>
            <p className={`text-eyebrow ${styles.date}`}>{teaching.date}</p>

            <div className={styles.summary}>
                <h3 className={`text-heading-small ${styles.title}`}>{teaching.title}</h3>
                <p className={`text-body-small ${styles.meta}`}>
                    {teaching.scripture} · {teaching.speaker}
                </p>
            </div>

            <Link
                className={`text-eyebrow ${styles.action}`}
                to={`/resources/sermons/${teaching.slug}`}>
                View Teaching →
            </Link>
        </li>
    )
}