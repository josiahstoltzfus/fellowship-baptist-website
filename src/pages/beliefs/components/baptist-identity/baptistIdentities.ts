export type scriptureReference = {
    reference: string;
    text: string;
}

export type BaptistIdentity = {
    letter: string;
    title: string;
    paragraphs: string[];
    scripturePassage: scriptureReference[];
    scriptureReferences?: string[];
}

export const baptistIdentities: BaptistIdentity[] = [
    {
        letter: "B",
        title: "Bible Authority",
        paragraphs: [
            "The Bible is our authority in all matters of faith and practice."
        ],
        scripturePassage: [{
            reference: "2 Timothy 3:16",
            text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:"
        }],
        scriptureReferences: [
            "John 17:17",
            "Acts 17:11",
            "Hebrews 4:12",
            "2 Peter 1:20-21",
        ]
    },
    {
        letter: "A",
        title: "Autonomy of the Local Church",
        paragraphs: [
            "Our church is self-supporting and self-governing under the headship of Jesus Christ, free from denominational hierarchy."
        ],
        scripturePassage: [{
            reference: "Colossians 1:18",
            text: "And he is the head of the body, the church: who is the beginning, the firstborn from the dead; that in all things he might have the preeminence.",
        }],
        scriptureReferences: [
            "Acts 20:19-30",
            "Ephesians 1:22-23",
        ],
    },
    {
        letter: "P",
        title: "Priesthood of Believers",
        paragraphs: [
            "Every believer has an equal and instant access to God.",
        ],
        scripturePassage: [{
            reference: "Hebrews 4:14-16",
            text: "14 Seeing then that we have a great high priest, that is passed into the heavens, Jesus the Son of God, let us hold fast our profession. For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin. Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need."
        }],
        scriptureReferences: [
            "1 Timothy 2:5-6",
            "1 Peter 2:5-10",
        ],
    },
    {
        letter: "T",
        title: "Two Officers",
        paragraphs: [
            "The two offices within the church are pastor and deacons.",
        ],
        scripturePassage: [{
            reference: "Philippians 1:1",
            text: "Paul and Timotheus, the servants of Jesus Christ, to all the saints in Christ Jesus which are at Philippi, with the bishops and deacons:",
        }],
        scriptureReferences: [
            "Acts 6:1-7",
            "1 Timothy 3:1-13",
            "Titus 1:6-9",
            "1 Peter 5:1-4",
        ]
    },
    {
        letter: "I",
        title: "Individual Soul Liberty",
        paragraphs: [
            "Every man and woman must choose personally to come to Christ for salvation.",
        ],
        scripturePassage: [{
            reference: "Romans 14:12",
            text: "So then everyone of us shall give account of himself to God.",
        }],
        scriptureReferences: [
            "John 3:7,16,38",
            "Romans 10:9-17; 14:1-23"
        ]
    },
    {
        letter: "S",
        title: "Saved Church Membership",
        paragraphs: [
            "Our church is composed of members who have been saved and baptized, uniting for the purposes of worship, fellowship, and service.",
        ],
        scripturePassage: [{
            reference: "Acts 2:41-42",
            text: "Then they that gladly received his word were baptized: and the same day there were added unto them about three thousand souls. And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers."
        }],
        scriptureReferences: [
            "Galatians 4:5-6",
            "Ephesians 2:19-20",
            "1 Timothy 3:14-15",
        ]
    },
    {
        letter: "T",
        title: "Two Ordinances",
        paragraphs: [
            "Baptism and the Lord’s Table do not provide salvation; they picture what Christ has done for us.",
        ],
        scripturePassage: [
            {
                reference: "Matthew 28:19-20",
                text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.",
            },
            {
                reference: "1 Corinthians 11:23-26",
                text: "For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread: \n" +
                    "And when he had given thanks, he brake it, and said, Take, eat: this is my body, which is broken for you: this do in remembrance of me. \n" +
                    "After the same manner also he took the cup, when he had supped, saying, This cup is the new testament in my blood: this do ye, as oft as ye drink it, in remembrance of me. \n" +
                    "For as often as ye eat this bread, and drink this cup, ye do shew the Lord's death till he come. \n"
            }
        ],
        scriptureReferences: [
            "Acts 2:38-43; 8:36-38",
            "Romans 6:1-6",
        ]
    },
    {
        letter: "S",
        title: "Separation of Church and State",
        paragraphs: [
            "The state should have no power to intervene in the free expression of religious liberty.",
        ],
        scripturePassage: [
            {
                reference: "Matthew 22:21",
                text: "They say unto him, Caesar's. Then saith he unto them, Render therefore unot Caesar the things which are Caesar's; and unto God the things that are God's."
            }
        ],
        scriptureReferences: [
            "Acts 5:29-31",
            "Romans 13:1-4",
        ]
    }
]