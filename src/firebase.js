import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_KEY,
    authDomain: "utah-lodges.firebaseapp.com",
    databaseURL: "https://utah-lodges-default-rtdb.firebaseio.com",
    projectId: "utah-lodges",
    storageBucket: "utah-lodges.appspot.com",
    messagingSenderId: "196062541038",
    appId: "1:196062541038:web:9bac26655584ce1a606fff"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase