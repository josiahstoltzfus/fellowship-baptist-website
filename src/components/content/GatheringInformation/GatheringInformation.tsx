import styles from "./GatheringInformation.module.css";
import ActionLink from "../../actions/ActionLink.tsx";

export default function GatheringInformation() {
    return (
        <section className={`section ${styles["gathering-information"]}`}>
            <div className={`${styles.content}`}>

                <div className={`${styles["service-schedule"]}`}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Gather with us</p>
                    <p className={`text-section-title`}>Weekly Services</p>

                    <ul className={`text-body ${styles["service-list"]}`}>
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
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Location & Contact</p>
                    <p className={`text-section-title`}>Fountain Inn, South Carolina</p>

                    <address className={`text-body ${styles["address"]}`}>
                        <p>Fellowship Baptist Church</p>
                        <p>401 Jenkins Bridge Road</p>
                        <p>Fountain Inn, SC 29644</p>
                    </address>

                    <div className={`${styles["contact-details"]}`}>
                        <p className={`${styles["contact-item"]}`}>
                            <span className={`text-body-bold ${styles.label}`}>Phone:</span>
                            <a href="tel:18646306821" className={`text-body ${styles["contact-link"]}`}>864-630-6821</a>
                        </p>

                        <p className={`${styles["contact-item"]}`}>
                            <span className={`text-body-bold ${styles.label}`}>Email:</span>
                            <a href="mailto:PastorJackLBoyer@spectrum.net" className={`text-body ${styles["contact-link"]}`}>PastorJackLBoyer@spectrum.net</a>
                        </p>
                    </div>
                    <ActionLink
                        href="https://www.google.com/maps/dir/?api=1&destination=401+Jenkins+Bridge+Road%2C+Fountain+Inn%2C+SC"
                        external={true}
                    >
                        Get Directions
                    </ActionLink>
                </div>

            </div>
        </section>
    )
}