import type {ScriptureReference} from "../../components/content/Scripture/scriptureTypes.ts"

type RighteousnessPrinciple = {
    number: string;
    title: string;
    text: string;
    references: ScriptureReference[];
}

export type ReplacementPrinciple = {
    scripture: ScriptureReference;
    putAway: string;
    putOn: string;
}

export const newCreationScripture: ScriptureReference = {
    reference: "2 Corinthians 5:17",
    verses: [
        {
            number: 17,
            text: "Old things are passed away; behold, all things are become new."
        }
    ]
};

export const rejoicingPrinciple: ScriptureReference[] = [
    {
        reference: "Psalm 96:1-2",
        verses: [
            {
                number: 1,
                text: "O sing unto the Lord a new song: sing unto the Lord, all the earth.",
            },
            {
                number: 2,
                text: "Sing unto the Lord, bless his name; shew forth his salvation from day to day.",
            }
        ]
    },
    {
        reference: "Psalm 30:4",
        verses: [
            {
                number: 4,
                text: "Sing unto the Lord, O ye saints of his, and give thanks at the remembrance of his holiness.",
            }
        ]
    },
    {
        reference: "Psalm 66:2",
        verses: [
            {
                number: 2,
                text: "Sing forth the honour of his name: make his praise glorious.",
            }
        ]
    },
    {
        reference: "Psalm 89:1",
        verses: [
            {
                number: 1,
                text: "I will sing of the mercies of the Lord for ever: with my mouth will I make known thy faithfulness to all generations.",
            }
        ]
    },
];

export const righteousnessPrinciple: RighteousnessPrinciple[] = [
    {
        number: "01",
        title: "Worship & fellowship",
        text: "Singing directs the church toward the Lord and joins believers in grateful praise.",
        references: [
            {
                reference: "Ephesians 5:19-20",
                verses: [
                    {
                        number: 19,
                        text: "Speaking to yourselves in psalms and hymns and spiritual songs, singing and making melody in your heart to the Lord;",
                    },
                    {
                        number: 20,
                        text: "Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ;",
                    }
                ]
            }
        ]
    },
    {
        number: "02",
        title: "Teaching & training",
        text: "Biblical songs place truth in the heart, teaching and admonishing the congregation.",
        references: [
            {
                reference: "Colossians 3:16",
                verses: [
                    {
                        number: 16,
                        text: "Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.",
                    }
                ]
            }
        ]
    },
    {
        number: "03",
        title: "Evangelism",
        text: "Faithful music bears witness to the hope of Christ before those who hear.",
        references: [
            {
                reference: "Acts 16:25",
                verses: [
                    {
                        number: 25,
                        text: "And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them.",
                    }
                ]
            }
        ]
    }
]
