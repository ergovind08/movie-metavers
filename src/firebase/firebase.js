// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXFSxkxPP8NEyhESDfjVxPVDWSHchTGPM",
  authDomain: "metaverse-8dc2d.firebaseapp.com",
  projectId: "metaverse-8dc2d",
  storageBucket: "metaverse-8dc2d.appspot.com",
  messagingSenderId: "574776361645",
  appId: "1:574776361645:web:cff836f8cbb4d0ef823c24",
  measurementId: "G-8KWKHK9E6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);
export const moviesRef =collection(db,"movies");

export default app;