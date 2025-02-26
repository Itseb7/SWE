// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // التحقق من تطابق كلمات المرور
    if (password !== confirmPassword) {
        showError('كلمات المرور غير متطابقة');
        return;
    }

    try {
        // التحقق من وجود البريد الإلكتروني
        const methods = await auth.fetchSignInMethodsForEmail(email);
        if (methods.length > 0) {
            showError('البريد الإلكتروني مستخدم مسبقاً');
            return;
        }

        // إنشاء المستخدم
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        
        // حفظ بيانات إضافية في Firestore
        await db.collection('users').doc(userCredential.user.uid).set({
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert('تم التسجيل بنجاح!');
        form.reset();
    } catch (error) {
        handleFirebaseError(error);
    }
});

function handleFirebaseError(error) {
    switch (error.code) {
        case 'auth/email-already-in-use':
            showError('البريد الإلكتروني مستخدم بالفعل');
            break;
        case 'auth/invalid-email':
            showError('تنسيق البريد الإلكتروني غير صحيح');
            break;
        case 'auth/weak-password':
            showError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            break;
        default:
            showError('حدث خطأ غير متوقع: ' + error.message);
    }
}
// إظهار/إخفاء كلمة المرور
document.querySelectorAll('.password-toggle').forEach(icon => {
    icon.addEventListener('click', () => {
        const passwordField = icon.previousElementSibling;
        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
        icon.classList.toggle('fa-eye-slash');
    });
});

// التحقق من قوة كلمة المرور
function checkPasswordStrength(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
}