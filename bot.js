var Discordie = require("discordie");

const Events = Discordie.Events;
const client = new Discordie();

client.connection({
  token: 'Mjg1MzEzNDQ1NzQwNjc1MDcz.C6J-Tw.hmKQhDZKLBxcOVZC1a99i3UPFxg'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == 'PING')  {
    e.message.channel.sendMessage('PONG');
  }
});
