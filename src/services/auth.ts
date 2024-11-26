// src/services/auth.ts
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const signUp = async (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async (): Promise<void> => {
  return signOut(auth);
};

export const resetPassword = async (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};

export const sendVerificationEmail = async (): Promise<void> => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser);
  }
};
