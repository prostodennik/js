const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computeddStyles = getComputedStyle(items);

rightBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let currentRight = parseInt(computeddStyles.right)

    if (currentRight < 500) {
        items.style.right = `${currentRight + 100}px`;
    }
});

leftBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let currentRight = parseInt(computeddStyles.right);

    if (currentRight > 0) {
        items.style.right = `${currentRight - 100}px`;
    }
});

