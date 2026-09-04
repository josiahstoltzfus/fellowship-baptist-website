import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import TeachingArchive from "./components/TeachingArchive.tsx";

export default function SermonsPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Sermons and Teaching"
                title="Teaching from God's Word."
                description="Expore sermons and resources intended to point people to Christ and help believers grow through Scripture."
            />
            <TeachingArchive/>
        </>
    )
}