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
document.addEventListener("DOMContentLoaded", function () {
    // زر تسجيل الدخول
    const signInButton = document.getElementById("submitSignIn");
    // زر تسجيل الحساب
    const signUpButton = document.getElementById("submitSignUp");

    // توجيه المستخدم إلى صفحة "home.html" بعد تسجيل الدخول
    signInButton.addEventListener("click", function (event) {
        event.preventDefault(); // لمنع إعادة تحميل الصفحة
        // يمكنك إضافة منطق التحقق من صحة تسجيل الدخول هنا
        window.location.href = "home.html";
    });

    // توجيه المستخدم إلى صفحة "home.html" بعد إنشاء حساب جديد
    signUpButton.addEventListener("click", function (event) {
        event.preventDefault(); // لمنع إعادة تحميل الصفحة
        // يمكنك إضافة منطق التحقق من صحة تسجيل الحساب هنا
        window.location.href = "home.html";
    });
});