import styles from "./DesktopDropdown.module.css";
import type {NavDropdownItem} from "./navigation.ts";
import {useState, useRef, useEffect} from "react";
import {ChevronDown} from "lucide-react";
import {NavLink} from "react-router-dom";

type NavDropdownProps = {
    item: NavDropdownItem;
}

export default function DesktopDropdown({item}: NavDropdownProps) {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    function toggleMenu() {
        setOpen((currentlyOpen) => !currentlyOpen);
    }

    useEffect(() => {
        if (!open) return;

        function handleOutsideClick(event: PointerEvent) {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("pointerdown", handleOutsideClick);

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
        };
    }, [open]);

    return (
        <div
            ref={dropdownRef}
            className={styles.item}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onKeyDown={(event) => {
                if (event.key === "Escape") {
                    console.log("Escape key pressed");
                    setOpen(false);
                    buttonRef.current?.focus();
                }
            }}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpen(false);
                }
            }}>
            <button
                ref={buttonRef}
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
                        <NavLink
                            to={child.href}
                            className={`text-body-small ${styles.link}`}
                            onClick={() => setOpen(false)}
                        >
                            {child.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}