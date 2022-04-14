const api = {
  key: "77b4d55b2c32af78427d9b3d2b5c9c50",
  base: "https://api.openweathermap.org/data/2.5/",
};

const requestForecast = async (localization) => {
  try {
    const response = await fetch(
      `${api.base}weather?q=${localization}&units=metric&APPID=${api.key}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export default requestForecast;
