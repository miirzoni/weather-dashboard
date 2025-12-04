# Weather Dashboard

Weather Dashboard is a small web application that displays the current weather forecast for any city entered by the user, using the **OpenWeatherMap API**.

This project allows users to quickly check weather conditions such as temperature, humidity, wind speed, and general weather description for any city in the world.

---

## Technologies Used

- **HTML** – Provides the structure of the web page, including input fields, buttons, and containers for displaying weather information.  
- **CSS** – Styles the webpage to make it visually appealing, with a responsive layout, colors, and weather display formatting.  
- **JavaScript** – Implements functionality including:
  - Fetching weather data from the OpenWeatherMap API
  - Handling user input (search button click or pressing Enter)
  - Dynamically displaying weather information on the webpage
  - Handling errors such as city not found
- **OpenWeatherMap API** – Provides real-time weather data for cities worldwide, including temperature, humidity, wind speed, weather description, and weather icons.

---

## How the Project Works

1. **User Input** – The user types the name of a city in the input field and either clicks the search button or presses Enter.  
2. **API Request** – JavaScript sends a request to the OpenWeatherMap API with the entered city name.  
3. **Data Processing** – The API returns weather data in JSON format. The JavaScript code extracts key information such as:
   - City name  
   - Weather description and main condition (e.g., “Clear”, “Rain”)  
   - Temperature in Celsius  
   - Humidity percentage  
   - Wind speed  
   - Weather icon  
4. **Display Results** – The application dynamically updates the HTML to show the weather information.  
5. **Error Handling** – If the city is not found or there is an API error, a message is displayed to the user.

---

## How to Run the Project

1. Clone the repository:  
   ```bash
   git clone <your-repo-url>
