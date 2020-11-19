'use strict'

let answer = prompt('What is your farvorite burger place?');

alert('This user likes ' + answer);

document.write( '<section>' + answer + '</section>');

let response = '';

// if statement
// if statments tell us if something meets a condition

// In JS...to get an exact equivelant..it's a "strict equal" (===)


if (answer ===  'Shake Shack') {
    response = 'Best organic Burger';
} else if( answer === 'Five Guys'){
    response = 'Best Burger your way';
} else if(answer === 'Wendys'){
    response='Best fast Food Burger'
}
else{
    response = 'Try my List';
}

document.write(response);

}