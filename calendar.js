const calendar = document.querySelector("#calendar");

const isWeekend = (day) => {
  return day % 7 == 6 || day % 7 == 0 ? true : false;
};

const dt = new Date();
const year = dt.getFullYear();
const month = 6; //dt.getMonth();
const day = dt.getDay();

const firstDayofMonth = new Date(year, month, 1);
paddingDays = firstDayofMonth.getDay();

const noDaysInMonth = new Date(year, month + 1, 0).getDate();
console.log("no of days: ", noDaysInMonth);

console.log(firstDayofMonth);
console.log("padding: ", paddingDays);

for (let day = 0; day < paddingDays + noDaysInMonth; day++) {
  const weekend = isWeekend(day + 1);
  calendar.insertAdjacentHTML(
    "beforeend",
    `<div class="${day < paddingDays ? "unavailable" : "day"} ${
      weekend && "weekend"
    }">${day - paddingDays + 1}</div>`
  );
}

document.querySelectorAll(".day").forEach((day) => {
  day.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("selected");
  });
});

console.log("13%7", 13 % 7);
