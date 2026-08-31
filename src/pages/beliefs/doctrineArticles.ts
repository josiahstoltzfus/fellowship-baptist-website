export type ScripturePassage = {
    reference: string;
    text: string;
}

import type {ScriptureReference} from "../../components/content/Scripture/scriptureTypes.ts"

export type DoctrineArticle = {
    id: string;
    title: string;
    articleLabel: string;
    paragraphs: string[];
    scripturePassages?: ScriptureReference[];
    supportingScriptures: ScriptureReference[];
};

export const doctrineArticles: DoctrineArticle[] = [
    {
        id: "inspiration-of-the-scriptures",
        title: "The Inspiration of the Scriptures",
        articleLabel: "Article I",
        paragraphs: [
            "The Bible is the inerrant, inspired Word of God.  We take a literal approach to our interpretation of the Scriptures. For reasons of unity with the Church and because of its textual reliability, we choose use the King James Version of the Bible."
        ],
        scripturePassages: [
            {
                reference: "2 Peter 1:20-21",
                verses: [
                    {
                        number: 20,
                        text: "Knowing this first, that no prophecy of the scripture is of any private interpretation.",
                    },
                    {
                        number: 21,
                        text: "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.",
                    },
                ]
            }
        ],
        supportingScriptures: [
            {
                reference: "Psalm 12:6-7",
                verses: [
                    {
                        number: 6,
                        text: "The words of the Lord are pure words: as silver tried in a furnace of earth, purified seven times."
                    },
                    {
                        number: 7,
                        text: "Thou shalt keep them, O Lord, thou shalt preserve them from this generation for ever."
                    }
                ]
            },
            {
                reference: "1 Thessalonians 2:13",
                verses: [
                    {
                        number: 13,
                        text: "For this cause also thank we God without ceasing, because, when ye received the word of God which ye heard of us, ye received it not as the word of men, but as it is in truth, the word of God, which effectually worketh also in you that believe.",
                    }
                ]
            },
            {
                reference: "2 Timothy 3:16-17",
                verses: [
                    {
                        number: 16,
                        text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:",
                    },
                    {
                        number: 17,
                        text: "That the man of God may be perfect, thoroughly furnished unto all good works.",
                    }
                ]
            }
        ]
    },
    {
        id: "god-head",
        title: "The Godhead",
        articleLabel: "Article II",
        paragraphs: [
            "God is a person, eternally existing, as a Trinity in unity: Father, Son, and Holy Spirit – three Persons and yet one God."
        ],
        scripturePassages: [
            {
                reference: "Deuteronomy 6:4",
                verses: [
                    {
                        number: 4,
                        text: "Hear, O Israel: The Lord our God is one Lord:",
                    }
                ]
            }
        ],
        supportingScriptures: [
            {
                reference: "Matthew 3:16-17",
                verses: [
                    {
                        number: 16,
                        text: "And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him:",
                    },
                    {
                        number: 17,
                        text: "And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.",
                    }
                ]
            },
            {
                reference: "1 Corinthians 8:6",
                verses: [
                    {
                        number: 6,
                        text: "But to us there is but one God, the Father, of whom are all things, and we in him; and one Lord Jesus Christ, by whom are all things, and we by him.",
                    }
                ]
            },
            {
                reference: "2 Corinthians 13:14",
                verses: [
                    {
                        number: 14,
                        text: "The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen",
                    }
                ]
            },
            {
                reference: "1 John 5:7",
                verses: [
                    {
                        number: 7,
                        text: "For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one.",
                    }
                ]
            }
        ]
    },
    {
        id: "diety-of-jesus-christ",
        title: "The Deity of Jesus Christ",
        articleLabel: "Article III",
        paragraphs: [
            "Jesus Christ, eternally existing, is the only begotten Son of God who became a sinless man to redeem us. He was born of a virgin and is true God and true man."
        ],
        scripturePassages: [
            {
                reference: "John 1:1-3",
                verses: [
                    {
                        number: 1,
                        text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
                    },
                    {
                        number: 2,
                        text: "The same was in the beginning with God.",
                    },
                    {
                        number: 3,
                        text: "All things were made by him; and without him was not any thing made that was made.",
                    }
                ]
            }
        ],
        supportingScriptures: [
            {
                reference: "Luke 1:30-35",
                verses: [
                    {
                        number: 30,
                        text: "And the angel said unto her, Fear not, Mary: for thou hast found favour with God.",
                    },
                    {
                        number: 31,
                        text: "And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name Jesus.",
                    },
                    {
                        number: 32,
                        text: "He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David:",
                    },
                    {
                        number: 33,
                        text: "And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.",
                    },
                    {
                        number: 34,
                        text: "Then said Mary unto the angel, How shall this be, seeing I know not a man?",
                    },
                    {
                        number: 35,
                        text: "And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.",
                    }
                ]
            },
            {
                reference: "Philippians 2:5-8",
                verses: [
                    {
                        number: 5,
                        text: "Let this mind be in you, which was also in Christ Jesus:",
                    },
                    {
                        number: 6,
                        text: "Who, being in the form of God, thought it not robbery to be equal with God:",
                    },
                    {
                        number: 7,
                        text: "But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men:",
                    },
                    {
                        number: 8,
                        text: "And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.",
                    }
                ]
            },
            {
                reference: "Colossians 1:15",
                verses: [
                    {
                        number: 15,
                        text: "Who is the image of the invisible God, the firstborn of every creature:",
                    }
                ]
            },
            {
                reference: "Hebrews 1:1-8",
                verses: [
                    {
                        number: 1,
                        text: "God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets,",
                    },
                    {
                        number: 2,
                        text: "Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds;",
                    },
                    {
                        number: 3,
                        text: "Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high:",
                    },
                    {
                        number: 4,
                        text: "Being made so much better than the angels, as he hath by inheritance obtained a more excellent name than they.",
                    },
                    {
                        number: 5,
                        text: "For unto which of the angels said he at any time, Thou art my Son, this day have I begotten thee? And again, I will be to him a Father, and he shall be to me a Son?",
                    },
                    {
                        number: 6,
                        text: "And again, when he bringeth in the firstbegotten into the world, he saith, And let all the angels of God worship him.",
                    },
                    {
                        number: 7,
                        text: "And of the angels he saith, Who maketh his angels spirits, and his ministers a flame of fire.",
                    },
                    {
                        number: 8,
                        text: "But unto the Son he saith, Thy throne, O God, is for ever and ever: a sceptre of righteousness is the sceptre of thy kingdom.",
                    }
                ]
            }
        ]
    },
    {
        id: "sacrifice-and-resurrection",
        title: "The Sacrifice and Resurrection of Christ",
        articleLabel: "Article IV",
        paragraphs: [
            "The Lord Jesus Christ suffered and died as a substitutionary payment for the sins of the whole world. He physically arose from the dead and then ascended into Heaven.",
        ],
        scripturePassages: [
            {
                reference: "1 Peter 3:18",
                verses: [
                    {
                        number: 18,
                        text: "For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God, being put to death in the flesh, but quickened by the Spirit:",
                    }
                ]
            }
        ],
        supportingScriptures: [
            {
                reference: "Romans 5:8-10",
                verses: [
                    {
                        number: 8,
                        text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
                    },
                    {
                        number: 9,
                        text: "Much more then, being now justified by his blood, we shall be saved from wrath through him.",
                    },
                    {
                        number: 10,
                        text: "For if, when we were enemies, we were reconciled to God by the death of his Son, much more, being reconciled, we shall be saved by his life.",
                    }
                ]
            },
            {
                reference: "2 Corinthians 5:21",
                verses: [
                    {
                        number: 21,
                        text: "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.",
                    }
                ]
            }
        ]
    },
    {
        id: "salvation-by-grace",
        title: "Salvation by Grace",
        articleLabel: "Article V",
        paragraphs: [
            "Salvation is found through faith in Jesus Christ, apart from works. Only by turning to Christ and trusting His sacrifice on the cross can a man be saved.  Once saved, our relationship with God is eternally secure.",
        ],
        scripturePassages: [
            {
                reference: "Ephesians 2:8-9",
                verses: [
                    {
                        number: 8,
                        text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:",
                    },
                    {
                        number: 9,
                        text: "Not of works, lest any man should boast.",
                    }
                ]
            }
        ],
        supportingScriptures: [
            {
                reference: "John 10:27-30",
                verses: [
                    {
                        number: 27,
                        text: "My sheep hear my voice, and I know them, and they follow me:",
                    },
                    {
                        number: 28,
                        text: "And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.",
                    },
                    {
                        number: 29,
                        text: "My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father's hand.",
                    },
                    {
                        number: 30,
                        text: "I and my Father are one.",
                    }
                ]
            },
            {
                reference: "Acts 16:31",
                verses: [
                    {
                        number: 31,
                        text: "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.",
                    }
                ]
            },
            {
                reference: "Romans 3:24-26",
                verses: [
                    {
                        number: 24,
                        text: "Being justified freely by his grace through the redemption that is in Christ Jesus:",
                    },
                    {
                        number: 25,
                        text: "Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God;",
                    },
                    {
                        number: 26,
                        text: "To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus.",
                    }
                ]
            },
            {
                reference: "Romans 10:9-13",
                verses: [
                    {
                        number: 9,
                        text: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
                    },
                    {
                        number: 10,
                        text: "For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.",
                    },
                    {
                        number: 11,
                        text: "For the scripture saith, Whosoever believeth on him shall not be ashamed.",
                    },
                    {
                        number: 12,
                        text: "For there is no difference between the Jew and the Greek: for the same Lord over all is rich unto all that call upon him.",
                    },
                    {
                        number: 13,
                        text: "For whosoever shall call upon the name of the Lord shall be saved.",
                    }
                ]
            },
            {
                reference: "Titus 3:5-6",
                verses: [
                    {
                        number: 5,
                        text: "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;",
                    },
                    {
                        number: 6,
                        text: "Which he shed on us abundantly through Jesus Christ our Saviour;",
                    }
                ]
            },
            {
                reference: "1 Peter 1:3-5",
                verses: [
                    {
                        number: 3,
                        text: "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead,",
                    },
                    {
                        number: 4,
                        text: "To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you,",
                    },
                    {
                        number: 5,
                        text: "Who are kept by the power of God through faith unto salvation ready to be revealed in the last time.",
                    }
                ]
            }
        ]
    },
    {
        id: "heaven-and-hell",
        title: "The Reality of Heaven and Hell",
        articleLabel: "Article VI",
        paragraphs: [
            "For the Christian, to be absent from the body is to be present with the Lord Jesus Christ in a literal place called Heaven.  Hell is also a real place, where those without Christ suffer separation from God.  Hell is a place of literal fire and torment.",
        ],
        scripturePassages: [
            {
                reference: "2 Corinthians 5:8",
                verses: [
                    {
                        number: 8,
                        text: "We are confident, I say, and willing rather to be absent from the body, and to be present with the Lord.",
                    }
                ]
            },
            {
                reference: "Revelation 20:14-15",
                verses: [
                    {
                        number: 14,
                        text: "And death and hell were cast into the lake of fire. This is the second death.",
                    },
                    {
                        number: 15,
                        text: "And whosoever was not found written in the book of life was cast into the lake of fire.",
                    }
                ]
            }
        ],
        supportingScriptures: [
            {
                reference: "Matthew 25:41-46",
                verses: [
                    {
                        number: 41,
                        text: "Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels:",
                    },
                    {
                        number: 42,
                        text: "For I was an hungred, and ye gave me no meat: I was thirsty, and ye gave me no drink:",
                    },
                    {
                        number: 43,
                        text: "I was a stranger, and ye took me not in: naked, and ye clothed me not: sick, and in prison, and ye visited me not.",
                    },
                    {
                        number: 44,
                        text: "Then shall they also answer him, saying, Lord, when saw we thee an hungred, or athirst, or a stranger, or naked, or sick, or in prison, and did not minister unto thee?",
                    },
                    {
                        number: 45,
                        text: "Then shall he answer them, saying, Verily I say unto you, Inasmuch as ye did it not to one of the least of these, ye did it not to me.",

                    },
                    {
                        number: 46,
                        text: "And these shall go away into everlasting punishment: but the righteous into life eternal.",
                    }
                ]
            },
            {
                reference: "Luke 16:19-26",
                verses: [
                    {
                        number: 19,
                        text: "There was a certain rich man, which was clothed in purple and fine linen, and fared sumptuously every day:",
                    },
                    {
                        number: 20,
                        text: "And there was a certain beggar named Lazarus, which was laid at his gate, full of sores,",
                    },
                    {
                        number: 21,
                        text: "And desiring to be fed with the crumbs which fell from the rich man's table: moreover the dogs came and licked his sores.",
                    },
                    {
                        number: 22,
                        text: "And it came to pass, that the beggar died, and was carried by the angels into Abraham's bosom: the rich man also died, and was buried;",
                    },
                    {
                        number: 23,
                        text: "And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom.",
                    },
                    {
                        number: 24,
                        text: "And he cried and said, Father Abraham, have mercy on me, and send Lazarus, that he may dip the tip of his finger in water, and cool my tongue; for I am tormented in this flame.",
                    },
                    {
                        number: 25,
                        text: "But Abraham said, Son, remember that thou in thy lifetime receivedst thy good things, and likewise Lazarus evil things: but now he is comforted, and thou art tormented.",
                    },
                    {
                        number: 26,
                        text: "And beside all this, between us and you there is a great gulf fixed: so that they which would pass from hence to you cannot; neither can they pass to us, that would come from thence.",
                    }
                ]
            },
            {
                reference: "Luke 23:43",
                verses: [
                    {
                        number: 43,
                        text: "And Jesus said unto him, Verily I say unto thee, Today shalt thou be with me in paradise.",
                    }
                ]
            },
            {
                reference: "John 14:1-6",
                verses: [
                    {
                        number: 1,
                        text: "Let not your heart be troubled: ye believe in God, believe also in me.",
                    },
                    {
                        number: 2,
                        text: "In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.",
                    },
                    {
                        number: 3,
                        text: "And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.",
                    },
                    {
                        number: 4,
                        text: "And whither I go ye know, and the way ye know.",
                    },

                    {
                        number: 5,
                        text: "Thomas saith unto him, Lord, we know not whither thou goest; and how can we know the way?",
                    },
                    {
                        number: 6,
                        text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
                    }
                ]
            },
            {
                reference: "1 Corinthians 15:35-38",
                verses: [
                    {
                        number: 35,
                        text: "But some man will say, How are the dead raised up? and with what body do they come?",
                    },
                    {
                        number: 36,
                        text: "Thou fool, that which thou sowest is not quickened, except it die:",
                    },
                    {
                        number: 37,
                        text: "And that which thou sowest, thou sowest not that body that shall be, but bare grain, it may chance of wheat, or of some other grain:",
                    },
                    {
                        number: 38,
                        text: "But God giveth it a body as it hath pleased him, and to every seed his own body.",
                    }
                ]
            },
            {
                reference: "Philippians 1:23",
                verses: [
                    {
                        number: 23,
                        text: "For I am in a strait betwixt two, having a desire to depart, and to be with Christ; which is far better:",
                    }
                ]
            },
            {
                reference: "2 Thessalonians 1:7-9",
                verses: [
                    {
                        number: 7,
                        text: "And to you who are troubled rest with us, when the Lord Jesus shall be revealed from heaven with his mighty angels,",
                    },
                    {
                        number: 8,
                        text: "In flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ:",
                    },
                    {
                        number: 9,
                        text: "Who shall be punished with everlasting destruction from the presence of the Lord, and from the glory of his power;",
                    }
                ]
            },
            {
                reference: "Revelation 20:4-6",
                verses: [
                    {
                        number: 4,
                        text: "And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God, and which had not worshipped the beast, neither his image, neither had received his mark upon their foreheads, or in their hands; and they lived and reigned with Christ a thousand years.",
                    },
                    {
                        number: 5,
                        text: "But the rest of the dead lived not again until the thousand years were finished. This is the first resurrection.",
                    },
                    {
                        number: 6,
                        text: "Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.",
                    }
                ]
            },
            {
                reference: "Revelation 21:8",
                verses: [
                    {
                        number: 8,
                        text: "But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.",
                    }
                ]
            }
        ]
    },
    {
        id: "rapture-and-second-coming",
        title: "The Rapture and Christ's Second Coming",
        articleLabel: "Article VII",
        paragraphs: [
            "Christ Himself will soon come again in the air to catch up His Church.  The unbelievers left behind will go through a period called the Tribulation, after which Christ will return to set up His Kingdom of one thousand years.  After this, unbelievers will stand at the Great White Throne to be judged and cast into the lake of fire.",
        ],
        scripturePassages: [
            {
                reference: "1 Thessalonians 4:16-17",
                verses: [
                    {
                        number: 16,
                        text: "For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first:",
                    },
                    {
                        number: 17,
                        text: "Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.",
                    }
                ]
            }
        ],
        supportingScriptures: [
            {
                reference: "Matthew 24:29-42",
                verses: [
                    {
                        number: 29,
                        text: "Immediately after the tribulation of those days shall the sun be darkened, and the moon shall not give her light, and the stars shall fall from heaven, and the powers of the heavens shall be shaken:",
                    },
                    {
                        number: 30,
                        text: "And then shall appear the sign of the Son of man in heaven: and then shall all the tribes of the earth mourn, and they shall see the Son of man coming in the clouds of heaven with power and great glory.",
                    },
                    {
                        number: 31,
                        text: "And he shall send his angels with a great sound of a trumpet, and they shall gather together his elect from the four winds, from one end of heaven to the other.",
                    },
                    {
                        number: 32,
                        text: "Now learn a parable of the fig tree; When his branch is yet tender, and putteth forth leaves, ye know that summer is nigh:",
                    },
                    {
                        number: 33,
                        text: "So likewise ye, when ye shall see all these things, know that it is near, even at the doors.",
                    },
                    {
                        number: 34,
                        text: "Verily I say unto you, This generation shall not pass, till all these things be fulfilled.",
                    },
                    {
                        number: 35,
                        text: "Heaven and earth shall pass away, but my words shall not pass away.",
                    },
                    {
                        number: 36,
                        text: "But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.",
                    },
                    {
                        number: 37,
                        text: "But as the days of Noah were, so shall also the coming of the Son of man be.",
                    },
                    {
                        number: 38,
                        text: "For as in the days that were before the flood they were eating and drinking, marrying and giving in marriage, until the day that Noe entered into the ark,",
                    },
                    {
                        number: 39,
                        text: "And knew not until the flood came, and took them all away; so shall also the coming of the Son of man be.",
                    },
                    {
                        number: 40,
                        text: "Then shall two be in the field; the one shall be taken, and the other left.",
                    },
                    {
                        number: 41,
                        text: "Two women shall be grinding at the mill; the one shall be taken, and the other left.",
                    },
                    {
                        number: 42,
                        text: "Watch therefore: for ye know not what hour your Lord doth come.",
                    }
                ]
            },
            {
                reference: "John 14:1-6",
                verses: [
                    {
                        number: 1,
                        text: "Let not your heart be troubled: ye believe in God, believe also in me.",
                    },
                    {
                        number: 2,
                        text: " In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.",
                    },
                    {
                        number: 3,
                        text: "And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.",
                    },
                    {
                        number: 4,
                        text: "And whither I go ye know, and the way ye know.",
                    },
                    {
                        number: 5,
                        text: "Thomas saith unto him, Lord, we know not whither thou goest; and how can we know the way?",
                    },
                    {
                        number: 6,
                        text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
                    }
                ]
            },
            {
                reference: "Titus 2:13",
                verses: [
                    {
                        number: 13,
                        text: "Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ;",
                    }
                ]
            },
            {
                reference: "Revelation 19:11-20:13",
                verses: [
                    {
                        number: 11,
                        text: "And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war.",
                    },
                    {
                        number: 12,
                        text: "His eyes were as a flame of fire, and on his head were many crowns; and he had a name written, that no man knew, but he himself.",
                    },
                    {
                        number: 13,
                        text: "And he was clothed with a vesture dipped in blood: and his name is called The Word of God.",
                    },
                    {
                        number: 14,
                        text: "And the armies which were in heaven followed him upon white horses, clothed in fine linen, white and clean.",
                    },
                    {
                        number: 15,
                        text: "And out of his mouth goeth a sharp sword, that with it he should smite the nations: and he shall rule them with a rod of iron: and he treadeth the winepress of the fierceness and wrath of Almighty God.",
                    },
                    {
                        number: 16,
                        text: "And he hath on his vesture and on his thigh a name written, King Of Kings, And Lord Of Lords.",
                    },
                    {
                        number: 17,
                        text: "And I saw an angel standing in the sun; and he cried with a loud voice, saying to all the fowls that fly in the midst of heaven, Come and gather yourselves together unto the supper of the great God;",
                    },
                    {
                        number: 18,
                        text: "That ye may eat the flesh of kings, and the flesh of captains, and the flesh of mighty men, and the flesh of horses, and of them that sit on them, and the flesh of all men, both free and bond, both small and great.",
                    },
                    {
                        number: 19,
                        text: "And I saw the beast, and the kings of the earth, and their armies, gathered together to make war against him that sat on the horse, and against his army.",
                    },
                    {
                        number: 20,
                        text: "And the beast was taken, and with him the false prophet that wrought miracles before him, with which he deceived them that had received the mark of the beast, and them that worshipped his image. These both were cast alive into a lake of fire burning with brimstone.",
                    },
                    {
                        number: 21,
                        text: "And the remnant were slain with the sword of him that sat upon the horse, which sword proceeded out of his mouth: and all the fowls were filled with their flesh.",
                    },
                    {
                        number: 1,
                        text: "And I saw an angel come down from heaven, having the key of the bottomless pit and a great chain in his hand.",
                    },
                    {
                        number: 2,
                        text: "And he laid hold on the dragon, that old serpent, which is the Devil, and Satan, and bound him a thousand years,",
                    },
                    {
                        number: 3,
                        text: "And cast him into the bottomless pit, and shut him up, and set a seal upon him, that he should deceive the nations no more, till the thousand years should be fulfilled: and after that he must be loosed a little season.",
                    },
                    {
                        number: 4,
                        text: "And I saw thrones, and they sat upon them, and judgment was given unto them: and I saw the souls of them that were beheaded for the witness of Jesus, and for the word of God, and which had not worshipped the beast, neither his image, neither had received his mark upon their foreheads, or in their hands; and they lived and reigned with Christ a thousand years.",
                    },
                    {
                        number: 5,
                        text: "But the rest of the dead lived not again until the thousand years were finished. This is the first resurrection.",
                    },
                    {
                        number: 6,
                        text: "Blessed and holy is he that hath part in the first resurrection: on such the second death hath no power, but they shall be priests of God and of Christ, and shall reign with him a thousand years.",
                    },
                    {
                        number: 7,
                        text: "And when the thousand years are expired, Satan shall be loosed out of his prison,",
                    },
                    {
                        number: 8,
                        text: "And shall go out to deceive the nations which are in the four quarters of the earth, Gog, and Magog, to gather them together to battle: the number of whom is as the sand of the sea.",
                    },
                    {
                        number: 9,
                        text: "And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city: and fire came down from God out of heaven, and devoured them.",
                    },
                    {
                        number: 10,
                        text: "And the devil that deceived them was cast into the lake of fire and brimstone, where the beast and the false prophet are, and shall be tormented day and night for ever and ever.",
                    },
                    {
                        number: 11,
                        text: "And I saw a great white throne, and him that sat on it, from whose face the earth and the heaven fled away; and there was found no place for them.",
                    },
                    {
                        number: 12,
                        text: "And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works.",
                    },
                    {
                        number: 13,
                        text: "And the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them: and they were judged every man according to their works.",
                    }
                ]
            }
        ]
    },
];