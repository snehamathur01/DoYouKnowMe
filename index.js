var readlinesync=require("readline-sync");
var chalk=require("chalk");
user=readlinesync.question("Please Enter your name");
console.log(chalk.red("Hey "+user+" Welcome to Sneha's Quiz"));
var score=0;
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

QuizOne("Which is my favourite TV series\n","Friends");
QuizOne("Where do I live\n","Delhi");
QuizOne("What is my favourite Sabzi\n","Kadhai Paneer");
QuizOne("What is my favourite hobby\n","Singing");
console.log("Your final score is\n "+score);

for (var i=0;i<friends.length;i++)
{
  if (score>=friends[i].score)
  { s=i+1
    console.log(chalk.cyan(user+" your rank is "+s))
    if (i==friends.length-1)
    {
      console.log("You have the lowest score");
    }
    if (i==0)
    {
      console.log("You have the highest score");
    }
    else
    { console.log("Your score is higher than");
      for(var x=i;x<friends.length;x++)
        {
          console.log(chalk.yellow(friends[x].name));
        }
      console.log("Your score is lower than");
      for(var x=0;x<i;x++)
        {
          console.log(chalk.yellow(friends[x].name));
        }
      
    }
    break;
  }
}

console.log(chalk.blue("~~~~~~THANKS FOR PLAYING~~~~~~~~~"));