let add=document.getElementById('add'), sub=document.getElementById('sub'),mul=document.getElementById('mul'), div=document.getElementById('div'), exp=document.getElementById('exp'), mod=document.getElementById('mod'), n1=document.getElementById('no1'), n2=document.getElementById('no2'), n3=document.getElementById('res');
add.onclick = function(){
    n3.value = +n2.value + +n1.value;
}
sub.onclick = function(){
    n3.value = n1.value - n2.value;
}
mul.onclick = function(){
    n3.value = n2.value * n1.value;
}
div.onclick = function(){
    n3.value = n1.value / n2.value;
}
exp.onclick = function(){
    n3.value = n1.value ** n2.value;
}
mod.onclick = function(){
    n3.value = n1.value % n2.value;
}