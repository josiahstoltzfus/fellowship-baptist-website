import {ScriptureReaderContext} from "./ScriptureReaderContext";
import {type ReactNode, useState} from "react";
import type {ScriptureReference} from "../../content/Scripture/scriptureTypes.ts";

type ScriptureReaderProviderProps = {
    children: ReactNode
}

export default function ScriptureReaderProvider({children}: ScriptureReaderProviderProps) {
    const [activeReference, setActiveReference] = useState<ScriptureReference | null>(null);
    const isReaderOpen = activeReference !== null;
    const [isMinimized, setIsMinimized] = useState(false);

    function closeReader() {
        setActiveReference(null);
        setIsMinimized(false);
    }

    function openReference(reference: ScriptureReference) {
        setIsMinimized(false);
        setActiveReference(reference);
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
                isMinimized,
                openReference,
                minimizeReader,
                restoreReader,
                closeReader,
            }}
        >
            {children}
        </ScriptureReaderContext.Provider>
    )
}