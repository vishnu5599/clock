function displaytime(){

var datetime = new Date(); 
var hrs =datetime.getHours();
var min =datetime.getMinutes();
var sec =datetime.getSeconds();
var session = document.getElementById('session')
document.getElementById('hours').innerHTML = hrs;
document.getElementById('minutes').innerHTML = min;
document.getElementById('seconds').innerHTML = sec;

if(hrs >= 12){
    session.innerHTML ='PM';
}
else{
    session.innerHTML ='AM'
}

if(hrs > 12){
    hrs =hrs -12;

}
}
setInterval(displaytime,10);