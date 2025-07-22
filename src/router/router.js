import { createBrowserRouter } from "react-router";
import App from "../container/App";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import Home from "../pages/home";

export default createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {path: '/', Component: Login},
            {path: '/signup', Component: SignUp},
            {path: '/home', Component: Home}
        ]
    }
])