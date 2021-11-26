import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";

export const handleSignUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const handleSignIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const handleSignAnonymuously = () => {
  return signInAnonymously(auth);
};
export const handleSignOut = () => {
  return signOut(auth);
};
