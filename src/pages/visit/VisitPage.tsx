import VisitExpectations from "./components/VisitExpectations.tsx";
import ArrivalInformation from "./components/ArrivalInformation.tsx";
import GatheringInformation from "../../components/church/GatheringInformation/GatheringInformation.tsx";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";

export default function VisitPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Before Sunday"
                title="Plan your visit."
                description="Everything you need to know before joining us for worship in Fountain Inn."/>
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