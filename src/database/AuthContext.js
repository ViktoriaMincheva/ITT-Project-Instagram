import React, { useContext, useState, useEffect } from 'react'
import { auth } from './firebase';
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, 
    signInWithEmailAndPassword, signOut, updatePassword, 
    reauthenticateWithCredential, 
    updateEmail} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const db = getFirestore();

    async function signup(email, password, fullName, username) {
       return createUserWithEmailAndPassword(auth, email, password)
       .then(cred => {
           return setDoc(doc(db, 'users', cred.user.uid), {
            id: cred.user.uid,
            email : email,
            username: username,
            followedBy : [],
            following: [],
            bio: null,
            posts: [],
            savedPosts:[],
            publicProfile: true,
            fullName: fullName,
            profilePhoto: null,
            businessAcc: {
                isBusinessAcc: false,
                isVerified:false,
                category: null
            }
           })
       })
    }
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    async function changeUserEmail(email) {
        return updateEmail(auth.currentUser, email);
    }

    async function updatePass(user, newPassword) {
        return updatePassword(user, newPassword);
    }

    async function reauthenticateUser (user, credential) {
        return reauthenticateWithCredential(user, credential);
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
        signup,
        resetPassword,
        updatePass,
        reauthenticateUser,
        changeUserEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
