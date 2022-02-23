# Homework-Weather-Dashboard

# 06 Server-Side APIs: Weather Dashboard

## My Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. My challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## The Work

I created a weather dashboard that updates in real time using the OpenWeatherAPI to give the user the current day forecast as well as the next 5 days for any city they choose to search. The data is stored in local storage and their search results are saved under the search bar. The page also gives them the current date using moments.js.

## Review

* The URL of the functional, deployed application: https://paterma.github.io/Homework-Weather-Dashboard/

* The URL of the GitHub repositoryhttps://github.com/Paterma/Homework-Weather-Dashboard