import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import ImageTextSection from "../../components/content/ImageTextSection/ImageTextSection.tsx";

export default function OurStoryPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="About Fellowship"
                title="Our story."
                description="How Fellowship Baptist began, the convictions that shaped it, and the purpose it continues to pursue today."/>

            <ImageTextSection
                eyebrow="Our Beginning"
                heading="Rooted in God’s Word"
                imageAlt="Historical Photograph"
                imagePosition="left"
                surface="base">
                <p className="text-body">The pastor’s approved history will explain when and why the church began, the
                    people and convictions that shaped its early ministry, and the work it continues today.</p>
                <p className="text-body">Additional paragraphs may preserve meaningful milestones or memories if enough
                    material is supplied. This section should remain concise if the available history is brief.</p>
            </ImageTextSection>

            <ImageTextSection
                eyebrow="The Church's Origin"
                heading="Hear the story firsthand"
                imageAlt="Origin Recording / Poster Image"
                surface="reflective">
                <p className="text-body">If the existing origin recording is appropriate for publication, it can preserve the pastor’s voice and complement the written history without duplicating it.</p>
            </ImageTextSection>

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