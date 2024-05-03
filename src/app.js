import React, { lazy ,Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Contactus from "./components/Contactus";

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [

            {
                path: "/",
                element: <Body />
            },
            {
                path: "/status",
                element: <useOnlineStatus />,
            },
            {
                path: "/about",
                element: <Suspense fallback = {<h1>Loading....</h1>}>
                    <About />
                    </Suspense>,
            },
            {
                path: "/contact",
                element: <Contactus />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }

        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);