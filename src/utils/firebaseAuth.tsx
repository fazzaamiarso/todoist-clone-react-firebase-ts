import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  signInAnonymously,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export const handleSignUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const handleSignIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const handleSignAnonymously = () => {
  return signInAnonymously(auth);
};
export const handleSignOut = () => {
  return signOut(auth);
};
export const setAuthPersistence = () => {
  return setPersistence(auth, browserLocalPersistence);
};
