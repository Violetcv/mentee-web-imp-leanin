import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBu8r7N4cHNc8LSLfVSrJLK2uWnhKGatNU",
  authDomain: "web-imp-one.firebaseapp.com",
  projectId: "web-imp-one",
  storageBucket: "web-imp-one.appspot.com",
  messagingSenderId: "973582318781",
  appId: "1:973582318781:web:c254462bc56bbd5df20bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
