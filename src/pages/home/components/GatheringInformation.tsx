import styles from "./GatheringInformation.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function GatheringInformation() {
    return (
        <section className={`section ${styles["gathering-information"]}`}>
            <div className={`${styles.content}`}>

                <div className={`${styles["service-schedule"]}`}>
                    <p className={`text-eyebrow`}>Gather with us</p>
                    <p className={`text-section-title`}>Weekly Services</p>

                    <ul className={`${styles["service-list"]}`}>
                        <li className={`${styles["service-item"]}`}>
                            <span>Sunday School</span>
                            <span>10:00 AM</span>
                        </li>
                        <li className={`${styles["service-item"]}`}>
                            <span>Sunday Worship</span>
                            <span>11:00 AM</span>
                        </li>
                        <li className={`${styles["service-item"]}`}>
                            <span>Sunday Evening</span>
                            <span>5:00 PM</span>
                        </li>
                        <li className={`${styles["service-item"]}`}>
                            <span>Wednesday Evening</span>
                            <span>6:00 PM</span>
                        </li>
                    </ul>
                </div>

                <div className={`${styles["location-details"]}`}>
                    <p className={`text-eyebrow`}>Location & Contact</p>
                    <p className={`text-section-title`}>Fountain Inn, South Carolina</p>

                    <address className={`${styles["address"]}`}>
                        <p>Fellowship Baptist Church</p>
                        <p>401 Jenkins Bridge Road</p>
                        <p>Fountain Inn, SC 29644</p>
                    </address>

                    <div className={`${styles["contact-details"]}`}>
                        <p>Phone number to be supplied</p>
                        <p>Email to be supplied</p>
                    </div>
                    <ActionLink href="/contact">Get Directions</ActionLink>
                </div>

            </div>
        </section>
    )
}