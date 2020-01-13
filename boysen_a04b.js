/*
Bill Boysen
boysen_a04b.js
INFO_2124_WW
Thoendel
1/12/2020
*/

//Declare and assign my first name
let firstName = "Bill";

//Declare and assign my weight
let myWeight = "250.0";

//Declare and assign my height
let myHeight = 74.0;

//Declare and assign my age
let myAge = "37";

//Declare and assign constant Mars gravity
const marsGravity = 0.38;

//Declare and assign constant inches to meters
const inchesToMeters = 2.54;

//Calculates age into days
let daysOld = Number(myAge) * 365;

//Calculates age in Mars years
let marsAge = daysOld / 687;

//Calculates weight on Mars
let marsWeight = parseFloat(myWeight) * marsGravity;

//Template literal to display data
let story = `
Hello there, ${firstName}! On Earth you weigh ${parseFloat(myWeight)} pounds.
But, since gravity is weaker on the Mars, you would only weight ${marsWeight} pounds there!

Neat huh? Want to know what else is neat?

Mars takes longer to rotate around the Sun than does Earth. This means the Mars year is actually
longer than our "terran" year. So although you are ${parseInt(myAge)} years old on Earth, you're
only ${String(marsAge)} years old on Mars.

Did you know, the European Space Agency requires potential astronauts to measure between
153 and 190 cm? Just in case you ever decide to move to Europe and want to be
and astronaut, your height in metric is ${myHeight * inchesToMeters} cm.`;

//Prints the template
console.log(story);