import {useContext} from "react";
import {AudioPlayerContext} from "./AudioPlayerContext.ts";

export function useAudioPlayer() {
    const audioPlayer = useContext(AudioPlayerContext);

    if (audioPlayer === undefined) {
        throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
    }

    return audioPlayer;
}