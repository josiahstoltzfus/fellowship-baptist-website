import styles from "./ArrivalInformation.module.css";
import DirectionTabs from "./arrival-guide/DirectionTabs.tsx";
import ArrivalSteps from "./arrival-guide/ArrivalSteps.tsx";
import {useState} from "react";
import {type Direction, fromOppositeDirectionSteps, fromHighway55Steps} from "./arrival-guide/arrivalRoutes.ts";

export default function ArrivalInformation() {
    const [direction, setDirection] = useState<Direction>("highway55");

    return (
        <section className={styles.arrival}>
            <div className={styles.content}>
                <div className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Location & Arrival</p>
                    <h2 className={`text-section-title ${styles.heading}`}>Finding your way here.</h2>
                    <p className={`text-prose-lead ${styles.directions}`}>
                        Choose the direction you're approaching from for a few helpful landmarks along the way.
                    </p>
                    <p className={`text-prose`}>
                        401 Jenkins Bridge Road, Fountain Inn, SC
                    </p>
                </div>

                <DirectionTabs direction={direction} onChangeDirection={setDirection}/>
                <ArrivalSteps direction={"highway55"} steps={fromHighway55Steps} hidden={direction !== "highway55"}/>
                <ArrivalSteps direction={"opposite"} steps={fromOppositeDirectionSteps} hidden={direction !== "opposite"}/>

            </div>
        </section>
    )
}