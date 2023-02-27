import { createContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

 
  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        setUser,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
export default authContext;