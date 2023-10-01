/*console.log("hello");
let line1 = "Once upon a time ";
let line2 = "there was a big dog ";
let line3 = "called Bob.";
let ourStory = line1 + line2 + line3;
console.log(ourStory);

let myValue = 1;
if(myValue>2){console.log("That's correct")} else {console.log("you're wrong")};

let youLikeCake = false;
if(youLikeCake === true){console.log("Yum Yum")} else {console.log("I hate cake")};

const age = 20;
console.log(age);

let number = 1;
while (number <6){
    console.log(number);
number++;};

for(i=1; i<=5; i+=2){console.log(i);}


for(let i=1; i <=23; i++){
    if(i == 4 || i == 9 || i == 13)  continue;
    console.log("Your ID is " + i)};

   for (let i =1; i<=4; i++){
    for(let j = 1; j<=5; j++){console.log("Week " + i + " " + "Day " + j)};
   } ;

   let cartCost = 0.00;
   let foodChoice = prompt("what item would you like?");
   let numberOf = prompt("how many?");
   console.log("You have chosen " + numberOf + " " + foodChoice);
   
   function greet(name){console.log("Hello" + name)};
   greet(Katie);

   function add (a, b){
    const result = a+b;
    return result;
   }

   console.log("total is " + add(1,2));*/



   /*function add(firstNumber, secondNumber, thirdNumber){
    const sumToDo = firstNumber + secondNumber + thirdNumber;
    return sumToDo;

}

function calcAndDisplay(addThreeNumbers){
    let total = addThreeNumbers;
    console.log("the answer is " + total);
}
calcAndDisplay(add(1,2,3));

//ALTERNATIVE METHOD
function calculateAndDisplay(){
   const sumT = "1 + 2 + 3";
   alert("the sum is " + sumT);
   const result2 = add(1,2,3);
   return result2;
  
}

console.log("the answer is " + calculateAndDisplay());

let currentBalance = 0;

function showBalance (){
    console.log("Your current balance is " + currentBalance);
}


function deposit (amount){
    currentBalance = currentBalance + amount;
    console.log("You've deposited " + amount + ". Your new balance is " +  currentBalance );
}

function withdraw(amount){
    if(currentBalance>amount){
        currentBalance = currentBalance - amount;
        console.log("You've withdrawn " + amount + ". Your new balance is " + currentBalance)
    }else{console.log("Your balance isn't high enough to withdraw " + amount)}
}

showBalance();
deposit(50);
withdraw(15);
deposit(30);
withdraw(100);

const fruits = ["a", "b", "c"];

function findFruit (myFruit){
    for (let index = 0; index <fruits.length;index++){
        if (fruits[index]=== myFruit){
            console.log(myFruit + "is in the array")}else{console.log("fruit not found")}
    }
};

findFruit("d");

const fruits = ["a", "b", "c"];

function findFruit (myFruit){
    for (let index = 0; index <fruits.length;index++) {

        if (fruits[index]=== myFruit){
            return `Found the fruit: ${myFruit}, in the list!`;
        }      
    }
    return `Did not find the fruit: ${myFruit}, in the list`;
}

console.log(findFruit("b"));*/



/*const fruits = ["apple", "banana", "cherry", "date"];

function findFruit(desiredFruit) {
  for (let i = 0; i < fruits.length; i++) {
    
    if (desiredFruit === fruits[i]) {
      return `Found the ${desiredFruit} in the list!`;
    }
  }

  return `${desiredFruit} is not in the list.`;
}

console.log(findFruit("apple"));
console.log(findFruit("Watermelon"));*/

//objects

/*const pet = {
    name: "tiptoes",
    animal: "dog",
    age: 7,
    sound: "woof",
    favSnacks:["choc", "apple"],
    speak: function(){console.log("bark, bark")}
};

console.log(pet);
console.log(pet.animal);
console.log(pet.favSnacks[1]);
console.log(pet.speak());

let propertyName = "sound";
console.log(pet[propertyName]);

let num1 = 10;
let num2 = num1; //gives only a copy of 10 to num2 (they DON'T become to same)
num1 = 20;

console.log(num1);  //gives 20
console.log(num2);  //gives 10

let original = {
    name: "Katie"
}

let copy = original; // these DO become the same as they're objects

original.name = "Bob";

console.log(original); //gives Bob
console.log(copy);  //gives Bob*/

/*let team9 = {
    member1: {
        name: "katie",
        age: 6,
        height: 178,
        favouriteSongs: ["buttercup", "Hit Me Baby One More Time"],
        likesCake: true, 
    },
    member2: {
        name: "Taimoor",
        age: 43,
        height: 188,
        favouriteSongs: ["team spirit", "Always on mind"],
        likesCake: true, 
    },
    member3: {
        name: "Maria",
        age: 7,
        height: 158,
        favouriteSongs: ["Macarena", "BabyShark"],
        likesCake: false, 
    },
};

//log a nested key
//console.log(team9.member1.age,team9.member2.age,team9.member3.age, );

//console.log(team9.member2.favouriteSongs[1]);


/*for (let key in team9){

    console.log(key);
};

/*for (let key in team9){
    console.log(key[0]);
}


for (let key in team9){
    console.log(team9[key].age);
};*/


/*let tamagotchi = [
    {name: "maria",age:21},
    {name:"katie", age:22}
];
console.log(tamagotchi[1]["age"]);*/

/*console.log({}==={});*/

/*let newName = prompt("What's your pet's name?");
 
{age: 11, age2: 12, age3: 13},
    {time: 17, time2: 23, time3:43}


tamagotchi.name = newName;
console.log(tamagotchi);


alert(`My name is ${tamagotchi.name}. 
    My hunger is ${tamagotchi.hunger}. 
    My happiness is ${tamagotchi.happiness}. 
    My energy is ${tamagotchi.energy}`) 

while(tamagotchi.energy >0 && tamagotchi.happiness >0 && tamagotchi.hunger >0 && tamagotchi.hunger < 100){
    alert(`Well done! Your pet is still alive!`);}
alert(`Your pet just died`);*/



//alert("Welcome to Katie's page! 👋");

/*const cat = {
    name: "tiptoes",
    type: "dog",
    age: 7,
    sound: "woof",
    foods: [{brand: "p", type: "dry"}, {brand:"fe", type: "wet"}]
    };


    console.log(cat["foods"][1].type); // gives "wet"
*/
  
 /*function sound(){
    var snd = new
    Audio('brassSound.mp3')
    snd.play()
}; */

/*let count = 0;
function countNumberOfNinesInNumber(number) {
    
    number = number.toString()
    for (let i = 0; i < number.length; i++) {
      
      const digit = number[i];
      if ("9" === digit) {
        count++;
      }
      
    }
    return count;
  }
 
  
  console.log(countNumberOfNinesInNumber(99989));*/

  

