import styles from "./DesktopDropdown.module.css";
import type {NavDropdownItem} from "./navigation.ts";
import {useState} from "react";
import {ChevronDown} from "lucide-react";

type NavDropdownProps = {
    item: NavDropdownItem;
}

export default function DesktopDropdown({item}: NavDropdownProps) {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen((currentlyOpen) => !currentlyOpen);
    }

    return (
        <div className={styles.item}>
            <button
                type="button"
                onClick={toggleMenu}
                className={`text-nav ${styles.button}`}
                aria-expanded={open}>
                <span>{item.label}</span>
                <ChevronDown size={16} aria-hidden={"true"}/>
            </button>
            <ul className={`${styles.menu} ${open ? styles.visible : ""}`}>
                {item.children.map((child) => (
                    <li key={child.href} className={styles["list-item"]}>
                        <a href={child.href} className={styles.link}>{child.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}