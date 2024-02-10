import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the auth state changed", currentUser)
            setUser(currentUser);
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = { user, createUser, logInUser, logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;