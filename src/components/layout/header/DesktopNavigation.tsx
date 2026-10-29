import styles from "./DesktopNavigation.module.css";
import {navigationItems} from "./navigation.ts";
import DesktopDropdown from "./DesktopDropdown.tsx";
import {NavLink} from "react-router-dom";

export default function DesktopNavigation() {
    return (
        <ul className={`text-nav ${styles["nav-items"]}`}>
            {navigationItems.map((item) => (
                <li key={item.label}>
                    {
                        item.type === "dropdown" ? <DesktopDropdown item={item}/> :
                            <NavLink
                                to={item.href}
                                className={styles.link}>
                                {item.label}
                            </NavLink>
                    }
                </li>
            ))}
        </ul>
    )
}