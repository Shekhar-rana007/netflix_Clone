// Firebase Core Imports
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIzUaOWH0DaVo3Dh9kQZioWY7RvFEE7Eg",
  authDomain: "netflix-clone-d60d6.firebaseapp.com",
  projectId: "netflix-clone-d60d6",
  storageBucket: "netflix-clone-d60d6.appspot.com", // ✅ fixed typo
  messagingSenderId: "855931414171",
  appId: "1:855931414171:web:9a0f2cce70faa499f2c83e",
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//
// ✅ Reusable Auth Functions
//

// Sign Up User
const registerUser = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Save extra info (like name) to Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email,
      name,
      createdAt: new Date().toISOString(),
    });

    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};

// Login User
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};

// Logout User
const logoutUser = async () => {
  try {
    await signOut(auth);
    return { message: "Logged out successfully" };
  } catch (error) {
    return { error: error.message };
  }
};

// Get User Info
const getUserData = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    return { error: error.message };
  }
};

//
// ✅ Export Everything
//
export {
  auth,
  db,
  registerUser,
  loginUser,
  logoutUser,
  getUserData,
};
