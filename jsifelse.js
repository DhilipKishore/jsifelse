
let hour = new Date().getHours();

if (hour >= 0 && hour <= 13)

console.log("Good Morning");


else if(hour >= 13 && hour <= 17)

console.log("Good Afternoon");

else

console.log("Good Evening");

console.log(hour);