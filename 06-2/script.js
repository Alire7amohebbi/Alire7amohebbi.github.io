let rock=document.getElementById('rock'), paper=document.getElementById('paper'), scissors=document.getElementById('scissors'), user=document.getElementById('user'), com=document.getElementById('computer'), st=document.getElementById('status');
rock.onclick = function(){
    user.innerHTML = 'rock'
    let x=Math.random()*3;
    x=Math.ceil(x);
    if (x==1){
        com.innerHTML='rock';
        st.innerHTML='play again';
    }
    if (x==2){
        com.innerHTML='paper';
        st.innerHTML='lose';
    }
    if (x==3){
        com.innerHTML='scissors';
        st.innerHTML='win';
    }
}
paper.onclick = function(){
    user.innerHTML = 'paper'
    let x=Math.random()*3;
    x=Math.ceil(x);
    if (x==1){
        com.innerHTML='rock';
        st.innerHTML='win';
    }
    if (x==2){
        com.innerHTML='paper';
        st.innerHTML='play again';
    }
    if (x==3){
        com.innerHTML='scissors';
        st.innerHTML='lose';
    }
}
scissors.onclick = function(){
    user.innerHTML = 'scissors'
    let x=Math.random()*3;
    x=Math.ceil(x);
    if (x==1){
        com.innerHTML='rock';
        st.innerHTML='lose';
    }
    if (x==2){
        com.innerHTML='paper';
        st.innerHTML='win';
    }
    if (x==3){
        com.innerHTML='scissors';
        st.innerHTML='play again';
    }
}