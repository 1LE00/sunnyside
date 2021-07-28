

var x = document.getElementsByClassName("hamburger")[0];

const y = document.getElementsByTagName("ul")[0]

x.addEventListener("click", function(){
   y.classList.toggle("show");
});


window.onclick = function(event){
    if(!event.target.matches(".hamburger")){
        if(y.classList.contains("show")){
            y.classList.remove("show");
        }
    }
}



