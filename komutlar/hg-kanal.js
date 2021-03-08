const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
//f(!message.member.hasPermission("MANAGE_GUILD")) {
  if(args[0] === 'kapat') {
   if (db.has(`hgkK_${message.guild.id}`) === true) {
     message.channel.send(`Hoşgeldin kanalı başarıyla kaldırıldı`)
     db.delete(`hgK_${message.guild.id}`)
     return
}
  message.channel.send(`Hoşgeldin kanalı ayarlanmamış.`)
    return
  
  }
 /* const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription('**Hoşgeldin kanalını ayarlamak için `Sunucuyu Yönet` İznine sahip olmalısın!')
return message.channel.send(embed)
}*
let kinal = db.fetch(`hgK_${message.guild.id}`)
if(db.has(`hgK_${message.guild.id}`)) {
const embed = new Discord.RichEmbed()
.setColor('BLUE')
.setDescription(`**HG kanalı <#${kinal}> kanalına ayarlı! Kapatmak için** \`${ayarlar.prefix}hgkanalkapat\``)
return message.channel.send(embed)
}*/
  
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription(`**Hoşgeldin kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}bbkanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`hgK_${message.guild.id}`, kanal.id);

const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`**Hoşgeldin kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['hoşgeldinkanal','hg-kanal'],
permLevel: 3
};
exports.help = {
name: 'hgkanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'hg-kanal-ayarla #kanal'
};