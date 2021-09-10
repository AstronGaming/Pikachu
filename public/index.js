let a; //declaring variable a
let date;//declaring variable date
let time; //declaring variable time

//Using setInterval function
setInterval(() => {
a = new Date(); //Storing Date function in a variable which returns valur
date = a.toLocaleDateString();//storing local date in date vairable
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds(); // Setting up time
document.getElementById("time").innerHTML = 'Time ' + time; //Displaying time in innerhtml id time
document.getElementById("date").innerHTML = 'Date ' +  date;//Displaying date in innerhtml using id date
}, 1000); //interval of 1 second