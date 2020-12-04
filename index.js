var readlinesync=require("readline-sync");
var chalk=require("chalk");
user=readlinesync.question("Please Enter your name");
console.log(chalk.red("Hey "+user+" Welcome to Sneha's Quiz"));
var score=0;
//OBJECT WITH SCORES OF OTHER FRIENDS
var friends=[
  {
    name:"Yash",
    score:4
  },
  {
    name:"prakhar",
    score:3
  },
  {
    name:"Mansi",
    score:1

  },
  {
  name:"Africa",
  score:0
  }
  ];
//OBJECT CONTAINING QUESTIONS AND ANSWERS
  var ques=[
    {
      question: "Which is my favourite TV series",
      answer:"Friends"
    },
    {
      question:"Where do I live",
      answer:"Delhi"
    },
    {
      question:"What is my favourite Sabzi",
      answer:"Kadhai Paneer"
    },
    {
      question:"What is my favourite hobby",
      answer:"Singing"
    }

  ]
  //FUNCTION FOR COMPARISON OF ANSWERS
function QuizOne(question,answer)
{
  userAnswer=readlinesync.question(question);
  if (userAnswer === answer)
   {
      score=score+1;
      console.log("CORRECT!!!");
   }
   else
   {
     console.log("OOPSIEE NO!");
   }
}

for(var i=0;i<ques.length;i++)
{
  QuizOne(ques[i].question,ques[i].answer);
}
console.log("Your final score is\n "+score);
console.log("Other scores are \n ");

for(var j=0;j<friends.length;j++)
{
  console.log(chalk.yellow(friends[j].name +" "+ friends[j].score));
}
console.log(chalk.blue("~~~~~~THANKS FOR PLAYING~~~~~~~~~"));