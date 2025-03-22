const stations = [
    "SAB Bank", "DR SULAIMAN AL HABIB", "KAFD", "Al Murooj",
    "King Fahd District", "King Fahd District 2", "stc", "Al Wurud 2",
    "Al Urubah", "Alinma Bank", "Bank Albilad", "King Fahd Library",
    "Ministry of Interior", "Al Muorabba", "Passport Department", 
    "National Museum", "Al Bat'ha", "Qasr Al Hokm", "Al Owd",
    "Skirinah", "Manfouhah", "Al Iman Hospital", "Transportation Center",
    "Al Aziziah", "Ad Dar Al Baida"
  ];
  
  const listContainer = document.getElementById("stationList");
  
  stations.forEach((station, index) => {
    const div = document.createElement("div");
    div.className = "station-item";
    div.innerHTML = `
      <div class="line-connector">
        ${index !== stations.length - 1 ? '<div class="line"></div>' : ''}
        <div class="circle"></div>
      </div>
      <div class="station-name">${station}</div>
    `;
    listContainer.appendChild(div);
  });
  