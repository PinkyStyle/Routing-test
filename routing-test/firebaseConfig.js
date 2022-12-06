// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlFVKXiUV2yzsnLXepqhpA-6xGL42cJOk",
  authDomain: "routingtest-648b4.firebaseapp.com",
  projectId: "routingtest-648b4",
  storageBucket: "routingtest-648b4.appspot.com",
  messagingSenderId: "821212001670",
  appId: "1:821212001670:web:b08a0f7e2126f7d38ce807",
  measurementId: "G-9S1Q53VQPB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);