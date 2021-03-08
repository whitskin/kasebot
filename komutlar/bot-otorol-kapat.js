const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {

db.delete(`botrol_${message.guild.id}`)
db.delete(`botrolk_${message.guild.id}`)


    message.channel.send("Bot-Rol Sistemi Başarıyla Kapatıldı.")
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botrol-kapat"],
  permLevel: 3
};

exports.help = {
  name: 'bot-rol-kapat',
  description: 'Çekiliş yapar.',
  usage: 'çekilişyap'
};