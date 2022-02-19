import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const db = getFirestore();

    function signup(email, password, fullName, username) {
       createUserWithEmailAndPassword(auth, email, password)
       .then(cred => {
           return setDoc(doc(db, 'users', cred.user.uid), {
            username: username,
            fullName: fullName
           })
       })
    }
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
