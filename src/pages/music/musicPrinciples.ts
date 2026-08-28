export type MusicPrinciple = {
    id: string;
    title: string;
    paragraphs: string[];
    scriptureReferences?: string[];
}

export const musicPrinciples: MusicPrinciple[] = [
    {
        id: "purpose",
        title: "The Principle of Replacement",
        paragraphs: [
            "Approved content explaining what music is intended to accomplish in Christian worship."
        ],
    },
    {
        id: "content",
        title: "The Principle of Rejoicing",
        paragraphs: [
            "Approved content addressing the words, doctrine, and biblical truth expressed through music."
        ],
    },
    {
        id: "congregational-worship",
        title: "The Principle of Righteousness",
        paragraphs: [
            "Approved content explaining the congregation’s role in singing and worship."
        ],
    },
];