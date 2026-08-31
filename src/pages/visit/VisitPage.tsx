import VisitExpectations from "./components/VisitExpectations.tsx";
import ArrivalInformation from "./components/ArrivalInformation.tsx";
import GatheringInformation from "../../components/content/GatheringInformation/GatheringInformation.tsx";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";

export default function VisitPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Visiting Fellowship"
                title="We invite you to come and see."
                description="He saith unto them, Come and see. They came and saw where he dwelt, and abode with him that day: for it was about the tenth hour."
                scripture="John 1:39"
            />
            <GatheringInformation />
            <VisitExpectations />
            <ArrivalInformation />
            <PageConclusion
                heading="Still have a question?"
                description="We’ll make it easy to contact the church before your visit. Public phone and email details will be added once supplied."
                actionLabel="Contact Us"
                href="/contact"
            />
        </>
    )
}