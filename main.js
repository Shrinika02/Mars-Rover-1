picas=["1.jpeg","2.jpeg"," 3.jpeg", "4.jpeg", "mars.jpg"];
random_num=Math.floor(Math.random()*5);
canvas=document.getElementById("mycanvas");
ctx =canvas.getContext("2d");
roverx= 15;
rovery= 15;
roverw= 100;
roverh= 100;
bg_image=picas[random_num];
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
 function up(){

    if (rovery >=0){
        rovery=rovery-10;
        uploadBackground()
        uploadrover()
    }
 }

 function down(){

    if (rovery <=400){
        rovery=rovery+10;
        uploadBackground()
        uploadrover()
    }
 }
 function left(){

    if (roverx >=0){
        roverx=roverx-10;
        uploadBackground()
        uploadrover()
    }
 }
 function right(){

    if (roverx <=700){
        roverx=roverx+10;
        uploadBackground()
        uploadrover()
    }
 }