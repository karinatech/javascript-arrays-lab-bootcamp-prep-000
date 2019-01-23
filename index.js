var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(){
  kittens.push("Ralph");
  return kittens;
}
function addName(){
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield");
  return kittens;
}
