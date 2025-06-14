const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const mealContainer = document.getElementById("mealContainer");
const modalContainer = document.getElementById("modalContainer");

async function fetchMeals(query = "") {
  mealContainer.innerHTML = `<div class="flex justify-center col-span-full m-8">
            <div class="w-12 h-12 rounded-full border-4 border-gray-200 border-t-yellow-500 animate-spin"></div>
          </div>`;
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await res.json();
  displayMeals(data.meals || []);
}

function displayMeals(meals) {
  if (meals.length > 0) {
    mealContainer.innerHTML = meals
      .map(
        (meal) =>
          `<div class="shadow-xl rounded-lg overflow-hidden">
      <img src=${meal.strMealThumb} alt="" class="" />
      <div class="m-3 flex flex-col">
        <h4 class="font-bold">${meal.strMeal}</h4>
        <p class="text-[13px] my-1">${meal.strInstructions.substring(0, 60)}...</p>
        <button class="text-[13px] font-medium text-white bg-yellow-500 leading-[14px] p-3 rounded-[5px] self-end cursor-pointer" onclick='viewModal(${JSON.stringify(
          meal
        )})'>
          VIEW DETAILS
        </button>
      </div>
    </div>`
      )
      .join("");
  } else {
    mealContainer.innerHTML = `<p class='col-span-full text-center text-gray-500'>No meals found.</p>`;
  }
}

function viewModal(meal) {
  modalContainer.innerHTML = `<div class="bg-white p-4 rounded-xl sm:max-w-[500px] md:max-w-[50vw] max-h-[90vh] flex flex-col mx-12">
  
  <div class="my-3 overflow-y-auto">
  <div class="max-h-[60vh] max-w-[100%] overflow-hidden"><img src=${meal.strMealThumb} alt="" class="rounded-tl-xl rounded-tr-xl h-full w-full object-contain" /></div>
  <h4 class="font-bold mt-3">${meal.strMeal}</h4>
    <p class="text-[13px] my-1">${meal.strInstructions}</p>
  </div>
  <button class="text-[13px] font-medium text-white bg-yellow-500 leading-[14px] p-3 rounded-[5px] self-end cursor-pointer" onclick="closeModal()">
    CLOSE
  </button>
</div>`;

  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
}

function closeModal() {
  modalContainer.classList.add("hidden");
  modalContainer.classList.remove("flex");
}

function searchMeal() {
  const query = searchInput.value.trim();
  fetchMeals(query);
}

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchMeal();
});

function searchByButton() {
  searchMeal();
}

window.addEventListener("DOMContentLoaded", () => fetchMeals());
