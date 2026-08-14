import HomeHero from "./components/HomeHero.tsx";
import HomeHighlights from "./components/HomeHighlights.tsx";
import GatheringInformation from "../../components/church/GatheringInformation/GatheringInformation.tsx";
import ChurchIntroduction from "./components/ChurchIntroduction.tsx";
import ExploreFellowship from "./components/ExploreFellowship.tsx";

export default function HomePage() {
    return(
        <>
            <HomeHero />
            <HomeHighlights />
            <GatheringInformation />
            <ChurchIntroduction/>
            <ExploreFellowship/>
        </>
    )
}