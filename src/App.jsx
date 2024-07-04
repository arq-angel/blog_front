import {
    Route, createBrowserRouter, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import ContextProvider from "./ContextProvider.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<GuestLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/post" element={<PostPage/>}/>
        <Route path="/app/dashboard" element={<Dashboard/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/register" element={<Register/>}/>
    </Route>
    ));

    return (
        <ContextProvider>
            <RouterProvider router={router}/>
        </ContextProvider>
    )
}

export default App;
