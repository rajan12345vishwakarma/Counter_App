const decrementValue = document.getElementById("decrement");
const incrementValue = document.getElementById("increment");
const resetValue = document.getElementById("reset");
const displaValue = document.getElementById("displayvalue");

decrementValue.addEventListener("click", () => {
    const value = Number(displaValue.innerText);
    if (value > 0) {
        displaValue.innerText = value - 1;
    }
    else {
        alert("negative value is not allowed");
    }
});
incrementValue.addEventListener("click", () => {
    const value = Number(displaValue.innerText);
    if (value >= 10) {
        alert("above 10 value is not allowed");
    }
    else {
        displaValue.innerText = value + 1;
    }
});
resetValue.addEventListener("click", () => {
    displaValue.innerText = 0;
});