/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

    let cost_per_day = 0
    let num_of_days = 0






/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let day_buttons = document.getElementsByTagName("li");  // Select all day elements with the 'blue-hover' class

for (let day_button of day_buttons) {
    day_button.addEventListener("click", day_clicked);
}

function day_clicked(event) {
    let day_button = event.target; 

    if (day_button.classList.contains('clicked')) {
        day_button.classList.remove('clicked');
    } else {
        day_button.classList.add('clicked');
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clear_button = document.getElementById('clear-button')

clear_button.addEventListener("click", clear_days)

function clear_days(){

    for (let day_button of day_buttons){

        day_button.classList.remove('clicked')

        let calculated_cost = 0
    }
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let full_day = document.getElementById("full")
let half_day = document.getElementById("half")

half_day.addEventListener("clicked", half_duration_selected)
full_day.addEventListener("clicked", full_duration_selected)

function half_duration_selected(){

    if(!half_day.classList.contains('clicked')){
        full_day.classList.remove('clicked');
        half_day.classList.add('clicked')
    } 
}

function full_duration_selected(){

    if(!full_day.classList.contains('clicked')){
        half_day.classList.remove('clicked');
        full_day.classList.add('clicked')
    } 
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


