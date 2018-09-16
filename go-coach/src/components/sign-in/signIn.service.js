import { firebaseApp } from './../../firebase';

export function signIn({ email, password }) {
    return firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password); 
} 