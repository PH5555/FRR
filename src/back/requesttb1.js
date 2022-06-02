import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { updateDoc, doc,getDocs } from "firebase/firestore";
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


// Get a list of cities from your database
async function gettb1() {
  const citiesCol = collection(db, 'faculty_reservation');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
}
async function gettb2() {
  const citiesCol = collection(db, 'seat_reservation');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
}


async function appendtb1(){
try {
  const docRef = await addDoc(collection(db, "faculty_reservation"), {
    Date_time: " ",
    Pname:" ",
    image:" ",
    name:" ",
    type:" "

  });
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
} catch (e) {
  console.error("Error adding document: ", e);
  return 0;
}//make server
}

async function appendtb2(){
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

async function updatetb1(){
  const x=doc(db,"faculty_reservation","Lfi1zGmgtNIaeWbQ08X0");
  await updateDoc(x,{type:"x"});
}//update(db,table_name,id)
async function updatetb2(db){
  const y=doc(db,"seat_reservation","1NNCq0TqiSNZ77689PbZ");
  await updateDoc(y,{available:false});
}
async function erasetb1(){
  await deleteDoc(doc(db, "faculty_reservation", "Lfi1zGmgtNIaeWbQ08X0"));
};//delete(db,table_name,id)
async function erasetb2(){
  await deleteDoc(doc(db, "seat_reservation", "1NNCq0TqiSNZ77689PbZ"));
}

export{gettb1,gettb2,appendtb1,appendtb2,erasetb1,erasetb2,updatetb1,updatetb2};