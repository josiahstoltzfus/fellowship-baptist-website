import styles from "./ArrivalStep.module.css";
import type {Step} from "./arrivalRoutes.ts";

type ArrivalStepProps = {
    number: number;
    step: Step;
}

export default function ArrivalStep({number, step} : ArrivalStepProps) {
    return (
        <article className={styles.step}>
            <img
                src={step.image}
                alt={step.imageAlt}
                className={styles.image}
            />

            <div className={styles.information}>
                <span className={`text-subheading ${styles.number}`}>{String(number).padStart(2, "0")}</span>
                <h3 className={`text-heading-small ${styles.title}`}>{step.title}</h3>
                <p className="text-prose">{step.description}</p>
            </div>

        </article>
    )
}