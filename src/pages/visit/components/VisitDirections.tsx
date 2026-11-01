import styles from './VisitDirections.module.css';
import visitMap from "../../../assets/images/visit-directions-map.svg";

export default function VisitDirections() {
    return (
        <div className={styles.visit}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Directions</p>
                    <h2 className={`text-section-title ${styles.title}`}>Finding our church.</h2>
                    <p className={`text-prose-lead ${styles.description}`}>Use this map as a quick reference to nearby roads and landmarks.</p>
                </div>

                <img className={styles.map} src={visitMap} alt="Visit Directions Map"/>
            </div>

        </div>
    )
}