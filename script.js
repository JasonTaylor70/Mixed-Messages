
const quotes = ["The person who asks questions is more helpful than the person who offers advice. ~ James Clear", "The highest result of education is tolerance. ~ Helen Keller", "When you find yourself spending hours trying to debug one line of code, don't get frustraited. Every programmer has had the same struggle at one point. ~ Jason Hunter", "Learning to program is just like learning any other language, it doesn't happen over night. Don't set a time limit just be patient with yourself. ~ Jason Hunter", "He who asks is a fool for five minutes, but he who does not ask remains a fool forever. ~ Chinese proverb", "You dont have to completely understand each concept as you learn, just understand enough to move on to the next exercise. Through practice, the bigger picture will paint itself. ~ Jason Hunter", "Failure is success if we learn from it. ~ Malcolm Forbes", "If you hear a voice within you say, 'you cannot paint', then by all means paint, and that voice will be silenced. ~ Vincent Van Gogh", "Success consists of going from failure to failure without loss of enthusiasm. ~ Winston Churchill", "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ~ Thomas A. Edison"];

const statistics = ["Learning through e~learning typically requires 40~60% less employee time than learning the same material in a classroom setting.", "E~Learning increases retention rates 25% to 60% while retention rates of face~to~face training are very low in comparison: 8% to 10%.", "Participants learned nearly five times more material without increasing time spent in training.", "By using eLearning technology, organizations can achieve an 18% boost in employee engagement.", "Online courses are resulting in nearly 87% less energy consumption and an 85% reduction in CO2 emissions when compared to traditional classroom courses. With the continued emergence of eLearning, the overall global savings in energy consumption and carbon footprint over the coming decades could be massive.", "Global corporate online learning market is projected to grow to $50 billion by 2026, with an annual growth rate of 15% from 2020 to 2026.", "The bulk of college students were satisfied with their experience of online learning vs classroom learning. While 41% said the experience was actually better, 38% said it was about the same.",  "Digital technology seems to have a positive impact on nearly all aspects of learning experience, with 43% of students stating that digital technology was excellent for supporting their homework assignments.", "The use of eLearning is also catching up in Fortune 500 companies, with nearly 41.7% of Fortune 500 companies using technology to train their employees.", "According to a 2018 study, around 90% of companies used online learning for talent development."];

const rando = Math.floor(Math.random() * 10);

const startDialog = () => {
  let greeting = prompt("Hello friend! What is your name?");

  if (!greeting) {
    alert("Invalid entry!");
    greeting = prompt("Please enter your name!");
  }

  let theQuestion = prompt(`Nice to meet you ${greeting}, would you like some motivation to get your brain thinking before you study?`);

  if (theQuestion == undefined || !isNaN(theQuestion)) {
    alert("Invalid entry!");
    theQuestion = prompt("Please enter Yes or No!");
  }
  if (theQuestion.toLowerCase() === "no") {
    console.log("Have a nice day!");
  } else {
    console.log("Motivational Quote: " + quotes[rando]);
    console.log("Positive E~Learning Statistic: " + statistics[rando2]);
  }
};

startDialog();

//stat1 ---- Brandon~Hall Study, Karla Gutierrez https://www.shiftelearning.com
//stat2 ---- Research Institute of America, Karla Gutierrez https://www.shiftelearning.com
//stat3 ---- IBM Study, Karla Gutierrez https://www.shiftelearning.com
//stat4 ---- Molly Fletcher Company, Karla Gutierrez https://www.shiftelearning.com
//stat5 ---- ResearchGate, Baidhurya Mani https://sellcoursesonline.com
//stat6 ---- Shibuya Data Count, Baidhurya Mani https://sellcoursesonline.com
//stat7 ---- E~Student, Baidhurya Mani https://sellcoursesonline.com
//stat8 ---- Class Central, Baidhurya Mani https://sellcoursesonline.com
//stat9 ---- Lynda, Baidhurya Mani https://sellcoursesonline.com
//stat10 ---- Harvard Business Review, Baidhurya Mani https://sellcoursesonline.com
