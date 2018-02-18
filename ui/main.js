alert("Hello!Thanks for visiting")
console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML = "Using client side Javascript now!"

var img = document.getElementById("madi");
img.onclick = function(){
    img.style.boxShadow = "5px 3px 10px black" ;
}