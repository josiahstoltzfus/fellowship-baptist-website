import styles from "./DesktopNavigation.module.css";
import {navigationItems} from "./navigation.ts";
import DesktopDropdown from "./DesktopDropdown.tsx";

export default function DesktopNavigation() {
    return (
        <ul className={`text-nav ${styles["nav-items"]}`}>
            {navigationItems.map((item) => (
                <li key={item.label}>
                    {
                        item.type === "dropdown" ? <DesktopDropdown item={item}/> :
                            <a href={item.href} className={item.emphasis ? styles["giving-link"] : undefined}>{item.label}</a>
                    }
                </li>
            ))}
        </ul>
    )
}