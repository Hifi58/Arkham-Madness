document.querySelector(".push").addEventListener("click", play, false);
document.querySelector(".titre").className ="titre";
document.querySelector(".a").className ="a";
document.querySelector(".b").className ="b";
document.querySelector(".c").className ="c";
document.querySelector(".d").className ="d";
document.querySelector(".e").className ="e";
document.querySelector(".f").className ="f";
document.querySelector(".g").className ="g";
document.querySelector(".h").className ="h";

function play(){
  window.requestAnimationFrame(function(time){
    window.requestAnimationFrame(function(time){
      document.querySelector("push").className="titre push";
    });
  });
} 
