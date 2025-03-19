import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

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

  const auth=getAuth();
  const db=getFirestore();

  

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })