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

export default dateConstructor;
