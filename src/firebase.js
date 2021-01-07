import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAYYV5U4M4U8609on4x_jEpum6r9HcnFH8",
        authDomain: "messengerclone-bd713.firebaseapp.com",
        databaseURL: "https://messengerclone-bd713.firebaseio.com",
        projectId: "messengerclone-bd713",
        storageBucket: "messengerclone-bd713.appspot.com",
        messagingSenderId: "356012365518",
        appId: "1:356012365518:web:bafc90cf0f6c0e754aa29f",
        measurementId: "G-ZECPR99Q9W"

});
const db=firebaseApp.firestore();
export default db;