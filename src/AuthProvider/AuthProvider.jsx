/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    setLoading(true)
      return signOut(auth)
  }

  useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
      })
      setLoading(false)
      return () => {
        unsubscribe()
      }
  }, [])

  const AuthInfo = { user, createUser, logout, signIn, loading };
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
