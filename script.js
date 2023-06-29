let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mount3 = document.getElementById('mount3');
let mount4= document.getElementById('mount4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.getElementById('nou');
let container = document.querySelector('.container');
let button = document.getElementById('butt');
let moonlight = document.getElementById('mool');

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*3 + 'px'
    mount3.style.top = value*2 + 'px';
    mount4.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*3 + 'px';

  button.style.marginTop = value + 'px';
  moonlight.style.marginTop = value + 'px'
  moonlight.style.marginRight = value*3 + 'px'

if (scrollY >= 67){
    nouvil.style.fontSize = '67';
    nouvil.style.position = 'fixed';
    if (scrollY >= 360){
        nouvil.style.display = 'none'  
    }else{
            nouvil.style.display = 'block'
        }
    
if (scrollY >=75){
    container.style.background = 'linear-gradient(to top right ,rgb(10, 0, 104)5%,rgb(73, 147, 221) )'
}
else{
    container.style.background = 'linear-gradient(to bottom, rgb(51, 0, 65)5%,black 95%)'
}
}
else{
    nouvil.style.fontSize = value  + 'px'
    container.style.background = 'linear-gradient(to bottom, rgb(51, 0, 65)5%,black 95%)'
}
}
