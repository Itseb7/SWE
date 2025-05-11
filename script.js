const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function () {
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
});
signInButton.addEventListener('click', function () {
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
});

// تحقق كلمة المرور
const passwordInput = document.getElementById("rPassword");
const passwordMsg = document.getElementById("password-msg");
const submitBtn = document.getElementById("submitSignUp");

function validatePassword() {
  const pass = passwordInput.value;

  const rules = {
    length: pass.length >= 8,
    max: pass.length <= 20,
    number: /\d/.test(pass),
    uppercase: /[A-Z]/.test(pass),
    lowercase: /[a-z]/.test(pass),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(pass)
  };

  document.getElementById("rule-length").style.color = rules.length ? "green" : "gray";
  document.getElementById("rule-max").style.color = rules.max ? "green" : "gray";
  document.getElementById("rule-number").style.color = rules.number ? "green" : "gray";
  document.getElementById("rule-uppercase").style.color = rules.uppercase ? "green" : "gray";
  document.getElementById("rule-lowercase").style.color = rules.lowercase ? "green" : "gray";
  document.getElementById("rule-special").style.color = rules.special ? "green" : "gray";

  if (!rules.length) {
    passwordMsg.textContent = "Password must be at least 8 characters.";
    submitBtn.disabled = true;
  } else if (!rules.max) {
    passwordMsg.textContent = "Password must not exceed 20 characters.";
    submitBtn.disabled = true;
  } else if (!rules.number) {
    passwordMsg.textContent = "Password must include at least one number.";
    submitBtn.disabled = true;
  } else if (!rules.uppercase) {
    passwordMsg.textContent = "Password must include at least one uppercase letter.";
    submitBtn.disabled = true;
  } else if (!rules.lowercase) {
    passwordMsg.textContent = "Password must include at least one lowercase letter.";
    submitBtn.disabled = true;
  } else if (!rules.special) {
    passwordMsg.textContent = "Password must include at least one special character.";
    submitBtn.disabled = true;
  } else {
    passwordMsg.textContent = "";
    submitBtn.disabled = false;
  }
}


if (passwordInput && submitBtn) {
  submitBtn.disabled = true;
  passwordInput.addEventListener("input", validatePassword);

  submitBtn.addEventListener("click", (e) => {
    validatePassword();
    if (submitBtn.disabled) {
      e.preventDefault();
    }
  });
}

