const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args, member) {

db.delete(`fakekanal_${member.guild.id}`)
db.delete(`fakerol_${member.guild.id}`)
db.delete(`fake_${member.guild.id}`)


    message.channel.send("**Fake Hesap Sistemi Başarıyla Kapatıldı.**")
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'fake-hesap-kapat',
  description: 'Çekiliş yapar.',
  usage: 'çekilişyap'
};