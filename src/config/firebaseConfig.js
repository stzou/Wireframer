import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyDKDHzcEci4Z4S85EYL9QUBVihgUM4x_iM",
    authDomain: "wireframer-d0073.firebaseapp.com",
    databaseURL: "https://wireframer-d0073.firebaseio.com",
    projectId: "wireframer-d0073",
    storageBucket: "wireframer-d0073.appspot.com",
    messagingSenderId: "770160368355",
    appId: "1:770160368355:web:98dd2245e0b2e857e7c3d6",
    measurementId: "G-073FMR53KQ"
    // apiKey: "AIzaSyCJxkqx-6PMJrZ7ACkrgbO55b5wmJdop1Y",
    // authDomain: "todo-rrf-316.firebaseapp.com",
    // databaseURL: "https://todo-rrf-316.firebaseio.com",
    // projectId: "todo-rrf-316",
    // storageBucket: "todo-rrf-316.appspot.com",
    // messagingSenderId: "892398996038",
    // appId: "1:892398996038:web:1fb9157fc6c5d266e01847",
    // measurementId: "G-TEGQB3MZ23"
};
firebase.initializeApp(firebaseConfig);


// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;