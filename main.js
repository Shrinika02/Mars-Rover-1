canvas=document.getElementById("mycanvas");
ctx =canvas.getContext("2d");
roverx= 15;
rovery= 15;
roverw= 100;
roverh= 100;
bg_image="mars.jpg";
rover_img="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=bg_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage(rover_imgtag, roverx, rovery, roverw, roverh)
}

window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if (keypressed=="37"){
        console.log("left");
       left()
    }
    if (keypressed=="38"){
        console.log("up");
       up()
    }
    if (keypressed=="39"){
        console.log("right");
       right()
    }
    if (keypressed=="40"){
        console.log("down");
       down()
    }
}