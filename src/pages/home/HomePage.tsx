import HomeHero from "./components/HomeHero.tsx";
import HomeHighlights from "./components/HomeHighlights.tsx";
import GatheringInformation from "../../components/church/GatheringInformation/GatheringInformation.tsx";
import ExploreFellowship from "./components/ExploreFellowship.tsx";
import TextSection from "../../components/content/TextSection/TextSection.tsx";

export default function HomePage() {
    return(
        <>
            <HomeHero />
            <HomeHighlights />
            <GatheringInformation />
            <TextSection
                eyebrow="A Friendly Family of Believers."
                heading="Seeking Christ Together."
                description="Our church is a place where worshiping and trusting God together helps people stay close to the Lord ‒ with friends who will encourage and pray for them."
                alignment="center"
                surface="reflective"/>
            <ExploreFellowship/>
        </>
    )
}