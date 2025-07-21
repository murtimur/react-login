import { createBrowserRouter } from "react-router";
import App from "../container/App";
import SignUp from "../pages/signup";

export default createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {path: '/', Component: SignUp}
        ]
    }
])