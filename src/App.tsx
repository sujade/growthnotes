import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import Index from "./pages/Index.tsx";
import MyNotes from "./pages/MyNotes.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path: "index",
        element: <Index/>
    },
    {
        path: "mynotes",
        element: <MyNotes/>
    }
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);