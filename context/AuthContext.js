'use client'
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState(null);
    const [userDataObj, setUserDataObj] = useState(null);
    const [loading, setLoading] = useState(true);

    //AUTH HANDLERS
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        setUserDataObj(null);
        setCurrentUser(null);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, async user =>{
            try{
                // Set User to Local context state
                setLoading(true);
                setCurrentUser(user);
                if(!user){
                    console.log('No User Found');
                    return;
                }

                // If User exists, fetch their data from firebase
                console.log('fetching user data');
                const docRef = doc(db, 'users', user.uid);
                console.log(docRef);
                const docSnap = await getDoc(docRef);
                console.log(docSnap);
                let firebaseData = {};
                
                if(docSnap.exists()){
                    console.log('found user data')
                    firebaseData = docSnap.data();
                    console.log(firebaseData);
                }
                console('setting user data', firebaseData);
                setUserDataObj(firebaseData);

            } catch(err){
                console.log(err.message);
            } finally{
                setLoading(false);
            }
        });
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        userDataObj,
        setUserDataObj,
        signup,
        logout,
        login,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}