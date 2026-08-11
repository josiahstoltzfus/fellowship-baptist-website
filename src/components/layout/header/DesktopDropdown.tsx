import styles from "./DesktopDropdown.module.css";
import type {NavDropdownItem} from "./navigation.ts";
import {useState} from "react";

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
                aria-expanded={open}>
                {item.label}
            </button>
            <ul className={`${styles.menu} ${open ? styles.visible : ""}`}>
                {item.children.map((child) => (
                    <li key={child.href}>
                        <a href={child.href} className={styles.link}>{child.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}