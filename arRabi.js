const stations = [
    "Ar-Rabi 602", "King Abdulaziz 03 A", "King Abdulaziz 04 A", "King Abdulaziz 05 A",
    "King Abdulaziz 06 A", "King Abdulaziz 07 A", "King Abdulaziz 08 A", "King Abdulaziz 09 A",
    "Salahuddin Al Ayubi 1 A", "Salahuddin Al Ayubi 12 A", "Salahuddin Al Ayubi 13 A",
     "Salahuddin Al Ayubi 14 A", "Salahuddin Al Ayubi 15 A", "Salahuddin Al Ayubi 16 A", 
     "Ali Ibn Talib 17 A", "Ali Ibn Talib 18 A", "Ali Ibn Talib 19 A", "Ali Ibn Talib 20 A", "Ali Ibn Talib D",
    "Al-Khalidiah 22 B", "Al Kharj 24 A", "Al Kharj 26 A",
     "Al Kharj D"
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
  