let n1=document.getElementById('no1'), n2=document.getElementById('no2'),n3=document.getElementById('res'), add=document.getElementById('add');
add.onclick=function(){
    n3.value = n2.value +  n1.value
}