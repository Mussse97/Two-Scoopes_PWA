if ("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js").then(registration =>{
    console.log("SW Registered!");
    console.log(registration);
}).catch(error =>{
    console.log("SW Registration Faild!");
    console.log(error);
});

}

let accelerometer = null;
try {
  accelerometer = new Accelerometer({ frequency: 10 });
  accelerometer.onerror = (event) => {
    // Handle runtime errors.
    if (event.error.name === 'NotAllowedError') {
      alert('Permission to access sensor was denied.');
    } else if (event.error.name === 'NotReadableError') {
      alert('Cannot connect to the sensor.');
    }
  };
  accelerometer.onreading = (e) => {
    console.log(e);
  };
  accelerometer.start();
} catch (error) {
  // Handle construction errors.
  if (error.name === 'SecurityError') {
    console.log('Sensor construction was blocked by the Permissions Policy.');
  } else if (error.name === 'ReferenceError') {
    console.log('Sensor is not supported by the User Agent.');
  } else {
    throw error;
  }
  alert(accelerometer);
  document.getElementById("result").innerHTML =
  "Acceleration along the X-axis: "
  + e.accelerationIncludingGravity.x + "<br>" +
  "Acceleration along the Y-axis: "
  + e.accelerationIncludingGravity.y + "<br>" +
  "Acceleration along the Z-axis: "
  + e.accelerationIncludingGravity.z;
}