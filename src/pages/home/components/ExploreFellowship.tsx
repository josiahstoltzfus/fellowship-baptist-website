import styles from "./ExploreFellowship.module.css";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

export default function ExploreFellowship() {
    return (
        <section className={`section ${styles.explore}`}>
            <div className={`${styles.content}`}>
                <div className={styles.header}>
                    <p className={`text-eyebrow ${styles.eyebrow}`}>Explore Fellowship</p>
                    <h2 className={`text-section-title`}>Get to know us.</h2>
                </div>

                <div className={`${styles.items}`}>
                    <article className={`${styles.item}`}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>Our Story</p>
                        <h3 className={`text-heading-small`}>How Fellowship began</h3>
                        <p className={`text-prose ${styles["item-text"]}`}>Read about the church's origin, history, and purpose.</p>
                        <Link to="/about/our-story" className={`text-action ${styles.link}`}>
                            <span>Read Our Story</span>
                            <ArrowRight size={16} aria-hidden={"true"}/>
                        </Link>
                    </article>

                    <article className={`${styles.item}`}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>Meet the Pastor</p>
                        <h3 className={`text-heading-small`}>A personal welcome</h3>
                        <p className={`text-prose ${styles["item-text"]}`}>Meet the pastor and learn about his ministry and desire for the church.</p>
                        <Link to="/about/meet-the-pastor" className={`text-action ${styles.link}`}>
                            <span>Meet the Pastor</span>
                            <ArrowRight size={16} aria-hidden={"true"}/>
                        </Link>
                    </article>

                    <article className={`${styles.item}`}>
                        <p className={`text-eyebrow ${styles.eyebrow}`}>What We Believe</p>
                        <h3 className={`text-heading-small`}>Truth that shapes the church</h3>
                        <p className={`text-prose ${styles["item-text"]}`}>Explore the doctrines and biblical convictions that guide Fellowship Baptist.</p>
                        <Link to="/about/what-we-believe" className={`text-action ${styles.link}`}>
                            <span>Read Our Beliefs</span>
                            <ArrowRight size={16} aria-hidden={"true"}/>
                        </Link>
                    </article>

                </div>

            </div>
        </section>
    )
}