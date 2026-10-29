import styles from "./GivePage.module.css";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import GivingMethods from "./components/GivingMethods.tsx";
import ActionLink from "../../components/actions/ActionLink.tsx";

export default function GivePage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Supporting the Ministry"
                title="Giving."
                description="A clear, secure way to support the work and ministry of Fellowship Baptist.">
                <ActionLink href="..." external={true}>Continue to secure giving</ActionLink>
                <p className={`${styles.disclaimer} text-body-small`}>Giving is handled by the church's approved provider.
                    Fellowship Baptist does not collect or store your
                    payment information.</p>
            </PageIntroduction>
            <GivingMethods/>
            <PageConclusion
                eyebrow="Questions"
                heading="Questions about giving?"
                description="If you have questions about giving, please contact the church."
                href="/contact"
                actionLabel="Contact the Church"
            />
        </>
    )
}