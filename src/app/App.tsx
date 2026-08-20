import './App.css'
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
import RecommendedPage from "../pages/recommended/RecommendedPage.tsx";

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
                        {
                            path: "recommended",
                            element: <RecommendedPage/>
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
                }
            ]
        }
    ]
);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
