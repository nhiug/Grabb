import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About";
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
                path: "/about",
                element: <About />,
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