import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import('../App'))
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const Settings = lazy(() => import("../components/Settings"));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/settings',
                element: <Settings />
            }
        ]
    }
])

export default routes