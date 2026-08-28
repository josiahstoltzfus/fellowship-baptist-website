import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import MusicPrinciples from "./components/MusicPrinciples.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";

export default function ChurchMusicPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Our Worship"
                title="Music in our worship."
                description="Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord."
                scripture="Colossians 3:16"
                commentary="Psalms are actually Scripture set to music. Hymns are musical praises that glorify the Lord written by believers. Spiritual songs are gospel songs testifying of personal experiences based on true theology. Christ must be exalted and not the artist."
            />
            <MusicPrinciples/>
            <PageConclusion
                eyebrow="Worship With Us"
                heading="Join us as we worship together."
                description="Find our service times, location, and practical details to help you prepare for your visit."
                href="/visit"
                actionLabel="Plan your visit"
            />
        </>
    )
}