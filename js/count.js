// Set the date we're counting down to (e.g., a launch date)
var countDownDate = new Date("Dec 12, 2024 00:00:00").getTime(); // Adjust the date as needed

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Find the time difference between now and the countdown date
    var timeRemaining = countDownDate - now;

    // Calculate time parts (days, hours, minutes, seconds)
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the HTML
    document.getElementById("days").innerHTML = days + "<span>D</span>";
    document.getElementById("hours").innerHTML = hours + "<span>H</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span>M</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span>S</span>";

    // If the countdown is finished, display some text
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerHTML = "0<span>Days</span>";
        document.getElementById("hours").innerHTML = "0<span>H</span>";
        document.getElementById("minutes").innerHTML = "0<span>M</span>";
        document.getElementById("seconds").innerHTML = "0<span>S</span>";
        // Optionally display a message or take an action when the countdown ends
    }
}, 1000); // 1000 milliseconds = 1 second
