const stations = [
    "Transportation Center", "Al Batha 210 ", "Al Batha 208", "Al Batha 207",
    "Al Batha 206", "Al Batha 205", "Al Batha 204", "Al Batha 203",
    "Al Batha 202", "Al Batha 201", "Al-Muraba 610", "Al Washm 401",
    "An-Namuthajiyah 603", "An-Namuthajiyah 602", "King Saud 401", 
    "An-Nasiriyah 601", "Ash-Sharafiyah 604", "Ash-Sharafiyah 603", "Ash-Sharafiyah 602",
    "Ash-Sharafiyah 601", "king khalid 206", "king khalid 205", "king khalid 204",
    "king khalid 203", "Um Al Hamam 208","Um Al Hamam 207","Um Al Hamam 206","Um Al Hamam 205",
    "Um Al Hamam 204","Um Al Hamam 203","Um Al Hamam 202","Um Al Hamam 201","North Al-Mathar 502",
    "North Al-Mathar 602","North Al-Mathar 601","Al Urubah 404","Al Urubah 403","Al Urubah 401","KSU 503"
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
  