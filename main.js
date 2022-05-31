x = 0
y = 0
draw_circle = "";
draw_rect = "";
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start(){
    document.getElementById("status").innerHTML = "Device is now listening"
    recognition.start();
}
recognition.onresult = function(event){
console.log(event);
var content = event.results[0][0].transcript
document.getElementById("status").innerHTML = content
if(content == "circle"){
    draw_circle = "set";
}
if(content == "rectangle"){
    draw_rect = "set";
}

}
function setup(){
canvas = createCanvas(500,400);
}
function draw(){
if(draw_circle == "set"){
    circle(200,200,30);
    draw_circle = "";
}
if(draw_rect == "set"){
rect(100,100,70,30);
draw_rect = "";w
}
}