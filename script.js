function api () {
    var searchText = document.getElementById("search").value ;
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)  ); 
  
  // clearing search box and prev. content 
     document.getElementById("search").value = "";
     document.getElementById("container").textContent = "";
  }
  function display (data){
    var container = document.getElementById("container");
    var maxToShow = Math.min(5, data.meals.length); // Show maximum 5 meals or less
    
    for (var a = 0; a < maxToShow; a++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("card", "my-4", "col-md-4");
        newDiv.innerHTML = `
            <img class="card-img-top" src="${data.meals[a].strMealThumb}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${data.meals[a].strMeal}</h5>
                <p class="card-id">Meal ID: ${data.meals[a].idMeal}</p>
                <p class="card-text">${data.meals[a].strInstructions}</p>
            </div>
            <a href="#" class="btn btn-danger m-2">Order</a>
        `;
        container.appendChild(newDiv);
    }

    if (data.meals.length > 5) {
        var showMoreBtn = document.createElement("button");
        showMoreBtn.classList.add("show-more-btn", "mt-3");
        showMoreBtn.textContent = "Show More";
        showMoreBtn.onclick = function() {
            displayAllMeals(data);
            container.removeChild(showMoreBtn); // Remove the button after showing all meals
        };
        container.appendChild(showMoreBtn);
    }
}
function displayAllMeals(data) {
    var container = document.getElementById("container");
  
    for (var a = 5; a < data.meals.length; a++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("card", "my-4", "col-md-4");
        newDiv.innerHTML = `
            <img class="card-img-top" src="${data.meals[a].strMealThumb}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${data.meals[a].strMeal}</h5>
                <p class="card-id">Meal ID: ${data.meals[a].idMeal}</p>
                <p class="card-text">${data.meals[a].strInstructions}</p>
            </div>
            <a href="#" class="btn btn-danger m-2">Order</a>
        `;
        container.appendChild(newDiv);
    }
  }