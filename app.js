console.log("A5.10_HW_1")
console.log("---- ---- ----")
console.log("Exercise 1")


const cricketScores=[

  {
    cricketer:"Virat",
    edenGardens:72,
    wankhedeStadium:88,
    ferozShahKotla:45,
    chepauk:74
  },

  {
    cricketer:"Rohit",
    edenGardens:64,
    wankhedeStadium:41,
    ferozShahKotla:68,
    chepauk:34
  },
  {
    cricketer:"Shikhar",
    edenGardens:54,
    wankhedeStadium:38,
    ferozShahKotla:72,
    chepauk:44
  },
  {
    cricketer:"Rishab",
    edenGardens:22,
    wankhedeStadium:27,
    ferozShahKotla:34,
    chepauk:51
  }
  
]

console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

for(let i=0; i<cricketScores.length; i++){
  console.log("Cricketer: "+cricketScores[i].cricketer + "\n" + "Eden Gardens: " + cricketScores[i].edenGarden + "\n" + "Wankhede Stadium: " + cricketScores[i].wankhedeStadium + "\n" + "Feroz Shah Kotla: " + cricketScores[i].ferozShahKotla + "\n" +"Chepauk: " +  cricketScores[i].chepauk+ "\n")
}

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

const chinnaswamyStadiumScores = [54, 82, 49, 45]

for(let i=0; i<cricketScores.length; i++){
  
  cricketScores[i].chinnaswamyStadium = chinnaswamyStadiumScores[i];

}
console.log("Updated cricket Scores: ",cricketScores)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("2.1")
console.log("---- ---- ----")

const klScore={
  cricketer:"Kl Rahul",
    edenGardens:34,
    wankhedeStadium:56,
    ferozShahKotla:42,
    chepauk:31,
    chinnaswamyStadium:68
}

console.log("KL Rahul Score: ",klScore)

console.log("---- ---- ----")
console.log("2.2")
console.log("---- ---- ----")

cricketScores.push(klScore);

console.log("Updated with KL Rahul Scores: ",cricketScores)

console.log("---- ---- ----")
console.log("2.3")
console.log("---- ---- ----")

for(let i=0; i<cricketScores.length; i++){

  let totalScores = cricketScores[i].edenGardens + cricketScores[i].wankhedeStadium + cricketScores[i].ferozShahKotla + cricketScores[i].chepauk + cricketScores[i].chinnaswamyStadium 

cricketScores[i].totalScore = totalScores;
  
}

console.log("Updated with total score of each cricketer: ", cricketScores)

console.log("---- ---- ----")
console.log("2.4")
console.log("---- ---- ----")

for(let i=0 ; i<cricketScores.length ; i++){
const totalmatches=5;
  
  let avgScore = cricketScores[i].totalScore / totalmatches

cricketScores[i].averageScore = avgScore;
  
}

console.log("Updated Cricketer Score with average score: ", cricketScores)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

for(let i=0; i<cricketScores.length; i++){
  console.log("==== " + "Score Card for " + cricketScores[i].cricketer +" ==== " + "\n" + "Eden Gardens: " + cricketScores[i].edenGardens  +"\n" + "Wankhede Stadium: " + cricketScores[i].wankhedeStadium + "\n" + "Feroz Shah Kotla: " + cricketScores[i].ferozShahKotla + "\n" + "Chepauk: " + cricketScores[i].chepauk + "\n" + "Chinnaswamy Stadium: " + cricketScores[i].chinnaswamyStadium + "\n" +"-----"+"\n" + "Total: " + cricketScores[i].totalScore + "\n" + "Average: " +cricketScores[i].averageScore + "\n" + "performance: " + performance(cricketScores[i].averageScore) + "\n" + "---- ---- ----" + "\n")
}

function performance(avg){

if(avg >= 80){
  return "Good"
}
else if(avg >= 60 && avg <= 79){
    return "Above Average"
  } 
  else if(avg >= 45 && avg <= 59){
    return "Average" 
  } 
  else{
    return "Bad"
  }
}

console.log("A5.10_HW_2")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

const foodTracker=[

  {
    day:"Monday",
    breakfast:300,
    lunch:300,
    snack:150,
    dinner:500
  },

  {
    day:"Tuesday",
    breakfast:250,
    lunch:450,
    snack:200,
    dinner:550
  },

  {
    day:"Wednesday",
    breakfast:350,
    lunch:550,
    snack:100,
    dinner:700
  },

  {
    day:"Thursday",
    breakfast:400,
    lunch:600,
    snack:180,
    dinner:650
  },

  {
    day:"Friday",
    breakfast:280,
    lunch:480,
    snack:120,
    dinner:580
  },

  {
    day:"Saturday",
    breakfast:320,
    lunch:520,
    snack:160,
    dinner:620
  },

]

console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

for(let i=0 ; i<foodTracker.length; i++){
  console.log(
   "Day: " + foodTracker[i].day + "\n" + "Monday: " + foodTracker[i].breakfast + "\n" + "Lunch: "+foodTracker[i].lunch +"\n"+ "Snack: "+ foodTracker[i].snack +"\n" + "Dinner: "+ foodTracker[i].dinner + "\n" 
  )
}

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

const midAfternoonCalories = [100, 120, 105, 110, 100, 130]

for(let i=0; i<foodTracker.length; i++){
  foodTracker[i].midAfternoon= midAfternoonCalories[i];
}

console.log("Updated Food Tracker with Mid Afternoon Calories: ", foodTracker)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")
console.log("---- ---- ----")

const sundayCalorie={
  day:"Sunday",
    breakfast:350,
    lunch:430,
    snack:140,
    dinner:530,
    midAfternoon:150
}
console.log("Calories Consume on Sunday: ",sundayCalorie)


console.log("---- ---- ----")
console.log("2.2")
console.log("---- ---- ----")

foodTracker.push(sundayCalorie);

console.log("Fodd Tracker with Sunday calories: ",foodTracker)

console.log("---- ---- ----")
console.log("2.3")
console.log("---- ---- ----")

for(let i=0; i<foodTracker.length; i++){

let totalCalorie = foodTracker[i].breakfast + foodTracker[i].lunch + foodTracker[i].snack 
 + foodTracker[i].dinner + foodTracker[i].midAfternoon

  foodTracker[i].totalCalorie = totalCalorie;
}

console.log(foodTracker)


console.log("---- ---- ----")
console.log("2.4")
console.log("---- ---- ----")

for(let i=0; i<foodTracker.length; i++){

  const totalNumOfMeals= 5
  
  let avgCalorie = foodTracker[i].totalCalorie / totalNumOfMeals;


  foodTracker[i].averageCalorie = avgCalorie;
}

console.log(foodTracker)


console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

for(let i=0; i<foodTracker.length; i++){
  console.log(
    "===== Calorie Card for " + foodTracker[i].day + " =====" + "\n" + "Breakfast: " + foodTracker[i].breakfast + "\n" + "Lunch: " + foodTracker[i].lunch + "\n" + "Snack: " + foodTracker[i].snack + "\n" + "Dinner: " +foodTracker[i].dinner
+ "\n" + "Mid Afternoon: " + foodTracker[i].midAfternoon + "\n" +"-----" + "\n" + "Total: " +foodTracker[i].totalCalorie + "\n" + "Average: " + foodTracker[i].averageCalorie + "\n" + "Comment: " + Comment(foodTracker[i].totalCalorie)+"\n"+ "---- ---- ----" +"\n" )
}

function Comment(value){
  if(value <= 1550){
    return "Your calorie intake was within limits."
  }
  else {
      return "Your calorie intake was higher than recommended."
    }
}