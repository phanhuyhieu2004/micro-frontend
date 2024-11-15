<template>
  <div class="wrapper">
    <div class="shape shape-2"></div>
    <div class="container">
      <div class="search-container">
        <!--        rounded:bo tròn, standount:nổi bat-->
        <q-input rounded standout
                 v-model="city"

                 placeholder="Enter a city name" style="width: 100%"
        />
        <q-btn round @click="getWeather"  style="border-radius: 999px;background: rgba(0, 0, 0, 0.05);"><i
          class="q-icon fa-solid fa-magnifying-glass fa-shake " ></i>

        </q-btn>
      </div>

      <div v-if="errorMessage" class="msg">{{ errorMessage }}</div>

      <div v-if="weatherData" id="result">
        <h2>{{ weatherData.name }}</h2>
        <h4 class="weather">{{ weatherData.weather[0].main }}</h4>
        <h4 class="desc">{{ weatherData.weather[0].description }}</h4>
        <img :src="weatherIcon" class="img-weather"/>
        <h1>{{ weatherData.main.temp }} &#176;</h1>
        <div class="temp-container">
          <div>
            <h4 class="title">min</h4>
            <h4 class="temp">{{ weatherData.main.temp_min }}&#176;</h4>
          </div>
          <div>
            <h4 class="title">max</h4>
            <h4 class="temp">{{ weatherData.main.temp_max }}&#176;</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      city: "Hanoi",
      weatherData: null,
      errorMessage: null,
    };
  },
  computed: {
    weatherIcon() {
      if (!this.weatherData) return "";

      const mainWeather = this.weatherData.weather[0].main;
      let iconClass = "";

      switch (mainWeather) {
        case "Clear":
          iconClass = "clear";
          break;
        case "Rain":
          iconClass = "rain";
          break;
        case "Clouds":
          iconClass = "clouds";
          break;
        case "Drizzle":
          iconClass = "drizzle";
          break;
        case "Snow":
          iconClass = "snow";
          break;
        case "Mist":
          iconClass = "mist";
          break;
        case "Smoke":
          iconClass = "wind";
          break;
        case "Haze":
          iconClass = "haze1";
          break;
        default:
          iconClass = "";  // Có thể trả về một icon mặc định hoặc để trống nếu không có trường hợp phù hợp
      }

      return `https://raw.githubusercontent.com/phanhuyhieu2004/TKW/TKW-Exercise/images/${iconClass}.png`;
    }
  }
  ,
  methods: {
    async getWeather() {
      if (this.city.trim().length === 0) {
        this.errorMessage = "Please enter a city name";
        this.weatherData = null;
        return;
      }

      const key = "284e805be8be5fe99b504122d82b5c3e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${key}&units=metric`;

      try {
        const response = await axios.get(url);

        if (response.data) {
          this.weatherData = response.data;
          this.errorMessage = null;
          console.log("thoi tiet", response.data)
        } else {
          this.weatherData = null;
          this.errorMessage = "City not found";
        }
      } catch (error) {
        this.weatherData = null;
        this.errorMessage = "Error fetching data";
      }
    }
  },
  mounted() {
    this.getWeather();
  }
};
</script>
<style scoped>
q-input input:focus {
  background-color: inherit !important;
  color: inherit !important;
}
</style>
<style src="src/css/weather_app.css"></style>

