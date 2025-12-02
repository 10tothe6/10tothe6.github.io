import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { auth, getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// 1. Firebase config — replace with YOURS
const firebaseConfig = {
    apiKey: "AIzaSyArv-BB3H5pIZFZBANfFYFG1bBNxO0veeA",
    authDomain: "duality-articles.firebaseapp.com",
    projectId: "duality-articles",
    storageBucket: "duality-articles.firebasestorage.app",
    messagingSenderId: "497426954182",
    appId: "1:497426954182:web:8081f58e64d32048c3a4c7",
    measurementId: "G-TJ5TXZEQH5"
  };

// 2. Init
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM
const statusText = document.getElementById("status");
const logoutBtn = document.getElementById("logout-btn");

//
// 3. SIGN UP
//
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log("User created:", cred.user.email);
    })
    .catch((err) => {
      alert(err.message);
    });
});

//
// 4. LOG IN
//
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log("Logged in:", cred.user.email);
    })
    .catch((err) => {
      alert(err.message);
    });
});

//
// 5. LOG OUT
//
logoutBtn.addEventListener("click", () => {
  auth.signOut();
});

//
// 6. Auth state changes
//
auth.onAuthStateChanged((user) => {
  if (user) {
    statusText.textContent = "Logged in as: " + user.email;
    logoutBtn.style.display = "block";
  } else {
    statusText.textContent = "Not logged in";
    logoutBtn.style.display = "none";
  }
});