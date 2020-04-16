import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwbwjqlGCx8YyAm0Dv6v56gopQeGUIZRw",
    authDomain: "denzilla-2db3f.firebaseapp.com",
    databaseURL: "https://denzilla-2db3f.firebaseio.com",
    projectId: "denzilla-2db3f",
    storageBucket: "denzilla-2db3f.appspot.com",
    messagingSenderId: "24988187613",
    appId: "1:24988187613:web:1f188bdfdac0fba2fc9434",
    measurementId: "G-X600KCW188"
};
// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// db = firebase.firestore();

// export const dbOrderRef = db.collection('order');

// export const orderData = db.collection('order').get()
