// إنشاء الهيكل الرئيسي للصفحة
document.body.innerHTML = `
    <nav class="nav-bar">
        <button id="backBtn">← رجوع</button>
        <h1>اتصل بنا</h1>
        <button id="faqBtn">الأسئلة الشائعة</button>
    </nav>

    <div class="contact-section">
        <div class="contact-method">
            <img src="phone-icon.svg" alt="هاتف">
            <a id="phoneLink" href="tel:+966112345678">+966 11 234 5678</a>
        </div>
        
        <div class="contact-method">
            <img src="email-icon.svg" alt="بريد">
            <a id="emailLink" href="mailto:info@riyadhmetro.com">info@riyadhmetro.com</a>
        </div>
    </div>

    <form class="feedback-form">
        <textarea 
            id="feedbackInput" 
            placeholder="اكتب رسالتك هنا..." 
            required
            rows="5"
        ></textarea>
        <button type="submit">إرسال الملاحظات</button>
    </form>
`;

// إضافة الأنماط الأساسية
const style = document.createElement('style');
style.textContent = `
    .nav-bar {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .contact-section {
        margin: 20px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 10px;
    }

    .contact-method {
        display: flex;
        align-items: center;
        margin: 15px 0;
        gap: 10px;
    }

    .feedback-form {
        margin: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    textarea {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-family: inherit;
    }

    button {
        padding: 12px 24px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// معالجة أحداث النقر
document.getElementById('phoneLink').addEventListener('click', () => {
    console.log('Initiating phone call...');
    // يمكن استبدال هذا بالمنطق الفعلي لإجراء المكالمة
});

document.getElementById('emailLink').addEventListener('click', () => {
    console.log('Opening email client...');
    // سيتم فتح عميل البريد الإلكتروني افتراضيًا عبر الرابط mailto:
});

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedbackInput').value;
    
    if (feedback.trim()) {
        // إرسال الملاحظات عبر API (مثال)
        fetch('https://api.example.com/feedback', {
            method: 'POST',
            body: JSON.stringify({ message: feedback })
        })
        .then(() => alert('تم إرسال ملاحظاتك بنجاح ♥'))
        .catch(() => alert('حدث خطأ أثناء الإرسال'));
        
        document.getElementById('feedbackInput').value = '';
    }
});