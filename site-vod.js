var leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;
var keystate;
document.addEventListener("keydown", function (e) {
    keystate[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    delete keystate[e.keyCode];
});

if (keystate[leftKey]) {
//code to be executed when left arrow key is pushed.
}
if (keystate[upKey]) {
//code to be executed when up arrow key is pushed.
}
if (keystate[rightKey]) {
//code to be executed when right arrow key is pushed.
}
if (keystate[downKey]) {
//code to be executed when down arrow key is pushed.
}