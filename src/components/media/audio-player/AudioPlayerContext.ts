import { createContext } from 'react';
import type {AudioMessage} from "../../../pages/sermons/sermons.ts";

export type AudioPlayerContextValue = {
    activeMessage: AudioMessage | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    playbackRate: number;
    isExpanded: boolean;

    changePlaybackRate: (newRate: number) => void;
    playMessage: (message: AudioMessage) => void;
    toggleMute: () => void;
    changeVolume: (newVolume: number) => void;
    toggleExpanded: () => void;
    togglePlayback: () => void;
    seek: (newTime: number) => void;
    closePlayer: () => void;
};

export const AudioPlayerContext =
    createContext<AudioPlayerContextValue | undefined>(undefined);