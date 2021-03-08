const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Yeterli Yetkin yokmuş gibi görünüyor.`);
  const sayacsayisi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanali = message.mentions.channels.first()
  

        
  if(!args[0]) {
    message.channel.send('**<a:source:725449502160454206> | Ayarlamak istediğin sayı girmelisin. k!sayaç 10 #sayaç**')
    return
  }
  
  if(!sayackanali) {
    message.channel.send('**<a:source:725449502160454206> | Ayarlamak istediğin kanalı girmelisin. ``k!sayaç 10 #sayaç``**')
  }
  
  
  if(args[0] === "kapat") {
    if(!sayacsayisi) {
      message.channel.send(`**<a:evt2:725449509538234472> | Ayarlanmayan şeyi sıfırlayamazsın.**`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`**<a:evt2:725449509538234472> | Sayaç başarıyla sıfırlandı.| Tekrar açmak için: \`k!sayaç <HedefSayı> <#YazıKanalı>**`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(` Örnek kullanım: k!sayaç <HedefSayı> <#YazıKanalı>`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`**<a:source:725449502160454206> | Sunucudaki kullanıcı sayısından yani (${message.guild.members.size}) sayısından daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanali.name)
  
  message.channel.send(`**<a:evt2:725449509538234472>  | Sayaç \`${args[0]}\` olarak ayarlandı! | Sayaç kanalı ${sayackanali} olarak ayarlandı.| Sayaç komudunu kapatmak için e!sayaç kapat yazınız!**`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
    permLevel: 0
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayaç Komududur.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}