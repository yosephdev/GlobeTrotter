let preferences = {
  budget: "moderate",
  activity: "beach",
};

document
  .querySelector("#destinationBtn")
  .addEventListener("click", function () {
    let destination = document.querySelector("#destination").value;
    let recommendations = getRecommendations(destination, preferences);
    displayRecommendations(recommendations);
  });

function getRecommendations(destination, preferences) {
  // Code to retrieve recommendations based on destination and preferences goes here

  // Example recommendations
 let recommendations = [
   { name: "Bali, Indonesia", image: "./airPlane/bali.jpg" },
   { name: "Cancun, Mexico", image: "./airplane/cancun.jpg" },
   { name: "Phuket, Thailand", image: "./airplane/phuket.jpg" },
 ];

  return recommendations;
}

function displayRecommendations(recommendations) {
  let recommendationsHTML = "";
  recommendations.forEach((recommendation) => {
    recommendationsHTML += `
      <li>
        <h2 class="text-lg font-bold">${recommendation.name}</h2>
        <img src="${recommendation.image}" alt="${recommendation.name}">
      </li>
    `;
  });
  document.querySelector("#destinationResults").innerHTML = recommendationsHTML;
}
