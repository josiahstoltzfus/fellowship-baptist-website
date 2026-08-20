import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import FeaturedTeaching from "./components/FeaturedTeaching.tsx";
import TeachingArchive from "./components/TeachingArchive.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";

export default function SermonsPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Sermons and Teaching"
                title="Teaching from God's Word."
                description="Expore sermons and resources intended to point people to Christ and help believers grow through Scripture."
            />
            <FeaturedTeaching/>
            <TeachingArchive/>
            <PageConclusion
                eyebrow="Continue studying"
                heading="Additional Resources"
                description="Explore books, devotionals, study tools, printed material, and other resources recommended by Fellowship Baptist."
                href="/resources/recommended"
                actionLabel="Recommended resources"
            />
        </>
    )
}