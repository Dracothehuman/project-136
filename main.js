video="";
status="";
function preload(){
}
function setup(){
    canvas = createCanvas(480, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(480, 450);
}
function draw(){
    image(video, 0, 0, 480, 450);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}
function modelLoaded(){
    console.log("model has loaded");
    status = true;
}