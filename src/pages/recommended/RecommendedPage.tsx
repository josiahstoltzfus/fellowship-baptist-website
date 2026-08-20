import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import FeaturedResource from "./components/FeaturedResource.tsx";
import ResourceLibrary from "./components/ResourceLibrary.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";

export default function RecommendedPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Recommended Resources"
                title="Read, study, and grow."
                description="A curated library of books, devotionals, study tools, and trusted resources recommended by Fellowship Baptist."/>
            <FeaturedResource/>
            <ResourceLibrary/>
            <PageConclusion
                eyebrow="Continue Exploring"
                heading="Continue with sermons and teaching."
                description="Explore messages and teaching resources from Fellowship Baptist."
                actionLabel="Sermons & Teaching"
                href="/resources/sermons-and-teaching"/>
        </>
    )
}