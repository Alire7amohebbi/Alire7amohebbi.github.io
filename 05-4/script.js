let no1=document.getElementById('no1'),no2=document.getElementById('no2'), no3=document.getElementById('res'), gt=document.getElementById('gt'),lt=document.getElementById('lt'),ge=document.getElementById('ge'), le=document.getElementById('le'),eq=document.getElementById('eq'), ne=document.getElementById('ne');
gt.onclick = function(){
    no3.value = no1.value > no2.value;
}
lt.onclick = function(){
    no3.value = no1.value < no2.value;
}
ge.onclick = function(){
    no3.value = no1.value >= no2.value;
}
le.onclick = function(){
    no3.value = no1.value <= no2.value;
}
eq.onclick = function(){
    no3.value = no1.value == no2.value;
}
ne.onclick = function(){
    no3.value = no1.value != no2.value;
}