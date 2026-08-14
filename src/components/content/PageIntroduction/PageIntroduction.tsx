import styles from "./PageIntroduction.module.css";

type PageIntroductionProps = {
    eyebrow: string;
    title: string;
    description: string;
    alignment?: "left" | "center";
};

export default function PageIntroduction({eyebrow, title, description, alignment = "left"} : PageIntroductionProps) {
    return (
        <header className={`${styles.introduction} ${styles[alignment]}`}>
            <div className={styles.content}>
                <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
                <h1 className={`text-page-title ${styles.heading}`}>{title}</h1>
                <p className={`text-lead ${styles.description}`}>{description}</p>
            </div>
        </header>
    )
}