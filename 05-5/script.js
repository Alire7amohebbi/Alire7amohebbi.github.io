let no1=document.getElementById('no1'), fin=document.getElementById('fin'), int = document.getElementById('int'), no2 = document.getElementById('no2');
fin.onclick = function(){
    no2.value = Number.isFinite(no1.value);
}
int.onclick = function(){
    no2.value = Number.isInteger(no1.value);
}