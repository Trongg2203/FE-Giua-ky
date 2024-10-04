// Set the date and time you want to count down to
const countdownDate = new Date("Oct 10, 2024 18:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function () {
  // Get current date and time
  const now = new Date().getTime();

  // Find the time difference between now and the countdown date
  const timeRemaining = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, write some text
  if (timeRemaining < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
