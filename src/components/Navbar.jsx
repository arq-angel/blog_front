import {Link} from "react-router-dom";
import {useAuth} from "../ContextProvider.jsx";

const Navbar = () => {
    const {isAuthenticated} = useAuth();
    console.log("Authenticated: ", isAuthenticated);
    return (
        <nav className="bg-gray-800 w-full top-0">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            className="rounded-md text-xl font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Blog Home
                        </Link>



                    </div>
                    <div className="flex items-center gap-3">
                            {isAuthenticated ? (
                                <Link
                                    to="/app/dashboard"
                                    className="rounded-md text-sm font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        to="/auth/login"
                                        className="rounded-md text-sm font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="rounded-md text-sm font-bold text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
