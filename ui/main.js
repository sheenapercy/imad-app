//alert("Hello!Thanks for visiting")
/*console.log('Loaded!');

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

*/

var botton = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
    //make request
    
    //capture response and store it
    
    //render var in correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};