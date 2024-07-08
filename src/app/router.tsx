import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { BirthCardPage } from "../pages/birth/BirthCardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/birth_card/insert",
        element: <BirthCardPage />
    }
])