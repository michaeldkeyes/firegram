import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDN1o67oQ0v702l3UXpyrr44Vd4zIzlJnU',
  authDomain: 'firegram-21f22.firebaseapp.com',
  databaseURL: 'https://firegram-21f22.firebaseio.com',
  projectId: 'firegram-21f22',
  storageBucket: 'firegram-21f22.appspot.com',
  messagingSenderId: '80358401024',
  appId: '1:80358401024:web:4842aa0080d4f9fbb064e5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
