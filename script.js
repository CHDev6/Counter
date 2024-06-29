const subtract = document.querySelector(".subtract");

const reset = document.querySelector(".reset");

const add = document.querySelector(".add");

const number = document.querySelector(".number");


subtract.addEventListener('click', function(){
    let x = Number(number.innerHTML)

    x -= 1
    
    number.innerHTML = x

})

add.addEventListener('click', function(){
    let x = Number(number.innerHTML)

    x += 1
    
    number.innerHTML = x

})

reset.addEventListener('click', function(){
    
    number.innerHTML = 0

})
