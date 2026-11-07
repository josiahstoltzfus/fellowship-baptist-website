import styles from "./ExploreFellowship.module.css";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

const items = [
    {
        eyebrow: "Our Story",
        heading: "How Fellowship began",
        description: "Read about the church's origin, history, and purpose.",
        href: "/about/our-story",
        actionLabel: "Read Our Story",
    },
    {
        eyebrow: "Meet the Pastor",
        heading: "A personal welcome",
        description: "Meet the pastor and learn about his ministry and desire for the church.",
        href: "/about/meet-the-pastor",
        actionLabel: "Meet the Pastor",
    },
    {
        eyebrow: "What We Believe",
        heading: "Truth that shapes the church",
        description: "Explore the doctrines and biblical convictions that guide Fellowship Baptist.",
        href: "/about/what-we-believe",
        actionLabel: "Read Our Beliefs",
    },
];

export default function ExploreFellowship() {
    return (
        <section className={`section ${styles.explore}`}>
            <div className={`${styles.content}`}>
                <div className={styles.header}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Explore Fellowship</p>
                    <h2 className={`text-section-title`}>Get to know us.</h2>
                </div>

                <div className={styles.items}>
                    {items.map((item) => (
                        <article key={item.href} className={styles.item}>
                            <div className={styles.itemHeading}>
                                <p className={`text-eyebrow ${styles.eyebrow}`}>
                                    {item.eyebrow}
                                </p>
                                <h3 className="text-heading-small">
                                    {item.heading}
                                </h3>
                            </div>

                            <p className={`text-prose ${styles["item-text"]}`}>
                                {item.description}
                            </p>

                            <Link
                                to={item.href}
                                className={`text-action link-hover ${styles.link}`}
                            >
                                <span>{item.actionLabel}</span>
                                <ArrowRight size={16} aria-hidden="true" />
                            </Link>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}