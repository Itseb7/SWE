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