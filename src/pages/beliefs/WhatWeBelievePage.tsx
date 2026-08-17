import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import MissionStatement from "./components/MissionStatement.tsx";
import DoctrineExplorer from "./components/DoctrineExplorer.tsx";
import DoctrineAccordion from "./components/DoctrineAccordion.tsx";

export default function WhatWeBelievePage() {
    return (
        <>
            <PageIntroduction
                eyebrow="Statement of Faith"
                title="What we believe."
                description="A clear account of the biblical doctrines held and taught by Fellowship Baptist."/>

            <DoctrineExplorer />
            <DoctrineAccordion />

            <MissionStatement />
        </>


    )
}