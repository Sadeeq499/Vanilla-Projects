(function(){
var time  = new Date(),
seconds = time.getSeconds() / 60 * 360,
minutes = time.getMinutes() / 60 * 360 + time.getSeconds() /60 *6,
hours = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30,

animation = [
    "@keyframes sec_hand{from{transform:rotate("+seconds + "deg);}to{transform: rotate("+ (seconds + 360)+ "deg);}}",
    
    "@keyframes min_hand{from{transform : rotate("+minutes + "deg);}to{transform: rotate("+ (minutes + 360) + "deg);}}",
    
    "@keyframes hr_hand{from{transform : rotate("+hours + "deg);}to{transform: rotate("+ (hours + 360) + "deg);}}",
].join("");
document.querySelector('#animaiton_clock').innerHTML = animation;



})();