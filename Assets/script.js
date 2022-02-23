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


$("#moment").append(moment().format('MM/DD/YYYY'));


$("#previousSearches").append(getItems)
getItems();
//Creating a function to save the previous searches
function cityList(citySearch) {

previouseSearches.push(searchCity.val())
localStorage.setItem("previousSearches", JSON.stringify(previouseSearches));
// localStorage.setItem("citySearch")
}

//Creating a funtion to show the current weather
//Make sure to call the event 
searchBtn.click(function(event){
event.preventDefault
console.log(searchCity.val())
var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.val() + "&units=imperial&exclude=minutely&Appid=075197792df88bd75204d2223f70356e"

cityList(searchCity.val())


var cityValue = searchCity.val() 
$("#city").text(cityValue)

fetch(apiUrlToday) 

//getting the URL for the weather today
.then(response => response.json()) //.then is a promise to get a response
.then(data => {console.log(data) //data is what we get from the API
    
    
    
    //varibales for my data for temp, wind, humidity, and wind

    var tempValue =data.main.temp
    var humidValue = data.main.humidity
    var windValue = data.wind   

    $(".temperature").text(tempValue)
    $(".humidity").text(humidValue)
    $(".wind").text(windValue)

    //appending that data to my HTML
    $("#city").text("City: " + searchCity.val())
    $(".temperature").text("Temperature: " + data.main.temp + " °F");
    $(".humidity").text("Humidity: " + data.main.humidity + "%");
    $(".wind").text("Wind: " + data.wind.speed + " MPH");

    //Setting up a varibale for the weather icons
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

    //Creating a variable for the city name 

    
//Setting up the UV index URL and conditions
    var uvURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + "075197792df88bd75204d2223f70356e" + "&cnt=1";
    
    fetch(uvURL)
        .then(function (response) {
            if (response.data[0].value < 4 ) {
                $(".uvIndex").setAttribute("class", "badge badge-success");
            }
            else if (response.data[0].value < 8) {
                $(".uvIndex").setAttribute("class", "badge badge-warning");
            }
            else {
                $(".uvIndex").setAttribute("class", "badge badge-danger");
            }
            
            $(".uvIndex").text = response.data[0].value;
            $(".uvIndex").append(response)

            console.log(uvURL)
        });


})
})

//Creating a function to store the weather data
function weather(latitude, longitude) {
    
        var apiUrl5day = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&exclude=minutely&appid=075197792df88bd75204d2223f70356e"
        fetch(apiUrl5day)

        .then(response => response.json()) //.then is a promise to get a response
        .then(data => {console.log(data) //data is what we get from the API

        for (let i = 0; i < 6; i++) {
            // var currentDay = new Date(data.daily[i].dt * 1000);
        // Date[i-1].text = next5Days.toLocaleDateString();

        
//Getting the icons to go with the next 5 days
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
        
        

    var tempValue1 =data.daily[i].temp
    // var humidValue1 = data.daily[i].humidity
    // var windValue1 = data.daily[i].wind.speed
        
    $(".temperature1").text(tempValue1)
    // $("humidity1").text(humidValue1)
    // $("wind1").text(windValue1)

    $(".temperature1").text("Temperature: " + data.daily[i].temp + " °F");
    // $("humidity1").text("Humidity: " + data.daily[i].humidity + "%");
    // $("wind1").text("Wind: " + data.daily[i].wind.speed + " MPH");
    
//     latitude = data.coord.lat;
//     longitude = data.coord.lon;
//     weather(latitude, longitude) 
}
        })
}


// var newDate = moment().weekday(2);
$("#day1").append(moment().add(1, 'days').format('MM/DD/YYYY'));
$("#day2").append(moment().add(2, 'days').format('MM/DD/YYYY'));
$("#day3").append(moment().add(3, 'days').format('MM/DD/YYYY'));
$("#day4").append(moment().add(4, 'days').format('MM/DD/YYYY'));
$("#day5").append(moment().add(5, 'days').format('MM/DD/YYYY'));

    

function getItems() {
$(searchCity.val()).text(JSON.parse(localStorage.getItem("previousSearches"))) || [];

    }
    //USE .SPLICE to only show 5 days

// });

//CREATE MY VARIABLES
//CREATE A CLICK EVENT FOR THE SEARCH BUTTON THAT CAPTURES THE CITY NAME THE USER ENTER
//THEN THEY ARE SHOWN A DISPLAY OF THE WEATHER FOR THAT DAY AND THE NEXT 5 DAYS
//THAT INCLUDES CURRENT WIND, TEMP, HUMIDITY, AND UV INDEX
//DATA NEEDS TO BE SAVED TO LOCAL STORAGE 