var image1 = document.querySelectorAll("img")[0];
var roll1 = document.querySelector(".roll1")
var roll2 = document.querySelector(".roll2")
var player1 = document.querySelector(".player1")
var player2 = document.querySelector(".player2")
var save = document.querySelector(".save")
var player1score = document.querySelector(".player1score")
var player2score = document.querySelector(".player2score")
var player11 = document.querySelector(".player11")
var player22 = document.querySelector(".player22")
var winner = document.querySelector(".winner")

var count1 = []
var count2 = []
let sum1 = 0
var sum2 = 0
var play1 = []
var play2 = []

roll1.addEventListener("click", function(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage =  "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

image1.setAttribute("src", randomImageSource);
player1.innerHTML +=""

if(randomNumber1 > 1){
  count1.push(randomNumber1)

for (let i = 0; i < count1.length; i++) {
  sum1 += count1[i];
}
player1.innerHTML = sum1
count1 = []
}
console.log(count1)
console.log(sum1)

if(randomNumber1 < 2){
  sum1 = 0
  winner.innerHTML = "player 1 lost"
roll1.style.display = "none"
player11.style.display = "none"
player22.style.display = "none"
}

player1.innerHTML = sum1
count1 = []

save.addEventListener("click", function(){
    play1.push(sum1)
    sum1=" "
    console.log(sum1)
player1score.innerHTML=play1[0]
roll1.style.display = "none"
player11.style.display = "none"
})
})



roll2.addEventListener("click", function(){

 
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage =  "dice" + randomNumber2 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    image1.setAttribute("src", randomImageSource);
    player2.innerHTML +=""
    
    if(randomNumber2 > 1){
      count2.push(randomNumber2)
    for (let i = 0; i < count2.length; i++) {
      sum2 += count2[i];
    }
    
    player2.innerHTML = sum2
    count2 = []
    }
  
    
    if(randomNumber2 < 2){
      sum2 = 0

      winner.innerHTML = "player 2 lost"
roll2.style.display = "none"
player22.style.display = "none"
    }
    
    player2.innerHTML = sum2
    count2 = []


    save.addEventListener("click", function(){
        play2.push(sum2)
        sum2=" "
        console.log(sum2)
    player2score.innerHTML=play2[0]
   
    roll2.style.display = "none"
    player22.style.display = "none"


    if(play1[0]>play2[0]){
        winner.innerHTML = "Player 1 Wins"
            }

            if(play1[0]<play2[0]){
                winner.innerHTML = "Player 2 Wins"
                    }
    })
    })



   