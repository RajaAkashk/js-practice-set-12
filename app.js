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

