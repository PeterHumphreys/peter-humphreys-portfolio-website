//Dynamically change greeting at top of page based on time of day
let currDate = new Date();
let hrs = currDate.getHours();

//Default greeting to Good Morning and change otherwise
let greeting = 'Good Morning!';

//Between 12 and 6 pm
if (hrs >= 12 && hrs <= 17)
	greeting = 'Good Afternoon!';

//Between 6 pm and 12 am
else if (hrs > 17 && hrs < 24)
	greeting = 'Good Evening!';

//set text
document.querySelector("#greeting").innerHTML = greeting + "  I'm";

//Handle year in footer
let currYear = currDate.getFullYear();

document.querySelector("#year").innerHTML = currYear;


