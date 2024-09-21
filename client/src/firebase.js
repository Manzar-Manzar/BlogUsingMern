// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-7ea72.firebaseapp.com",
  projectId: "blog-7ea72",
  storageBucket: "blog-7ea72.appspot.com",
  messagingSenderId: "442097984947",
  appId: "1:442097984947:web:8712348869f53ca35457c6",
  measurementId: "G-DS9Q3ECL9M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);