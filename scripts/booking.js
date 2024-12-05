/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

    let daily_rate = 0
    let num_of_days = 0
    let calculated_cost = 0

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let day_buttons = document.getElementsByTagName("li"); 

for (let day_button of day_buttons) {
    day_button.addEventListener("click", day_clicked);
}

function day_clicked(event) {
    let day_button = event.target; 

    if (day_button.classList.contains('clicked')) {
        day_button.classList.remove('clicked');
        num_of_days -= 1
    } else {
        day_button.classList.add('clicked');
        num_of_days += 1
    }
    calculate()
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clear_button = document.getElementById('clear-button')

clear_button.addEventListener("click", clear_days)

function clear_days(){

    for (let day_button of day_buttons){
        day_button.classList.remove('clicked')
    }

    num_of_days = 0
    calculated_cost = 0
    calculate()
}
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let full_day = document.getElementById("full")
let half_day = document.getElementById("half")

half_day.addEventListener("click", half_duration_selected)
full_day.addEventListener("click", full_duration_selected)

function half_duration_selected(){
    daily_rate = 20
    full_day.classList.remove('clicked');
    half_day.classList.add('clicked')
    calculate()
}

function full_duration_selected(){
    daily_rate = 35 
    half_day.classList.remove('clicked');
    full_day.classList.add('clicked') 
    calculate()  
}
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(){
    calculated_cost = daily_rate * num_of_days
    document.getElementById("calculated-cost").innerHTML = calculated_cost
}
 
