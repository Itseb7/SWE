const firebaseConfig = {
  apiKey: "AIzaSyBOzPAr7-VSFm3y6SE7W_s1x3p-xz3HcXg",
  authDomain: "lastlogin-c910d.firebaseapp.com",
  projectId: "lastlogin-c910d",
  storageBucket: "lastlogin-c910d.firebasestorage.app",
  messagingSenderId: "897537946997",
  appId: "1:897537946997:web:7bc9f2857552ccd42e4f3c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// ===== إنشاء حساب =====
const signUp = document.getElementById("submitSignUp");
signUp?.addEventListener("click", async (event) => {
  event.preventDefault();

  const email = document.getElementById("rEmail").value.trim();
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("fName").value.trim();
  const lastName = document.getElementById("lName").value.trim();

  // تحقق الباسورد
  const isValidPassword =
    password.length >= 8 &&
    password.length <= 20 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!isValidPassword) {
    showMessage("Password does not meet the required criteria.", "signUpMessage");
    return;
  }

  try {
    const hashedPassword = await dcodeIO.bcrypt.hash(password,10);

    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    await db.collection("users").doc(user.uid).set({
      email,
      firstName,
      lastName,
      password: hashedPassword
    });

    showMessage("Account Created Successfully", "signUpMessage");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } catch (error) {
    const errorCode = error.code;
    if (errorCode === "auth/email-already-in-use") {
      showMessage("Email Address Already Exists !!!", "signUpMessage");
    } else {
      showMessage("Unable to create User", "signUpMessage");
      console.error("SignUp Error:", error);
    }
  }
});

// ===== تسجيل الدخول =====
const signIn = document.getElementById("submitSignIn");
signIn?.addEventListener("click", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    const docRef = db.collection("users").doc(user.uid);
    const userDoc = await docRef.get();

    if (userDoc.exists) {
      const savedHash = userDoc.data().password;
      const match = await dcodeIO .bcrypt.compare(password, savedHash);

      if (match) {
        showMessage("Login successful", "signInMessage");
        localStorage.setItem("loggedInUserId", user.uid);
        window.location.href = "homepage.html";
      } else {
        showMessage("Invalid password", "signInMessage");
      }
    } else {
      showMessage("User data not found", "signInMessage");
    }
  } catch (error) {
    const errorCode = error.code;
    if (errorCode === "auth/invalid-credential") {
      showMessage("Incorrect Email or Password", "signInMessage");
    } else {
      showMessage("Login failed: " + error.message, "signInMessage");
      console.error("SignIn Error:", error);
    }
  }
});



