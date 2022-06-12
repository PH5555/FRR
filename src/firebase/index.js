import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  arrayUnion,
  setDoc,
  where,
  query,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  piKey: "AIzaSyCctb1o1eNhA3k1Ps5bfF0RzVi1qkivhow",
  authDomain: "test-6d01b.firebaseapp.com",
  projectId: "test-6d01b",
  storageBucket: "test-6d01b.appspot.com",
  messagingSenderId: "276798933825",
  appId: "1:276798933825:web:b1af2d6eeb30f091e56fc0",
  measurementId: "G-W0XTSWDCHP"
};

const config = {
  piKey: "AIzaSyAkJrPoYX8dV76_2YCrWkV10CqNXnQ-oXc",
  authDomain: "frr-branch.firebaseapp.com",
  projectId: "frr-branch",
  storageBucket: "frr-branch.appspot.com",
  messagingSenderId: "746974135008",
  appId: "1:746974135008:web:aefeb21f3ac06ac0b80685",
  measurementId: "G-JKNDVYQ66N"
};

const firebaseApp = initializeApp(config);

const db = getFirestore(firebaseApp);

async function getFacultyInfo() {
  const facultyCol = collection(db, 'faculty_reservation');
  const facultySnapshot = await getDocs(facultyCol);
  return facultySnapshot.docs.map(doc => doc.data());
}

async function getSeatInfo() {
  const seatCol = collection(db, 'seat_reservation');
  getDocs(seatCol).then(a => console.log(a)).catch(a => console.log(a))
  const seatSnapshot = await getDocs(seatCol);
  return seatSnapshot.docs.map(doc => doc.data());
}

async function resetFaculty() {
  const facultyCol = collection(db, 'faculty_reservation');
  const facultySnapshot = await getDocs(facultyCol);
  const dateTime = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: []
  }
  facultySnapshot.docs.forEach(doc => {
    const data = doc.data();
    setDoc(doc.ref, {...data, dateTime: dateTime});
  })
}

async function resetSeat() {
  const seatCol = collection(db, 'seat_reservation');
  const seatSnapshot = await getDocs(seatCol);
  seatSnapshot.docs.forEach(doc => {
    deleteDoc(doc.ref);
  });
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
  const q = query(collection(db, "faculty_reservation"), where("name", "==", item));
  const querysnapshot = await getDocs(q);
  let id;
  querysnapshot.forEach((doc) => {
    id = doc.id;
  });
  const document = doc(db, "faculty_reservation", id);
  await updateDoc(document, {dateTime, personName: arrayUnion(person)});
}

export {
  getFacultyInfo,
  getSeatInfo,
  reserveFaculty,
  reserveSeat,
  resetFaculty,
  resetSeat
};