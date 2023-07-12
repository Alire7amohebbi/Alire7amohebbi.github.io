let name=document.getElementById('name-id'), no=document.getElementById('no'), st=document.getElementById('st'), bl=document.getElementById('bl'), btn=document.getElementById('btn');
btn.onclick = function(){
    st.innerHTML = name.value;
    no.innerHTML = parseInt(name);
    bl.innerHTML = Boolean(name);
}