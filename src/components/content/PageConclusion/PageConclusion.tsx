import styles from "./PageConclusion.module.css";
import ActionLink from "../../actions/ActionLink.tsx";

type PageConclusionProps = {
    eyebrow?: string;
    heading: string;
    description: string;
    href: string;
    actionLabel: string;
};

export default function PageConclusion({eyebrow = "", heading, description, href, actionLabel} : PageConclusionProps) {
    return (
        <section className={`${styles.continuation}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.message}`}>
                    {eyebrow && <p className={`text-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}

                    <h2 className={`text-section-title ${styles.heading}`}>{heading}</h2>

                    <p className={`text-body ${styles.description}`}>{description}</p>
                </div>

                <ActionLink href={href} variant="inverse">{actionLabel}</ActionLink>

            </div>
        </section>
    )
}