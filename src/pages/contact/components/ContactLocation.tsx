import styles from "./ContactLocation.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function ContactLocation() {
    return (
        <section className={`${styles.location}`}>
            <div className={`${styles.content}`}>
                <figure className={styles.media}>
                    <figcaption className={`text-eyebrow ${styles.caption}`}>
                        Static map preview / church exterior
                    </figcaption>
                </figure>

                <div className={styles.details}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>
                        Find Us
                    </p>

                    <h2 className="text-heading-small">
                        401 Jenkins Bridge Road
                        <br />
                        Fountain Inn, SC 29644
                    </h2>

                    <ActionLink href="..." variant="primary">
                        Get directions
                    </ActionLink>
                </div>


            </div>
        </section>
    )
}