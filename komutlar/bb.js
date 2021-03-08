const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
 if (args[0] === 'ayarla') { 
if(!message.member.hasPermission("MANAGE_GUILD")) {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription('**Baybay kanalını ayarlamak için `Sunucuyu Yönet` İznine sahip olmalısın!')
return message.channel.send(embed)
}
let kinal = db.fetch(`baybayK_${message.guild.id}`)
if(db.has(`baybayK_${message.guild.id}`)) {
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setDescription(`**Baybay kanalı <#${kinal}> kanalına ayarlı! Kapatmak için** \`${ayarlar.prefix}bbkanalkapat\``)
return message.channel.send(embed)
}
  
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription(` **Baybay Kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}bbkanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`baybayK_${message.guild.id}`, kanal.id);

const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`**Baybay kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
}

if (args[0] === "kapat") {
  message.channel.send(`BayBay Kanalı kapandı `)
  db.delete(`baybayK_${message.guild.id}`)

}
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['baybaykanal','bb-kanal'],
permLevel: 3
};
exports.help = {
name: 'bbkanal',
description: 'Baybay kanalını ayarlamaya yarar.',
usage: 'bb-kanal-ayarla #kanal'
};