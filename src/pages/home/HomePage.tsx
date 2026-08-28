import styles from "./HomePage.module.css";
import HomeHero from "./components/HomeHero.tsx";
import HomeHighlights from "./components/HomeHighlights.tsx";
import GatheringInformation from "../../components/church/GatheringInformation/GatheringInformation.tsx";
import ExploreFellowship from "./components/ExploreFellowship.tsx";
import TextSection from "../../components/content/TextSection/TextSection.tsx";

export default function HomePage() {
    return (
        <>
            <HomeHero/>
            <HomeHighlights/>
            <GatheringInformation/>
            <TextSection
                eyebrow="A Friendly Family of Believers."
                heading="We seek Christ together."
                description="Our church is a place where worshiping and trusting God together
                            helps people stay close to the Lord, with friends who will encourage
                            and pray for them."
                scripture={{
                    text: "When thou saidst, Seek ye my face; my heart said unto thee, Thy face, LORD, will I seek.",
                    reference: "Psalm 27:8",
                }}
                surface="reflective"
            >
                <p className={`text-body ${styles.text}`}>
                    We seek the Lord for His presence and His grace to understand
                    God’s Word, so that we will be doers of the Word and not hearers only.
                </p>

                <p className={`text-body ${styles.text}`}>
                    We want to reinforce a consistent walk of faith that depends on the
                    Lord, always seeking His leading and grace for every situation we face.
                </p>
            </TextSection>
            <ExploreFellowship/>
        </>
    )
}