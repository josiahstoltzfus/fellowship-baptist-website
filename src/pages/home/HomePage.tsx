import styles from "./HomePage.module.css";
import ActionLink from "../../components/actions/ActionLink";

export default function HomePage() {
    return(
        <div className={styles.test}>
            <h1 className={styles.h1}>Jesus Christ</h1>
            <ActionLink href="https://www.google.com">
                Plan Your Visit
            </ActionLink>
            <ActionLink href="https://www.google.com" variant="secondary">
                Plan Your Visit
            </ActionLink>
            <ActionLink href="https://www.google.com" variant="inverse">
                Plan Your Visit
            </ActionLink>
        </div>
    )
}