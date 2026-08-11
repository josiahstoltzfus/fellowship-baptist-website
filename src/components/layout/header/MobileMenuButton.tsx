import styles from "./MobileMenuButton.module.css";

type MobileMenuButtonProps = {
    isOpen: boolean;
    onClick: () => void;
}

export default function MobileMenuButton({isOpen, onClick} : MobileMenuButtonProps) {
    return (
        <button className={`text-action ${styles.button}`} onClick={onClick}>
            {isOpen ? "Close" : "Menu"}
        </button>
    )
}