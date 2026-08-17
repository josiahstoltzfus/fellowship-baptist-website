export type DoctrineArticle = {
    id: string;
    title: string;
    articleLabel: string;
    paragraphs: string[];
    scriptureReferences: string[];
};

export const doctrineArticles: DoctrineArticle[] = [
    {
        id: "scriptures",
        title: "The Scriptures",
        articleLabel: "Article I",
        paragraphs: [
            "We believe the Holy Scriptures were given by inspiration of God and are the trustworthy and authoritative Word of God. They reveal who God is, declare His work of redemption, and provide the final standard for Christian faith and conduct.",
            "We believe the Scriptures should be faithfully taught, carefully studied, and applied to every area of life. The church’s complete wording should identify the Bible translation it uses and clarify any additional convictions concerning inspiration, preservation, and authority."
        ],
        scriptureReferences: [
            "2 Timothy 3:16–17",
            "2 Peter 1:20–21",
            "Psalm 119:105",
            "John 17:17"
        ]
    },
    {
        id: "triune-god",
        title: "The Triune God",
        articleLabel: "Article II",
        paragraphs: [
            "We believe there is one true and living God, eternally existing in three persons: the Father, the Son, and the Holy Spirit. Each person is fully God, yet there is one God.",
            "God is holy, righteous, loving, all-knowing, all-powerful, and sovereign over all creation. He alone is worthy of worship, obedience, and praise."
        ],
        scriptureReferences: [
            "Deuteronomy 6:4",
            "Matthew 28:19",
            "2 Corinthians 13:14",
            "Isaiah 6:3"
        ]
    },
    {
        id: "jesus-christ",
        title: "Jesus Christ",
        articleLabel: "Article III",
        paragraphs: [
            "We believe Jesus Christ is the eternal Son of God. He became truly human without ceasing to be truly God, was conceived by the Holy Spirit, born of the virgin Mary, and lived a life without sin.",
            "We believe Christ willingly died on the cross for sinners, was buried, rose bodily from the dead, and ascended to the Father. He now intercedes for His people and will personally return in power and glory."
        ],
        scriptureReferences: [
            "John 1:1–14",
            "Matthew 1:18–23",
            "1 Corinthians 15:3–4",
            "Hebrews 4:14–15",
            "Acts 1:9–11"
        ]
    },
    {
        id: "holy-spirit",
        title: "The Holy Spirit",
        articleLabel: "Article IV",
        paragraphs: [
            "We believe the Holy Spirit is fully God and works in the world to convict people of sin, righteousness, and judgment. He gives new life to those who trust in Christ and dwells within every believer.",
            "The Holy Spirit guides believers into truth, produces spiritual fruit, gives strength for holy living, and equips the church for service. The church’s complete statement should clarify its convictions concerning spiritual gifts and the Spirit’s work in worship."
        ],
        scriptureReferences: [
            "John 14:16–17",
            "John 16:7–13",
            "Romans 8:9–14",
            "Galatians 5:22–23",
            "1 Corinthians 12:4–7"
        ]
    },
    {
        id: "humanity-and-sin",
        title: "Humanity and Sin",
        articleLabel: "Article V",
        paragraphs: [
            "We believe every person is created in the image of God and therefore possesses dignity and value. Humanity was created to know, glorify, and obey God.",
            "Through sin, humanity became separated from God and subject to guilt, corruption, and death. Every person is a sinner and is unable to restore a right relationship with God through personal effort or good works."
        ],
        scriptureReferences: [
            "Genesis 1:26–27",
            "Genesis 3:1–19",
            "Romans 3:10–12",
            "Romans 3:23",
            "Romans 6:23"
        ]
    },
    {
        id: "salvation",
        title: "Salvation",
        articleLabel: "Article VI",
        paragraphs: [
            "We believe salvation is the gracious gift of God, made possible through the death and resurrection of Jesus Christ. It cannot be earned through good works, religious observance, or personal merit.",
            "A person receives salvation through repentance toward God and faith in Jesus Christ. Those who trust in Christ are forgiven, declared righteous before God, given new life, and called to follow Him in faithful obedience."
        ],
        scriptureReferences: [
            "John 3:16",
            "Acts 4:12",
            "Acts 20:21",
            "Romans 5:1",
            "Romans 10:9–10",
            "Ephesians 2:8–10"
        ]
    },
    {
        id: "church",
        title: "The Church",
        articleLabel: "Article VII",
        paragraphs: [
            "We believe the church is composed of those who have been redeemed through faith in Jesus Christ. A local church is a gathered body of believers committed to biblical teaching, worship, fellowship, prayer, service, and the proclamation of the gospel.",
            "Jesus Christ is the head of the church. Under His authority, the church is called to make disciples, care for one another, preserve sound doctrine, and bear faithful witness in its community and throughout the world."
        ],
        scriptureReferences: [
            "Matthew 16:18",
            "Matthew 28:18–20",
            "Acts 2:41–47",
            "Ephesians 1:22–23",
            "Colossians 1:18",
            "Hebrews 10:24–25"
        ]
    },
    {
        id: "baptism-and-lords-supper",
        title: "Baptism and the Lord’s Supper",
        articleLabel: "Article VIII",
        paragraphs: [
            "We believe baptism and the Lord’s Supper were given by Jesus Christ to His church. They do not provide salvation, but visibly proclaim the gospel and express the believer’s identification with Christ.",
            "Baptism portrays the believer’s union with Christ in His death, burial, and resurrection. The Lord’s Supper remembers Christ’s sacrificial death and anticipates His return. The pastor should confirm the church’s practices concerning baptism, participation in Communion, and how frequently the Lord’s Supper is observed."
        ],
        scriptureReferences: [
            "Matthew 28:19–20",
            "Acts 2:41",
            "Romans 6:3–4",
            "1 Corinthians 11:23–26"
        ]
    },
    {
        id: "last-things",
        title: "Last Things",
        articleLabel: "Article IX",
        paragraphs: [
            "We believe Jesus Christ will personally return and bring God’s redemptive purposes to their appointed completion. The dead will be raised, and every person will stand before God in judgment.",
            "Those who belong to Christ will enter everlasting life in God’s presence, while those who remain separated from Him will face everlasting judgment. God will ultimately triumph over sin and death and establish the fullness of His righteous kingdom."
        ],
        scriptureReferences: [
            "John 5:28–29",
            "Acts 1:11",
            "1 Corinthians 15:51–57",
            "2 Corinthians 5:10",
            "Revelation 20:11–15",
            "Revelation 21:1–5"
        ]
    }
];