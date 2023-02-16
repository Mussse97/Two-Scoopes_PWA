if ("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js").then(registration =>{
    console.log("SW Registered!");
    console.log(registration);
}).catch(error =>{
    console.log("SW Registration Faild!");
    console.log(error);
});

}

// JavaScript
// Hämta nuvarande höjd med en API
fetch('https://api.mymobileheight.com/v1/get-height')
  .then(response => response.json())
  .then(data => {
    // Visa höjden i HTML
    if (data.height) {
      document.getElementById('height').innerHTML = data.height;
    } else {
      alert('Respons not viable');
    }
  });

/*
// Skapa en funktion som kontrollerar mobilens gravity censor
function checkGravitySensor() {
    // Kolla om enhetens enhet stödjer accelerometer
    if (window.DeviceMotionEvent) {
        // Registrera händelser för enheten
        window.addEventListener("devicemotion", handleMotionEvent, true);
    } else {
        // Om enheten inte stöder accelerometer, skriv ut ett meddelande
        document.getElementById("result").innerHTML = "Mobilen stödjer inte gravity censor";
    }
}

// Skapa en funktion som hanterar händelsen
function handleMotionEvent(event) {
    // Skriv ut accelerationen som läses av sensorn
    document.getElementById("result").innerHTML = "Acceleration i x-led: " + event.accelerationIncludingGravity.x + 
    "<br>Acceleration i y-led: " + event.accelerationIncludingGravity.y +
    "<br>Acceleration i z-led: " + event.accelerationIncludingGravity.z;
}
*/