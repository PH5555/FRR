import { initializeApp } from "firebase/app"
import { deleteField, getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";
import { updateDoc, getDocs, arrayUnion, where } from "firebase/firestore";
const firebaseApp = initializeApp({
    piKey: "AIzaSyCctb1o1eNhA3k1Ps5bfF0RzVi1qkivhow",
    authDomain: "test-6d01b.firebaseapp.com",
    projectId: "test-6d01b",
    storageBucket: "test-6d01b.appspot.com",
    messagingSenderId: "276798933825",
    appId: "1:276798933825:web:b1af2d6eeb30f091e56fc0",
    measurementId: "G-W0XTSWDCHP"
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