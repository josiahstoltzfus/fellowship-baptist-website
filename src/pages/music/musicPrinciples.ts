export type MusicPrinciple = {
    id: string;
    title: string;
    paragraphs: string[];
    scriptureReferences?: string[];
}

export const musicPrinciples: MusicPrinciple[] = [
    {
        id: "purpose",
        title: "The Purpose of Music",
        paragraphs: [
            "Approved content explaining what music is intended to accomplish in Christian worship."
        ],
    },
    {
        id: "content",
        title: "The Content We Sing",
        paragraphs: [
            "Approved content addressing the words, doctrine, and biblical truth expressed through music."
        ],
    },
    {
        id: "congregational-worship",
        title: "Congregational Worship",
        paragraphs: [
            "Approved content explaining the congregation’s role in singing and worship."
        ],
    },
    {
        id: "musical-practice",
        title: "Musical Practice",
        paragraphs: [
            "Approved content describing the church’s practical convictions and normal worship practice."
        ],
    }
];