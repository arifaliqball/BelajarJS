//console.log("Hello world")
//alert("Notifikasi")
//prompt("Pinjam seratus")

//var Promnet = "Coding is Easy"
//console.log(Promnet)
//var promnet = "Coding not Easy"
//console.log(Promnet)

//let Promnet = "Coding is Easy"
//console.log(Promnet)
//Promnet = "Coding not Easy"
//console.log(Promnet)

// const Promnet = "Coding is Easy"
// console.log(Promnet)
// Promnet = "Coding not Easy"
// console.log(Promnet)

// let totalPoin = prompt("Masukkan Poin Anda")
//     if(totalPoin > 1000){
//         document.write("<h1>Congratulation</h1>");
//     }
//     else{
//         document.write("<h1>Thank You</h1>");
//     }

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("a: true");
// } else {
//   console.log("a: false");
// }

// if (x < 10 && y < 1) {
//   console.log("b: true");
// } else {
//   console.log("b: false");
// }

// if (x == 5 || y == 5) {
//   console.log("c: true");
// } else {
//   console.log("c: false");
// }

// if (x == 6 || y == 5) {
//   console.log("d: true");
// } else {
//   console.log("d: false");
// }

// if (!(x == y)) {
//   console.log("e: true");
// } else {
//   console.log("e: false");
// }

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerText = isi
// })

let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', function () {
    let isi = input.value;
    if (isi) {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        taskContainer.style.display = "flex"; 
        taskContainer.style.alignItems = "center"; 

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                taskText.style.textDecoration = "line-through";
            }
            else {
                taskText.style.textDecoration = "none";
            }
        });

        const taskText = document.createElement("span");
        taskText.classList.add("task-text");
        taskText.innerText = isi;
        taskText.style.flex = "1"; 

        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function () {
            taskText.style.textDecoration = "none";
        });

        checkbox.style.marginRight = "10px";
        removeButton.style.marginRight = "1000px";

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskText);
        taskContainer.appendChild(removeButton);

        document.body.appendChild(taskContainer);

        input.value = "";
    }
});