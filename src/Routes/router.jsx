import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: "/category/:category_id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`),
            }
        ]
    },
    {
        path: '/news',
        element: <h2>News layout</h2>,
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <h2>Error</h2>
    }
])

export default router;