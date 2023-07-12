//=====================================
let username = "alireza";
let password = "P@ssw0rd";
//=====================================let nameId=document.getElementById('name-id'), fn=document.getElementById('fn'), passId=document.getElementById('pass-id'), pw=document.getElementById('pw'), btn=document.getElementById('btn');
btn.onclick = function(){
    fn.innerHTML= (nameId.value != username) ? 'incorrect username': '';
    pw.innerHTML= (passId.value != password) ? 'incorrect password': '';
}