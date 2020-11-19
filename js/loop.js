let number = prompt('How many burgers can you eat?');

while(isNaN(number)){
    number = prompt('How many burgers can you eat?');
}
alert ('Wow, I can eat more! ' + number);
if(isNaN(number)){
   alert('keep trying');
}else{
    alert('just right');
}
let burger = 0;

while(burger < 10){
console.log(burger);
burger++;
}
alert ('Im full!');

//prompt('What star rating would you give burgers, 1-5?');
//let image = '<img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg">';

//function fiveStar(){
//    for(let i=1; i <= 5; i++){
//image + i;
//    }
//}
