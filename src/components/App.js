import React, { useState } from "react";

import "../style/App.scss";

const api = {
  key: "77b4d55b2c32af78427d9b3d2b5c9c50",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState("");
  const [localization, setLocalization] = useState("");
  const [cityNameError, setCityNameError] = useState({
    gate: false,
    message: "",
  });

  const dateConstructor = (d) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    if (date < 10) {
      date = `0${date}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }

    return `${day} ${date}.${month}.${year}`;
  };

  const search = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        fetch(
          `${api.base}weather?q=${localization}&units=metric&APPID=${api.key}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === "404") {
              setCityNameError({ gate: true, message: data.message });
              setWeather("");
              setLocalization("");
            } else {
              setWeather(data);
              setLocalization("");
              if (cityNameError.gate === true)
                setCityNameError({ gate: false, message: data.message });
            }
          });
      }
    }
  };
  const weatherIconSelector = (weather) => {
    const icons = ["fas fa-sun", "fas fa-cloud", "fas fa-cloud-showers-heavy"];
    if (weather === "Clear") {
      return icons[0];
    } else if (weather === "Clouds") {
      return icons[1];
    } else if (weather === "Rain") {
      return icons[2];
    }
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 16
            ? "app cold"
            : "app"
          : "app default"
      }
    >
      <div className="wrapper">
        <div className="searchSpace">
          <input
            type="text"
            placeholder="City..."
            onChange={(e) => setLocalization(e.target.value)}
            onKeyPress={search}
            value={localization}
          />
        </div>
        {typeof weather.main != "undefined" ||
        cityNameError.gate === "false" ? (
          <div className="informationBox">
            <div className="informationBox_Info">
              <span>
                {weather.name}, {weather.sys.country}
              </span>
              <span>{dateConstructor(new Date())}</span>
            </div>
            <div className="informationBox_WeatherInfo">
              <div className="weatherInfoWrapper">
                <i className={weatherIconSelector(weather.weather[0].main)}></i>
                <p>{Math.round(weather.main.temp) + "°C"}</p>
                <p>{weather.weather[0].main}</p>
              </div>
            </div>
          </div>
        ) : null}
        {cityNameError.gate === true ? (
          <h1 className="errorMessage">{cityNameError.message}</h1>
        ) : null}
      </div>
    </div>
  );
}

export default App;
