
function sendNotification() {
    var currentTime = new Date().getTime();
    var oneHourTime = 60 * 60 * 1000;
    var lastVisitTime = localStorage.getItem('lastVisitTime');
  
    if (currentTime - (lastVisitTime * 60) > oneHourTime) {
      localStorage.setItem('lastVisitTime', currentTime);
      alert("Du har inte varit aktiv på ett tag, vill du börja träna?");
    }
  }
  
  window.onload = sendNotification;