  // Set the date we're counting down to
  var countDownDate = new Date("February 14, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Function to add leading zero if needed
    function addLeadingZero(num) {
      return (num < 10 ? "0" : "") + num;
    }

    // Display the countdown in the respective elements
    document.getElementById("days").innerHTML = addLeadingZero(days);
    document.getElementById("hours").innerHTML = addLeadingZero(hours);
    document.getElementById("minutes").innerHTML = addLeadingZero(minutes);
    document.getElementById("seconds").innerHTML = addLeadingZero(seconds);

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
  
  const textArray = ["52%", "107 Jt"];
  let index = 0;
  let currentText = "";
  let letterIndex = 0;
  
  function type() {
    if (letterIndex === textArray[index].length) {
      setTimeout(() => {
        erase();
      }, 2000);
      return;
    }
  
    currentText = textArray[index].substring(0, letterIndex + 1);
    letterIndex++;
    document.querySelector("h1.typing").innerHTML = currentText;
    setTimeout(type, 200);
  }
  
  function erase() {
    if (letterIndex === 0) {
      index++;
      if (index === textArray.length) {
        index = 0;
      }
      setTimeout(() => {
        type();
      }, 1000);
      return;
    }
  
    currentText = textArray[index].substring(0, letterIndex - 1);
    letterIndex--;
    document.querySelector("h1.typing").innerHTML = currentText;
    setTimeout(erase, 100);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      type();
    }, 1000);
  });