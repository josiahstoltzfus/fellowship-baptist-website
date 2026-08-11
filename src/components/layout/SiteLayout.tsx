import SiteHeader from "./header/SiteHeader.tsx";
import {Outlet} from "react-router-dom";
import SiteFooter from "./footer/SiteFooter.tsx";

export default function SiteLayout() {
    return (
        <>
            <SiteHeader />

            <main>
                <Outlet />
            </main>

            <SiteFooter />
        </>
    )
}