var array = document.querySelectorAll(".drum");

/*.addEventListener("click", handleClick);*/
for(var i=0;i<array.length;i++){
  var a = this.
  array[i].addEventListener("click", function (){
  handleClick(this.innerHTML);
  animation(this.innerHTML);
});
}
function handleClick(key){
  switch(key){
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "k":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "l":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    default:
    break;
  }
}
document.addEventListener("keypress", function (event){
handleClick(event.key);
animation(event.key);
});

function animation(key){
  var currButton = document.querySelector("."+key);
  currButton.classList.add("pressed");
  setTimeout(function(){currButton.classList.remove("pressed"); }, 100);
}
      /*case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
      case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
      default:
      break;
}
});
  /*function handleKey(event){
    console.log(event);
  /*  switch(key){
      case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
      case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
      default:
      break;
    }*/


/**/
