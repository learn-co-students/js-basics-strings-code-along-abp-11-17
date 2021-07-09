// Write your code in this file!
// let currentUser = "string";
const currentUser = 'Grace Hopper';
// const welcomeMessage = "Welcome to Flatbook, ";
// const welcomeMessage = currentUser;
// const welcomeMessage = "Welcome to Flatbook, " + currentUser;
// typeof "const currentUser = 'Grace Hopper';";
// "const currentUser = 'Grace Hopper';".length;
// "We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`;
// String interpolation
// `Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!
// Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// const shortGreeting = 'Welcome, ';
// const shortGreeting = `Welcome, ${currentUser}`;
// 'Edsger Dijkstra'[0];
// 'Edsger Dijkstra'.charAt(0);
// 'Edsger Dijkstra'.length;
// Edsger Dijkstra'.slice();
// 'Edsger Dijkstra'.slice(7);
// 'Edsger Dijkstra'.slice(0, 3);
// currentUser.slice(0, 1);
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
