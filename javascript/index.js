// document.getElementById("counter").innerText = 5;

// let count = 0;

// console.log(count);

// let myAge = 21;

// console.log(myAge);


// let myAge = 21;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints += 50;
// console.log(bonusPoints);
// bonusPoints -= 75;
// console.log(bonusPoints);
// bonusPoints += 45;
// console.log(bonusPoints);

// let count = 0;
// let message = "";
// const increment = () => {
//     document.getElementById("counter").innerHTML = ++count;
// }

// function save() {
//     message = count + " - ";
//     document.getElementById("save-counter").innerHTML = document.getElementById("save-counter").innerHTML + message;
//     count = 0;
//     document.getElementById("counter").innerHTML = count;
// }

// document.getElementById("welcome").innerHTML = document.getElementById("welcome").innerHTML + " Moeed";  

// let num1 = 0;
// let num2 = 0;
// let num = 0;
// const add = () => {
//     num1 = document.getElementById("first_num").textContent;
//     num2 = document.getElementById("second_num").textContent;
//     num = num1 + num2;
//     display();
// }

// const sub = () => {
//     num1 = (int) (document.getElementById("first_num").textContent);
// //     num2 = (int) (document.getElementById("second_num").textContent);
// //     num = num1 - num2;
// //     display();
// // }

// const mul = () => {
//     num1 = document.getElementById("first_num").textContent;
//     num2 = document.getElementById("second_num").textContent;
//     num = num1 * num2;
//     display();
// }

// const div = () => {
//     num1 = document.getElementById("first_num").textContent;
//     num2 = document.getElementById("second_num").textContent;
//     num = num1 / num2;
//     display();
// }

// function display() {
//     document.getElementById("result").innerHTML = num;
//     document.getElementById("first_num").innerHTML = 0;
//     document.getElementById("second_num").innerHTML = 0;
// // }

// let total = 0;
// let random = 0;
// let cards = [];

// const startGame = () => {
//     if(total > 21){
//         document.getElementById("cong").textContent = "Oops you lost!";
//         // document.getElementById("start").se
//     }else if(total == 21) {
//         document.getElementById("cong").textContent = "Congrats You won";
//     }else {
//         document.getElementById("cong").textContent = "Draw another card";
//     }
// }

// const drawCard = () => {
//     generateRandom();
//     cards.push(random);
//     displayCards();
//     total += random;
//     document.getElementById("sum").textContent = "Sum: " + total;
// }

// const generateRandom = () => {
//     random = Math.floor(Math.random() * 11) + 1; 
// }

// function displayCards(){
//     document.getElementById("cards").textContent = "Cards: ";
//     for(let i = 0; i < cards.length; i++){
//         document.getElementById("cards").textContent += cards[i] + " ";
//     }
// }


// let person = {
//     name: "Abdul Moeed",
//     age: 21,
//     country: "Pakistan",
//     logData: function() {
//             console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
//     }
// }

// person.logData();

let mylead = []
const inp = document.getElementById("input-el");
const inpBtn = document.getElementById("input-btn");
const list = document.getElementById("list");
let items = "";
const saveBtn = document.getElementById("sve-btn");
inpBtn.addEventListener("click", function(){
    mylead.push(inp.value);
    inp.value = "";
    localStorage.clear();
    localStorage.setItem("1", JSON.stringify(mylead));
    init();
})

const getAllItems = () => {
    items = "";
    for(let i = 0; i < mylead.length; i++){
        items +=  `<li>
                        <a target='_blank' href = '${mylead[i]}'>${mylead[i]}</a>
                    </li>`;
    }
}


const init = () => {
    let leads = localStorage.getItem("1");
    if(leads){
        mylead = JSON.parse(leads);
        getAllItems();
        list.innerHTML = items;
    }
}

const deleteAll = () => {
    mylead = [];
    localStorage.setItem("1", JSON.stringify(mylead));
    init();
}

document.getElementById("delete-btn").addEventListener("click", function() {
    deleteAll();
})

saveBtn.addEventListener("click", function(){
    console.log("tab clicked")
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        // mylead.push(tabs[0].id);
        localStorage.clear();
        localStorage.setItem("1", JSON.stringify(mylead));
        init();
    })
})

init();