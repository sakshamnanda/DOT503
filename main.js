import sum from './sum.js';

window.onload = function() {
    let submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", function() {
        let value1 = parseInt(document.getElementById("value1").value);
        let value2 = parseInt(document.getElementById("value2").value);
        alert("Your sum is: " + sum(value1, value2));
    });
};