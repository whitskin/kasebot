const Discord = require('discord.js');

exports.run = function(client, message, args) {

  message.channel.send(client.commands.size || 0)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'komut-sayı'
};