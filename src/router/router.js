import { createBrowserRouter } from "react-router";
import App from "../container/App";
import SignUp from "../pages/signup";
import Login from "../pages/login";

export default createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {path: '/', Component: Login},
            {path: '/signup', Component: SignUp}
        ]
    }
])