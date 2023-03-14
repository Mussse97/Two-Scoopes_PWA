    var totalReps = 0;
    var totalSesions = 0;
    var statement = false;
    
    function init(){
    resetBtn = document.getElementById("restartBtn");
    resetBtn.addEventListener("click", reset);
    selection = document.getElementById("selectionBtn");
    resetBtn.style.display = "none";
    selection.style.display = "none";
    totalReps= document.getElementById("totPoints");
    totalSesions = document.getElementById("countGames");
    tapme();
    }

    window.addEventListener("load", init);
    //window.addEventListener('deviceorientation', handleOrientation)


    function tapme(){
        document.getElementById("tapme").addEventListener("click", countdown);
        
    }

    

    function countdown(){
        document.getElementById("tapme").style.display = "none";
        document.getElementById("giffy").style.display = "none";
        document.getElementById("Rep").innerHTML = "Reps";

        var count = 5;
        var counter = setInterval(timer, 1000);
        function timer(){
            count = count - 1;
            if(count == 0){
                clearInterval(counter);
                document.getElementById("results").innerHTML = "Start";
                // make the count numbers bigger.
                document.getElementById("results").style.fontSize = "80px";
                return;
            }
            document.getElementById("results").innerHTML = count;
            window.addEventListener('deviceorientation', handleOrientation)
        }
    }

    
    function handleOrientation(event){
        //var output=document.getElementById("output");
        //simpleOutput(event, output);
        
        counteUp(event);
    }
        

    var  counter = 0
    //check if event.gamma is less than -88 and if it is then count up to 10, for it to count up again event.gamma needs to be greater than -2 and then less than -88 again
    function counteUp(event){
        if(event.gamma < -90){
            if(counter < 10){
                console.log(event.gamma);
                counter++;
                statement = true;
                document.getElementById("results").innerHTML = counter;
                vibrate();
                document.getElementById("results").style.fontSize = "200px";
                // everytime the counter goes up make the body element border turn green and then back to original color

                document.body.style.border = "5px solid green";
                setTimeout(function(){ document.body.style.border = "5px solid orangered"; }, 500);
                // if statement is true counter cant go up anymore, counter need to be false again
            }else{
                statement = false;

            }
        }
    }

    // everytime the counter goes up by one vibrare the phone and when the counter reaches 10 then vibrate the phone 2 times
    function vibrate(){
        if(counter == 10){
            navigator.vibrate(1000);
            navigator.vibrate(1000);
            document.getElementById("results").style.backgroundColor = "green";
            document.getElementById("results").innerHTML = "✓";
            document.getElementById("congratz").innerHTML = "Congratz you did it!";
            document.getElementById("congratz").style.fontSize = "80px";
            resetBtn.style.display = "block";
            selectionBtn.style.display = "block";
            

        }else{
            navigator.vibrate(100);
        }
    }

    function reset(){
        location.reload();
    }
