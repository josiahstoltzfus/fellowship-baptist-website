import styles from "./TextSection.module.css";

type TextSectionProps = {
    eyebrow: string,
    heading: string,
    description: string,
    alignment?: "left" | "center";
    surface?: "base" | "reflective";
}

export default function TextSection({eyebrow, heading, description, alignment = "left", surface = "base"}: TextSectionProps) {
    return (
        <section className={`section ${styles.section} ${styles[surface]}`}>
            <div className={`content ${styles.content} ${styles[alignment]}`}>
                <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
                <h2 className={`text-section-title`}>{heading}</h2>
                <p className={`text-lead ${styles.description}`}>{description}</p>
            </div>
        </section>
    )
}