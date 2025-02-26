// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, serverTimestamp } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyClE1Pacj0iGZ2rOY7YMPHdfwoUzuYu8ow",
  authDomain: "swee-98fd1.firebaseapp.com",
  projectId: "swee-98fd1",
  storageBucket: "swee-98fd1.firebasestorage.app",
  messagingSenderId: "857642178096",
  appId: "1:857642178096:web:b115551cc29db9d2b5fff5",
  measurementId: "G-ZMJ85N8DNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Form submission event
const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate if passwords match
    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    try {
        // Create user with Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Save additional data in Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
            email: email,
            createdAt: serverTimestamp()
        });

        // Redirect to the main page after successful registration
        alert('Account created successfully!');
        window.location.href = 'home.html'; // Change 'home.html' to your main page URL
    } catch (error) {
        handleFirebaseError(error);
    }
});

// Handle Firebase errors
function handleFirebaseError(error) {
    switch (error.code) {
        case 'auth/email-already-in-use':
            showError('This email is already in use.');
            break;
        case 'auth/invalid-email':
            showError('Invalid email format.');
            break;
        case 'auth/weak-password':
            showError('Password must be at least 6 characters long.');
            break;
        default:
            showError('An unexpected error occurred: ' + error.message);
    }
}

// Show error messages
function showError(message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = '#d32f2f';
    error.style.fontSize = '14px';
    error.style.marginTop = '-10px';
    error.style.marginBottom = '10px';
    form.prepend(error);
}