import type {ScriptureReference} from "../../content/Scripture/scriptureTypes.ts";
import {createContext} from "react";

export type ScriptureReaderContextValue = {
    activeReference: ScriptureReference | null;
    openReference: (reference: ScriptureReference) => void;
    isReaderOpen: boolean;
    isMinimized: boolean;
    minimizeReader: () => void;
    restoreReader: () => void;
    closeReader: () => void;
}

export const ScriptureReaderContext =
    createContext<ScriptureReaderContextValue | undefined>(undefined);