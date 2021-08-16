const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: zev");
    setTimeout(() => {conn.write("Move: up");}, 2000);
    setTimeout(() => {conn.write("Move: left");}, 4000);
    setTimeout(() => {conn.write("Move: left");}, 5000); 
    setTimeout(() => {setInterval(() => {conn.write('Move: down')}, 1000)}, 6000);
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = connect;