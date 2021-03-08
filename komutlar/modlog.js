const Discord = require('discord.js')
const fs = require('fs');


exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
 
  
  let channel = message.mentions.channels.first()
  
  
    let prefix = db.fetch(`prefix_${message.guild.id}`) || "k!";
    if(args[0] === 'kapat') {
   if (db.has(`mlog_${message.guild.id}`) === true) {
     message.channel.send(`Mod log kanalı başarıyla kaldırıldı`)
     db.delete(`mlog_${message.guild.id}`)
     return
}
  message.channel.send(`Mod log kanalı ayarlanmamış.`)
    return
  
  }

  
    if (!channel) {
        return message.reply('Lütfen bir kanal etiketleyiniz')
    }

    
  
  db.set(`mlog_${message.guild.id}`, channel.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Mod log kanalı ayarlandı: ${channel}\nMod Log kanalını kapatmak isterseniz **${prefix}modlog-kanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log-belirle', 'modlog-kanal'],
    permLevel: 3,
    kategori: "moderasyon",
}

exports.help = {
    name: 'mod-log-ayarla',
    description: 'Moderasyon kayıtları kanalını ayarlar.',
    usage: 'mod-log-ayarla <#kanal>',
}