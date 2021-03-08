const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args, member) {


db.set(`fake_${message.guild.id}`, "açık")


    message.channel.send("**Fake Hesap Sistemi Başarıyla Açıldı.**")
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'fake-hesap-ceza-aç',
  description: 'Çekiliş yapar.',
  usage: 'çekilişyap'
};