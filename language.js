// 🟢 تحميل اللغة المحفوظة عند فتح أي صفحة
document.addEventListener("DOMContentLoaded", function () {
    let savedLanguage = localStorage.getItem("language") || "ar"; // استرجاع اللغة الافتراضية العربية
    applyLanguageToPage(savedLanguage);
});

// 🟢 حفظ اللغة المختارة وتحديث جميع الصفحات
function saveLanguage() {
    let selectedLanguage = document.getElementById("languageSelect").value;
    localStorage.setItem("language", selectedLanguage);
    applyLanguageToPage(selectedLanguage);
    alert("✅ تم تغيير اللغة بنجاح!");
    window.location.href = "home.html"; // إعادة توجيه المستخدم إلى الصفحة الرئيسية بعد الحفظ
}

// 🟢 تحديث النصوص بناءً على اللغة المختارة في جميع الصفحات
function applyLanguageToPage(lang) {
    let translations = {
        "ar": {
            "homeTitle": "سالك - الصفحة الرئيسية",
            "welcomeMessage": "مرحبًا بك في سالك! 🚆",
            "ticketsOption": "🚆 التذاكر",
            "routesOption": "🗺️ استعراض المسارات",
            "offersOption": "🎉 العروض والخصومات",
            "paymentsOption": "💳 سجل المدفوعات",
            "profileOption": "👤 إعدادات الحساب",
            "languageOption": "🌍 تغيير اللغة",
            "logoutBtn": "تسجيل الخروج",
            "chooseLangText": "اختر لغتك المفضلة:",
            "saveButton": "حفظ"
        },
        "en": {
            "homeTitle": "Salik - Home",
            "welcomeMessage": "Welcome to Salik! 🚆",
            "ticketsOption": "🚆 Tickets",
            "routesOption": "🗺️ View Routes",
            "offersOption": "🎉 Offers & Discounts",
            "paymentsOption": "💳 Payment History",
            "profileOption": "👤 Account Settings",
            "languageOption": "🌍 Change Language",
            "logoutBtn": "Logout",
            "chooseLangText": "Choose your preferred language:",
            "saveButton": "Save"
        },
        "hi": {
            "homeTitle": "सालिक - होम",
            "welcomeMessage": "सालिक में आपका स्वागत है! 🚆",
            "ticketsOption": "🚆 टिकटें",
            "routesOption": "🗺️ मार्ग देखें",
            "offersOption": "🎉 ऑफ़र और छूट",
            "paymentsOption": "💳 भुगतान इतिहास",
            "profileOption": "👤 खाता सेटिंग्स",
            "languageOption": "🌍 भाषा बदलें",
            "logoutBtn": "लॉग आउट",
            "chooseLangText": "अपनी पसंदीदा भाषा चुनें:",
            "saveButton": "सहेजें"
        }
    };

    // 🟢 تحديث النصوص في `home.html`
    if (document.getElementById("homeTitle")) {
        document.getElementById("homeTitle").innerText = translations[lang]["homeTitle"];
    }
    if (document.getElementById("welcomeMessage")) {
        document.getElementById("welcomeMessage").innerText = translations[lang]["welcomeMessage"];
    }
    if (document.getElementById("logoutBtn")) {
        document.getElementById("logoutBtn").innerText = translations[lang]["logoutBtn"];
    }

    let options = ["ticketsOption", "routesOption", "offersOption", "paymentsOption", "profileOption", "languageOption"];
    options.forEach(option => {
        if (document.getElementById(option)) {
            document.getElementById(option).innerText = translations[lang][option];
        }
    });

    // 🟢 تحديث النصوص في `language.html`
    if (document.getElementById("chooseLangText")) {
        document.getElementById("chooseLangText").innerText = translations[lang]["chooseLangText"];
    }
    if (document.getElementById("saveButton")) {
        document.getElementById("saveButton").innerText = translations[lang]["saveButton"];
    }
}