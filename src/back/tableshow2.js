import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  piKey: "AIzaSyAkJrPoYX8dV76_2YCrWkV10CqNXnQ-oXc",
authDomain: "frr-branch.firebaseapp.com",
projectId: "frr-branch",
storageBucket: "frr-branch.appspot.com",
messagingSenderId: "746974135008",
appId: "1:746974135008:web:aefeb21f3ac06ac0b80685",
measurementId: "G-JKNDVYQ66N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

getCities(db);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'seat_reservation');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
}