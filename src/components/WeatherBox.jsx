import dateConstructor from "../functions/dateConstructor";
import weatherIconSelector from "../functions/weatherIconSelector";
const WeatherBox = (props) => {
  const { weather, cityNameError } = props;
  return (
    <>
      {typeof weather.main != "undefined" || cityNameError.gate === "false" ? (
        <div className="informationBox">
          <div className="informationBox_Info">
            <span>
              {weather.name}, {weather.sys.country}
            </span>
            <span>{dateConstructor(new Date())}</span>
          </div>
          <div className="informationBox_Weather">
            <div className="weatherInfoWrapper">
              <i
                className={`${weatherIconSelector(
                  weather.weather[0].main
                )} weatherIcon`}
              ></i>
              <div className="degreesSpace">
                <p className="degreesBox">
                  <span className="degreesBox_name">Min</span>
                  <span className="degreesBox_deg">
                    {Math.round(weather.main.temp_min) + "°C"}
                  </span>
                </p>
                <p className="degreesBox">
                  <span className="degreesBox_name">Avg</span>
                  <span className="degreesBox_deg">
                    {Math.round(weather.main.temp) + "°C"}
                  </span>
                </p>
                <p className="degreesBox">
                  <span className="degreesBox_name">Max</span>
                  <span className="degreesBox_deg">
                    {Math.round(weather.main.temp_max) + "°C"}
                  </span>
                </p>
              </div>
              <p className="forecast">
                {weather.weather[0].description.charAt().toUpperCase()}
                {weather.weather[0].description.slice(1)}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {cityNameError.gate === true ? (
        <h1 className="errorMessage">This city cannot be found</h1>
      ) : null}
    </>
  );
};

export default WeatherBox;
