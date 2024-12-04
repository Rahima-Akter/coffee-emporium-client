import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Details from "../components/Details";
import MainLayout from "../components/MainLayout/MainLayout";
import HomePage from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound";


const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound></NotFound>,
    },
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage />,
                loader: () => fetch('https://coffee-emporium-server-six.vercel.app/coffees'),
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`https://coffee-emporium-server-six.vercel.app/coffees/${params.id}`),
            },
            {
                path: '/details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`https://coffee-emporium-server-six.vercel.app/coffees/${params.id}`)
            },
        ],
    },
]);

export default router;