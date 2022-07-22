// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALhdH5CzD7BFvyFLhhEKzivSw_pL_e9qA",
  authDomain: "elden2.firebaseapp.com",
  projectId: "elden2",
  storageBucket: "elden2.appspot.com",
  messagingSenderId: "844191198401",
  appId: "1:844191198401:web:ad3699a1671afd3dc9b840",
  measurementId: "G-7ZZPZVEF8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);