import {createContext, useContext, useState} from 'react'

// Create a context
const AuthContext = createContext();

// Create a provider component
const ContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
