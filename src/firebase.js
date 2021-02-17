import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcA-_3i0wEIPG15C6cZyVlGAuU0wY2f8w",
    authDomain: "netflix-clone-build.firebaseapp.com",
    projectId: "netflix-clone-build",
    storageBucket: "netflix-clone-build.appspot.com",
    messagingSenderId: "738350509563",
    appId: "1:738350509563:web:7f537cf7fc55a377926f5e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
