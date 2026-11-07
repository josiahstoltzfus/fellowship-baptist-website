import {sanityClient} from './sanityClient'
import type {AudioMessage, Message} from "./sanityTypes.ts"

export async function getMessages() {
    return sanityClient.fetch(`
        *[_type == "message"]{
            _id,
            title,
            kind,
            "speakerName": speaker->name,
            scripture
        }
    `)
}

export async function getAudioMessages(): Promise<AudioMessage[]> {
    return sanityClient.fetch(`
        *[_type == "message" && defined(audio.asset)]{
            _id,
            title,
            kind,
            "speakerName": speaker->name,
            scripture,
            "audioUrl": audio.asset->url,
            "downloadFileName": audio.asset->originalFilename,
            durationSeconds
        }
    `)
}

export async function getFeaturedMessage(): Promise<{
    featuredFormat: "audio" | "video";
    featuredMessage: Message | null;
} | null> {
    return sanityClient.fetch(`
        *[_id == "homePage"][0]{
            featuredFormat,
            "featuredMessage": featuredMessage->{
                _id,
                title,
                kind,
                "speakerName": speaker->name,
                scripture,
                durationSeconds,
                videoUrl,
                "audioUrl": audio.asset->url,
                "downloadFileName": audio.asset->originalFilename
            }
        }
    `)
}

export async function getOurStory(): Promise<{
    churchImageUrl: string | null;
    videoUrl: string | null;
} | null> {
    return sanityClient.fetch(`
    *[_id == "ourStory"][0]{
      "churchImageUrl": churchImage.asset->url,
      videoUrl
    }
  `);
}

export async function getMeetThePastor(): Promise<{
    pastorImageUrl: string | null;
} | null> {
    return sanityClient.fetch(`
        *[_id == "meetThePastor"][0]{
            "pastorImageUrl": pastorImage.asset->url
        }
    `);
}