import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import ImageTextSection from "../../components/content/ImageTextSection/ImageTextSection.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import TextSection from "../../components/content/TextSection/TextSection.tsx";

export default function MeetThePastorPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="About Fellowship"
                title="Meet the Pastor."
                description="Meet the pastor who serves Fellowship Baptist through the faithful teaching of God’s Word and care for its congregation."/>

            <ImageTextSection
                eyebrow="Pastor of Fellowship Baptist"
                heading="Pastor [Full Name]"
                imageAlt="Pastor Portrait"
                imagePosition="left">
                <p className="text-body">An approved biography can introduce the pastor’s calling, ministry background, and relationship with Fellowship Baptist.</p>
                <p className="text-body">A second paragraph can describe his approach to preaching and pastoral ministry, along with his desire for people to grow closer to Christ through God’s Word.</p>
            </ImageTextSection>

            <TextSection
                eyebrow="A Word of Welcome"
                heading="A brief personal welcome from the pastor can appear here if he would like to address visitors in his own words."
                description="This should use the pastor’s approved wording rather than a message written on his behalf."
                surface="reflective"
            />

            <PageConclusion
                eyebrow="continue"
                heading="Hear the teaching of God's Word."
                description="Become familiar with the pastor's ministry through sermons and teaching from Fellowship Baptist."
                href="/sermons"
                actionLabel="Explore Sermons"/>

        </>
    )
}
/*
    eyebrow?: string;
    heading: string;
    description: string;
    href: string;
    actionLabel: string;
 */