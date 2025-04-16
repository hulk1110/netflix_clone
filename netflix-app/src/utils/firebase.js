// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz8ysHilYUxa7ToJiUgtB-53COt7Ns4lY",
  authDomain: "netflixclone-ccd19.firebaseapp.com",
  projectId: "netflixclone-ccd19",
  storageBucket: "netflixclone-ccd19.firebasestorage.app",
  messagingSenderId: "111968123402",
  appId: "1:111968123402:web:ba31694c5d2ed5cdfd3df3",
  measurementId: "G-B1WP7LGG8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();