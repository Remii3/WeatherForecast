import { useState } from "react";

import requestForecast from "./api/requestForecast";
import SearchBox from "./components/SearchBox";

import WeatherBox from "./components/WeatherBox";
import "./style/App.scss";

const App = () => {
  const [weather, setWeather] = useState("");
  const [localization, setLocalization] = useState("");
  const [cityNameError, setCityNameError] = useState({
    gate: false,
    message: "",
  });

  const searchHandler = async (e) => {
    e.preventDefault();

    if (e.target.elements[0].value.trim() === "") return;

    const data = await requestForecast(localization);

    if (data && data.cod === "404") {
      setCityNameError({ gate: true, message: data.message });
      setWeather("");
      setLocalization("");
    } else if (data) {
      setWeather(data);
      setLocalization("");
      if (cityNameError.gate === true)
        setCityNameError({ gate: false, message: data.message });
    }
  };

  const changeLocalizationHandler = (e) => {
    setLocalization(e.target.value);
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 16
            ? "wrapper cold"
            : "wrapper"
          : "wrapper default"
      }
    >
      <div className="shadowOverlay" />
      <div className="main">
        <SearchBox
          localization={localization}
          changeLocalization={changeLocalizationHandler}
          search={searchHandler}
        />
        <WeatherBox weather={weather} cityNameError={cityNameError} />
      </div>
    </div>
  );
};

export default App;
