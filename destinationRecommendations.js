const preferences = {
  budget: "moderate",
  activity: "beach",
};

document.querySelector("#destinationBtn").addEventListener("click", () => {
  const destination = document.querySelector("#destination").value;
  const recommendations = getRecommendations(destination, preferences);
  displayRecommendations(recommendations);
});

const getRecommendations = (destination, preferences) => {
  // Example recommendations
  return [
    { name: "Bali, Indonesia", image: "./airPlane/bali.jpg" },
    { name: "Cancun, Mexico", image: "./airplane/cancun.jpg" },
    { name: "Phuket, Thailand", image: "./airplane/phuket.jpg" },
  ];
};

const displayRecommendations = (recommendations) => {
  const recommendationsHTML = recommendations.map(recommendation => `
    <li>
      <h2 class="text-lg font-bold">${recommendation.name}</h2>
      <img src="${recommendation.image}" alt="${recommendation.name}">
    </li>
  `).join('');
  document.querySelector("#destinationResults").innerHTML = recommendationsHTML;
};
