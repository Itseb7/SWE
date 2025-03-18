const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// تهيئة Firebase Auth
const auth = getAuth();

document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("submitSignIn");
    const signUpButton = document.getElementById("submitSignUp");

    // تسجيل الدخول
    if (signInButton) {
        signInButton.addEventListener("click", function (event) {
            event.preventDefault();
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("تم تسجيل الدخول بنجاح:", userCredential.user);
                    window.location.href = "home.html"; // الانتقال بعد نجاح تسجيل الدخول
                })
                .catch((error) => {
                    console.error("خطأ في تسجيل الدخول:", error.message);
                    alert("خطأ في تسجيل الدخول: " + error.message);
                });
        });
    }

    // إنشاء حساب جديد
    if (signUpButton) {
        signUpButton.addEventListener("click", function (event) {
            event.preventDefault();
            
            const fName = document.getElementById("fName").value;
            const lName = document.getElementById("lName").value;
            const email = document.getElementById("rEmail").value;
            const password = document.getElementById("rPassword").value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("تم إنشاء الحساب بنجاح:", userCredential.user);
                    window.location.href = "home.html"; // الانتقال بعد نجاح التسجيل
                })
                .catch((error) => {
                    console.error("خطأ في إنشاء الحساب:", error.message);
                    alert("خطأ في إنشاء الحساب: " + error.message);
                });
        });
    }
});