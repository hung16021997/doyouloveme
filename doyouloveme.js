function Yes() {
    alert( " Yes are you right");

}



function No() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random()* window.innerHeight;
    document.getElementById('Random').style.left = x+ "px";
    document.getElementById( 'Random').style.top = y + 'px';

}