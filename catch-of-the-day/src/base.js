import Rebase from 're-base';
import firebase from 'firebase/app'
import 'firebase/database';

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
