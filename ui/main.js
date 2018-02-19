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

var button = document.getElementById("counter");

button.onclick = function(){
    //create request
    var request = new XMLHttpRequest();
    
    //capture response and store it
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //check if request was successfully completed
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    //make request
    request.open('GET','http://sheenamattu04.imad.hasura-app.io/counter',true);
    request.send(null);
};