import styles from "./BrandLink.module.css";
import {NavLink} from "react-router-dom";

const brand = {
    label: "Fellowship Baptist",
    href: "/"
}

export default function BrandLink() {
    return (
        <NavLink className={`text-brand ${styles.brand}`} to={brand.href}>
            {brand.label}
        </NavLink>
    )
}
