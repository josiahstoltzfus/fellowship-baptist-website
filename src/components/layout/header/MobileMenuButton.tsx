import styles from "./MobileMenuButton.module.css";
import * as React from "react";

type MobileMenuButtonProps = {
    isOpen: boolean;
    onClick: () => void;
    menuButtonRef: React.Ref<HTMLButtonElement>;
}

export default function MobileMenuButton({isOpen, onClick, menuButtonRef} : MobileMenuButtonProps) {
    return (
        <button
            ref={menuButtonRef}
            className={`text-action ${styles.button}`}
            aria-expanded={isOpen}
            onClick={onClick}>
            {isOpen ? "Close" : "Menu"}
        </button>
    )
}