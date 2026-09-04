import type {ScriptureReference} from "../../components/content/Scripture/scriptureTypes.ts";
import versesAudio from "../../assets/audio/teachings/155-verses-new-testament.mp3";
import oneDayAtATime from "../../assets/audio/sermons/one-day-at-a-time.mp3";
import theDifferenceHopeMakes from "../../assets/audio/sermons/the-difference-hope-makes.mp3";

export function formatTime(totalSeconds: number) {
    if (!Number.isFinite(totalSeconds)) {
        return "0:00";
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export type AudioMessage = {
    id: string;
    title: string;
    kind: "sermon" | "teaching";
    speaker: string;
    scripture?: ScriptureReference;
    durationSeconds: number;
    audioUrl: string;
    downloadFileName?: string;
}

export const sermons: AudioMessage[] = [
    {
        id: "155-verses-new-testament",
        title: "155 Verses in the New Testament",
        kind: "teaching",
        speaker: "Pastor Jack Boyer",
        durationSeconds: 4150,
        audioUrl: versesAudio,
        downloadFileName: "155-verses-new-testament.mp3"
    },
    {
        id: "one-day-at-a-time",
        title: "One Day at a Time",
        kind: "sermon",
        speaker: "Pastor Jack Boyer",
        durationSeconds: 2574,
        audioUrl: oneDayAtATime,
        downloadFileName: "one-day-at-a-time.mp3"
    },
    {
        id: "the-difference-hope-makes",
        title: "The Difference Hope Makes",
        kind: "sermon",
        speaker: "Pastor Jack Boyer",
        durationSeconds: 2047,
        audioUrl: theDifferenceHopeMakes,
        downloadFileName: "the-difference-hope-makes.mp3"
    }
];

export const featuredTeaching: AudioMessage = sermons[0];