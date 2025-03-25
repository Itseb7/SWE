function toggleAnswer(element) {
    element.classList.toggle("active");
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    if (sectionId === 'faq') {
        document.querySelectorAll('.tab-button')[0].classList.add('active');
    } else {
        document.querySelectorAll('.tab-button')[1].classList.add('active');
    }
}

function submitFeedback() {
    let feedbackText = document.getElementById("feedback").value;
    if (feedbackText.trim() === "") {
        alert("يرجى إدخال رسالة قبل الإرسال.");
    } else {
        alert("تم إرسال ملاحظاتك بنجاح!");
        document.getElementById("feedback").value = "";
    }
}
