import styles from "./MobileDropdown.module.css";
import type {NavDropdownItem} from "./navigation.ts";
import {useState} from "react";
import {Plus, Minus} from "lucide-react";
import {NavLink, useLocation} from "react-router-dom";

type NavDropdownProps = {
    item: NavDropdownItem;
    onClose: () => void;
}

export default function MobileDropdown({item, onClose}: NavDropdownProps) {
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const isActive = item.children.some(child => child.href === pathname);

    function toggleMenu() {
        setOpen((currentlyOpen) => !currentlyOpen);
    }

    return (
        <div>
            <button
                type="button"
                onClick={toggleMenu}
                aria-expanded={open}
                className={`text-nav ${styles.button}`}>
                <span className={`${isActive ? styles.active : ""}`}>{item.label}</span>
                <span>{open ? <Minus/> : <Plus/>}</span>
            </button>
            {open && (
                <ul className={styles.menu}>
                    {item.children.map((child) => (
                        <li key={child.href}>
                            <NavLink to={child.href} onClick={onClose} className={`text-body-small ${styles.link}`}>{child.label}</NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}