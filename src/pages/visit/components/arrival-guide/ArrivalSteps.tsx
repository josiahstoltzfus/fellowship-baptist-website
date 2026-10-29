import styles from "./ArrivalSteps.module.css";
import type {Direction, Step} from "./arrivalRoutes.ts";
import ArrivalStep from "./ArrivalStep.tsx";

type ArrivalStepsProps = {
    direction: Direction;
    steps: Step[];
    hidden: boolean;
}

export default function ArrivalSteps({direction, steps, hidden}: ArrivalStepsProps) {
    return (
        <div
            className={styles.steps}
            role="tabpanel"
            id={`panel-${direction}`}
            aria-labelledby={`tab-${direction}`}
            tabIndex={0}
            hidden={hidden}
        >
            {steps.map((step, index) =>
                <ArrivalStep number={index + 1} step={step}/>
            )}
        </div>
    )
}