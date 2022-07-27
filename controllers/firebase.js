// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyrQ7fWUACNRfesmC1KThEnFq1fyrIUXU",
  authDomain: "eldenring-f97de.firebaseapp.com",
  projectId: "eldenring-f97de",
  storageBucket: "eldenring-f97de.appspot.com",
  messagingSenderId: "835629168416",
  appId: "1:835629168416:web:b74346faa5e048855a0945",
  measurementId: "G-SNNYQLY9B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);