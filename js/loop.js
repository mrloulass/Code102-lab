function startSite(){
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
}


function burgerpictures(){
    let burger='';
    let answer = prompt('What star rating would you give burgers, 1-5?');
    // Try adding logic that makes sure they are putting in 1-5
    // and make sure they are putting in a real number
    // make your for loop go up to the number that they put in within the range of 1-5
    
    for(let i=1;i <= 5;i++){
     burger = burger + '<li> <img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg"></li>';

    }
    return burger;
}

//let image = '<img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg">';

//function fiveStar(){
//    for(let i=1; i <= 5; i++){
//image + i;
//    }
//}
