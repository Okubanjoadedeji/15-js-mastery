const searchButton = document.getElementById("search-button");
const brandInput = document.getElementById("brand");
const resultsList = document.getElementById("results");





const cars = [
  { brand: "Honda" },
  { brand: "Toyota" },
  { brand: "Ford" },
  { brand: "Chevrolet" },
  { brand: "BMW" },
  { brand: "Audi" },
  { brand: "Mercedes-Benz" },
  { brand: "Tesla" },
  { brand: "Kia" },
  { brand: "Hyundai" },
];

searchButton.addEventListener("click", function () {
  const brand = brandInput.value.toLowerCase().trim();

  // Filter cars based on brand (optional)
  let filteredCars = cars;
  if (brand) {
    filteredCars = filteredCars.filter((car) => car.brand.toLowerCase().includes(brand));
  }

  // Clear previous results
  resultsList.innerHTML = "";

  // Display results
  if (filteredCars.length > 0) {
    for (const car of filteredCars) {
      resultsList.textContent += `\n* ${car.brand})`;
    }
  } else {
    resultsList.textContent = `No cars found of brand '${brand}'.`;
  }
});
