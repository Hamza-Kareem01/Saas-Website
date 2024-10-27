
let btn=document.getElementById("Monthly")
let btn1=document.getElementById("Annual")


function monthly() {
    document.getElementById("monthly-rate").innerHTML = "$29.99";
    document.getElementById("annual-rate").innerHTML = "$49.99";
    btn.style.backgroundColor = "orangered";
    btn1.style.backgroundColor= "transparent";
}

// btn.addEventListener('click' , monthly)

function yearly() {

     document.getElementById("monthly-rate") .innerHTML = "$49.99";
     document.getElementById("annual-rate").innerHTML = "$99.99";
    btn.style.backgroundColor = "transparent";
    btn1.style.backgroundColor = "orangered";
}

// btn1.addEventListener('click' , yearly)


