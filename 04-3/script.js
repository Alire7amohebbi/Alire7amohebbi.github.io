let btn=document.getElementById('btn'), nameId = document.getElementById('name-id'), ageId = document.getElementById('age-id'), agrId = document.getElementById('agr-id'), fn = document.getElementById('fn'), ag = document.getElementById('ag'), gr = document.getElementById('gr');
btn.onclick= function(){
    fn.innerHTML= typeof(nameId.value)
    ag.innerHTML= typeof(ageId.value)
    gr.innerHTML=typeof(agrId.checked)
}