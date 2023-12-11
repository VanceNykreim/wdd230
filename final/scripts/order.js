const fruitJSON = "data/fruitlist.json";
const menus = document.querySelectorAll(".menus");

function populateMenus(data) {
  fruitNames = data.map((fruit) => fruit.name);
  console.log(fruitNames);
  menus.forEach((dropdown) => {
    for (const fruitName of fruitNames) {
      let option = document.createElement("option");
      option.value = fruitName;
      option.textContent = fruitName;
      dropdown.appendChild(option);
    }
  });
}

async function getFruit() {
  try {
    const response = await fetch(fruitJSON);
    if (response.ok) {
      const data = await response.json();
      populateMenus(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getFruit();

    document.getElementById('smoothieOrderForm').addEventListener('submit', function(event) {
    alert('Order placed successfully!');
});