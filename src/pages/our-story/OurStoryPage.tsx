import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import ImageTextSection from "../../components/content/ImageTextSection/ImageTextSection.tsx";

export default function OurStoryPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="About Fellowship"
                title="Our story."
                description="How Fellowship Baptist began, the convictions that shaped it, and the purpose it continues to pursue today."
            />

            <ImageTextSection
                eyebrow="Our Beginning"
                heading="How Fellowship Baptist Began"
                imageAlt="Historical Photograph"
                imagePosition="left"
                surface="base">
                <p className="text-body">Fellowship Baptist began as a daughter church of Calvary Baptist Church of Simpsonville. Pastor Guy Altizer asked me to pastor the new work. He is with the Lord now, but he was a great man and a great friend.</p>
                <p className="text-body">Today, Fellowship Baptist is a Fundamental Independent Baptist church that has been blessed with thirteen and a half acres of beautiful property.</p>
            </ImageTextSection>

            <ImageTextSection
                eyebrow="The Church's Origin"
                heading="Hear the Story Firsthand"
                imageAlt="Origin Recording / Poster Image"
                surface="reflective">
                <p className="text-body">The story of Fellowship Baptist is also a story of God’s provision. This video shares how the church began and how the Lord provided along the way.</p>
            </ImageTextSection>

            <PageConclusion
                eyebrow="Our Foundation"
                heading="Rooted in God's Word."
                description="Learn the biblical beliefs that guide Fellowship Baptist’s worship, teaching, and ministry."
                href="/about/what-we-believe"
                actionLabel="What we believe"
            />
        </>
    )
}