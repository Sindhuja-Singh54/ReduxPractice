// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSgrmykMdql1pB1oRGUB4ia0OciUI8_-U",
  authDomain: "practicelogin-3da40.firebaseapp.com",
  projectId: "practicelogin-3da40",
  storageBucket: "practicelogin-3da40.appspot.com",
  messagingSenderId: "963575971760",
  appId: "1:963575971760:web:21c6554ed060fa07faa075",
  measurementId: "G-MDH1DK1FVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);