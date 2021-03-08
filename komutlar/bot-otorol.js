const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
  
let bot_role = await db.fetch(`botrol_${message.guild.id}`) || await db.fetch(`botrolk_${message.guild.id}`)
if(bot_role) return message.reply(`:x: Bu sistem zaten aktif durumda. Kapatmak için **${prefix}botrol-kapat**`)

let bot_rol = message.mentions.roles.first()
let bot_kanal = message.mentions.channels.first()
if(!bot_kanal || !bot_rol) return message.reply(`Botrolü Ayarlaman İçin Kanal Ve Rol Belirmelisin.`)
  
db.set(`botrol_${message.guild.id}`,bot_rol.id) 
db.set(`botrolk_${message.guild.id}`,bot_kanal.id)

message.channel.send(`Botrol Aktif Edildi! \n Yeni Gelen Botlara <@&${bot_rol.id}> Rolünü Vereceğim.`)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['bot-rol'],
  permLevel: 0 
};

exports.help = {
  name: 'botrol',
  description: 'Otorol Sistemi - Frenzy Code',
  usage: 'otorol rol kanal'
};