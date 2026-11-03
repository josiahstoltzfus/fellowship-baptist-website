import styles from "./SiteFooter.module.css";
import {NavLink, Link} from "react-router-dom";

export default function SiteFooter() {
    return (
        <footer
            className={styles.footer}>
            <div className={styles["content"]}>
                <div className={styles["identity"]}>
                    {/* Church identity */}
                    <p className={`text-page-title ${styles["title"]}`}>Fellowship Baptist Church</p>
                    <p className={`text-body`}>Fountain Inn, South Carolina</p>
                </div>

                <div className={`${styles["sections"]}`}>
                    <nav aria-label="SiteFooter navigation" className={styles["section"]}>
                        {/* SiteFooter links */}
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Explore</h2>
                        <ul className={`text-body ${styles["list"]}`}>
                            <li><NavLink to="/" className={`link-hover`}>Home</NavLink></li>
                            <li><NavLink to="/visit" className={`link-hover`}>Visit</NavLink></li>
                            <li><NavLink to="/resources/sermons" className={`link-hover`}>Sermons</NavLink></li>
                            <li><NavLink to="/contact" className={`link-hover`}>Contact</NavLink></li>
                        </ul>
                    </nav>

                    <section className={styles["section"]}>
                        {/* Service schedule */}
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Gather With Us</h2>
                        <ul className={`text-body ${styles["list"]}`}>
                            <li>Sunday School — 10:00 AM</li>
                            <li>Sunday Worship — 11:00 AM</li>
                            <li>Sunday Evening — 5:00 PM</li>
                            <li>Wednesday — 6:00 PM</li>
                        </ul>
                    </section>

                    <section className={styles["section"]}>
                        {/* Address and contact */}
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Find Us</h2>

                        <address className={`text-body ${styles.address}`}>
                            <p>401 Jenkins Bridge Road</p>
                            <p>Fountain Inn, SC 29644</p>
                        </address>

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=401+Jenkins+Bridge+Road%2C+Fountain+Inn%2C+SC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-action-large link-hover`}>
                            Get Directions →
                        </a>
                    </section>

                    <section className={`${styles["section"]}`}>
                        <h2 className={`text-eyebrow ${styles["section-heading"]}`}>Contact</h2>

                        <div className={`text-body ${styles["contact-details"]}`}>
                            <a href="tel:18647048440" className={`link-hover`}>864-630-6821</a>
                            <a href="mailto:PastorJackLBoyer@spectrum.net" className={`link-hover ${styles.email}`}>PastorJackLBoyer@spectrum.net</a>
                        </div>
                    </section>
                </div>
            </div>

            <div className={styles["legal"]}>
                <div className={styles["legal-content"]}>
                    {/* Copyright and legal links */}
                    <p className={`text-caption`}>© Fellowship Baptist Church</p>

                    <nav aria-label="Legal" className={`text-caption ${styles["legal-links"]}`}>
                        <Link to="/privacy" className={`link-hover`}>Privacy</Link>
                        <span>•</span>
                        <Link to="/accessibility" className={`link-hover`}>Accessibility</Link>
                    </nav>
                </div>
            </div>

        </footer>
    )
}