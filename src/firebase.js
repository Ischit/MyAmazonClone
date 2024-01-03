import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2YE_SYubrZ_7D2Ua6873yWPAGdjZZom0",
  authDomain: "my-d467a.firebaseapp.com",
  projectId: "my-d467a",
  storageBucket: "my-d467a.appspot.com",
  messagingSenderId: "945008378133",
  appId: "1:945008378133:web:9c62b8b9a103e043e2a91c",
  measurementId: "G-YHKZ2EZEBL",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
