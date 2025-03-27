import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseauth.js"; // تأكد من أن هذا الملف يحتوي على تهيئة Firebase الصحيحة

const auth = getAuth(app);

document.getElementById("sendResetLink").addEventListener("click", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("recoverEmail").value;
    
    if (!email) {
        alert("Please enter your email address.");
        return;
    }

    console.log("Sending password reset email to:", email);

    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent! Check your email.");
        console.log("Reset email sent successfully!");
    } catch (error) {
        console.error("Error sending reset email:", error);
        alert(error.message);
    }
});
