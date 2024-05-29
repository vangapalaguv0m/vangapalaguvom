import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDF20fuR2RUtXAUIvm1-HL2NyAN6lhkjxs",
    authDomain: "vanga-palaguvom.firebaseapp.com",
    projectId: "vanga-palaguvom",
    storageBucket: "vanga-palaguvom.appspot.com",
    messagingSenderId: "673460727952",
    appId: "1:673460727952:web:013d868b966ab9ea876815",
    measurementId: "G-R83HNSFPLB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { app, auth, googleAuthProvider };
