import VisitExpectations from "./components/VisitExpectations.tsx";
import GatheringInformation from "../../components/content/GatheringInformation/GatheringInformation.tsx";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import VisitDirections from "./components/VisitDirections.tsx";

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
            <VisitDirections/>
            <PageConclusion
                heading="Still have a question?"
                description="Have questions about your visit? We'd be glad to hear from you."
                actionLabel="Contact Us"
                href="/contact"
            />
        </>
    )
}