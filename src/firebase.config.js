import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
   apiKey: "AIzaSyAG1wqMNjLcZ7RoJoec_tJg6c-6bhwWeY8",
  authDomain: "otp-phone-91e0f.firebaseapp.com",
  projectId: "otp-phone-91e0f",
  storageBucket: "otp-phone-91e0f.appspot.com",
  messagingSenderId: "426834766592",
  appId: "1:426834766592:web:e02981c1106016473961e5",
  measurementId: "G-R9LZ3YHFXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export const  auth = getAuth(app);
