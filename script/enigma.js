document.getElementById('test').style.display= 'none';

function switchDisplay(){
  var start = document.getElementById('test');
  var end = document.getElementById('nothing');
   
  start.style.display = (start.style.display == 'none' ? '' : 'none');
  end.style.display = (end.style.display == 'none' ? '' : 'none');
}
