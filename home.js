function applyLanguage(lang) {
    let translations = {
        "ar": {
            "welcome": "مرحبًا بك في سالك!",
            "user": "مستخدم",
            "tickets": "🚆 التذاكر",
            "routes": "🗺️ استعراض المسارات",
            "offers": "🎉 العروض والخصومات",
            "payments": "💳 سجل المدفوعات",
            "profile": "👤 إعدادات الحساب",
            "language": "🌍 تغيير اللغة",
            "logout": "تسجيل الخروج"
        },
        "en": {
            "welcome": "Welcome to Salik!",
            "user": "User",
            "tickets": "🚆 Tickets",
            "routes": "🗺️ View Routes",
            "offers": "🎉 Offers & Discounts",
            "payments": "💳 Payment History",
            "profile": "👤 Account Settings",
            "language": "🌍 Change Language",
            "logout": "Logout"
        },
        "hi": {
            "welcome": "सालिक में आपका स्वागत है!",
            "user": "उपयोगकर्ता",
            "tickets": "🚆 टिकटें",
            "routes": "🗺️ मार्ग देखें",
            "offers": "🎉 ऑफ़र और छूट",
            "payments": "💳 भुगतान इतिहास",
            "profile": "👤 खाता सेटिंग्स",
            "language": "🌍 भाषा बदलें",
            "logout": "लॉग आउट"
        }
    };

    // تحديث النصوص في الصفحة
    document.getElementById("welcomeMessage").innerText = `🚆 ${translations[lang]["welcome"]}`;
    document.getElementById("logoutBtn").innerText = translations[lang]["logout"];

    let options = document.querySelectorAll(".option");
    options[0].innerText = translations[lang]["tickets"];
    options[1].innerText = translations[lang]["routes"];
    options[2].innerText = translations[lang]["offers"];
    options[3].innerText = translations[lang]["payments"];
    options[4].innerText = translations[lang]["profile"];
    options[5].innerText = translations[lang]["language"];

    // تحديث شريط التنقل السفلي
    let navLinks = document.querySelectorAll(".bottom-nav a");
    navLinks[0].innerText = translations[lang]["welcome"];
    navLinks[1].innerText = translations[lang]["tickets"];
    navLinks[2].innerText = translations[lang]["payments"];
    navLinks[3].innerText = translations[lang]["profile"];
}

// 🟢 دالة مساعدة لاسترجاع الترجمة بناءً على اللغة المختارة
function getTranslation(key) {
    let lang = localStorage.getItem("language") || "ar";
    let translations = {
        "ar": {
            "welcome": "مرحبًا بك في سالك!",
            "user": "مستخدم"
        },
        "en": {
            "welcome": "Welcome to Salik!",
            "user": "User"
        },
        "hi": {
            "welcome": "सालिक में आपका स्वागत है!",
            "user": "उपयोगकर्ता"
        }
    };
    return translations[lang][key];
    document.addEventListener("DOMContentLoaded", function () {
        let savedLanguage = localStorage.getItem("language") || "ar"; // تحميل اللغة المحفوظة
        applyLanguage(savedLanguage);
    });
    
}
