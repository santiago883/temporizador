

function val_hours(){
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
}

function val_min_sec(){
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
    if(this.value > 59){
         this.value = 59
    }
    
}

function reset (){
    this.value = "";
}

function organize (){
    if(this.value.length = 1){
        if (this.value <= 6){
            
            this.value = 0+this.value
        }
    }
} 

function activ_change(){

    document.getElementById("hours").addEventListener("input", val_hours);

    document.getElementById("hours").addEventListener("click", reset);

    document.getElementById("hours").addEventListener("blur", organize);

    document.getElementById("minutes").addEventListener("input", val_min_sec);

    document.getElementById("minutes").addEventListener("click",reset);

    document.getElementById("minutes").addEventListener("blur", organize);

    document.getElementById("seconds").addEventListener("input", val_min_sec);

    document.getElementById("seconds").addEventListener("click", reset);

    document.getElementById("seconds").addEventListener("blur", organize);

    document.getElementById("hours").disabled = false;
    document.getElementById("minutes").disabled = false;
    document.getElementById("seconds").disabled = false;


}

function desable_change(){
    document.getElementById("hours").removeEventListener("input", val_hours);

    document.getElementById("hours").removeEventListener("click", reset);

    document.getElementById("hours").removeEventListener("blur", organize);

    document.getElementById("minutes").removeEventListener("input", val_min_sec);

    document.getElementById("minutes").removeEventListener("click", reset);

    document.getElementById("minutes").removeEventListener("blur", organize);

    document.getElementById("seconds").removeEventListener("input", val_min_sec);

    document.getElementById("seconds").removeEventListener("click", reset);

    document.getElementById("seconds").removeEventListener("blur", organize);

    document.getElementById("hours").disabled = true;
    document.getElementById("minutes").disabled = true;
    document.getElementById("seconds").disabled = true;

}




function regrecao(){
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

        if (seconds.value == 0) {
            if (minutes.value == 0) {
                if(hours.value == 0){
                    alert("o tempo acabou!!")
                    clearInterval(execution)
                    activ_change()
                    execution = false
                    document.getElementById("play").style.display = "block";
                    document.getElementById("pause").style.display = "none";

                }else{
                    if (hours.value < 10){
                        hours.value = hours.value-1
                        hours.value = 0+hours.value
                    }else{
                        hours.value = hours.value-1
                        seconds.value = 59
                    }

                    
                    minutes.value = 59
                    seconds.value = 59

                }

            }else{
                if (minutes.value < 10){
                    minutes.value = minutes.value-1
                    minutes.value = 0+minutes.value
                }else{
                    minutes.value = minutes.value-1
                    seconds.value = 59
                }

                
                seconds.value = 59
            }

        }else{
            
            if (seconds.value < 10){
                seconds.value = seconds.value-1
                seconds.value = 0+seconds.value
            }else{
                seconds.value = seconds.value-1
            }
        }
    }
activ_change();

execution = false

document.getElementById("reset").addEventListener("click", function(){
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")



    if(execution != false){
        clearInterval(execution)
        activ_change()
        execution = false
        document.getElementById("play").style.display = "block";
        document.getElementById("pause").style.display = "none";
        hours.value = ""
        minutes.value = ""
        seconds.value = ""

    }else{
        hours.value = ""
        minutes.value = ""
        seconds.value = ""
    }
    
    
    

    


})

document.getElementById("edit").addEventListener("click", function(){
    if(execution != false){
        clearInterval(execution)
        activ_change()
        execution = false
        document.getElementById("play").style.display = "block";
        document.getElementById("pause").style.display = "none";
        
    }else{
        activ_change()
    }


})

document.getElementById("pause").addEventListener("click", function(){
    clearInterval(execution)
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";

    


})

document.getElementById("play").addEventListener("click", function(){
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    if(hours.value != 0 || minutes.value != 0 || seconds.value != 0){
        desable_change();
        execution = setInterval(regrecao, 1000);
    }
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
    

    


})
