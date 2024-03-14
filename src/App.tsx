import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import MyNotes from "./pages/MyNotes.tsx";
import '@fontsource/atkinson-hyperlegible';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
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