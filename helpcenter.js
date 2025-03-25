// script.js
document.addEventListener('DOMContentLoaded', () => {
    const faqData = [
        {
            question: "ما هي أسعار تذاكر المترو؟",
            answer: "تبدأ الأسعار من 5 ريالات لمدة ساعتين مع إمكانية الترقية للبطاقة الذكية"
        },
        {
            question: "هل يوجد اشتراطات لاصطحاب الأطفال؟",
            answer: "يسمح باصطحاب الأطفال تحت 6 سنوات مجانًا بحد أقصى طفلين لكل شخص بالغ"
        }
    ];

    const container = document.querySelector('.container');

    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="question" aria-expanded="false" aria-controls="answer-${index}">
                <span>${item.question}</span>
                <img src="arrow-down.svg" class="arrow" alt="عرض الإجابة">
            </div>
            <div class="answer" id="answer-${index}">${item.answer}</div>
        `;

        const questionElement = faqItem.querySelector('.question');
        questionElement.addEventListener('click', toggleAnswer);
        
        container.appendChild(faqItem);
    });
});

function toggleAnswer(event) {
    const parent = event.currentTarget.closest('.faq-item');
    const answer = parent.querySelector('.answer');
    const arrow = parent.querySelector('.arrow');
    
    answer.classList.toggle('active');
    arrow.classList.toggle('active');
    
    // تحديث خاصية الوصولية
    const isExpanded = answer.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', isExpanded);
}