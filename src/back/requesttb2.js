import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { updateDoc, doc } from "firebase/firestore";
const firebaseApp=initializeApp( {
    piKey: "AIzaSyAkJrPoYX8dV76_2YCrWkV10CqNXnQ-oXc",
  authDomain: "frr-branch.firebaseapp.com",
  projectId: "frr-branch",
  storageBucket: "frr-branch.appspot.com",
  messagingSenderId: "746974135008",
  appId: "1:746974135008:web:aefeb21f3ac06ac0b80685",
  measurementId: "G-JKNDVYQ66N"
  });
//const db = getFirestore();
//import { collection, addDoc } from "firebase/firestore";
const db = getFirestore();
async function append(db){
try {
  const docRef = await addDoc(collection(db, "seat_reservation"), {
    Pname: " ",
    available:" ",
    seat_number:" "
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}//make server
}
async function update(db){
  const x=doc(db,"seat_reservation","e0czi8UzRoB8NifFXFqZ");
  await updateDoc(x,{available:false});
}//update
async function erase(db){
    await deleteDoc(doc(db, "seat_reservation", "e0czi8UzRoB8NifFXFqZ"));
}
//append(db);
//update(db);
//erase(db);