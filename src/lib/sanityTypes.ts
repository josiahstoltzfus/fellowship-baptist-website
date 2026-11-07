type ScriptureReference = {
    book: string;
    startChapter: number;
    startVerse?: number;
    endChapter?: number;
    endVerse?: number;
};

export interface Message {
    _id: string;
    title: string;
    kind: "sermon" | "teaching";
    speakerName: string;
    scripture?: ScriptureReference;
    audioUrl?: string;
    durationSeconds?: number;
    downloadFileName?: string;
    videoUrl?: string;
}

export interface AudioMessage extends Message {
    audioUrl: string;
    durationSeconds: number;
}