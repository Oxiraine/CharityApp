import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAni4DgDUTm686XSVl2DPobxQ-gI1growQ",
  authDomain: "charity-app-44251.firebaseapp.com",
  projectId: "charity-app-44251",
  storageBucket: "charity-app-44251.appspot.com",
  messagingSenderId: "596606943186",
  appId: "1:596606943186:web:4517ef7ac9bd801ab3d20b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()