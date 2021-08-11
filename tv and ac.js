
img="";
status="";


function preload(){
    img = loadImage('tv and ac.jpg');
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
   text("TV", 600, 50);
   noFill();
   stroke('#000000');
   rect(1, 50, 800, 500);
   textSize(25);
}
