import React, { useEffect } from 'react';
import { AuthProvider } from './auth/Auth';
import { RouterProvider, Routes, Route, createBrowserRouter, useLocation } from 'react-router-dom';
import Routess from './constants/routes';
import PublicRoute from './constants/PublicRoute';
import PrivateRoute from './constants/PrivateRoute';
import RoutePrivate from './components/PrivateRoute';
import App from './App';
import { Login } from './pages/Login';
import { Landing } from './pages/Landing';

const routerr = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/',
        element: <RoutePrivate />,
        children: [
            {
                path: '/home',
                element: <App />
            }
        ]
    }
]);

const AppWrapper = () => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<RoutePrivate />}>
                    {/* specify private routes here  */}
                    <Route index element={<App />} />
                </Route>
                {/* specify public routes here */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    );
};

export default AppWrapper;
