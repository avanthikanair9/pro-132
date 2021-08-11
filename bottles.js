
img="";
status="";


function preload(){
    img = loadImage('bottles.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
     if(error){
            console.log(error);
            }
            console.log(results);
}


function draw(){
   fill('#000000');
   text("BOTTLES", 450, 50);
   noFill();
   stroke('#000000');
   rect(1, 50, 450, 350);
   textSize(25);
}