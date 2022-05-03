const calendar = document.querySelector("#calendarContainer");

const isWeekend = (day) => {
  return true;
};

for (let day = 1; day < 32; day++) {
  const weekend = isWeekend(day);
  calendar.insertAdjacentHTML(
    "beforeend",
    `<div class="day ${weekend && "weekend"}">${day}</div>`
  );
}

document.querySelectorAll(".day").forEach((day) => {
  day.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("selected");
  });
});
