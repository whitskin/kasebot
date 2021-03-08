const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
 // if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **yönetici** yetkisine sahip olmalısın.")
let dwonzy = args[0]
if(dwonzy !== "aç" && dwonzy !== "kapat") return message.channel.send("Lütfen **aç** veya **kapat** yaz.")
if(dwonzy === "aç"){
  let miran = db.fetch(`bankoruma_${message.guild.id}`)
  if(miran) return message.channel.send("Ban koruma zaten aktif.")
  let kanal = message.mentions.channels.first()
  if(!kanal) return message.channel.send("Lütfen bir kanal etiketle. ")
  message.channel.send("Ban koruma başarıyla aktif edildi log kanalı ise "+kanal+" olarak ayarlandı.")
  db.set(`bankoruma_${message.guild.id}`, kanal.id)
}
if(dwonzy === "kapat"){
  let miran = db.fetch(`bankoruma_${message.guild.id}`)
  if(!miran) return message.channel.send("Ban koruma zaten kapalı.")
  message.channel.send("Ban koruma başarıyla kapatıldı.")
  db.delete(`bankoruma_${message.guild.id}`)
}  
  

};   

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bankoruma", "bank"],
  permLevel: 4
};

exports.help = { 
  name: 'ban-koruma', 
  description: 'Belirtilen miktarda mesajı temizler. (Sınırsız)',
  usage: 'temizle <miktar>',
  kategori: 'kullanıcı'
};
