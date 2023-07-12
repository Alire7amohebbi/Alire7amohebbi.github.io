let n1=document.getElementById('no1'), n2=document.getElementById('no2'), n3=document.getElementById('res'), and=document.getElementById('and'), or=document.getElementById('or');
and.onclick=function(){
    n3.value = n1.value && n2.value;
}
or.onclick=function(){
    n3.value = n1.value || n2.value;
}