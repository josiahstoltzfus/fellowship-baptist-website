import {type AudioMessage} from "../../../pages/sermons/sermons.ts";
import {type ReactNode, useRef, useState, useEffect} from "react";
import { AudioPlayerContext } from "./AudioPlayerContext.ts";

type AudioPlayerProviderProps = {
    children: ReactNode;
}

export default function AudioPlayerProvider({children} : AudioPlayerProviderProps) {
    const [activeMessage, setActiveMessage] = useState<AudioMessage | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);

    function changePlaybackRate(newRate: number) {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.playbackRate = newRate;

        setPlaybackRate(newRate);
    }

    function toggleMute() {
        setIsMuted((currentlyMuted) => !currentlyMuted);
    }

    function changeVolume(newVolume: number) {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.volume = newVolume;

        setVolume(newVolume);
        setIsMuted(false);
    }

    function playMessage(message: AudioMessage) {
        setActiveMessage(message);
    }

    function seek(newTime: number) {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        audio.currentTime = newTime;
    }

    function closePlayer() {
        const audio = audioRef.current;

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        setActiveMessage(null);
        setCurrentTime(0);
        setIsPlaying(false);
    }

    function togglePlayback() {
        const audio = audioRef.current;

        if (!audio || !activeMessage) {
            return;
        }

        if (audio.paused) {
            void audio.play();
        } else {
            audio.pause();
        }
    }

    useEffect(() => {
        console.log("AudioPlayerProvider mounted");

        return () => {
            console.log("AudioPlayerProvider unmounted");
        };
    }, []);

    return (
        <AudioPlayerContext.Provider
            value ={{
                activeMessage,
                isPlaying,
                currentTime,
                duration,
                volume,
                isMuted,
                playbackRate,
                changePlaybackRate,
                toggleMute,
                changeVolume,
                togglePlayback,
                seek,
                closePlayer,
                playMessage,
            }}
        >
            {children}

            <audio
                ref={audioRef}
                src={activeMessage?.audioUrl}
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
                onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            >
                Your browser does not support audio playback.
            </audio>
        </AudioPlayerContext.Provider>
    )
}