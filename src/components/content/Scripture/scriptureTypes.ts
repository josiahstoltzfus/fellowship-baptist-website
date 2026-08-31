export type ScriptureVerse = {
    number: number;
    text: string;
}

export type ScriptureReference = {
    reference: string;
    verses: ScriptureVerse[];
};