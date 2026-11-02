import styles from "./PrivacyPage.module.css";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import {privacyPolicySections} from "./privacyPolicyData.ts";

export default function PrivacyPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Website Information"
                title="Privacy Policy"
                spacing="connected"
                description="How we collect, use, and protect information shared through our website."
            >
                <div className={styles.metadata}>
                    <p className={`text-prose-lead ${styles["church-name"]}`}>Fellowship Baptist Church</p>
                    <p className="text-body-small">
                        Last updated: November 2, 2026
                    </p>
                </div>
            </PageIntroduction>

            <section className={styles.content}>
                <nav
                    aria-label="Privacy policy contents"
                    className={styles["contents-nav"]}>
                    <h2 className={`text-action-large ${styles["contents-heading"]}`}>On This Page</h2>
                    <ul className={styles["contents-list"]}>
                        {privacyPolicySections.map((item) => (
                            <li key={item.title}
                                className={`text-prose ${styles["contents-item"]}`}
                            >
                                <a
                                    href={`#${item.id}`}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.policy}>
                    {privacyPolicySections.map((policy) => {
                        return (
                            <section
                                key={policy.id}
                                className={styles["policy-section"]}>
                                <h2 id={policy.id}
                                    className={`text-heading-small ${styles["policy-heading"]}`}
                                    tabIndex={-1}
                                >
                                    {policy.title}
                                </h2>
                                <div className={styles["policy-body"]}>
                                    {policy.paragraphs.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="text-prose-lead">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {policy.services &&
                                    <ul className={styles["services-list"]}>
                                        {policy.services.map((service) => (
                                            <li
                                                key={service.name}
                                                className={`text-prose ${styles["service-item"]}`}>
                                                <span className={`${styles["service-name"]}`}>{service.name}</span>
                                                <span>
                                                    {service.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                }

                                {policy.contact &&
                                    <>
                                        <address className={`text-prose ${styles.address}`}>
                                            <span>{policy.contact.name}</span>
                                            <span>{policy.contact.street}</span>
                                            <span>{policy.contact.city}</span>
                                        </address>

                                        <a className={`text-prose ${styles["contact-link"]}`}
                                           href={`mailto:${policy.contact.email}`}>
                                            {policy.contact.email}
                                        </a>
                                    </>
                                }
                            </section>
                        );
                    })}
                </div>
            </section>
        </>
    )
}