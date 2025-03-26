const stations = [
    "Transportation Center", "Al Batha 210 ", "Al Batha 208", "Al Batha 207",
    "Al Batha 206", "Al Batha 205", "Al Batha 204", "Al Batha 203",
    "Al Batha 202", "Al Batha 201", "Al-Muraba 610", "Al-Muraba 609",
    "Al-Muraba 607", "Al-Muraba 606", "Al-Muraba 605", 
    "Al-Olaya 613", "Olaya 218", "Olaya 217", "Olaya 216",
    "Olaya 215", "Olaya 212", "Olaya 211", "Olaya 210","Olaya 209","Olaya 218 208",
    "Olaya 207","Olaya 206","Al-Mughera Bin Shoubah 101"

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
  