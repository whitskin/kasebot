const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message) => {
   db.delete(`malpro_${message.guild.id}`)
   message.channel.send('G**üvenlik Sistemi Kapandı.**')
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 3
};

module.exports.help = {
  name: 'güvenlik-kapat',
  description: 'guvenlik',
  usage: 'güvenlik-ayarla'
};