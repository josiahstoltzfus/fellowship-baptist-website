import styles from "./SiteHeader.module.css";
import BrandLink from "./BrandLink.tsx";
import DesktopNavigation from "./DesktopNavigation.tsx";
import MobileMenuButton from "./MobileMenuButton.tsx";
import MobileNavigation from "./MobileNavigation.tsx";
import {useEffect, useRef} from "react";

type SiteHeaderProps = {
    isMobileOpen: boolean;
    onClose: () => void;
    onToggle: () => void;
}

export default function SiteHeader({
                                       isMobileOpen,
                                       onClose,
                                       onToggle
                                   }: SiteHeaderProps) {
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape" && isMobileOpen) {
                onClose();
                menuButtonRef.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobileOpen, onClose]);

    return (
        <header className={styles.header}>
            <nav className={styles["header-content"]} aria-label="Main navigation">
                <BrandLink/>
                <DesktopNavigation/>
                <MobileMenuButton
                    menuButtonRef={menuButtonRef}
                    isOpen={isMobileOpen}
                    onClick={onToggle}
                />
                <MobileNavigation isOpen={isMobileOpen} onClose={onClose}/>
            </nav>
        </header>
    )
}