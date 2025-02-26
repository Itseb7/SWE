const firebaseConfig = {
    apiKey: "AIzaSyYourAPIKey",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
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