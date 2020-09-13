const validation = () => {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    userIp = document.getElementById('userIp').value;
    if(userIp == ''){
        document.getElementById('error-msg').innerText='Please enter something!'   
 
    } else if(!userIp.match(mailformat)){
        document.getElementById('error-msg').innerText='Please enter a valid email!'
    }
    else{
        document.getElementById('error-msg').style.color='green'
        document.getElementById('error-msg').innerText="You'll receive updates!"
    }
    setTimeout(() => {
        document.getElementById('error-msg').style.color=''
        document.getElementById('error-msg').innerText = ' '
       },2500)
 
}