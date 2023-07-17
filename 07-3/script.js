let btn=document.getElementById('btn'), id=document.getElementById('id'),msg=document.getElementById('msg'),str,length,z=0,t1,t2,x='',t3,t4,t5,r;
btn.onclick = function(){
    str=id.value;
    length=str.length;
    for (let index = 0; index < length; index++) {
        z=0
        for (let n = 0; n < 10; n++) {
            if (str[index]==n){
                z+=1
            }
        }
        t1=(z==0)?false:true;
    }
    t3=(str[2]==0 && str[1]==0 && str[0]==0)?false:true;
    for (let index = 0; index < length; index++) {
        x+=str[0]
    }
    t4=(str==x)?false:true;
    r=(str[0]*10 + str[1]*9 + str[2]*8 + str[3]*7 + str[4]*6 + str[5]*5 + str[6]*4 + str[7]*3 + str[8]*2)%11;
    if (r >= 2){
        r=11-r;
    }
    t5=(r==str[9])?true:false;
    if (t1==false || t3==false || t4==false || t5==false){
        msg.innerHTML = 'Invalid ID';
    }else{
        msg.innerHTML = 'Valid ID';
    }
}