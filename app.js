var tmi = require('tmi.js')
var connection = require('./connection.js')

var client = new tmi.client(connection.options);
client.connect();

client.on("chat", (channel, user, message, self) => {
  if (self) return;

  if (connection.options.channels.includes(channel)) {
    if(message == '~ping') {
      client.say(channel, 'pong.');
    }
  }
});
