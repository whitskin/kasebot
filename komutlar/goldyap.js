const db = require('quick.db')
const Discord = require('discord.js')
var ayarlar = require('../ayarlar.json');
//const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 let cevap = args[0]
 let nesne = args[1]
 if(!cevap) return message.channel.send("al ya da ver secegini ekleyin ")
 if(args[0] === "ver" ) {
  
 // let nesne = args[1] 
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`gold_${nesne}`, 'gold')
  
  message.channel.send(`**${bot.users.get(nesne).tag}** Adli kullanıcı artık **GOLD Üye** oldu!`)
 }
  if (cevap === "al"){
    if (!nesne) return message.channel.send("Alcağın kişinin idini yaz")
    db.delete(`gold_${nesne}`)
    message.channel.send(`${bot.users.get(nesne).tag} gold luk tan alındı`)
    
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g'],
  permLevel: 5
};
exports.help = {
  name: 'gold',
  description: '[Admin Komutu]',
  usage: 'gold-ver <ID>'
};