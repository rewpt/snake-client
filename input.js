const { connect } = require("./client");
const { exit, chatDict, moveDict } = require('./constants')

let connection;

const handleUserInput = function(key, conn) {

  if (!(chatDict[key] === undefined)) {
  conn.write(`Say: ${chatDict[key]}`);
  }
  if (!(moveDict[key] === undefined)) {
    conn.write(moveDict[key]);
  }
  if (key === exit) {
    process.exit();
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