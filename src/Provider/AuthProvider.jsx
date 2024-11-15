import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading, user)
    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider = new GoogleAuthProvider();
    const logInUserPopUp = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user;
            setUser(user);
            const photoURL = user.photoURL || "default-photo-url";
            return updateUserProfile({displayName: user.displayName, photoURL})
        })
        .catch(error =>{
            console.log("Here is the problem: ", error)
            setLoading(false)
        })
       
    }

    const githubProvider = new GithubAuthProvider(); 
    const loginGitHubPop =()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
        .then(result=>{
            const user = result.user;
            setUser(user);
            const photoURL = user.photoURL || "default-photo-url";
            return updateUserProfile({displayName: user.displayName, photoURL})
        })
        .catch(error =>{
            console.log("Here is the problem: ", error)
            setLoading(false)
        })
        
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo = {
        user, 
        setUser,
        createNewUser,
        logInUser,
        logInUserPopUp,
        loginGitHubPop,
        logOut,
        loading,
        updateUserProfile,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;