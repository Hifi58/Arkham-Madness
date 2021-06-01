const btn = document.getElementById('btn');
var result = document.getElementById('result');


btn.addEventListener('click', function headsOrTails(){
var nb = Math.round(Math.random());
if(nb == 1){
console.log(nb);
btn.style.display = (btn.style.display == 'none' ? '' : 'none');
}else{
    console.log(nb);
    result.style.display = (result.style.display == 'none' ? '' : 'none');
}

});