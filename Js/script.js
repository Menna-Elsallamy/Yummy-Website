// J Q U E R Y   F U N C T I O N S
// showLoadingScreen()
$(document).ready(function(){
  $(".lds-default").fadeOut(1000,function(){
    $('.animate__animated').hide();
      $("#loadingscreen").fadeIn(1000,function(){
          $("body").css('overflow','auto');
          $("#loadingscreen").remove();
      })
  });
    let width=$('.sideBar-inner').innerWidth();
    $("#sideBar").css('left',-width)
    $(".nav-header .clostBtn").hide();

 $(document).on("click", ".card", async function () {
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
  
    const strMeal = $(this).find('.text').text();
    
    console.log(strMeal);
    let getdetailsap=await getDetails(strMeal);

document.getElementById('mealscartoona').classList.add("d-none");
    document.getElementById('detailscartoona').classList.remove("d-none");
    displayDetails(getdetailsap);
    $('.clostBtntwo').click(function(){
      $("#sideBar").animate(
        {
          left:-width
        },1000
      )
      $('.animate__animated').hide();
  document.getElementById('mealscartoona').classList.remove("d-none");
  document.getElementById('detailscartoona').classList.add("d-none");
})
  });
})
// Loading screen
function showLoadingScreen() {
  // Show your loading screen here, e.g., display an overlay or a spinner
  document.getElementById('lds-ring').classList.remove('d-none');

}

function hideLoadingScreen() {
  // Hide your loading screen here

  document.getElementById('lds-ring').classList.add('d-none');
}
// Loading screen
let width=$('.sideBar-inner').innerWidth();
$(".nav-header .self").click(function(){
$('.animate__animated').show();
    $(".nav-header .self").hide();
    $(".nav-header .clostBtn").show();
  $("#sideBar").animate(
      {
          left:'0px'
      },1000
  )
}  
)
$(".nav-header .clostBtn").click(function(){
    
    $("#sideBar").animate(
        {
          left:-width
        },1000
      )
    $(".nav-header .self").show();
    $('.animate__animated').hide();

    $(".nav-header .clostBtn").hide();
})
// J Q U E R Y   F U N C T I O N S E N D

// G E T M E A L S A P I F U N C T I O N
async function getMeals(){
const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
const response = await api.json();
// console.log(response);
return response;
}
// G E T M E A L S A P I F U N C T I O N

 
// D I S P L A Y M E A L S F U N C T I O N
function displaymeals(apiReturn) {
  let mealscartoona = ``;
  for (let index = 0; index < apiReturn.meals.length; index++) {
    mealscartoona +=`<div class="col-md-3">
    <div 
        class="card meal position-relative overflow-hidden rounded-2 cursor-pointer">
        <div>
            <img class="w-100" src="${apiReturn.meals[index].strMealThumb}"
                alt="" srcset="">
            <div class="overlay cursor-pointer">
                <h3 class="text">${apiReturn.meals[index].strMeal}</h3>
            </div>
        </div>
    </div>
</div>`;
  }
  document.getElementById('mealscartoona').innerHTML = mealscartoona;
}
async function begin(){
  let meals=await getMeals();
  displaymeals(meals);
  // let getdetailsap=await getDetails('Arrabiata');
  // console.log(getdetailsap);
  // displayDetails(getdetailsap);
}
begin();
// d I S P L A Y M E A L S F U N C T I O N


// D I S P L A Y M E A L S A P I F U N C T I O N 
async function getDetails(name){
  showLoadingScreen()
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const responseofId = await api.json();
  // console.log(response);
  // console.log(responseofId);
  hideLoadingScreen();

  return responseofId;

  }
// D I S P L A Y M E A L S A P I F U N C T I O N


