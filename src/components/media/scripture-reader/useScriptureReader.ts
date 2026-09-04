import {useContext} from "react";
import {ScriptureReaderContext} from "./ScriptureReaderContext.ts";

export function useScriptureReader() {
    const scriptureReader = useContext(ScriptureReaderContext);

    if (scriptureReader === undefined) {
        throw new Error("useScriptureReader must be used within a ScriptureReaderProvider");
    }

    return scriptureReader;
}