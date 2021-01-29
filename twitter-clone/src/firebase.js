import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyA-FHuSbF9t7J9zt-BWUHIqwrH9oueHSds",
    authDomain: "twitter-clone-82ce8.firebaseapp.com",
    projectId: "twitter-clone-82ce8",
    storageBucket: "twitter-clone-82ce8.appspot.com",
    messagingSenderId: "745044553865",
    appId: "1:745044553865:web:9e6177ad716e0f982a5658",
    measurementId: "G-E33ED4LSFB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;