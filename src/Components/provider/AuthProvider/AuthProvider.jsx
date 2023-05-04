import { createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"



export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();



const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    const gitHubSignIn = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }

 

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });

        return () =>{
            unsubscribe()
        }
    })



const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    gitHubSignIn,
    logOut,
    photo, 
    setPhoto,
    name, 
    setName
}

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;