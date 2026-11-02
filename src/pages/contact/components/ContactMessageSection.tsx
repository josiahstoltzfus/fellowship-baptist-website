import styles from "./ContactMessageSection.module.css";
import {type SubmitEvent, useState, useEffect} from "react";

export default function ContactMessageSection() {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const [result, setResult] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!result?.success) return;

        const timeoutId = window.setTimeout(() => {
            setResult(null);
        }, 5000);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [result]);

    const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isSubmitting) return;

        const form = event.currentTarget;
        const messageField = form.elements.namedItem("message") as HTMLTextAreaElement;

        if (!messageField.value.trim()) {
            messageField.setCustomValidity("Please enter a message.");
            messageField.reportValidity();
            return;
        }

        messageField.setCustomValidity("");

        const formData = new FormData(form);
        formData.append("access_key", accessKey);

        setIsSubmitting(true);
        setResult(null);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            const data = await response.json();

            setResult({
                "success": data.success,
                "message": data.success ? "Message sent successfully" : "Message failed to send",
            });

            if (data.success) {
                form.reset();
            }
        } catch {
            setResult({
                success: false,
                message: "Unable to send your message. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={`${styles.message}`}>
            <div className={`${styles.content}`}>

                <form
                    className={styles.form}
                    onSubmit={onSubmit}
                >
                    <input
                        type="checkbox"
                        name="botcheck"
                        style={{display: "none"}}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className={styles.field}>
                        <label className={`text-eyebrow ${styles.label}`} htmlFor="name">
                            Full name
                        </label>

                        <input
                            className={`text-body ${styles.input}`}
                            required
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={`text-eyebrow ${styles.label}`} htmlFor="email">
                            Email
                        </label>

                        <input
                            className={`text-body ${styles.input}`}
                            required
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={`text-eyebrow ${styles.label}`} htmlFor="subject">
                            Subject
                        </label>

                        <input
                            className={`text-body ${styles.input}`}
                            required
                            id="subject"
                            name="subject"
                            type="text"
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={`text-eyebrow ${styles.label}`} htmlFor="message">
                            Message
                        </label>

                        <textarea
                            className={`text-body ${styles.textarea}`}
                            onInput={(event) => event.currentTarget.setCustomValidity("")}
                            required
                            id="message"
                            name="message"
                        />
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={`text-action ${styles.submit}`}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>

                        <p
                            className={`text-action ${styles.result} ${result && !result.success ? styles["result-error"] : ""}`}
                            role="status"
                            aria-atomic="true"
                        >
                            {result?.message ?? ""}
                        </p>
                    </div>
                </form>


            </div>
        </section>
    )
}