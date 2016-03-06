var btn = document.getElementById("btn");

btn.onclick = function() {
    var currentValue = parseInt(btn.innerHTML);
    btn.innerHTML = currentValue + 1;
};