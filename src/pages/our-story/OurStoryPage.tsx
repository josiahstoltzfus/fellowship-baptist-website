import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import ChurchBeginning from "./components/ChurchBeginning.tsx";
import OralHistory from "./components/OralHistory.tsx";

export default function OurStoryPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="About Fellowship"
                title="Our story."
                description="How Fellowship Baptist began, the convictions that shaped it, and the purpose it continues to pursue today."/>
            <ChurchBeginning/>
            <OralHistory/>
            <PageConclusion
                eyebrow="Continue"
                heading="The convictions that continue to guide us."
                description="Explore the beliefs that shape Fellowship Baptist's worship, teaching, and ministry today."
                actionLabel="What We Believe"
                href="/about/what-we-believe"
            />
        </>
    )
}