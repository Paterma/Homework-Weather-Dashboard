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
var previousSearches = []
var uvIndexValue

$("#moment").append(moment().format('MM/DD/YYYY'));


getItems();
//Creating a function to save the previous searches
function cityList(citySearch) {

previousSearches.push(searchCity.val())
localStorage.setItem("previousSearches", JSON.stringify(previousSearches));

}

//Creating a funtion to show the current weather
//Make sure to call the event 
searchBtn.click(function(event){
event.preventDefault
console.log(searchCity.val())
var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.val() + "&units=imperial&exclude=minutely&Appid=075197792df88bd75204d2223f70356e"


//what they type in the search bar
cityList(searchCity.val())

//appending the city name to the daily
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
function uvData (data) {
console.log(data)
    $(".uvIndex").text(data)
var uvColor = $(".uvIndex").text()
console.log(uvColor)
        if (uvColor < 4 ) {
                $(".uvIndex").css("color","green");
            }
            else if (uvColor < 8) {
                $(".uvIndex").css("background-color","yellow");
            }
            else {
                $(".uvIndex").css("background-color","red");
            }
            
            $(".uvIndex").text(response.data[0].value);
}
    var uvURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + "075197792df88bd75204d2223f70356e" + "&cnt=1";
            
    fetch(uvURL)
    .then(response => response.json())
    .then(data => {uvData(data[0].value) 
        
            
            
        });
})
})

//Creating a function to store the weather data
function weather(latitude, longitude) {
    
        var apiUrl5day = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&exclude=minutely&appid=075197792df88bd75204d2223f70356e"
        fetch(apiUrl5day)

        .then(response => response.json()) //.then is a promise to get a response
        .then(data => {console.log(data) //data is what we get from the API
        
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
        
        

    var tempValue1 =data.daily[1].temp.day
    var tempValue2 =data.daily[2].temp.day
    var tempValue3 =data.daily[3].temp.day
    var tempValue4 =data.daily[4].temp.day
    var tempValue5 =data.daily[5].temp.day

    var humidValue1 = data.daily[1].humidity
    var humidValue2 = data.daily[2].humidity
    var humidValue3 = data.daily[3].humidity
    var humidValue4 = data.daily[4].humidity
    var humidValue5 = data.daily[5].humidity

    var windValue1 = data.daily[1].wind_speed
    var windValue2 = data.daily[2].wind_speed
    var windValue3 = data.daily[3].wind_speed
    var windValue4 = data.daily[4].wind_speed
    var windValue5 = data.daily[5].wind_speed
        
    $(".temperature1").text(tempValue1)
    $(".temperature2").text(tempValue2)
    $(".temperature3").text(tempValue3)
    $(".temperature4").text(tempValue4)
    $(".temperature5").text(tempValue5)

    $(".humidity1").text(humidValue1)
    $(".humidity2").text(humidValue2)
    $(".humidity3").text(humidValue3)
    $(".humidity4").text(humidValue4)
    $(".humidity5").text(humidValue5)

    $(".wind1").text(windValue1)
    $(".wind2").text(windValue2)
    $(".wind3").text(windValue3)
    $(".wind4").text(windValue4)
    $(".wind5").text(windValue5)

    $(".temperature1").text("Temperature: " + data.daily[1].temp.day + " °F");
    $(".temperature2").text("Temperature: " + data.daily[2].temp.day + " °F");
    $(".temperature3").text("Temperature: " + data.daily[3].temp.day + " °F");
    $(".temperature4").text("Temperature: " + data.daily[4].temp.day + " °F");
    $(".temperature5").text("Temperature: " + data.daily[5].temp.day + " °F");

    $(".humidity1").text("Humidity: " + data.daily[1].humidity + "%");
    $(".humidity2").text("Humidity: " + data.daily[2].humidity + "%");
    $(".humidity3").text("Humidity: " + data.daily[3].humidity + "%");
    $(".humidity4").text("Humidity: " + data.daily[4].humidity + "%");
    $(".humidity5").text("Humidity: " + data.daily[5].humidity + "%");

    $(".wind1").text("Wind: " + data.daily[1].wind_speed + " MPH");
    $(".wind2").text("Wind: " + data.daily[2].wind_speed + " MPH");
    $(".wind3").text("Wind: " + data.daily[3].wind_speed + " MPH");
    $(".wind4").text("Wind: " + data.daily[4].wind_speed + " MPH");
    $(".wind5").text("Wind: " + data.daily[5].wind_speed + " MPH");
    
    
//     latitude = data.coord.lat;
//     longitude = data.coord.lon;
//     weather(latitude, longitude) 
     })}


// var newDate = moment().weekday(2);
$("#day1").append(moment().add(1, 'days').format('MM/DD/YYYY'));
$("#day2").append(moment().add(2, 'days').format('MM/DD/YYYY'));
$("#day3").append(moment().add(3, 'days').format('MM/DD/YYYY'));
$("#day4").append(moment().add(4, 'days').format('MM/DD/YYYY'));
$("#day5").append(moment().add(5, 'days').format('MM/DD/YYYY'));

    

function getItems() {
    var storedItems = JSON.parse(localStorage.getItem("previousSearches"))

    console.log(storedItems)

renderButtons(storedItems)
    }

    function renderButtons(storedItems) {
        console.log(storedItems)
        $("#previousSearches").empty()

        // for (let i = 0; i < storedItems.length; i++) {
        //     var newBtns = $("<button>").text(storedItems[i])

            // newBtns.click(function(event){
                // event.preventDefault
                // var btnValue = ($(this).text())
            
    } ;$("#previousSearches").append(newBtns)
    
    //USE .SPLICE to only show 5 days

// });

//CREATE MY VARIABLES
//CREATE A CLICK EVENT FOR THE SEARCH BUTTON THAT CAPTURES THE CITY NAME THE USER ENTER
//THEN THEY ARE SHOWN A DISPLAY OF THE WEATHER FOR THAT DAY AND THE NEXT 5 DAYS
//THAT INCLUDES CURRENT WIND, TEMP, HUMIDITY, AND UV INDEX
//DATA NEEDS TO BE SAVED TO LOCAL STORAGE 