async function displayDetails(responseofId) {
  const meal = responseofId.meals[0];
  document.getElementById('search').classList.add('d-none');
  const detailscartoona = `
    <div class="col-md-4 cursor-pointer">
      <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
      <h2 class="text-white">${meal.strMeal}</h2>
    </div>
    <div class="col-md-8">
      <i class="fa-solid fa-x clostBtntwo fa-2x position-fixed end-0 p-2 text-white"></i>
      <h2 class="text-white">Instructions</h2>
      <p class="text-white">${meal.strInstructions}</p>
      <h3 class="text-white"><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
      <h3 class="text-white"><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
      <h3 class="text-white">Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${generateRecipeList(meal)}
      </ul>

      ${meal.strTags ? `<h3 class="text-white">Tags :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-danger m-2 p-1">${meal.strTags}</li>
      </ul>` : ''}

      <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
      <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
    </div>
  `;

  document.getElementById('detailscartoona').innerHTML = detailscartoona;
}

  
    function generateRecipeList(meal) {
      let recipeList = '';
      for (let i = 1; i <= 20; i++) {
        const measure = meal[`strMeasure${i}`];
        const ingredient = meal[`strIngredient${i}`];
    
        if (measure && ingredient) {
          recipeList += `<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`;
        }
      }
      return recipeList;
    }

$(".search").click(function(){

  document.getElementById('mealscartoona').classList.add("d-none");
  document.getElementById('Contact').classList.add("d-none");
  document.getElementById('Categories').classList.add("d-none");
  document.getElementById('area').classList.add("d-none");
  document.getElementById('search').classList.remove("d-none");
  document.getElementById('Ingredients').classList.add("d-none");
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
$(".nav-header .self").show();
$(".nav-header .clostBtn").hide();
$('.animate__animated').hide();

})

// S E A R C H B Y   F I R S T    N A M E
document.getElementById('exampleFormControlInput1').addEventListener("input",async function(){
  showLoadingScreen()
  // console.log(this.value);
  let valuue=this.value;
  $('lds-default')
  let getdetailsap=await getDetails(valuue);
  document.getElementById('mealscartoona').classList.remove("d-none");
  hideLoadingScreen()

  displaymeals(getdetailsap)
// console.log(getdetailsap);
})

// S E A R C H  B Y  F I R S T   L E T T E R 
document.getElementById('exampleFormControlInput2').addEventListener("input", async function(){
  showLoadingScreen()

  // console.log(this.value);
  let value = this.value;
  document.getElementById('mealscartoona').classList.remove("d-none");
  let apiLetter = await Apibyfletter(value);
  displaymeals(apiLetter);
  hideLoadingScreen()

});

async function Apibyfletter(letter){
  showLoadingScreen()
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const letterResponse = await api.json();
  hideLoadingScreen()

    return letterResponse;
}
// S E A R C H  B Y  F I R S T   L E T T E R 



// C O N T A C T U S S E C T I O N 
$(".Contact").click(function(){
  document.getElementById('mealscartoona').classList.add("d-none");
  document.getElementById('search').classList.add("d-none");
  document.getElementById('Categories').classList.add("d-none");
  document.getElementById('Contact').classList.remove("d-none");
  document.getElementById('area').classList.add("d-none");
  document.getElementById('Ingredients').classList.add("d-none");
  $('.animate__animated').hide();
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
$(".nav-header .self").show();
$(".nav-header .clostBtn").hide();
})

var siteNameInput=document.getElementById('Site Name');
siteNameInput.addEventListener('input', function(){
  function isValidName() {
    var nameregex = /^[a-zA-Z\s]+$/;
    if(nameregex.test(siteNameInput.value)==true){
        return true;
    }
    else{
        return false;
    }
  }
  if(isValidName()){
    document.getElementById('namealert').classList.add('d-none')
  }
  else{
    document.getElementById('namealert').classList.remove('d-none')
  }
});

var siteEmailInput=document.getElementById('Site Email');
siteEmailInput.addEventListener('input', function(){
  function isValidEmail() {
    var emailregex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if(emailregex.test(siteEmailInput.value)==true){
        return true;
    }
    else{
        return false;
    }
  }
  if(isValidEmail()){
    document.getElementById('emailalert').classList.add('d-none')
  }
  else{
    document.getElementById('emailalert').classList.remove('d-none')
  }
});
var sitePhoneInput=document.getElementById('Site Phone');
sitePhoneInput.addEventListener('input', function(){
  function isValidPhone() {
    var phoneregex = /^(002){0,1}01[0125][0-9]{8}$/;
    if(phoneregex.test(sitePhoneInput.value)==true){
        return true;
    }
    else{
        return false;
    }
  }
  if(isValidPhone()){
    document.getElementById('phonealert').classList.add('d-none')
  }
  else{
    document.getElementById('phonealert').classList.remove('d-none')
  }
});
var siteAgeInput=document.getElementById('Site Age');
siteAgeInput.addEventListener('input', function(){
  function isValidAge() {
    var Ageregex =/^(?:[1-9]|[1-9][0-9])$/;
    if(Ageregex.test(siteAgeInput.value)==true){
        return true;
    }
    else{
        return false;
    }
  }
  if(isValidAge()){
    document.getElementById('agealert').classList.add('d-none')
  }
  else{
    document.getElementById('agealert').classList.remove('d-none')
  }
});

var sitePassword=document.getElementById('Password');
sitePassword.addEventListener('input', function(){
  function isValidPassword() {
    var Passwordregex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(Passwordregex.test(sitePassword.value)==true){
        return true;
    }
    else{
        return false;
    }
  }
  if(isValidPassword()){
    document.getElementById('passwordalert').classList.add('d-none')
  }
  else{
    document.getElementById('passwordalert').classList.remove('d-none')
  }
});
var Repassword=document.getElementById('Repassword');
Repassword.addEventListener('input', function(){
  function isValidrePassword() {
    if((sitePassword.value)==(Repassword.value)){
        return true;
    }
    else{
        return false;
    }
  }
  if((isValidrePassword())){
    document.getElementById('Repasswordalert').classList.add('d-none')
  }
  else{
    document.getElementById('Repasswordalert').classList.remove('d-none')
  }
});
// C O N T A C T U S S E C T I O N 



// Cateogeries
function displayCategories(categories) {
  let categoriesCartoona = ``;
  for (let index = 0; index < categories.categories.length; index++) {
    categoriesCartoona += `
    <div class="col-md-3 cursor-pointer" id="">
      <div class=" meal position-relative overflow-hidden  cursor-pointer meals">
        <div>
          <img class="w-100 bg-black border border-0 cursor-pointer" src="${categories.categories[index].strCategoryThumb}" alt="" srcset="">
          <div class="overlay cursor-pointer">
            <h3 class="text-center textt text-white">${categories.categories[index].strCategory}</h3>
            <p class="text-center p-2 text-white">${categories.categories[index].strCategoryDescription}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  document.getElementById('categoriesCartoona').innerHTML = categoriesCartoona;
}

async function getCategories() {
  const cat = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  const categories = await cat.json();
  return categories;
}

async function fetchAndDisplayCategories() {
  const categoriesData = await getCategories();
  displayCategories(categoriesData);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAndDisplayCategories();
});

$(document).on("click", ".meals", async function () {
  $('.animate__animated').hide();

  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
  const strMeal = $(this).find('.textt').text();
  Categoriesmeals(strMeal)
})
async function Categoriesmeals(mealname){
  const cat = await fetch(`  https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealname}`);
  const categories = await cat.json();
  console.log(categories);
  document.getElementById('mealscartoona').classList.remove("d-none");
  displaymeals(categories);
  document.getElementById('Categories').classList.add("d-none");
  // return categories;
}



$(".Categories").click(function(){
  document.getElementById('mealscartoona').classList.add("d-none");
  document.getElementById('Contact').classList.add("d-none");
  document.getElementById('search').classList.add("d-none");
  document.getElementById('area').classList.add("d-none");
  document.getElementById('Ingredients').classList.add("d-none");
  document.getElementById('Categories').classList.remove("d-none");
  $('.animate__animated').hide();
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
$(".nav-header .self").show();
$(".nav-header .clostBtn").hide();
})

// Area 
function displayArea(Area) {
  let areaCartoona = ``;
  for (let index = 0; index < Area.meals.length; index++) {
    areaCartoona += ` 
    <div class="col-md-3 cursor-pointer mealss" >
    <div class="position-relative overflow-hidden">
    <i  class="fa-solid fa-house-laptop fa-4x text-white "></i>
    <h2 class="text-white textt ">${Area.meals[index].strArea}</h2>
    </div>
</div>`;
  }
  document.getElementById('areaCartoona').innerHTML = areaCartoona;
}

async function getArea() {
  const area = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  const Area = await area.json();
  return Area;
}

async function fetchAndDisplayArea() {
  const AreaData = await getArea();
  displayArea(AreaData);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAndDisplayArea()
});

$(document).on("click", ".mealss", async function () {
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
  const strMeal = $(this).find('.textt').text();
  console.log(strMeal)
  Areasmeals(strMeal)
})
async function Areasmeals(areaname){
  const area = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaname}`);
  const areaa = await area.json();
  console.log(areaa);
  document.getElementById('mealscartoona').classList.remove("d-none");
  displaymeals(areaa);
  document.getElementById('area').classList.add("d-none");
  // return categories;
}



$(".area").click(function(){
  document.getElementById('mealscartoona').classList.add("d-none");
  document.getElementById('Contact').classList.add("d-none");
  document.getElementById('search').classList.add("d-none");
  document.getElementById('Categories').classList.add("d-none");
  document.getElementById('Ingredients').classList.add("d-none");
  document.getElementById('area').classList.remove("d-none");
  $('.animate__animated').hide();
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
$(".nav-header .self").show();
$(".nav-header .clostBtn").hide();
})


// Ingredients 
function displaIngredients(Ingredients) {
  let IngredientsCartoona = ``;
  for (let index = 0; index < 20; index++) {
    IngredientsCartoona += ` 
    <div class="col-md-3">
                    <div class="rounded-2 text-center cursor-pointer mealsss">
                        <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
                        <h3 class="textt text-white">${Ingredients.meals[index].strIngredient}</h3>
                        <p class="text-white">${Ingredients.meals[index].strDescription.slice(0, 100)}
                        </p>
                    </div>
                </div>
   `;
  }
  document.getElementById('ingredientscartoona').innerHTML = IngredientsCartoona;
}

async function getIngredients() {
  const Ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  const Ingredientss = await Ingredients.json();
  return Ingredientss;
}

async function fetchAndDisplayIngredients() {
  const IngredientsData = await getIngredients();
  displaIngredients(IngredientsData);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAndDisplayIngredients()
});

$(document).on("click", ".mealsss", async function () {
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
  const strMeal = $(this).find('.textt').text();
  console.log(strMeal)
  Ingredientsmeals(strMeal)
})
async function Ingredientsmeals(ingredientname){
  const ingredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientname}`);
  const ingredientt = await ingredient.json();
  console.log(ingredientt);
  document.getElementById('mealscartoona').classList.remove("d-none");
  displaymeals(ingredientt);
  document.getElementById('Ingredients').classList.add("d-none");
  // return categories;
}



$(".Ingredients").click(function(){
  document.getElementById('mealscartoona').classList.add("d-none");
  document.getElementById('Contact').classList.add("d-none");
  document.getElementById('search').classList.add("d-none");
  document.getElementById('Categories').classList.add("d-none");
  document.getElementById('area').classList.add("d-none");
  document.getElementById('Ingredients').classList.remove("d-none");
  $('.animate__animated').hide();
  $("#sideBar").animate(
    {
      left:-width
    },1000
  )
$(".nav-header .self").show();
$(".nav-header .clostBtn").hide();
})