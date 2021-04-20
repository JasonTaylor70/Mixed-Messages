
const quote1 = "The person who asks questions is more helpful than the person who offers advice. ~ James Clear";
const quote2 = "The highest result of education is tolerance. ~ Helen Keller";
const quote3 = "When you find yourself spending hours trying to debug one line of code, don't get frustraited. Every programmer has had the same struggle at one point. ~ Jason Hunter";
const quote4 = "Learning to program is just like learning any other language, it doesn't happen over night. Don't set a time limit just be patient with yourself. ~ Jason Hunter";
const quote5 = "He who asks is a fool for five minutes, but he who does not ask remains a fool forever. ~ Chinese proverb";
const quote6 = "You dont have to completely understand each concept as you learn, just understand enough to move on to the next exercise. Through practice, the bigger picture will paint itself.  ~ Jason Hunter"
const quote7 = "Failure is success if we learn from it. ~ Malcolm Forbes";
const quote8 = "If you hear a voice within you say ‘you cannot paint', then by all means paint, and that voice will be silenced. ~ Vincent Van Gogh";
const quote9 = "Success consists of going from failure to failure without loss of enthusiasm. ~ Winston Churchill";
const quote10 = "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ~ Thomas A. Edison";

const quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];

const rando = Math.floor(Math.random() * 10);

let greeting = prompt("Hello friend! What is your name?");

if (!greeting) {
  alert("Invalid entry!");
  greeting = prompt("Please enter your name!");
}

let theQuestion = prompt(`Nice to meet you ${greeting}, would you like a small motivational quote to get your brain thinking before you study? `);

if (!theQuestion) {
  alert("Invalid entry!");
  prompt("Please enter Yes or No!");
} else if (theQuestion.toLowerCase() === "no") {
  console.log("Have a nice day!");
} else {
  console.log(quotes[rando]);
};
