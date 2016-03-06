function vowelsAndConsonants(s) {
  var vowels = new Array('a','e','i','o','u');

  for(letter of s) {
    if(vowels.indexOf(letter) != -1) {
      console.log(letter);
    }
  }

  for(letter of s) {
    if(vowels.indexOf(letter) == -1) {
      console.log(letter);
    }
  }
}
