const stations = [
    "As-Suwaidi Al-Gharbi 601", "As-Suwaidi Al-Gharbi 02 A ", "Hamza Bin Abdulmuttalib 03 A",
     "Hamza Bin Abdulmuttalib 04 A","Hamza Bin Abdulmuttalib 05 A", "Hamza Bin Abdulmuttalib 06 A", 
     "Hamza Bin Abdulmuttalib 07 A", "Hamza Bin Abdulmuttalib 08 A","Hamza Bin Abdulmuttalib 09 A",
      "Dirab 10 A", "Dirab 11 A", "Dirab 12 A","Dirab 13 A", "Dirab 14 A", "Dirab 15 A", 
    "Dirab 16 A", "Utayqah 17 A", "Al-Yamamah 18 A", "Manfuha 19 A",
    "Al-Mansurah 20 A", "Al-Mansurah 21 A", "Al-Mansurah 22 A", "Ali Ibn Abi Talib E"
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
  