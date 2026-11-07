import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "../pages/home/HomePage.tsx";
import SiteLayout from "../components/layout/SiteLayout.tsx";
import VisitPage from "../pages/visit/VisitPage.tsx";
import OurStoryPage from "../pages/our-story/OurStoryPage.tsx";
import MeetThePastorPage from "../pages/pastor/MeetThePastorPage.tsx";
import WhatWeBelievePage from "../pages/beliefs/WhatWeBelievePage.tsx";
import ChurchMusicPage from "../pages/music/ChurchMusicPage.tsx";
import ContactPage from "../pages/contact/ContactPage.tsx";
import GivePage from "../pages/giving/GivePage.tsx";
import SermonsPage from "../pages/sermons/SermonsPage.tsx";
import AudioPlayerProvider from "../components/media/audio-player/AudioPlayerProvider.tsx";
import ScriptureReaderProvider from "../components/media/scripture-reader/ScriptureReaderProvider.tsx";
import PrivacyPage from "../pages/privacy/PrivacyPage.tsx";
import AccessibilityPage from "../pages/accessibility/AccessibilityPage.tsx";

const router = createBrowserRouter(
    [
        {
            element: <SiteLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>,
                },
                {
                    path: "/visit",
                    element: <VisitPage/>,
                },
                {
                    path: "/about",
                    children: [
                        {
                            path: "our-story",
                            element: <OurStoryPage/>,
                        },
                        {
                            path: "meet-the-pastor",
                            element: <MeetThePastorPage/>,
                        },
                        {
                            path: "what-we-believe",
                            element: <WhatWeBelievePage/>,
                        },
                        {
                            path: "church-music",
                            element: <ChurchMusicPage/>,
                        }
                    ]
                },
                {
                    path: "/resources",
                    children: [
                        {
                            path: "sermons",
                            element: <SermonsPage/>
                        },
                    ]
                },
                {
                    path: "/contact",
                    element: <ContactPage/>
                },
                {
                    path: "/give",
                    element: <GivePage/>
                },
                {
                    path: "/privacy",
                    element: <PrivacyPage/>
                },
                {
                    path: "/accessibility",
                    element: <AccessibilityPage/>
                }
            ]
        }
    ]
);

function App() {
    return (
        <AudioPlayerProvider>
            <ScriptureReaderProvider>
                <RouterProvider router={router}/>
            </ScriptureReaderProvider>
        </AudioPlayerProvider>
    );
}

export default App;
