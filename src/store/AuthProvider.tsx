import React, { createContext, ReactChild, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

export interface AuthContextInterface {
  user: User | null;
}

export const AuthContext = createContext<AuthContextInterface>({
  user: null,
});

const AuthProvider: React.FC<{ children: ReactChild }> = ({ children }) => {
  const [user, setUser] = useState<AuthContextInterface["user"]>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, [user]);

  const contextValue = {
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
