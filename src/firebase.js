import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDtRupfVUvKyT-nEdqaTM9M0ZHCrruSnVY",
    authDomain: "fir-a8641.firebaseapp.com",
    projectId: "fir-a8641",
    storageBucket: "fir-a8641.appspot.com",
    messagingSenderId: "643070024509",
    appId: "1:643070024509:web:b8be88baa090fe6e024354"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);