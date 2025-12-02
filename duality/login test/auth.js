// 1. Firebase config — replace with YOURS
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
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