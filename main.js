let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

let evaluateArray = [];

let num = document.querySelectorAll('.num');

for (i = 0; i < num.length; i++) {
  num[i].addEventListener('click', function(stuff){
    let trueNumValue = parseInt(stuff.target.value);
    evaluateArray.push(trueNumValue);
    document.getElementById('display').value += stuff.target.value;
  })
};

add.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '+';
  evaluateArray.push('+');
});
subtract.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '-';
  evaluateArray.push('-');
});
multiply.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '*';
  evaluateArray.push('*');
});
divide.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '/';
  evaluateArray.push('/');
});


equals.addEventListener('click', function(stuff) {
  let a = evaluateArray[0];
  let b = evaluateArray[2];
  if (evaluateArray[1] === '+') {
    var results = a + b;
  } else if (evaluateArray[1] === '-') {
    var results = a - b;
  } else if (evaluateArray[1] === '/') {
    var results = a / b;
  } else if (evaluateArray[1] === '*') {
    var results = a * b;
  }
  document.getElementById('display').value = results;
});

clear.addEventListener('click', function(stuff) {
  document.getElementById('display').value = '';
  evaluateArray = [];
});
