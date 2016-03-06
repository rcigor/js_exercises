function myFilter(my_array, isEvenNumber){
  var filteredArray = [];

  for(var str of my_array) {
    var num = parseInt(str);

    if(isEvenNumber(num)) {
      filteredArray.push(num);
    }
  }
  return filteredArray;
}
