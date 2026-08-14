import styles from "./ArrivalInformation.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function ArrivalInformation() {
    return (
        <section className={styles.arrival}>
            <div className={styles.content}>
                <div className={styles.introduction}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Location and Arrival</p>
                    <h2 className={`text-section-title ${styles.heading}`}>Plan your arrival.</h2>
                </div>

                <div className={styles.layout}>
                    <div className={styles.details}>
                        <address className={`text-heading-small ${styles.address}`}>
                            <p>Fellowship Baptist Church</p>
                            <p>401 Jenkins Bridge Road</p>
                            <p>Fountain Inn, SC 29644</p>
                        </address>

                        <p className={`text-body ${styles.directions}`}>
                            The property is set back from the road and has a small parking area. The final version will clearly mark the driveway, parking, main entrance, steps, and accessible route after those details are verified with the church.
                        </p>

                        <ActionLink href={"/"}>Get Directions</ActionLink>
                    </div>

                    <figure className={`text-eyebrow ${styles.map}`}>Annotated map</figure>

                </div>
            </div>
        </section>
    )
}