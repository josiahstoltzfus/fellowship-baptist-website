import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import OnlineGivingSection from "./components/OnlineGivingSection.tsx";
import GivingMethods from "./components/GivingMethods.tsx";

export default function GivePage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Supporting the Ministry"
                title="Giving."
                description="A clear, secure way to support the work and ministry of Fellowship Baptist."
            />
            <OnlineGivingSection/>
            <GivingMethods/>
            <PageConclusion
                eyebrow="Questions"
                heading="Questions about giving?"
                description="Contact the church directly for help before making a gift."
                href="/contact"
                actionLabel="Contact the Church"
            />
        </>
    )
}