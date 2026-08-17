import ContactMessageSection from "./components/ContactMessageSection.tsx";
import ContactLocation from "./components/ContactLocation.tsx";
import ContactMethods from "./components/ContactMethods.tsx";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";

export default function ContactPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Contact"
                title="We would be glad to hear from you."
                description="Contact Fellowship Baptist directly or send a general message using the form below."
            />
            <ContactMethods/>
            <ContactMessageSection/>
            <ContactLocation/>
        </>
    )
}