document.querySelector(".textpush").addEventListener("click", play, false);
document.querySelector(".a").className ="a";
document.querySelector(".b").className ="b";
document.querySelector(".c").className ="c";
document.querySelector(".d").className ="d";
document.querySelector(".e").className ="e";
document.querySelector(".f").className ="f";
document.querySelector(".g").className ="g";
document.querySelector(".h").className ="h";
document.querySelector(".i").className ="i";
document.querySelector(".j").className ="j";
document.querySelector(".k").className ="k";
document.querySelector(".l").className ="l";
document.querySelector(".m").className ="m";
document.querySelector(".n").className ="n";
document.querySelector(".o").className ="o";
document.querySelector(".p").className ="p";
document.querySelector(".q").className ="q";
document.querySelector(".r").className ="r";
document.querySelector(".s").className ="s";
document.querySelector(".t").className ="t";
document.querySelector(".u").className ="u";
document.querySelector(".v").className ="v";
document.querySelector(".w").className ="w";
document.querySelector(".x").className ="x";
document.querySelector(".y").className ="y";
document.querySelector(".z").className ="z";

function play(){
  document.querySelector(".a").className ="a";
  window.requestAnimationFrame(function(time){
    window.requestAnimationFrame(function(time){
      document.querySelector("a").className="a";
    });
  });
} 
