import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import TeachingArchive from "./components/TeachingArchive.tsx";
import {getAudioMessages} from "../../lib/sanityQueries.ts";
import type {AudioMessage} from '../../lib/sanityTypes'
import {useEffect, useState} from "react";

export default function SermonsPage() {
    const [messages, setMessages] = useState<AudioMessage[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadMessages() {
            try {
                const data = await getAudioMessages()
                setMessages(data)
            } catch (error) {
                console.error('Failed to load messages:', error)
                setError('Unable to load messages.')
            } finally {
                setIsLoading(false)
            }
        }

        void loadMessages()
    }, [])

    return (
        <>
            <PageIntroduction
                eyebrow="Sermons and Teaching"
                title="Teaching from God's Word."
                spacing="connected"
                commentary="Explore sermons and teachings intended to point people to Christ and help believers grow through Scripture."
            />

            {isLoading ? (
                <p role="status">Loading sermons...</p>
            ) : error ? (
                <p role="alert">{error}</p>
            ) : (
                <TeachingArchive messages={messages} />
            )}
        </>
    )
}