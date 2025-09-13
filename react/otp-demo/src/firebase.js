import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAHP8Ipj9kR39hjIeXxPCeFxAoQ2J6LGo",
  authDomain: "otp-app-demo-dd492.firebaseapp.com",
  projectId: "otp-app-demo-dd492",
  storageBucket: "otp-app-demo-dd492.firebasestorage.app",
  messagingSenderId: "120960700585",
  appId: "1:120960700585:web:0ec43fa80ebac1901e99b8",
  measurementId: "G-ZP35QBY010"
};
 firebase.initializeApp(firebaseConfig);
export default firebase;