const btn = document.getElementById('btn');
var result = document.getElementById('result');


btn.addEventListener('click', function headsOrTails(){
var nb = Math.round(Math.random());
if(nb == 1){
console.log(nb);
face.style.display = (face.style.display == 'block' ? 'none' : 'block');
result.style.display = (result.style.display == 'none' ? 'block' : 'none');
}else{
    console.log(nb);
    result.style.display = (result.style.display == 'block' ? 'none' : 'block');
    face.style.display = (face.style.display == 'none' ? 'block' : 'none');
}

});