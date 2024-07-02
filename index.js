function updateCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const utcTimeString = `It's currently: ${hours}:${minutes}:${seconds}`;
  document.getElementById("currentTimeUTC").textContent = utcTimeString;
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

function updateCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    " June",
    " July",
    "August",
    "September",
    "October",
    " November",
    "December",
  ];
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayString = `Today is  ${day[now.getDay()]}, ${
    months[now.getMonth()]
  }, ${year}`;
  document.getElementById("currentDay").textContent = currentDayString;
}
updateCurrentDate();
setInterval(updateCurrentDate, 86400000);
