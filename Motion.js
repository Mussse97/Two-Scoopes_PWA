
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
        document.getElementById("explain").style.display = "none";
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
        
        counteUp(event);
        console.log(event.gamma);
    }
        

    var  counter = 0
    function counteUp(event){
        
        if(event.gamma > 88){
            if(counter < 10){
                console.log(event);
                counter++;
                statement = true;
                document.getElementById("results").innerHTML = counter;
                vibrate();
                document.getElementById("results").style.fontSize = "200px";
                document.body.style.border = "5px solid green";
                setTimeout(function(){ document.body.style.border = "5px solid orangered"; }, 500);
           
            }else{
                statement = false;

            }
        }
    }

    function vibrate(){
        if(counter == 10){
            navigator.vibrate(1000);
            navigator.vibrate(1000);
            document.getElementById("results").style.backgroundColor = "green";
            document.getElementById("results").innerHTML = "✓";
            document.getElementById("congratz").innerHTML = "Congratulations you did it!";
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
