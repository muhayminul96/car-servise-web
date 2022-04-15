// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: prosses.env.REACT_APP_apiKey,
  authDomain: prosses.env.REACT_APP_authDomain,
  projectId: prosses.env.REACT_APP_projectId,
  storageBucket: prosses.env.REACT_APP_storageBucket,
  messagingSenderId: prosses.env.REACT_APP_messagingSenderId,
  appId: prosses.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
