import app from 'firebase/app';

import 'firebase/database';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

export const firebaseApp = app.initializeApp(config);
export const db = firebaseApp.database();
export const videosRef = db.ref('videos');

export default firebaseApp;
