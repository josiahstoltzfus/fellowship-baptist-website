import {ScriptureReaderContext} from "./ScriptureReaderContext";
import {type ReactNode, useState} from "react";
import type {ScriptureReference} from "../../content/Scripture/scriptureTypes.ts";

type ScriptureReaderProviderProps = {
    children: ReactNode
}

export default function ScriptureReaderProvider({children}: ScriptureReaderProviderProps) {
    const [activeReference, setActiveReference] = useState<ScriptureReference | null>(null);
    const [openReferences, setOpenReferences] = useState<ScriptureReference[]>([]);
    const isReaderOpen = activeReference !== null;
    const [isMinimized, setIsMinimized] = useState(false);

    function closeReader() {
        setActiveReference(null);
        setOpenReferences([]);
        setIsMinimized(false);
    }

    function openReference(reference: ScriptureReference) {
        setIsMinimized(false);

        setOpenReferences((prev) => {
            const isAlreadyOpen = prev.some((ref) => ref === reference);

            if (isAlreadyOpen) return prev;

            return [...prev, reference]
        });

        setActiveReference(reference);
    }

    function selectReference(reference: ScriptureReference) {
        setActiveReference(reference);
    }

    function closeReference(reference: ScriptureReference) {
        const closingIndex = openReferences.findIndex((ref) => ref.reference === reference.reference);

        const remainingReferences = openReferences.filter((openRef) => openRef.reference !== reference.reference);

        setOpenReferences(remainingReferences);

        const isClosingActiveReference = activeReference?.reference === reference.reference;

        if (!isClosingActiveReference) {
            return;
        }

        const nextReference =
            remainingReferences[closingIndex] ??
            remainingReferences[closingIndex - 1] ??
            null;

        setActiveReference(nextReference);
    }

    function minimizeReader() {
        setIsMinimized(true);
    }

    function restoreReader() {
        setIsMinimized(false);
    }

    return (
        <ScriptureReaderContext.Provider
            value={{
                activeReference,
                isReaderOpen,
                openReferences,
                isMinimized,
                minimizeReader,
                restoreReader,
                openReference,
                selectReference,
                closeReference,
                closeReader,
            }}
        >
            {children}
        </ScriptureReaderContext.Provider>
    )
}