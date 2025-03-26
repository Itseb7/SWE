const stations = [
    "Al Batha 201", "Al-Muraba 610 ", "Al Washm 401", "An-Namuthajiyah 603",
    "An-Namuthajiyah 602", "Takhassusi 220", "Takhassusi 219", "Takhassusi 218",
    "Takhassusi 217", "Takhassusi 216", "Takhassusi 215", "Takhassusi 213",
    "Takhassusi 212", "Takhassusi 210", "Takhassusi 209", 
    "Takhassusi 208", "Takhassusi 207", "Takhassusi 206", "Takhassusi 205",
    "Takhassusi 203", "Takhassusi 202", "Takhassusi 201", "king Fahd 201"
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
  