/*function init(){
   resetBtn = document.getElementById("clickMe");
   resetBtn.on1click = sayHi;
   resetBtn.addEventListener("click", sayHi);
}*/

//window.addEventListener("load", init);
window.addEventListener('deviceorientation', handleOrientation);

			
function handleOrientation(event){
    //var output=document.getElementById("output");
    //simpleOutput(event, output);
    
    var canvas=document.getElementById("canvas_output");
    betterOutput(event, canvas);
}

function simpleOutput(event, div){
    var properties="";
    for(var prop in event){
        properties+=prop+": "+event[prop]+"<br>";
        
    }
    div.innerHTML=properties;
    
}

function betterOutput(event, canvas){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    var context=canvas.getContext("2d");
    var radius=Math.min(canvas.width,canvas.height)/10;
    
    var location0={
        x:canvas.width/2,
        y:canvas.height/2
    }
    
    var location={
        x:location0.x,
        y:location0.y+event["beta"]*3
    }
    
    context.beginPath();
    context.arc(location.x,location.y,radius,0,2*Math.PI);
    context.stroke();
    counteUp(event);
}

var  counter = 0
//check if event.gamma is less than -88 and if it is then count up to 10, for it to count up again event.gamma needs to be greater than -2 and then less than -88 again
function counteUp(event){
    if(event.gamma < -88){
        if(counter < 10){
            counter++;
            document.getElementById("results").innerHTML = counter;
            vibrate();
        }
    }
}

// everytime the counter goes up by one vibrare the phone and when the counter reaches 10 then vibrate the phone 2 times
function vibrate(){
    if(counter == 10){
        navigator.vibrate(100);
        navigator.vibrate(100);
        var canvas=document.getElementById("canvas_output");
    canvas.style.background = "green";
    }else{
        navigator.vibrate(100);
    }
}



