import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import MusicPrinciples from "./components/MusicPrinciples.tsx";
import WorshipPracticeOverview from "./components/WorshipPracticeOverview.tsx";
import MusicInPracticeFeature from "./components/MusicInPracticeFeature.tsx";

export default function ChurchMusicPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Our Worship"
                title="Music governed by conviction."
                description="The biblical principles and practical convictions that shape music at Fellowship Baptist."/>
            <MusicPrinciples/>
            <WorshipPracticeOverview/>
            <MusicInPracticeFeature/>
        </>
    )
}