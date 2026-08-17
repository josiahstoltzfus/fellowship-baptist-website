import styles from "./MobileDropdown.module.css";
import type {NavDropdownItem} from "./navigation.ts";
import {useState} from "react";
import {Plus, Minus} from "lucide-react";

type NavDropdownProps = {
    item: NavDropdownItem;
}

export default function MobileDropdown({item}: NavDropdownProps) {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen((currentlyOpen) => !currentlyOpen);
    }

    return (
        <div>
            <button type="button" onClick={toggleMenu} className={styles.button}>
                <span>{item.label}</span>
                <span>{open ? <Minus/> : <Plus/>}</span>
            </button>
            {open && (
                <ul className={styles.menu}>
                    {item.children.map((child) => (
                        <li key={child.href}>
                            <a href={child.href} className={styles.link}>{child.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}