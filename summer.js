var yearv = new Date().getFullYear();
var countDownDate = new Date("Jun 1, 2026 00:00:00").getTime();
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
       if (days == 273 ) {
        document.getElementById("demo").innerHTML = "Vasara ir sākusies!";
      }
   else if (days == 272 && seconds > 55 && minutes == 59) {
        document.getElementById("demo").innerHTML = "Vasara ir beigusies!";
    }
    else if (days == 272 && seconds > 50 && minutes == 59) {
        document.getElementById("demo").innerHTML = "Cerams arī jums tā bija jauka, silta, izdevusies un dabas parādību pilna.";
    }
    else if (days == 272 && seconds > 45 && minutes == 59) {
        document.getElementById("demo").innerHTML = "Nākamā vasara būs pēc....";
    }
}, 1000);

