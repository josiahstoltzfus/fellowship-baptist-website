import styles from "./AccessibilityPage.module.css";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import {accessibilitySections, accessibilityContact} from "./accessibilityStatementData.ts"

export default function AccessibilityPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Website Information"
                title="Accessibility Statement"
                description="Our commitment to making this website accessible to all visitors."
                spacing="connected">
                <div className={styles.metadata}>
                    <p className={`text-prose-lead ${styles["church-name"]}`}>Fellowship Baptist Church</p>
                    <p className="text-body-small">
                        Last updated: November 2, 2026
                    </p>
                </div>
            </PageIntroduction>

            <section className={styles.content}>
                <div className={styles.statements}>
                    {accessibilitySections.map((statement) =>
                        <section
                            key={statement.id}
                            className={styles.statement}>
                            <h2
                                className={`text-heading-small ${styles["statement-title"]}`}>
                                {statement.title}
                            </h2>

                            <div
                                className={styles["statement-body"]}>
                                {statement.paragraphs.map((paragraph, index) =>
                                    <p
                                        key={index}
                                        className={`text-prose-lead`}>
                                        {paragraph}
                                    </p>
                                )}
                            </div>

                            {statement.items &&
                                <ul
                                    className={styles["statement-list"]}>
                                    {statement.items.map((item, index) =>
                                        <li
                                            key={index}
                                            className={`text-prose ${styles["statement-item"]}`}>
                                            {item}
                                        </li>
                                    )}
                                </ul>
                            }
                        </section>
                    )}
                </div>

                <div className={styles["contact"]}>
                    <address className={`text-prose ${styles.address}`}>
                        <span>{accessibilityContact.name}</span>
                        <span>{accessibilityContact.street}</span>
                        <span>{accessibilityContact.city}</span>
                    </address>

                    <a className={`text-prose ${styles["contact-link"]}`}
                       href={`mailto:${accessibilityContact.email}`}>
                        {accessibilityContact.email}
                    </a>
                </div>
            </section>

        </>
    )
}