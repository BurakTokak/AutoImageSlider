currentSlide = 1;
maxSlide = 4;
function justDoIt(id){
    document.getElementById("im"+currentSlide).style.opacity = "0";
    document.getElementById("im"+id).style.opacity = "1";
    currentSlide = id;
}

function changeSlide(what){
    if(what == "prev"){
        if(currentSlide == '1'){
            justDoIt(maxSlide);
        }else{
            justDoIt(currentSlide - 1);
        }
    }else if(what == "next"){
        if(currentSlide == maxSlide){
            justDoIt(1);
        }else{
            justDoIt(currentSlide + 1);
        }
    }

}

window.onload = function(){
    setInterval(function(){ changeSlide('next') }, 4000);
}
