import * as React from 'react';
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBw9W88hmBnSWTBQnpuJd1ATdehPpAySIU',
	authDomain: 'react-native-employee-ma-b1fd0.firebaseapp.com',
	databaseURL: 'https://react-native-employee-ma-b1fd0.firebaseio.com',
	projectId: 'react-native-employee-ma-b1fd0',
	storageBucket: '',
	messagingSenderId: '96094931944',
	appId: '1:96094931944:web:dc2f1c505a30b8d9'
};

export function initFirebaseHOC(Component) {
	return class extends React.Component {
		componentDidMount() {
			firebase.initializeApp(firebaseConfig);
		}

		render() {
			return React.createElement(Component);
		}
	};
}
