/* DOM handling helper functions */
var byId = function(id) {
  return document.getElementById(id);
};

var onClick = function(id, func) {
  byId(id).onclick = func;
};

var setInnerHTML = function(id, val) {
  byId(id).innerHTML = val;
};

var addToInnerHTML = function(id, val) {
  byId(id).innerHTML += val;
};

var innerHTMLOf = function(id) {
  return byId(id).innerHTML;
};

/* Calculation functions */
var operationElements = function() {
  return innerHTMLOf("res").match(/(\d*)([^\d])(\d*)/).slice(1, 4);
}

var binarySum = function(operand1, operand2) {
  return (operand1 + operand2).toString(2);
};

var binarySub = function(operand1, operand2) {
  return (operand1 - operand2).toString(2);
};

var binaryMul = function(operand1, operand2) {
  return (operand1 * operand2).toString(2);
};

var binaryDiv = function(operand1, operand2) {
  return (operand1 / operand2).toString(2);
};

var computeOperation = function(operands_and_operator) {
  var operand1 = parseInt(operands_and_operator[0], 2);
  var operator = operands_and_operator[1];
  var operand2 = parseInt(operands_and_operator[2], 2);

  switch(operator) {
    case "+":
      return binarySum(operand1, operand2);
    case "-":
      return binarySub(operand1, operand2);
    case "*":
      return binaryMul(operand1, operand2);
    case "/":
      return binaryDiv(operand1, operand2);
    default:
      throw new Error("Unsupported operation");
  }
};

/* Calculator buttons handling */

var computeCalculation = function(){
  var result = "";

  try {
    result  = computeOperation(operationElements());
  } catch (err) {
    console.log("Error fetching operators/calculating");
  }

  setInnerHTML("res", result);
};

var clearResults = function() {
  setInnerHTML("res", "");
};

var addToResults = function(val) {
  addToInnerHTML("res", val);
};

onClick("btnClr", clearResults);

onClick("btn0", function(){ addToResults(0) });
onClick("btn1", function(){ addToResults(1) });
onClick("btnSum", function(){ addToResults('+') });
onClick("btnSub", function(){ addToResults('-') });
onClick("btnMul", function(){ addToResults('*') });
onClick("btnDiv", function(){ addToResults('/') });

onClick("btnEql", computeCalculation);
