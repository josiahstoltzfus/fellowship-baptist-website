import styles from "./BrandLink.module.css";

const brand = {
    label: "Fellowship Baptist",
    href: "/"
}

export default function BrandLink() {
    return (
        <a className={`text-brand ${styles.brand}`} href={brand.href}>
            {brand.label}
        </a>
    )
}
