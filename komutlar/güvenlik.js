const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message) => {
   let c = message.mentions.channels.first()
   if (!c) return message.channel.send('Lütfen Bir Kanal Etiketleyiniz.')
   db.set(`malpro_${message.guild.id}`, c.id)
   message.channel.send('**Güvenlik kanalı başarıyla ayarlandı.**')
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 3
};

module.exports.help = {
  name: 'güvenlik',
  description: 'guvenlik',
  usage: 'güvenlik-ayarla'
};