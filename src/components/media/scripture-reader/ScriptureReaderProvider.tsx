import {ScriptureReaderContext} from "./ScriptureReaderContext";
import {type ReactNode, useState, useRef} from "react";
import type {ScriptureReference} from "../../content/Scripture/scriptureTypes.ts";

type ScriptureReaderProviderProps = {
    children: ReactNode
}

export default function ScriptureReaderProvider({children}: ScriptureReaderProviderProps) {
    const [activeReference, setActiveReference] = useState<ScriptureReference | null>(null);
    const isReaderOpen = activeReference !== null;
    const [isMinimized, setIsMinimized] = useState(false);
    const [focusRequest, setFocusRequest] = useState(0);
    const triggerRef = useRef<HTMLElement | null>(null);

    function closeReader() {
        setActiveReference(null);
        setIsMinimized(false);

        triggerRef.current?.focus();
    }

    function openReference(reference: ScriptureReference) {
        if (document.activeElement instanceof HTMLElement) {
            triggerRef.current = document.activeElement;
        }

        if (
            isReaderOpen &&
            !isMinimized &&
            activeReference?.reference === reference.reference
        ) {
            setFocusRequest((current) => current + 1);
            return;
        }

        setIsMinimized(false);
        setActiveReference(reference);
    }

    function minimizeReader() {
        setIsMinimized(true);
        triggerRef.current?.focus();
    }

    function restoreReader() {
        setIsMinimized(false);
        setFocusRequest((current) => current + 1);
    }

    function focusTrigger() {
        triggerRef.current?.focus();
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
                focusRequest,
                focusTrigger,
            }}
        >
            {children}
        </ScriptureReaderContext.Provider>
    )
}