import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import MissionStatement from "./components/MissionStatement.tsx";
import DoctrineExplorer from "./components/doctrine-explorer/DoctrineExplorer.tsx";
import DoctrineAccordion from "./components/doctrine-accordion/DoctrineAccordion.tsx";
import BaptistIdentity from "./components/baptist-identity/BaptistIdentity.tsx";

export default function WhatWeBelievePage() {

    return (
        <>
            <PageIntroduction
                eyebrow="Statement of Faith"
                title="What we believe."
                description="All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction,
                for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works."
                scripture="2 Timothy 3:16-17"
                commentary="It has been well said, that doctrine tells us what is right, reproof tells us what is not right,
                correction tells us how to get right, and instruction tells us how to stay right."
            />

            <DoctrineExplorer />
            <DoctrineAccordion />
            <BaptistIdentity />
            <MissionStatement />
        </>


    )
}