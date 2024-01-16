
// selectors
let inputBox = document.getElementById("inputBox");  //selector for input element
let buttons = document.querySelectorAll("button");  //selector for all the buttons
console.log(buttons)


// INITIALIZERS
let string = "";


// CODE
buttons.forEach(button => {  //added a loop on the buttons nodelist to access buttons one by one
    button.addEventListener(  //adding event listener on each button
        'click', 
        (e) => {
            if(e.target.innerHTML == '='){
                string = eval(string);
                inputBox.value = string;
            }

            else if(e.target.innerHTML == 'AC'){
                string = "";
                inputBox.value = string;
            }

            else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1);
                inputBox.value = string;
            }

            else{
                string += e.target.innerHTML ;
                inputBox.value = string;
            }
        }
    )
})
