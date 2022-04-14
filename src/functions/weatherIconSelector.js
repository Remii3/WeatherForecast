const weatherIconSelector = (weather) => {
  const icons = [
    "fas fa-sun",
    "fas fa-cloud",
    "fas fa-cloud-showers-heavy",
    "fas fa-smog",
    "fas fa-snowflake",
  ];
  if (weather === "Clear") {
    return icons[0];
  } else if (weather === "Clouds") {
    return icons[1];
  } else if (weather === "Rain") {
    return icons[2];
  } else if (weather === "Mist") {
    return icons[3];
  } else if (weather === "Snow") {
    return icons[4];
  }
};

export default weatherIconSelector;
