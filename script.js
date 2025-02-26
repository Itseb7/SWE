// script.js
document.addEventListener('DOMContentLoaded', function() {
    // اختيار العناصر من الصفحة
    const myButton = document.getElementById('myButton');
    const pageTitle = document.querySelector('h1');
    
    // تغيير النص والألوان عند النقر
    myButton.addEventListener('click', function() {
        // تغيير خصائص الزر
        this.textContent = 'تم النقر! 👌';
        this.style.backgroundColor = '#2E7D32';
        
        // تعديل عنوان الصفحة
        pageTitle.textContent = 'أهلاً بالعالم! 🌍';
        pageTitle.style.color = '#2196F3';
        pageTitle.style.transition = 'all 0.5s ease';
        
        // إضافة فقاعة تأثير
        const bubble = document.createElement('div');
        bubble.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgba(33, 150, 243, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: bubble 0.8s linear;
        `;
        
        // تحديد موقع الفقاعة
        const rect = this.getBoundingClientRect();
        bubble.style.left = `${rect.left + rect.width/2 - 10}px`;
        bubble.style.top = `${rect.top - 20}px`;
        document.body.appendChild(bubble);
        
        // إزالة الفقاعة بعد الإنتهاء من الأنيميشن
        setTimeout(() => bubble.remove(), 300);
    });

    // إضافة تأثيرات عند التمرير
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition > 100) {
            pageTitle.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });

    // تأثيرات عند مرور الماوس على الزر
    myButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(3deg)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });

    myButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.boxShadow = 'none';
    });
});

// تعريف أنيميشن الفقاعات
const style = document.createElement('style');
style.textContent = `
    @keyframes bubble {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);