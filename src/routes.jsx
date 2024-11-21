import { createBrowserRouter } from "react-router-dom";

// component import ....
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
     {
        path:"/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
     }
]);


export default router;