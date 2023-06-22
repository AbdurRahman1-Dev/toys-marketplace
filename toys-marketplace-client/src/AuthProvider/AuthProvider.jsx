import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup,  signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ( {children} ) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  // sign up with email and password
  const CreateUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }


  // sign in with email and password
  const signInWithemailPass = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
  }

// Sign Out
  const logout = () => {
      setLoading(true)
      return signOut(auth)
  }

// sign in with google

const googleSignIn = () => {
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}




   useEffect(() =>{
   const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });

    return () => {
      return unSubscribe()
    }
  },[])


  const authInfo ={
    user,
    CreateUserWithEmail,
    loading,
    logout,
    googleSignIn,
    signInWithemailPass

  }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;