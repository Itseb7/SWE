const stations = [
    "Al Batha 201", "King Abdulaziz 215", "Omar Bin Al Khatab 302", "Omar Bin Al Khatab 303",
    "Al dharan 201", "Salahuddin Al Ayubi 108", "Al-Malaz 503", "Al Ahsa'207",
    "Al Ahsa'206", "TAl Ahsa'205", "Al Ahsa'204", "Al Ahsa'203",
    "Al Ahsa'202", "Al Ahsa'201", "Makkah Al Mukarramah 303", 
    "Makkah Al Mukarramah 304", "Makkah Al Mukarramah 305", "Khurais 301", "Khurais 302",
    "Khalid Bin Al Walid 214", "Khalid Bin Al Walid 213", "Khalid Bin Al Walid 212B",
     "Khalid Bin Al Walid 211","Khalid Bin Al Walid 210","Khalid Bin Al Walid 209","Khalid Bin Al Walid 208",
     "Khalid Bin Alwaleed Road D","Khalid Bin Al Walid 207"
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
  