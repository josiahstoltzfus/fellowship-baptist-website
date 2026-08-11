import styles from "./MobileNavigation.module.css";
import {navigationItems} from "./navigation.ts";
import MobileDropdown from "./MobileDropdown.tsx";

type MobileNavigationProps = {
    isOpen: boolean;
}

export default function MobileNavigation({isOpen} : MobileNavigationProps) {
    return (
        <nav className={`${styles["mobile-nav"]} ${isOpen ? styles.visible : ""}`}>
            <ul className={`text-nav ${styles["nav-content"]}`}>
                {navigationItems.map((item) => (
                    <li key={item.label}
                        className={
                            item.type === "dropdown"
                                ? undefined
                                : styles.item}>
                        {item.type === "dropdown" ? <MobileDropdown item={item}/> : <a href={item.href}>{item.label}</a>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}