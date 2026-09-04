import type {ScriptureReference} from "../../content/Scripture/scriptureTypes.ts";
import {createContext} from "react";

export type ScriptureReaderContextValue = {
    activeReference: ScriptureReference | null;
    openReferences: ScriptureReference[];
    isReaderOpen: boolean;
    isMinimized: boolean;
    minimizeReader: () => void;
    restoreReader: () => void;
    openReference: (reference: ScriptureReference) => void;
    selectReference: (reference: ScriptureReference) => void;
    closeReference: (reference: ScriptureReference) => void;
    closeReader: () => void;
}

export const ScriptureReaderContext =
    createContext<ScriptureReaderContextValue | undefined>(undefined);