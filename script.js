const screen = document.getElementById("screen");
let calculated = false;
let ans = 0;

function add_screen(val){
    if(!calculated)
        screen.value += val;
    else{
        screen.value = val;
        calculated = false;
    }
}

function clear_screen(){
    screen.value = "";
}

function backspace(){
    screen.value = screen.value.slice(0, -1);
}


function calc(){
    screen.value = eval(screen.value);
    ans = screen.value
    calculated = true;
}