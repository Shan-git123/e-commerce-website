
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4BLgn5WQzTSRtlS-8Cfb1yz1IVV4_uo8",
  authDomain: "ecom-website-9252f.firebaseapp.com",
  projectId: "ecom-website-9252f",
  storageBucket: "ecom-website-9252f.appspot.com",
  messagingSenderId: "99804574313",
  appId: "1:99804574313:web:9b8f0161df733f7f0b68f8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);