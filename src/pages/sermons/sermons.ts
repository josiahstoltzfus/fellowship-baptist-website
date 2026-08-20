export type TeachingFormat = "audio" | "video" | "written";

export type Teaching = {
    id: string;
    slug: string;
    title: string;
    date: string;
    scripture?: string;
    speaker?: string;
    description?: string;
    formats: TeachingFormat[];
    featured?: boolean;
};

export const teachings: Teaching[] = [
    {
        id: "152-key-bible-verses",
        slug: "152-key-bible-verses",
        title: "152 Key Bible Verses",
        date: "[Date]",
        description: "A foundational teaching resource from Fellowship Baptist.",
        speaker: "Pastor Jack Boyer",
        scripture: "Scripture passage",
        formats: ["written"],
        featured: true,
    },
];