const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");



right.addEventListener("click", e =>{
    e.preventDefault();
    itemsList.appendChild(itemsList.firstElementChild);
})

    left.addEventListener("click", e =>{
        e.preventDefault();
        itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);

})

//2

// const loop = (derection, b) => {
//     b.preventDefault();

//     if (derection == "right") {
//         itemsList.appendChild(itemsList.firstElementChild);
//     } else {
//         itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
//     }
// };


// right.addEventListener("click", b =>{
//     loop (right, b);
// })

// left.addEventListener("click", b =>{
//     loop (left, b);
// })