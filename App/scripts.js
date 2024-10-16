// Simulierte API Daten (Beispiel):
const googleTrends = [
  "Künstliche Intelligenz",
  "iPhone 15 Release",
  "Fußball Weltmeisterschaft 2024",
];

const tiktokTrends = ["#FYP", "#ViralDance", "#ComedySketch"];

const youtubeTrends = [
  "Trending Music Video",
  "Gameplay Reaction",
  "Tech Reviews",
];

const instagramTrends = ["#Fashion", "#TravelGoals", "#Food"];

// Chart.js Chart erstellen
function createChart(chartId, labels, data) {
  const ctx = document.getElementById(chartId).getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Beliebtheit",
          data: data,
          backgroundColor: "rgba(0, 123, 255, 0.7)",
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Trends in die Webseite einfügen und Charts anzeigen
function loadTrends() {
  const googleList = document.getElementById("google-list");
  googleTrends.forEach((trend) => {
    let li = document.createElement("li");
    li.textContent = trend;
    googleList.appendChild(li);
  });
  createChart("googleChart", googleTrends, [100, 80, 60]);

  const tiktokList = document.getElementById("tiktok-list");
  tiktokTrends.forEach((trend) => {
    let li = document.createElement("li");
    li.textContent = trend;
    tiktokList.appendChild(li);
  });
  createChart("tiktokChart", tiktokTrends, [90, 75, 65]);

  const youtubeList = document.getElementById("youtube-list");
  youtubeTrends.forEach((trend) => {
    let li = document.createElement("li");
    li.textContent = trend;
    youtubeList.appendChild(li);
  });
  createChart("youtubeChart", youtubeTrends, [95, 70, 50]);

  const instagramList = document.getElementById("instagram-list");
  instagramTrends.forEach((trend) => {
    let li = document.createElement("li");
    li.textContent = trend;
    instagramList.appendChild(li);
  });
  createChart("instagramChart", instagramTrends, [85, 77, 63]);
}

// Live-Suche nach Trends
document.getElementById("search-bar").addEventListener("input", function (e) {
  const searchText = e.target.value.toLowerCase();
  document.querySelectorAll(".trend-section ul li").forEach((item) => {
    if (item.textContent.toLowerCase().includes(searchText)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

// Filter nach Plattform
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const platform = this.getAttribute("data-platform");
    document.querySelectorAll(".trend-section").forEach((section) => {
      if (
        platform === "all" ||
        section.getAttribute("data-platform") === platform
      ) {
        section.style.display = "";
      } else {
        section.style.display = "none";
      }
    });

    // Markiere aktiven Filter
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// Dark Mode Switch
document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });

// Lade Trends, sobald die Seite geladen wird
document.addEventListener("DOMContentLoaded", loadTrends);
