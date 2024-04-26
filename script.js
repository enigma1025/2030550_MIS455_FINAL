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