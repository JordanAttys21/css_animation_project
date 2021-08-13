let button = document.querySelector("#race");
let images = document.querySelectorAll("img");


let randInt = Math.floor(Math.random() * 5 + 1);
let randInt2 = Math.floor(Math.random() * 5 + 1);

button.onclick = event => {
    event.preventDefault();
   
    images[0].style.animationName = "Move";
    images[0].style.animationDuration = randInt + "s";
    

    images[1].style.animationName = "Move";
    images[1].style.animationDuration = randInt2 + "s";
    
}





