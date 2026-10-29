import styles from "./BrandLink.module.css";
import {NavLink} from "react-router-dom";

export default function BrandLink() {
    return (
        <NavLink className={`text-brand ${styles.brand}`} to={"/"} aria-label="Fellowship Baptist Church — Home">
            <span className={styles.fellowship}>Fellowship</span>
            <span className={styles.baptist}>Baptist</span>
        </NavLink>
    )
}
