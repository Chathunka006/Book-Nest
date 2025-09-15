
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhklR1gswOPOkXHoiIaP2zX08EMM6BVys",
  authDomain: "book-nest-b5a41.firebaseapp.com",
  projectId: "book-nest-b5a41",
  storageBucket: "book-nest-b5a41.firebasestorage.app",
  messagingSenderId: "959204758249",
  appId: "1:959204758249:web:39151d671577e8a84c5678",
  measurementId: "G-RVVXY0643W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// Storage (for book covers if needed)
export const storage = getStorage(app);
