const IP = 'localhost';
const PORT = 50541;
const chatDict = {
  1 : "What a great game",
  2 : "I love snake too",
  3 : "GG",
}
const moveDict = {
  w : "Move: up",
  a : "Move: left",
  s : "Move: down",
  d : "Move: right"

}
const exit = '\u0003';

module.exports = {
  IP,
  PORT,
  chatDict,
  moveDict,
  exit
}



