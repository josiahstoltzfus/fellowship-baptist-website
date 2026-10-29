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

export const replacementPrinciple: ReplacementPrinciple[] = [
    {
        scripture: {
            reference: "1 Timothy 6:11",
            verses: [
                {
                    number: 11,
                    text: "But thou, O man of God, flee these things; and follow after righteousness, godliness, faith, love, patience, meekness.",
                }
            ]
        },
        putAway: "Flee",
        putOn: "Follow"
    },
    {
        scripture: {
            reference: "James 3:15-17",
            verses: [
                {
                    number: 15,
                    text: "This wisdom descendeth not from above, but is earthly, sensual, devilish.",
                },
                {
                    number: 16,
                    text: "For where envying and strife is, there is confusion and every evil work.",
                },
                {
                    number: 17,
                    text: "But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy.",
                }
            ]
        },
        putAway: "Worldly wisdom",
        putOn: "Godly wisdom",
    },
    {
        scripture: {
            reference: "Galatians 5:19-23",
            verses: [
                {
                    number: 19,
                    text: "Now the works of the flesh are manifest, which are these; Adultery, fornication, uncleanness, lasciviousness,",
                },
                {
                    number: 20,
                    text: "Idolatry, witchcraft, hatred, variance, emulations, wrath, strife, seditions, heresies,",
                },
                {
                    number: 21,
                    text: "Envyings, murders, drunkenness, revellings, and such like: of the which I tell you before, as I have also told you in time past, that they which do such things shall not inherit the kingdom of God.",
                },
                {
                    number: 22,
                    text: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,",
                },
                {
                    number: 23,
                    text: "Meekness, temperance: against such there is no law.",
                }
            ]
        },
        putAway: "Works of the flesh",
        putOn: "Fruit of the Holy Spirit",
    },
    {
        scripture: {
            reference: "Colossians 3:5-14",
            verses: [
                {
                    number: 5,
                    text: "Mortify therefore your members which are upon the earth; fornication, uncleanness, inordinate affection, evil concupiscence, and covetousness, which is idolatry:",
                },
                {
                    number: 6,
                    text: "For which things' sake the wrath of God cometh on the children of disobedience:",
                },
                {
                    number: 7,
                    text: "In the which ye also walked some time, when ye lived in them.",
                },
                {
                    number: 8,
                    text: "But now ye also put off all these; anger, wrath, malice, blasphemy, filthy communication out of your mouth.",
                },
                {
                    number: 9,
                    text: "Lie not one to another, seeing that ye have put off the old man with his deeds;",
                },
                {
                    number: 10,
                    text: "And have put on the new man, which is renewed in knowledge after the image of him that created him:",
                },
                {
                    number: 11,
                    text: "Where there is neither Greek nor Jew, circumcision nor uncircumcision, Barbarian, Scythian, bond nor free: but Christ is all, and in all.",
                },
                {
                    number: 12,
                    text: "Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering;",
                },
                {
                    number: 13,
                    text: "Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye.",
                },
                {
                    number: 14,
                    text: "And above all these things put on charity, which is the bond of perfectness.",
                }
            ]
        },
        putAway: "Put off",
        putOn: "Put on",
    },
    {
        scripture: {
            reference: "Ephesians 4:22-26",
            verses: [
                {
                    number: 22,
                    text: "That ye put off concerning the former conversation the old man, which is corrupt according to the deceitful lusts;",
                },
                {
                    number: 23,
                    text: "And be renewed in the spirit of your mind;",
                },
                {
                    number: 24,
                    text: "And that ye put on the new man, which after God is created in righteousness and true holiness.",
                },
                {
                    number: 25,
                    text: "Wherefore putting away lying, speak every man truth with his neighbour: for we are members one of another.",
                },
                {
                    number: 26,
                    text: "Be ye angry, and sin not: let not the sun go down upon your wrath:",
                }
            ]
        },
        putAway: "Put off",
        putOn: "Put on",
    },
    {
        scripture: {
            reference: "1 Peter 2:1-2",
            verses: [
                {
                    number: 1,
                    text: "Wherefore laying aside all malice, and all guile, and hypocrisies, and envies, and all evil speakings,",
                },
                {
                    number: 2,
                    text: "As newborn babes, desire the sincere milk of the word, that ye may grow thereby:",
                }
            ]
        },
        putAway: "Lay aside",
        putOn: "Desire",
    },
    {
        scripture: {
            reference: "1 Peter 2:11-13",
            verses: [
                {
                    number: 11,
                    text: "Dearly beloved, I beseech you as strangers and pilgrims, abstain from fleshly lusts, which war against the soul;",
                },
                {
                    number: 12,
                    text: "Having your conversation honest among the Gentiles: that, whereas they speak against you as evildoers, they may by your good works, which they shall behold, glorify God in the day of visitation.",
                },
                {
                    number: 13,
                    text: "Submit yourselves to every ordinance of man for the Lord's sake: whether it be to the king, as supreme;",
                }
            ]
        },
        putAway: "Abstain",
        putOn: "Submit",
    },
]