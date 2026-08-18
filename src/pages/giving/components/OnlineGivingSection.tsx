import styles from "./OnlineGivingSection.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";

export default function OnlineGivingSection() {
    return (
        <section className={`${styles.giving}`}>
            <div className={`${styles.content}`}>
                <p className={`text-eyebrow ${styles.eyebrow}`}>Online Giving</p>
                <h2 className={`text-section-title`}>Give through a secure provider.</h2>
                <p className={`text-body ${styles.description}`}>The church website does not collect or store payment
                    details.
                    <br/>
                    The button below opens the church’s approved giving provider.</p>
                <ActionLink href="...">Continue to secure giving</ActionLink>
            </div>
        </section>
    )
}