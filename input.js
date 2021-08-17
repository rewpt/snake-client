const { connect } = require("./client");

let connection;

const handleUserInput = function(key, conn) {
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
  if (!(chatDict[key] === undefined)) {
  conn.write(`Say: ${chatDict[key]}`);
  }
  if (!(moveDict[key] === undefined)) {
    conn.write(moveDict[key]);
  }

}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key, connection);
  });
  
  return stdin;
}

module.exports = {setupInput};