window.onload = function() {
    let submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", function() {
        if (document.getElementById("answer").value == 2) {
            alert("Correct answer!");
        } else {
            alert("Wrong answer!");
        }
    });
};