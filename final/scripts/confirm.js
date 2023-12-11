let url = new URL(window.location);
let params  = url.searchParams;

document.addEventListener('DOMContentLoaded', function () {
    let submitCounter = parseInt(localStorage.getItem('submitCounter')) || 0;
  
    document.getElementById('submitCounterDisplay').textContent = submitCounter;

    let currentDate = new Date();
      let formattedDate = currentDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
      let formattedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      let dateTimeString = `${formattedDate} ${formattedTime}`;
      document.getElementById('currentDateTime').textContent = dateTimeString;
  });


document.querySelector('#yourname').textContent  = params.get("firstName");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yourphone').textContent = params.get("phone");
document.querySelector('#fruit1').textContent    = params.get("fruit1");
document.querySelector('#fruit2').textContent    = params.get("fruit2");
document.querySelector('#fruit3').textContent    = params.get("fruit3");
document.querySelector('#special').textContent   = params.get("special");



//nurtrition variable calculation
let fruits;

async function fetchFruits() {
    try {
        const response = await fetch("data/fruitlist.json");
        if (response.ok) {
            fruits = await response.json();
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching fruits:", error);
    }
}

function calculateTotalCalories(selectedFruits) {
    return selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.calories, 0);
}

function calculateTotalProtein(selectedFruits) {
    return selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.protein, 0);
}

function calculateTotalSugar(selectedFruits) {
    return selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.sugar, 0);
}

function calculateTotalCarbs(selectedFruits) {
  return selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.carbohydrates, 0);
}

function calculateTotalFat(selectedFruits) {
    return selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.fat, 0);
}

fetchFruits().then(() => {
    const fruit1 = params.get("fruit1");
    const fruit2 = params.get("fruit2");
    const fruit3 = params.get("fruit3");

    const selectedFruitNames = [fruit1, fruit2, fruit3];
    const selectedFruits = fruits.filter(fruit => selectedFruitNames.includes(fruit.name));

    const totalCalories = calculateTotalCalories(selectedFruits);
    const totalProtein = calculateTotalProtein(selectedFruits);
    const totalSugar = calculateTotalSugar(selectedFruits);
    const totalCarbs = calculateTotalCarbs(selectedFruits);
    const totalFat = calculateTotalFat(selectedFruits);

    // Set the values inside the .then block or within a function called from here
    document.querySelector('#totalcalories').textContent = totalCalories.toFixed(0).toString();
    document.querySelector('#totalprotein').textContent = totalProtein.toFixed(0).toString();
    document.querySelector('#totalsugar').textContent = totalSugar.toFixed(0).toString();
    document.querySelector('#totalcarbs').textContent = totalCarbs.toFixed(0).toString();
    document.querySelector('#totalfat').textContent = totalFat.toFixed(0).toString();
});