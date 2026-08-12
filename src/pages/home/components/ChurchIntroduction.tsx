import styles from "./ChurchIntroduction.module.css";

export default function ChurchIntroduction() {
    return (
        <section className={`section ${styles.introduction}`}>
            <div className={`content ${styles.content}`}>
                <p className={`text-eyebrow`}>A friendly family of believers.</p>
                <h2 className={`text-section-title`}>Seeking Christ Together.</h2>
                <p className={`${styles.description}`}>Our church is a place where worshiping and trusting God together helps people stay close to the Lord ‒ with friends who will encourage and pray for them.</p>
            </div>
        </section>
    )
}