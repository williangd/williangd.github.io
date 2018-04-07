var rollButton = document.getElementById("roll");
var options = document.getElementsByClassName("option");
var optionPicked;
var langButtons = document.querySelectorAll('.lang button');
var br = ['Beba', 'Dose dupla', 'Beba', 'Jogue novamente', 'Beba', 'Passe a vez', 
          'Beba', 'Beba e jogue', 'Beba', 'Jogue novamente', 'Beba', 'Passe a vez' ];
var en = ['Have a shot', 'Double shot', 'Have a shot', 'Play again', 'Have a shot', 'Miss a turn',
          'Have a shot', 'Drink and play', 'Have a shot', 'Play again', 'Have a shot', 'Miss a turn']

langButtons[0].addEventListener("click", function() {
  setLanguague('en')
})

langButtons[1].addEventListener("click", function() {
  setLanguague('br')
});

setLanguague('en')


rollButton.addEventListener("click", function() {
  rollButton.setAttribute("disabled", "true");
  rollButton.style.backgroundColor = "pink";
  for(var i = 0; i < options.length; i++) {
    options[i].removeAttribute("id", "selected");
  }

  var times = random(5);
  var repeater = setInterval(function() {
    optionPicked = mark();
    setTimeout(dismark, 500, optionPicked);
    times--;
    if(times <= 0) {
      endRoll(repeater);
    }
  }, 1000);
});

function endRoll(repeater) {
  clearInterval(repeater);
  setTimeout(mark, 1000);
  setTimeout(function() { 
    rollButton.removeAttribute("disabled");
    rollButton.style.backgroundColor = "red"; 
  }, 1500);
}

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function mark() {
  var num = random(13);
  num = num === 0 ? num : num - 1;
  optionPicked = options[num];
  optionPicked.setAttribute("id", "selected");
  return optionPicked;
}

function dismark(optionPicked) {
  optionPicked.removeAttribute("id", "selected");
}

function setLanguague(lang) {
  if(lang === 'br') {
    setText('Jogar', br);
  } else {
    setText('Play', en);
  }
}

function setText(buttonText, lang) {
  rollButton.textContent = buttonText;
  for(var i = 0; i < options.length; i++) {
    options[i].textContent = lang[i];
  }
} 