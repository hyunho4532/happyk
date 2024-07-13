import { createBrowserRouter } from "react-router-dom";
import { MainActivity } from "../activity/MainActivity";
import { InsertActivity } from "../activity/birth/InsertActivity";
import { SelectActivity } from "../activity/birth/SelectActivity";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainActivity />
    },
    {
        path: "/birth_card/insert",
        element: <InsertActivity />
    },
    {
        path: "/birth_card/select",
        element: <SelectActivity />
    }
])