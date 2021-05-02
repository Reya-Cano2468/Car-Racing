canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car1_width = 120;
car1_height = 70;
car1_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJ0jgglMYx_rhY3QcUvDVead_xyJjNw13BA&usqp=CAU"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZmTo5GxkC5C9EB2RCtR7RqPiwVMQOnvcHQ&usqp=CAU"
car2_x = 10;
car2_y = 100;


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "R.t.jpg"

    car1_imgTag = new Image();
    car1_imgTag.onload = upload_car1;
    car1_imgTag.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4motF1EP72gNe0RM1q9nBm3RkmXjPm3MhHA&usqp=CAU"

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4motF1EP72gNe0RM1q9nBm3RkmXjPm3MhHA&usqp=CAU"
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}
function upload_car1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height)
}

function upload_car2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == '38') {
        up();
    }

    if (keyPressed == '40') {
        down();
    }

    if (keyPressed == '37') {
        left();
    }

    if (keyPressed == '39') {
        right();

 }
 if (keyPressed == '87') {
    W();
}

if (keyPressed == '83') {
    S();
}

if (keyPressed == '65') {
    A();
}

if (keyPressed == '68') {
    D();
}







}

function up() {

    if (car1_y >= 0) {
        car1_y -= 10;
        uploadBackground();
        upload_car1();
        upload_car2();
    }
}

function down() {

    if (car1_y <= 500) {

        car1_y += 10;
        uploadBackground();
        upload_car1();
        upload_car2();
    }
}

function left() {

    if (car1_x >= 0) {
        car1_x -= 10;
        uploadBackground();
        upload_car1();
        upload_car2();
    }
}

function right() {

    if (car1_x <= 700) {
        car1_x += 10;
        uploadBackground();
        upload_car1();
        upload_car2();
    }
}





function W() {

    if (car2_y >= 0) {
        car2_y -= 10;
        uploadBackground();
        upload_car2();
        upload_car1();
    }
}

function S() {

    if (car2_y <= 500) {

        car2_y += 10;
        uploadBackground();
        upload_car2();
        upload_car1();
    }
}

function A() {

    if (car2_x >= 0) {
        car2_x -= 10;
        uploadBackground();
        upload_car2();
        upload_car1();
    }
}

function D() {

    if (car2_x <= 700) {
        car2_x += 10;
        uploadBackground();
        upload_car2();
        upload_car1();
    }
}





if(car1_x > 700){
    console.log("car1 Won")
    document.getElementById('game_status').innerHTML = "Car 1 Won"
}

