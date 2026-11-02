import styles from "./PrivacyPage.module.css";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";

type ContentListItem = {
    title: string;
    href: string;
}

export default function PrivacyPage() {
    const contentList: ContentListItem[] = [
        {title: "Information We Collect", href: "#information-we-collect"},
        {title: "How We Use Your Information", href: "#how-we-use-your-information"},
        {title: "Third-Party Services", href: "#third-party-services"},
        {title: "Information Security", href: "#information-security"},
        {title: "Data Retention", href: "#data-retention"},
        {title: "External Websites", href: "#external-websites"},
        {title: "Changes to This Policy", href: "#changes-to-this-policy"},
        {title: "Contact Us", href: "#contact-us"},
    ];

    return (
        <div className={styles.privacy}>
            <PageIntroduction
                eyebrow="Website Information"
                title="Privacy Policy"
                description="How we collect, use, and protect information shared through our website."
                spacing="connected"
            />

            <section className={styles.content}>
                <div className={styles.policy}>
                    <div className={styles.header}>
                        <p className={`text-prose-lead ${styles.church}`}>Fellowship Baptist Church</p>
                        <p className="text-action-large">
                            Last updated: November 2, 2026
                        </p>
                    </div>

                    <div className={styles.item}>
                        <h2 id="information-we-collect" className={`text-heading-small ${styles["item-heading"]}`}>
                            Information We Collect
                        </h2>
                        <div className={styles.text}>
                            <p className="text-prose-lead">
                                When you use our contact form, we collect the
                                information you voluntarily provide, including
                                your name, email address, subject, and message.
                            </p>
                            <p className="text-prose-lead">
                                Our website hosting and security services may
                                also process technical information, such as IP
                                addresses, browser information, and website requests.
                            </p>
                            <p className="text-prose-lead">
                                We may also collect anonymous website usage
                                information, such as page views, referring websites,
                                and general visitor locations, through Cloudflare
                                Web Analytics.
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h2 id="how-we-use-your-information" className={`text-heading-small ${styles["item-heading"]}`}>
                            How We Use Your Information
                        </h2>
                        <div className={styles.text}>
                            <p className="text-prose-lead">
                                Information submitted through our contact form
                                is used to receive and respond to your questions
                                or messages.
                            </p>
                            <p className="text-prose-lead">
                                Contact form submissions are delivered to the
                                church's designated email recipient. We do not
                                use contact form submissions for marketing purposes.
                            </p>
                            <p className="text-prose-lead">
                                Website analytics help us understand how visitors
                                use our website and identify opportunities to
                                improve its content and performance.
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h2 id="third-party-services" className={`text-heading-small ${styles["item-heading"]}`}>
                            Third-Party Services
                        </h2>

                        <p className="text-prose-lead">
                            These providers may process information as necessary to deliver their services.
                        </p>

                        <ul className={styles.list}>
                            <li className={`text-prose`}>
                                <span>Cloudflare</span>
                                <span>
                                    Provides website hosting and security services.
                                </span>
                            </li>
                            <li className={`text-prose`}>
                                <span>Cloudflare Web Analytics</span>
                                <span>
                                    Provides privacy-focused website traffic and performance statistics without using cookies, local storage, or visitor fingerprinting.
                                </span>
                            </li>
                            <li className={`text-prose`}>
                                <span>Web3Forms</span>
                                <span>
                                    Processes contact form submissions and delivers messages to the church's email inbox. Submission retention is configured for 30 days.
                                </span>
                            </li>
                            <li className={`text-prose`}>
                                <span>Tithely</span>
                                <span>
                                    Provides online giving services. Donations are processed on Tithely's website under itsown privacy and security practices.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <h2 id="information-security" className={`text-heading-small ${styles["item-heading"]}`}>
                            Information Security
                        </h2>
                        <div className={styles.text}>
                            <p className="text-prose-lead">
                                We use third-party services that provide security
                                measures intended to protect information transmitted
                                through the website. However, no method of transmitting
                                or storing information online can be guaranteed
                                to be completely secure.
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <h2 id="data-retention" className={`text-heading-small ${styles["item-heading"]}`}>
                            Data Retention
                        </h2>
                        <div className={styles.text}>
                            <p className="text-prose-lead">
                                Contact form submissions are retained by Web3Forms
                                for 30 days under our configured retention setting.
                            </p>
                            <p className="text-prose-lead">
                                Messages delivered to the church's email inbox
                                may be retained separately as needed to respond
                                to inquiries and maintain church correspondence.
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h2 id="external-websites" className={`text-heading-small ${styles["item-heading"]}`}>
                            External Websites
                        </h2>
                        <div className={styles.text}>
                            <p className="text-prose-lead">
                                Our website may contain links to external websites.
                                Fellowship Baptist Church is not responsible for
                                the privacy practices or content of those websites.
                                We encourage visitors to review their privacy policies.
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h2 id="changes-to-this-policy" className={`text-heading-small ${styles["item-heading"]}`}>
                            Changes to This Policy
                        </h2>
                        <div className={styles.text}>
                            <p className="text-prose-lead">
                                We may update this Privacy Policy as our website
                                and services change. Updates will be reflected
                                by the date shown at the top of this page.
                            </p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <h2 id="contact-us" className={`text-heading-small ${styles["item-heading"]}`}>
                            Contact Us
                        </h2>
                        <div className={styles.text}>
                            <p className="text-prose-lead">
                                If you have questions about this Privacy Policy
                                or how information submitted through our website
                                is handled, please contact Fellowship Baptist Church.
                            </p>
                        </div>
                        <address className={`text-prose ${styles.address}`}>
                            Fellowship Baptist Church<br/>
                            401 Jenkins Bridge Road<br/>
                            Fountain Inn, SC 29644
                        </address>

                        <a className={`text-prose`} href="mailto:PastorJackLBoyer@spectrum.net">
                            PastorJackLBoyer@spectrum.net
                        </a>
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <nav
                        aria-label="Privacy policy contents"
                        className={styles["content-list"]}>
                        <h3 className={`text-action-large ${styles["content-title"]}`}>On This Page</h3>
                        <ul className={styles.table}>
                            {contentList.map((item) => (
                                <li key={item.title}
                                    className={`text-prose ${styles["table-item"]}`}
                                >
                                    <a href={item.href}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </section>


        </div>
    )
}