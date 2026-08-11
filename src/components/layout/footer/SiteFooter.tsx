import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-identity"]}>
                    {/* Church identity */}
                    <p className={`text-display ${styles["footer-title"]}`}>Fellowship Baptist Church</p>
                    <p className={`text-body-small`}>Fountain Inn, South Carolina</p>
                </div>

                <div className={`${styles["footer-sections"]}`}>
                    <nav aria-label="SiteFooter navigation" className={styles["footer-section"]}>
                        {/* SiteFooter links */}
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Explore</h2>
                        <ul className={`text-body-small ${styles["footer-list"]}`}>
                            <li><a href="/about">About</a></li>
                            <li><a href="/visit">Visit</a></li>
                            <li><a href="/sermons">Sermons</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>

                    <section className={styles["footer-section"]}>
                        {/* Service schedule */}
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Gather With Us</h2>
                        <ul className={`text-body-small ${styles["footer-list"]}`}>
                            <li>Sunday School — 10:00 AM</li>
                            <li>Sunday Worship — 11:00 AM</li>
                            <li>Sunday Evening — 5:00 PM</li>
                            <li>Wednesday — 6:00 PM</li>
                        </ul>
                    </section>

                    <section className={styles["footer-section"]}>
                        {/* Address and contact */}
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Find Us</h2>

                        <address className={`text-body-small ${styles.address}`}>
                            <p className={`text-body-small`}>401 Jenkins Bridge Road</p>
                            <p className={`text-body-small`}>Fountain Inn, SC</p>
                        </address>

                        <a href="#" className={`text-action`}>Get Directions →</a>
                    </section>

                    <section className={`text-body-small ${styles["footer-section"]}`}>
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Contact</h2>

                        <div className={`text-body-small ${styles["contact-details"]}`}>
                            <p>Phone to be supplied</p>
                            <p>Email to be supplied</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className={styles["footer-legal"]}>
                <div className={styles["footer-legal-content"]}>
                    {/* Copyright and legal links */}
                    <p className={`text-caption`}>© Fellowship Baptist Church</p>

                    <nav aria-label="Legal" className={`text-caption ${styles["legal-links"]}`}>
                        <a href="/privacy">Privacy</a>
                        <span>•</span>
                        <a href="/accessibility">Accessibility</a>
                    </nav>
                </div>
            </div>

        </footer>
    )
}