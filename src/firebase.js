import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
   apiKey: "AIzaSyDtf37MHho04ohqEQ_YAp9QO2K0hO-PBSQ",
   authDomain: "admin-blog-c3848.firebaseapp.com",
   projectId: "admin-blog-c3848",
   storageBucket: "admin-blog-c3848.appspot.com",
   messagingSenderId: "972628865096",
   appId: "1:972628865096:web:9d8330a41ea2715fdae87d",
   measurementId: "G-HSE7XX218H"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app);

