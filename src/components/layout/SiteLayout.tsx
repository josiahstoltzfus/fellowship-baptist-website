import SiteHeader from "./header/SiteHeader.tsx";
import {Outlet, ScrollRestoration} from "react-router-dom";
import SiteFooter from "./footer/SiteFooter.tsx";
import GlobalAudioPlayer from "../media/audio-player/GlobalAudioPlayer.tsx";
import GlobalScriptureReader from "../media/scripture-reader/GlobalScriptureReader.tsx";
import {useEffect, useState} from "react";

export default function SiteLayout() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    function closeMenu() {
        setIsMobileOpen(false);
    }

    function toggleMenu() {
        setIsMobileOpen(currentlyOpen => !currentlyOpen);
    }

    useEffect(() => {
        document.body.classList.toggle("menu-open", isMobileOpen);

        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [isMobileOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 769px)");

        function handleBreakpointChange(event: MediaQueryListEvent) {
            if (event.matches) {
                setIsMobileOpen(false);
            }
        }

        mediaQuery.addEventListener("change", handleBreakpointChange);

        if (mediaQuery.matches) {
            setIsMobileOpen(false);
        }

        return () => {
            mediaQuery.removeEventListener("change", handleBreakpointChange);
        };
    }, []);

    return (
        <div>
            <ScrollRestoration/>

            <SiteHeader
                isMobileOpen={isMobileOpen}
                onClose={closeMenu}
                onToggle={toggleMenu}
            />

            <main inert={isMobileOpen}>
                <Outlet/>
            </main>

            <div inert={isMobileOpen}>
                <SiteFooter/>
            </div>

            <div inert={isMobileOpen}>
                <GlobalScriptureReader/>
                <GlobalAudioPlayer/>
            </div>
        </div>
    )
}