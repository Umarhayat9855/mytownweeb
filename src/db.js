
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyAtokOCtjSlLROhIOttwOO0Qi6F4kvFmAE",
  authDomain: "mytown-c9431.firebaseapp.com",
  projectId: "mytown-c9431",
  storageBucket: "mytown-c9431.appspot.com",
  messagingSenderId: "1082234765305",
  appId: "1:1082234765305:web:6bc0ef54158ea3d802c728",
  measurementId: "G-MVH0DEZ451"
};
    
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
const database = getFirestore(app);
export default db;







