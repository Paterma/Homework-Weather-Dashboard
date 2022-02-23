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
var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.val() + "&units=imperial&exclude=minutely&Appid=075197792df88bd75204d2223f70356e"
var apiUrl5day = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&exclude=minutely&appid=075197792df88bd75204d2223f70356e"
var latitude 
var longitude 
var weatherIcons = "http://openweathermap.org/img/wn/10d@2x.png"
var previouseSearches = []


getItems();
//Creating a function to save the previous searches
function cityList(citySearch) {

previouseSearches.push(searchCity.val())
localStorage.setItem("previousSearches", JSON.stringify(previouseSearches));
// localStorage.setItem("citySearch")
}


//Make sure to call the event 
searchBtn.click(function(event){
event.preventDefault
console.log(searchCity.val())
var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.val() + "&units=imperial&exclude=minutely&Appid=075197792df88bd75204d2223f70356e"

cityList(searchCity.val())

fetch(apiUrlToday) 

//getting the URL for the weather today
.then(response => response.json()) //.then is a promise to get a response
.then(data => {console.log(data) //data is what we get from the API

    var showMoment =$("<h4>");
    // $("#city").empty();
    $("#city").append(showMoment.text("(" + moment().format("MMM Do YY")+")")
    );

    var cityValue = searchCity.val()
    var tempValue =data.main.temp
    var humidValue = data.main.humidity
    var windValue = data.wind


    $(".city").text(cityValue)
    $(".temperature").text(tempValue)
    $(".humidity").text(humidValue)
    $(".wind").text(windValue)

    $(".temperature").text("Temperature: " + data.main.temp + " °F");
    $(".humidity").text("Humidity: " + data.main.humidity + "%");
    $(".wind").text("Wind: " + data.wind.speed + " MPH");

    var icons = $("<img>");
    icons.attr(
    "src",
    "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    );
    $("#weatherIcon").empty();
    $("#weatherIcon").append(icons);
    latitude = data.coord.lat;
    longitude = data.coord.lon;
    weather(latitude, longitude)

    console.log(latitude)

})
})

//Creating a function to store the weather data
function weather(latitude, longitude) {
    
        var apiUrl5day = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&exclude=minutely&appid=075197792df88bd75204d2223f70356e"
        fetch(apiUrl5day)

        .then(response => response.json()) //.then is a promise to get a response
        .then(data => {console.log(data) //data is what we get from the API

        for (let i = 0; i < 6; i++) {
        //     var next5Days = new Date(data.daily[i].dt * 1000);
            
        // Date[i-1].textContent = next5Days.toLocaleDateString();

        

        var icons = $("<img>");
        icons.attr(
        "src",
        "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png"
        );
        $("#weatherIcon1").empty();
        $("#weatherIcon1").append(icons);
        
        var icons = $("<img>");
        icons.attr(
        "src",
        "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png"
        );
        $("#weatherIcon2").empty();
        $("#weatherIcon2").append(icons);
       
        var icons = $("<img>");
        icons.attr(
        "src",
        "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png"
        );
        $("#weatherIcon3").empty();
        $("#weatherIcon3").append(icons);
        
        var icons = $("<img>");
        icons.attr(
        "src",
        "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png"
        );
        $("#weatherIcon4").empty();
        $("#weatherIcon4").append(icons);
        
        var icons = $("<img>");
        icons.attr(
        "src",
        "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + "@2x.png"
        );
        $("#weatherIcon5").empty();
        $("#weatherIcon5").append(icons);
        
        

    var tempValue1 =data.daily[1].temp
    // var humidValue1 = data.daily[i].humidity
    // var windValue1 = data.daily[i].wind.speed
        
    $(".temperature1").text(tempValue1)
    // $("humidity1").text(humidValue1)
    // $("wind1").text(windValue1)

    $(".temperature1").text("Temperature: " + data.daily[1].temp + " °F");
    // $("humidity1").text("Humidity: " + data.daily[i].humidity + "%");
    // $("wind1").text("Wind: " + data.daily[i].wind.speed + " MPH");
    
//     latitude = data.coord.lat;
//     longitude = data.coord.lon;
//     weather(latitude, longitude) 
}
        })
}


var newDate = moment().weekday(2);
$("#day1").append(moment().format('dddd'))
$("#day2").append(moment().format('dddd'))
$("#day3").append(moment().format('dddd'))
$("#day4").append(moment().format('dddd'))
$("#day5").append(moment().weekday(0));

    function getItems() {
        $(searchCity.val()).text(JSON.parse(localStorage.getItem("previousSearches")));

        // $("#previousSearches").text(getItems)
    }
    //USE .SPLICE to only show 5 days

// });

//CREATE MY VARIABLES
//CREATE A CLICK EVENT FOR THE SEARCH BUTTON THAT CAPTURES THE CITY NAME THE USER ENTER
//THEN THEY ARE SHOWN A DISPLAY OF THE WEATHER FOR THAT DAY AND THE NEXT 5 DAYS
//THAT INCLUDES CURRENT WIND, TEMP, HUMIDITY, AND UV INDEX
//DATA NEEDS TO BE SAVED TO LOCAL STORAGE 