import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import GivingMethods from "./components/GivingMethods.tsx";

export default function GivePage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Supporting the Ministry"
                title="Giving."
                description="A clear, secure way to support the work and ministry of Fellowship Baptist."
                spacing="connected"
            />
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