import styles from "./MobileNavigation.module.css";
import {navigationItems} from "./navigation.ts";
import MobileDropdown from "./MobileDropdown.tsx";
import {NavLink} from "react-router-dom";

type MobileNavigationProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileNavigation({isOpen, onClose} : MobileNavigationProps) {
    return (
        <nav className={`${styles["mobile-nav"]} ${isOpen ? styles.visible : ""}`}>
            <ul className={`text-nav ${styles["nav-content"]}`}>
                {navigationItems.map((item) => (
                    <li key={item.label}
                        className={
                            item.type === "dropdown"
                                ? undefined
                                : styles.item}>
                        {item.type === "dropdown"
                            ? (isOpen && <MobileDropdown item={item} onClose={onClose}/>)
                            : <NavLink to={item.href} onClick={onClose}>{item.label}</NavLink>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}