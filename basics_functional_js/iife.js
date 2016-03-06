var captcha_check = {
  actual_captcha: Math.floor(Math.random(100)*Math.pow(10, 5)),

  check: function(guess){
    if(guess === this.actual_captcha){
      console.log("You have written it correctly.");
    } else {
      console.log("You have written it incorrectly.");
    }
  }
};
