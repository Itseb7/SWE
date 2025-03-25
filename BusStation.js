// تحديد جميع المسارات
const routes = document.querySelectorAll(".route");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const stationList = document.getElementById("station-list");
const closeBtn = document.querySelector(".close-btn");

// إضافة حدث النقر على كل مسار
routes.forEach(route => {
    route.addEventListener("click", () => {
        const routeNumber = route.getAttribute("data-route");
        const stations = route.getAttribute("data-stations").split(",");

        // تحديث عنوان النافذة
        popupTitle.innerHTML = `🚍 مسار رقم ${routeNumber}`;

        // تفريغ القائمة السابقة
        stationList.innerHTML = "";

        // إضافة المحطات للقائمة
        stations.forEach(station => {
            const stationElement = document.createElement("div");
            stationElement.className = "station";
            stationElement.innerText = station.trim();
            stationList.appendChild(stationElement);
        });

        // إظهار النافذة المنبثقة
        popup.style.display = "flex";
    });
});

// إغلاق النافذة عند الضغط على زر (×)
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// إغلاق النافذة عند النقر خارج المحتوى
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});fetch("https://opendata.rcrc.gov.sa/terms/terms-and-conditions.pdf") // ضع الرابط الصحيح للـ API هنا
.then(response => response.json())
.then(data => {
    console.log(data); // عرض البيانات في وحدة التحكم
    // يمكنك هنا تحديث واجهة الموقع بناءً على البيانات المستلمة
})
.catch(error => console.error("حدث خطأ أثناء جلب البيانات:", error));