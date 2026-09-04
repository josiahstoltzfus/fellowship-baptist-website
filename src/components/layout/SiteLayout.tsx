import SiteHeader from "./header/SiteHeader.tsx";
import {Outlet} from "react-router-dom";
import SiteFooter from "./footer/SiteFooter.tsx";
import GlobalAudioPlayer from "../media/audio-player/GlobalAudioPlayer.tsx";
import {useAudioPlayer} from "../media/audio-player/useAudioPlayer.ts";
import styles from "./SiteLayout.module.css";

export default function SiteLayout() {
    const audioPlayer = useAudioPlayer();

    return (
        <div className={audioPlayer.activeMessage ? styles["player-open"] : undefined}>
            <SiteHeader />

            <main>
                <Outlet />
            </main>

            <SiteFooter />

            <GlobalAudioPlayer/>
        </div>
    )
}