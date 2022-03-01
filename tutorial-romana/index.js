//var, let, const
//let locale, var globale
//good practice: let + const

let age = 10;

if(age > 18)
{
    console.log("You are over 18.");
}
else
{
    console.log("You are under 18.");
}
//loops
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for(i = 0; i < week.length; i++)
{
    console.log(week[i]);
}
let number = 0;
while(number < 10)
{
    console.log("Hello, " + number + " primavara!!!!!!!");
    number++;
}

do
{
    console.log("mhm");
    number++;
}while(number < 10)