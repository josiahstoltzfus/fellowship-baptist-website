import HomeHero from "./components/HomeHero.tsx";
import FeaturedTeaching from "./components/FeaturedTeaching.tsx";
import GatheringInformation from "../../components/content/GatheringInformation/GatheringInformation.tsx";
import ExploreFellowship from "./components/ExploreFellowship.tsx";
import TextSection from "../../components/content/TextSection/TextSection.tsx";

export default function HomePage() {
    return (
        <>
            <HomeHero/>
            <FeaturedTeaching/>
            <GatheringInformation/>
            <TextSection
                eyebrow="A Friendly Family of Believers."
                heading="We seek Christ together."
                description="Our church is a place where believers worship and trust God together, encouraging and praying for one another as we seek His presence and grace. Through His Word, we desire to grow as doers of the Word and depend on His leading in every situation we face."
                scripture={{
                    text: "When thou saidst, Seek ye my face; my heart said unto thee, Thy face, Lord, will I seek.",
                    reference: "Psalm 27:8",
                }}
                surface="reflective"
            >
            </TextSection>
            <ExploreFellowship/>
        </>
    )
}