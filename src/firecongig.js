import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyA_6s6CncA_3Dp_hJ28B0lpCn1hAv3neg4",

  authDomain: "recipes-9472d.firebaseapp.com",

  projectId: "recipes-9472d",

  storageBucket: "recipes-9472d.appspot.com",

  messagingSenderId: "209706319103",

  appId: "1:209706319103:web:dcf9993380f9436386e0ca"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }