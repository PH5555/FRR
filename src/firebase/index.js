import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";
import { updateDoc, getDocs, arrayUnion, where } from "firebase/firestore";
const firebaseApp = initializeApp({
  piKey: "AIzaSyAkJrPoYX8dV76_2YCrWkV10CqNXnQ-oXc",
  authDomain: "frr-branch.firebaseapp.com",
  projectId: "frr-branch",
  storageBucket: "frr-branch.appspot.com",
  messagingSenderId: "746974135008",
  appId: "1:746974135008:web:aefeb21f3ac06ac0b80685",
  measurementId: "G-JKNDVYQ66N"
});

const db = getFirestore(firebaseApp);

async function getFacultyInfo() {
  const facultyCol = collection(db, 'faculty_reservation');
  const facultySnapshot = await getDocs(facultyCol);
  return facultySnapshot.docs.map(doc => doc.data());
}

async function getSeatInfo() {
  const seatCol = collection(db, 'seat_reservation');
  const seatSnapshot = await getDocs(seatCol);
  return seatSnapshot.docs.map(doc => doc.data());

}

async function reserveSeat(pname, seatNumber) {
  try {
    const docRef = await addDoc(collection(db, "seat_reservation"), {
      personName: pname,
      seatNumber: seatNumber
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function reserveFaculty(person, dateTime, item) {
  const query = query(collection(db, "faculty_reservation"), where("name", "==", item));
  const querysnapshot = await getDocs(query);
  let id;
  querysnapshot.forEach((doc) => {
    id = doc.id;
  });
  const doc = doc(db, "faculty_reservation", id);
  await updateDoc(doc, { dateTime, personName: arrayUnion(person) });
}

async function setFaculty() {
  const query = query(collection(db, "faculty_reservation"), where("image", "==", ""));
  const querysnapshot = await getDocs(query);
  let id;
  let dateTime = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: []
  }
  querysnapshot.forEach((doc) => {
    id = doc.id;
  });
  let doc = doc(db, "faculty_reservation", id);
  await updateDoc(doc, { dateTime });
}

export { getFacultyInfo, getSeatInfo, reserveFaculty, reserveSeat, setFaculty };