import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "../pages/home/HomePage.tsx";
import SiteLayout from "../components/layout/SiteLayout.tsx";

const router = createBrowserRouter(
    [
        {
            element: <SiteLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>,
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
