import { createContext, useContext, useEffect, useState } from 'react';
import fetcher from '../utils/fetch';
import toast from 'react-hot-toast';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const response = await fetcher.get('/user', { withCredentials: true });
                const result = response.data;

                if(result.error) throw new Error(result.error);
                setUser(result.user);
            } catch (error) {
                toast.error(error.message || "Backend is Down.");
                console.error(error);
            } finally {
                setUserLoading(false);
            }
        }

        fetchUser();
    }), [];


    return(
        <AuthContext.Provider value={{ user, setUser, userLoading }}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };