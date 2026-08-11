import styles from "./SiteHeader.module.css";
import BrandLink from "./BrandLink.tsx";
import DesktopNavigation from "./DesktopNavigation.tsx";
import MobileMenuButton from "./MobileMenuButton.tsx";
import MobileNavigation from "./MobileNavigation.tsx";
import {useEffect, useState} from "react";

export default function SiteHeader() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsMobileOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle("menu-open", isMobileOpen);

        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [isMobileOpen]);

    return (
        <header className={styles.header}>
            <nav className={styles["header-content"]} aria-label="Main navigation">
                <BrandLink/>
                <DesktopNavigation/>
                <MobileMenuButton
                    isOpen={isMobileOpen}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                />
                <MobileNavigation isOpen={isMobileOpen}/>
            </nav>
        </header>
    )
}