 // 🗺️ إنشاء خريطة باستخدام Leaflet
const map = L.map('map').setView([24.7136, 46.6753], 11);

// ⚡️ إضافة الخريطة الأساسية من OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 🚆 تعريف المحطات حسب كل خط مترو
const metroLines = {
  "Purple": ["KAFD", "Ar Rabi", "Uthman Bin Affan Road", "SABIC", "Granadia", "Al Yarmuk", "Al Hamra", "Al Andalus", "Khurais Road", "As Salam", "An Naseem", "Hassan Bin Thabit Street", "Harun Ar Rashid Road", "PNU1"],
  "Blue": ["SAB Bank", "Dr.Sulaiman Al Habib", "KAFD", "Al Murooj", "King Fahad District", "King Fahad District 2", "STC", "Al Wurud 2", "Al Urubah", "Alinma Bank", "Bank Albilad", "King Fahad Library", "Ministry of Interior", "Al Murabba", "Passport Department", "National Museum", "Ministry of Finance", "Al Bat’ha", "Qasr Al Hokm", "Al Owd", "Skirinah", "Manfouhah", "Al Iman Hospital", "Transportation Center", "Al Aziziah", "Ad Dar Al Baida", "At Takhassusi"],
  "Red": ["King Saud University", "King Salman Oasis", "KACST", "At Takhassusi", "STC", "Al-Wurud", "King Abdulaziz Road", "Ministry of Education", "An Nuzhah", "Riyadh Exhibition Center", "Khalid Bin Alwaleed Road", "Al Hamra", "Al Khaleej", "Ishbiliyah", "King Fahad Sports City"],
  "Orange": ["Jeddah Road", "Tuwaiq", "Ad Douh", "Western Station", "Aishah bint Abi Bakr Street", "ADharat Al Badiah", "Sultanah", "Al Jarradiyah", "Courts Complex", "Qasr Al Hokm", "Al Hilla", "Al Margab", "As Salhiyah", "First Industrial City", "Railway", "Al Malaz", "Jarir District", "Al Rajhi Grand Mosque", "Harun Ar Rashid Road", "An Naseem", "Hassan Bin Thabit Street", "Khashm Al An"],
  "Yellow": ["Airport T1-2", "Airport T3-4", "Airport T5", "PNU2", "PNU1"],
  "Green": ["King Salman Park", "Ministry of Education", "As Sulimaniyah", "Ad Dhabab", "Abu Dhabi Square", "Officers Club", "GOSI", "Al Wazarat", "Ministry of Defence", "King Abdulaziz Hospital", "Ministry of Finance", "National Museum"]
};

// 🎨 ألوان المسارات
const lineColors = {
  "Purple": "purple",
  "Blue": "#007AFF",
  "Red": "red",
  "Orange": "orange",
  "Yellow": "gold",
  "Green": "green"
};

// 📍 إحداثيات المحطات (تقديرية)
const stationCoordinates = {};
let lat = 24.7000;
let lng = 46.6500;
Object.values(metroLines).flat().forEach((station) => {
  if (!stationCoordinates[station]) {
    stationCoordinates[station] = [
      lat + (Math.random() - 0.5) * 0.3,
      lng + (Math.random() - 0.5) * 0.3,
    ];
  }
});

// 📌 تعبئة القوائم المنسدلة
const locationSelect = document.getElementById("location");
const destinationSelect = document.getElementById("destination");

Object.keys(stationCoordinates).forEach((station) => {
  locationSelect.appendChild(new Option(station, station));
  destinationSelect.appendChild(new Option(station, station));
});

// 🔄 المتغير لحفظ المسار الحالي
let currentRoute = null;

// 📍 البحث وعرض المسار
function findBestRoute() {
  const location = locationSelect.value;
  const destination = destinationSelect.value;

  if (!location || !destination) {
    alert("Please select both a starting and destination station.");
    return;
  }

  // تحديد الخط المناسب
  let selectedLine = null;
  for (let [line, stations] of Object.entries(metroLines)) {
    if (stations.includes(location) && stations.includes(destination)) {
      selectedLine = line;
      break;
    }
  }

  if (!selectedLine) {
    alert("No direct route available between the selected stations.");
    return;
  }

  // حذف الخط السابق
  if (currentRoute) {
    map.removeLayer(currentRoute);
  }

  const stationsInLine = metroLines[selectedLine];
  let startIndex = stationsInLine.indexOf(location);
  let endIndex = stationsInLine.indexOf(destination);
  if (startIndex > endIndex) [startIndex, endIndex] = [endIndex, startIndex];

  const routeCoordinates = stationsInLine
    .slice(startIndex, endIndex + 1)
    .map((st) => stationCoordinates[st]);

  // رسم خط متقطع أخف
  currentRoute = L.polyline(routeCoordinates, {
    color: lineColors[selectedLine],
    weight: 4,
    dashArray: "8, 6"
  }).addTo(map);

  // عرض النتيجة
  document.getElementById("result").innerHTML = `
    <span style="color:${lineColors[selectedLine]}; font-weight:bold;">
      ${location} ➝ ${destination} via ${selectedLine} Line
    </span>`;
}

// ⏩ التفاعل عند التغيير
locationSelect.addEventListener("change", findBestRoute);
destinationSelect.addEventListener("change", findBestRoute);
 