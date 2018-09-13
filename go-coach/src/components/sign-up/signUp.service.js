import { firebaseApp } from './../../firebase';

export function createUser({ email, password }) {
    return firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => error); 
} 