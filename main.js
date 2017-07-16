function c(val){
  document.getElementById('display').value = val;
}
function math(val){
  document.getElementById('display').value += val;
}
function e(){
  c(eval(document.getElementById('display').value));
}
