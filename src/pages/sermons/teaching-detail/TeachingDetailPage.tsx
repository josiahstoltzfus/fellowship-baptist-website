import TeachingHeader from "./components/TeachingHeader.tsx";
import PageConclusion from "../../../components/content/PageConclusion/PageConclusion.tsx";
import TeachingArticle from "./components/TeachingArticle.tsx";
import TeachingResourcesMedia from "./components/TeachingResourcesMedia.tsx";

export default function TeachingDetailPage() {
    return (
        <>
            <TeachingHeader/>
            <TeachingResourcesMedia/>
            <TeachingArticle/>
            <PageConclusion
                eyebrow="Continue Learning"
                heading="Return to sermons and teaching."
                description="The archive remains the single place to discover additional messages and resources."
                href="/sermons"
                actionLabel="View Teaching Archive"/>
        </>
    )
}