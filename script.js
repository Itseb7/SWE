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

// إحضار نموذج التسجيل
const form = document.getElementById('signupForm');

// التعامل مع حدث إرسال النموذج
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

    // التحقق من صحة البريد الإلكتروني
    if (!validateEmail(email)) {
        showError('تنسيق البريد الإلكتروني غير صحيح');
        return;
    }

    // التحقق من أن كلمة المرور قوية
    if (!checkPasswordStrength(password)) {
        showError('كلمة المرور يجب أن تكون قوية');
        return;
    }

    try {
        // التحقق من وجود البريد الإلكتروني
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
            showError('البريد الإلكتروني مستخدم مسبقاً');
            return;
        }

        // إنشاء المستخدم
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // حفظ بيانات إضافية في Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
            email: email,
            createdAt: serverTimestamp()
        });

        // نقل المستخدم إلى الصفحة الرئيسية بعد نجاح التسجيل
        alert('تم التسجيل بنجاح!');
        form.reset();
        window.location.href = 'home.html';  // استبدل "home.html" بالصفحة الرئيسية الخاصة بك
        
    } catch (error) {
        handleFirebaseError(error);
    }
});

// التعامل مع الأخطاء
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

// التحقق من قوة كلمة المرور
function checkPasswordStrength(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongRegex.test(password);
}

// التحقق من تنسيق البريد الإلكتروني
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// إظهار الأخطاء
function showError(message) {
    alert(message);  // يمكن استبداله بإظهار الخطأ في واجهة المستخدم بشكل أكثر تخصيصًا
}