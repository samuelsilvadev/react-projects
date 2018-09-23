import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

const REFS_NAMES = {
    GOALS: 'goals',
    COMPLETE_GOALS: 'completeGoals',
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref(REFS_NAMES.GOALS);
export const completeGoalsRef = firebase.database().ref(REFS_NAMES.COMPLETE_GOALS);

export function createUser({ email, password }) {
    return firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password);
}

export function signIn({ email, password }) {
    return firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password);
}

export function signOut() {
    return firebaseApp
        .auth()
        .signOut();
}
