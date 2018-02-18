alert("Hello!Thanks for visiting")
console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML = "Using client side Javascript now!"

var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100)
    img.style.boxShadow = "5px 3px 10px black" ;

}