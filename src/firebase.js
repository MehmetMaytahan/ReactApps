import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlPvaogzZu-zC9hCiRuiuP6p_mqFAif-Q",
  authDomain: "twitter-clone-34ad5.firebaseapp.com",
  projectId: "twitter-clone-34ad5",
  storageBucket: "twitter-clone-34ad5.appspot.com",
  messagingSenderId: "673190853672",
  appId: "1:673190853672:web:56beafd163d379e966c91d",
  measurementId: "G-G9YKDJBYP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
