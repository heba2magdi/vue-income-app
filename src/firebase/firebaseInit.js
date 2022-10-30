import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC17ayHMAtYZ9OhDnyW2fcnu6pJO51ZXok",
  authDomain: "invice-app-c5a9f.firebaseapp.com",
  projectId: "invice-app-c5a9f",
  storageBucket: "invice-app-c5a9f.appspot.com",
  messagingSenderId: "573657149456",
  appId: "1:573657149456:web:c69bcad863011b56049a95",
  measurementId: "G-58X2G6DQCD"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;
