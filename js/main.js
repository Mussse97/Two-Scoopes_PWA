
function sendNotification() {
    var currentTime = new Date().getTime();
    var oneHourTime = 60 * 60 * 1000;
    var lastVisitTime = localStorage.getItem('lastVisitTime');
    if (currentTime - (lastVisitTime * 60) > oneHourTime) {
      localStorage.setItem('lastVisitTime', currentTime);
      var notification = new Notification('Training', {
        body: 'You have not been active in a while, start your training now',
        icon: 'imgages/scoops_512.png'
      });
      notification.onclick = (e) => {
        windows.location.href = 'choise.html';
      }

      alert("you haven't been active in a while, start your training now");
    }
  }
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else{
    sendNotification();
  }
  window.onload = sendNotification;