var btn5 = document.getElementById("btn5");

var getButtonTextAt = function(position) {
  return document.getElementById("btn" + position).innerHTML;
};

var setButtonTextAt = function(position, value) {
  document.getElementById("btn" + position).innerHTML = value;
};

btn5.onclick = function () {
  var indexOrder = [1,2,3,6,9,8,7,4];

  var valueAtLastIndex = getButtonTextAt(indexOrder[indexOrder.length - 1]);

  for(var j = indexOrder.length - 2; j >= 0; j--) {
    var index = indexOrder[j];
    var previousIndex = indexOrder[j + 1]

      setButtonTextAt(previousIndex, getButtonTextAt(index));
  }

  setButtonTextAt(indexOrder[0], valueAtLastIndex);
}