const { RichEmbed } = require('discord.js')
exports.run = (Bot, Mesaj, Argüman) => {
  
  const Saniye = Number (Argüman [0])
  
  const Hata = new RichEmbed ()
  .setColor ('#7f0000')
  .setTitle ('Hata!')
  .setFooter (Bot.user.username, Bot.user.avatarURL)
  .setTimestamp ()
  
  const Başarılı = new RichEmbed ()
  .setColor ('#007f00')
  .setTitle ('Başarılı!')
  .setFooter (Bot.user.username, Bot.user.avatarURL)
  .setTimestamp ()
  
  if (!Saniye) {
    Hata.setDescription ('Bir saniye girmelisiniz.')
    Mesaj.channel.send (Hata)
  } else {
    Başarılı.setDescription ('Yavaş mod başarıyla ayarlandı!')
    Mesaj.channel.send (Başarılı)
      
    Mesaj.channel.setRateLimitPerUser (Saniye)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['YavaşMod', 'SlowMode', 'yavaşmod', 'slowmode'],
  permLevel: 0
};

exports.help = {
  name: 'Yavaş Mod'
}