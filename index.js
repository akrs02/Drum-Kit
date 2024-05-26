for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}
function handleclick(){
   check(this.innerHTML);
   btnAnimation(this.innerHTML);
}

document.addEventListener("keydown",function(event){
    check(event.key);
    btnAnimation(event.key);
})
function check(a){
    switch(a){
        case "w":var a=new Audio("./sounds/tom-1.mp3");
                 a.play();
                 break;
        case "a":var a=new Audio("./sounds/tom-2.mp3");
                a.play();  
                break;
        case "s":var a=new Audio("./sounds/tom-3.mp3");
                a.play();
                break;
        case "d":var a=new Audio("./sounds/tom-4.mp3");
                a.play();
                break;
        case "j":var a=new Audio("./sounds/crash.mp3");
                a.play();
                break;
        case "k":var a=new Audio("./sounds/kick-bass.mp3");
                a.play();
                break;
        case "l":var a=new Audio("./sounds/snare.mp3");
                a.play();        
                break;
        default:console.log(this.innerHTML);        
       }
}

function btnAnimation(b){
    let currentBtn=document.querySelector("."+b);
    currentBtn.classList.add("pressed");
    setTimeout(function(){
        currentBtn.classList.remove("pressed");
    },100);
}

