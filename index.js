var i=0;
while(i < document.querySelectorAll(".drum").length) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var charinbox = this.innerHTML;    
    playsound(charinbox);
    animation(charinbox);
  });
  document.addEventListener("keypress",function(event) {
    var key = event.key;
    playsound(key);
    animation(key);
  })
  i++;
}
function playsound(key) {
  switch(key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      case "d":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "l":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        default:
          console.log(key+" -> it is invalid");
  }
}
function animation(key) {
  var x = document.querySelector("."+key);
  x.classList.add("pressed");
  setTimeout(function() {
    x.classList.remove("pressed");
  },100
  );
}





// document.querySelector(".w").addEventListener("click",function() {
//   alert("W is clickeded !");
// });
// document.querySelector(".a").addEventListener("click",function() {
//   alert("A got clicked !");
// });
// document.querySelector(".s").addEventListener("click",function() {
//   alert("S is clickded !");
// });
// document.querySelector(".d").addEventListener("click",function() {
//   alert("D got clickded !");
// });
// document.querySelector(".j").addEventListener("click",function() {
//   alert("F got clicked");
// });
// document.querySelector(".k").addEventListener("click",function() {
//   alert("K got clicked");
// });
// document.querySelector(".l").addEventListener("click",function() {
//   alert("L got clicked !");
// });