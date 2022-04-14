// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVLi9VrtsJbPpvOk3avuHIlKxADsYaUS8",
  authDomain: "genius-car-service-650cb.firebaseapp.com",
  projectId: "genius-car-service-650cb",
  storageBucket: "genius-car-service-650cb.appspot.com",
  messagingSenderId: "1073492122253",
  appId: "1:1073492122253:web:11021283137cf8030760c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth