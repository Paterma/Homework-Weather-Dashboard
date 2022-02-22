// $( document ).ready(function() { //So jquery will work
var searchBtn = $(".btn")
var forecastDisplay = $("#forecastDisplay")
var searchCity = $(".searchCity")
var city =  $("city")
var temperature =  $(".temperature")
var humidity =  $(".humidity")
var wind =  $(".wind")
var uvIndex =  $(".uvIndex")
var momentToday = moment().format('L');
var apiKey = "075197792df88bd75204d2223f70356e";
var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.val() + "&Appid=075197792df88bd75204d2223f70356e"
var apiUrl5day = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=075197792df88bd75204d2223f70356e"



//Creating a function to save the previous searches
function cityList(citySearch) {
$("previousSearches").empty();

//object.keys returns an array of an object in a list like a loop would. This is returning my city search lists
var keys = Object.keys(citySearch);
for (var i = 0; i < keys.length; i++) {
var previousCity = $("#searchBtn");
previousCity.addClass("list-group");

//seperating the text and capitalizing the first letter, lowercase for the rest
var seperate = keys[i].toLowerCase().split(" ");
    for (var j = 0; j < splitStr.length; j++) {
        seperate[j] =
        seperate[j].charAt(0).toUpperCase() + seperate[j].substring(1);
    }
    var capitalize = seperate.join(" ");
    previousCity.text(capitalize);
  

//appending the previous searches
$("previousSearches").append(previousCity);
// localStorage.setItem("previousSearches", JSON.stringify("previouseSearches"));
localStorage.setItem("citySearch")
}
}

// 

//call the event 
searchBtn.click(function(event){
event.preventDefault
console.log(searchCity.val())
var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.val() + "&Appid=075197792df88bd75204d2223f70356e"

fetch(apiUrlToday) 

//getting the URL for the weather today
.then(response => response.json()) //.then is a promise to get a response
.then(data => {console.log(data)}) //data is what we get from the API


    var latitude 
    var longitude 
    var cityValue = searchCity.val()
    var tempValue = ["main"]["temperature"];
    var humidValue = ["main"]["humidity"]
    var windValue = ["wind"]["wind"]


    //Trying to get the info to show up- data[] not working

    $(".city").append("cityValue")
    $(".temperature").append("tempValue")
    $(".humidity").append("humidValue")
    $(".weatherDisplay").append("windValue")

})

//Creating a function to store the weather data
function weather() {
        var showMoment =$("<h4>");
        $("city").empty();
        $("city").append(showMoment.text("(" + moment.format("M/D/YYYY")+")")
        );
        
        var nameOfCity = $("<h4>").text(weather.name);
        $("#city").prepend(nameOfCity); //inserting the first child of each element

        latitude = weather.coord.Lat;
        longitude = weather.coord.Lon;

        var apiUrl5day = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=075197792df88bd75204d2223f70356e" +
        "&lat="+
        latitude +
        "&lon=" +
        longitude;

        fetch(apiUrl5day)
    }


// });

//CREATE MY VARIABLES
//CREATE A CLICK EVENT FOR THE SEARCH BUTTON THAT CAPTURES THE CITY NAME THE USER ENTER
//THEN THEY ARE SHOWN A DISPLAY OF THE WEATHER FOR THAT DAY AND THE NEXT 5 DAYS
//THAT INCLUDES CURRENT WIND, TEMP, HUMIDITY, AND UV INDEX
//DATA NEEDS TO BE SAVED TO LOCAL STORAGE 