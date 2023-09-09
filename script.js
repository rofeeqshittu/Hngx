document.addEventListener("DOMContentLoaded", function () {
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Get the current date
    const currentDate = new Date();

    // Update the "Current Day of the Week" element with the current day
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeekElement.textContent = currentDayOfWeek;

    // Update the "Current UTC Time" element with the current UTC time in milliseconds
    const currentUTCTime = currentDate.getTime();
    currentUTCTimeElement.textContent = currentUTCTime;
});
