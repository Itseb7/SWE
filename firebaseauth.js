 
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from"https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"
import{getFirestore,setDoc,doc} from"https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js"
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBOzPAr7-VSFm3y6SE7W_s1x3p-xz3HcXg",
   authDomain: "lastlogin-c910d.firebaseapp.com",
   projectId: "lastlogin-c910d",
   storageBucket: "lastlogin-c910d.firebasestorage.app",
   messagingSenderId: "897537946997",
   appId: "1:897537946997:web:7bc9f2857552ccd42e4f3c"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);



 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }
 const signUp=document.getElementById('submitSignUp');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            firstName: firstName,
            lastName:lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='index.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
 });

 const signIn=document.getElementById('submitSignIn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='homepage.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    })
    // Google Sign-In
document.getElementById("googleSignInBtn").addEventListener("click", function() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Google sign-in successful:", result.user);
            alert("Signed in with Google!");
            window.location.href = "dashboard.html"; // Redirect after Google sign-in
        })
        .catch((error) => {
            console.error(" Google sign-in error:", error.message);
            alert("Error: " + error.message);
        });
});
 })