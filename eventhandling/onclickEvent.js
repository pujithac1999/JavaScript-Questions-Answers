// handling the action 

function onbutton(){
    console.log("onbutton");
    document.getElementById("demo").innerHTML = "bulb is on";
    document.getElementById("demo").style.fontSize = "200px";
}

function offbutton(){
    console.log("offbutton")
    document.getElementById("demo").innerHTML = "bulb is off"
}

console.log("file is invoked");