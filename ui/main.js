alert("Hello!Thanks for visiting")
console.log('Loaded!');

var element = document.getElementById ("main-text");
element.innerHTML = "Using client side Javascript now!"

var img = document.getElemntById("madi");
img.onclick = function(){
    img.style.boxShadow = "30px 30px 30px black" ;
}