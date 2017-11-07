// Write your code in this file!
const currentUser = "Marie Curie";
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
const excitedWelcomeMessage = `welcome to flatbook, " + ${currentUser}!`.toUpperCase();
//const firstInitial = currentUser[0];
//const firstInitial = currentUser.slice(0,1);
//const firstInitial = currentUser.charAt(0);
//const firstInitial = currentUser.substr(0,1);
const firstInitial = currentUser.substring(0,1);
const shortGreeting = `Welcome, ${firstInitial}!`;
