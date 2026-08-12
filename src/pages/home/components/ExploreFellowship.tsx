import styles from "./ExploreFellowship.module.css";
import {ArrowRight} from "lucide-react";

export default function ExploreFellowship() {
    return (
        <section className={`section ${styles.explore}`}>
            <div className={`${styles.content}`}>
                <h2 className={`text-section-title ${styles.heading}`}>Explore Fellowship</h2>

                <div className={`${styles.items}`}>
                    <article className={`${styles.item}`}>
                        <p className={`text-eyebrow`}>Our Story</p>
                        <h3 className={`text-heading-small`}>How Fellowship began</h3>
                        <p className={`text-body ${styles.description}`}>Read about the church's origin, history, and purpose.</p>
                        <a className={`text-action ${styles.link}`}>
                            <span>Read Our Story</span>
                            <ArrowRight size={16} aria-hidden={"true"}/>
                        </a>
                    </article>

                    <article className={`${styles.item}`}>
                        <p className={`text-eyebrow`}>Meet the Pastor</p>
                        <h3 className={`text-heading-small`}>A personal welcome</h3>
                        <p className={`text-body ${styles.description}`}>Meet the pastor and learn about his ministry and desire for the church.</p>
                        <a className={`text-action ${styles.link}`}>
                            <span>Meet the Pastor</span>
                            <ArrowRight size={16} aria-hidden={"true"}/>
                        </a>
                    </article>

                    <article className={`${styles.item}`}>
                        <p className={`text-eyebrow`}>What We Believe</p>
                        <h3 className={`text-heading-small`}>Truth that shapes the church</h3>
                        <p className={`text-body ${styles.description}`}>Explore the doctrines and biblical convictions that guide Fellowship Baptist</p>
                        <a className={`text-action ${styles.link}`}>
                            <span>Read Our Beliefs</span>
                            <ArrowRight size={16} aria-hidden={"true"}/>
                        </a>
                    </article>

                </div>

            </div>
        </section>
    )
}